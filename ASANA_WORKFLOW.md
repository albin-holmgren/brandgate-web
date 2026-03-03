# BrandGate Asana Workflow
## Verification-First Task Management

---

## 🎯 Philosophy: VERIFY BEFORE COMPLETING

**Never mark a task complete without explicit verification that it actually works.**

### The Rule:
1. **Implement** → Do the work
2. **Test** → Verify it works
3. **Deploy** → Push to production
4. **VERIFY** → Actually check it's live/working
5. **Complete** → Only then mark Asana task done

---

## 📁 Project Structure

### **Project 1: Memory & Tasks** 
**ID:** `1213474894327849`
**Purpose:** General tasks, reminders, content, research

**Sections:**
- **📥 Inbox** - New tasks to review
- **📋 To Do** - Approved tasks ready to work on
- **🔄 In Progress** - Currently working on
- **🔍 Verify** - Done but needs verification
- **✅ Complete** - Verified and complete

**Types of tasks:**
- Write blog post about X
- Research Y company
- Send email to Z
- Update pricing page
- Create LinkedIn post

---

### **Project 2: Features**
**ID:** `1213475126754388`
**Purpose:** Product features, technical work, website updates

**Sections:**
- **📝 Backlog** - Ideas and future features
- **📋 Ready** - Approved and ready to implement
- **🔨 In Progress** - Currently building
- **🧪 Testing** - Built, needs testing
- **🔍 Verify** - Tested, needs final verification
- **✅ Complete** - Live and working

**Types of tasks:**
- Add new calculator tool
- Fix mobile responsive bug
- Integrate payment gateway
- Update blog design
- Add SEO meta tags

---

## ✅ Verification Checklist (Every Task)

### For Website/Design Tasks:
```
[ ] Code implemented
[ ] Deployed to production
[ ] Checked on desktop - WORKING
[ ] Checked on mobile - WORKING  
[ ] No console errors
[ ] Brand guidelines followed
[ ] User tested and confirmed
[ ] Asana task updated with proof
```

### For Content Tasks:
```
[ ] Content written
[ ] Reviewed for accuracy
[ ] Published/deployed
[ ] URL accessible and working
[ ] Formatting correct
[ ] Images loading
[ ] User confirmed satisfaction
```

### For Integration Tasks (Email, Attio, etc.):
```
[ ] Code written
[ ] API credentials configured
[ ] Tested in development
[ ] Deployed to production
[ ] Verified working (e.g., sent test email)
[ ] Logs show no errors
[ ] User confirmed functionality
```

### For Research/Outreach Tasks:
```
[ ] Research completed
[ ] Data added to system (Attio, etc.)
[ ] Information verified accurate
[ ] User reviewed and approved
[ ] Next steps documented
```

---

## 🔄 Daily Workflow

### Morning (9 AM UTC):
1. **Check Asana Inbox** for new tasks from Albin
2. **Move approved tasks** to "To Do" or "Ready"
3. **Review "Verify"** column - verify and complete or fix
4. **Plan day's work** based on priorities

### Throughout Day:
1. **Pick task** from "To Do" / "Ready"
2. **Move to In Progress**
3. **Do the work**
4. **Test thoroughly**
5. **Move to Verify** with notes
6. **Actually verify** it works
7. **Move to Complete** only after verification

### Evening (5 PM UTC):
1. **Update all tasks** with progress
2. **Add comments** to incomplete tasks
3. **Create summary** of what was done
4. **Flag blockers** for Albin's attention

---

## 📝 Task Template

### When Creating Tasks:

**Title:** Clear, actionable (e.g., "Fix blog 404 errors")

**Description:**
```
OBJECTIVE:
What needs to be done

ACCEPTANCE CRITERIA:
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

VERIFICATION STEPS:
1. Go to https://brandgate.dev/blog
2. Click on article
3. Should load without 404
4. Should match brand guidelines

NOTES:
Any additional context
```

**Due Date:** When it needs to be done

**Tags:** 
- `urgent` - Do today
- `high-priority` - Do this week
- `medium` - Do when possible
- `low` - Backlog
- `blocked` - Waiting on something

---

## 🚨 What NOT to Do

❌ **Don't say "done" when:**
- Code is written but not deployed
- Deployed but not tested
- Tested in dev but not production
- "Should work" but not verified
- User hasn't confirmed

❌ **Don't:**
- Mark complete without verification checklist
- Skip testing on mobile
- Assume it works without checking
- Complete task if user reports issues
- Delete tasks (archive instead)

✅ **Always:**
- Provide proof (screenshots, URLs)
- Test on multiple devices/browsers
- Verify after deployment
- Get user confirmation
- Document what was done

---

## 📊 Weekly Review (Fridays)

### With Albin:
1. Review completed tasks
2. Verify they still work
3. Discuss incomplete tasks
4. Plan next week's priorities
5. Identify blockers

---

## 🎯 Example Task Lifecycle

### Example: "Fix blog 404 errors"

**Day 1 - Morning:**
- Task created in "Inbox"
- Reviewed and moved to "Ready"
- Picked up and moved to "In Progress"

**Day 1 - Afternoon:**
- Fix implemented locally
- Tested locally - WORKING
- Deployed to production
- Moved to "Verify"

**Day 1 - Evening:**
- Actually checked: https://brandgate.dev/blog/test
- Verified no 404 on all 3 posts
- Checked on mobile - WORKING
- Screenshot added to task
- Moved to "Complete"
- Comment: "✅ Verified working on all posts, desktop and mobile"

**Day 2:**
- Albin reviews and confirms
- Task stays in Complete

---

## 🔧 Tools Integration

### Asana ↔ Website:
- Task: "Add blog post"
- Work: Write code, deploy
- Verify: Check https://brandgate.dev/blog
- Proof: Screenshot in Asana comment

### Asana ↔ Attio:
- Task: "Add 5 Swedish leads"
- Work: Research, create in Attio
- Verify: Check Attio shows 5 new people
- Proof: List of names + Attio link

### Asana ↔ Gmail:
- Task: "Respond to pricing inquiry"
- Work: Draft and send email
- Verify: Check Sent folder
- Proof: Copy of sent email in comments

---

## 📈 Metrics to Track

- Tasks completed per day/week
- Average time from In Progress to Complete
- Number of tasks needing rework (verification failed)
- User satisfaction score
- Blockers identified and resolved

---

## 🎓 Best Practices

1. **Small tasks** - Break big tasks into verifiable chunks
2. **Specific criteria** - "Make it better" → "Reduce load time to <2s"
3. **One task per feature** - Don't bundle multiple things
4. **Clear acceptance** - Both parties know what "done" means
5. **Regular updates** - Comment progress every few hours
6. **No surprises** - Flag issues early, not at deadline

---

## ✅ Success Criteria

We're doing this right when:
- ✅ Zero "done" tasks that don't actually work
- ✅ User never has to say "but you said it was done"
- ✅ Every completed task has verification proof
- ✅ Clear trail of what was done and when
- ✅ Predictable delivery times

---

**Remember: Verification is not optional. It's the most important step.**
