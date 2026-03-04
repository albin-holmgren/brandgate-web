#!/usr/bin/env node
// test-swedish-encoding.js
// Test that Swedish characters are encoded correctly

const testStrings = [
  'B2B-lösning för A Day\'s March?',
  'B2B-plattform för Nordic Apparel',
  'Hantera distributörer och ordrar',
  'Intäktsinstrumentpaneler och fakturering',
  'Växa din grossistverksamhet'
];

console.log('🇸🇪 SWEDISH CHARACTER ENCODING TEST');
console.log('═══════════════════════════════════════════════════\n');

for (const str of testStrings) {
  console.log('Original:', str);
  
  // UTF-8 encoding
  const utf8Buffer = Buffer.from(str, 'utf-8');
  console.log('UTF-8 bytes:', utf8Buffer.length);
  
  // Base64 for email
  const base64 = utf8Buffer.toString('base64');
  console.log('Base64:', base64.substring(0, 50) + '...');
  
  // Decode back
  const decoded = Buffer.from(base64, 'base64').toString('utf-8');
  console.log('Decoded:', decoded);
  
  // Check if encoding/decoding is correct
  const isCorrect = str === decoded;
  console.log('✓ Encoding correct:', isCorrect ? 'YES ✅' : 'NO ❌');
  console.log('');
}

// Test MIME subject encoding
console.log('\n📧 MIME SUBJECT ENCODING');
console.log('═══════════════════════════════════════════════════\n');

const subject = 'B2B-lösning för A Day\'s March?';
const subjectBase64 = Buffer.from(subject, 'utf-8').toString('base64');

console.log('Subject:', subject);
console.log('MIME format:', `=?UTF-8?B?${subjectBase64}?=`);
console.log('');

// Show what Gmail will display
console.log('✅ When properly encoded, Gmail will display:');
console.log('   Subject:', subject);
console.log('');
console.log('❌ If NOT properly encoded, Gmail will display:');
console.log('   Subject: B2B-lÃƒÂ¶sning fÃƒÂ¶r A Day\'s March?');
