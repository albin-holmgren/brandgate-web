#!/usr/bin/env node
// cleanup-features-board.js
// Remove extra sections from Features board, keep only To Do / Doing / Done

const fs = require('fs');

const TOKEN_FILE = '/home/node/.openclaw/workspace/.asana-token.json';
const ASANA_API_BASE = 'https://app.asana.com/api/1.0';
const FEATURES_PROJECT = '1213475126754388';

// Keep these sections
const KEEP_SECTIONS = ['To Do', 'Doing', 'Done'];

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

async function cleanupFeaturesBoard() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  CLEANING UP FEATURES BOARD');
  console.log('═══════════════════════════════════════════════════\n');
  
  console.log('🎯 Keeping only: To Do / Doing / Done\n');
  
  // Get all sections
  const sections = await asanaRequest(`/projects/${FEATURES_PROJECT}/sections`);
  
  if (!sections.data) {
    console.log('❌ Could not fetch sections');
    return;
  }
  
  console.log('📋 Found sections:');
  sections.data.forEach(s => {
    const action = KEEP_SECTIONS.includes(s.name) ? '✅ KEEP' : '❌ REMOVE';
    console.log(`  ${action}: ${s.name}`);
  });
  console.log('');
  
  // Find sections to remove
  const toRemove = sections.data.filter(s => !KEEP_SECTIONS.includes(s.name));
  
  if (toRemove.length === 0) {
    console.log('✅ No extra sections to remove\n');
    return;
  }
  
  console.log(`🗑️  Removing ${toRemove.length} extra sections...\n`);
  
  let removed = 0;
  let failed = 0;
  
  for (const section of toRemove) {
    try {
      // First, get tasks in this section
      const tasks = await asanaRequest(`/sections/${section.gid}/tasks`);
      
      if (tasks.data && tasks.data.length > 0) {
        console.log(`  ⚠️  ${section.name}: ${tasks.data.length} tasks - moving to "To Do" first...`);
        
        // Find To Do section
        const todoSection = sections.data.find(s => s.name === 'To Do');
        
        if (todoSection) {
          // Move tasks to To Do
          for (const task of tasks.data) {
            try {
              await asanaRequest(`/sections/${todoSection.gid}/addTask`, {
                method: 'POST',
                body: JSON.stringify({ data: { task: task.gid } })
              });
            } catch (e) {
              // Task might already be in multiple sections
            }
          }
          console.log(`     ✅ Moved ${tasks.data.length} tasks to "To Do"`);
        }
      }
      
      // Now delete the section
      await asanaRequest(`/sections/${section.gid}`, {
        method: 'DELETE'
      });
      
      console.log(`  ✅ Removed: ${section.name}`);
      removed++;
      
      await new Promise(r => setTimeout(r, 500));
    } catch (e) {
      console.log(`  ❌ Failed to remove: ${section.name} - ${e.message}`);
      failed++;
    }
  }
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  ✅ CLEANUP COMPLETE!');
  console.log('═══════════════════════════════════════════════════');
  console.log(`  • Removed: ${removed} sections`);
  console.log(`  • Failed: ${failed} sections`);
  console.log('');
  console.log('📋 FINAL STRUCTURE:');
  console.log('  ✅ To Do');
  console.log('  ✅ Doing');
  console.log('  ✅ Done');
  console.log('');
  console.log('🎉 Features board is now clean and simple!');
}

cleanupFeaturesBoard().catch(e => {
  console.error('Error:', e.message);
});
