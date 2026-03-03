#!/usr/bin/env node
// asana-brandgate-projects.js
// Work with existing BrandGate Asana projects

const fs = require('fs');

const TOKEN_FILE = '/home/node/.openclaw/workspace/.asana-token.json';
const ASANA_API_BASE = 'https://app.asana.com/api/1.0';

// Your existing project IDs
const PROJECTS = {
  operations: '1213474894327849',  // Main operations board
  features: '1213475126754388'     // Feature requests board
};

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

// Get project details
async function getProject(projectId) {
  return asanaRequest(`/projects/${projectId}`);
}

// Get sections in project
async function getSections(projectId) {
  return asanaRequest(`/projects/${projectId}/sections`);
}

// Get tasks in section
async function getTasks(sectionId) {
  return asanaRequest(`/sections/${sectionId}/tasks?opt_fields=name,completed,assignee,due_on,notes`);
}

// Create task in project
async function createTask(projectId, task) {
  const body = {
    data: {
      projects: [projectId],
      name: task.name,
      notes: task.notes
    }
  };
  
  if (task.dueDate) {
    body.data.due_on = task.dueDate;
  }
  
  if (task.assignee) {
    body.data.assignee = task.assignee;
  }
  
  return asanaRequest('/tasks', {
    method: 'POST',
    body: JSON.stringify(body)
  });
}

// Mark task complete
async function completeTask(taskId) {
  return asanaRequest(`/tasks/${taskId}`, {
    method: 'PUT',
    body: JSON.stringify({
      data: { completed: true }
    })
  });
}

// Log task completion to operations project
async function logTaskCompletion(taskName, details) {
  const timestamp = new Date().toISOString();
  const notes = `[${timestamp}] ✅ COMPLETED\n\n${details}\n\n---\nLogged automatically by BrandGate AI`;
  
  try {
    await createTask(PROJECTS.operations, {
      name: `✅ ${taskName}`,
      notes: notes,
      dueDate: new Date().toISOString().split('T')[0]
    });
    console.log(`✅ Logged to Asana: ${taskName}`);
  } catch (e) {
    console.log(`⚠️  Could not log to Asana: ${e.message}`);
  }
}

// Create feature request
async function createFeatureRequest(title, description, priority = 'medium') {
  const priorityEmoji = {
    high: '🔴',
    medium: '🟡',
    low: '🟢'
  };
  
  const notes = `${description}\n\n---\nRequested: ${new Date().toISOString()}\nPriority: ${priority}`;
  
  try {
    const task = await createTask(PROJECTS.features, {
      name: `${priorityEmoji[priority]} ${title}`,
      notes: notes
    });
    console.log(`✅ Feature request created: ${title}`);
    return task;
  } catch (e) {
    console.log(`❌ Could not create feature: ${e.message}`);
    throw e;
  }
}

// Show project status
async function showStatus() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  BRANDGATE ASANA PROJECTS');
  console.log('═══════════════════════════════════════════════════\n');
  
  // Get operations project
  console.log('📋 OPERATIONS PROJECT:');
  try {
    const opsProject = await getProject(PROJECTS.operations);
    console.log(`  Name: ${opsProject.data.name}`);
    console.log(`  Status: ${opsProject.data.archived ? 'Archived' : 'Active'}`);
    
    const opsSections = await getSections(PROJECTS.operations);
    console.log(`  Sections: ${opsSections.data.length}`);
    
    for (const section of opsSections.data.slice(0, 3)) {
      console.log(`    • ${section.name}`);
    }
    if (opsSections.data.length > 3) {
      console.log(`    ... and ${opsSections.data.length - 3} more`);
    }
  } catch (e) {
    console.log(`  ❌ Error: ${e.message}`);
  }
  
  console.log('\n🎯 FEATURE REQUESTS PROJECT:');
  try {
    const featProject = await getProject(PROJECTS.features);
    console.log(`  Name: ${featProject.data.name}`);
    console.log(`  Status: ${featProject.data.archived ? 'Archived' : 'Active'}`);
    
    const featSections = await getSections(PROJECTS.features);
    console.log(`  Sections: ${featSections.data.length}`);
    
    for (const section of featSections.data.slice(0, 3)) {
      console.log(`    • ${section.name}`);
    }
  } catch (e) {
    console.log(`  ❌ Error: ${e.message}`);
  }
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  QUICK LINKS');
  console.log('═══════════════════════════════════════════════════');
  console.log('');
  console.log('Operations Board:');
  console.log('  https://app.asana.com/1/1213451691700872/project/1213474894327849/board/1213474897291909');
  console.log('');
  console.log('Feature Requests Board:');
  console.log('  https://app.asana.com/1/1213451691700872/project/1213475126754388/board/1213451560324222');
  console.log('');
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'status':
      await showStatus();
      break;
      
    case 'log':
      if (!args[1]) {
        console.log('Usage: node asana-brandgate-projects.js log "Task Name" "Details"');
        return;
      }
      await logTaskCompletion(args[1], args[2] || '');
      break;
      
    case 'feature':
      if (!args[1]) {
        console.log('Usage: node asana-brandgate-projects.js feature "Title" "Description" [high|medium|low]');
        return;
      }
      await createFeatureRequest(args[1], args[2] || '', args[3] || 'medium');
      break;
      
    default:
      await showStatus();
      console.log('\n📖 COMMANDS:');
      console.log('  status                    - Show project status');
      console.log('  log "Task" "Details"      - Log completed task');
      console.log('  feature "Title" "Desc"    - Create feature request');
      console.log('');
      console.log('Examples:');
      console.log('  node asana-brandgate-projects.js log "Sent 5 emails" "To Happy Socks, NetOnNet..."');
      console.log('  node asana-brandgate-projects.js feature "Add SMS notifications" "Send SMS alerts..." high');
  }
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});

// Export functions for use by scheduler
module.exports = {
  logTaskCompletion,
  createFeatureRequest,
  PROJECTS
};
