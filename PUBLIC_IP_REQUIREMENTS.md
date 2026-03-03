# Public IP Requirements for OpenClaw / BrandGate

## Do You Need a Public IP?

### YES - You Need Public IP For:

1. **Asana OAuth Callback**
   - Asana redirects to: `https://brandgate.dev/asana/callback`
   - This needs to reach your server
   - **Solution:** Use your domain (brandgate.dev), not server IP

2. **Slack Webhooks** (already configured)
   - Slack sends notifications TO your server
   - Currently using: `https://hooks.slack.com/...` (outbound only ✅)

3. **Gmail Webhooks** (if used)
   - Google Cloud Pub/Sub pushes notifications
   - Needs HTTPS endpoint

4. **Vercel Webhooks** (already working)
   - Vercel deploys trigger actions
   - Currently working via Vercel integration ✅

### NO - You Don't Need Public IP For:

1. **Scheduler/Background Tasks**
   - All your automation scripts
   - Outgoing API calls only
   - No inbound connections needed

2. **Email Monitoring**
   - Checks Gmail via API (outbound)
   - No webhook needed

3. **Outreach Campaign**
   - Sends emails via Gmail API
   - No inbound needed

---

## 💰 PUBLIC IP COSTS BY PROVIDER

### Hetzner (Germany)
- **IPv4:** €0.80/month (~$0.85)
- **IPv6:** FREE
- **Recommendation:** Get IPv4 (cheap, needed for some services)
- **Total with IP:** €5.31/month (~$5.65)

### DigitalOcean
- **IPv4:** INCLUDED FREE
- **IPv6:** INCLUDED FREE
- **Total:** $6/month (includes IP)

### Linode
- **IPv4:** INCLUDED FREE
- **IPv6:** INCLUDED FREE
- **Total:** $5/month (includes IP)

### Vultr
- **IPv4:** INCLUDED FREE
- **IPv6:** INCLUDED FREE
- **Total:** $5/month (includes IP)

### Paperspace
- **IPv4:** INCLUDED (on all instances)
- You already have this ✅

---

## 🎯 BEST SETUP FOR YOU

### Option 1: Hetzner (My Recommendation)
```
Server:     CPX11 (€4.51/month)
Public IPv4: €0.80/month
─────────────────────────────
Total:       €5.31/month (~$5.65)
Savings:     $354/month vs Paperspace
```

**Why this works:**
- IPv4 needed for OAuth callbacks
- Still dirt cheap
- EU-based

### Option 2: DigitalOcean
```
Server:      Basic Droplet ($6/month)
Public IPv4: INCLUDED
─────────────────────────────
Total:       $6/month
Savings:     $354/month vs Paperspace
```

**Why this works:**
- IP included
- Simple setup
- Good docs

---

## 🔧 TECHNICAL DETAILS

### What Uses Public IP:

**Inbound (needs public IP):**
- OAuth callbacks (Asana, Google, etc.)
- Webhook endpoints (if any)
- Direct server access (SSH)

**Outbound (doesn't need public IP):**
- API calls to Gmail, Attio, Slack
- Website requests
- Database connections
- File downloads

### Current BrandGate Services:

| Service | Direction | Needs Public IP |
|---------|-----------|-----------------|
| Gmail API | Outbound | ❌ No |
| Attio API | Outbound | ❌ No |
| Slack API | Outbound | ❌ No |
| Asana OAuth | Inbound (callback) | ✅ Yes |
| Scheduler | Internal | ❌ No |
| Blog (Vercel) | Hosted elsewhere | ❌ No |

**Only Asana OAuth needs inbound access!**

---

## 💡 WORKAROUND: No Public IP Needed!

If you want to save the $0.80/month on Hetzner:

### Option A: Use `localhost` for OAuth (Temporarily)
1. Do Asana OAuth from your local machine
2. Copy the token to server
3. Server uses token (outbound only)
4. **Problem:** Token expires, need to redo

### Option B: Use Webhook.site (Free)
1. Go to https://webhook.site
2. Get temporary URL
3. Use that for OAuth callback
4. Copy code manually
5. **Works but manual**

### Option C: Use Cloudflare Tunnel (Free)
1. Install cloudflared on server
2. Create free tunnel
3. Get public URL without public IP
4. **Best free option**

### Option D: Just Pay €0.80/month 😄
- Simplest solution
- Still saving $354/month
- No extra setup

---

## 🚀 MY RECOMMENDATION

### For Production (Running 24/7):

**Hetzner with IPv4:**
- Cost: ~$5.65/month total
- Includes: 2 vCPUs, 2GB RAM, 40GB SSD, Public IP
- Savings: $354/month vs Paperspace
- Setup: 30 minutes
- **Best value overall**

### Paperspace Alternative:

**Downgrade to C2 + Keep IP:**
- Cost: ~$115/month
- Includes: 2 vCPUs, 4GB RAM, Public IP
- Savings: $245/month
- Setup: 5 minutes (just change instance type)
- **Easiest option**

---

## 📊 COST COMPARISON (With Public IP)

| Provider | Server | Public IP | Total/Month | Savings |
|----------|--------|-----------|-------------|---------|
| Paperspace c5 | $360 | Included | $360 | - |
| Paperspace C2 | $115 | Included | $115 | $245 |
| Hetzner CPX11 | $4.80 | $0.85 | $5.65 | $354 ⭐ |
| DigitalOcean | $6 | Included | $6 | $354 |
| Linode | $5 | Included | $5 | $355 |

---

## ✅ ANSWER TO YOUR QUESTION

**Do you need public IP?**
- **YES** - For Asana OAuth (one-time setup)
- **NO** - For daily operations (all outbound)

**Does it cost extra?**
- Hetzner: €0.80/month (~$0.85)
- DigitalOcean: FREE (included)
- Linode: FREE (included)
- Vultr: FREE (included)
- Paperspace: FREE (included)

**Bottom line:** Even with public IP cost, Hetzner is still 60x cheaper than Paperspace c5!

---

**Want me to help you:**
1. Set up Hetzner with IPv4?
2. Or just downgrade Paperspace for now?
