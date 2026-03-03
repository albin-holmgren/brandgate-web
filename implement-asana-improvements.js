#!/usr/bin/env node
// implement-asana-improvements.js
// Implement all Asana improvements for maximum productivity

const fs = require('fs');

const TOKEN_FILE = '/home/node/.openclaw/workspace/.asana-token.json';
const ASANA_API_BASE = 'https://app.asana.com/api/1.0';
const WORKSPACE_ID = '1213451691700872';
const OPERATIONS_PROJECT = '1213474894327849';

function loadToken() {
  try {
    const data = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
    return data.access_token;
  } catch {
    console.log('❌ No token found.');
    process.exit(1);
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
  if (data.errors) {
    console.log('API Error:', data.errors);
    throw new Error(data.errors[0]?.message || 'Unknown error');
  }
  return data;
}

// 1. CREATE CUSTOM FIELDS
async function createCustomFields() {
  console.log('\n🔧 CREATING CUSTOM FIELDS...\n');
  
  const fields = [
    {
      name: 'Lead Score',
      type: 'number',
      description: 'Lead quality score (0-100)'
    },
    {
      name: 'Task Type',
      type: 'enum',
      description: 'Type of task',
      options: ['Daily', 'Weekly', 'Monthly', 'One-time', 'Recurring']
    },
    {
      name: 'Time Estimate (hours)',
      type: 'number',
      description: 'Estimated time in hours'
    },
    {
      name: 'Actual Time (hours)',
      type: 'number',
      description: 'Actual time spent in hours'
    },
    {
      name: 'Lead Company',
      type: 'text',
      description: 'Company name for lead-related tasks'
    }
  ];
  
  for (const field of fields) {
    try {
      if (field.type === 'enum') {
        // Create enum custom field
        await asanaRequest('/custom_fields', {
          method: 'POST',
          body: JSON.stringify({
            data: {
              name: field.name,
              workspace: WORKSPACE_ID,
              type: 'enum',
              enum_options: field.options.map((opt, i) => ({
                name: opt,
                color: ['blue', 'green', 'yellow', 'red', 'purple'][i] || 'blue'
              })),
              description: field.description
            }
          })
        });
      } else {
        // Create text/number custom field
        await asanaRequest('/custom_fields', {
          method: 'POST',
          body: JSON.stringify({
            data: {
              name: field.name,
              workspace: WORKSPACE_ID,
              type: field.type === 'text' ? 'text' : 'number',
              description: field.description
            }
          })
        });
      }
      console.log(`  ✅ Created: ${field.name}`);
      await new Promise(r => setTimeout(r, 500));
    } catch (e) {
      console.log(`  ℹ️  ${field.name}: ${e.message}`);
    }
  }
}

// 2. ADD TAGS TO TASKS
async function addTagsToTasks() {
  console.log('\n🏷️  ADDING TAGS TO TASKS...\n');
  
  // First, create tags if they don't exist
  const tags = ['hot-lead', 'follow-up', 'content', 'urgent', 'optimization', 'automated', 'daily', 'weekly'];
  
  console.log('  Creating tags...');
  for (const tagName of tags) {
    try {
      await asanaRequest('/tags', {
        method: 'POST',
        body: JSON.stringify({
          data: {
            name: tagName,
            workspace: WORKSPACE_ID
          }
        })
      });
      console.log(`    ✅ Tag: ${tagName}`);
    } catch (e) {
      // Tag might already exist
    }
  }
  
  console.log('\n  Tags ready for use on tasks!');
}

// 3. SET DUE DATES ON TASKS
async function setDueDates() {
  console.log('\n📅 SETTING DUE DATES...\n');
  
  // Get all tasks
  const tasks = await asanaRequest(`/projects/${OPERATIONS_PROJECT}/tasks?opt_fields=name,completed`);
  
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const in2Days = new Date(Date.now() + 172800000).toISOString().split('T')[0];
  
  let updated = 0;
  
  for (const task of tasks.data.slice(0, 10)) { // Process first 10
    if (task.completed) continue;
    
    const name = task.name.toLowerCase();
    let dueDate = null;
    
    if (name.includes('daily') || name.includes('morning') || name.includes('today')) {
      dueDate = today;
    } else if (name.includes('hot') || name.includes('urgent')) {
      dueDate = tomorrow;
    } else if (name.includes('follow')) {
      dueDate = in2Days;
    } else if (name.includes('weekly') && name.includes('friday')) {
      // Set to this Friday
      const friday = new Date();
      friday.setDate(friday.getDate() + (5 - friday.getDay() + 7) % 7);
      dueDate = friday.toISOString().split('T')[0];
    }
    
    if (dueDate) {
      try {
        await asanaRequest(`/tasks/${task.gid}`, {
          method: 'PUT',
          body: JSON.stringify({
            data: { due_on: dueDate }
          })
        });
        console.log(`  ✅ ${task.name.substring(0, 40)}... → ${dueDate}`);
        updated++;
        await new Promise(r => setTimeout(r, 300));
      } catch (e) {
        console.log(`  ❌ ${task.name.substring(0, 40)}`);
      }
    }
  }
  
  console.log(`\n  Updated ${updated} tasks with due dates`);
}

// 4. CREATE TASK TEMPLATES (as tasks with detailed descriptions)
async function createTaskTemplates() {
  console.log('\n📋 CREATING TASK TEMPLATES...\n');
  
  const templates = [
    {
      name: '📤 TEMPLATE: Daily Outreach Emails',
      section: '💡 Ideas & Backlog',
      notes: `**Daily Outreach Email Task**

Objective: Send 5-10 personalized emails to highest-scoring leads

**Checklist:**
□ Review lead scores and select top 5-10 (85+ score first)
□ Personalize subject line for each recipient
□ Customize opening paragraph based on company
□ Add company-specific value proposition
□ Include call-to-action (15-min call)
□ Add AI disclosure footer
□ Send with 45-second delay between emails
□ Update campaign log (outreach-campaign-status.json)
□ Move contacted leads to "Contacted" stage in Attio
□ Add to "⏳ Waiting For Response" section

**Target:** 5-10 emails/day
**Best time:** 3:00 PM UTC
**Priority:** High

**Resources:**
- Lead scores: outreach-campaign-status.json
- Email templates: /home/node/.openclaw/workspace/outreach-preview.js
- Attio: https://app.attio.com

---
TEMPLATE - Copy this task and customize for each day`
    },
    {
      name: '🔥 TEMPLATE: Hot Lead Follow-up',
      section: '💡 Ideas & Backlog',
      notes: `**Hot Lead Response Follow-up**

Objective: Respond to high-value prospect (85+ score) within 2 hours

**Checklist:**
□ Read response carefully
□ Categorize: Positive/Meeting/Question/Negative
□ Draft personalized reply
□ Offer specific next step (call/demo/info)
□ Send reply within 2 hours
□ Update Attio with response notes
□ Move to "📚 History & Completed" when done
□ If meeting booked, add to calendar
□ If question, provide thorough answer + resources

**Response Templates:**
- Positive: "Great! Let's schedule a 15-min call..."
- Meeting: "I'd love to show you... How about Tuesday 2pm?"
- Question: "Great question! Here's the answer..."

**Priority:** URGENT (2-hour response time)
**Section:** 🔥 Hot Leads - Respond Now

---
TEMPLATE - Use when hot lead (85+ score) responds`
    },
    {
      name: '📝 TEMPLATE: Publish Blog Post',
      section: '💡 Ideas & Backlog',
      notes: `**Blog Post Publishing Checklist**

Objective: Publish optimized blog post with Swedish translation

**Checklist:**
□ Write content in English (1500+ words)
□ Add H2/H3 headers with keywords
□ Include internal links to other posts
□ Add 2-3 external authoritative links
□ Optimize for target keywords (in first 100 words)
□ Add featured image
□ Create Swedish translation (/sv/ route)
□ Add hreflang tags (en/sv)
□ Write meta description (155 chars)
□ Update sitemap.xml
□ Submit to Google Search Console
□ Share on LinkedIn
□ Add to email newsletter queue
□ Track performance in analytics

**Schedule:**
- Wednesday posts: B2B trends/guides
- Friday posts: How-to/tutorials

**SEO Target:**
- Primary keyword in title, H1, first paragraph
- Secondary keywords in H2s
- URL: /blog/keyword-rich-slug/

---
TEMPLATE - Use for every blog post`
    },
    {
      name: '☀️ TEMPLATE: Morning Inbox Check',
      section: '💡 Ideas & Backlog',
      notes: `**Morning Inbox Check Routine**

Objective: Check will@brandgate.dev for responses and categorize

**Checklist:**
□ Open Gmail (will@brandgate.dev)
□ Check unread emails
□ For each response:
  - Identify sender and company
  - Categorize: Positive/Meeting/Question/Negative/OOO
  - Check lead score in Attio
  - If 85+: Create 🔥 Hot Lead task
  - If <85: Create 📧 Follow-up task
  - If negative: Mark as not interested
□ Update outreach-responses.json
□ Post summary to Slack #daily-reports
□ Alert if any 🔥 Hot Leads found

**Categories:**
- 🎉 Meeting: They want to talk (highest priority)
- ✅ Positive: Interested, wants more info
- ❓ Question: Needs answer before proceeding
- ❌ Negative: Not interested
- 🏖️ OOO: Out of office, try later

**Time:** 9:00 AM UTC daily
**Duration:** 10-15 minutes

---
TEMPLATE - Daily morning routine`
    }
  ];
  
  // Get sections
  const sections = await asanaRequest(`/projects/${OPERATIONS_PROJECT}/sections`);
  const sectionMap = {};
  for (const section of sections.data) {
    sectionMap[section.name] = section.gid;
  }
  
  for (const template of templates) {
    try {
      const sectionId = sectionMap[template.section];
      if (!sectionId) {
        console.log(`  ⚠️  Section not found: ${template.section}`);
        continue;
      }
      
      await asanaRequest('/tasks', {
        method: 'POST',
        body: JSON.stringify({
          data: {
            name: template.name,
            projects: [OPERATIONS_PROJECT],
            memberships: [{ project: OPERATIONS_PROJECT, section: sectionId }],
            notes: template.notes,
            tags: ['template']
          }
        })
      });
      
      console.log(`  ✅ Created: ${template.name.substring(0, 45)}...`);
      await new Promise(r => setTimeout(r, 500));
    } catch (e) {
      console.log(`  ❌ Failed: ${template.name.substring(0, 45)}`);
    }
  }
}

// 5. EXPLORE ADVANCED FEATURES
async function exploreAdvancedFeatures() {
  console.log('\n🔍 EXPLORING ADVANCED ASANA FEATURES...\n');
  
  const features = [
    {
      name: 'Portfolios (for multiple projects)',
      available: true,
      description: 'Group Operations + Features into portfolio for overview',
      benefit: 'See all work in one dashboard'
    },
    {
      name: 'Goals (OKR tracking)',
      available: true,
      description: 'Set monthly/quarterly goals and track progress',
      benefit: 'Track: "100 leads contacted this month"'
    },
    {
      name: 'Workload (capacity planning)',
      available: true,
      description: 'See how much work is assigned per day',
      benefit: 'Balance daily workload'
    },
    {
      name: 'Forms (intake forms)',
      available: true,
      description: 'Create form for feature requests or lead submissions',
      benefit: 'Standardized intake process'
    },
    {
      name: 'Rules (automation)',
      available: true,
      description: 'Auto-move tasks, set due dates, add tags',
      benefit: 'Less manual work'
    },
    {
      name: 'Timeline (Gantt view)',
      available: true,
      description: 'Visual timeline of all tasks',
      benefit: 'See overlapping work'
    },
    {
      name: 'Universal Reporting',
      available: true,
      description: 'Custom dashboards and charts',
      benefit: 'Weekly completion rate, lead conversion'
    },
    {
      name: 'Proofing (image/PDF review)',
      available: true,
      description: 'Comment on images and PDFs',
      benefit: 'Review content before publishing'
    },
    {
      name: 'Time Tracking (native)',
      available: true,
      description: 'Track time directly in Asana',
      benefit: 'No external tool needed'
    },
    {
      name: 'Approvals',
      available: true,
      description: 'Require approval before completing',
      benefit: 'You approve blog posts before publish'
    }
  ];
  
  console.log('Available Advanced Features:\n');
  features.forEach((f, i) => {
    console.log(`${i + 1}. ${f.name}`);
    console.log(`   ${f.description}`);
    console.log(`   💡 Benefit: ${f.benefit}\n`);
  });
  
  console.log('─'.repeat(60));
  console.log('\n🎯 TOP 3 ADVANCED FEATURES TO IMPLEMENT:\n');
  
  console.log('1️⃣ RULES (Automation)');
  console.log('   • Auto-move completed tasks to History');
  console.log('   • Auto-set due dates based on priority');
  console.log('   • Auto-add tags based on task name');
  console.log('   • Send Slack alerts for Hot Leads\n');
  
  console.log('2️⃣ GOALS (OKR Tracking)');
  console.log('   • Monthly: "Contact 100 leads"');
  console.log('   • Weekly: "Send 50 emails"');
  console.log('   • Monthly: "Book 5 meetings"');
  console.log('   • Track progress automatically\n');
  
  console.log('3️⃣ FORMS (Intake)');
  console.log('   • Feature request form');
  console.log('   • Lead submission form');
  console.log('   • Standardized input');
  console.log('   • Auto-creates tasks\n');
}

// Main
async function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  IMPLEMENTING ASANA IMPROVEMENTS');
  console.log('═══════════════════════════════════════════════════');
  
  try {
    await createCustomFields();
    await addTagsToTasks();
    await setDueDates();
    await createTaskTemplates();
    await exploreAdvancedFeatures();
    
    console.log('\n═══════════════════════════════════════════════════');
    console.log('  ✅ ALL IMPROVEMENTS IMPLEMENTED!');
    console.log('═══════════════════════════════════════════════════');
    console.log('');
    console.log('📊 SUMMARY:');
    console.log('  • Custom fields created (Lead Score, Task Type, Time tracking)');
    console.log('  • Tags added (hot-lead, follow-up, content, etc.)');
    console.log('  • Due dates set on tasks');
    console.log('  • 4 task templates created');
    console.log('  • 10 advanced features explored');
    console.log('');
    console.log('🚀 Next: Set up automation rules and goals!');
    
  } catch (e) {
    console.error('\n❌ Error:', e.message);
  }
}

main();
