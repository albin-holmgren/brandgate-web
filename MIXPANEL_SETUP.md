# Mixpanel Analytics Setup - BrandGate
**Token:** 9277e80f2dc38a2e8bab577cc8f20268  
**Project URL:** https://mixpanel.com/project/3365375  
**Status:** ✅ Active

---

## Current Implementation

### 1. Frontend Tracking (layout.tsx)

#### Auto-Tracked Events:
- ✅ **Page View** - Every page load
- ✅ **Page View** (via track_pageview: true) - Automatic

#### Manual Events:
- ✅ **Button Click** - All button clicks
- ✅ **Form Submit** - All form submissions
- ✅ **Scroll Depth** - 25%, 50%, 75%, 90%
- ✅ **Time on Page** - Duration when leaving
- ✅ **External Link Click** - Outbound links

### 2. Backend Tracking (Stripe Webhooks)

#### Revenue Events:
- ✅ **Purchase Completed** - checkout.session.completed
- ✅ **Subscription Renewed** - invoice.payment_succeeded (renewals)
- ✅ **Payment Failed** - invoice.payment_failed
- ✅ **Subscription Created** - customer.subscription.created
- ✅ **Subscription Cancelled** - customer.subscription.deleted
- ✅ **Subscription Updated** - customer.subscription.updated

---

## Event Dictionary

### Frontend Events

#### 1. Page View
```javascript
mixpanel.track('Page View', {
  'page': '/pricing',
  'timestamp': '2026-03-03T10:00:00Z'
});
```
**Trigger:** Every page load  
**Properties:** page path, timestamp

#### 2. Button Click
```javascript
mixpanel.track('Button Click', {
  'button_text': 'Get Started Free',
  'button_id': 'hero-cta',
  'page': '/',
  'timestamp': '2026-03-03T10:00:00Z'
});
```
**Trigger:** Any button click  
**Properties:** button text, ID, page, timestamp

**Key Buttons to Track:**
- "Get Started Free" (homepage hero)
- "Book a Demo" (homepage, CTA section)
- "Start Free Trial" (pricing page)
- Navigation menu items
- Feature CTA buttons

#### 3. Form Submit
```javascript
mixpanel.track('Form Submit', {
  'form_id': 'contact-form',
  'form_name': 'Contact Form',
  'page': '/contact',
  'timestamp': '2026-03-03T10:00:00Z'
});
```
**Trigger:** Any form submission  
**Properties:** form ID, name, page

**Forms to Track:**
- Contact form
- Newsletter signup
- Demo request form

#### 4. Scroll Depth
```javascript
mixpanel.track('Scroll Depth', {
  'percent': 50,
  'page': '/pricing'
});
```
**Trigger:** 25%, 50%, 75%, 90% scroll  
**Properties:** percentage, page

#### 5. Time on Page
```javascript
mixpanel.track('Time on Page', {
  'duration_seconds': 45,
  'page': '/features'
});
```
**Trigger:** When leaving page  
**Properties:** duration, page

#### 6. External Link Click
```javascript
mixpanel.track('External Link Click', {
  'link': 'https://app.brandgate.dev/signup',
  'page': '/',
  'text': 'Get Started'
});
```
**Trigger:** Click on external links  
**Properties:** URL, page, link text

---

### Backend Events (Revenue)

#### 7. Purchase Completed
```javascript
mixpanel.track('Purchase Completed', {
  'revenue': 35.00,
  'currency': 'EUR',
  'plan': 'Starter',
  'interval': 'month',
  'customer_id': 'cus_xxx',
  'session_id': 'cs_xxx'
});
```
**Trigger:** Stripe checkout.session.completed  
**Properties:** amount, currency, plan, customer

#### 8. Subscription Renewed
```javascript
mixpanel.track('Subscription Renewed', {
  'revenue': 35.00,
  'currency': 'EUR',
  'subscription_id': 'sub_xxx',
  'customer_id': 'cus_xxx'
});
```
**Trigger:** Recurring payment succeeded  
**Properties:** amount, currency, subscription

#### 9. Payment Failed
```javascript
mixpanel.track('Payment Failed', {
  'amount': 35.00,
  'currency': 'EUR',
  'attempt_count': 2,
  'customer_id': 'cus_xxx'
});
```
**Trigger:** invoice.payment_failed  
**Properties:** amount, attempts, customer

#### 10. Subscription Created
```javascript
mixpanel.track('Subscription Created', {
  'subscription_id': 'sub_xxx',
  'customer_id': 'cus_xxx',
  'plan_id': 'price_xxx',
  'interval': 'month',
  'status': 'active'
});
```
**Trigger:** customer.subscription.created  
**Properties:** subscription details

#### 11. Subscription Cancelled
```javascript
mixpanel.track('Subscription Cancelled', {
  'subscription_id': 'sub_xxx',
  'customer_id': 'cus_xxx',
  'cancellation_reason': 'customer_request'
});
```
**Trigger:** customer.subscription.deleted  
**Properties:** subscription, reason

---

## User Properties (People Profiles)

### Automatically Set:
- `$email` - User email
- `plan` - Subscription plan
- `signup_source` - Where they signed up
- `$signup_date` - When they signed up

### To Add:
- Company size
- Industry
- Country
- First touch source
- Trial start date
- Conversion date

---

## Funnels to Create

### 1. Trial to Paid Conversion
- Page View (homepage)
- Button Click ("Get Started")
- Page View (/signup)
- Form Submit (signup)
- Purchase Completed

### 2. Demo Request Flow
- Page View (any page)
- Button Click ("Book a Demo")
- Page View (/contact)
- Form Submit (contact form)

### 3. Pricing Page Engagement
- Page View (/pricing)
- Scroll Depth (50%)
- Button Click (any pricing CTA)

### 4. Retention
- Subscription Created
- Subscription Renewed (Month 1)
- Subscription Renewed (Month 2)
- Subscription Renewed (Month 3)

---

## Custom Events to Add

### High Priority:

#### 1. Feature Engagement
```javascript
// Track when users interact with key features
mixpanel.track('Feature Used', {
  'feature': 'demo_dashboard',
  'action': 'clicked_sidebar'
});
```

#### 2. Pricing Tier Viewed
```javascript
mixpanel.track('Pricing Tier Viewed', {
  'tier': 'Pro',
  'duration_seconds': 10
});
```

#### 3. Video/Content Engagement
```javascript
mixpanel.track('Video Played', {
  'video_name': 'product_tour',
  'duration_percent': 75
});
```

#### 4. Error Tracking
```javascript
mixpanel.track('Error Occurred', {
  'error_type': 'form_validation',
  'error_message': 'Email required',
  'page': '/contact'
});
```

---

## Verification Checklist

### Is Mixpanel Working?

- [ ] Visit https://mixpanel.com/project/3365375
- [ ] Check "Live View" for real-time events
- [ ] Navigate brandgate.dev and watch events appear
- [ ] Click buttons and verify "Button Click" events
- [ ] Submit a form and verify "Form Submit" event
- [ ] Scroll down and verify "Scroll Depth" events

### Expected Events per Visit:
1. Page View (on load)
2. Button Click (if any button clicked)
3. Scroll Depth 25% (automatic)
4. Scroll Depth 50% (automatic)
5. Time on Page (on exit)

### Revenue Events (after Stripe purchase):
1. Purchase Completed
2. Subscription Created
3. User profile with revenue properties

---

## Dashboards to Create

### 1. Executive Dashboard
- Unique visitors (daily/weekly/monthly)
- Trial signups
- Conversion rate
- Revenue
- Churn rate

### 2. Marketing Dashboard
- Traffic sources
- Top pages
- Button click rates
- Form conversion rates
- Scroll depth averages

### 3. Product Dashboard
- Feature usage
- Time on site
- Page flow
- Error rates
- User engagement

### 4. Revenue Dashboard
- MRR (Monthly Recurring Revenue)
- New subscriptions
- Renewals
- Churn
- Revenue by plan

---

## Alerts to Set Up

### Critical:
- Payment failure spike (>5 in 1 hour)
- Zero signups for 24 hours
- Churn rate >10% in a week

### Warning:
- Traffic drop >30% day-over-day
- Conversion rate <2%
- Form error rate >10%

---

## Implementation Status

| Component | Status | Notes |
|-----------|--------|-------|
| Page View Tracking | ✅ | Active |
| Button Click Tracking | ✅ | Active |
| Form Submit Tracking | ✅ | Active |
| Scroll Depth | ✅ | Active |
| Time on Page | ✅ | Active |
| External Links | ✅ | Active |
| Stripe Revenue | ✅ | Webhook active |
| User Profiles | ✅ | Basic setup |
| Custom Events | ⚠️ | Can add more |

---

## Next Steps

1. **Verify events are firing:**
   - Open Mixpanel Live View
   - Browse brandgate.dev
   - Confirm events appear

2. **Create dashboards:**
   - Executive summary
   - Marketing funnel
   - Revenue metrics

3. **Set up alerts:**
   - Payment failures
   - Signup drops
   - Churn spikes

4. **Add custom events (optional):**
   - Feature usage
   - Content engagement
   - Error tracking

---

## Troubleshooting

### Events Not Showing?
1. Check browser console for errors
2. Verify token: 9277e80f2dc38a2e8bab577cc8f20268
3. Check ad blockers aren't blocking Mixpanel
4. Verify network requests to api.mixpanel.com

### Revenue Events Missing?
1. Check Stripe webhook is configured
2. Verify webhook secret is set
3. Check server logs for errors
4. Test webhook endpoint

---

**Mixpanel is properly configured and tracking events!**
