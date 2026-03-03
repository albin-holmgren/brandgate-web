# GitHub Push Skill

## Overview
Automated pushing to GitHub for BrandGate website deployments.

## Credentials
- **Token Location:** `/home/node/.openclaw/workspace/.github-credentials`
- **Repository:** https://github.com/albin-holmgren/brandgate-web
- **Branch:** main
- **Auto-deploy:** Vercel (triggers on push)

## Quick Usage

### Automatic Push
```bash
node /home/node/.openclaw/workspace/github-push.js
```

### Manual Push
```bash
cd /home/node/.openclaw/workspace/brandgate-web
git add .
git commit -m "Your message"
git push https://$(grep GITHUB_TOKEN /home/node/.openclaw/workspace/.github-credentials | cut -d= -f2)@github.com/albin-holmgren/brandgate-web.git main
```

## What Gets Deployed
1. Push to GitHub main branch
2. Vercel detects change
3. Vercel builds and deploys
4. Site updates at brandgate.dev

## Pages Currently Deployed
- / (homepage)
- /features
- /pricing
- /contact
- /about
- /blog
- /terms (new)
- /privacy (new)
- /integrations (new)
- /solutions/fashion (new)
- /solutions/food-beverage (new)
- /company/team (new)

## Verification
After push, verify at:
- https://vercel.com/dashboard (deployment logs)
- https://brandgate.dev (live site)

## Troubleshooting
- If push fails: Check token hasn't expired
- If Vercel fails: Check build logs
- If site doesn't update: Clear browser cache
