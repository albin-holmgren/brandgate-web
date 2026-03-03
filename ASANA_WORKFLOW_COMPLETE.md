# Asana Integration & Workflow Setup

## Current Status
- **Token**: Provided but not fully authorized
- **Projects**: 
  - Memory & Tasks (1213474894327849)
  - Features (1213475126754388)
- **Checker**: Running every 15 minutes (but token issue)

---

## How We'll Use Asana

### **For You (Albin):**
1. **Create tasks** anytime you want work done
2. **Track progress** without asking
3. **Set priorities** (urgent/high/medium/low)
4. **Review completed** work with verification proof

### **For Me (Will):**
1. **Check Asana** every 15 minutes for new tasks
2. **Pick up tasks** and move to "In Progress"
3. **Do the work** with full verification
4. **Mark complete** only after proof/screenshots
5. **Daily summary** of what's done

---

## Project Structure

### **Project 1: Memory & Tasks**
**Purpose**: General tasks, content, research

**Sections:**
```
📥 Inbox         ← New tasks from you
📋 To Do         ← Approved, ready to start
🔄 In Progress   ← I'm working on it
🔍 Verify        ← Done, needs verification
✅ Complete      ← Verified and finished
```

**Task Types:**
- Write blog post about [topic]
- Research [company/industry]
- Create [content/asset]
- Send [email/outreach]
- Update [page/feature]

---

### **Project 2: Features**
**Purpose**: Website, technical work, product

**Sections:**
```
📝 Backlog       ← Ideas for later
📋 Ready         ← Approved to implement
🔨 In Progress   ← Currently building
🧪 Testing       ← Built, needs testing
🔍 Verify        ← Tested, final check
✅ Complete      ← Live and working
```

**Task Types:**
- Add [feature/tool]
- Fix [bug/issue]
- Update [design/page]
- Integrate [service]
- Deploy [change]

---

## Task Template (What You Should Create)

### **Simple Task:**
```
Title: Fix blog CTA links
Project: Features
Section: 📋 Ready
Tags: 🔴 urgent

Description:
Blog CTA buttons link to /signup which is 404.
Change to /contact or create signup page.
```

### **Complex Task:**
```
Title: Write blog post about ROI calculator
Project: Memory & Tasks  
Section: 📋 To Do
Tags: 🟡 medium
Due: Next Friday

Description:
OBJECTIVE: Create SEO-optimized blog post about ROI calculator tool

ACCEPTANCE CRITERIA:
- [ ] 800+ words
- [ ] Include calculator embed
- [ ] Keywords: ROI calculator, B2B pricing
- [ ] Swedish translation
- [ ] Published and indexed

VERIFICATION STEPS:
1. Check https://brandgate.dev/blog/roi-calculator-guide/
2. Should load without 404
3. Calculator embed works
4. Shows in Google search

NOTES:
- Use existing calculator as reference
- Target Swedish manufacturers
```

---

## My Workflow (Automatic)

### **Morning (9 AM UTC):**
```
1. Check Asana for new tasks
2. Move approved tasks to "In Progress"
3. Plan day's work
4. Send you summary
```

### **Throughout Day:**
```
1. Work on tasks in priority order
2. Update tasks with progress
3. Test everything thoroughly
4. Deploy to production
```

### **Before Completing:**
```
1. Verify it actually works (not just coded)
2. Take screenshot/proof
3. Update task with evidence
4. Move to "Verify" column
5. Add comment with results
```

### **Evening (5 PM UTC):**
```
1. Update all tasks with status
2. Mark verified tasks as Complete
3. Send daily summary
4. Plan tomorrow
```

---

## Verification Checklist (I'll Add to Every Task)

Before marking complete, I verify:
- [ ] **Implemented**: Code/content written
- [ ] **Tested**: Works on desktop
- [ ] **Mobile**: Works on mobile
- [ ] **Deployed**: Live on production
- [ ] **No Errors**: Console/network clean
- [ ] **Brand**: Follows guidelines
- [ ] **Proof**: Screenshot/URL provided
- [ ] **Confirmed**: You verified it works

---

## Tags System

| Tag | Meaning | Action |
|-----|---------|--------|
| 🔴 urgent | Do today | Immediate priority |
| 🟠 high | This week | High priority |
| 🟡 medium | Next 2 weeks | Normal priority |
| 🟢 low | When possible | Backlog |
| ⛔ blocked | Waiting on something | Can't proceed |
| 🐛 bug | Something broken | Fix immediately |
| ✨ feature | New functionality | Plan and implement |
| 📝 content | Blog/post/copy | Create content |
| 🔧 technical | Code/infra | Technical work |

---

## Daily Report Format

I'll post to Asana and Slack:

```
📊 Daily Summary - March 1, 2026

✅ COMPLETED:
• Fixed blog CTA links (screenshot: [link])
• Standardized language switcher (tested on 6 posts)
• Created 2 new blog posts (EN + SV)

🔄 IN PROGRESS:
• Setting up Asana integration (80%)
• Creating XML sitemap (50%)

📋 NEXT UP:
• Add hreflang tags to main site
• Create Swedish versions of remaining posts

🚧 BLOCKERS:
• None

📈 METRICS:
• Blog posts: 6 published
• SEO keywords: 15 ranking
• Swedish translations: 5 complete
```

---

## Asana Token Issue

**Problem**: Current token shows "Not Authorized"

**Solution Needed**:
1. Go to https://app.attio.com/settings/api
2. Generate new Personal Access Token
3. Ensure it has read/write permissions
4. Give me the new token

**Alternative**: 
- Use Asana's web interface
- I can create tasks via email forwarding
- Or use Slack integration instead

---

## Quick Start (Next Steps)

### **Right Now:**
1. ✅ I've created this workflow guide
2. ⏳ Waiting for working Asana token
3. ⏳ Or confirm alternative (Slack/email)

### **Today:**
1. Create first 3-5 tasks in Asana
2. Test the workflow
3. Adjust as needed

### **This Week:**
1. Build habit of task creation
2. Daily summaries in Slack
3. Weekly reviews on Friday

---

## Example Tasks to Create Now

1. **"Create XML sitemap for SEO"**
   - Project: Features
   - Priority: High
   - Why: Google needs to index all pages

2. **"Write blog post about B2B payment terms"**
   - Project: Memory & Tasks
   - Priority: Medium
   - Target: 800 words, EN + SV

3. **"Fix language switcher on all blog posts"**
   - Project: Features
   - Priority: Urgent
   - Standardize to template

4. **"Research 10 German distributors"**
   - Project: Memory & Tasks
   - Priority: Medium
   - Add to Attio with contacts

5. **"Add Schema.org structured data"**
   - Project: Features
   - Priority: Medium
   - Rich snippets for Google

---

## Benefits of This System

**For You:**
- ✅ No need to remember what's happening
- ✅ Clear visibility on progress
- ✅ Easy priority setting
- ✅ Audit trail of all work
- ✅ Scale without micromanaging

**For Me:**
- ✅ Never miss a task
- ✅ Clear priorities
- ✅ Verification prevents errors
- ✅ Professional workflow
- ✅ Measurable productivity

---

**Ready to start?** Create 3 tasks in Asana and I'll demonstrate the full workflow!
