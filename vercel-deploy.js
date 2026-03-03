#!/usr/bin/env node
// vercel-deploy.js
// Monitor and manage Vercel deployments for BrandGate

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CREDENTIALS_FILE = path.join(__dirname, '.vercel-credentials');
const PROJECT_ID = 'prj_Ef645pM6qZUbM2A6QteOqbDo35BS';

function loadCredentials() {
  try {
    const content = fs.readFileSync(CREDENTIALS_FILE, 'utf8');
    const match = content.match(/VERCEL_TOKEN=(.+)/);
    return match ? match[1].trim() : null;
  } catch {
    return null;
  }
}

async function getLatestDeployments(limit = 5) {
  const token = loadCredentials();
  if (!token) {
    console.error('❌ Vercel token not found');
    return null;
  }

  try {
    const response = await fetch(
      `https://api.vercel.com/v6/deployments?projectId=${PROJECT_ID}&limit=${limit}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    return await response.json();
  } catch (error) {
    console.error('❌ Failed to fetch deployments:', error.message);
    return null;
  }
}

async function checkDeploymentStatus(deploymentId) {
  const token = loadCredentials();
  if (!token) return null;

  try {
    const response = await fetch(
      `https://api.vercel.com/v13/deployments/${deploymentId}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    return await response.json();
  } catch (error) {
    console.error('❌ Failed to check deployment:', error.message);
    return null;
  }
}

async function listDeployments() {
  const data = await getLatestDeployments();
  if (!data || !data.deployments) {
    console.log('No deployments found');
    return;
  }

  console.log('\n📊 RECENT DEPLOYMENTS\n');
  console.log('ID                                    | Status  | Commit Message');
  console.log('-'.repeat(80));
  
  data.deployments.forEach((dep, i) => {
    const status = dep.state === 'READY' ? '✅ READY' : 
                   dep.state === 'ERROR' ? '❌ ERROR' : 
                   dep.state === 'CANCELED' ? '⚠️ CANCELED' : '🔄 BUILDING';
    const message = dep.meta?.githubCommitMessage?.substring(0, 40) || 'N/A';
    console.log(`${dep.uid.substring(0, 36)} | ${status} | ${message}`);
  });
}

async function getBuildLogs(deploymentId) {
  const token = loadCredentials();
  if (!token) return;

  try {
    const response = await fetch(
      `https://api.vercel.com/v3/deployments/${deploymentId}/events`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    const data = await response.json();
    
    console.log('\n📋 BUILD LOGS\n');
    if (data.events && data.events.length > 0) {
      data.events.forEach(event => {
        console.log(`[${event.date}] ${event.text}`);
      });
    } else {
      console.log('No logs available');
    }
  } catch (error) {
    console.error('❌ Failed to fetch logs:', error.message);
  }
}

// CLI
const args = process.argv.slice(2);
const command = args[0];

if (command === 'list' || command === 'ls') {
  listDeployments();
} else if (command === 'status' && args[1]) {
  checkDeploymentStatus(args[1]).then(data => {
    if (data) {
      console.log('\n📊 DEPLOYMENT STATUS\n');
      console.log('ID:', data.id);
      console.log('Status:', data.readyState);
      console.log('URL:', data.url);
      console.log('Error:', data.errorMessage || 'None');
      console.log('Created:', new Date(data.createdAt).toLocaleString());
    }
  });
} else if (command === 'logs' && args[1]) {
  getBuildLogs(args[1]);
} else {
  console.log('Usage:');
  console.log('  node vercel-deploy.js list          - List recent deployments');
  console.log('  node vercel-deploy.js status <id>   - Check deployment status');
  console.log('  node vercel-deploy.js logs <id>     - Get build logs');
}

module.exports = { loadCredentials, getLatestDeployments, checkDeploymentStatus };
