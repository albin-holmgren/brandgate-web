#!/usr/bin/env node
// brandgate-scheduler.js
// Continuous scheduler for all BrandGate operations
// Runs as a background service, executing tasks at scheduled times

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const WORKSPACE = '/home/node/.openclaw/workspace';
const LOG_FILE = '/tmp/brandgate-scheduler.log';
const PID_FILE = '/tmp/brandgate-scheduler.pid';

// Task definitions
const SCHEDULE = {
  // Daily tasks (UTC)
  daily: [
    { time: '08:00', name: 'SEO Daily Check', script: 'seo-daily-check.js' },
    { time: '09:00', name: 'Morning Inbox Check', script: 'check-morning-inbox.js' },
    { time: '09:15', name: 'CRM Daily Review', script: 'crm-daily-review.js' },
    { time: '09:30', name: 'Analytics Check', script: 'analytics-daily-check.js' },
    { time: '10:00', name: 'Technical Health Check', script: 'technical-daily-check.js' },
    { time: '12:00', name: 'Lead Research', script: 'daily-lead-research.js' },
    { time: '12:30', name: 'Content Calendar', script: 'content-calendar.js' },
    { time: '13:00', name: 'LinkedIn Daily Post', script: 'linkedin-daily.js' },
    { time: '15:00', name: 'Send Outreach Emails', script: 'send-daily-outreach.js' },
    { time: '16:30', name: 'CRM Evening Update', script: 'crm-evening-update.js' },
    { time: '17:00', name: 'Daily Report', script: 'generate-daily-report.js' }
  ],
  
  // Weekly tasks (day of week 0-6, 0=Sunday, time)
  weekly: [
    { day: 1, time: '09:00', name: 'Weekly Planning', script: 'weekly-planning.js' },
    { day: 1, time: '10:00', name: 'SEO Weekly Report', script: 'seo-weekly-report.js' },
    { day: 1, time: '11:00', name: 'Analytics Weekly Review', script: 'analytics-weekly-report.js' },
    { day: 3, time: '15:00', name: 'Send Follow-ups', script: 'send-followups.js' },
    { day: 5, time: '15:00', name: 'CRM Pipeline Review', script: 'crm-pipeline-review.js' },
    { day: 5, time: '16:00', name: 'Weekly Outreach Report', script: 'generate-weekly-report.js' },
    { day: 5, time: '17:00', name: 'Master Weekly Report', script: 'generate-master-weekly-report.js' },
    { day: 5, time: '18:00', name: 'Pipeline Cleanup', script: 'pipeline-cleanup.js' }
  ],
  
  // Monthly tasks (day of month)
  monthly: [
    { day: 1, time: '10:00', name: 'Content Monthly Audit', script: 'content-monthly-audit.js' },
    { day: 1, time: '11:00', name: 'Analytics Monthly Report', script: 'analytics-monthly-report.js' },
    { day: 1, time: '14:00', name: 'SEO Monthly Review', script: 'seo-monthly-review.js' }
  ],
  
  // Continuous tasks (interval in minutes, only during business hours)
  continuous: [
    { interval: 15, name: 'Continuous Inbox Monitor', script: 'continuous-inbox-monitor.js', businessHoursOnly: true },
    { interval: 60, name: 'Uptime Check', script: 'uptime-check.js', businessHoursOnly: true }
  ]
};

// Track last run times
const lastRun = {};

function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(LOG_FILE, logMessage);
  console.log(logMessage.trim());
}

function getCurrentTime() {
  const now = new Date();
  return `${String(now.getUTCHours()).padStart(2, '0')}:${String(now.getUTCMinutes()).padStart(2, '0')}`;
}

function isBusinessHours() {
  const now = new Date();
  const hour = now.getUTCHours();
  const day = now.getUTCDay(); // 0=Sunday, 6=Saturday
  return day >= 1 && day <= 5 && hour >= 8 && hour <= 18;
}

function runScript(scriptName) {
  const scriptPath = path.join(WORKSPACE, scriptName);
  
  if (!fs.existsSync(scriptPath)) {
    log(`⚠️ Script not found: ${scriptName}`);
    return;
  }
  
  log(`🚀 Running: ${scriptName}`);
  
  const child = spawn('node', [scriptPath], {
    cwd: WORKSPACE,
    detached: false
  });
  
  let output = '';
  child.stdout.on('data', (data) => {
    output += data.toString();
  });
  
  child.stderr.on('data', (data) => {
    output += data.toString();
  });
  
  child.on('close', (code) => {
    if (code === 0) {
      log(`✅ Completed: ${scriptName}`);
    } else {
      log(`❌ Failed (${code}): ${scriptName}`);
    }
  });
}

function checkDailyTasks() {
  const currentTime = getCurrentTime();
  
  SCHEDULE.daily.forEach(task => {
    const key = `daily-${task.time}`;
    if (currentTime === task.time && lastRun[key] !== currentTime) {
      lastRun[key] = currentTime;
      runScript(task.script);
    }
  });
}

function checkWeeklyTasks() {
  const now = new Date();
  const dayOfWeek = now.getUTCDay();
  const currentTime = getCurrentTime();
  
  SCHEDULE.weekly.forEach(task => {
    if (task.day === dayOfWeek && currentTime === task.time) {
      const key = `weekly-${task.day}-${task.time}`;
      if (lastRun[key] !== currentTime) {
        lastRun[key] = currentTime;
        runScript(task.script);
      }
    }
  });
}

function checkMonthlyTasks() {
  const now = new Date();
  const dayOfMonth = now.getUTCDate();
  const currentTime = getCurrentTime();
  
  SCHEDULE.monthly.forEach(task => {
    if (task.day === dayOfMonth && currentTime === task.time) {
      const key = `monthly-${task.day}-${task.time}`;
      if (lastRun[key] !== currentTime) {
        lastRun[key] = currentTime;
        runScript(task.script);
      }
    }
  });
}

function checkContinuousTasks() {
  const now = Date.now();
  
  SCHEDULE.continuous.forEach(task => {
    if (task.businessHoursOnly && !isBusinessHours()) {
      return;
    }
    
    const key = `continuous-${task.name}`;
    const lastRunTime = lastRun[key] || 0;
    const intervalMs = task.interval * 60 * 1000;
    
    if (now - lastRunTime >= intervalMs) {
      lastRun[key] = now;
      runScript(task.script);
    }
  });
}

function savePid() {
  fs.writeFileSync(PID_FILE, process.pid.toString());
}

function removePid() {
  try {
    fs.unlinkSync(PID_FILE);
  } catch {}
}

function main() {
  log('═══════════════════════════════════════════════════════');
  log('  BRANDGATE SCHEDULER STARTED');
  log('  All systems: SEO, Content, Analytics, Outreach, Social');
  log('═══════════════════════════════════════════════════════');
  log('');
  log('📊 SCHEDULE:');
  log(`  Daily tasks: ${SCHEDULE.daily.length}`);
  log(`  Weekly tasks: ${SCHEDULE.weekly.length}`);
  log(`  Monthly tasks: ${SCHEDULE.monthly.length}`);
  log(`  Continuous tasks: ${SCHEDULE.continuous.length}`);
  log('');
  log('⏰ First tasks will run at their scheduled times');
  log('🔄 Checking every minute...');
  log('');
  
  savePid();
  
  // Handle shutdown gracefully
  process.on('SIGINT', () => {
    log('\n🛑 Shutting down scheduler...');
    removePid();
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    log('\n🛑 Shutting down scheduler...');
    removePid();
    process.exit(0);
  });
  
  // Main loop - check every minute
  setInterval(() => {
    checkDailyTasks();
    checkWeeklyTasks();
    checkMonthlyTasks();
    checkContinuousTasks();
  }, 60000); // Check every minute
  
  // Also check immediately on start
  checkDailyTasks();
  checkWeeklyTasks();
  checkMonthlyTasks();
  checkContinuousTasks();
}

// If script exists, run the scheduler
main();
