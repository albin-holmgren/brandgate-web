#!/usr/bin/env node
// asana-integration.js
// Asana API integration for BrandGate task management
// Updated with new credentials

const fs = require('fs');

// Asana OAuth credentials
const ASANA_CLIENT_ID = '1213475124988915';
const ASANA_CLIENT_SECRET = 'f40b690500a25ef55ff4a6c4416aef80';
const ASANA_REDIRECT_URI = 'https://brandgate.dev/asana/callback';

// Asana API base URL
const ASANA_API_BASE = 'https://app.asana.com/api/1.0';

// Token storage
const TOKEN_FILE = '/home/node/.openclaw/workspace/.asana-token.json';

// BrandGate workspace and project IDs (will be set after auth)
let WORKSPACE_ID = null;
let PROJECT_ID = null;

function loadToken() {
  try {
    const data = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
    return data.access_token;
  } catch {
    return null;
  }
}

function saveToken(tokenData) {
  fs.writeFileSync(TOKEN_FILE, JSON.stringify(tokenData, null, 2));
}

// Get OAuth URL for user authorization
function getAuthUrl() {
  const params = new URLSearchParams({
    client_id: ASANA_CLIENT_ID,
    redirect_uri: ASANA_REDIRECT_URI,
    response_type: 'code',
    scope: 'default'
  });
  return `https://app.asana.com/-/oauth_authorize?${params.toString()}`;
}

// Exchange code for access token
async function exchangeCodeForToken(code) {
  const response = await fetch('https://app.asana.com/-/oauth_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: ASANA_CLIENT_ID,
      client_secret: ASANA_CLIENT_SECRET,
      redirect_uri: ASANA_REDIRECT_URI,
      code: code
    })
  });
  
  const data = await response.json();
  if (data.access_token) {
    saveToken(data);
    return data.access_token;
  }
  throw new Error(data.error || 'Failed to get token');
}

// Make authenticated API request
async function asanaRequest(endpoint, options = {}) {
  const token = loadToken();
  if (!token) {
    throw new Error('No access token. Please authorize first.');
  }
  
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

// Get user's workspaces
async function getWorkspaces() {
  return asanaRequest('/workspaces');
}

// Get projects in workspace
async function getProjects(workspaceId) {
  return asanaRequest(`/workspaces/${workspaceId}/projects`);
}

// Create a task
async function createTask(projectId, taskData) {
  return asanaRequest('/tasks', {
    method: 'POST',
    body: JSON.stringify({
      data: {
        projects: [projectId],
        name: taskData.name,
        notes: taskData.notes,
        due_on: taskData.dueDate,
        assignee: taskData.assignee
      }
    })
  });
}

// Get tasks in project
async function getTasks(projectId) {
  return asanaRequest(`/projects/${projectId}/tasks?opt_fields=name,assignee,completed,due_on,notes`);
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

// Test connection
async function testConnection() {
  console.log('Testing Asana connection...\n');
  
  const token = loadToken();
  if (!token) {
    console.log('❌ No access token found.');
    console.log('\n🔗 AUTHORIZATION REQUIRED:');
    console.log('1. Visit this URL:');
    console.log(getAuthUrl());
    console.log('\n2. Authorize BrandGate');
    console.log('3. Copy the authorization code from the callback URL');
    console.log('4. Run: node asana-integration.js auth <code>');
    return false;
  }
  
  try {
    const user = await asanaRequest('/users/me');
    console.log('✅ Connected to Asana!');
    console.log(`   User: ${user.data.name} (${user.data.email})`);
    
    const workspaces = await getWorkspaces();
    console.log(`\n📁 Workspaces (${workspaces.data.length}):`);
    workspaces.data.forEach(w => {
      console.log(`   • ${w.name} (ID: ${w.gid})`);
    });
    
    return true;
  } catch (e) {
    console.log('❌ Connection failed:', e.message);
    console.log('\nToken may have expired. Please reauthorize.');
    return false;
  }
}

// Main
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  console.log('═══════════════════════════════════════════════════');
  console.log('  ASANA INTEGRATION');
  console.log('  BrandGate Task Management');
  console.log('═══════════════════════════════════════════════════\n');
  
  switch (command) {
    case 'auth':
      if (!args[1]) {
        console.log('Usage: node asana-integration.js auth <code>');
        console.log('\nGet auth URL:');
        console.log(getAuthUrl());
        return;
      }
      try {
        const token = await exchangeCodeForToken(args[1]);
        console.log('✅ Authorization successful!');
        console.log('Token saved to .asana-token.json\n');
      } catch (e) {
        console.log('❌ Authorization failed:', e.message);
      }
      break;
      
    case 'workspaces':
      try {
        const workspaces = await getWorkspaces();
        console.log('📁 WORKSPACES:\n');
        workspaces.data.forEach(w => {
          console.log(`   ${w.name}`);
          console.log(`   ID: ${w.gid}\n`);
        });
      } catch (e) {
        console.log('❌ Error:', e.message);
      }
      break;
      
    case 'projects':
      if (!args[1]) {
        console.log('Usage: node asana-integration.js projects <workspace-id>');
        return;
      }
      try {
        const projects = await getProjects(args[1]);
        console.log('📋 PROJECTS:\n');
        projects.data.forEach(p => {
          console.log(`   ${p.name}`);
          console.log(`   ID: ${p.gid}\n`);
        });
      } catch (e) {
        console.log('❌ Error:', e.message);
      }
      break;
      
    case 'tasks':
      if (!args[1]) {
        console.log('Usage: node asana-integration.js tasks <project-id>');
        return;
      }
      try {
        const tasks = await getTasks(args[1]);
        console.log('✅ TASKS:\n');
        tasks.data.forEach(t => {
          const status = t.completed ? '✅' : '⏳';
          console.log(`   ${status} ${t.name}`);
          if (t.due_on) console.log(`      Due: ${t.due_on}`);
          console.log('');
        });
      } catch (e) {
        console.log('❌ Error:', e.message);
      }
      break;
      
    case 'create':
      // TODO: Implement task creation
      console.log('Task creation - specify project and task details');
      break;
      
    default:
      console.log('Testing connection...\n');
      const connected = await testConnection();
      
      if (!connected) {
        console.log('\n📖 COMMANDS:');
        console.log('  auth <code>     - Authorize with code from OAuth');
        console.log('  workspaces      - List workspaces');
        console.log('  projects <id>   - List projects in workspace');
        console.log('  tasks <id>      - List tasks in project');
        console.log('  create          - Create a task (TODO)');
      }
  }
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
