import { NextResponse } from 'next/server'
import { verifyStripeAnalyticsWebhook } from '@/lib/security/stripe-webhook'

type MixpanelStripeEvent = {
  type?: string
  id?: string
  data?: {
    object?: Record<string, unknown>
    previous_attributes?: { items?: unknown }
  }
}

export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET_ANALYTICS
  const signature = req.headers.get('stripe-signature')
  const payload = await req.text()

  const verification = verifyStripeAnalyticsWebhook({
    payload,
    signatureHeader: signature,
    secret,
  })

  if (!verification.ok) {
    if (verification.status === 500) {
      console.error('Analytics webhook is not configured')
      return NextResponse.json({ error: 'Webhook unavailable' }, { status: 500 })
    }
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const mixpanelToken = process.env.MIXPANEL_TOKEN
  if (mixpanelToken) {
    try {
      await trackToMixpanel(verification.event as MixpanelStripeEvent, mixpanelToken)
    } catch (error) {
      console.error('Analytics webhook downstream tracking failed')
      if (error instanceof Error) {
        console.error(error.name)
      }
    }
  }

  return NextResponse.json({ received: true })
}

async function trackToMixpanel(event: MixpanelStripeEvent, token: string) {
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data?.object ?? {}
      const amountTotal = asNumber(session.amount_total)
      const amount = amountTotal ? amountTotal / 100 : 0
      const currency = asString(session.currency)?.toUpperCase() || 'USD'
      const metadata = asRecord(session.metadata)

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
            plan: metadata?.plan || 'unknown',
            interval: metadata?.interval || 'unknown',
            session_id: session.id,
            customer_id: session.customer,
            payment_status: session.payment_status,
          },
        }),
      })
      break
    }

    case 'invoice.payment_succeeded': {
      const invoice = event.data?.object ?? {}
      const amountPaid = asNumber(invoice.amount_paid)
      const amount = amountPaid ? amountPaid / 100 : 0
      const currency = asString(invoice.currency)?.toUpperCase() || 'USD'

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
            },
          }),
        })
      }
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data?.object ?? {}
      const amountDue = asNumber(invoice.amount_due)

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
            amount: amountDue ? amountDue / 100 : 0,
            currency: asString(invoice.currency)?.toUpperCase() || 'USD',
            subscription_id: invoice.subscription,
            invoice_id: invoice.id,
            customer_id: invoice.customer,
            attempt_count: invoice.attempt_count,
          },
        }),
      })
      break
    }

    case 'customer.subscription.created': {
      const subscription = event.data?.object ?? {}
      const plan = firstSubscriptionItem(subscription)

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
            plan_id: plan?.price?.id,
            interval: plan?.price?.recurring?.interval,
          },
        }),
      })
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data?.object ?? {}
      const cancellation = asRecord(subscription.cancellation_details)

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
            cancellation_reason: cancellation?.reason || 'unknown',
          },
        }),
      })
      break
    }

    case 'customer.subscription.updated': {
      const subscription = event.data?.object ?? {}
      const previousAttributes = event.data?.previous_attributes
      if (previousAttributes?.items) {
        const plan = firstSubscriptionItem(subscription)
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
              plan_id: plan?.price?.id,
            },
          }),
        })
      }
      break
    }
  }
}

function asString(value: unknown): string | undefined {
  return typeof value === 'string' ? value : undefined
}

function asNumber(value: unknown): number | undefined {
  return typeof value === 'number' ? value : undefined
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  if (!value || typeof value !== 'object') {
    return undefined
  }
  return value as Record<string, unknown>
}

function firstSubscriptionItem(subscription: Record<string, unknown>): {
  price?: { id?: unknown; recurring?: { interval?: unknown } }
} | undefined {
  const items = asRecord(subscription.items)
  const data = items?.data
  if (!Array.isArray(data) || data.length === 0) {
    return undefined
  }
  return asRecord(data[0]) as {
    price?: { id?: unknown; recurring?: { interval?: unknown } }
  }
}
