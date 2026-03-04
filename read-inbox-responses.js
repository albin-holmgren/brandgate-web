#!/usr/bin/env node
// read-inbox-responses.js
// Read and categorize inbox messages that need responses

const fs = require('fs');
const path = require('path');

function loadEnvFile(filepath) {
  try {
    const content = fs.readFileSync(filepath, 'utf8');
    const lines = content.split('\n');
    for (const line of lines) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) {
        process.env[match[1].trim()] = match[2].trim();
      }
    }
  } catch (e) {}
}

loadEnvFile(path.join('/home/node/.openclaw/workspace', '.env.gmail'));

const { google } = require('googleapis');

async function readInbox() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );
  
  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });
  
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
  
  console.log('📧 READING INBOX MESSAGES');
  console.log('═══════════════════════════════════════════════════\n');
  
  try {
    const res = await gmail.users.messages.list({
      userId: 'me',
      q: 'in:inbox',
      maxResults: 20
    });
    
    const messages = res.data.messages || [];
    
    for (let i = 0; i < messages.length; i++) {
      const msg = messages[i];
      const detail = await gmail.users.messages.get({
        userId: 'me',
        id: msg.id,
        format: 'full'
      });
      
      const headers = detail.data.payload.headers;
      const subject = headers.find(h => h.name === 'Subject')?.value || 'No subject';
      const from = headers.find(h => h.name === 'From')?.value || 'Unknown';
      
      // Get message body
      let body = '';
      if (detail.data.payload.parts) {
        const textPart = detail.data.payload.parts.find(p => p.mimeType === 'text/plain');
        if (textPart && textPart.body.data) {
          body = Buffer.from(textPart.body.data, 'base64').toString('utf-8');
        }
      } else if (detail.data.payload.body && detail.data.payload.body.data) {
        body = Buffer.from(detail.data.payload.body.data, 'base64').toString('utf-8');
      }
      
      console.log(`\n${'='.repeat(70)}`);
      console.log(`MESSAGE ${i + 1} of ${messages.length}`);
      console.log('='.repeat(70));
      console.log('From:', from);
      console.log('Subject:', subject);
      console.log('\nBody (first 500 chars):');
      console.log(body.substring(0, 500));
      if (body.length > 500) console.log('... [truncated]');
      
      // Categorize
      console.log('\n--- CATEGORIZATION ---');
      if (subject.toLowerCase().includes('thanks for contacting') || 
          subject.toLowerCase().includes('auto-reply') ||
          body.toLowerCase().includes('automated response')) {
        console.log('Type: 🤖 AUTO-REPLY');
        console.log('Action: Archive after noting return date');
      } else if (subject.toLowerCase().includes('re:') || 
                 subject.toLowerCase().includes('sv:') ||
                 subject.toLowerCase().includes('aw:')) {
        console.log('Type: 📧 RESPONSE TO OUTREACH');
        if (body.toLowerCase().includes('interested') || 
            body.toLowerCase().includes('intresserad') ||
            body.toLowerCase().includes('demo') ||
            body.toLowerCase().includes('meeting') ||
            body.toLowerCase().includes('boka') ||
            body.toLowerCase().includes('tid')) {
          console.log('Sentiment: ✅ POSITIVE (interested)');
          console.log('Action: Reply with calendar link, move to Qualified in Attio');
        } else if (body.toLowerCase().includes('not interested') || 
                   body.toLowerCase().includes('inte intresserad') ||
                   body.toLowerCase().includes('avböjer') ||
                   body.toLowerCase().includes('nej tack')) {
          console.log('Sentiment: ❌ NEGATIVE (declined)');
          console.log('Action: Move to Closed Lost in Attio, do not contact again');
        } else {
          console.log('Sentiment: ⚠️ NEUTRAL/QUESTION');
          console.log('Action: Reply within 2 hours, answer question');
        }
      } else {
        console.log('Type: 📨 OTHER');
        console.log('Action: Review and respond if needed');
      }
    }
    
    console.log('\n' + '='.repeat(70));
    console.log('SUMMARY: Review messages above and take action');
    console.log('='.repeat(70));
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

readInbox().catch(console.error);
