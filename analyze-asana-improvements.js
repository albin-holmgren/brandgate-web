#!/usr/bin/env node
// analyze-asana-improvements.js
// Analyze current Asana setup and suggest improvements

const fs = require('fs');

const TOKEN_FILE = '/home/node/.openclaw/workspace/.asana-token.json';
const ASANA_API_BASE = 'https://app.asana.com/api/1.0';
const OPERATIONS_PROJECT = '1213474894327849';
const FEATURES_PROJECT = '1213475126754388';

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
  if (!token) throw new Error('No token');
  
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
    throw new Error(data.errors[0].message);
  }
  return data;
}

async function analyzeCurrentSetup() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  ASANA SETUP ANALYSIS & IMPROVEMENTS');
  console.log('═══════════════════════════════════════════════════\n');
  
  // Get project details
  const opsProject = await asanaRequest(`/projects/${OPERATIONS_PROJECT}`);
  const featProject = await asanaRequest(`/projects/${FEATURES_PROJECT}`);
  
  console.log('📊 CURRENT STATE:');
  console.log(`  Operations Project: ${opsProject.data.name}`);
  console.log(`  Features Project: ${featProject.data.name}\n`);
  
  // Get custom fields
  console.log('🔍 Checking for custom fields...');
  try {
    const customFields = await asanaRequest(`/projects/${OPERATIONS_PROJECT}/custom_field_settings`);
    console.log(`  Custom fields: ${customFields.data.length}`);
    if (customFields.data.length === 0) {
      console.log('  ❌ No custom fields found\n');
    } else {
      customFields.data.forEach(f => {
        console.log(`    • ${f.custom_field.name}`);
      });
      console.log('');
    }
  } catch (e) {
    console.log('  ❌ Could not check custom fields\n');
  }
  
  // Count tasks
  const opsTasks = await asanaRequest(`/projects/${OPERATIONS_PROJECT}/tasks?opt_fields=name,completed`);
  const totalOps = opsTasks.data.length;
  const completedOps = opsTasks.data.filter(t => t.completed).length;
  
  console.log('📈 TASK STATISTICS:');
  console.log(`  Operations: ${completedOps}/${totalOps} completed`);
  console.log(`  Completion rate: ${((completedOps/totalOps)*100).toFixed(1)}%\n`);
  
  return { opsProject, featProject };
}

async function suggestImprovements() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  💡 SUGGESTED IMPROVEMENTS');
  console.log('═══════════════════════════════════════════════════\n');
  
  const improvements = [
    {
      title: '1. Custom Fields for Better Tracking',
      priority: 'HIGH',
      impact: 'Major',
      description: `
Add custom fields to track:
• Lead Score (number: 0-100)
• Priority (dropdown: 🔴 High / 🟡 Medium / 🟢 Low)
• Task Type (dropdown: Daily / Weekly / Monthly / One-time)
• Status (dropdown: Not Started / In Progress / Blocked / Completed)
• Time Estimate (number: hours)
• Actual Time (number: hours)

Benefits:
- Filter and sort tasks by priority
- Track lead scores for outreach
- See time estimates vs actual
- Better reporting and analytics`,
      implementation: 'Easy'
    },
    {
      title: '2. Tags/Labels for Categorization',
      priority: 'MEDIUM',
      impact: 'Medium',
      description: `
Add tags to tasks:
• #hot-lead (for leads 85+)
• #follow-up (for response needed)
• #content (for blog/SEO tasks)
• #urgent (for immediate action)
• #optimization (for A/B tests)
• #automated (for AI-completed tasks)

Benefits:
- Quick visual categorization
- Filter by tag
- Color-coded priority
- Better organization`,
      implementation: 'Easy'
    },
    {
      title: '3. Task Templates for Recurring Work',
      priority: 'HIGH',
      impact: 'Major',
      description: `
Create templates for:
• Daily outreach email task
• Hot lead response follow-up
• Blog post publishing checklist
• Weekly analytics review
• SEO health check

Template includes:
- Pre-filled description
- Subtasks/checklist
- Time estimate
- Assigned section
- Default priority

Benefits:
- Consistent task structure
- Faster task creation
- Nothing forgotten
- Standardized workflow`,
      implementation: 'Medium'
    },
    {
      title: '4. Due Date Automation',
      priority: 'HIGH',
      impact: 'Major',
      description: `
Set up automatic due dates:
• Daily tasks: Today
• Hot leads: +2 hours (urgent)
• Follow-ups: +2 days
• Content: Specific publish dates
• Weekly reviews: Fridays
• Monthly: Last day of month

Benefits:
- Clear deadlines
- Calendar view
- Overdue alerts
- Better planning`,
      implementation: 'Medium'
    },
    {
      title: '5. Subtasks for Complex Items',
      priority: 'MEDIUM',
      impact: 'Medium',
      description: `
Break down complex tasks:
• "Send outreach emails" →
  - Select 5 highest-scoring leads
  - Personalize email for each
  - Send with 45s delay
  - Update campaign log
  - Move to "Waiting"

• "Publish blog post" →
  - Write content (English)
  - Create Swedish translation
  - Add hreflang tags
  - SEO optimize
  - Publish
  - Submit to GSC
  - Share on LinkedIn

Benefits:
- Step-by-step guidance
- Track progress
- Nothing missed
- Better estimation`,
      implementation: 'Medium'
    },
    {
      title: '6. Dependencies & Blocking',
      priority: 'LOW',
      impact: 'Low',
      description: `
Set task dependencies:
• "Follow up with lead" blocks on "Lead responds"
• "Publish blog" blocks on "Write content"
• "Send batch 2" blocks on "Complete batch 1"

Benefits:
- Clear workflow order
- Know what's waiting
- Prevent premature actions
- Better planning`,
      implementation: 'Hard'
    },
    {
      title: '7. Time Tracking Integration',
      priority: 'LOW',
      impact: 'Medium',
      description: `
Track time spent on tasks:
• Actual time vs estimate
• Daily/weekly time reports
• Identify time sinks
• Optimize workflow

Integration options:
• Asana native (limited)
• Harvest (recommended)
• Toggl
• Clockify

Benefits:
- Understand time usage
- Better estimates
- Identify bottlenecks
- Cost analysis`,
      implementation: 'Medium'
    },
    {
      title: '8. Automation Rules (Rules Engine)',
      priority: 'HIGH',
      impact: 'Major',
      description: `
Create automation rules:
• When task moved to "Hot Leads" → Send Slack alert
• When task marked completed → Move to "History"
• When due date passed → Add "Overdue" tag
• When lead score > 85 → Set priority to "High"
• When task in "Waiting" for 5 days → Create follow-up

Benefits:
- Less manual work
- Never miss alerts
- Automatic organization
- Consistent workflow`,
      implementation: 'Hard'
    },
    {
      title: '9. Reporting Dashboard',
      priority: 'MEDIUM',
      impact: 'Medium',
      description: `
Create dashboard views:
• Weekly completion rate
• Tasks by priority
• Time to completion
• Hot leads conversion
• Content publishing schedule
• Optimization A/B test results

Benefits:
- Visual progress tracking
- Identify trends
- Performance metrics
- Data-driven decisions`,
      implementation: 'Medium'
    },
    {
      title: '10. Integration Enhancements',
      priority: 'MEDIUM',
      impact: 'Medium',
      description: `
Better integrations:
• Slack: Rich notifications with task details
• Gmail: Create task from email
• Calendar: Sync due dates
• Attio: Two-way sync for leads
• GitHub: Link feature requests to code
• Zapier: Connect 5000+ apps

Benefits:
- Centralized workflow
- Less context switching
- Automatic data sync
- Better notifications`,
      implementation: 'Medium'
    }
  ];
  
  improvements.forEach((imp, i) => {
    console.log(`${imp.title}`);
    console.log(`Priority: ${imp.priority} | Impact: ${imp.impact} | Implementation: ${imp.implementation}`);
    console.log(imp.description);
    console.log('');
    
    if (i < improvements.length - 1) {
      console.log('─'.repeat(60));
      console.log('');
    }
  });
}

async function recommendTop3() {
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  🎯 TOP 3 RECOMMENDATIONS');
  console.log('═══════════════════════════════════════════════════\n');
  
  console.log('Based on impact vs effort, I recommend:');
  console.log('');
  
  console.log('1️⃣ CUSTOM FIELDS (HIGH Priority)');
  console.log('   Why: Immediate impact on organization and filtering');
  console.log('   Effort: Easy (30 minutes setup)');
  console.log('   Value: Major - Track lead scores, priorities, status');
  console.log('');
  
  console.log('2️⃣ TASK TEMPLATES (HIGH Priority)');
  console.log('   Why: Consistency and speed for recurring tasks');
  console.log('   Effort: Medium (1 hour to create templates)');
  console.log('   Value: Major - Never forget steps, faster task creation');
  console.log('');
  
  console.log('3️⃣ AUTOMATION RULES (HIGH Priority)');
  console.log('   Why: Reduce manual work, ensure consistency');
  console.log('   Effort: Hard (2-3 hours to set up rules)');
  console.log('   Value: Major - Auto-alerts, auto-organization, less manual work');
  console.log('');
  
  console.log('💡 Start with #1 (Custom Fields) - easiest and highest immediate impact!');
  console.log('');
}

async function main() {
  try {
    await analyzeCurrentSetup();
    await suggestImprovements();
    await recommendTop3();
  } catch (e) {
    console.error('Error:', e.message);
  }
}

main();
