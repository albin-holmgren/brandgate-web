#!/usr/bin/env node
// archive-bounces.js
// Archive all bounce notifications from Gmail

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

async function archiveBounces() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );
  
  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });
  
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
  
  console.log('📧 ARCHIVING BOUNCE NOTIFICATIONS');
  console.log('═══════════════════════════════════════════════════\n');
  
  try {
    // Find bounce messages in inbox
    const res = await gmail.users.messages.list({
      userId: 'me',
      q: 'in:inbox subject:("Delivery Status Notification" OR "Undelivered Mail" OR bounce)',
      maxResults: 50
    });
    
    const messages = res.data.messages || [];
    console.log(`Found ${messages.length} bounce notifications to archive\n`);
    
    let archived = 0;
    for (const msg of messages) {
      try {
        // Archive by removing INBOX label
        await gmail.users.messages.modify({
          userId: 'me',
          id: msg.id,
          requestBody: {
            removeLabelIds: ['INBOX']
          }
        });
        archived++;
        process.stdout.write(`✅ Archived ${archived}/${messages.length}\r`);
      } catch (e) {
        console.log(`❌ Failed to archive message ${msg.id}`);
      }
    }
    
    console.log(`\n\n✅ Archived ${archived} bounce notifications!`);
    console.log('Inbox is now cleaner.');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

archiveBounces().catch(console.error);
