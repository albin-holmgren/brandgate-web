#!/usr/bin/env node
// asana-quick-setup.js
// Quick setup guide for Asana authorization

console.log('═══════════════════════════════════════════════════');
console.log('  ASANA QUICK SETUP');
console.log('═══════════════════════════════════════════════════\n');

console.log('✅ Distribution settings updated!\n');
console.log('🔗 STEP 1: Click this link to authorize:');
console.log('');
console.log('https://app.asana.com/-/oauth_authorize?client_id=1213475124988915&redirect_uri=https%3A%2F%2Fbrandgate.dev%2Fasana%2Fcallback&response_type=code&scope=default');
console.log('');
console.log('📋 STEP 2: What you\'ll see:');
console.log('   • Asana login page (if not logged in)');
console.log('   • "BrandGate wants to access your account"');
console.log('   • Click "Allow"');
console.log('   • Redirected to brandgate.dev/asana/callback');
console.log('');
console.log('📋 STEP 3: Get the code:');
console.log('   Look at your browser URL bar:');
console.log('   https://brandgate.dev/asana/callback?code=0/abc123...');
console.log('   ');
console.log('   Copy everything after code=');
console.log('   Example: 0/1234567890:abcdefghijklmnopqrstuvwxyz');
console.log('');
console.log('📋 STEP 4: Send me the code');
console.log('   I\'ll complete the setup and create all tasks!');
console.log('');
