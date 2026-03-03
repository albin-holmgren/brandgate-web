# SEO Best Practices: Language & Country Detection

## ❌ DON'T: Auto-Redirect Based on IP/Country

**Why this is bad for SEO:**
1. **Googlebot confusion** - Googlebot crawls from US IPs, may never see Swedish content
2. **Cloaking risk** - Different content for users vs bots = SEO penalty
3. **User frustration** - Swedish user in US gets English, can't switch
4. **Cache issues** - CDNs cache redirects, serve wrong language

**What happens:**
- User in Sweden visits brandgate.dev
- Auto-redirects to brandgate.dev/sv/
- Googlebot (US IP) always sees English
- Swedish content never indexed properly

---

## ✅ DO: Best Practices for Multilingual SEO

### 1. **Use Hreflang Tags**
Tell Google about language versions:

```html
<!-- On English page -->
<link rel="alternate" hreflang="en" href="https://brandgate.dev/blog/post" />
<link rel="alternate" hreflang="sv-SE" href="https://brandgate.dev/sv/blog/post" />
<link rel="alternate" hreflang="x-default" href="https://brandgate.dev/blog/post" />

<!-- On Swedish page -->
<link rel="alternate" hreflang="sv-SE" href="https://brandgate.dev/sv/blog/post" />
<link rel="alternate" hreflang="en" href="https://brandgate.dev/blog/post" />
```

**Benefits:**
- Google knows both versions exist
- Shows correct version in search results
- Prevents duplicate content penalties

---

### 2. **Show Language Banner (Not Redirect)**

Instead of forcing redirect, show friendly banner:

```
┌─────────────────────────────────────┐
│  🇸🇪 Vi ser att du är i Sverige.    │
│     Vill du se sidan på svenska?    │
│     [Ja, visa på svenska] [Nej]     │
└─────────────────────────────────────┘
```

**Benefits:**
- User has control
- Google can crawl both versions
- Better user experience
- No SEO penalties

---

### 3. **Use Subdirectories (Not Subdomains)**

**Good:**
- brandgate.dev/sv/blog (subdirectory)
- brandgate.dev/blog (default)

**Bad:**
- sv.brandgate.dev/blog (subdomain)

**Why subdirectories are better:**
- SEO authority consolidated
- Easier to manage
- Better for analytics
- Faster deployment

---

### 4. **Language Switcher in Footer**

Every page should have easy language switching:

```
Footer
├── © 2026 BrandGate
├── Privacy | Terms | Contact
└── Language: [🇬🇧 English] [🇸🇪 Svenska]
```

**Benefits:**
- Users can always switch
- Google sees both links
- Accessible from any page

---

### 5. **Remember User Choice (Cookie)**

```javascript
// When user selects Swedish
document.cookie = "NEXT_LOCALE=sv; path=/; max-age=31536000";

// On next visit, use their preference
// But DON'T auto-redirect on first visit
```

---

## 🎯 Recommended Implementation for BrandGate

### Option A: Preferred (Balanced)
1. **No auto-redirect on first visit**
2. **Show country banner** if we detect Swedish IP
3. **Language switcher** in footer on every page
4. **Remember choice** in cookie
5. **Use hreflang** tags on all pages

### Option B: SEO-Safe (Conservative)
1. **No redirects at all**
2. **Footer language switcher** only
3. **User must manually select**
4. **Full hreflang implementation**

### Option C: Aggressive (Higher Risk)
1. **Auto-redirect on first visit**
2. **Easy override** (prominent switcher)
3. **Remember preference**
4. **Hreflang + canonical tags**

---

## 📊 Current BrandGate Setup

### What's Working:
- ✅ Static HTML for blog (fast, reliable)
- ✅ Swedish translations exist
- ✅ Language switcher on blog posts
- ✅ /sv/ subdirectory structure

### What Needs Fixing:
- ❌ Middleware auto-redirect (bad for SEO)
- ❌ Language switcher not in footer
- ❌ No hreflang tags
- ❌ No country banner

---

## 🔧 Implementation Plan

### Phase 1: Fix SEO Issues (This Week)
1. Remove auto-redirect from middleware
2. Add language switcher to footer
3. Add hreflang tags to all pages

### Phase 2: Enhance UX (Next Week)
1. Add country detection banner
2. Implement cookie-based preference
3. Add more Swedish translations

### Phase 3: Content (Ongoing)
1. Translate all blog posts
2. Create Swedish landing pages
3. Swedish SEO content

---

## 📈 Expected SEO Impact

### Current State:
- English content: Indexing ✅
- Swedish content: Not indexed properly ❌
- Search visibility: Limited to English

### After Fix:
- Both languages indexed ✅
- Swedish keywords rankable ✅
- Better user experience ✅
- No duplicate content issues ✅

---

## 🚫 Common Mistakes to Avoid

1. **Auto-redirecting** - Biggest SEO mistake
2. **Using subdomains** - Dilutes authority
3. **No hreflang** - Google sees duplicates
4. **Hiding language switcher** - Users can't switch
5. **Blocking /sv/ in robots.txt** - Swedish content invisible

---

## ✅ Quick Checklist

For every page, ensure:
- [ ] Hreflang tags present
- [ ] Language switcher accessible
- [ ] No auto-redirects
- [ ] User can override language
- [ ] Cookie remembers preference
- [ ] Both languages crawlable

---

## 🎯 Summary

**Best for SEO:**
- NO auto-redirects
- YES language switcher in footer
- YES hreflang tags
- YES user choice (cookie)
- MAYBE country banner (optional)

**Worst for SEO:**
- Auto-redirect by IP
- No language options
- Subdomains
- Blocking alternate languages

---

**Recommendation for BrandGate:**
Use **Option A** - Show country banner but don't force redirect. Let users choose, remember their choice, and implement full hreflang support.
