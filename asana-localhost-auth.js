#!/usr/bin/env node
// asana-localhost-auth.js
// Use localhost redirect (works without domain setup)

const fs = require('fs');

console.log('═══════════════════════════════════════════════════');
console.log('  ASANA LOCALHOST AUTH (WORKAROUND)');
console.log('═══════════════════════════════════════════════════\n');

console.log('Since the domain redirect isn\'t working, here\'s an easier way:\n');

console.log('🔗 OPTION 1: Personal Access Token (RECOMMENDED)');
console.log('This is the simplest - no OAuth needed!\n');
console.log('1. Go to: https://app.asana.com/0/developer-console');
console.log('2. Click "Personal Access Tokens"');
console.log('3. Create new token named "BrandGate"');
console.log('4. Copy the token (starts with "1/")');
console.log('5. Send it to me - I\'ll save it and we\'re done!\n');

console.log('🔗 OPTION 2: Update Redirect URI in Asana');
console.log('If you want to use OAuth, you need to update the app:\n');
console.log('1. Go to: https://app.asana.com/0/developer-console');
console.log('2. Find your BrandGate app');
console.log('3. Click "OAuth" tab');
console.log('4. Under "Redirect URIs", add EXACTLY:');
console.log('   https://brandgate.dev/asana/callback');
console.log('5. Save and try the link again\n');

console.log('🔗 OPTION 3: Use localhost (Temporary)');
console.log('For testing, you can use localhost:\n');
console.log('1. Add this redirect URI in Asana:');
console.log('   http://localhost:3000/asana/callback');
console.log('2. Use this modified auth URL:');
console.log('   https://app.asana.com/-/oauth_authorize?client_id=1213475124988915&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fasana%2Fcallback&response_type=code&scope=default');
console.log('3. After auth, copy the code from browser URL');
console.log('4. Send me the code\n');

console.log('═══════════════════════════════════════════════════');
console.log('  MY RECOMMENDATION: Use Personal Access Token');
console.log('  It\'s simpler, more secure, and works immediately!');
console.log('═══════════════════════════════════════════════════\n');
