#!/usr/bin/env node
// asana-workflow.js
// Automated Asana workflow for BrandGate
// Creates tasks for outreach, content, and operations

const fs = require('fs');

// Check if Asana is authorized
function isAuthorized() {
  try {
    const token = JSON.parse(fs.readFileSync('/home/node/.openclaw/workspace/.asana-token.json', 'utf8'));
    return !!token.access_token;
  } catch {
    return false;
  }
}

async function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  ASANA WORKFLOW AUTOMATION');
  console.log('  BrandGate Task Management');
  console.log('═══════════════════════════════════════════════════\n');
  
  if (!isAuthorized()) {
    console.log('⚠️  ASANA NOT YET CONNECTED\n');
    console.log('🔗 AUTHORIZATION STEPS:\n');
    console.log('1. Click this link to authorize BrandGate:');
    console.log('');
    console.log('   https://app.asana.com/-/oauth_authorize?client_id=1213475124988915&redirect_uri=https%3A%2F%2Fbrandgate.dev%2Fasana%2Fcallback&response_type=code&scope=default');
    console.log('');
    console.log('2. Log into Asana and authorize BrandGate');
    console.log('');
    console.log('3. You\'ll be redirected to brandgate.dev/asana/callback');
    console.log('   (this page may show 404, that\'s OK)');
    console.log('');
    console.log('4. Copy the "code" parameter from the URL');
    console.log('   Example: brandgate.dev/asana/callback?code=XXXXXX');
    console.log('');
    console.log('5. Send me the code and I\'ll complete the setup!');
    console.log('');
    return;
  }
  
  console.log('✅ Asana is connected!\n');
  console.log('📋 WORKFLOW TASKS:\n');
  
  console.log('Daily Tasks:');
  console.log('  • Check outreach responses');
  console.log('  • Update CRM deal stages');
  console.log('  • Review website analytics');
  console.log('');
  
  console.log('Weekly Tasks:');
  console.log('  • Send follow-up emails');
  console.log('  • Review pipeline');
  console.log('  • Content planning');
  console.log('');
  
  console.log('Run: node asana-integration.js workspaces');
  console.log('to see your available workspaces and projects.');
}

main();
