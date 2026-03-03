# Professional Email Templates - BrandGate
**Standards for all outreach emails**

---

## Email Format Requirements

### 1. Header Standards

**From Field:**
```
From: Will BrandGate <will@brandgate.dev>
```
- Use full name + company
- Professional email address
- NO special characters in display name

**Subject Line:**
```
Subject: B2B-plattform för [Company Name]?
```
- Clear and concise
- Swedish for Swedish companies
- Question format (not spammy)
- NO ALL CAPS
- NO excessive punctuation (!!!)

### 2. MIME Format (RFC 5322 Compliant)

```
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: quoted-printable
```

### 3. Professional Structure

```
Hej [Name if known]!

[Personalized opening - 1 sentence about their company]

[Problem statement - what they might struggle with]

[Solution - what BrandGate offers]

[Call to action - specific next step]

Med vänlig hälsning,
Will
BrandGate

P.S. [AI disclosure in Swedish]
```

---

## Corrected Email Template

### Standard Outreach Email

```
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: quoted-printable

Hej!

[Personalized opening mentioning their company/brand]

[Jag undrar hur ni hanterar... / I noticed that...]

[Många företag i er bransch kämpar med... / Many companies in your industry struggle with...]

[BrandGate är en B2B-plattform som hjälper...]

[Skulle ni vara intresserade av en kort demo?]

Med vänlig hälsning,
Will
BrandGate
https://brandgate.dev

P.S. Jag är en AI-assistent som hjälper BrandGate med outreach. Vårt team finns tillgängligt på team@brandgate.dev
```

---

## Spam Triggers to AVOID

### ❌ NEVER DO:
- ALL CAPS in subject
- Multiple exclamation marks (!!!)
- "URGENT" or "ACT NOW"
- Dollar signs ($$$)
- "Free" in subject line
- "Click here" in body
- Excessive links
- Attachments
- HTML formatting (keep plain text)
- Generic greetings ("Dear Sir/Madam")

### ✅ ALWAYS DO:
- Proper Swedish (å, ä, ö)
- Personalize first sentence
- Keep it short (under 150 words)
- One clear call-to-action
- Professional signature
- AI disclosure in P.S.
- Plain text only

---

## Encoding Fix

### Issue: Strange Characters in Headers

**Problem:** Special characters in headers appearing garbled

**Solution:** Use proper MIME encoding

```python
from email.mime.text import MIMEText
from email.header import Header

# Create message properly
msg = MIMEText(body, 'plain', 'utf-8')
msg['From'] = 'Will BrandGate <will@brandgate.dev>'
msg['To'] = to_email
msg['Subject'] = Header(subject, 'utf-8')

# Encode for Gmail API
import base64
encoded = base64.urlsafe_b64encode(msg.as_bytes()).decode()
```

### Alternative: Manual but Correct

```python
# Ensure proper encoding
headers = f"""MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
To: {to}
From: Will BrandGate <will@brandgate.dev>
Subject: {subject}

{body}"""

# Encode as UTF-8 bytes then base64
encoded = base64.urlsafe_b64encode(headers.encode('utf-8')).decode()
```

---

## Before Sending Checklist

- [ ] Subject line looks professional (no spam triggers)
- [ ] Swedish characters display correctly (å, ä, ö)
- [ ] No strange symbols in headers
- [ ] From field shows "Will BrandGate"
- [ ] Body is plain text (not HTML)
- [ ] Under 150 words
- [ ] One clear CTA
- [ ] AI disclosure in P.S.
- [ ] Signature includes website

---

## Test Email Format

Send test to yourself first:

```
To: albin.holmgren@brandgate.dev
From: Will BrandGate <will@brandgate.dev>
Subject: [TEST] B2B-plattform för Test Company?

Hej!

This is a test email to verify formatting.

Med vänlig hälsning,
Will
BrandGate

P.S. Test AI disclosure
```

Check:
- [ ] Arrives in inbox (not spam)
- [ ] Subject displays correctly
- [ ] Swedish characters work
- [ ] No strange symbols
- [ ] Looks professional

**ONLY send to real leads after testing!**

