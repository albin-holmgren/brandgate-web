#!/usr/bin/env node
// check-gmail-inbox.js
// Check Gmail inbox for bounced emails and unarchived messages

const fs = require('fs');
const path = require('path');

// Load Gmail credentials
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

async function checkInbox() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );
  
  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });
  
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
  
  console.log('📧 CHECKING GMAIL INBOX (will@brandgate.dev)');
  console.log('═══════════════════════════════════════════════════\n');
  
  try {
    // Get messages from inbox (not archived)
    const inboxRes = await gmail.users.messages.list({
      userId: 'me',
      q: 'in:inbox',
      maxResults: 50
    });
    
    const inboxMessages = inboxRes.data.messages || [];
    console.log(`📥 INBOX: ${inboxMessages.length} messages\n`);
    
    // Get bounced messages
    const bounceRes = await gmail.users.messages.list({
      userId: 'me',
      q: 'subject:(bounce OR undelivered OR "delivery status notification" OR failed)',
      maxResults: 50
    });
    
    const bounceMessages = bounceRes.data.messages || [];
    console.log(`⚠️  BOUNCES: ${bounceMessages.length} messages\n`);
    
    // Check for auto-replies/out of office
    const autoReplyRes = await gmail.users.messages.list({
      userId: 'me',
      q: 'in:inbox subject:("out of office" OR "auto-reply" OR "automated response")',
      maxResults: 20
    });
    
    const autoReplyMessages = autoReplyRes.data.messages || [];
    console.log(`🤖 AUTO-REPLIES: ${autoReplyMessages.length} messages\n`);
    
    // Analyze inbox messages
    if (inboxMessages.length > 0) {
      console.log('📋 INBOX MESSAGES (first 10):');
      console.log('─'.repeat(60));
      
      for (let i = 0; i < Math.min(10, inboxMessages.length); i++) {
        const msg = inboxMessages[i];
        const detail = await gmail.users.messages.get({
          userId: 'me',
          id: msg.id,
          format: 'metadata',
          metadataHeaders: ['Subject', 'From', 'Date']
        });
        
        const subject = detail.data.payload.headers.find(h => h.name === 'Subject')?.value || 'No subject';
        const from = detail.data.payload.headers.find(h => h.name === 'From')?.value || 'Unknown';
        const date = detail.data.payload.headers.find(h => h.name === 'Date')?.value || '';
        
        console.log(`${i + 1}. ${subject.substring(0, 50)}${subject.length > 50 ? '...' : ''}`);
        console.log(`   From: ${from.substring(0, 40)}`);
        console.log(`   Date: ${date.substring(0, 30)}`);
        console.log('');
      }
    }
    
    // Analyze bounce messages
    if (bounceMessages.length > 0) {
      console.log('\n⚠️  BOUNCED EMAILS (need action):');
      console.log('─'.repeat(60));
      
      for (let i = 0; i < Math.min(5, bounceMessages.length); i++) {
        const msg = bounceMessages[i];
        const detail = await gmail.users.messages.get({
          userId: 'me',
          id: msg.id,
          format: 'metadata',
          metadataHeaders: ['Subject', 'From', 'Date']
        });
        
        const subject = detail.data.payload.headers.find(h => h.name === 'Subject')?.value || 'No subject';
        const from = detail.data.payload.headers.find(h => h.name === 'From')?.value || 'Unknown';
        
        console.log(`${i + 1}. ${subject.substring(0, 50)}`);
        console.log(`   Original recipient: ${from}`);
        console.log('   ACTION: Find alternative email and re-send');
        console.log('');
      }
    }
    
    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 SUMMARY');
    console.log('='.repeat(60));
    console.log(`Inbox messages:     ${inboxMessages.length}`);
    console.log(`Bounced emails:     ${bounceMessages.length}`);
    console.log(`Auto-replies:       ${autoReplyMessages.length}`);
    console.log('');
    
    if (inboxMessages.length > 20) {
      console.log('⚠️  WARNING: Inbox has many unarchived messages!');
      console.log('   Action: Archive processed emails to keep inbox clean');
    }
    
    if (bounceMessages.length > 0) {
      console.log('🚨 CRITICAL: Bounced emails need immediate attention!');
      console.log('   Action: Research alternative emails for bounced contacts');
    }
    
  } catch (error) {
    console.error('❌ Error checking inbox:', error.message);
  }
}

checkInbox().catch(console.error);
