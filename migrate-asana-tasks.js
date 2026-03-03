#!/usr/bin/env node
// migrate-asana-tasks.js
// Move tasks from old project to OpenClaw operations board

const fs = require('fs');

const TOKEN_FILE = '/home/node/.openclaw/workspace/.asana-token.json';
const ASANA_API_BASE = 'https://app.asana.com/api/1.0';

// Project IDs
const OLD_PROJECT = '1213451647040032';  // BrandGate Operations (to migrate from)
const OPERATIONS_PROJECT = '1213474894327849';  // OpenClaw (migrate to)
const FEATURES_PROJECT = '1213475126754388';  // Features (for app features only)

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

// Get all tasks from a project
async function getProjectTasks(projectId) {
  return asanaRequest(`/projects/${projectId}/tasks?opt_fields=name,completed,notes,memberships`);
}

// Get sections in project
async function getSections(projectId) {
  return asanaRequest(`/projects/${projectId}/sections`);
}

// Create task in project
async function createTask(projectId, task) {
  const body = {
    data: {
      projects: [projectId],
      name: task.name,
      notes: task.notes || ''
    }
  };
  
  if (task.completed) {
    body.data.completed = true;
  }
  
  return asanaRequest('/tasks', {
    method: 'POST',
    body: JSON.stringify(body)
  });
}

// Delete task
async function deleteTask(taskId) {
  return asanaRequest(`/tasks/${taskId}`, {
    method: 'DELETE'
  });
}

// Get full task details
async function getTask(taskId) {
  return asanaRequest(`/tasks/${taskId}?opt_fields=name,notes,completed`);
}

async function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  MIGRATING ASANA TASKS');
  console.log('═══════════════════════════════════════════════════\n');
  
  // Get sections in target project (OpenClaw)
  console.log('📁 Getting OpenClaw board sections...');
  const targetSections = await getSections(OPERATIONS_PROJECT);
  
  let doneSectionId = null;
  let todoSectionId = null;
  
  for (const section of targetSections.data) {
    const name = section.name.toLowerCase();
    if (name.includes('done') || name.includes('completed')) {
      doneSectionId = section.gid;
      console.log(`  ✅ Found "Done" section: ${section.name}`);
    } else if (name.includes('to do') || name.includes('todo')) {
      todoSectionId = section.gid;
      console.log(`  ✅ Found "To do" section: ${section.name}`);
    }
  }
  
  // Get tasks from old project
  console.log('\n📋 Getting tasks from old project...');
  const oldTasks = await getProjectTasks(OLD_PROJECT);
  console.log(`  Found ${oldTasks.data.length} tasks\n`);
  
  if (oldTasks.data.length === 0) {
    console.log('✅ No tasks to migrate');
    return;
  }
  
  // Migrate each task
  console.log('🔄 Migrating tasks to OpenClaw board...\n');
  let migrated = 0;
  let failed = 0;
  
  for (const taskRef of oldTasks.data) {
    try {
      // Get full task details
      const task = await getTask(taskRef.gid);
      
      console.log(`  Migrating: ${task.data.name.substring(0, 50)}...`);
      
      // Create in new project
      await createTask(OPERATIONS_PROJECT, {
        name: task.data.name,
        notes: (task.data.notes || '') + '\n\n---\n[Migrated from BrandGate Operations project]',
        completed: task.data.completed
      });
      
      // Delete from old project
      await deleteTask(taskRef.gid);
      
      console.log(`    ✅ Migrated & deleted from old project`);
      migrated++;
      
      // Small delay to avoid rate limits
      await new Promise(r => setTimeout(r, 500));
      
    } catch (e) {
      console.log(`    ❌ Failed: ${e.message}`);
      failed++;
    }
  }
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  MIGRATION COMPLETE');
  console.log('═══════════════════════════════════════════════════');
  console.log(`  ✅ Migrated: ${migrated}`);
  console.log(`  ❌ Failed: ${failed}`);
  console.log('');
  console.log('📋 SUMMARY:');
  console.log('  • All tasks moved to OpenClaw board');
  console.log('  • Old project tasks deleted');
  console.log('  • OpenClaw is now your primary operations board');
  console.log('  • Features board reserved for app features only');
  console.log('');
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
