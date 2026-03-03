#!/usr/bin/env node
// send-daily-outreach.js
// Daily outreach email sending

const fs = require('fs');

console.log('📧 SEND DAILY OUTREACH');
console.log('═══════════════════════════════════════════════════\n');

const CAMPAIGN_FILE = '/home/node/.openclaw/workspace/outreach-campaign-status.json';

// Load campaign data
let campaign = { sent: [] };
try {
  campaign = JSON.parse(fs.readFileSync(CAMPAIGN_FILE, 'utf8'));
} catch {}

const totalSent = campaign.sent?.length || 0;
const remainingHot = 11; // 16 total - 5 sent
const remainingWarm = 18;

console.log(`📊 CAMPAIGN STATUS:`);
console.log(`   Total sent: ${totalSent}`);
console.log(`   Remaining Hot leads: ${remainingHot}`);
console.log(`   Remaining Warm leads: ${remainingWarm}\n`);

console.log('📋 DAILY TARGET:');
console.log(`   Send ${Math.min(10, remainingHot + remainingWarm)} emails today\n`);

console.log('⚠️  MANUAL ACTION REQUIRED:');
console.log('   Run: node send-batch2.js to send next batch\n');
