# BrandGate Ghost Blog Setup Guide

## Step 1: Apply Brand CSS

1. Go to: https://blog.brandgate.dev/ghost/#/settings/code-injection
2. Copy the CSS from `ghost-brand-customization.css`
3. Paste into **Site Header** section
4. Click **Save**

## Step 2: Upload Logo & Favicon

### Logo
1. Go to: https://blog.brandgate.dev/ghost/#/settings/design
2. Click **Brand** tab
3. Upload logo (recommended: 300x100px, transparent PNG)
4. Alternative: Use text logo "BrandGate"

### Favicon
1. In same **Brand** section
2. Upload favicon (32x32px or 180x180px PNG)
3. Should match brandgate.dev favicon

### Publication Cover
1. Upload cover image (1800x600px)
2. This appears on homepage behind title
3. Use gradient or subtle pattern matching brand colors

## Step 3: Update Navigation

### Primary Navigation
Go to: https://blog.brandgate.dev/ghost/#/settings/navigation

Add these links:
- Label: "Features" | URL: https://brandgate.dev/#features
- Label: "Pricing" | URL: https://brandgate.dev/#pricing
- Label: "Contact" | URL: https://brandgate.dev/contact
- Label: "Get Started" | URL: https://brandgate.dev/signup (primary button)

### Secondary Navigation (Footer)
- Label: "Privacy" | URL: https://brandgate.dev/privacy
- Label: "Terms" | URL: https://brandgate.dev/terms
- Label: "Twitter" | URL: [your Twitter]
- Label: "LinkedIn" | URL: [your LinkedIn]

## Step 4: Site Settings

Go to: https://blog.brandgate.dev/ghost/#/settings/general

### Publication Info
- **Title:** BrandGate Blog
- **Description:** B2B distribution insights, wholesale growth strategies, and e-commerce tips for brands.

### Site Meta Settings
- **Meta Title:** BrandGate Blog | B2B Distribution & Wholesale Growth
- **Meta Description:** Learn how to scale your brand's distribution network with expert insights on B2B e-commerce, distributor management, and wholesale growth strategies.

### Social Accounts
- Add Twitter URL
- Add Facebook URL (if applicable)
- Add LinkedIn URL

### Timezone
- Set to your local timezone (Europe/Stockholm)

## Step 5: Create Authors

Go to: https://blog.brandgate.dev/ghost/#/settings/staff

### Update Will's Profile:
- Name: Will
- Slug: will
- Bio: AI assistant at BrandGate, helping brands scale their distribution.
- Website: https://brandgate.dev
- Twitter: @brandgate (if available)
- Profile image: Upload avatar

### Create Albin's Profile:
- Invite albin@brandgate.dev
- Role: Administrator
- Bio: Founder of BrandGate. Helping brands build distribution networks.

## Step 6: Create Tags (Categories)

Go to: https://blog.brandgate.dev/ghost/#/tags

Create these tags:
1. **Distribution Strategy** - slug: distribution
2. **B2B E-commerce** - slug: b2b-ecommerce
3. **Distributor Management** - slug: distributor-management
4. **Wholesale Growth** - slug: wholesale-growth
5. **Product Updates** - slug: product-updates
6. **Case Studies** - slug: case-studies

For each tag, add:
- Meta title and description (SEO)
- Feature image

## Step 7: Theme Customization (Optional)

For deeper customization, go to: https://blog.brandgate.dev/ghost/#/settings/design

### Theme Settings
- **Color Scheme:** Light (matches main site)
- **Show publication cover:** Yes
- **Feed layout:** Grid (better for blog)

### Custom Fonts
If you want exact font matching, add this to Code Injection:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Step 8: Integrations

Go to: https://blog.brandgate.dev/ghost/#/settings/integrations

### Recommended Integrations:

1. **Slack** - For publishing notifications
2. **Unsplash** - Free stock photos
3. **FirstPromoter** - Referral tracking
4. **Zapier** - Connect to other tools

### Custom Integration for Analytics:
Create a custom integration called "Analytics"
- Use webhook URL to send events to Mixpanel
- Track: post published, member subscribed, etc.

## Step 9: Members & Newsletter

Go to: https://blog.brandgate.dev/ghost/#/settings/members

### Settings:
- **Enable members:** Yes
- **Enable newsletter:** Yes
- **Default post access:** Public (for SEO)
- **Subscribe button:** Show on posts

### Email Settings:
- **From name:** BrandGate
- **From email:** will@brandgate.dev
- **Reply-to:** albin@brandgate.dev

## Step 10: SEO Final Check

### Sitemap
Your sitemap is auto-generated at:
https://blog.brandgate.dev/sitemap.xml

Submit to:
- Google Search Console
- Bing Webmaster Tools

### Robots.txt
Check at: https://blog.brandgate.dev/robots.txt

### RSS Feed
Feed available at: https://blog.brandgate.dev/rss/

## Brand Assets Needed:

Upload these files to your workspace or send to me:

1. **Logo** (PNG/SVG, transparent background)
2. **Favicon** (32x32 PNG)
3. **Cover image** (1800x600px)
4. **Author photos** (Albin, Will - 400x400px)
5. **Brand color hex codes** (if different from my estimate)

## Quick Wins After Setup:

1. Create first 3 blog posts
2. Set up welcome email for new subscribers
3. Add subscribe form to main site (brandgate.dev)
4. Cross-link between blog and main site
5. Share first post on LinkedIn/Twitter

## Support:

If anything breaks, Ghost support: support@ghost.org
Or ask me to help troubleshoot.
