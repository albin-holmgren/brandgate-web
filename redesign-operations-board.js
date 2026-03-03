#!/usr/bin/env node
// redesign-operations-board.js
// Create better structure for OpenClaw Operations board

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

// Create section
async function createSection(projectId, name) {
  return asanaRequest(`/projects/${projectId}/sections`, {
    method: 'POST',
    body: JSON.stringify({ data: { name } })
  });
}

// Get existing sections
async function getSections(projectId) {
  return asanaRequest(`/projects/${projectId}/sections`);
}

// Delete section
async function deleteSection(sectionId) {
  return asanaRequest(`/sections/${sectionId}`, {
    method: 'DELETE'
  });
}

async function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  REDESIGNING OPERATIONS BOARD');
  console.log('═══════════════════════════════════════════════════\n');
  
  // Get existing sections
  console.log('📁 Checking existing sections...');
  const existing = await getSections(OPERATIONS_PROJECT);
  console.log(`  Found ${existing.data.length} existing sections\n`);
  
  // New section structure
  const newSections = [
    '🚨 URGENT - Today',
    '🔥 Hot Leads - Respond Now', 
    '📧 To Do - Follow-ups',
    '⏳ Waiting For Response',
    '📊 Daily Tasks',
    '📝 Content & SEO',
    '🎯 Optimization',
    '📚 History & Completed',
    '💡 Ideas & Backlog'
  ];
  
  console.log('🆕 Creating new sections...\n');
  
  for (const sectionName of newSections) {
    try {
      await createSection(OPERATIONS_PROJECT, sectionName);
      console.log(`  ✅ ${sectionName}`);
      await new Promise(r => setTimeout(r, 500));
    } catch (e) {
      console.log(`  ⚠️  ${sectionName} - ${e.message}`);
    }
  }
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  ✅ BOARD REDESIGNED!');
  console.log('═══════════════════════════════════════════════════');
  console.log('');
  console.log('📋 NEW STRUCTURE:');
  console.log('');
  console.log('🚨 URGENT - Today');
  console.log('   Critical tasks needing immediate attention');
  console.log('');
  console.log('🔥 Hot Leads - Respond Now');
  console.log('   Responses from high-value prospects (85+ score)');
  console.log('');
  console.log('📧 To Do - Follow-ups');
  console.log('   Regular follow-ups and tasks for you to handle');
  console.log('');
  console.log('⏳ Waiting For Response');
  console.log('   Outreach sent, waiting for replies');
  console.log('');
  console.log('📊 Daily Tasks');
  console.log('   Recurring daily operations (SEO, inbox, analytics)');
  console.log('');
  console.log('📝 Content & SEO');
  console.log('   Blog posts, content calendar, SEO tasks');
  console.log('');
  console.log('🎯 Optimization');
  console.log('   A/B tests, improvements, experiments');
  console.log('');
  console.log('📚 History & Completed');
  console.log('   Archive of completed work');
  console.log('');
  console.log('💡 Ideas & Backlog');
  console.log('   Future ideas and low-priority tasks');
  console.log('');
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
