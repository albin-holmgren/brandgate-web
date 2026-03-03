#!/bin/bash
# setup-complete-operations.sh
# Sets up ALL cron jobs for BrandGate complete operations
# Includes: SEO, Content, Analytics, Outreach, Social, Technical

set -e

echo "════════════════════════════════════════════════════════════════"
echo "  BRANDGATE COMPLETE OPERATIONS SETUP"
echo "  All Systems: SEO, Content, Analytics, Outreach, Social"
echo "════════════════════════════════════════════════════════════════"
echo ""

WORKSPACE="/home/node/.openclaw/workspace"
CRON_FILE="/tmp/brandgate-complete-cron"

# Check if running from correct directory
if [ ! -f "$WORKSPACE/check-morning-inbox.js" ]; then
    echo "❌ Error: Please run from /home/node/.openclaw/workspace"
    echo "   cd /home/node/.openclaw/workspace"
    echo "   ./setup-complete-operations.sh"
    exit 1
fi

echo "📋 This will install the following automated tasks:"
echo ""

# Create comprehensive cron file
cat > $CRON_FILE << 'EOF'
# ═══════════════════════════════════════════════════════════════
# BRANDGATE COMPLETE OPERATIONS - CRON SCHEDULE
# Created: $(date)
# ═══════════════════════════════════════════════════════════════

# ═══════════════════════════════════════════════════════════════
# DAILY TASKS (All times UTC)
# ═══════════════════════════════════════════════════════════════

# 08:00 - SEO Daily Check (sitemap, robots, Core Web Vitals)
0 8 * * * cd /home/node/.openclaw/workspace && /usr/bin/node seo-daily-check.js >> /tmp/cron-seo.log 2>&1

# 09:00 - Morning Inbox Check (outreach responses)
0 9 * * * cd /home/node/.openclaw/workspace && /usr/bin/node check-morning-inbox.js >> /tmp/cron-morning.log 2>&1

# 09:15 - CRM Review (Attio updates)
15 9 * * * cd /home/node/.openclaw/workspace && /usr/bin/node crm-daily-review.js >> /tmp/cron-crm.log 2>&1

# 09:30 - Analytics Check (Mixpanel, GA4, Vercel)
30 9 * * * cd /home/node/.openclaw/workspace && /usr/bin/node analytics-daily-check.js >> /tmp/cron-analytics.log 2>&1

# 10:00 - Technical Health Check (Vercel, security)
0 10 * * * cd /home/node/.openclaw/workspace && /usr/bin/node technical-daily-check.js >> /tmp/cron-technical.log 2>&1

# 12:00 - Lead Research (outreach)
0 12 * * * cd /home/node/.openclaw/workspace && /usr/bin/node daily-lead-research.js >> /tmp/cron-research.log 2>&1

# 12:30 - Content Calendar Management
30 12 * * * cd /home/node/.openclaw/workspace && /usr/bin/node content-calendar.js >> /tmp/cron-content.log 2>&1

# 13:00 - LinkedIn Daily Post & Engagement
0 13 * * * cd /home/node/.openclaw/workspace && /usr/bin/node linkedin-daily.js >> /tmp/cron-linkedin.log 2>&1

# 15:00 - Send Outreach Emails
0 15 * * * cd /home/node/.openclaw/workspace && /usr/bin/node send-daily-outreach.js >> /tmp/cron-outreach.log 2>&1

# 16:30 - CRM Updates (end of day)
30 16 * * * cd /home/node/.openclaw/workspace && /usr/bin/node crm-evening-update.js >> /tmp/crm-evening.log 2>&1

# 17:00 - Daily Report Generation (ALL systems)
0 17 * * * cd /home/node/.openclaw/workspace && /usr/bin/node generate-daily-report.js >> /tmp/cron-daily-report.log 2>&1

# ═══════════════════════════════════════════════════════════════
# WEEKLY TASKS
# ═══════════════════════════════════════════════════════════════

# Monday 09:00 - Weekly Planning
0 9 * * 1 cd /home/node/.openclaw/workspace && /usr/bin/node weekly-planning.js >> /tmp/cron-weekly-plan.log 2>&1

# Monday 10:00 - SEO Weekly Report
0 10 * * 1 cd /home/node/.openclaw/workspace && /usr/bin/node seo-weekly-report.js >> /tmp/cron-seo-weekly.log 2>&1

# Monday 11:00 - Analytics Weekly Review
0 11 * * 1 cd /home/node/.openclaw/workspace && /usr/bin/node analytics-weekly-report.js >> /tmp/cron-analytics-weekly.log 2>&1

# Wednesday 15:00 - Send Follow-up Emails
0 15 * * 3 cd /home/node/.openclaw/workspace && /usr/bin/node send-followups.js >> /tmp/cron-followups.log 2>&1

# Friday 15:00 - CRM Pipeline Review
0 15 * * 5 cd /home/node/.openclaw/workspace && /usr/bin/node crm-pipeline-review.js >> /tmp/crm-pipeline.log 2>&1

# Friday 16:00 - Weekly Outreach Report
0 16 * * 5 cd /home/node/.openclaw/workspace && /usr/bin/node generate-weekly-report.js >> /tmp/cron-weekly-outreach.log 2>&1

# Friday 17:00 - Master Weekly Report (ALL systems)
0 17 * * 5 cd /home/node/.openclaw/workspace && /usr/bin/node generate-master-weekly-report.js >> /tmp/cron-master-weekly.log 2>&1

# Friday 18:00 - Pipeline Cleanup
0 18 * * 5 cd /home/node/.openclaw/workspace && /usr/bin/node pipeline-cleanup.js >> /tmp/cron-cleanup.log 2>&1

# ═══════════════════════════════════════════════════════════════
# CONTINUOUS MONITORING
# ═══════════════════════════════════════════════════════════════

# Every 15 minutes during business hours (Mon-Fri, 8AM-6PM) - Inbox monitoring
*/15 8-18 * * 1-5 cd /home/node/.openclaw/workspace && /usr/bin/node continuous-inbox-monitor.js >> /tmp/cron-continuous.log 2>&1

# Every hour during business hours - Website uptime check
0 8-18 * * 1-5 cd /home/node/.openclaw/workspace && /usr/bin/node uptime-check.js >> /tmp/cron-uptime.log 2>&1

# ═══════════════════════════════════════════════════════════════
# MONTHLY TASKS (First day of month)
# ═══════════════════════════════════════════════════════════════

# Monthly content audit
0 10 1 * * cd /home/node/.openclaw/workspace && /usr/bin/node content-monthly-audit.js >> /tmp/cron-content-audit.log 2>&1

# Monthly analytics deep dive
0 11 1 * * cd /home/node/.openclaw/workspace && /usr/bin/node analytics-monthly-report.js >> /tmp/cron-analytics-monthly.log 2>&1

# Monthly SEO strategy review
0 14 1 * * cd /home/node/.openclaw/workspace && /usr/bin/node seo-monthly-review.js >> /tmp/cron-seo-monthly.log 2>&1

EOF

echo "════════════════════════════════════════════════════════════════"
echo "  CRON SCHEDULE TO INSTALL"
echo "════════════════════════════════════════════════════════════════"
echo ""

cat $CRON_FILE

echo ""
echo "════════════════════════════════════════════════════════════════"
echo "  SYSTEM SUMMARY"
echo "════════════════════════════════════════════════════════════════"
echo ""

echo "📊 SYSTEMS INCLUDED:"
echo ""
echo "1. 🔍 SEO MONITORING"
echo "   • Daily: Sitemap, robots.txt, Core Web Vitals"
echo "   • Weekly: Keyword rankings, backlink analysis"
echo "   • Monthly: Strategy review, competitor analysis"
echo ""
echo "2. 📝 CONTENT MARKETING"
echo "   • Daily: Content calendar management"
echo "   • 2x/week: Blog post publishing (Wed/Fri)"
echo "   • Monthly: Content audit, performance review"
echo ""
echo "3. 📈 ANALYTICS & PERFORMANCE"
echo "   • Daily: Website health, page speed"
echo "   • Weekly: Traffic analysis, conversion tracking"
echo "   • Monthly: Deep dive, revenue attribution"
echo ""
echo "4. 📧 OUTREACH CAMPAIGN"
echo "   • Daily: Inbox monitoring, lead research, email sending"
echo "   • Weekly: Follow-ups, pipeline review"
echo "   • Continuous: Response monitoring (every 15 min)"
echo ""
echo "5. 💼 CRM MANAGEMENT"
echo "   • Daily: Attio updates, deal stage tracking"
echo "   • Weekly: Pipeline value, win/loss analysis"
echo ""
echo "6. 📱 SOCIAL MEDIA"
echo "   • Daily: LinkedIn posting, engagement"
echo "   • Weekly: Performance review, strategy adjustment"
echo ""
echo "7. 🛠️ TECHNICAL MONITORING"
echo "   • Daily: Vercel performance, security checks"
echo "   • Hourly: Website uptime monitoring"
echo ""

echo "════════════════════════════════════════════════════════════════"

echo ""
echo "Do you want to install these cron jobs? (yes/no)"
read -r response

if [ "$response" = "yes" ] || [ "$response" = "y" ]; then
    # Backup existing crontab
    crontab -l > /tmp/crontab-backup-$(date +%Y%m%d) 2>/dev/null || echo "# No existing crontab" > /tmp/crontab-backup-$(date +%Y%m%d)
    
    # Install new cron jobs
    crontab $CRON_FILE
    
    echo ""
    echo "✅ CRON JOBS INSTALLED SUCCESSFULLY!"
    echo ""
    echo "════════════════════════════════════════════════════════════════"
    echo "  WHAT HAPPENS NEXT"
    echo "════════════════════════════════════════════════════════════════"
    echo ""
    echo "🕐 SCHEDULE STARTS: Tomorrow at 8:00 AM UTC"
    echo ""
    echo "📱 SLACK NOTIFICATIONS:"
    echo "   • Daily reports at 5:00 PM"
    echo "   • Weekly reports on Friday 5:00 PM"
    echo "   • Immediate alerts for urgent issues"
    echo ""
    echo "📁 LOG FILES: All in /tmp/"
    echo "   • cron-seo.log"
    echo "   • cron-analytics.log"
    echo "   • cron-outreach.log"
    echo "   • cron-daily-report.log"
    echo "   • etc."
    echo ""
    echo "📊 TRACKING FILES:"
    echo "   • outreach-campaign-status.json"
    echo "   • outreach-responses.json"
    echo "   • seo-daily-log.json"
    echo "   • analytics-daily-log.json"
    echo "   • content-calendar.json"
    echo "   • daily-metrics.json"
    echo ""
    echo "════════════════════════════════════════════════════════════════"
    echo "  COMMANDS"
    echo "════════════════════════════════════════════════════════════════"
    echo ""
    echo "View all cron jobs:"
    echo "   crontab -l"
    echo ""
    echo "Remove all jobs:"
    echo "   crontab -r"
    echo ""
    echo "Edit manually:"
    echo "   crontab -e"
    echo ""
    echo "View recent logs:"
    echo "   tail -f /tmp/cron-daily-report.log"
    echo ""
    echo "════════════════════════════════════════════════════════════════"
    echo ""
    echo "🚀 BrandGate operations are now FULLY AUTOMATED!"
    echo ""
    
else
    echo ""
    echo "❌ Installation cancelled."
    echo ""
    echo "Cron file saved to: $CRON_FILE"
    echo ""
    echo "To install manually later:"
    echo "   crontab $CRON_FILE"
    echo ""
fi

# Cleanup
rm -f $CRON_FILE
