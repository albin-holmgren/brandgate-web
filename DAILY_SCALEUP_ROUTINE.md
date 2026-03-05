# DAILY SCALE-UP ROUTINE

## Target: 20 Outreach + 20 New Leads Per Day

### Every Day (Monday-Friday)

#### Morning (9:00 AM): Send 20 Outreach Emails
- Pull 20 companies from NEW_LEADS_100.json
- Send personalized emails with proper UTF-8 encoding
- Log all sends to Attio CRM
- Update lead status to "Contacted"

#### Afternoon (2:00 PM): Research 20 New Leads
- Research Swedish companies (10-200 employees)
- Categories: Fashion, Food, Home, Beauty, Electronics
- Find: Name, website, email, employee count
- Add to NEW_LEADS_100.json
- Total growth: +20 leads/day

### Weekly Targets

| Day | Outreach | New Leads | Total Pipeline |
|-----|----------|-----------|----------------|
| Mon | 20 | 20 | +40 |
| Tue | 20 | 20 | +40 |
| Wed | 20 | 20 | +40 |
| Thu | 20 | 20 | +40 |
| Fri | 20 | 20 | +40 |
| **Week** | **100** | **100** | **+200** |

### Monthly Projection

- **Outreach:** 400 emails/month
- **New Leads Added:** 400 companies/month
- **Total Pipeline Growth:** 800 touches/month

### Lead Criteria

**Size:** 10-200 employees (sweet spot: 20-100)
**Geography:** Sweden primarily, Nordic secondary
**Categories:**
- Fashion & Apparel (40%)
- Food & Beverage (20%)
- Home & Design (20%)
- Health & Beauty (10%)
- Electronics & Outdoor (10%)

**Avoid:**
- Companies >500 employees (too large)
- Companies <10 employees (too small)
- Pure B2C companies (no wholesale)

### Research Sources

1. **Almi Företagspartner** - Swedish SME database
2. **LinkedIn Sales Navigator** - Employee count filters
3. **Swedish Chambers of Commerce** - Member directories
4. **Industry associations** - Swedish Fashion Council, etc.
5. **Trade show exhibitors** - Formex, Stockholm Design Week
6. **Competitor analysis** - Who uses similar platforms?

### Email Template (Swedish)

Subject: `B2B-lösning för {Company}?`

Body:
```
Hej!

Jag hoppas du har en bra dag. Jag heter Will och arbetar med BrandGate – 
en plattform som hjälper varumärken som {Company} att effektivisera 
sin B2B-försäljning.

Med BrandGate får ni:
✓ En professionell B2B-butik där återförsäljare kan beställa själva
✓ Automatisk orderhantering och fakturering
✓ Full översikt över lagernivåer och försäljning
✓ Integration med Fortnox och andra system

Skulle ni vara intresserade av att se en kort demo?

Med vänlig hälsning,
Will
BrandGate
https://brandgate.dev

P.S. Jag är en AI-assistent som hjälper BrandGate med outreach. 
Vårt team finns tillgängligt på team@brandgate.dev
```

### Tracking

**Daily Log:**
- Emails sent: ___/20
- New leads researched: ___/20
- Responses received: ___
- Bounces: ___

**Weekly Report:**
- Total outreach: ___
- New leads added: ___
- Response rate: ___%
- Meetings booked: ___

### Files

- `NEW_LEADS_100.json` - Master database
- `research-100-leads.js` - Lead research script
- `send-20-outreach.js` - Daily outreach script
- `DAILY_SCALEUP_ROUTINE.md` - This file

### Success Metrics

**Month 1 Target:**
- 400 emails sent
- 400 new leads added
- 20+ responses
- 5+ meetings booked
- 1+ deal closed

**Month 3 Target:**
- 1,200 emails sent
- 1,200 new leads in database
- 60+ responses
- 15+ meetings
- 5+ deals closed

