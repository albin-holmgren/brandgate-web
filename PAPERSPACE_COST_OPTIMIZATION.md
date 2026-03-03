# Paperspace Cost Optimization for OpenClaw / BrandGate

## Current Setup Analysis

### What You're Running:
1. **OpenClaw Agent** (this system)
2. **BrandGate Scheduler** (Node.js, lightweight)
3. **Gmail Automation** (API calls, very light)
4. **File Storage** (JSON logs, small)
5. **Background Processes** (checking APIs every 15 min)

### What's NOT Running Here (hosted elsewhere):
- ❌ Website (Vercel - free tier)
- ❌ Database (Supabase - free tier or low cost)
- ❌ Email (Gmail - free)
- ❌ Attio CRM (SaaS - free tier)
- ❌ Slack (SaaS - free)

---

## 💰 COST COMPARISON

### Current: Paperspace c5 Instance
- **Specs:** 4 vCPUs, 8GB RAM, 50GB SSD
- **Cost:** ~$0.50-0.60/hour = **~$360-430/month**
- **Overkill for:** Light API calls and scheduling

### Recommended: Paperspace C1 or C2 Instance
- **C1 Specs:** 1 vCPU, 2GB RAM, 50GB SSD
- **C1 Cost:** ~$0.08/hour = **~$58/month** (85% savings!)
- **C2 Specs:** 2 vCPUs, 4GB RAM, 50GB SSD  
- **C2 Cost:** ~$0.16/hour = **~$115/month** (70% savings!)

### Even Cheaper: VPS Alternatives

| Provider | Plan | Specs | Cost/Month | Notes |
|----------|------|-------|------------|-------|
| **Hetzner Cloud** | CX11 | 1 vCPU, 2GB RAM, 20GB | **€3.29** (~$3.50) | Best value, EU-based |
| **Hetzner Cloud** | CPX11 | 2 vCPUs, 2GB RAM, 40GB | **€4.51** (~$4.80) | Recommended! |
| **DigitalOcean** | Basic | 1 vCPU, 1GB RAM, 25GB | **$6** | Good US option |
| **Linode** | Nanode | 1 vCPU, 1GB RAM, 25GB | **$5** | Reliable |
| **Vultr** | Cloud | 1 vCPU, 1GB RAM, 25GB | **$5** | Good performance |

---

## 🎯 RECOMMENDED SETUP

### Option 1: Stay on Paperspace (Easiest)
**Downgrade to C2 Instance:**
- 2 vCPUs, 4GB RAM
- **~$115/month** (save $250+/month)
- Keep same workflow, just smaller machine
- **More than enough** for all BrandGate operations

### Option 2: Move to Hetzner (Best Value) ⭐
**CPX11 Instance:**
- 2 vCPUs, 2GB RAM, 40GB SSD
- **~$4.80/month** (save $350+/month!)
- Located in Germany (good for GDPR/Swedish business)
- Setup takes 30 minutes

### Option 3: Move to DigitalOcean (US-based)
**Basic Droplet:**
- 1 vCPU, 1GB RAM, 25GB SSD
- **$6/month**
- Simple migration
- Good documentation

---

## 📋 MIGRATION CHECKLIST

### What You Need to Backup:
```
/home/node/.openclaw/workspace/
├── *.json (all tracking files)
├── *.js (all automation scripts)
├── .env (environment variables)
├── .asana-token.json (when created)
└── memory/ (daily memory files)
```

### Files to Transfer:
1. All 34 automation scripts
2. JSON data files (campaign status, logs)
3. Environment/config files
4. Gmail credentials (securely)

### What Stays the Same:
- Vercel hosting (unchanged)
- Supabase database (unchanged)
- All API integrations (Gmail, Attio, etc.)
- Domain (brandgate.dev)
- All scheduled tasks work the same

---

## 🔧 MINIMUM REQUIREMENTS

For everything to work well:

**CPU:** 1-2 vCPUs
- Node.js scheduler is light
- API calls are non-blocking
- No heavy computation

**RAM:** 1-2GB
- Node.js runtime: ~100-200MB
- Scripts running: ~50-100MB each
- Buffer for spikes: ~500MB
- **Total used: ~500MB-1GB**

**Storage:** 20-40GB
- Scripts: <10MB
- Logs: ~10-50MB/month
- Node modules: ~200MB
- **Total: <5GB currently**

**Network:** Standard (1Gbps)
- API calls are small
- No file uploads/downloads
- Minimal bandwidth

---

## 💡 SPECIFIC RECOMMENDATION

### For BrandGate + OpenClaw:

**Best Choice: Hetzner CPX11**
- **Cost:** $4.80/month (vs $360 currently)
- **Savings:** $355/month = $4,260/year!
- **Specs:** 2 vCPUs, 2GB RAM, 40GB SSD
- **Performance:** Will run everything smoothly
- **Location:** Germany (EU-based, good for Swedish market)

**Runner Up: DigitalOcean $6 Droplet**
- Slightly more expensive
- US-based
- Very reliable
- Great docs

### Why You Don't Need More:
- No database server (Supabase)
- No web server (Vercel)
- No file processing
- Just API calls and scheduling
- Peak usage: <10% CPU, <500MB RAM

---

## ⚡ QUICK WINS (Stay on Paperspace)

If you want to stay on Paperspace:

1. **Change instance type to C2:**
   - 2 vCPUs, 4GB RAM
   - $115/month vs $360
   - Still 4x more than needed

2. **Use auto-shutdown:**
   - Schedule to stop nights/weekends
   - Save ~30-40%

3. **Use spot/preemptible instances:**
   - ~50% cheaper
   - May restart occasionally (OK for scheduler)

---

## 📊 COST SUMMARY

| Option | Monthly Cost | Annual Cost | Savings |
|--------|--------------|-------------|---------|
| Current (c5) | ~$360 | ~$4,320 | - |
| Paperspace C2 | ~$115 | ~$1,380 | $2,940/year |
| Hetzner CPX11 | ~$5 | ~$60 | $4,260/year ⭐ |
| DigitalOcean | ~$6 | ~$72 | $4,248/year |

---

## 🚀 NEXT STEPS

**Option A - Quick Win (Stay on Paperspace):**
1. Change machine type to C2
2. Savings: $245/month immediately

**Option B - Maximum Savings (Move to Hetzner):**
1. Create Hetzner CPX11 server
2. Install Node.js
3. Copy all workspace files
4. Install and start scheduler
5. Cancel Paperspace
6. Savings: $355/month

**Which option do you prefer?**

I can help you migrate if you want to move to Hetzner or DigitalOcean!
