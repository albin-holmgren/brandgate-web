#!/usr/bin/env node
// setup-asana-automation.js
// Create automation rules for Asana

const fs = require('fs');

const TOKEN_FILE = '/home/node/.openclaw/workspace/.asana-token.json';
const ASANA_API_BASE = 'https://app.asana.com/api/1.0';
const OPERATIONS_PROJECT = '1213474894327849';

function loadToken() {
  try {
    const data = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
    return data.access_token;
  } catch {
    return null;
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
  if (data.errors && !data.data) {
    // Some endpoints return errors for unsupported features
    return { data: null, errors: data.errors };
  }
  return data;
}

async function setupAutomation() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  ASANA AUTOMATION RULES');
  console.log('═══════════════════════════════════════════════════\n');
  
  console.log('📋 AUTOMATION RULES TO IMPLEMENT:\n');
  
  const rules = [
    {
      name: '1. Hot Lead Alert',
      trigger: 'Task moved to "🔥 Hot Leads" section',
      action: 'Send Slack notification immediately',
      status: 'MANUAL SETUP NEEDED',
      setup: 'Use Asana Rules in UI: When task added to section → Trigger webhook → Slack alert'
    },
    {
      name: '2. Auto-complete Daily Tasks',
      trigger: 'Task marked complete in "📊 Daily Tasks"',
      action: 'Add completion timestamp comment',
      status: 'API-BASED',
      implementation: 'Implemented in continuous-task-worker.js'
    },
    {
      name: '3. Overdue Task Alert',
      trigger: 'Due date passed and task not complete',
      action: 'Add "overdue" tag and notify',
      status: 'MANUAL SETUP NEEDED',
      setup: 'Asana Rules: When due date passed → Add tag → Send notification'
    },
    {
      name: '4. Auto-set Priority from Lead Score',
      trigger: 'Lead Score field > 85',
      action: 'Set Priority to "High" and move to Hot Leads',
      status: 'MANUAL SETUP NEEDED',
      setup: 'Asana Rules: When custom field changes → If > 85 → Set priority → Move section'
    },
    {
      name: '5. Waiting Too Long Alert',
      trigger: 'Task in "⏳ Waiting" for 5+ days',
      action: 'Create follow-up task',
      status: 'API-BASED',
      implementation: 'Will be implemented in worker script'
    },
    {
      name: '6. Auto-tag by Task Name',
      trigger: 'Task created with specific keywords',
      action: 'Add appropriate tag',
      status: 'API-BASED',
      implementation: 'Implement in task creation workflow'
    }
  ];
  
  for (const rule of rules) {
    console.log(`${rule.name}`);
    console.log(`   Trigger: ${rule.trigger}`);
    console.log(`   Action: ${rule.action}`);
    console.log(`   Status: ${rule.status}`);
    if (rule.setup) {
      console.log(`   Setup: ${rule.setup}`);
    }
    console.log('');
  }
  
  console.log('─'.repeat(60));
  console.log('\n⚠️  IMPORTANT:\n');
  console.log('Asana Automation Rules require Business/Enterprise plan');
  console.log('or manual setup through Asana web interface.\n');
  console.log('For now, automation is handled via:');
  console.log('  • continuous-task-worker.js (API-based)');
  console.log('  • asana-workflow-updated.js (manual triggers)');
  console.log('  • Scheduler checks (every 15 minutes)\n');
  
  console.log('📝 MANUAL SETUP INSTRUCTIONS:\n');
  console.log('1. Go to: https://app.asana.com');
  console.log('2. Open OpenClaw project');
  console.log('3. Click "Customize" → "Rules"');
  console.log('4. Create rule: "When task added to section"');
  console.log('5. Set trigger: "🔥 Hot Leads - Respond Now"');
  console.log('6. Set action: "Send notification to Slack"');
  console.log('   (Requires Asana + Slack integration)\n');
}

async function setupGoals() {
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  ASANA GOALS (OKR TRACKING)');
  console.log('═══════════════════════════════════════════════════\n');
  
  const goals = [
    {
      period: 'March 2026',
      objective: 'Launch BrandGate Outreach Campaign',
      keyResults: [
        'Contact 100 new leads',
        'Send 200 outreach emails',
        'Book 5 discovery meetings',
        'Achieve 10% response rate',
        'Convert 1 lead to pilot customer'
      ]
    },
    {
      period: 'Weekly',
      objective: 'Consistent Daily Operations',
      keyResults: [
        'Complete 100% of daily tasks',
        'Respond to all hot leads within 2 hours',
        'Research 30+ new companies',
        'Publish 2 blog posts',
        'Send 50+ outreach emails'
      ]
    },
    {
      period: 'Q1 2026',
      objective: 'BrandGate Growth & Optimization',
      keyResults: [
        'Reach 500+ website visitors/month',
        'Generate 10+ trial signups',
        'Build pipeline of 200+ qualified leads',
        'Achieve 5%+ trial-to-paid conversion',
        'Reduce hosting costs by 80% (done!)'
      ]
    }
  ];
  
  for (const goal of goals) {
    console.log(`📅 ${goal.period}`);
    console.log(`🎯 ${goal.objective}\n`);
    console.log('Key Results:');
    goal.keyResults.forEach((kr, i) => {
      console.log(`  ${i + 1}. ${kr}`);
    });
    console.log('');
    console.log('─'.repeat(60));
    console.log('');
  }
  
  console.log('💡 HOW TO SET UP GOALS:\n');
  console.log('1. Go to: https://app.asana.com/goals');
  console.log('2. Click "Create Goal"');
  console.log('3. Add objectives and key results above');
  console.log('4. Link relevant tasks to each goal');
  console.log('5. Track progress automatically\n');
  
  console.log('📊 GOAL TRACKING:\n');
  console.log('Current Progress:');
  console.log('  ✅ Hosting costs reduced: $360 → $58/month');
  console.log('  ✅ Asana workspace organized');
  console.log('  ✅ 5 outreach emails sent');
  console.log('  🔄 Daily operations automated');
  console.log('  ⏳ Waiting for responses...\n');
}

async function main() {
  await setupAutomation();
  await setupGoals();
  
  console.log('═══════════════════════════════════════════════════');
  console.log('  ✅ AUTOMATION & GOALS DOCUMENTED');
  console.log('═══════════════════════════════════════════════════');
}

main().catch(e => {
  console.error('Error:', e.message);
});
