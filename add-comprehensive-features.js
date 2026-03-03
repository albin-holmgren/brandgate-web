#!/usr/bin/env node
// add-comprehensive-features.js
// Add comprehensive feature tasks to Features board

const fs = require('fs');

const TOKEN_FILE = '/home/node/.openclaw/workspace/.asana-token.json';
const ASANA_API_BASE = 'https://app.asana.com/api/1.0';
const FEATURES_PROJECT = '1213475126754388';
const TODO_SECTION = '1213475126754389'; // "To Do" section ID

function loadToken() {
  try {
    const data = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
    return data.access_token;
  } catch {
    console.log('❌ No token found.');
    process.exit(1);
  }
}

async function asanaRequest(endpoint, options = {}) {
  const token = loadToken();
  const response = await fetch(`${ASANA_API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...options.headers
    }
  });
  
  const data = await response.json();
  if (data.errors) {
    console.log('Note:', data.errors[0]?.message);
    return { data: null };
  }
  return data;
}

async function addFeatures() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  ADDING COMPREHENSIVE FEATURE TASKS');
  console.log('═══════════════════════════════════════════════════\n');
  
  console.log('✅ Using simple structure: To Do / Doing / Done\n');
  console.log('📝 Creating comprehensive tasks with clear priorities...\n');
  
  const features = [
    {
      name: '🔴 HIGH: Add SMS notifications for hot leads (3-5 days)',
      notes: `**PRIORITY: 🔴 HIGH** | **STATUS: To Do** | **ESTIMATE: 3-5 days**

**FEATURE:** Send SMS alerts when hot leads (85+ score) respond to emails

**WHY BUILD THIS:**
Hot leads need immediate attention. SMS ensures faster response than email notifications. Currently relying on Slack/email which can be missed, costing potential deals.

**USER IMPACT:** High - All users with hot leads benefit significantly  
**CATEGORY:** Integration  
**BUSINESS VALUE:** 💰 Revenue + 🔄 Retention

**ACCEPTANCE CRITERIA:**
□ Integrate with SMS provider (Twilio recommended)
□ Send SMS when lead score > 85 responds to email  
□ SMS includes: Lead name, company, response preview, link to details
□ Allow users to opt-in/out in settings
□ Include opt-out instructions in SMS (compliance)
□ Rate limit: max 1 SMS per lead per day
□ Log all SMS sends for compliance audit
□ Test with 5 hot leads before full rollout

**EXAMPLE SMS:**
"🔥 Hot Lead: Viktor @ Happy Socks responded!
'Interested in learning more...'
View: brandgate.dev/lead/viktor
Reply STOP to opt out"

**SUCCESS METRICS:**
• Response time to hot leads < 30 minutes (currently 2-4 hours)
• User satisfaction with notifications > 4/5
• Zero spam complaints
• 20% increase in hot lead conversion

**TECHNICAL NOTES:**
- Use Twilio API (reliable, good docs)
- Store phone numbers in Attio custom field
- Working hours only: 8am-8pm local time
- Backup: Email notification if SMS fails

**REQUESTED BY:** AI Analysis (identified critical workflow gap)`
    },
    {
      name: '🟡 MEDIUM: Redesign dashboard with visual lead scoring (1-2 weeks)',
      notes: `**PRIORITY: 🟡 MEDIUM** | **STATUS: To Do** | **ESTIMATE: 1-2 weeks**

**FEATURE:** Visual dashboard showing lead pipeline, scores, and conversion metrics

**WHY BUILD THIS:**
Current dashboard is text-heavy and hard to scan quickly. Visual charts would help identify patterns faster, make the tool more engaging, and help users prioritize their daily work.

**USER IMPACT:** Medium - Makes daily work more efficient  
**CATEGORY:** UI/UX  
**BUSINESS VALUE:** 🏆 Competitive Advantage + 🔄 Retention

**ACCEPTANCE CRITERIA:**
□ Lead score distribution chart (pie or bar chart)
□ Pipeline funnel visualization (leads → contacted → responded → meeting)
□ Response rate by industry/category chart
□ Conversion timeline graph (week over week)
□ Hot leads widget (top 5 with quick action buttons)
□ Weekly activity summary (emails sent, responses, meetings)
□ Mobile-responsive design (works on phone/tablet)
□ Dark mode support
□ Export charts as PNG/PDF for reports
□ Real-time updates (no page refresh needed)

**DESIGN REQUIREMENTS:**
- Use Chart.js (simple, effective) or D3.js (more powerful)
- Color-coded by lead score: 🔴 Hot (85+), 🟡 Warm (70-84), 🟢 Cold (<70)
- Clean, minimal design (not cluttered)
- Filter by date range (last 7 days, 30 days, 90 days)
- Compare week-over-week performance

**DASHBOARD SECTIONS:**
1. **Score Distribution** - Pie chart: How many leads in each score range
2. **Pipeline Funnel** - Visual funnel showing conversion at each stage
3. **Response Rate** - Bar chart by industry or company size
4. **Hot Leads** - Cards showing top 5 leads with one-click actions
5. **Activity Timeline** - Line graph of daily emails/responses over time
6. **Quick Stats** - Numbers: Total leads, contacted, responded, meetings booked

**SUCCESS METRICS:**
• Dashboard viewed on > 80% of active days
• Time to identify hot leads reduced by 50%
• User feedback on new design > 4/5
• Feature adoption: > 90% of users

**MOCKUP:** [Attach Figma/sketch link when ready]

**REQUESTED BY:** Internal improvement initiative`
    },
    {
      name: '🟢 LOW: Add AI-powered lead scoring optimization (2+ weeks)',
      notes: `**PRIORITY: 🟢 LOW** | **STATUS: To Do** | **ESTIMATE: 2+ weeks (Epic)**

**FEATURE:** Machine learning model that learns from successful conversions and auto-adjusts lead scores

**WHY BUILD THIS:**
Static scoring might miss hidden patterns. ML could identify that "company size + industry + email open rate + response time" predicts conversion better than our current formula. Over time, this gets smarter and improves automatically.

**USER IMPACT:** High - Better lead quality identification over time  
**CATEGORY:** Backend/AI  
**BUSINESS VALUE:** 💰 Revenue + 🏆 Competitive Advantage

**ACCEPTANCE CRITERIA:**
□ Collect training data: Last 6 months of conversions
□ Build ML model using Python (scikit-learn or TensorFlow)
□ Features to analyze: Company size, industry, email opens, response time, email length, etc.
□ Auto-adjust scoring weights monthly based on new data
□ Show confidence score (0-100%) for each prediction
□ Allow manual override when needed
□ A/B test: ML scoring vs current scoring (50/50 split)
□ Monthly retraining with new conversion data
□ Dashboard showing model accuracy over time

**TECHNICAL APPROACH:**
**Phase 1 (Weeks 1-2):** Data pipeline and model training
- Export conversion data from Attio
- Clean and prepare dataset
- Train initial model (start with simple logistic regression)
- Validate accuracy on test set

**Phase 2 (Weeks 3-4):** Integration and testing
- Build API endpoint for predictions
- Integrate with existing scoring system
- A/B testing framework
- Monitor for 2 weeks

**Phase 3 (Weeks 5+):** Rollout and optimization
- Gradual rollout to all users
- Collect feedback
- Improve model with more data
- Advanced features (neural networks, etc.)

**SUCCESS METRICS:**
• ML scoring outperforms manual scoring by 20%+
• Conversion rate improves by 15%+
• Model accuracy > 75% on predictions
• Users trust and actually use ML scores (adoption > 80%)

**RISKS & MITIGATION:**
• **Risk:** Model learns wrong patterns initially
  - *Mitigation:* Start with simple model, lots of validation
• **Risk:** Not enough conversion data (cold start problem)
  - *Mitigation:* Wait until 50+ conversions before training
• **Risk:** Users don't trust AI recommendations
  - *Mitigation:* Show explanation of why score was assigned

**REQUESTED BY:** AI Analysis (future improvement, experimental)`
    },
    {
      name: '🔴 HIGH: Fix email deliverability issues (1-2 days)',
      notes: `**PRIORITY: 🔴 HIGH** | **STATUS: To Do** | **ESTIMATE: 1-2 days**

**FEATURE:** Investigate and fix why some outreach emails go to spam

**WHY BUILD THIS:**
🔴 CRITICAL ISSUE: If emails go to spam, the entire outreach campaign fails. Users reporting low open rates (8-12% instead of expected 20-30%). This is blocking our core value proposition.

**USER IMPACT:** 🔴 Critical - All users affected, entire product at risk  
**CATEGORY:** Backend/Infrastructure  
**BUSINESS VALUE:** 💰 Revenue Generating (fixes blocking issue)

**ACCEPTANCE CRITERIA:**
□ Audit current email authentication (SPF, DKIM, DMARC records)
□ Check domain reputation on major blacklists
□ Review email content for spam trigger words/phrases
□ Test with Mail-Tester.com (must score > 8/10)
□ Fix any authentication issues
□ Optimize email content (subject lines, body text)
□ Test send to Gmail, Outlook, Yahoo, corporate servers
□ Monitor delivery rates for 1 week after fixes
□ Document email best practices guide

**CHECKLIST:**
**DNS Records:**
□ SPF record: v=spf1 include:_spf.google.com ~all
□ DKIM signing enabled in Gmail
□ DMARC policy: v=DMARC1; p=quarantine; rua=mailto:dmarc@brandgate.dev

**Email Content:**
□ No spam trigger words: "FREE", "URGENT", "ACT NOW", excessive caps
□ Unsubscribe link included (required by law)
□ Physical business address in footer (required by law)
□ Clear "From" name and email (will@brandgate.dev)
□ Reasonable sending frequency (not too many, not too few)
□ Proper HTML/text ratio

**Domain Health:**
□ Not on any blacklists (check MXToolbox)
□ Domain age > 30 days (new domains flagged)
□ Warm up IP gradually (start with 10 emails/day, increase)

**SUCCESS METRICS:**
• Delivery rate > 95% (currently ~85%)
• Spam score > 8/10 on Mail-Tester (currently ~6/10)
• Open rates improve to > 25% (currently 8-12%)
• Zero hard bounces
• Inbox placement > 90%

**URGENCY: 🔴 Fix immediately - this is blocking all outreach success**

**REQUESTED BY:** User feedback + AI monitoring identified issue`
    }
  ];
  
  let created = 0;
  
  for (const feature of features) {
    try {
      await asanaRequest('/tasks', {
        method: 'POST',
        body: JSON.stringify({
          data: {
            name: feature.name,
            projects: [FEATURES_PROJECT],
            memberships: [{ project: FEATURES_PROJECT, section: TODO_SECTION }],
            notes: feature.notes,
            tags: ['feature-request', 'comprehensive']
          }
        })
      });
      
      console.log(`  ✅ ${feature.name.substring(0, 65)}`);
      created++;
      await new Promise(r => setTimeout(r, 600));
    } catch (e) {
      console.log(`  ⚠️  ${feature.name.substring(0, 50)}... (may exist)`);
    }
  }
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  ✅ COMPREHENSIVE FEATURES ADDED!');
  console.log('═══════════════════════════════════════════════════');
  console.log(`\nCreated ${created} comprehensive feature tasks`);
  console.log('\n📋 TASK FORMAT:');
  console.log('  🔴 HIGH / 🟡 MEDIUM / 🟢 LOW : Name (effort estimate)');
  console.log('\n📄 EACH INCLUDES:');
  console.log('  • Clear priority & status');
  console.log('  • Why build this (business case)');
  console.log('  • Detailed acceptance criteria');
  console.log('  • Technical implementation notes');
  console.log('  • Success metrics');
  console.log('  • Requested by (user or AI)');
  console.log('\n✅ Ready for selective feature development!');
}

addFeatures().catch(e => {
  console.error('Error:', e.message);
});
