#!/usr/bin/env node
// setup-asana-workflow.js
// Complete Asana workflow setup for BrandGate
// Run after: node asana-integration.js auth <code>

const fs = require('fs');

const TOKEN_FILE = '/home/node/.openclaw/workspace/.asana-token.json';
const ASANA_API_BASE = 'https://app.asana.com/api/1.0';

// Load token
function loadToken() {
  try {
    const data = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
    return data.access_token;
  } catch {
    console.log('❌ No token found. Run: node asana-integration.js auth <code>');
    process.exit(1);
  }
}

// API request helper
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
    throw new Error(data.errors[0].message);
  }
  return data;
}

// Get workspaces
async function getWorkspaces() {
  return asanaRequest('/workspaces');
}

// Create project
async function createProject(workspaceId, name) {
  return asanaRequest('/projects', {
    method: 'POST',
    body: JSON.stringify({
      data: {
        workspace: workspaceId,
        name: name,
        notes: 'BrandGate complete operations tracking - outreach, content, analytics, SEO, and optimization tasks'
      }
    })
  });
}

// Create section
async function createSection(projectId, name) {
  return asanaRequest(`/projects/${projectId}/sections`, {
    method: 'POST',
    body: JSON.stringify({
      data: { name: name }
    })
  });
}

// Create task
async function createTask(projectId, sectionId, task) {
  return asanaRequest('/tasks', {
    method: 'POST',
    body: JSON.stringify({
      data: {
        projects: [projectId],
        memberships: [{ project: projectId, section: sectionId }],
        name: task.name,
        notes: task.notes,
        due_on: task.dueDate,
        assignee: task.assignee
      }
    })
  });
}

async function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  SETTING UP ASANA WORKFLOW');
  console.log('═══════════════════════════════════════════════════\n');
  
  // Get workspace
  console.log('📁 Finding workspace...');
  const workspaces = await getWorkspaces();
  
  if (workspaces.data.length === 0) {
    console.log('❌ No workspaces found');
    return;
  }
  
  const workspace = workspaces.data[0];
  console.log(`✅ Using workspace: ${workspace.name}\n`);
  
  // Create project
  console.log('📋 Creating BrandGate project...');
  const project = await createProject(workspace.gid, 'BrandGate Operations');
  const projectId = project.data.gid;
  console.log(`✅ Project created: ${project.data.name}\n`);
  
  // Create sections
  console.log('📑 Creating sections...');
  const sections = {};
  
  const sectionNames = [
    '📧 Daily Outreach',
    '🔍 Lead Research', 
    '📝 Content & SEO',
    '📊 Analytics & Reports',
    '🎯 Optimization Tasks',
    '✅ Completed',
    '📚 History & Archive'
  ];
  
  for (const name of sectionNames) {
    const section = await createSection(projectId, name);
    sections[name] = section.data.gid;
    console.log(`  ✅ ${name}`);
  }
  
  console.log('\n📝 Creating tasks...\n');
  
  // === DAILY OUTREACH TASKS ===
  console.log('📧 Daily Outreach Tasks:');
  
  const dailyOutreachTasks = [
    {
      name: '☀️ Morning: Check inbox for responses (9:00 AM)',
      notes: 'Check will@brandgate.dev for replies\nCategorize responses: positive, meeting, question, negative\nUpdate Attio deal stages\nAlert for hot leads',
      dueDate: null
    },
    {
      name: '📤 Afternoon: Send outreach emails (3:00 PM)',
      notes: 'Send 5-10 personalized emails\nTarget highest lead scores first\nRespect daily limits\nUpdate campaign log',
      dueDate: null
    },
    {
      name: '📈 Evening: Update CRM & log results (4:30 PM)',
      notes: 'Move contacted leads to "Contacted" stage\nAdd conversation notes\nSet follow-up reminders\nUpdate pipeline metrics',
      dueDate: null
    },
    {
      name: '🔄 Wednesday: Send follow-up emails',
      notes: 'Identify non-responders (5+ days)\nSend follow-up #1\nLog in tracker\nUpdate follow-up dates',
      dueDate: null
    }
  ];
  
  for (const task of dailyOutreachTasks) {
    await createTask(projectId, sections['📧 Daily Outreach'], task);
    console.log(`  ✅ ${task.name}`);
  }
  
  // === LEAD RESEARCH TASKS ===
  console.log('\n🔍 Lead Research Tasks:');
  
  const leadResearchTasks = [
    {
      name: '🔎 Research 5-10 new Swedish companies (12:00 PM)',
      notes: 'Sources:\n• allabolag.se (filter: €2M+ revenue, 10+ employees)\n• LinkedIn Sales Navigator\n• Swedish Trade Council\n• Industry news (Breakit, DI)\n\nTarget: Swedish B2B companies\nScore: 75+ lead score\nAdd to Attio with complete data',
      dueDate: null
    },
    {
      name: '📊 Weekly: Update lead scoring criteria',
      notes: 'Review what\'s working\nAdjust scoring weights\nIdentify new lead sources\nAnalyze conversion by source',
      dueDate: null
    },
    {
      name: '🎯 Find decision maker contacts',
      notes: 'LinkedIn research\nFind emails via Hunter.io or similar\nVerify email format\nAdd to Attio with roles',
      dueDate: null
    }
  ];
  
  for (const task of leadResearchTasks) {
    await createTask(projectId, sections['🔍 Lead Research'], task);
    console.log(`  ✅ ${task.name}`);
  }
  
  // === CONTENT & SEO TASKS ===
  console.log('\n📝 Content & SEO Tasks:');
  
  const contentSEOTasks = [
    {
      name: '🔍 Daily: SEO health check (8:00 AM)',
      notes: 'Check sitemap.xml\nVerify robots.txt\nTest Core Web Vitals\nCheck all blog posts load\nMonitor keyword rankings',
      dueDate: null
    },
    {
      name: '📝 Monday: Content planning (2:00 PM)',
      notes: 'Plan 2 blog posts for the week\nResearch trending topics\nCheck competitor content\nTarget keywords: B2B distribution, wholesale, Sweden',
      dueDate: null
    },
    {
      name: '📰 Wednesday: Publish blog post',
      notes: 'Write content (English)\nCreate Swedish translation (/sv/)\nAdd hreflang tags\nOptimize for keywords\nAdd internal links\nPublish to brandgate.dev/blog/',
      dueDate: null
    },
    {
      name: '📰 Friday: Publish blog post',
      notes: 'Same as Wednesday post\nDifferent topic\nSubmit to Google Search Console\nShare on LinkedIn',
      dueDate: null
    },
    {
      name: '🔧 Weekly: SEO optimization review',
      notes: 'Review keyword rankings\nCheck for broken links\nOptimize old content\nAnalyze top-performing posts',
      dueDate: null
    }
  ];
  
  for (const task of contentSEOTasks) {
    await createTask(projectId, sections['📝 Content & SEO'], task);
    console.log(`  ✅ ${task.name}`);
  }
  
  // === ANALYTICS & REPORTS ===
  console.log('\n📊 Analytics & Reports:');
  
  const analyticsTasks = [
    {
      name: '📈 Daily: Analytics check (9:30 AM)',
      notes: 'Mixpanel:\n• Overnight trial signups\n• Activation rates\n• Feature usage\n\nGoogle Analytics:\n• Website traffic (yesterday)\n• Top pages\n• Traffic sources\n• Bounce rate\n\nVercel:\n• Website uptime\n• Page load speeds\n• Error rates',
      dueDate: null
    },
    {
      name: '📊 Daily: Generate report (5:00 PM)',
      notes: 'Post to Slack #daily-reports:\n• Emails sent today\n• Responses received\n• Website visitors\n• SEO status\n• Any issues/alerts',
      dueDate: null
    },
    {
      name: '📈 Monday: Weekly planning (9:00 AM)',
      notes: 'Review last week performance\nIdentify best email templates\nAdjust messaging\nPlan lead segments to target',
      dueDate: null
    },
    {
      name: '📊 Friday: Master weekly report (5:00 PM)',
      notes: 'Comprehensive report to Slack:\n• All 7 system metrics\n• Week-over-week comparison\n• Goals vs actuals\n• Recommendations',
      dueDate: null
    }
  ];
  
  for (const task of analyticsTasks) {
    await createTask(projectId, sections['📊 Analytics & Reports'], task);
    console.log(`  ✅ ${task.name}`);
  }
  
  // === OPTIMIZATION TASKS ===
  console.log('\n🎯 Optimization Tasks:');
  
  const optimizationTasks = [
    {
      name: '🧪 A/B Test: Email subject lines',
      notes: 'Test different approaches:\n• Question vs statement\n• Personalization vs generic\n• Short vs descriptive\n\nTrack: Open rates, response rates',
      dueDate: null
    },
    {
      name: '🧪 A/B Test: Email body content',
      notes: 'Test:\n• Short vs long emails\n• Feature-focused vs benefit-focused\n• Different CTAs\n\nTrack: Response rates, meeting bookings',
      dueDate: null
    },
    {
      name: '📈 Optimize: Lead scoring model',
      notes: 'Analyze conversion by score\nAdjust scoring weights\nIdentify false positives/negatives\nAdd new scoring factors',
      dueDate: null
    },
    {
      name: '🔍 Optimize: Email send times',
      notes: 'Test different send times:\n• Morning (9-10 AM)\n• Afternoon (2-3 PM)\n• Late afternoon (4-5 PM)\n\nTrack: Open rates, response rates',
      dueDate: null
    },
    {
      name: '📝 Optimize: Content strategy',
      notes: 'Analyze top-performing posts\nIdentify content gaps\nResearch new topics\nUpdate old content',
      dueDate: null
    },
    {
      name: '💰 Optimize: Cost tracking',
      notes: 'Monitor Paperspace costs\nTrack ROI per lead source\nCalculate CAC (Customer Acquisition Cost)\nIdentify cost-saving opportunities',
      dueDate: null
    }
  ];
  
  for (const task of optimizationTasks) {
    await createTask(projectId, sections['🎯 Optimization Tasks'], task);
    console.log(`  ✅ ${task.name}`);
  }
  
  // === HISTORY & TRACKING TASKS ===
  console.log('\n📚 History & Tracking:');
  
  const historyTasks = [
    {
      name: '📊 Campaign History: All sent emails',
      notes: 'File: outreach-campaign-status.json\nTrack: Company, contact, date, subject, response\n\nCurrent status: 5 sent, 29 remaining\nHot leads: 11\nWarm leads: 18',
      dueDate: null
    },
    {
      name: '📊 Campaign History: All responses',
      notes: 'File: outreach-responses.json\nTrack: Who responded, when, category, next steps\n\nCategories: Positive, Meeting, Question, Negative, OOO',
      dueDate: null
    },
    {
      name: '📈 Monthly: Deep analytics review',
      notes: 'Month-over-month comparison\nChannel attribution\nROI calculation\nStrategy adjustments\nContent performance review',
      dueDate: null
    },
    {
      name: '📚 Archive: Old leads and data',
      notes: 'Archive cold leads (no response after 2 follow-ups)\nClean pipeline\nVerify data accuracy\nBackup important files',
      dueDate: null
    }
  ];
  
  for (const task of historyTasks) {
    await createTask(projectId, sections['📚 History & Archive'], task);
    console.log(`  ✅ ${task.name}`);
  }
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  ✅ ASANA WORKFLOW SETUP COMPLETE!');
  console.log('═══════════════════════════════════════════════════');
  console.log('');
  console.log('📊 CREATED:');
  console.log(`  • Project: BrandGate Operations`);
  console.log(`  • Sections: ${sectionNames.length}`);
  console.log(`  • Tasks: ${dailyOutreachTasks.length + leadResearchTasks.length + contentSEOTasks.length + analyticsTasks.length + optimizationTasks.length + historyTasks.length}`);
  console.log('');
  console.log('🔗 PROJECT URL:');
  console.log(`  https://app.asana.com/0/${projectId}`);
  console.log('');
  console.log('🎯 HOW TO USE:');
  console.log('  1. Visit the project in Asana');
  console.log('  2. Tasks auto-create based on schedule');
  console.log('  3. Move tasks to "✅ Completed" when done');
  console.log('  4. Track history in "📚 History & Archive"');
  console.log('  5. Review "🎯 Optimization Tasks" monthly');
  console.log('');
  console.log('📱 DAILY WORKFLOW:');
  console.log('  Morning (9 AM): Check inbox responses');
  console.log('  Noon (12 PM): Research new leads');
  console.log('  Afternoon (3 PM): Send outreach emails');
  console.log('  Evening (5 PM): Generate daily report');
  console.log('');
  console.log('✅ All set! You and the AI can now track everything!');
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
