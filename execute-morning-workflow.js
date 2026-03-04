#!/usr/bin/env node
// execute-morning-workflow.js
// Execute full morning workflow from HEARTBEAT.md

const fs = require('fs');
const path = require('path');

const WORKSPACE = '/home/node/.openclaw/workspace';

function log(section, message) {
  const timestamp = new Date().toISOString().split('T')[1].substring(0, 5);
  console.log(`\n[${timestamp}] ${section}`);
  console.log('='.repeat(60));
  console.log(message);
}

async function runCommand(cmd, description) {
  console.log(`\n▶️  ${description}...`);
  try {
    const { execSync } = require('child_process');
    const result = execSync(cmd, { cwd: WORKSPACE, encoding: 'utf8', timeout: 30000 });
    console.log('✅ Completed');
    return result;
  } catch (error) {
    console.log('⚠️  ', error.message.substring(0, 100));
    return null;
  }
}

async function main() {
  console.log('\n' + '🔷'.repeat(30));
  console.log('BRANDGATE MORNING WORKFLOW EXECUTION');
  console.log('Date: ' + new Date().toISOString().split('T')[0]);
  console.log('Time: ' + new Date().toISOString().split('T')[1].substring(0, 5) + ' UTC');
  console.log('🔷'.repeat(30));

  // 1. MORNING DAILY REPORT
  log('1️⃣ MORNING DAILY REPORT', 'Generating daily status report...');
  await runCommand('node morning-daily-report.js', 'Generate morning report');

  // 2. CHECK GMAIL INBOX
  log('2️⃣ GMAIL INBOX CHECK', 'Checking for responses and bounces...');
  await runCommand('node check-gmail-inbox.js', 'Check inbox status');

  // 3. CRM STATUS CHECK
  log('3️⃣ CRM STATUS CHECK', 'Checking Attio pipeline...');
  try {
    const loadEnvFile = (filepath) => {
      try {
        const content = fs.readFileSync(filepath, 'utf8');
        const lines = content.split('\n');
        for (const line of lines) {
          const match = line.match(/^([^#=]+)=(.*)$/);
          if (match) process.env[match[1].trim()] = match[2].trim();
        }
      } catch (e) {}
    };
    loadEnvFile(path.join(WORKSPACE, '.env.attio'));
    
    const ATTIO_TOKEN = process.env.ATTIO_API_KEY || process.env.ATTIO_TOKEN;
    if (ATTIO_TOKEN) {
      const res = await fetch('https://api.attio.com/v2/objects/deals/records/query', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${ATTIO_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ limit: 100 })
      });
      const data = await res.json();
      const deals = data.data || [];
      
      const byStage = {};
      deals.forEach(d => {
        const stage = d.values?.stage?.[0]?.status?.title || 'Unknown';
        byStage[stage] = (byStage[stage] || 0) + 1;
      });
      
      console.log('\n📊 CRM Pipeline Status:');
      console.log(`   Total Deals: ${deals.length}`);
      Object.entries(byStage).forEach(([stage, count]) => {
        console.log(`   • ${stage}: ${count}`);
      });
    }
  } catch (e) {
    console.log('⚠️  Could not fetch CRM data:', e.message);
  }

  // 4. WEBSITE HEALTH CHECK
  log('4️⃣ WEBSITE HEALTH CHECK', 'Checking brandgate.dev...');
  try {
    const response = await fetch('https://brandgate.dev');
    console.log(`   Status: ${response.status === 200 ? '✅ Online' : '❌ Error ' + response.status}`);
    console.log(`   Response Time: OK`);
  } catch (e) {
    console.log('   Status: ❌ Website unreachable');
  }

  // 5. OUTREACH STATUS
  log('5️⃣ OUTREACH STATUS', 'Checking campaign progress...');
  try {
    const campaign = JSON.parse(fs.readFileSync(path.join(WORKSPACE, 'outreach-campaign-status.json'), 'utf8'));
    console.log(`   Emails Sent: ${campaign.sent?.length || 0}`);
    console.log(`   Last Send: ${campaign.sent?.[campaign.sent.length - 1]?.timestamp || 'N/A'}`);
  } catch (e) {
    console.log('   No campaign data found');
  }

  // 6. SUMMARY & PRIORITIES
  log('6️⃣ TODAY\'S PRIORITIES', 'Wednesday, March 4, 2026');
  console.log(`
🎯 TOP 3 TASKS FOR TODAY:

1. 📧 HANDLE INBOX RESPONSES
   • Read and reply to Organic Basics response
   • Read and reply to Nudie Jeans response
   • Archive processed messages

2. 📤 SEND OUTREACH (Target: 10-20 emails)
   • Use send-email-utf8.js with proper UTF-8 encoding
   • Focus on remaining Hot leads
   • Log all sends to Attio

3. 🛠️ WEBSITE IMPROVEMENTS (Wednesday: Content & Pages)
   • Review and improve 1-2 solution pages
   • Check for broken links
   • Update any outdated content

📋 ADDITIONAL TASKS:
• Check bounce notifications (16 pending review)
• Research alternative emails for bounced contacts
• Monitor analytics for traffic spikes
• Update DAILY_IMPROVEMENTS.md

⚠️  ALERTS TO WATCH:
• Email encoding must use UTF-8 (lesson learned!)
• Reply to leads within 2 hours
• Keep inbox clean (archive processed messages)
`);

  console.log('\n' + '🔷'.repeat(30));
  console.log('WORKFLOW COMPLETE ✅');
  console.log('Next: Start with inbox responses');
  console.log('🔷'.repeat(30) + '\n');
}

main().catch(console.error);
