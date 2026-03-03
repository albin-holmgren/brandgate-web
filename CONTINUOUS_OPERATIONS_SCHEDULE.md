# BrandGate Continuous Operations Schedule

## DAILY TASKS

### Morning (9:00 AM UTC) - 📧 Inbox Monitoring
**Task:** Check will@brandgate.dev for responses
**Duration:** 10-15 minutes
**Actions:**
- Check inbox for new replies
- Log all responses in outreach-responses.json
- Categorize responses (positive, negative, question, out-of-office)
- Update Attio deal stages based on responses
- Draft reply emails for positive responses
- Alert Albin immediately of any hot leads or meeting requests

**Script:** `check-morning-inbox.js`

---

### Mid-Day (12:00 PM UTC) - 🔍 Lead Research
**Task:** Research 5-10 new Swedish companies
**Duration:** 30-45 minutes
**Actions:**
- Search allabolag.se for target industries
- Check LinkedIn for companies hiring sales roles
- Review Swedish business news (Breakit, DI)
- Score new leads (target 75+ score)
- Add qualified leads to Attio
- Prepare contact lists for outreach

**Target:** 5-10 new companies/day = 25-50/week

**Script:** `daily-lead-research.js`

---

### Afternoon (3:00 PM UTC) - 📧 Send Outreach
**Task:** Send daily outreach emails
**Duration:** 20-30 minutes
**Actions:**
- Check daily limit (Week 1: 10-15 emails max)
- Select highest-scoring leads from queue
- Personalize emails for each recipient
- Send emails with 45-second delays between
- Update campaign log
- Move contacted leads to "Contacted" stage in Attio

**Script:** `send-daily-outreach.js`

---

### Evening (5:00 PM UTC) - 📊 Daily Report
**Task:** Generate daily metrics report
**Duration:** 10 minutes
**Actions:**
- Count emails sent today
- Count responses received
- Update pipeline metrics
- Send summary to Albin
- Plan tomorrow's outreach
- Set follow-up reminders

**Script:** `generate-daily-report.js`

**Output:** Post to Slack #daily-reports

---

## WEEKLY TASKS

### Monday Morning (9:00 AM) - 📈 Weekly Planning
**Task:** Plan week's outreach strategy
**Duration:** 30 minutes
**Actions:**
- Review last week's performance
- Identify best-performing email templates
- Adjust messaging based on responses
- Plan which lead segments to target
- Set weekly targets (emails, responses, meetings)
- Check calendar for any conflicts

**Output:** Weekly plan document

---

### Wednesday Afternoon - 🔄 Follow-up Sequence
**Task:** Send follow-up emails to non-responders
**Duration:** 20 minutes
**Actions:**
- Identify leads contacted 5+ days ago with no response
- Send follow-up #1 (different angle/value prop)
- Log in campaign tracker
- Update follow-up dates

**Rule:** Max 2 follow-ups per lead (Day 5 and Day 12)

---

### Friday Afternoon (4:00 PM) - 📊 Weekly Report
**Task:** Generate comprehensive weekly report
**Duration:** 30 minutes
**Actions:**
- Calculate key metrics:
  - Emails sent
  - Open rate
  - Response rate
  - Positive response rate
  - Meetings booked
  - Deals moved to next stage
- Compare to targets
- Identify trends
- Recommendations for next week
- Update revenue projections

**Output:** Post to Slack #weekly-reports

---

### Friday Evening - 🧹 Pipeline Cleanup
**Task:** Clean and organize Attio pipeline
**Duration:** 20 minutes
**Actions:**
- Archive cold leads (no response after 2 follow-ups)
- Update deal values
- Verify contact information
- Remove duplicates
- Ensure all contacted leads have proper notes

---

## CONTINUOUS MONITORING (Every 15 minutes during business hours)

**Task:** Monitor will@brandgate.dev for responses
**Hours:** 8:00 AM - 6:00 PM UTC
**Actions:**
- Check for new emails
- Immediate alert for responses
- Auto-draft replies for common questions
- Log all activity

**Script:** `continuous-inbox-monitor.js` (runs in background)

---

## MONTHLY TASKS

### Last Day of Month - 📊 Monthly Review
**Task:** Comprehensive performance review
**Duration:** 1 hour
**Actions:**
- Month-over-month comparison
- Channel attribution analysis
- ROI calculation
- Strategy adjustments
- Content performance review
- Competitive analysis update

---

## AUTOMATION SCRIPTS

### Script 1: Morning Inbox Check
```javascript
// check-morning-inbox.js
// Run at 9:00 AM daily
```

### Script 2: Lead Research
```javascript
// daily-lead-research.js
// Run at 12:00 PM daily
// Target: 5-10 new companies
```

### Script 3: Send Outreach
```javascript
// send-daily-outreach.js
// Run at 3:00 PM daily
// Respects daily limits
```

### Script 4: Daily Report
```javascript
// generate-daily-report.js
// Run at 5:00 PM daily
// Posts to Slack
```

### Script 5: Weekly Report
```javascript
// generate-weekly-report.js
// Run Fridays at 4:00 PM
// Comprehensive analytics
```

### Script 6: Follow-up Sequence
```javascript
// send-followups.js
// Run Wednesdays at 3:00 PM
// Only non-responders from 5+ days ago
```

### Script 7: Continuous Monitor
```javascript
// continuous-inbox-monitor.js
// Runs every 15 minutes
// Background daemon
```

---

## CRON SCHEDULE

```bash
# Daily Tasks
0 9 * * * cd /home/node/.openclaw/workspace && node check-morning-inbox.js >> /tmp/cron-morning.log 2>&1
0 12 * * * cd /home/node/.openclaw/workspace && node daily-lead-research.js >> /tmp/cron-research.log 2>&1
0 15 * * * cd /home/node/.openclaw/workspace && node send-daily-outreach.js >> /tmp/cron-outreach.log 2>&1
0 17 * * * cd /home/node/.openclaw/workspace && node generate-daily-report.js >> /tmp/cron-daily-report.log 2>&1

# Weekly Tasks
0 9 * * 1 cd /home/node/.openclaw/workspace && node weekly-planning.js >> /tmp/cron-weekly-plan.log 2>&1
0 15 * * 3 cd /home/node/.openclaw/workspace && node send-followups.js >> /tmp/cron-followups.log 2>&1
0 16 * * 5 cd /home/node/.openclaw/workspace && node generate-weekly-report.js >> /tmp/cron-weekly-report.log 2>&1
0 18 * * 5 cd /home/node/.openclaw/workspace && node pipeline-cleanup.js >> /tmp/cron-cleanup.log 2>&1

# Continuous (every 15 minutes)
*/15 8-18 * * 1-5 cd /home/node/.openclaw/workspace && node continuous-inbox-monitor.js >> /tmp/cron-continuous.log 2>&1
```

---

## DAILY METRICS TO TRACK

### Email Metrics:
- [ ] Emails sent today
- [ ] Emails remaining in queue
- [ ] Responses received today
- [ ] Response type (positive/negative/question/OOO)
- [ ] Open rate (if tracking enabled)

### Pipeline Metrics:
- [ ] New leads added
- [ ] Leads moved to "Contacted"
- [ ] Leads moved to "Interested"
- [ ] Meetings booked
- [ ] Deals closed (won/lost)

### Activity Metrics:
- [ ] New companies researched
- [ ] Contacts added to Attio
- [ ] Follow-ups sent
- [ ] Time spent on outreach

---

## WEEKLY TARGETS

| Metric | Week 1 | Week 2 | Week 3 | Week 4 |
|--------|--------|--------|--------|--------|
| New leads added | 25 | 35 | 45 | 50 |
| Emails sent | 50 | 75 | 100 | 125 |
| Responses | 3-5 | 5-8 | 8-12 | 12-15 |
| Positive responses | 1-2 | 2-3 | 3-5 | 5-8 |
| Meetings booked | 0-1 | 1-2 | 2-3 | 3-5 |
| Deals won | 0 | 0 | 0-1 | 1-2 |

---

## ALERT TRIGGERS (Notify Albin Immediately)

### 🚨 Urgent (Within 1 hour):
- Meeting booking request received
- Hot lead asks for demo/pricing
- Competitor mentioned
- Technical issue with email

### ⚠️ Important (Same day):
- Response rate drops below 2%
- 3+ unsubscribe requests in one day
- Email delivery issues
- Attio API errors

### 📊 Daily (End of day):
- Summary of all responses
- Daily metrics report
- Tomorrow's plan

---

## FILES & LOGS

**Campaign Tracking:**
- `outreach-campaign-status.json` - All sent emails
- `outreach-responses.json` - All replies
- `lead-pipeline.json` - Lead database
- `daily-metrics.json` - Daily stats
- `weekly-reports/` - Weekly summary files

**Log Files:**
- `/tmp/cron-morning.log` - Morning inbox checks
- `/tmp/cron-research.log` - Lead research
- `/tmp/cron-outreach.log` - Email sends
- `/tmp/cron-daily-report.log` - Daily reports
- `/tmp/cron-continuous.log` - Continuous monitoring

---

## SUCCESS CRITERIA

### Month 1 Goals:
- [ ] 100+ new leads in Attio
- [ ] 200+ outreach emails sent
- [ ] 10-15 responses received
- [ ] 3-5 meetings booked
- [ ] 1-2 pilot customers signed

### Month 3 Goals:
- [ ] 300+ leads in pipeline
- [ ] 15+ active conversations
- [ ] 5-10 pilot/customer deals
- [ ] €10K+ MRR from new customers

---

**Next:** I'll create all the automation scripts and set up the cron schedule.
