#!/bin/bash
# Email Automation Runner
# Run this script to start the email automation service

cd /home/node/.openclaw/workspace

echo "Starting Email Automation Service..."
echo "Checking emails every 5 minutes"
echo "Logs will be saved to /tmp/email-automation.log"
echo ""
echo "To stop: killall node"
echo ""

# Run indefinitely, checking every 5 minutes
while true; do
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Checking emails..." >> /tmp/email-automation.log
  node email-automation.js >> /tmp/email-automation.log 2>&1
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Check complete. Sleeping 5 minutes..." >> /tmp/email-automation.log
  sleep 300
done
