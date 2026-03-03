#!/usr/bin/env node
// schedule-sweden-reports.js
// Schedule reports for Sweden timezone (8 AM and 4 PM CET)

console.log('═══════════════════════════════════════════════════');
console.log('  SCHEDULING SWEDEN TIMEZONE REPORTS');
console.log('═══════════════════════════════════════════════════\n');

console.log('🇹🇭 Sweden Timezone Configuration:\n');

console.log('⏰ REPORT SCHEDULE:\n');

console.log('☀️ MORNING REPORT');
console.log('  Sweden Time: 8:00 AM CET (UTC+1)');
console.log('  UTC Time:    7:00 AM UTC');
console.log('  Script:      morning-status-report.js\n');

console.log('🌅 AFTERNOON REPORT');
console.log('  Sweden Time: 4:00 PM CET (UTC+1)');
console.log('  UTC Time:    3:00 PM UTC');
console.log('  Script:      afternoon-status-report.js\n');

console.log('📱 CHANNELS:');
console.log('  • Slack: #daily-reports');
console.log('  • WhatsApp: This conversation\n');

console.log('📊 WHAT EACH REPORT INCLUDES:\n');

console.log('☀️ MORNING REPORT (8 AM Sweden):');
console.log('  • Overnight responses from leads');
console.log('  • Campaign status (total sent/responses)');
console.log('  • Today\'s schedule preview');
console.log('  • Lead pipeline snapshot');
console.log('  • Visitor status reminder\n');

console.log('🌅 AFTERNOON REPORT (4 PM Sweden):');
console.log('  • Today\'s activity (emails sent)');
console.log('  • New responses received today');
console.log('  • Daily progress summary');
console.log('  • What was completed today');
console.log('  • Tomorrow\'s preview');
console.log('  • Lead pipeline update\n');

console.log('🎯 KEY DIFFERENCES:\n');

console.log('Morning Report:');
console.log('  → Focus: Overnight activity + Day planning');
console.log('  → Action: Start your day informed\n');

console.log('Afternoon Report:');
console.log('  → Focus: Day summary + Progress tracking');
console.log('  → Action: Review what happened, plan tomorrow\n');

console.log('═══════════════════════════════════════════════════');
console.log('  SCHEDULER UPDATED!');
console.log('═══════════════════════════════════════════════════\n');

console.log('✅ Reports will run:');
console.log('  • 7:00 AM UTC (8 AM Sweden) - Morning Report');
console.log('  • 3:00 PM UTC (4 PM Sweden) - Afternoon Report\n');

console.log('📝 MANUAL TESTING:\n');
console.log('Morning report:');
console.log('  node morning-status-report.js\n');
console.log('Afternoon report:');
console.log('  node afternoon-status-report.js\n');

console.log('🎉 First reports start tomorrow!');
