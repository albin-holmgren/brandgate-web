# Asana App Distribution Setup Guide

## You're in "Manage Distribution" - Here's What to Do:

### Option 1: Make App Public (Recommended for Multiple Workspaces)

If you see these options, select:
- [ ] **"Any workspace or organization"** 
  - This allows the app to work with any Asana workspace
  - Required if you might use different workspaces

OR

- [ ] **"Specific workspaces"**
  - Add your specific workspace name/ID
  - More secure, limited to your workspace only

### Option 2: Keep Private (For Single Workspace)

If keeping private, you need to:
1. Add your workspace to the allowed list
2. Go to "OAuth" tab
3. Add Redirect URI: `https://brandgate.dev/asana/callback`

### What to Look For:

**Distribution Settings:**
```
Distribution:
○ Private (only my workspaces)
○ Public (any workspace)
```

**If Private is selected, add:**
- Your workspace name or ID

**If Public is selected:**
- No additional setup needed
- Just verify the redirect URI

### Redirect URI (Critical!):

Make sure this is added in the OAuth section:
```
https://brandgate.dev/asana/callback
```

### After Saving:

1. Click **"Save Changes"**
2. Wait 1-2 minutes for propagation
3. Try the authorization link again:
   ```
   https://app.asana.com/-/oauth_authorize?client_id=1213475124988915&redirect_uri=https%3A%2F%2Fbrandgate.dev%2Fasana%2Fcallback&response_type=code&scope=default
   ```

### Quick Questions:

**What do you see in Manage Distribution?**
- A) Radio buttons for Private/Public?
- B) A list of workspaces?
- C) Something else?

**Tell me what options you see and I'll guide you!**
