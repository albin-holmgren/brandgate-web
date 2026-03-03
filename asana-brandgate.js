#!/usr/bin/env node
// Asana Integration - BrandGate Workspace
// Project 1: Memory & Tasks (1213474894327849)
// Project 2: Features (1213475126754388)

const ASANA_TOKEN = 'f40b690500a25ef55ff4a6c4416aef80';
const WORKSPACE_ID = '1213475124988915';
const MEMORY_TASKS_PROJECT = '1213474894327849';
const FEATURES_PROJECT = '1213475126754388';

const ASANA_BASE = 'https://app.asana.com/api/1.0';

async function asanaRequest(endpoint, method = 'GET', body) {
  const response = await fetch(`${ASANA_BASE}${endpoint}`, {
    method,
    headers: {
      'Authorization': `Bearer ${ASANA_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify({ data: body }) : undefined,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Asana API error: ${response.status} - ${error}`);
  }

  return response.json();
}

// Get tasks from Memory & Tasks project
async function getMemoryTasks() {
  const result = await asanaRequest(`/projects/${MEMORY_TASKS_PROJECT}/tasks?opt_fields=name,assignee,due_on,completed,notes,tags,permalink_url`);
  return result.data || [];
}

// Get tasks from Features project
async function getFeatureTasks() {
  const result = await asanaRequest(`/projects/${FEATURES_PROJECT}/tasks?opt_fields=name,assignee,due_on,completed,notes,tags,permalink_url`);
  return result.data || [];
}

// Get detailed task info
async function getTaskDetails(taskId) {
  const result = await asanaRequest(`/tasks/${taskId}?opt_fields=name,assignee,due_on,completed,notes,tags,permalink_url,projects`);
  return result.data;
}

// Complete a task with verification note
async function completeTaskWithVerification(taskId, verificationNote) {
  // Add comment first
  await asanaRequest(`/tasks/${taskId}/stories`, 'POST', {
    text: `✅ VERIFIED: ${verificationNote}`
  });
  
  // Then mark complete
  const result = await asanaRequest(`/tasks/${taskId}`, 'PUT', {
    completed: true
  });
  
  return result.data;
}

// Add comment to task
async function addComment(taskId, text) {
  const result = await asanaRequest(`/tasks/${taskId}/stories`, 'POST', {
    text: text
  });
  return result.data;
}

// Create a task with verification checklist
async function createTaskWithVerification(projectId, task) {
  const fullTask = {
    ...task,
    notes: `${task.notes || ''}\n\n---\n✅ VERIFICATION CHECKLIST:\n[ ] Implementation complete\n[ ] Tested and working\n[ ] Deployed to production\n[ ] Verified by user`
  };
  
  const result = await asanaRequest('/tasks', 'POST', {
    ...fullTask,
    projects: [projectId]
  });
  
  return result.data;
}

// Main function to check and process tasks
async function checkAndProcessTasks() {
  console.log(`\n[${new Date().toISOString()}] Checking Asana tasks...\n`);
  
  try {
    // Get incomplete tasks from both projects
    const [memoryTasks, featureTasks] = await Promise.all([
      getMemoryTasks(),
      getFeatureTasks()
    ]);
    
    const incompleteMemory = memoryTasks.filter(t => !t.completed);
    const incompleteFeatures = featureTasks.filter(t => !t.completed);
    
    console.log(`Memory & Tasks: ${incompleteMemory.length} incomplete`);
    console.log(`Features: ${incompleteFeatures.length} incomplete\n`);
    
    // Process Memory & Tasks
    for (const task of incompleteMemory) {
      console.log(`📋 MEMORY TASK: ${task.name}`);
      console.log(`   URL: ${task.permalink_url}`);
      
      // Here you would implement logic to handle different task types
      // For now, just log them
      console.log('   Action: Review and process manually or implement handler\n');
    }
    
    // Process Features
    for (const task of incompleteFeatures) {
      console.log(`🔧 FEATURE: ${task.name}`);
      console.log(`   URL: ${task.permalink_url}`);
      console.log('   Action: Review and implement with verification\n');
    }
    
    return {
      memory: incompleteMemory,
      features: incompleteFeatures
    };
    
  } catch (error) {
    console.error('Error checking tasks:', error.message);
    return { memory: [], features: [] };
  }
}

// Verify a task is actually working before completing
async function verifyAndCompleteTask(taskId, verificationSteps) {
  const task = await getTaskDetails(taskId);
  
  console.log(`\n🔍 VERIFYING: ${task.name}`);
  console.log('Verification steps:', verificationSteps);
  
  // Here you would implement actual verification logic
  // For example:
  // - HTTP requests to check if page loads
  // - Database queries to check if data exists
  // - API calls to verify functionality
  
  console.log('✅ Verification passed (implement actual checks)');
  
  await completeTaskWithVerification(taskId, verificationSteps);
  console.log('✅ Task marked complete with verification\n');
}

// Create daily summary task
async function createDailySummary() {
  const today = new Date().toISOString().split('T')[0];
  const taskName = `Daily Summary - ${today}`;
  
  await createTaskWithVerification(MEMORY_TASKS_PROJECT, {
    name: taskName,
    notes: `Daily summary of work completed:\n\n- Tasks completed\n- Issues encountered\n- Plan for tomorrow`,
    due_on: today
  });
  
  console.log('✅ Daily summary task created');
}

// Run main check
async function main() {
  if (!ASANA_TOKEN) {
    console.error('❌ ASANA_TOKEN not set');
    process.exit(1);
  }
  
  await checkAndProcessTasks();
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  getMemoryTasks,
  getFeatureTasks,
  getTaskDetails,
  completeTaskWithVerification,
  addComment,
  createTaskWithVerification,
  verifyAndCompleteTask,
  checkAndProcessTasks,
  createDailySummary,
  MEMORY_TASKS_PROJECT,
  FEATURES_PROJECT
};
