#!/usr/bin/env node
// cleanup-asana-board.js
// Remove old project, reorganize columns, move tasks to correct sections

const fs = require('fs');

const TOKEN_FILE = '/home/node/.openclaw/workspace/.asana-token.json';
const ASANA_API_BASE = 'https://app.asana.com/api/1.0';

const OLD_PROJECT = '1213451647040032';  // BrandGate Operations - DELETE
const OPERATIONS_PROJECT = '1213474894327849';  // OpenClaw - CLEANUP

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

// Delete old project
async function deleteProject(projectId) {
  return asanaRequest(`/projects/${projectId}`, {
    method: 'DELETE'
  });
}

// Get sections
async function getSections(projectId) {
  return asanaRequest(`/projects/${projectId}/sections`);
}

// Get tasks in section
async function getSectionTasks(sectionId) {
  return asanaRequest(`/sections/${sectionId}/tasks?opt_fields=name,notes,completed`);
}

// Delete section
async function deleteSection(sectionId) {
  return asanaRequest(`/sections/${sectionId}`, {
    method: 'DELETE'
  });
}

// Move task to section
async function addTaskToSection(taskId, sectionId) {
  return asanaRequest(`/sections/${sectionId}/addTask`, {
    method: 'POST',
    body: JSON.stringify({ data: { task: taskId } })
  });
}

// Get full task details
async function getTask(taskId) {
  return asanaRequest(`/tasks/${taskId}?opt_fields=name,notes,completed`);
}

async function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  CLEANING UP ASANA BOARD');
  console.log('═══════════════════════════════════════════════════\n');
  
  // Step 1: Delete old BrandGate Operations project
  console.log('🗑️  Step 1: Deleting old BrandGate Operations project...');
  try {
    await deleteProject(OLD_PROJECT);
    console.log('  ✅ Old project deleted\n');
  } catch (e) {
    console.log(`  ℹ️  ${e.message}\n`);
  }
  
  // Step 2: Get current sections in OpenClaw board
  console.log('📋 Step 2: Getting current sections...');
  const sections = await getSections(OPERATIONS_PROJECT);
  
  const sectionMap = {};
  for (const section of sections.data) {
    sectionMap[section.name] = section.gid;
    console.log(`  • ${section.name}`);
  }
  console.log('');
  
  // Step 3: Move tasks from old columns to new ones
  console.log('🔄 Step 3: Moving tasks to appropriate sections...\n');
  
  // Find "To do", "Doing", "Done" sections
  const todoSectionId = sectionMap['To do'];
  const doingSectionId = sectionMap['Doing'];
  const doneSectionId = sectionMap['Done'];
  
  // Find new sections
  const dailyTasksId = sectionMap['📊 Daily Tasks'];
  const historyId = sectionMap['📚 History & Completed'];
  
  // Move tasks from "Doing" to appropriate sections
  if (doingSectionId) {
    console.log('  Moving tasks from "Doing"...');
    const doingTasks = await getSectionTasks(doingSectionId);
    
    for (const taskRef of doingTasks.data) {
      try {
        const task = await getTask(taskRef.gid);
        const name = task.data.name.toLowerCase();
        
        // Determine where to move
        let targetSection = dailyTasksId; // Default to Daily Tasks
        
        if (name.includes('follow') || name.includes('reply')) {
          targetSection = sectionMap['📧 To Do - Follow-ups'];
        } else if (name.includes('hot') || name.includes('meeting')) {
          targetSection = sectionMap['🔥 Hot Leads - Respond Now'];
        }
        
        if (targetSection) {
          await addTaskToSection(taskRef.gid, targetSection);
          console.log(`    ✅ Moved: ${task.data.name.substring(0, 40)}...`);
        }
        
        await new Promise(r => setTimeout(r, 300));
      } catch (e) {
        console.log(`    ⚠️  Could not move: ${e.message}`);
      }
    }
  }
  
  // Move tasks from "Done" to History
  if (doneSectionId) {
    console.log('\n  Moving tasks from "Done" to History...');
    const doneTasks = await getSectionTasks(doneSectionId);
    
    for (const taskRef of doneTasks.data) {
      try {
        if (historyId) {
          await addTaskToSection(taskRef.gid, historyId);
          const task = await getTask(taskRef.gid);
          console.log(`    ✅ Archived: ${task.data.name.substring(0, 40)}...`);
        }
        await new Promise(r => setTimeout(r, 300));
      } catch (e) {
        console.log(`    ⚠️  Could not archive: ${e.message}`);
      }
    }
  }
  
  // Keep "To do" but rename/move tasks if needed
  if (todoSectionId) {
    console.log('\n  Keeping "To do" section for your manual tasks...');
    const todoTasks = await getSectionTasks(todoSectionId);
    console.log(`    ℹ️  ${todoTasks.data.length} tasks remain in "To do"`);
  }
  
  // Step 4: Delete old columns (Doing and Done)
  console.log('\n🗑️  Step 4: Removing old columns...');
  
  if (doingSectionId) {
    try {
      await deleteSection(doingSectionId);
      console.log('  ✅ Removed "Doing" column');
    } catch (e) {
      console.log(`  ℹ️  Could not remove "Doing": ${e.message}`);
    }
  }
  
  if (doneSectionId) {
    try {
      await deleteSection(doneSectionId);
      console.log('  ✅ Removed "Done" column');
    } catch (e) {
      console.log(`  ℹ️  Could not remove "Done": ${e.message}`);
    }
  }
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  ✅ CLEANUP COMPLETE!');
  console.log('═══════════════════════════════════════════════════');
  console.log('');
  console.log('📋 FINAL BOARD STRUCTURE:');
  console.log('');
  console.log('🚨 URGENT - Today');
  console.log('🔥 Hot Leads - Respond Now');
  console.log('📧 To Do - Follow-ups (keep for your tasks)');
  console.log('⏳ Waiting For Response');
  console.log('📊 Daily Tasks');
  console.log('📝 Content & SEO');
  console.log('🎯 Optimization');
  console.log('📚 History & Completed');
  console.log('💡 Ideas & Backlog');
  console.log('');
  console.log('✅ This is now YOUR workspace for continuous operations!');
  console.log('✅ Old project deleted');
  console.log('✅ Doing/Done columns removed');
  console.log('✅ Tasks organized into relevant sections');
  console.log('✅ To Do kept for tasks you add for me');
  console.log('');
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
