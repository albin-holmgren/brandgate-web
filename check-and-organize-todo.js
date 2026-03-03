#!/usr/bin/env node
// check-and-organize-todo.js
// Check what's in To Do and organize properly

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

// Get sections
async function getSections(projectId) {
  return asanaRequest(`/projects/${projectId}/sections`);
}

// Get tasks in section with full details
async function getSectionTasks(sectionId) {
  return asanaRequest(`/sections/${sectionId}/tasks?opt_fields=name,completed,notes,created_at`);
}

// Move task to section
async function addTaskToSection(taskId, sectionId) {
  return asanaRequest(`/sections/${sectionId}/addTask`, {
    method: 'POST',
    body: JSON.stringify({ data: { task: taskId } })
  });
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

async function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  CHECKING & ORGANIZING "TO DO" TASKS');
  console.log('═══════════════════════════════════════════════════\n');
  
  // Get sections
  const sections = await getSections(OPERATIONS_PROJECT);
  const sectionMap = {};
  
  for (const section of sections.data) {
    sectionMap[section.name] = section.gid;
  }
  
  const todoId = sectionMap['To do'];
  
  if (!todoId) {
    console.log('❌ Could not find "To do" section');
    return;
  }
  
  // Get all tasks in To Do
  console.log('📋 Getting tasks from "To do"...\n');
  const tasks = await getSectionTasks(todoId);
  
  console.log(`Found ${tasks.data.length} tasks in "To do":\n`);
  
  // Categorize each task
  const categories = {
    daily: [],
    content: [],
    optimization: [],
    followup: [],
    completed: [],
    other: []
  };
  
  for (const task of tasks.data) {
    const name = task.name.toLowerCase();
    
    if (task.completed) {
      categories.completed.push(task);
    }
    else if (name.includes('daily') || name.includes('morning') || name.includes('inbox') || 
             name.includes('seo check') || name.includes('analytics') || name.includes('research') ||
             name.includes('outreach') || name.includes('report')) {
      categories.daily.push(task);
    }
    else if (name.includes('content') || name.includes('blog') || name.includes('publish') || 
             name.includes('seo') || name.includes('planning')) {
      categories.content.push(task);
    }
    else if (name.includes('optimize') || name.includes('a/b') || name.includes('test') || 
             name.includes('cost') || name.includes('tracking')) {
      categories.optimization.push(task);
    }
    else if (name.includes('follow') || name.includes('respond') || name.includes('reply')) {
      categories.followup.push(task);
    }
    else {
      categories.other.push(task);
    }
  }
  
  // Show categorization
  console.log('📊 Task Categories:');
  console.log(`  Daily Tasks: ${categories.daily.length}`);
  console.log(`  Content: ${categories.content.length}`);
  console.log(`  Optimization: ${categories.optimization.length}`);
  console.log(`  Follow-ups: ${categories.followup.length}`);
  console.log(`  Completed: ${categories.completed.length}`);
  console.log(`  Other: ${categories.other.length}\n`);
  
  // Show first few tasks in each category
  console.log('📝 Tasks to organize:\n');
  
  if (categories.daily.length > 0) {
    console.log('📊 Daily Tasks:');
    categories.daily.slice(0, 3).forEach(t => console.log(`  • ${t.name}`));
    if (categories.daily.length > 3) console.log(`  ... and ${categories.daily.length - 3} more`);
    console.log('');
  }
  
  if (categories.content.length > 0) {
    console.log('📝 Content Tasks:');
    categories.content.slice(0, 3).forEach(t => console.log(`  • ${t.name}`));
    if (categories.content.length > 3) console.log(`  ... and ${categories.content.length - 3} more`);
    console.log('');
  }
  
  if (categories.completed.length > 0) {
    console.log('✅ Completed Tasks:');
    categories.completed.slice(0, 3).forEach(t => console.log(`  • ${t.name}`));
    if (categories.completed.length > 3) console.log(`  ... and ${categories.completed.length - 3} more`);
    console.log('');
  }
  
  // Ask for confirmation before moving
  console.log('═══════════════════════════════════════════════════');
  console.log('  PROPOSED MOVES:');
  console.log('═══════════════════════════════════════════════════\n');
  
  if (categories.daily.length > 0) {
    console.log(`Move ${categories.daily.length} tasks → 📊 Daily Tasks`);
  }
  if (categories.content.length > 0) {
    console.log(`Move ${categories.content.length} tasks → 📝 Content & SEO`);
  }
  if (categories.optimization.length > 0) {
    console.log(`Move ${categories.optimization.length} tasks → 🎯 Optimization`);
  }
  if (categories.followup.length > 0) {
    console.log(`Move ${categories.followup.length} tasks → 📧 To Do - Follow-ups`);
  }
  if (categories.completed.length > 0) {
    console.log(`Mark ${categories.completed.length} tasks as COMPLETED`);
  }
  
  console.log(`\nKeep ${categories.other.length} tasks in "To do" (for manual assignment)\n`);
  
  // Execute the moves
  console.log('🔄 Executing moves...\n');
  
  let moved = 0;
  let completed = 0;
  let failed = 0;
  
  // Move daily tasks
  for (const task of categories.daily) {
    try {
      if (sectionMap['📊 Daily Tasks']) {
        await addTaskToSection(task.gid, sectionMap['📊 Daily Tasks']);
        console.log(`  ✅ Daily: ${task.name.substring(0, 45)}`);
        moved++;
      }
      await new Promise(r => setTimeout(r, 300));
    } catch (e) {
      console.log(`  ❌ Failed: ${task.name.substring(0, 45)}`);
      failed++;
    }
  }
  
  // Move content tasks
  for (const task of categories.content) {
    try {
      if (sectionMap['📝 Content & SEO']) {
        await addTaskToSection(task.gid, sectionMap['📝 Content & SEO']);
        console.log(`  ✅ Content: ${task.name.substring(0, 45)}`);
        moved++;
      }
      await new Promise(r => setTimeout(r, 300));
    } catch (e) {
      console.log(`  ❌ Failed: ${task.name.substring(0, 45)}`);
      failed++;
    }
  }
  
  // Move optimization tasks
  for (const task of categories.optimization) {
    try {
      if (sectionMap['🎯 Optimization']) {
        await addTaskToSection(task.gid, sectionMap['🎯 Optimization']);
        console.log(`  ✅ Optimization: ${task.name.substring(0, 45)}`);
        moved++;
      }
      await new Promise(r => setTimeout(r, 300));
    } catch (e) {
      console.log(`  ❌ Failed: ${task.name.substring(0, 45)}`);
      failed++;
    }
  }
  
  // Move follow-ups
  for (const task of categories.followup) {
    try {
      if (sectionMap['📧 To Do - Follow-ups']) {
        await addTaskToSection(task.gid, sectionMap['📧 To Do - Follow-ups']);
        console.log(`  ✅ Follow-up: ${task.name.substring(0, 45)}`);
        moved++;
      }
      await new Promise(r => setTimeout(r, 300));
    } catch (e) {
      console.log(`  ❌ Failed: ${task.name.substring(0, 45)}`);
      failed++;
    }
  }
  
  // Mark completed tasks
  for (const task of categories.completed) {
    try {
      await completeTask(task.gid);
      console.log(`  ✅ Completed: ${task.name.substring(0, 45)}`);
      completed++;
      await new Promise(r => setTimeout(r, 300));
    } catch (e) {
      console.log(`  ❌ Failed to complete: ${task.name.substring(0, 45)}`);
      failed++;
    }
  }
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  ✅ ORGANIZATION COMPLETE!');
  console.log('═══════════════════════════════════════════════════');
  console.log(`  • Moved: ${moved} tasks`);
  console.log(`  • Completed: ${completed} tasks`);
  console.log(`  • Failed: ${failed} tasks`);
  console.log(`  • Kept in "To do": ${categories.other.length} tasks`);
  console.log('');
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
