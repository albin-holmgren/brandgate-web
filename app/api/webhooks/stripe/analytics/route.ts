import { NextResponse } from 'next/server'
import { createHmac } from 'crypto'

// This webhook is SEPARATE from the checkout webhook
// It handles analytics/revenue tracking only and won't affect subscription processing

// Verify Stripe webhook signature without the stripe package
function verifyWebhookSignature(payload: string, signature: string, secret: string): any {
  const elements = signature.split(',')
  const signatureHash = elements.find(el => el.startsWith('v1='))?.replace('v1=', '')
  
  if (!signatureHash) {
    throw new Error('Invalid signature format')
  }
  
  const expectedHash = createHmac('sha256', secret)
    .update(payload)
    .digest('hex')
  
  // Constant-time comparison to prevent timing attacks
  let match = true
  for (let i = 0; i < signatureHash.length; i++) {
    if (signatureHash.charCodeAt(i) !== expectedHash.charCodeAt(i)) {
      match = false
    }
  }
  
  if (!match) {
    throw new Error('Signature verification failed')
  }
  
  // Parse the payload
  return JSON.parse(payload)
}

export async function POST(req: Request) {
  const payload = await req.text()
  const signature = req.headers.get('stripe-signature')

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET_ANALYTICS) {
    return NextResponse.json({ error: 'Missing signature or webhook secret' }, { status: 400 })
  }

  let event

  try {
    event = verifyWebhookSignature(payload, signature, process.env.STRIPE_WEBHOOK_SECRET_ANALYTICS)
  } catch (err: any) {
    console.error('Analytics webhook signature verification failed:', err.message)
    return NextResponse.json({ error: err.message }, { status: 400 })
  }

  // Track events to Mixpanel
  const mixpanelToken = process.env.MIXPANEL_TOKEN
  
  if (mixpanelToken) {
    await trackToMixpanel(event, mixpanelToken)
  }

  return NextResponse.json({ received: true })
}

async function trackToMixpanel(event: any, token: string) {
  
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object
      const amount = session.amount_total ? session.amount_total / 100 : 0
      const currency = session.currency?.toUpperCase() || 'USD'
      
      // Track revenue event
      await fetch('https://api.mixpanel.com/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'Purchase Completed',
          properties: {
            distinct_id: session.customer,
            token,
            time: Math.floor(Date.now() / 1000),
            $insert_id: `stripe_${event.id}`,
            revenue: amount,
            currency,
            plan: session.metadata?.plan || 'unknown',
            interval: session.metadata?.interval || 'unknown',
            session_id: session.id,
            customer_id: session.customer,
            payment_status: session.payment_status,
          }
        })
      })
      
      console.log(`[Analytics] Tracked purchase: $${amount} ${currency}`)
      break
    }

    case 'invoice.payment_succeeded': {
      const invoice = event.data.object
      const amount = invoice.amount_paid ? invoice.amount_paid / 100 : 0
      const currency = invoice.currency?.toUpperCase() || 'USD'
      
      // Only track if it's a subscription renewal (not the first payment)
      if (invoice.billing_reason === 'subscription_cycle') {
        await fetch('https://api.mixpanel.com/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'Subscription Renewed',
            properties: {
              distinct_id: invoice.customer,
              token,
              time: Math.floor(Date.now() / 1000),
              $insert_id: `stripe_${event.id}`,
              revenue: amount,
              currency,
              subscription_id: invoice.subscription,
              invoice_id: invoice.id,
              customer_id: invoice.customer,
            }
          })
        })
        
        console.log(`[Analytics] Tracked renewal: $${amount} ${currency}`)
      }
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object
      
      await fetch('https://api.mixpanel.com/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'Payment Failed',
          properties: {
            distinct_id: invoice.customer,
            token,
            time: Math.floor(Date.now() / 1000),
            $insert_id: `stripe_${event.id}`,
            amount: invoice.amount_due ? invoice.amount_due / 100 : 0,
            currency: invoice.currency?.toUpperCase() || 'USD',
            subscription_id: invoice.subscription,
            invoice_id: invoice.id,
            customer_id: invoice.customer,
            attempt_count: invoice.attempt_count,
          }
        })
      })
      
      console.log('[Analytics] Tracked payment failure')
      break
    }

    case 'customer.subscription.created': {
      const subscription = event.data.object
      
      await fetch('https://api.mixpanel.com/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'Subscription Created',
          properties: {
            distinct_id: subscription.customer,
            token,
            time: Math.floor(Date.now() / 1000),
            $insert_id: `stripe_${event.id}`,
            subscription_id: subscription.id,
            customer_id: subscription.customer,
            status: subscription.status,
            plan_id: subscription.items?.data?.[0]?.price?.id,
            interval: subscription.items?.data?.[0]?.price?.recurring?.interval,
          }
        })
      })
      
      console.log('[Analytics] Tracked subscription creation')
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object
      
      await fetch('https://api.mixpanel.com/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'Subscription Cancelled',
          properties: {
            distinct_id: subscription.customer,
            token,
            time: Math.floor(Date.now() / 1000),
            $insert_id: `stripe_${event.id}`,
            subscription_id: subscription.id,
            customer_id: subscription.customer,
            cancellation_reason: subscription.cancellation_details?.reason || 'unknown',
          }
        })
      })
      
      console.log('[Analytics] Tracked subscription cancellation')
      break
    }

    case 'customer.subscription.updated': {
      const subscription = event.data.object
      
      // Track plan changes
      const previousAttributes = event.data.previous_attributes
      if (previousAttributes?.items) {
        await fetch('https://api.mixpanel.com/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'Subscription Updated',
            properties: {
              distinct_id: subscription.customer,
              token,
              time: Math.floor(Date.now() / 1000),
              $insert_id: `stripe_${event.id}`,
              subscription_id: subscription.id,
              customer_id: subscription.customer,
              status: subscription.status,
              plan_id: subscription.items?.data?.[0]?.price?.id,
            }
          })
        })
        
        console.log('[Analytics] Tracked subscription update')
      }
      break
    }
  }
}
