# BrandGate Stripe Analytics Webhook Setup

This webhook is **separate** from your existing checkout webhook. It handles analytics/revenue tracking only and will not interfere with subscription processing.

## Files to Add

1. **Copy** `brandgate-web-analytics-webhook.ts` to your BrandGate project at:
   ```
   app/api/webhooks/stripe/analytics/route.ts
   ```

## Environment Variables

Add these to your Vercel project (for BrandGate, not 2hands-os):

```
STRIPE_WEBHOOK_SECRET_ANALYTICS=whsec_... (from Stripe dashboard)
MIXPANEL_TOKEN=your_mixpanel_token
NEXT_PUBLIC_SUPABASE_URL=https://...
SUPABASE_SERVICE_ROLE_KEY=...
```

## Stripe Webhook Configuration

1. Go to Stripe Dashboard → Developers → Webhooks
2. Click "Add endpoint"
3. Enter URL: `https://brandgate-cv0fprdhu-bizlution.vercel.app/api/webhooks/stripe/analytics`
4. Select these events:
   - `checkout.session.completed` - New purchases
   - `invoice.payment_succeeded` - Subscription renewals
   - `invoice.payment_failed` - Failed payments
   - `customer.subscription.created` - New subscriptions
   - `customer.subscription.updated` - Plan changes
   - `customer.subscription.deleted` - Cancellations
5. Copy the webhook signing secret
6. Add it to Vercel as `STRIPE_WEBHOOK_SECRET_ANALYTICS`

## Webhook Behavior

This webhook **only tracks analytics** and will:
- ✅ Send revenue events to Mixpanel
- ✅ Track subscription lifecycle events
- ✅ Store raw events for debugging (optional)
- ❌ NOT process subscriptions (that's handled by the main webhook)
- ❌ NOT update user plans or access

## Events Tracked

| Event | Mixpanel Event | Properties |
|-------|----------------|------------|
| checkout.session.completed | Purchase Completed | revenue, currency, plan, interval |
| checkout.session.completed | $revenue | $amount, $currency (for Mixpanel revenue reports) |
| invoice.payment_succeeded | Subscription Renewed | revenue, currency, subscription_id |
| invoice.payment_failed | Payment Failed | amount, attempt_count |
| customer.subscription.created | Subscription Created | status, plan_id, interval |
| customer.subscription.deleted | Subscription Cancelled | cancellation_reason |
| customer.subscription.updated | Subscription Updated | status, plan_id |

## Testing

1. Deploy the webhook to production
2. In Stripe Dashboard → Webhooks, click on your endpoint
3. Click "Send test event" and choose any event type
4. Check Vercel logs to see the webhook processing
5. Check Mixpanel to verify events appear

## Difference from Checkout Webhook

Your existing checkout webhook at `/api/webhooks/stripe` handles:
- Creating/updating subscriptions in Supabase
- Updating user plans
- Granting/revoking access

This analytics webhook at `/api/webhooks/stripe/analytics` handles:
- Revenue tracking in Mixpanel
- Subscription lifecycle analytics
- Debugging/audit logging

They use **different webhook secrets** so failures in one don't affect the other.
