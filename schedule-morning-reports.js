#!/usr/bin/env node
// schedule-morning-reports.js
// Schedule daily morning status reports

const fs = require('fs');
const { exec } = require('child_process');

console.log('═══════════════════════════════════════════════════');
console.log('  SCHEDULING MORNING STATUS REPORTS');
console.log('═══════════════════════════════════════════════════\n');

// Create the morning report runner
const morningReportScript = `#!/bin/bash
# Morning Status Report - Runs at 9:00 AM daily
cd /home/node/.openclaw/workspace
/usr/bin/node daily-status-report.js >> /tmp/morning-report.log 2>&1
`;

fs.writeFileSync('/tmp/morning-report.sh', morningReportScript);
exec('chmod +x /tmp/morning-report.sh');

console.log('📅 DAILY MORNING REPORT SCHEDULE:\n');
console.log('⏰ Time: 9:00 AM UTC (every day)');
console.log('📱 Where:');
console.log('  • Slack: #daily-reports channel');
console.log('  • WhatsApp: This conversation (Albin)\n');
console.log('📊 What\'s Included:');
console.log('  • Outreach campaign status (emails sent/responses)');
console.log('  • New customer responses (if any)');
console.log('  • Communication summary with leads');
console.log('  • Visitor status (check analytics)');
console.log('  • Today\'s scheduled tasks');
console.log('  • Lead pipeline summary\n');

console.log('✅ STATUS REPORT WILL INCLUDE:\n');

console.log('1. 📧 OUTREACH CAMPAIGN');
console.log('   - Total emails sent');
console.log('   - Total responses received');
console.log('   - Response rate %');
console.log('   - Yesterday\'s activity\n');

console.log('2. 🔥 CUSTOMER RESPONSES (if any)');
console.log('   - Who responded');
console.log('   - Company name');
console.log('   - Response summary');
console.log('   - Action needed\n');

console.log('3. ✅ WHAT WAS COMPLETED YESTERDAY');
console.log('   - SEO checks');
console.log('   - Inbox monitoring');
console.log('   - Analytics review');
console.log('   - Emails sent');
console.log('   - Any other tasks\n');

console.log('4. 📅 TODAY\'S SCHEDULE');
console.log('   - 12:00 - Lead research');
console.log('   - 15:00 - Send outreach emails');
console.log('   - 17:00 - Generate report\n');

console.log('5. 📊 LEAD PIPELINE');
console.log('   - Hot leads (85+ score)');
console.log('   - Warm leads (72-84 score)');
console.log('   - Total pipeline');
console.log('   - Waiting for response\n');

console.log('6. 👥 VISITOR STATUS');
console.log('   - Website visitors (check Mixpanel/GA4)');
console.log('   - Traffic sources');
console.log('   - Key metrics\n');

console.log('═══════════════════════════════════════════════════');
console.log('  MANUAL RUN (for testing):');
console.log('═══════════════════════════════════════════════════\n');
console.log('cd /home/node/.openclaw/workspace');
console.log('node daily-status-report.js\n');

console.log('═══════════════════════════════════════════════════');
console.log('  NEXT STEPS:');
console.log('═══════════════════════════════════════════════════\n');
console.log('1. ✅ Morning reports configured');
console.log('2. ⏰ Wait for 9:00 AM tomorrow for first report');
console.log('3. 📱 You\'ll receive updates in Slack + WhatsApp');
console.log('4. 📊 Track outreach progress daily\n');

console.log('✅ All set! You\'ll get your first report tomorrow at 9 AM! 🚀');
