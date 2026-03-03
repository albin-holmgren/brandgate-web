#!/usr/bin/env node
// continuous-task-worker.js
// Continuously work through Asana tasks

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

// Get tasks from a section
async function getSectionTasks(sectionId) {
  return asanaRequest(`/sections/${sectionId}/tasks?opt_fields=name,completed,notes,due_on`);
}

// Complete a task
async function completeTask(taskId) {
  return asanaRequest(`/tasks/${taskId}`, {
    method: 'PUT',
    body: JSON.stringify({ data: { completed: true } })
  });
}

// Add comment to task
async function addComment(taskId, text) {
  return asanaRequest(`/tasks/${taskId}/stories`, {
    method: 'POST',
    body: JSON.stringify({ data: { text } })
  });
}

// Get sections
async function getSections(projectId) {
  return asanaRequest(`/projects/${projectId}/sections`);
}

// Main worker function
async function processTasks() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  CONTINUOUS TASK WORKER');
  console.log(`  ${new Date().toISOString()}`);
  console.log('═══════════════════════════════════════════════════\n');
  
  const sections = await getSections(OPERATIONS_PROJECT);
  const sectionMap = {};
  
  for (const section of sections.data) {
    sectionMap[section.name] = section.gid;
  }
  
  // Priority order for processing
  const prioritySections = [
    { name: '🚨 URGENT - Today', id: sectionMap['🚨 URGENT - Today'], action: 'handle_urgent' },
    { name: '🔥 Hot Leads - Respond Now', id: sectionMap['🔥 Hot Leads - Respond Now'], action: 'handle_hot_lead' },
    { name: '📧 To Do - Follow-ups', id: sectionMap['📧 To Do - Follow-ups'], action: 'handle_followup' },
    { name: '📧 To Do', id: sectionMap['To do'], action: 'handle_todo' },
    { name: '⏳ Waiting For Response', id: sectionMap['⏳ Waiting For Response'], action: 'check_waiting' }
  ];
  
  let processedCount = 0;
  
  for (const section of prioritySections) {
    if (!section.id) continue;
    
    const tasks = await getSectionTasks(section.id);
    const incompleteTasks = tasks.data.filter(t => !t.completed);
    
    if (incompleteTasks.length === 0) continue;
    
    console.log(`📋 ${section.name}: ${incompleteTasks.length} tasks`);
    
    for (const task of incompleteTasks.slice(0, 3)) { // Process max 3 per section
      console.log(`  🔄 Processing: ${task.name.substring(0, 50)}...`);
      
      // Here you would implement the actual task logic
      // For now, just log that we would handle it
      await addComment(taskId, `[AI Worker] Processing this task...`);
      
      processedCount++;
    }
  }
  
  console.log(`\n✅ Processed ${processedCount} tasks`);
  
  // Schedule next run
  console.log('\n⏰ Scheduling next check in 15 minutes...');
  setTimeout(processTasks, 15 * 60 * 1000);
}

// Create recurring tasks for continuous work
async function createRecurringTasks() {
  console.log('📝 Creating recurring task schedule...\n');
  
  const recurringTasks = [
    {
      section: '📊 Daily Tasks',
      tasks: [
        { name: '☀️ 08:00 Morning inbox check', time: '08:00' },
        { name: '🔍 08:00 SEO health check', time: '08:00' },
        { name: '📈 09:30 Analytics check', time: '09:30' },
        { name: '🔎 12:00 Lead research', time: '12:00' },
        { name: '📤 15:00 Send outreach emails', time: '15:00' },
        { name: '📊 17:00 Generate daily report', time: '17:00' }
      ]
    },
    {
      section: '📝 Content & SEO',
      tasks: [
        { name: '📝 Monday: Content planning', day: 1 },
        { name: '📰 Wednesday: Publish blog post', day: 3 },
        { name: '📰 Friday: Publish blog post', day: 5 },
        { name: '🔧 Weekly: SEO optimization review', day: 5 }
      ]
    },
    {
      section: '🎯 Optimization',
      tasks: [
        { name: '🧪 A/B Test: Email subject lines', freq: 'weekly' },
        { name: '📈 Optimize: Lead scoring model', freq: 'monthly' },
        { name: '💰 Optimize: Cost tracking', freq: 'monthly' }
      ]
    }
  ];
  
  console.log('📅 Recurring tasks defined:');
  for (const category of recurringTasks) {
    console.log(`\n${category.section}:`);
    for (const task of category.tasks) {
      console.log(`  • ${task.name}`);
    }
  }
  
  console.log('\n✅ Recurring schedule ready!\n');
}

// Main
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'schedule') {
    await createRecurringTasks();
  } else if (command === 'work') {
    await processTasks();
  } else {
    console.log('Continuous Task Worker');
    console.log('');
    console.log('Commands:');
    console.log('  schedule  - Show recurring task schedule');
    console.log('  work      - Process tasks continuously');
    console.log('');
    console.log('This worker helps you:');
    console.log('  • Process urgent tasks first');
    console.log('  • Handle hot leads immediately');
    console.log('  • Work through follow-ups systematically');
    console.log('  • Never miss important tasks');
    console.log('  • Maintain continuous operations');
  }
}

module.exports = { processTasks, createRecurringTasks };

if (require.main === module) {
  main().catch(e => {
    console.error('Error:', e.message);
    process.exit(1);
  });
}
