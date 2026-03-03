#!/usr/bin/env node
// Asana Task Processor - Runs every 15 minutes
// Processes tasks from Memory & Tasks and Features projects

const ASANA_TOKEN = 'f40b690500a25ef55ff4a6c4416aef80';
const MEMORY_TASKS_PROJECT = '1213474894327849';
const FEATURES_PROJECT = '1213475126754388';

const ASANA_BASE = 'https://app.asana.com/api/1.0';

async function asanaRequest(endpoint) {
  const response = await fetch(`${ASANA_BASE}${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${ASANA_TOKEN}`,
    },
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`${response.status}: ${error}`);
  }
  
  return response.json();
}

async function checkTasks() {
  console.log(`\n[${new Date().toISOString()}] Checking Asana tasks...\n`);
  
  try {
    // Check Memory & Tasks
    console.log('📋 Memory & Tasks Project:');
    const memoryTasks = await asanaRequest(`/projects/${MEMORY_TASKS_PROJECT}/tasks?opt_fields=name,completed,due_on,notes,permalink_url`);
    const incompleteMemory = memoryTasks.data?.filter(t => !t.completed) || [];
    
    if (incompleteMemory.length === 0) {
      console.log('  No incomplete tasks\n');
    } else {
      incompleteMemory.forEach(t => {
        console.log(`  • ${t.name}`);
        console.log(`    URL: ${t.permalink_url}`);
        if (t.notes) console.log(`    Notes: ${t.notes.substring(0, 100)}...`);
        console.log('');
      });
    }
    
    // Check Features
    console.log('🔧 Features Project:');
    const featureTasks = await asanaRequest(`/projects/${FEATURES_PROJECT}/tasks?opt_fields=name,completed,due_on,notes,permalink_url`);
    const incompleteFeatures = featureTasks.data?.filter(t => !t.completed) || [];
    
    if (incompleteFeatures.length === 0) {
      console.log('  No incomplete tasks\n');
    } else {
      incompleteFeatures.forEach(t => {
        console.log(`  • ${t.name}`);
        console.log(`    URL: ${t.permalink_url}`);
        if (t.notes) console.log(`    Notes: ${t.notes.substring(0, 100)}...`);
        console.log('');
      });
    }
    
    console.log(`Summary: ${incompleteMemory.length} memory tasks, ${incompleteFeatures.length} feature tasks\n`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Run immediately
checkTasks();

// Run every 15 minutes
setInterval(checkTasks, 900000);

console.log('Asana task checker started. Running every 15 minutes...');
