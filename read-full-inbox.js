#!/usr/bin/env node
// read-full-inbox.js
const fs = require('fs');
const path = require('path');

function loadEnvFile(filepath) {
  try {
    const content = fs.readFileSync(filepath, 'utf8');
    const lines = content.split('\n');
    for (const line of lines) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) process.env[match[1].trim()] = match[2].trim();
    }
  } catch (e) {}
}

loadEnvFile(path.join('/home/node/.openclaw/workspace', '.env.gmail'));
const { google } = require('googleapis');

async function readFullInbox() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );
  oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
  
  console.log('📧 READING FULL INBOX CONTENT\n');
  
  const res = await gmail.users.messages.list({ userId: 'me', q: 'in:inbox', maxResults: 10 });
  const messages = res.data.messages || [];
  
  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];
    const detail = await gmail.users.messages.get({ userId: 'me', id: msg.id, format: 'full' });
    const headers = detail.data.payload.headers;
    const subject = headers.find(h => h.name === 'Subject')?.value || 'No subject';
    const from = headers.find(h => h.name === 'From')?.value || 'Unknown';
    
    let body = '';
    if (detail.data.payload.parts) {
      const textPart = detail.data.payload.parts.find(p => p.mimeType === 'text/plain');
      if (textPart && textPart.body.data) {
        body = Buffer.from(textPart.body.data, 'base64').toString('utf-8');
      }
    } else if (detail.data.payload.body && detail.data.payload.body.data) {
      body = Buffer.from(detail.data.payload.body.data, 'base64').toString('utf-8');
    }
    
    body = body.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    
    console.log(`\n${'='.repeat(80)}`);
    console.log(`EMAIL ${i + 1}: ${subject}`);
    console.log(`From: ${from}`);
    console.log('='.repeat(80));
    console.log(body.substring(0, 1500));
    if (body.length > 1500) console.log('\n... [truncated]');
    console.log('');
  }
}

readFullInbox().catch(console.error);
