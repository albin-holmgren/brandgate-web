#!/usr/bin/env node
// asana-task-logger.js
// Automatically log BrandGate tasks to your existing Asana projects

const fs = require('fs');

const TOKEN_FILE = '/home/node/.openclaw/workspace/.asana-token.json';
const ASANA_API_BASE = 'https://app.asana.com/api/1.0';

// Your project IDs
const PROJECTS = {
  operations: '1213474894327849',  // OpenClaw board
  features: '1213475126754388'     // Features board
};

// Section IDs (will be fetched dynamically)
let SECTIONS = {
  operations: { todo: null, doing: null, done: null },
  features: { todo: null, doing: null, completed: null }
};

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

// Get sections and cache them
async function getSections(projectId) {
  const sections = await asanaRequest(`/projects/${projectId}/sections`);
  const result = {};
  
  for (const section of sections.data) {
    const name = section.name.toLowerCase();
    if (name.includes('to do') || name.includes('todo')) {
      result.todo = section.gid;
    } else if (name.includes('doing')) {
      result.doing = section.gid;
    } else if (name.includes('done') || name.includes('completed')) {
      result.done = section.gid;
    }
  }
  
  return result;
}

// Create task in specific section
async function createTaskInSection(projectId, sectionId, task) {
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

// Initialize sections
async function initSections() {
  console.log('Loading Asana sections...');
  SECTIONS.operations = await getSections(PROJECTS.operations);
  SECTIONS.features = await getSections(PROJECTS.features);
  console.log('✅ Sections loaded');
}

// Log daily task completion
async function logDailyTask(taskType, details, metrics = {}) {
  const timestamp = new Date().toISOString();
  const today = timestamp.split('T')[0];
  
  let taskName = '';
  let taskNotes = '';
  
  switch (taskType) {
    case 'morning-inbox':
      taskName = '📧 Morning: Inbox check';
      taskNotes = `Checked will@brandgate.dev for responses\n\n${details}\n\n---\n⏰ ${timestamp}`;
      break;
      
    case 'outreach-sent':
      taskName = `📤 Sent ${metrics.count || ''} outreach emails`;
      taskNotes = `${details}\n\nMetrics:\n• Emails sent: ${metrics.count || 'N/A'}\n• Companies: ${metrics.companies || 'N/A'}\n\n---\n⏰ ${timestamp}`;
      break;
      
    case 'lead-research':
      taskName = '🔎 Researched new leads';
      taskNotes = `${details}\n\n---\n⏰ ${timestamp}`;
      break;
      
    case 'analytics-check':
      taskName = '📊 Daily analytics check';
      taskNotes = `${details}\n\n---\n⏰ ${timestamp}`;
      break;
      
    case 'seo-check':
      taskName = '🔍 Daily SEO check';
      taskNotes = `${details}\n\n---\n⏰ ${timestamp}`;
      break;
      
    case 'daily-report':
      taskName = '📈 Generated daily report';
      taskNotes = `${details}\n\n---\n⏰ ${timestamp}`;
      break;
      
    case 'crm-update':
      taskName = '💼 CRM updates';
      taskNotes = `${details}\n\n---\n⏰ ${timestamp}`;
      break;
      
    default:
      taskName = `✅ ${taskType}`;
      taskNotes = `${details}\n\n---\n⏰ ${timestamp}`;
  }
  
  try {
    await createTaskInSection(
      PROJECTS.operations,
      SECTIONS.operations.done,
      {
        name: taskName,
        notes: taskNotes,
        dueDate: today
      }
    );
    console.log(`✅ Logged to Asana: ${taskName}`);
    return true;
  } catch (e) {
    console.log(`⚠️  Failed to log to Asana: ${e.message}`);
    return false;
  }
}

// Create feature request
async function createFeature(title, description, priority = 'medium') {
  const priorityEmoji = { high: '🔴', medium: '🟡', low: '🟢' };
  const timestamp = new Date().toISOString();
  
  const taskName = `${priorityEmoji[priority]} ${title}`;
  const taskNotes = `${description}\n\n---\nRequested: ${timestamp}\nPriority: ${priority}`;
  
  try {
    await createTaskInSection(
      PROJECTS.features,
      SECTIONS.features.todo,
      {
        name: taskName,
        notes: taskNotes
      }
    );
    console.log(`✅ Feature created: ${title}`);
    return true;
  } catch (e) {
    console.log(`❌ Failed to create feature: ${e.message}`);
    return false;
  }
}

// Create todo item for follow-up
async function createTodo(title, description, dueDate = null) {
  const timestamp = new Date().toISOString();
  
  const taskNotes = `${description}\n\n---\nCreated: ${timestamp}`;
  
  try {
    await createTaskInSection(
      PROJECTS.operations,
      SECTIONS.operations.todo,
      {
        name: `📝 ${title}`,
        notes: taskNotes,
        dueDate: dueDate
      }
    );
    console.log(`✅ Todo created: ${title}`);
    return true;
  } catch (e) {
    console.log(`❌ Failed to create todo: ${e.message}`);
    return false;
  }
}

// Main function for testing
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  await initSections();
  
  switch (command) {
    case 'log':
      if (!args[1]) {
        console.log('Usage: node asana-task-logger.js log <type> "details"');
        console.log('Types: morning-inbox, outreach-sent, lead-research, analytics-check, seo-check, daily-report, crm-update');
        return;
      }
      await logDailyTask(args[1], args[2] || '', { count: args[3] });
      break;
      
    case 'feature':
      if (!args[1]) {
        console.log('Usage: node asana-task-logger.js feature "Title" "Description" [high|medium|low]');
        return;
      }
      await createFeature(args[1], args[2] || '', args[3] || 'medium');
      break;
      
    case 'todo':
      if (!args[1]) {
        console.log('Usage: node asana-task-logger.js todo "Title" "Description" [YYYY-MM-DD]');
        return;
      }
      await createTodo(args[1], args[2] || '', args[3]);
      break;
      
    default:
      console.log('Asana Task Logger for BrandGate');
      console.log('');
      console.log('Commands:');
      console.log('  log <type> "details"     - Log completed task');
      console.log('  feature "Title" "Desc"   - Create feature request');
      console.log('  todo "Title" "Desc"      - Create todo item');
      console.log('');
      console.log('Examples:');
      console.log('  node asana-task-logger.js log outreach-sent "Sent to Happy Socks, NetOnNet" 5');
      console.log('  node asana-task-logger.js feature "Add SMS" "Send SMS alerts" high');
      console.log('  node asana-task-logger.js todo "Follow up with Viktor" "Happy Socks response" 2026-03-05');
  }
}

// Export for use by scheduler
module.exports = {
  initSections,
  logDailyTask,
  createFeature,
  createTodo,
  PROJECTS,
  SECTIONS
};

// Run if called directly
if (require.main === module) {
  main().catch(e => {
    console.error('Error:', e.message);
    process.exit(1);
  });
}
