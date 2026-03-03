#!/usr/bin/env node
// asana-workflow-updated.js
// Updated Asana workflow - Operations board for tasks, Features board for app features with priority

const fs = require('fs');

const TOKEN_FILE = '/home/node/.openclaw/workspace/.asana-token.json';
const ASANA_API_BASE = 'https://app.asana.com/api/1.0';

// CORRECT Project IDs
const PROJECTS = {
  operations: '1213474894327849',  // OpenClaw board - PRIMARY WORK BOARD
  features: '1213475126754388'     // Features board - APP FEATURES ONLY
};

// Section cache
let SECTIONS = {};

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

// Get sections for a project
async function getSections(projectId) {
  const sections = await asanaRequest(`/projects/${projectId}/sections`);
  const result = {};
  
  for (const section of sections.data) {
    const name = section.name.toLowerCase();
    if (name.includes('to do') || name.includes('todo') || name.includes('backlog')) {
      result.todo = section.gid;
    } else if (name.includes('doing') || name.includes('in progress')) {
      result.doing = section.gid;
    } else if (name.includes('done') || name.includes('completed')) {
      result.done = section.gid;
    }
  }
  
  return result;
}

// Initialize sections
async function initSections() {
  SECTIONS.operations = await getSections(PROJECTS.operations);
  SECTIONS.features = await getSections(PROJECTS.features);
}

// Create task in specific project and section
async function createTask(projectId, sectionId, task) {
  const body = {
    data: {
      projects: [projectId],
      name: task.name,
      notes: task.notes || ''
    }
  };
  
  if (sectionId) {
    body.data.memberships = [{ project: projectId, section: sectionId }];
  }
  
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

// ==========================================
// OPERATIONS BOARD FUNCTIONS
// ==========================================

// Log completed daily task to Operations → Done
async function logCompletedTask(taskType, details, metrics = {}) {
  const timestamp = new Date().toISOString();
  const today = timestamp.split('T')[0];
  
  const taskEmojis = {
    'morning-inbox': '📧',
    'outreach-sent': '📤',
    'lead-research': '🔎',
    'analytics-check': '📊',
    'seo-check': '🔍',
    'daily-report': '📈',
    'crm-update': '💼',
    'content-published': '📝',
    'follow-up-sent': '🔄'
  };
  
  const emoji = taskEmojis[taskType] || '✅';
  
  let taskName = `${emoji} ${taskType.replace(/-/g, ' ').toUpperCase()}`;
  let taskNotes = `${details}\n\n---\n⏰ Completed: ${timestamp}`;
  
  if (metrics && Object.keys(metrics).length > 0) {
    taskNotes += '\n📊 Metrics:';
    for (const [key, value] of Object.entries(metrics)) {
      taskNotes += `\n• ${key}: ${value}`;
    }
  }
  
  try {
    await createTask(
      PROJECTS.operations,
      SECTIONS.operations.done,
      { name: taskName, notes: taskNotes, dueDate: today }
    );
    console.log(`✅ Logged to Operations: ${taskName}`);
    return true;
  } catch (e) {
    console.log(`⚠️  Failed to log: ${e.message}`);
    return false;
  }
}

// Create todo/follow-up in Operations → To do
async function createFollowUp(title, description, dueDate = null) {
  const timestamp = new Date().toISOString();
  
  const taskNotes = `${description}\n\n---\nCreated: ${timestamp}`;
  
  try {
    await createTask(
      PROJECTS.operations,
      SECTIONS.operations.todo,
      { name: `📝 ${title}`, notes: taskNotes, dueDate: dueDate }
    );
    console.log(`✅ Created follow-up: ${title}`);
    return true;
  } catch (e) {
    console.log(`❌ Failed to create follow-up: ${e.message}`);
    return false;
  }
}

// ==========================================
// FEATURES BOARD FUNCTIONS (with Priority)
// ==========================================

// Create feature request with priority
async function createFeatureRequest(title, description, priority = 'medium') {
  const timestamp = new Date().toISOString();
  
  // Priority formatting
  const priorityConfig = {
    high: { emoji: '🔴', label: 'HIGH', days: 7 },
    medium: { emoji: '🟡', label: 'MEDIUM', days: 30 },
    low: { emoji: '🟢', label: 'LOW', days: 90 }
  };
  
  const config = priorityConfig[priority] || priorityConfig.medium;
  
  // Calculate due date based on priority
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + config.days);
  
  const taskName = `${config.emoji} [${config.label}] ${title}`;
  const taskNotes = `${description}\n\n---\n🎯 Priority: ${config.label}\n📅 Target: ${dueDate.toISOString().split('T')[0]}\n📝 Requested: ${timestamp}\n\nStatus options:\n• 🔴 HIGH - Implement within 1 week\n• 🟡 MEDIUM - Implement within 1 month\n• 🟢 LOW - Implement within 3 months`;
  
  try {
    await createTask(
      PROJECTS.features,
      SECTIONS.features.todo,
      { name: taskName, notes: taskNotes, dueDate: dueDate.toISOString().split('T')[0] }
    );
    console.log(`✅ Feature created: [${config.label}] ${title}`);
    return true;
  } catch (e) {
    console.log(`❌ Failed to create feature: ${e.message}`);
    return false;
  }
}

// Update feature priority
async function updateFeaturePriority(taskId, newPriority) {
  const priorityEmojis = { high: '🔴', medium: '🟡', low: '🟢' };
  const priorityLabels = { high: 'HIGH', medium: 'MEDIUM', low: 'LOW' };
  
  try {
    // Get current task
    const task = await asanaRequest(`/tasks/${taskId}`);
    const currentName = task.data.name;
    
    // Extract title (remove old priority prefix)
    let title = currentName;
    const emojiMatch = currentName.match(/^[🔴🟡🟢]/);
    if (emojiMatch) {
      title = currentName.substring(currentName.indexOf(']') + 1).trim();
    }
    
    // Create new name with updated priority
    const newName = `${priorityEmojis[newPriority]} [${priorityLabels[newPriority]}] ${title}`;
    
    // Update task
    await asanaRequest(`/tasks/${taskId}`, {
      method: 'PUT',
      body: JSON.stringify({
        data: { name: newName }
      })
    });
    
    console.log(`✅ Priority updated to ${newPriority.toUpperCase()}`);
    return true;
  } catch (e) {
    console.log(`❌ Failed to update priority: ${e.message}`);
    return false;
  }
}

// ==========================================
// RESPONSE HANDLERS
// ==========================================

// When someone responds to outreach
async function handleEmailResponse(contactName, company, responseType, responseText) {
  const timestamp = new Date().toISOString();
  
  // Log to Operations
  await logCompletedTask('morning-inbox', 
    `Response from ${contactName} @ ${company}\n\nType: ${responseType}\n\nPreview: ${responseText.substring(0, 200)}...`,
    { contact: contactName, company: company, type: responseType }
  );
  
  // Create follow-up task
  let followUpTitle = '';
  let followUpDesc = '';
  
  switch (responseType.toLowerCase()) {
    case 'positive':
    case 'interested':
      followUpTitle = `Follow up with ${contactName} @ ${company}`;
      followUpDesc = `They expressed interest!\n\nSuggested actions:\n• Reply within 2 hours\n• Offer 15-min intro call\n• Share case studies\n• Send calendar link\n\nOriginal response:\n${responseText}`;
      break;
      
    case 'meeting':
    case 'booking':
      followUpTitle = `🎉 BOOK MEETING: ${contactName} @ ${company}`;
      followUpDesc = `They want to meet!\n\nUrgent - respond today:\n• Send calendar link immediately\n• Suggest 2-3 time slots\n• Prepare demo/talking points\n• Add to calendar\n\nOriginal response:\n${responseText}`;
      break;
      
    case 'question':
      followUpTitle = `Answer question from ${contactName} @ ${company}`;
      followUpDesc = `They have questions:\n\nActions:\n• Answer all questions thoroughly\n• Offer additional resources\n• Suggest a call to discuss\n\nQuestions:\n${responseText}`;
      break;
      
    case 'negative':
      followUpTitle = `Archive: ${contactName} @ ${company} - Not interested`;
      followUpDesc = `Marked as not interested.\n\nReason: ${responseText}\n\nActions:\n• Move to "Not Interested" in Attio\n• Set reminder to check back in 6 months\n• Note reason for future reference`;
      break;
      
    default:
      followUpTitle = `Review response from ${contactName} @ ${company}`;
      followUpDesc = `Response received:\n\n${responseText}\n\nCategorize and determine next steps.`;
  }
  
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + (responseType === 'meeting' ? 1 : 2));
  
  await createFollowUp(followUpTitle, followUpDesc, dueDate.toISOString().split('T')[0]);
}

// ==========================================
// MAIN FUNCTION
// ==========================================

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  await initSections();
  
  switch (command) {
    case 'log':
      if (!args[1]) {
        console.log('Usage: node asana-workflow-updated.js log <type> "details" [metrics-json]');
        return;
      }
      const metrics = args[3] ? JSON.parse(args[3]) : {};
      await logCompletedTask(args[1], args[2] || '', metrics);
      break;
      
    case 'followup':
      if (!args[1]) {
        console.log('Usage: node asana-workflow-updated.js followup "Title" "Description" [YYYY-MM-DD]');
        return;
      }
      await createFollowUp(args[1], args[2] || '', args[3]);
      break;
      
    case 'feature':
      if (!args[1]) {
        console.log('Usage: node asana-workflow-updated.js feature "Title" "Description" [high|medium|low]');
        console.log('');
        console.log('Priority levels:');
        console.log('  🔴 HIGH   - Implement within 1 week');
        console.log('  🟡 MEDIUM - Implement within 1 month (default)');
        console.log('  🟢 LOW    - Implement within 3 months');
        return;
      }
      await createFeatureRequest(args[1], args[2] || '', args[3] || 'medium');
      break;
      
    case 'response':
      if (!args[1]) {
        console.log('Usage: node asana-workflow-updated.js response "Name" "Company" "Type" "Text"');
        return;
      }
      await handleEmailResponse(args[1], args[2], args[3], args[4] || '');
      break;
      
    default:
      console.log('═══════════════════════════════════════════════════');
      console.log('  ASANA WORKFLOW - BrandGate');
      console.log('═══════════════════════════════════════════════════');
      console.log('');
      console.log('📋 OPERATIONS BOARD (OpenClaw) - Daily Tasks');
      console.log('  URL: https://app.asana.com/1/1213451691700872/project/1213474894327849');
      console.log('');
      console.log('🎯 FEATURES BOARD - App Features Only');
      console.log('  URL: https://app.asana.com/1/1213451691700872/project/1213475126754388');
      console.log('');
      console.log('📖 COMMANDS:');
      console.log('');
      console.log('  log <type> "details" [metrics]');
      console.log('    Types: morning-inbox, outreach-sent, lead-research,');
      console.log('           analytics-check, seo-check, daily-report, crm-update');
      console.log('    Example: log outreach-sent "Sent 5 emails" \'{\"count\":5}\'');
      console.log('');
      console.log('  followup "Title" "Description" [due-date]');
      console.log('    Example: followup "Call Viktor" "Happy Socks follow-up" 2026-03-05');
      console.log('');
      console.log('  feature "Title" "Description" [priority]');
      console.log('    Priority: high 🔴 / medium 🟡 / low 🟢');
      console.log('    Example: feature "Add SMS" "Send alerts" high');
      console.log('');
      console.log('  response "Name" "Company" "Type" "Text"');
      console.log('    Types: positive, meeting, question, negative');
      console.log('    Example: response "Viktor" "Happy Socks" "meeting" "Let\'s talk"');
  }
}

// Export for scheduler
module.exports = {
  initSections,
  logCompletedTask,
  createFollowUp,
  createFeatureRequest,
  handleEmailResponse,
  updateFeaturePriority,
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
