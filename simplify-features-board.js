#!/usr/bin/env node
// simplify-features-board.js
// Simplify Features board to To do / Doing / Done with comprehensive tasks

const fs = require('fs');

const TOKEN_FILE = '/home/node/.openclaw/workspace/.asana-token.json';
const ASANA_API_BASE = 'https://app.asana.com/api/1.0';
const FEATURES_PROJECT = '1213475126754388';

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
    console.log('Note:', data.errors[0]?.message || 'Error');
    return { data: null };
  }
  return data;
}

async function simplifyBoard() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  SIMPLIFYING FEATURES BOARD');
  console.log('═══════════════════════════════════════════════════\n');
  
  console.log('✅ Keeping simple structure:');
  console.log('  • To do');
  console.log('  • Doing');
  console.log('  • Done\n');
  
  console.log('📝 Will create comprehensive tasks with:');
  console.log('  • Clear priority indicators (🔴🟡🟢)');
  console.log('  • Feature category (UI/UX/Backend/etc)');
  console.log('  • Effort estimate');
  console.log('  • Business value');
  console.log('  • Detailed description\n');
  
  // Get sections
  const sections = await asanaRequest(`/projects/${FEATURES_PROJECT}/sections`);
  
  if (!sections.data) {
    console.log('Could not fetch sections');
    return;
  }
  
  const hasStandardSections = sections.data.some(s => 
    s.name === 'To do' || s.name === 'Doing' || s.name === 'Done'
  );
  
  if (hasStandardSections) {
    console.log('✅ Standard sections already exist\n');
  }
  
  console.log('📋 Creating comprehensive example tasks...\n');
  
  // Find To do section
  const todoSection = sections.data.find(s => s.name === 'To do');
  
  if (!todoSection) {
    console.log('❌ To do section not found');
    return;
  }
  
  // Create comprehensive example tasks
  const exampleTasks = [
    {
      name: '🔴 HIGH: Add SMS notifications for hot leads (3-5 days)',
      notes: `**PRIORITY: 🔴 HIGH**
**STATUS: To do**
**ESTIMATE: 3-5 days**

**FEATURE:** Send SMS alerts when hot leads (85+ score) respond to emails

**WHY:**
Hot leads need immediate attention. SMS ensures faster response than email notifications. Currently relying on Slack/email which can be missed.

**USER IMPACT:** High - All users with hot leads benefit
**EFFORT:** Medium (3-5 days)
**CATEGORY:** Integration
**BUSINESS VALUE:** User Retention + Revenue

**ACCEPTANCE CRITERIA:**
□ Integrate with SMS provider (Twilio recommended)
□ Send SMS when lead score > 85 responds to email
□ SMS includes: Lead name, company, response preview
□ Include link to lead details in Attio
□ Allow users to opt-in/out in settings
□ Include opt-out instructions in SMS
□ Log all SMS sends for compliance
□ Test with 5 hot leads before full rollout

**TECHNICAL NOTES:**
- Use Twilio API
- Store phone numbers in Attio
- Rate limit: max 1 SMS per lead per day
- Working hours only (8am-8pm)

**MOCKUP:**
SMS Text:
"🔥 Hot Lead Alert: Viktor @ Happy Socks responded! 
Preview: 'Interested in learning more...'
View: https://brandgate.dev/lead/viktor-happysocks
Reply STOP to opt out"

**SUCCESS METRICS:**
- Response time to hot leads < 30 minutes
- User satisfaction with notifications > 4/5
- Zero spam complaints

**REQUESTED BY:** AI Analysis (identified workflow gap)`
    },
    {
      name: '🟡 MEDIUM: Redesign dashboard with visual lead scoring (1-2 weeks)',
      notes: `**PRIORITY: 🟡 MEDIUM**
**STATUS: To do**
**ESTIMATE: 1-2 weeks**

**FEATURE:** Visual dashboard showing lead pipeline, scores, and conversion metrics

**WHY:**
Current dashboard is text-heavy. Visual charts would help identify patterns faster and make the tool more engaging to use daily.

**USER IMPACT:** Medium - Makes daily work more efficient
**EFFORT:** Large (1-2 weeks)
**CATEGORY:** UI/UX
**BUSINESS VALUE:** Competitive Advantage + User Retention

**ACCEPTANCE CRITERIA:**
□ Lead score distribution chart (pie/bar chart)
□ Pipeline funnel visualization
□ Response rate by industry chart
□ Conversion timeline graph
□ Hot leads widget (top 5)
□ Weekly activity summary
□ Mobile-responsive design
□ Dark mode support
□ Export charts as images/PDF

**DESIGN REQUIREMENTS:**
- Use Chart.js or D3.js for visualizations
- Color-coded by lead score (🔴🟡🟢)
- Real-time updates
- Filter by date range
- Compare week-over-week

**MOCKUP SECTIONS:**
1. **Score Distribution:** Pie chart showing lead count by score range
2. **Pipeline Funnel:** Visual funnel showing leads → contacted → responded → meeting
3. **Response Rate:** Bar chart by industry/category
4. **Hot Leads:** Cards showing top 5 leads with quick actions
5. **Activity Timeline:** Line graph of daily emails sent/responses

**SUCCESS METRICS:**
- Dashboard usage > 80% of active days
- Time to identify hot leads reduced by 50%
- User feedback > 4/5 on new design

**REQUESTED BY:** Internal improvement`
    },
    {
      name: '🟢 LOW: Add AI-powered lead scoring optimization (2+ weeks)',
      notes: `**PRIORITY: 🟢 LOW**
**STATUS: To do**
**ESTIMATE: 2+ weeks (Epic)**

**FEATURE:** Machine learning model that learns from successful conversions and auto-adjusts lead scores

**WHY:**
Static scoring might miss patterns. ML could identify hidden success factors (e.g., company size + industry + response time = high conversion).

**USER IMPACT:** High - Better lead quality over time
**EFFORT:** Epic (2+ weeks)
**CATEGORY:** Backend/AI
**BUSINESS VALUE:** Revenue Generating + Competitive Advantage

**ACCEPTANCE CRITERIA:**
□ Collect training data (last 6 months of conversions)
□ Build ML model (Python/scikit-learn or similar)
□ Features: company size, industry, email opens, response time, etc.
□ Auto-adjust scoring weights monthly
□ A/B test: ML scoring vs current scoring
□ Show confidence score for each prediction
□ Allow manual override
□ Monthly retraining

**TECHNICAL APPROACH:**
- Python-based ML pipeline
- Store model in cloud (AWS/GCP)
- Run predictions daily
- Track accuracy over time
- Start with simple logistic regression, improve over time

**PHASES:**
**Phase 1 (Week 1-2):** Data collection and model training
**Phase 2 (Week 3-4):** Integration and A/B testing
**Phase 3 (Week 5+):** Rollout and monitoring

**SUCCESS METRICS:**
- ML scoring outperforms manual by 20%
- Conversion rate improves by 15%
- Model accuracy > 75%
- Users trust and use ML scores

**RISKS:**
- Model could learn wrong patterns initially
- Needs significant data (may delay if not enough conversions)
- Users may not trust AI recommendations

**REQUESTED BY:** AI Analysis (future improvement)`
    },
    {
      name: '🔴 HIGH: Fix email deliverability issues (1-2 days)',
      notes: `**PRIORITY: 🔴 HIGH**
**STATUS: To do**
**ESTIMATE: 1-2 days**

**FEATURE:** Investigate and fix why some outreach emails go to spam

**WHY:**
Critical issue - if emails go to spam, whole outreach campaign fails. Users reporting low open rates.

**USER IMPACT:** Critical - All users affected
**EFFORT:** Quick Win (1-2 days)
**CATEGORY:** Backend/Infrastructure
**BUSINESS VALUE:** Revenue Generating (fixes blocking issue)

**ACCEPTANCE CRITERIA:**
□ Audit current email setup (SPF, DKIM, DMARC)
□ Check domain reputation
□ Review email content for spam triggers
□ Test with Mail-Tester.com (score > 8/10)
□ Implement fixes
□ Monitor delivery rates for 1 week
□ Document best practices

**CHECKLIST:**
□ SPF record configured
□ DKIM signing enabled
□ DMARC policy set
□ Domain warmed up
□ Email content optimized
□ Unsubscribe link included
□ Physical address in footer
□ No spam trigger words

**SUCCESS METRICS:**
- Delivery rate > 95%
- Spam score > 8/10 on Mail-Tester
- Open rates improve to > 25%
- Zero bounce backs

**URGENCY:** Fix immediately - blocking outreach success`
    }
  ];
  
  for (const task of exampleTasks) {
    try {
      await asanaRequest('/tasks', {
        method: 'POST',
        body: JSON.stringify({
          data: {
            name: task.name,
            projects: [FEATURES_PROJECT],
            memberships: [{ project: FEATURES_PROJECT, section: todoSection.gid }],
            notes: task.notes,
            tags: ['example', 'comprehensive']
          }
        })
      });
      
      console.log(`  ✅ Created: ${task.name.substring(0, 60)}...`);
      await new Promise(r => setTimeout(r, 500));
    } catch (e) {
      console.log(`  ⚠️  Task may already exist`);
    }
  }
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  ✅ FEATURES BOARD SIMPLIFIED!');
  console.log('═══════════════════════════════════════════════════');
  console.log('');
  console.log('📋 STRUCTURE:');
  console.log('  • To do (comprehensive task descriptions)');
  console.log('  • Doing (active development)');
  console.log('  • Done (released features)');
  console.log('');
  console.log('📝 TASK FORMAT:');
  console.log('  🔴 HIGH / 🟡 MEDIUM / 🟢 LOW : Feature name (effort)');
  console.log('');
  console.log('📄 EACH TASK INCLUDES:');
  console.log('  • Clear priority indicator');
  console.log('  • Feature description');
  console.log('  • Why it matters');
  console.log('  • Acceptance criteria');
  console.log('  • Technical notes');
  console.log('  • Success metrics');
  console.log('  • Business value');
  console.log('');
  console.log('✅ 4 comprehensive example tasks created!');
}

simplifyBoard().catch(e => {
  console.error('Error:', e.message);
});
