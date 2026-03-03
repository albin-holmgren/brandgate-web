#!/usr/bin/env node
// setup-asana-workflow-v2.js
// Complete Asana workflow setup - Fixed for team requirement

const fs = require('fs');

const TOKEN_FILE = '/home/node/.openclaw/workspace/.asana-token.json';
const ASANA_API_BASE = 'https://app.asana.com/api/1.0';

// Load token
function loadToken() {
  try {
    const data = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
    return data.access_token;
  } catch {
    console.log('❌ No token found.');
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

// Get teams in workspace
async function getTeams(workspaceId) {
  return asanaRequest(`/workspaces/${workspaceId}/teams`);
}

// Create project (with team)
async function createProject(workspaceId, teamId, name) {
  return asanaRequest('/projects', {
    method: 'POST',
    body: JSON.stringify({
      data: {
        workspace: workspaceId,
        team: teamId,
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
  const body = {
    data: {
      projects: [projectId],
      name: task.name,
      notes: task.notes
    }
  };
  
  if (sectionId) {
    body.data.memberships = [{ project: projectId, section: sectionId }];
  }
  
  if (task.dueDate) {
    body.data.due_on = task.dueDate;
  }
  
  return asanaRequest('/tasks', {
    method: 'POST',
    body: JSON.stringify(body)
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
  console.log(`✅ Using workspace: ${workspace.name} (ID: ${workspace.gid})\n`);
  
  // Get teams
  console.log('👥 Finding teams...');
  const teams = await getTeams(workspace.gid);
  
  if (teams.data.length === 0) {
    console.log('⚠️  No teams found. Creating project without team...\n');
    var teamId = null;
  } else {
    const team = teams.data[0];
    console.log(`✅ Using team: ${team.name}\n`);
    var teamId = team.gid;
  }
  
  // Create project
  console.log('📋 Creating BrandGate project...');
  const project = await createProject(workspace.gid, teamId, 'BrandGate Operations');
  const projectId = project.data.gid;
  console.log(`✅ Project created: ${project.data.name}`);
  console.log(`🔗 URL: https://app.asana.com/0/${projectId}\n`);
  
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
    try {
      const section = await createSection(projectId, name);
      sections[name] = section.data.gid;
      console.log(`  ✅ ${name}`);
    } catch (e) {
      console.log(`  ⚠️  ${name} - ${e.message}`);
    }
  }
  
  console.log('\n📝 Creating tasks...\n');
  
  // === DAILY OUTREACH TASKS ===
  console.log('📧 Daily Outreach Tasks:');
  
  const dailyOutreachTasks = [
    {
      name: '☀️ Morning: Check inbox for responses (9:00 AM)',
      notes: 'Check will@brandgate.dev for replies\n\nActions:\n• Categorize responses: positive, meeting, question, negative\n• Update Attio deal stages\n• Alert for hot leads\n\nLogs: outreach-responses.json',
    },
    {
      name: '📤 Afternoon: Send outreach emails (3:00 PM)',
      notes: 'Send 5-10 personalized emails daily\n\nActions:\n• Target highest lead scores first\n• Respect daily limits (Week 1: 10-15 max)\n• Update campaign log\n• Move contacted leads to "Contacted" stage\n\nFile: outreach-campaign-status.json',
    },
    {
      name: '📈 Evening: Update CRM & log results (4:30 PM)',
      notes: 'End-of-day CRM updates\n\nActions:\n• Move contacted leads to "Contacted" stage\n• Add conversation notes\n• Set follow-up reminders\n• Update pipeline metrics in Attio',
    },
    {
      name: '🔄 Wednesday: Send follow-up emails (3:00 PM)',
      notes: 'Follow-up to non-responders\n\nActions:\n• Identify leads contacted 5+ days ago with no response\n• Send follow-up #1 with different angle\n• Log in campaign tracker\n• Update follow-up dates\n\nMax 2 follow-ups per lead (Day 5 & Day 12)',
    }
  ];
  
  let taskCount = 0;
  for (const task of dailyOutreachTasks) {
    try {
      await createTask(projectId, sections['📧 Daily Outreach'], task);
      console.log(`  ✅ ${task.name}`);
      taskCount++;
    } catch (e) {
      console.log(`  ❌ ${task.name} - ${e.message}`);
    }
  }
  
  // === LEAD RESEARCH TASKS ===
  console.log('\n🔍 Lead Research Tasks:');
  
  const leadResearchTasks = [
    {
      name: '🔎 Daily: Research 5-10 new Swedish companies (12:00 PM)',
      notes: 'Find new B2B leads\n\nSources:\n• allabolag.se (filter: €2M+ revenue, 10+ employees)\n• LinkedIn Sales Navigator\n• Swedish Trade Council\n• Industry news (Breakit, DI)\n\nCriteria:\n• Swedish company\n• B2B sales or wholesale business\n• €2M+ revenue OR 10+ employees\n• Growing/expanding\n\nAction: Score 75+ and add to Attio',
    },
    {
      name: '🎯 Find decision maker contacts',
      notes: 'Research contact information\n\nActions:\n• LinkedIn research for decision makers\n• Find emails via Hunter.io or similar\n• Verify email format\n• Add to Attio with roles (CEO, Sales Director, etc.)',
    },
    {
      name: '📊 Weekly: Update lead scoring model',
      notes: 'Optimize lead quality\n\nActions:\n• Review conversion by lead score\n• Adjust scoring weights\n• Identify false positives/negatives\n• Add new scoring factors\n\nScoring:\n• 90-100: TOP priority\n• 85-89: HOT\n• 75-84: WARM\n• 60-74: LUKEWARM',
    }
  ];
  
  for (const task of leadResearchTasks) {
    try {
      await createTask(projectId, sections['🔍 Lead Research'], task);
      console.log(`  ✅ ${task.name}`);
      taskCount++;
    } catch (e) {
      console.log(`  ❌ ${task.name} - ${e.message}`);
    }
  }
  
  // === CONTENT & SEO TASKS ===
  console.log('\n📝 Content & SEO Tasks:');
  
  const contentSEOTasks = [
    {
      name: '🔍 Daily: SEO health check (8:00 AM)',
      notes: 'Monitor SEO performance\n\nChecks:\n• Sitemap.xml status\n• Robots.txt validation\n• Core Web Vitals (homepage load time)\n• All 6 blog posts loading\n• Keyword ranking changes\n\nTargets:\n• Load time: <3000ms\n• All pages: 200 OK\n• Keywords: Track top 10',
    },
    {
      name: '📝 Monday: Content planning (2:00 PM)',
      notes: 'Plan weekly content\n\nActions:\n• Plan 2 blog posts for the week\n• Research trending topics in B2B distribution\n• Check competitor content\n• Target keywords: B2B distribution, wholesale, Sweden\n\nSchedule:\n• Wednesday: Publish post 1\n• Friday: Publish post 2',
    },
    {
      name: '📰 Wednesday: Publish blog post',
      notes: 'Publish and promote\n\nChecklist:\n• Write content (English)\n• Create Swedish translation (/sv/)\n• Add hreflang tags\n• Optimize for target keywords\n• Add internal links\n• Publish to brandgate.dev/blog/\n• Submit to Google Search Console',
    },
    {
      name: '📰 Friday: Publish blog post',
      notes: 'Same as Wednesday\n\nAdditional:\n• Share on LinkedIn\n• Add to email newsletter queue\n• Track initial performance',
    },
    {
      name: '🔧 Weekly: SEO optimization review',
      notes: 'Improve search performance\n\nActions:\n• Review keyword rankings\n• Check for broken links\n• Optimize old content\n• Analyze top-performing posts\n• Content gap analysis',
    }
  ];
  
  for (const task of contentSEOTasks) {
    try {
      await createTask(projectId, sections['📝 Content & SEO'], task);
      console.log(`  ✅ ${task.name}`);
      taskCount++;
    } catch (e) {
      console.log(`  ❌ ${task.name} - ${e.message}`);
    }
  }
  
  // === ANALYTICS & REPORTS ===
  console.log('\n📊 Analytics & Reports:');
  
  const analyticsTasks = [
    {
      name: '📈 Daily: Analytics check (9:30 AM)',
      notes: 'Check all metrics\n\nMixpanel:\n• Overnight trial signups\n• Activation rates\n• Feature usage\n• Funnel drop-offs\n\nGoogle Analytics:\n• Website traffic (yesterday)\n• Top pages visited\n• Traffic sources\n• Bounce rate\n• Average session duration\n\nVercel:\n• Website uptime\n• Page load speeds\n• Error rates',
    },
    {
      name: '📊 Daily: Generate report (5:00 PM)',
      notes: 'End-of-day summary\n\nPost to Slack #daily-reports:\n• Emails sent today\n• Responses received\n• Website visitors\n• SEO health status\n• Any issues/alerts\n• Tomorrow\'s priorities',
    },
    {
      name: '📈 Monday: Weekly planning (9:00 AM)',
      notes: 'Plan the week\n\nReview:\n• Last week performance\n• Identify best email templates\n• Adjust messaging\n• Plan which lead segments to target\n\nSet targets:\n• Emails to send\n• New leads to add\n• Content to publish',
    },
    {
      name: '📊 Friday: Master weekly report (5:00 PM)',
      notes: 'Comprehensive weekly review\n\nInclude:\n• All 7 system metrics\n• Week-over-week comparison\n• Goals vs actuals\n• Top performing content/emails\n• Recommendations for next week\n\nPost to Slack #weekly-reports',
    }
  ];
  
  for (const task of analyticsTasks) {
    try {
      await createTask(projectId, sections['📊 Analytics & Reports'], task);
      console.log(`  ✅ ${task.name}`);
      taskCount++;
    } catch (e) {
      console.log(`  ❌ ${task.name} - ${e.message}`);
    }
  }
  
  // === OPTIMIZATION TASKS ===
  console.log('\n🎯 Optimization Tasks:');
  
  const optimizationTasks = [
    {
      name: '🧪 A/B Test: Email subject lines',
      notes: 'Improve open rates\n\nTest variations:\n• Question vs statement\n• Personalization vs generic\n• Short vs descriptive\n• With vs without company name\n\nTrack:\n• Open rates\n• Response rates\n• Meeting bookings',
    },
    {
      name: '🧪 A/B Test: Email body content',
      notes: 'Improve response rates\n\nTest variations:\n• Short vs long emails\n• Feature-focused vs benefit-focused\n• Different CTAs\n• Social proof vs no proof\n\nTrack:\n• Response rates\n• Positive responses\n• Meeting bookings',
    },
    {
      name: '📈 Optimize: Lead scoring model',
      notes: 'Better lead quality\n\nActions:\n• Analyze conversion by score\n• Adjust scoring weights\n• Identify false positives\n• Identify false negatives\n• Add new scoring factors\n\nCurrent scoring:\n• Company size: 0-20 pts\n• Revenue: 0-20 pts\n• Industry fit: 0-15 pts\n• Growth signals: 0-10 pts\n• Contact quality: 0-10 pts\n• Location: 0-10 pts',
    },
    {
      name: '⏰ Optimize: Email send times',
      notes: 'Find best times\n\nTest different send times:\n• Morning: 9-10 AM\n• Late morning: 11-12 PM\n• Afternoon: 2-3 PM\n• Late afternoon: 4-5 PM\n\nTrack:\n• Open rates\n• Response rates\n• Time to response',
    },
    {
      name: '📝 Optimize: Content strategy',
      notes: 'Better content performance\n\nActions:\n• Analyze top-performing posts\n• Identify content gaps\n• Research new topics\n• Update old content\n• Check competitor content\n\nTarget:\n• 2 posts/week minimum\n• 50+ views per post\n• 5+ social shares per post',
    },
    {
      name: '💰 Optimize: Cost tracking',
      notes: 'Monitor expenses\n\nTrack:\n• Paperspace hosting costs\n• ROI per lead source\n• Customer Acquisition Cost (CAC)\n• Cost per meeting booked\n• Cost per customer acquired\n\nCurrent costs:\n• Paperspace: ~$58/month (down from $360!)\n• Domain: ~$10/year\n• Email: Free (Gmail)\n• Attio: Free tier\n• Vercel: Free tier',
    }
  ];
  
  for (const task of optimizationTasks) {
    try {
      await createTask(projectId, sections['🎯 Optimization Tasks'], task);
      console.log(`  ✅ ${task.name}`);
      taskCount++;
    } catch (e) {
      console.log(`  ❌ ${task.name} - ${e.message}`);
    }
  }
  
  // === HISTORY & TRACKING ===
  console.log('\n📚 History & Tracking:');
  
  const historyTasks = [
    {
      name: '📊 Track: All sent emails',
      notes: 'Campaign history\n\nFile: outreach-campaign-status.json\n\nTrack for each email:\n• Company name\n• Contact name & email\n• Date sent\n• Subject line\n• Message ID\n• Status: sent/bounced/failed\n\nCurrent status:\n• Total sent: 5\n• Hot leads remaining: 11\n• Warm leads remaining: 18',
    },
    {
      name: '📊 Track: All responses',
      notes: 'Response history\n\nFile: outreach-responses.json\n\nTrack for each response:\n• Who responded\n• Date & time\n• Category: Positive/Meeting/Question/Negative/OOO\n• Response preview\n• Next steps\n• Assigned to follow-up',
    },
    {
      name: '📈 Monthly: Deep analytics review',
      notes: 'Comprehensive monthly analysis\n\nReview:\n• Month-over-month growth\n• Channel attribution\n• ROI calculation\n• Strategy adjustments\n• Content performance leaderboard\n• Top lead sources\n• Conversion by industry\n• Win/loss analysis',
    },
    {
      name: '📚 Monthly: Archive & cleanup',
      notes: 'Maintain data hygiene\n\nActions:\n• Archive cold leads (no response after 2 follow-ups)\n• Clean pipeline in Attio\n• Verify contact information\n• Remove duplicates\n• Backup important files\n• Review and delete old logs\n• Archive completed tasks in Asana',
    }
  ];
  
  for (const task of historyTasks) {
    try {
      await createTask(projectId, sections['📚 History & Archive'], task);
      console.log(`  ✅ ${task.name}`);
      taskCount++;
    } catch (e) {
      console.log(`  ❌ ${task.name} - ${e.message}`);
    }
  }
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  ✅ ASANA WORKFLOW SETUP COMPLETE!');
  console.log('═══════════════════════════════════════════════════');
  console.log('');
  console.log('📊 CREATED:');
  console.log(`  • Project: BrandGate Operations`);
  console.log(`  • Sections: ${Object.keys(sections).length}`);
  console.log(`  • Tasks: ${taskCount}`);
  console.log('');
  console.log('🔗 PROJECT URL:');
  console.log(`  https://app.asana.com/0/${projectId}`);
  console.log('');
  console.log('🎯 HOW TO USE:');
  console.log('  1. Visit the project in Asana');
  console.log('  2. View tasks by section');
  console.log('  3. Check off completed tasks');
  console.log('  4. Track history in "📚 History & Archive"');
  console.log('  5. Review "🎯 Optimization Tasks" monthly');
  console.log('');
  console.log('📱 DAILY WORKFLOW:');
  console.log('  08:00 - SEO Daily Check');
  console.log('  09:00 - Morning inbox check');
  console.log('  09:30 - Analytics check');
  console.log('  12:00 - Lead research');
  console.log('  15:00 - Send outreach emails');
  console.log('  17:00 - Generate daily report');
  console.log('');
  console.log('✅ All set! Ready to track everything!');
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
