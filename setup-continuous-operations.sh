#!/bin/bash
# setup-continuous-operations.sh
# Sets up all cron jobs for BrandGate continuous operations
# Run once to install the automation

echo "═══════════════════════════════════════════════════"
echo "  BRANDGATE CONTINUOUS OPERATIONS SETUP"
echo "═══════════════════════════════════════════════════"
echo ""

WORKSPACE="/home/node/.openclaw/workspace"
CRON_FILE="/tmp/brandgate-cron-tmp"

# Create cron file
cat > $CRON_FILE << 'EOF'
# BrandGate Continuous Operations Cron Jobs
# Created: $(date)

# Daily Tasks (UTC)
# Morning inbox check - 9:00 AM
0 9 * * * cd /home/node/.openclaw/workspace && /usr/bin/node check-morning-inbox.js >> /tmp/cron-morning.log 2>&1

# Lead research - 12:00 PM
0 12 * * * cd /home/node/.openclaw/workspace && /usr/bin/node daily-lead-research.js >> /tmp/cron-research.log 2>&1

# Send outreach - 3:00 PM
0 15 * * * cd /home/node/.openclaw/workspace && /usr/bin/node send-daily-outreach.js >> /tmp/cron-outreach.log 2>&1

# Daily report - 5:00 PM
0 17 * * * cd /home/node/.openclaw/workspace && /usr/bin/node generate-daily-report.js >> /tmp/cron-daily-report.log 2>&1

# Weekly Tasks (UTC)
# Monday morning planning - 9:00 AM
0 9 * * 1 cd /home/node/.openclaw/workspace && /usr/bin/node weekly-planning.js >> /tmp/cron-weekly-plan.log 2>&1

# Wednesday follow-ups - 3:00 PM
0 15 * * 3 cd /home/node/.openclaw/workspace && /usr/bin/node send-followups.js >> /tmp/cron-followups.log 2>&1

# Friday weekly report - 4:00 PM
0 16 * * 5 cd /home/node/.openclaw/workspace && /usr/bin/node generate-weekly-report.js >> /tmp/cron-weekly-report.log 2>&1

# Friday pipeline cleanup - 6:00 PM
0 18 * * 5 cd /home/node/.openclaw/workspace && /usr/bin/node pipeline-cleanup.js >> /tmp/cron-cleanup.log 2>&1

# Continuous monitoring (every 15 minutes during business hours 8AM-6PM, Mon-Fri)
*/15 8-18 * * 1-5 cd /home/node/.openclaw/workspace && /usr/bin/node continuous-inbox-monitor.js >> /tmp/cron-continuous.log 2>&1

EOF

echo "📋 CRON SCHEDULE TO INSTALL:"
echo "═══════════════════════════════════════════════════"
cat $CRON_FILE
echo ""

# Check if user wants to proceed
echo "Do you want to install these cron jobs? (yes/no)"
read -r response

if [ "$response" = "yes" ] || [ "$response" = "y" ]; then
    # Install cron jobs
    crontab $CRON_FILE
    echo ""
    echo "✅ Cron jobs installed successfully!"
    echo ""
    echo "📊 SCHEDULE SUMMARY:"
    echo "═══════════════════════════════════════════════════"
    echo ""
    echo "DAILY TASKS:"
    echo "  • 9:00 AM  - Morning inbox check"
    echo "  • 12:00 PM - Lead research (5-10 new companies)"
    echo "  • 3:00 PM  - Send outreach emails"
    echo "  • 5:00 PM  - Generate daily report"
    echo ""
    echo "WEEKLY TASKS:"
    echo "  • Monday 9:00 AM    - Weekly planning"
    echo "  • Wednesday 3:00 PM - Send follow-ups"
    echo "  • Friday 4:00 PM    - Weekly report"
    echo "  • Friday 6:00 PM    - Pipeline cleanup"
    echo ""
    echo "CONTINUOUS:"
    echo "  • Every 15 minutes (Mon-Fri, 8AM-6PM) - Inbox monitoring"
    echo ""
    echo "📁 LOG FILES:"
    echo "  • /tmp/cron-morning.log"
    echo "  • /tmp/cron-research.log"
    echo "  • /tmp/cron-outreach.log"
    echo "  • /tmp/cron-daily-report.log"
    echo "  • /tmp/cron-continuous.log"
    echo ""
    echo "To verify installation:"
    echo "  crontab -l"
    echo ""
    echo "To remove all jobs:"
    echo "  crontab -r"
    
else
    echo ""
    echo "❌ Installation cancelled."
    echo "Cron file saved to: $CRON_FILE"
    echo ""
    echo "To install manually later:"
    echo "  crontab $CRON_FILE"
fi

# Cleanup
rm $CRON_FILE
