#!/usr/bin/env node
// archive-autoreplies.js
// Archive auto-reply messages from inbox

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

async function archiveAutoReplies() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );
  
  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });
  
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
  
  console.log('📧 ARCHIVING AUTO-REPLIES');
  console.log('═══════════════════════════════════════════════════\n');
  
  try {
    // Get all inbox messages
    const res = await gmail.users.messages.list({
      userId: 'me',
      q: 'in:inbox',
      maxResults: 50
    });
    
    const messages = res.data.messages || [];
    let archived = 0;
    
    for (const msg of messages) {
      try {
        const detail = await gmail.users.messages.get({
          userId: 'me',
          id: msg.id,
          format: 'metadata',
          metadataHeaders: ['Subject', 'From']
        });
        
        const subject = detail.data.payload.headers.find(h => h.name === 'Subject')?.value || '';
        const from = detail.data.payload.headers.find(h => h.name === 'From')?.value || '';
        
        // Check if it's an auto-reply
        const isAutoReply = 
          subject.toLowerCase().includes('thanks for contacting') ||
          subject.toLowerCase().includes('auto-reply') ||
          subject.toLowerCase().includes('automated response') ||
          subject.toLowerCase().includes('out of office') ||
          subject.toLowerCase().includes('longer response time') ||
          from.toLowerCase().includes('support@') ||
          from.toLowerCase().includes('customercare@') ||
          from.toLowerCase().includes('no-reply@') ||
          from.toLowerCase().includes('noreply@');
        
        if (isAutoReply) {
          await gmail.users.messages.modify({
            userId: 'me',
            id: msg.id,
            requestBody: {
              removeLabelIds: ['INBOX']
            }
          });
          archived++;
          console.log(`✅ Archived: ${subject.substring(0, 50)}`);
        }
      } catch (e) {
        console.log(`❌ Failed: ${e.message}`);
      }
    }
    
    console.log(`\n✅ Archived ${archived} auto-reply messages!`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

archiveAutoReplies().catch(console.error);
