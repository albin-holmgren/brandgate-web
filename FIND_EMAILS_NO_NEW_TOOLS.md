# FIND REAL EMAILS - Using Only Existing Tools

## ❌ NO NEW TOOLS
We can't use Apollo, Hunter, NeverBounce, or other new tools.
Use only: Gmail, company websites, LinkedIn, Instagram

## ✅ METHODS WITH EXISTING TOOLS

### Method 1: Check Company Website Directly

**Step-by-step:**
1. Visit company.com/contact
2. Visit company.com/about
3. Visit company.com/team
4. Look for:
   - "Contact [Name] at email@company.com"
   - Press contact: press@company.com
   - Wholesale contact: wholesale@company.com
   - Careers email (hiring manager): careers@company.com

**Example emails to look for:**
- press@company.com (PR team, often forwards to founder at small companies)
- wholesale@company.com (B2B sales)
- export@company.com (international sales)
- hello@company.com (small companies = goes to founders)

---

### Method 2: Instagram Bio Check

**Step-by-step:**
1. Go to instagram.com/companyname
2. Check bio section
3. Look for:
   - "Contact: email@company.com"
   - "For wholesale: wholesale@company.com"
   - Link in bio (click, check contact page)

**Small companies often list founder email in bio!**

---

### Method 3: LinkedIn Contact Info

**Step-by-step:**
1. Go to linkedin.com/in/personname
2. Click "Contact info" section
3. Some list email publicly
4. Check their posts - sometimes share email in content

**Note:** Only works if person has chosen to share

---

### Method 4: Check Gmail Sent Folder

**Use our existing Gmail to find patterns:**

```bash
# Check emails we've already sent that worked
cd /home/node/.openclaw/workspace && node -e "
const fs = require('fs');
const env = fs.readFileSync('.env.gmail', 'utf8');
env.split('\n').forEach(l => {
  const m = l.match(/^([^#=]+)=(.*)$/);
  if (m) process.env[m[1].trim()] = m[2].trim();
});

const { google } = require('googleapis');
const oauth = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, 'https://developers.google.com/oauthplayground');
oauth.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
const gmail = google.gmail({ version: 'v1', auth: oauth });

async function checkSent() {
  const res = await gmail.users.messages.list({
    userId: 'me',
    q: 'in:sent to:@brandgate.dev subject:B2B',
    maxResults: 50
  });
  
  console.log('Emails sent successfully (no bounce):');
  console.log('='.repeat(50));
  
  for (const msg of res.data.messages || []) {
    const details = await gmail.users.messages.get({
      userId: 'me', id: msg.id, format: 'metadata',
      metadataHeaders: ['To', 'Subject', 'Date']
    });
    
    const to = details.data.payload.headers.find(h => h.name === 'To')?.value;
    const subj = details.data.payload.headers.find(h => h.name === 'Subject')?.value;
    
    // Check if bounced
    const bounceCheck = await gmail.users.messages.list({
      userId: 'me',
      q: 'in:anywhere subject:bounce \"' + to + '\"'
    });
    
    if ((bounceCheck.data.messages || []).length === 0) {
      console.log('✅', to);
      console.log('   Subject:', subj);
    }
  }
}
checkSent();
"
```

---

### Method 5: Domain Pattern Analysis

**Use our Gmail to test patterns:**

1. Try sending to test addresses
2. Check if bounce within 5 minutes
3. If no bounce = pattern works

**BUT DON'T SPAM** - Only test 1-2 patterns per company max

---

### Method 6: Check Public Records

**Swedish Companies:**
- allabolag.se - Sometimes lists contact person
- arsredovisning.se - Annual reports (executive contacts)

**Search Google (if available):**
```
site:company.com "@company.com"
site:linkedin.com "company" "email"
"firstname lastname" "company" "contact"
```

---

## 🎯 PRACTICAL WORKFLOW (No New Tools)

### For Each Company:

**Step 1: Website Check (2 min)**
- Visit /contact, /about, /team, /press
- Look for any email addresses listed
- Note: press@, wholesale@, hello@

**Step 2: Instagram Check (1 min)**
- Check bio for "Contact: email@..."
- Check link in bio → contact page
- DM if no email listed ("Hi, I'd love to connect about B2B...")

**Step 3: LinkedIn Check (1 min)**
- Check founder's "Contact info" section
- Check recent posts for email mentions

**Step 4: Gmail Pattern Test (Only if desperate)**
- Test ONE pattern: hello@company.com or info@company.com
- Wait 5 min, check for bounce
- If bounce → try different pattern (max 2 tries)
- If bounce again → SKIP this company

**Step 5: Decision**
- ✅ Found working email → Add to list
- ⚠️ Only info@/hello@ found → Use but lower priority
- ❌ No email found → Instagram DM or SKIP

---

## ✅ ACCEPTABLE EMAILS (In Priority Order)

**Best (Personal):**
1. firstname@company.com (if found on website/Instagram)
2. firstname.lastname@company.com (if verified no bounce)

**Good (Department but small company):**
3. hello@company.com (small company = founders read it)
4. wholesale@company.com (B2B specific)
5. press@company.com (often founders handle PR)

**Acceptable (Last resort):**
6. info@company.com (but only for small companies <50 employees)

**NEVER USE:**
- ❌ support@ (goes to customer service)
- ❌ sales@ (generic, low response)
- ❌ contact@ (too generic)
- ❌ noreply@ (will bounce)

---

## 📋 SMALL COMPANIES TO RESEARCH (Using Website/Instagram Only)

### 1. Nudie Jeans
**Website:** nudiejeans.com  
**Instagram:** @nudiejeans  
**Check:** /contact, /press, bio  
**Look for:** Wholesale contact, press email

### 2. Organic Basics
**Website:** organicbasics.com  
**Instagram:** @organicbasics  
**Check:** About page, sustainability page (often lists contact)

### 3. Colorful Standard
**Website:** colorfulstandard.com  
**Instagram:** @colorfulstandard  
**Check:** /wholesale, /stockists (B2B pages)

### 4. Aplace
**Website:** aplace.com  
**Instagram:** @aplace  
**Check:** /about, founder interviews

### 5. Our Legacy
**Website:** ourlegacy.com  
**Instagram:** @ourlegacy  
**Already have:** info@ourlegacy.com  
**Check:** Can we find founder email?

### 6. Matsmart
**Website:** matsmart.se  
**Instagram:** @matsmart  
**Check:** /press, /om-oss (about page)

### 7. Gastrologik
**Website:** gastrologik.se  
**Instagram:** @gastrologik  
**Check:** Small restaurant = contact on page

### 8. L:A Bruket
**Website:** labruket.se  
**Instagram:** @labruket  
**Already have:** mats@labruket.se (guessed)  
**Check:** Is there verified email on site?

### 9. Kaleido
**Website:** kaleido.se  
**Instagram:** @kaleido  
**Check:** Small brand, likely founder email in bio

---

## 🎯 REALISTIC EXPECTATIONS

**Without new tools:**
- 50% of companies will have findable emails on website/Instagram
- 30% will only have info@hello@ (still usable for small companies)
- 20% will be hard to reach (skip or Instagram DM)

**Target:** Find 5-6 real emails from 10 researched

---

## NEXT ACTION

Want me to:
1. Check which of our already-sent emails got bounces (using Gmail)
2. Document which emails actually work
3. Research 10 small companies using only website + Instagram
4. Find real emails (no guessing!)

**No new tools, just smart research with what we have.**
