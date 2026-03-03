#!/usr/bin/env node
// asana-personal-token.js
// Use Personal Access Token instead of OAuth (simpler!)

const fs = require('fs');

console.log('═══════════════════════════════════════════════════');
console.log('  ASANA PERSONAL ACCESS TOKEN SETUP');
console.log('  (Easier than OAuth!)');
console.log('═══════════════════════════════════════════════════\n');

console.log('🔗 STEP 1: Create Personal Access Token');
console.log('');
console.log('1. Go to: https://app.asana.com/0/developer-console');
console.log('2. Click "Personal Access Tokens" tab');
console.log('3. Click "Create New Personal Access Token"');
console.log('4. Name it: "BrandGate Integration"');
console.log('5. Copy the token (looks like: 1/1234567890:abc...)');
console.log('');
console.log('📋 STEP 2: Save the token');
console.log('Create a file at:');
console.log('/home/node/.openclaw/workspace/.asana-token.json');
console.log('');
console.log('With this content:');
console.log('{');
console.log('  "access_token": "YOUR_TOKEN_HERE",');
console.log('  "token_type": "Bearer"');
console.log('}');
console.log('');
console.log('Or just send me the token and I\'ll save it!');
console.log('');
console.log('✅ That\'s it! No OAuth, no redirect URIs, no errors!');
console.log('');
