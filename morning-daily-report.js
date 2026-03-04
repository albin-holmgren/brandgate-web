#!/usr/bin/env node
// Morning Daily Report for BrandGate
// Sends daily summary via Slack

const fs = require('fs');
const path = require('path');
const WORKSPACE = '/home/node/.openclaw/workspace';

// Load tokens from environment or config files
function loadEnvFile(filepath) {
  try {
    const content = fs.readFileSync(filepath, 'utf8');
    const lines = content.split('\n');
    for (const line of lines) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) {
        process.env[match[1].trim()] = match[2].trim();
      }
    }
  } catch (e) {
    // File doesn't exist
  }
}

// Load env files
loadEnvFile(path.join(WORKSPACE, '.env.attio'));
loadEnvFile(path.join(WORKSPACE, '.env.slack'));

const SLACK_TOKEN = process.env.SLACK_BOT_TOKEN || process.env.SLACK_TOKEN || '';
const ATTIO_TOKEN = process.env.ATTIO_API_KEY || process.env.ATTIO_TOKEN || '';

async function sendSlackMessage(message) {
  if (!SLACK_TOKEN) {
    console.log('No Slack token configured, logging to console only:');
    console.log(message);
    return;
  }
  
  try {
    const response = await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SLACK_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        channel: '#daily-reports',
        text: message,
        mrkdwn: true
      })
    });
    const data = await response.json();
    if (!data.ok) {
      console.error('Slack error:', data.error);
    }
  } catch (error) {
    console.error('Failed to send Slack message:', error.message);
  }
}

async function getAttioStats() {
  if (!ATTIO_TOKEN) {
    return { deals: 'N/A', contacted: 'N/A', qualified: 'N/A' };
  }
  
  try {
    const response = await fetch('https://api.attio.com/v2/objects/deals/records/query', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ATTIO_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ limit: 100 })
    });
    const data = await response.json();
    const deals = data.data || [];
    
    const contacted = deals.filter(d => d.values?.stage?.[0]?.status?.title === 'Contacted').length;
    const qualified = deals.filter(d => d.values?.stage?.[0]?.status?.title === 'Qualified').length;
    
    return { deals: deals.length, contacted, qualified };
  } catch (error) {
    console.error('Attio error:', error.message);
    return { deals: 'Error', contacted: 'Error', qualified: 'Error' };
  }
}

async function generateReport() {
  const now = new Date();
  const date = now.toISOString().split('T')[0];
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  
  const stats = await getAttioStats();
  
  const report = `📊 *BrandGate Daily Report - ${dayName}, ${date}*

*CRM Status:*
• Total Deals: ${stats.deals}
• Contacted: ${stats.contacted}
• Qualified: ${stats.qualified}

*Today's Tasks:*
• ☀️ Morning inbox check (will@brandgate.dev)
• 📧 Review email responses
• 🎯 Send 10-20 outreach emails
• 📝 Check content calendar
• 📈 Monitor analytics

*Quick Links:*
• Attio: https://app.attio.com/workspace/brandgate/entries
• Gmail: https://mail.google.com
• Website: https://brandgate.dev

_Have a productive day! 🤖_`;

  // Always log to console
  console.log('\n' + '='.repeat(60));
  console.log('BRANDGATE MORNING DAILY REPORT');
  console.log('='.repeat(60));
  console.log(report);
  console.log('='.repeat(60) + '\n');
  
  await sendSlackMessage(report);
}

// Run the report
generateReport().catch(console.error);
