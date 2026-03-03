#!/usr/bin/env node
// organize-asana-tasks.js
// Fix task organization and mark completed tasks properly

const fs = require('fs');

const TOKEN_FILE = '/home/node/.openclaw/workspace/.asana-token.json';
const ASANA_API_BASE = 'https://app.asana.com/api/1.0';
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
    throw new Error(data.errors[0].message);
  }
  return data;
}

// Get all sections
async function getSections(projectId) {
  return asanaRequest(`/projects/${projectId}/sections`);
}

// Get tasks in section
async function getSectionTasks(sectionId) {
  return asanaRequest(`/sections/${sectionId}/tasks?opt_fields=name,completed,notes`);
}

// Complete a task
async function completeTask(taskId) {
  return asanaRequest(`/tasks/${taskId}`, {
    method: 'PUT',
    body: JSON.stringify({
      data: { completed: true }
    })
  });
}

// Move task to section
async function addTaskToSection(taskId, sectionId) {
  return asanaRequest(`/sections/${sectionId}/addTask`, {
    method: 'POST',
    body: JSON.stringify({ data: { task: taskId } })
  });
}

async function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  ORGANIZING ASANA TASKS');
  console.log('═══════════════════════════════════════════════════\n');
  
  // Get sections
  console.log('📋 Getting sections...');
  const sections = await getSections(OPERATIONS_PROJECT);
  
  const sectionMap = {};
  for (const section of sections.data) {
    sectionMap[section.name] = section.gid;
  }
  
  const todoId = sectionMap['To do'];
  const dailyTasksId = sectionMap['📊 Daily Tasks'];
  const historyId = sectionMap['📚 History & Completed'];
  
  console.log(`  Found "To do" section\n`);
  
  // Get all tasks in "To do"
  console.log('📊 Analyzing tasks in "To do"...\n');
  const todoTasks = await getSectionTasks(todoId);
  
  console.log(`  Total tasks: ${todoTasks.data.length}\n`);
  
  // Categorize tasks
  const dailyTasks = [];
  const completedTasks = [];
  const followUpTasks = [];
  const contentTasks = [];
  const optimizationTasks = [];
  
  for (const task of todoTasks.data) {
    const name = task.name.toLowerCase();
    
    // Check if it's a daily/recurring task
    if (name.includes('morning') || name.includes('daily') || name.includes('seo check') || 
        name.includes('analytics') || name.includes('inbox')) {
      dailyTasks.push(task);
    }
    // Check if it's already completed (from migration)
    else if (task.completed || name.includes('sent') || name.includes('completed') || 
             name.includes('migrated')) {
      completedTasks.push(task);
    }
    // Follow-ups
    else if (name.includes('follow') || name.includes('reply') || name.includes('respond')) {
      followUpTasks.push(task);
    }
    // Content
    else if (name.includes('content') || name.includes('blog') || name.includes('seo')) {
      contentTasks.push(task);
    }
    // Optimization
    else if (name.includes('optimize') || name.includes('a/b') || name.includes('test')) {
      optimizationTasks.push(task);
    }
  }
  
  console.log('📊 Task Categories:');
  console.log(`  Daily Tasks: ${dailyTasks.length}`);
  console.log(`  Completed: ${completedTasks.length}`);
  console.log(`  Follow-ups: ${followUpTasks.length}`);
  console.log(`  Content: ${contentTasks.length}`);
  console.log(`  Optimization: ${optimizationTasks.length}\n`);
  
  // Move and complete tasks
  console.log('🔄 Organizing tasks...\n');
  
  // Mark completed tasks as completed
  if (completedTasks.length > 0) {
    console.log('  Marking completed tasks...');
    for (const task of completedTasks) {
      try {
        await completeTask(task.gid);
        console.log(`    ✅ Completed: ${task.name.substring(0, 40)}...`);
        await new Promise(r => setTimeout(r, 300));
      } catch (e) {
        console.log(`    ⚠️  Could not complete: ${task.name.substring(0, 40)}`);
      }
    }
  }
  
  // Move daily tasks to Daily Tasks section
  if (dailyTasks.length > 0 && dailyTasksId) {
    console.log('\n  Moving daily tasks to "📊 Daily Tasks"...');
    for (const task of dailyTasks) {
      try {
        await addTaskToSection(task.gid, dailyTasksId);
        console.log(`    ✅ Moved: ${task.name.substring(0, 40)}...`);
        await new Promise(r => setTimeout(r, 300));
      } catch (e) {
        console.log(`    ⚠️  Could not move: ${task.name.substring(0, 40)}`);
      }
    }
  }
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  ✅ TASKS ORGANIZED!');
  console.log('═══════════════════════════════════════════════════');
  console.log('');
  console.log('📋 SUMMARY:');
  console.log(`  • ${completedTasks.length} tasks marked as COMPLETED`);
  console.log(`  • ${dailyTasks.length} tasks moved to "📊 Daily Tasks"`);
  console.log(`  • ${followUpTasks.length} follow-ups kept in "To do"`);
  console.log('');
  console.log('💡 NEXT STEP: Creating continuous task scheduler');
  console.log('');
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
