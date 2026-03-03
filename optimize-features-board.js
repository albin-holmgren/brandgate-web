#!/usr/bin/env node
// optimize-features-board.js
// Optimize Features board for Lovable app development

const fs = require('fs');

const TOKEN_FILE = '/home/node/.openclaw/workspace/.asana-token.json';
const ASANA_API_BASE = 'https://app.asana.com/api/1.0';
const WORKSPACE_ID = '1213451691700872';
const FEATURES_PROJECT = '1213475126754388';

function loadToken() {
  try {
    const data = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
    return data.access_token;
  } catch {
    console.log('❌ No token found.');
    process.exit(1);
  }
}

async function asanaRequest(endpoint, options = {}) {
  const token = loadToken();
  const response = await fetch(`${ASANA_API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...options.headers
    }
  });
  
  const data = await response.json();
  if (data.errors) {
    throw new Error(data.errors[0].message);
  }
  return data;
}

// Create sections for Features board
async function createFeatureSections() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  OPTIMIZING FEATURES BOARD FOR LOVABLE APP');
  console.log('═══════════════════════════════════════════════════\n');
  
  // New section structure for app features
  const sections = [
    '🔥 HIGH PRIORITY - Next Sprint',
    '💡 MEDIUM PRIORITY - Backlog',
    '🌱 LOW PRIORITY - Future Ideas',
    '🎨 UI/UX Improvements',
    '⚙️ Backend & Infrastructure',
    '🔗 Integrations & APIs',
    '🧪 Testing & QA',
    '🚀 Ready to Deploy',
    '✅ Released & Done',
    '📚 Archive'
  ];
  
  console.log('📁 Creating optimized sections...\n');
  
  for (const sectionName of sections) {
    try {
      await asanaRequest('/sections', {
        method: 'POST',
        body: JSON.stringify({
          data: {
            name: sectionName,
            project: FEATURES_PROJECT
          }
        })
      });
      console.log(`  ✅ ${sectionName}`);
      await new Promise(r => setTimeout(r, 500));
    } catch (e) {
      console.log(`  ℹ️  ${sectionName}: ${e.message}`);
    }
  }
}

// Create custom fields for Features
async function createFeatureCustomFields() {
  console.log('\n🔧 Creating custom fields for features...\n');
  
  const fields = [
    {
      name: 'Feature Category',
      type: 'enum',
      options: ['UI/UX', 'Backend', 'Integration', 'Performance', 'Security', 'Mobile', 'Analytics'],
      description: 'Type of feature'
    },
    {
      name: 'User Impact',
      type: 'enum',
      options: ['Critical', 'High', 'Medium', 'Low'],
      description: 'How many users will this help'
    },
    {
      name: 'Effort Level',
      type: 'enum',
      options: ['Quick Win (1-2 days)', 'Medium (3-5 days)', 'Large (1-2 weeks)', 'Epic (2+ weeks)'],
      description: 'Development effort required'
    },
    {
      name: 'Requested By',
      type: 'text',
      description: 'Who requested this feature'
    },
    {
      name: 'Business Value',
      type: 'enum',
      options: ['Revenue Generating', 'Cost Saving', 'User Retention', 'Competitive Advantage', 'Nice to Have'],
      description: 'Business impact'
    }
  ];
  
  for (const field of fields) {
    try {
      if (field.type === 'enum') {
        await asanaRequest('/custom_fields', {
          method: 'POST',
          body: JSON.stringify({
            data: {
              name: field.name,
              workspace: WORKSPACE_ID,
              type: 'enum',
              enum_options: field.options.map((opt, i) => ({
                name: opt,
                color: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'][i] || 'blue'
              })),
              description: field.description
            }
          })
        });
      } else {
        await asanaRequest('/custom_fields', {
          method: 'POST',
          body: JSON.stringify({
            data: {
              name: field.name,
              workspace: WORKSPACE_ID,
              type: 'text',
              description: field.description
            }
          })
        });
      }
      console.log(`  ✅ ${field.name}`);
      await new Promise(r => setTimeout(r, 500));
    } catch (e) {
      console.log(`  ℹ️  ${field.name}: ${e.message}`);
    }
  }
}

// Create feature request templates
async function createFeatureTemplates() {
  console.log('\n📋 Creating feature request templates...\n');
  
  const templates = [
    {
      name: '💡 TEMPLATE: New Feature Request',
      section: '💡 MEDIUM PRIORITY - Backlog',
      notes: `**Feature Request Template**

**Feature Name:** [Short descriptive name]

**Problem Statement:**
What problem does this solve? Who has this problem?

**Proposed Solution:**
How should this work? What should it do?

**User Story:**
As a [user type], I want [feature] so that [benefit].

**Acceptance Criteria:**
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

**Mockups/Designs:**
[Attach screenshots or wireframes]

**Technical Notes:**
Any technical considerations or constraints?

**Priority Justification:**
Why is this important? What happens if we don't build it?

---
**Custom Fields to Set:**
- Feature Category: [UI/UX/Backend/Integration/etc]
- User Impact: [Critical/High/Medium/Low]
- Effort Level: [Quick/Medium/Large/Epic]
- Business Value: [Revenue/Cost Saving/etc]

---
TEMPLATE - Copy and fill out for each feature request`
    },
    {
      name: '🔥 TEMPLATE: High Priority Feature',
      section: '🔥 HIGH PRIORITY - Next Sprint',
      notes: `**HIGH PRIORITY Feature Request**

**Feature:** [Name]

**Why HIGH Priority:**
- [ ] Critical user need
- [ ] Revenue impact
- [ ] Competitive necessity
- [ ] Blocking other work

**Quick Description:**
[2-3 sentences max]

**Immediate Next Steps:**
1. [ ] Design mockup
2. [ ] Technical spec
3. [ ] Estimate effort
4. [ ] Schedule sprint

**Target Release:**
[Date - within 1-2 weeks]

**Success Metrics:**
- [ ] Metric 1
- [ ] Metric 2

---
Move to 🔥 HIGH PRIORITY when ready to build`
    },
    {
      name: '🎨 TEMPLATE: UI/UX Improvement',
      section: '🎨 UI/UX Improvements',
      notes: `**UI/UX Improvement Request**

**Current Issue:**
What's wrong with current UI/UX?

**Proposed Change:**
What should it look like? How should it behave?

**User Benefit:**
How does this improve user experience?

**Design Requirements:**
- [ ] Mockup needed
- [ ] User flow diagram
- [ ] Responsive design
- [ ] Accessibility check

**A/B Test:**
Should we A/B test this change?
- Yes/No

**Related Features:**
Any related work?

---
Set Feature Category: UI/UX`
    },
    {
      name: '⚙️ TEMPLATE: Backend/Infrastructure',
      section: '⚙️ Backend & Infrastructure',
      notes: `**Backend/Infrastructure Task**

**Technical Objective:**
What needs to be built/changed?

**Current State:**
How does it work now?

**Desired State:**
How should it work?

**Technical Approach:**
- Architecture changes
- Database schema
- API endpoints
- Performance considerations

**Dependencies:**
What does this depend on?

**Risks:**
What could go wrong?

**Testing Strategy:**
How will we test this?

**Rollback Plan:**
How do we undo if needed?

---
Set Feature Category: Backend`
    }
  ];
  
  // Get sections
  const sections = await asanaRequest(`/projects/${FEATURES_PROJECT}/sections`);
  const sectionMap = {};
  for (const section of sections.data) {
    sectionMap[section.name] = section.gid;
  }
  
  for (const template of templates) {
    try {
      const sectionId = sectionMap[template.section];
      if (!sectionId) {
        console.log(`  ⚠️  Section not found: ${template.section}`);
        continue;
      }
      
      await asanaRequest('/tasks', {
        method: 'POST',
        body: JSON.stringify({
          data: {
            name: template.name,
            projects: [FEATURES_PROJECT],
            memberships: [{ project: FEATURES_PROJECT, section: sectionId }],
            notes: template.notes,
            tags: ['template', 'feature-request']
          }
        })
      });
      
      console.log(`  ✅ ${template.name.substring(0, 45)}...`);
      await new Promise(r => setTimeout(r, 500));
    } catch (e) {
      console.log(`  ❌ Failed: ${template.name.substring(0, 45)}`);
    }
  }
}

// Create example feature requests
async function createExampleFeatures() {
  console.log('\n💡 Creating example feature requests...\n');
  
  const examples = [
    {
      name: '🔥 Add SMS notifications for hot leads',
      priority: 'HIGH',
      category: 'Integration',
      impact: 'High',
      effort: 'Medium (3-5 days)',
      section: '💡 MEDIUM PRIORITY - Backlog',
      notes: `**Feature:** Send SMS alerts when hot leads (85+ score) respond to emails

**Why:** Hot leads need immediate attention, SMS ensures faster response than email notifications

**User Story:**
As a sales manager, I want SMS alerts for hot leads so I can respond within minutes instead of hours.

**Acceptance Criteria:**
- [ ] Integrate with SMS provider (Twilio)
- [ ] Send SMS when lead score > 85 responds
- [ ] Include lead name and company in SMS
- [ ] Allow users to opt-in/out of SMS
- [ ] Include link to lead details

**Business Value:** User Retention + Revenue Generating
**Requested By:** AI Analysis (identified from workflow gaps)`
    },
    {
      name: '🎨 Redesign dashboard with lead scoring visualizations',
      priority: 'MEDIUM',
      category: 'UI/UX',
      impact: 'Medium',
      effort: 'Large (1-2 weeks)',
      section: '🎨 UI/UX Improvements',
      notes: `**Feature:** Visual dashboard showing lead pipeline, scores, and conversion funnel

**Why:** Current dashboard is text-heavy, visual charts would help identify patterns faster

**Includes:**
- Lead score distribution chart
- Pipeline funnel visualization
- Response rate by industry
- Conversion timeline

**Business Value:** User Retention + Competitive Advantage`
    },
    {
      name: '⚙️ Add machine learning for lead scoring optimization',
      priority: 'LOW',
      category: 'Backend',
      impact: 'High',
      effort: 'Epic (2+ weeks)',
      section: '🌱 LOW PRIORITY - Future Ideas',
      notes: `**Feature:** ML model that learns from successful conversions and auto-adjusts lead scores

**Why:** Static scoring might miss patterns, ML could identify hidden success factors

**Technical Approach:**
- Train model on historical conversion data
- Features: company size, industry, response time, email opens
- Auto-adjust weights monthly
- A/B test ML vs current scoring

**Business Value:** Revenue Generating + Competitive Advantage`
    }
  ];
  
  const sections = await asanaRequest(`/projects/${FEATURES_PROJECT}/sections`);
  const sectionMap = {};
  for (const section of sections.data) {
    sectionMap[section.name] = section.gid;
  }
  
  for (const feature of examples) {
    try {
      const sectionId = sectionMap[feature.section];
      if (!sectionId) continue;
      
      await asanaRequest('/tasks', {
        method: 'POST',
        body: JSON.stringify({
          data: {
            name: feature.name,
            projects: [FEATURES_PROJECT],
            memberships: [{ project: FEATURES_PROJECT, section: sectionId }],
            notes: feature.notes,
            tags: ['example']
          }
        })
      });
      
      console.log(`  ✅ ${feature.name.substring(0, 50)}...`);
      await new Promise(r => setTimeout(r, 500));
    } catch (e) {
      console.log(`  ❌ Failed: ${feature.name.substring(0, 50)}`);
    }
  }
}

async function main() {
  try {
    await createFeatureSections();
    await createFeatureCustomFields();
    await createFeatureTemplates();
    await createExampleFeatures();
    
    console.log('\n═══════════════════════════════════════════════════');
    console.log('  ✅ FEATURES BOARD OPTIMIZED!');
    console.log('═══════════════════════════════════════════════════');
    console.log('');
    console.log('📋 NEW STRUCTURE:');
    console.log('');
    console.log('Priority-Based Sections:');
    console.log('  🔥 HIGH PRIORITY - Next Sprint');
    console.log('  💡 MEDIUM PRIORITY - Backlog');
    console.log('  🌱 LOW PRIORITY - Future Ideas');
    console.log('');
    console.log('Category-Based Sections:');
    console.log('  🎨 UI/UX Improvements');
    console.log('  ⚙️ Backend & Infrastructure');
    console.log('  🔗 Integrations & APIs');
    console.log('  🧪 Testing & QA');
    console.log('  🚀 Ready to Deploy');
    console.log('  ✅ Released & Done');
    console.log('  📚 Archive');
    console.log('');
    console.log('🎯 Custom Fields Created:');
    console.log('  • Feature Category (UI/UX/Backend/etc)');
    console.log('  • User Impact (Critical/High/Medium/Low)');
    console.log('  • Effort Level (Quick/Medium/Large/Epic)');
    console.log('  • Requested By');
    console.log('  • Business Value');
    console.log('');
    console.log('📄 Templates Created:');
    console.log('  • New Feature Request');
    console.log('  • High Priority Feature');
    console.log('  • UI/UX Improvement');
    console.log('  • Backend/Infrastructure');
    console.log('');
    console.log('💡 Example Features Added:');
    console.log('  • SMS notifications for hot leads');
    console.log('  • Dashboard redesign with visualizations');
    console.log('  • ML for lead scoring optimization');
    console.log('');
    console.log('🚀 Ready for selective feature development!');
    
  } catch (e) {
    console.error('Error:', e.message);
  }
}

main();
