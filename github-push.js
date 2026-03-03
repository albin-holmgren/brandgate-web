#!/usr/bin/env node
// github-push.js
// Automated GitHub push with stored credentials

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CREDENTIALS_FILE = path.join(__dirname, '.github-credentials');

function loadCredentials() {
  try {
    const content = fs.readFileSync(CREDENTIALS_FILE, 'utf8');
    const match = content.match(/GITHUB_TOKEN=(.+)/);
    return match ? match[1].trim() : null;
  } catch {
    return null;
  }
}

function pushToGitHub(repoPath = '/home/node/.openclaw/workspace/brandgate-web') {
  const token = loadCredentials();
  
  if (!token) {
    console.error('❌ GitHub token not found');
    return false;
  }
  
  try {
    process.chdir(repoPath);
    
    // Check status
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    
    if (!status.trim()) {
      console.log('✅ Nothing to commit');
      return true;
    }
    
    // Add, commit, push
    execSync('git add .');
    execSync('git commit -m "Update from BrandGate AI"');
    execSync(`git push https://${token}@github.com/albin-holmgren/brandgate-web.git main`);
    
    console.log('✅ Successfully pushed to GitHub!');
    console.log('🚀 Vercel will auto-deploy');
    return true;
    
  } catch (error) {
    console.error('❌ Push failed:', error.message);
    return false;
  }
}

// Export for use in other scripts
module.exports = { pushToGitHub, loadCredentials };

// Run if called directly
if (require.main === module) {
  pushToGitHub();
}
