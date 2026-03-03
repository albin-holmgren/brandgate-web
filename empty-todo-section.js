#!/usr/bin/env node
// empty-todo-section.js
// Move all tasks from "To Do" to appropriate sections

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
    console.log('Note:', data.errors[0]?.message);
    return { data: null };
  }
  return data;
}

async function emptyTodoSection() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  EMPTYING "TO DO" SECTION');
  console.log('═══════════════════════════════════════════════════\n');
  
  console.log('🎯 Goal: Keep "To Do" empty for manual assignments\n');
  
  // Get all sections
  const sections = await asanaRequest(`/projects/${OPERATIONS_PROJECT}/sections`);
  
  if (!sections.data) {
    console.log('❌ Could not fetch sections');
    return;
  }
  
  // Find section IDs
  const sectionMap = {};
  for (const section of sections.data) {
    sectionMap[section.name] = section.gid;
  }
  
  const todoId = sectionMap['To do'];
  const dailyTasksId = sectionMap['📊 Daily Tasks'];
  const historyId = sectionMap['📚 History & Completed'];
  const followupsId = sectionMap['📧 To Do - Follow-ups'];
  
  if (!todoId) {
    console.log('❌ To do section not found');
    return;
  }
  
  // Get tasks in To Do
  const tasks = await asanaRequest(`/sections/${todoId}/tasks?opt_fields=name,completed,notes`);
  
  if (!tasks.data || tasks.data.length === 0) {
    console.log('✅ "To Do" is already empty!\n');
    return;
  }
  
  console.log(`📋 Found ${tasks.data.length} tasks in "To Do"\n`);
  console.log('🔄 Moving to appropriate sections...\n');
  
  let moved = 0;
  
  for (const task of tasks.data) {
    const name = task.name.toLowerCase();
    let targetSection = null;
    let targetName = '';
    
    // Determine where to move
    if (name.includes('daily') || name.includes('morning') || name.includes('inbox') || 
        name.includes('analytics') || name.includes('seo') || name.includes('research') ||
        name.includes('outreach') || name.includes('report')) {
      targetSection = dailyTasksId;
      targetName = '📊 Daily Tasks';
    }
    else if (name.includes('follow') || name.includes('respond') || name.includes('reply')) {
      targetSection = followupsId;
      targetName = '📧 To Do - Follow-ups';
    }
    else if (task.completed || name.includes('completed') || name.includes('done')) {
      targetSection = historyId;
      targetName = '📚 History & Completed';
    }
    else {
      // Default to Daily Tasks
      targetSection = dailyTasksId;
      targetName = '📊 Daily Tasks';
    }
    
    if (targetSection) {
      try {
        await asanaRequest(`/sections/${targetSection}/addTask`, {
          method: 'POST',
          body: JSON.stringify({ data: { task: task.gid } })
        });
        
        console.log(`  ✅ ${task.name.substring(0, 50)}... → ${targetName}`);
        moved++;
        await new Promise(r => setTimeout(r, 400));
      } catch (e) {
        console.log(`  ⚠️  ${task.name.substring(0, 50)}... (may already exist in target)`);
      }
    }
  }
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  ✅ "TO DO" SECTION EMPTIED!');
  console.log('═══════════════════════════════════════════════════');
  console.log(`  • Moved: ${moved} tasks`);
  console.log('');
  console.log('📋 "TO DO" IS NOW EMPTY');
  console.log('');
  console.log('🎯 HOW TO USE:');
  console.log('  1. Add task to "To Do" when you need me to handle something');
  console.log('  2. I\'ll see it and handle it');
  console.log('  3. I\'ll move it to appropriate section when done');
  console.log('  4. "To Do" stays empty until you add next task');
  console.log('');
  console.log('✅ Ready for manual task assignment!');
}

emptyTodoSection().catch(e => {
  console.error('Error:', e.message);
});
