// Attio API helper for BrandGate
// Handles creating/updating people, companies, and deals

const ATTIO_API_BASE = 'https://api.attio.com/v2'
const API_KEY = process.env.ATTIO_API_KEY

interface LeadData {
  email: string
  first_name?: string
  last_name?: string
  company?: string
  job_title?: string
  phone?: string
  source: string
  message?: string
  company_size?: string
  use_case?: string
  website?: string
}

async function attioRequest(endpoint: string, method: string = 'GET', body?: any) {
  const response = await fetch(`${ATTIO_API_BASE}${endpoint}`, {
    method,
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    const error = await response.text()
    console.error(`Attio API error: ${response.status}`, error)
    throw new Error(`Attio API error: ${response.status}`)
  }

  return response.json()
}

export async function findOrCreatePerson(data: LeadData) {
  try {
    // First, try to find existing person by email
    const existing = await attioRequest(
      `/objects/people/records/query`,
      'POST',
      {
        filter: {
          email_addresses: {
            contains: [data.email]
          }
        }
      }
    )

    if (existing.data?.length > 0) {
      console.log(`[Attio] Found existing person: ${data.email}`)
      return existing.data[0].id.record_id
    }

    // Create new person
    const person = await attioRequest('/objects/people/records', 'POST', {
      data: {
        values: {
          email_addresses: [data.email],
          first_name: data.first_name || '',
          last_name: data.last_name || '',
          job_title: data.job_title || '',
          phone_numbers: data.phone ? [data.phone] : [],
        }
      }
    })

    console.log(`[Attio] Created person: ${data.email}`)
    return person.data.id.record_id
  } catch (error) {
    console.error('[Attio] Error creating person:', error)
    throw error
  }
}

export async function findOrCreateCompany(companyName: string, website?: string) {
  if (!companyName) return null

  try {
    // Try to find existing company
    const existing = await attioRequest(
      `/objects/companies/records/query`,
      'POST',
      {
        filter: {
          name: {
            equals: companyName
          }
        }
      }
    )

    if (existing.data?.length > 0) {
      console.log(`[Attio] Found existing company: ${companyName}`)
      return existing.data[0].id.record_id
    }

    // Create new company
    const company = await attioRequest('/objects/companies/records', 'POST', {
      data: {
        values: {
          name: companyName,
          domains: website ? [website.replace(/^https?:\/\//, '')] : [],
        }
      }
    })

    console.log(`[Attio] Created company: ${companyName}`)
    return company.data.id.record_id
  } catch (error) {
    console.error('[Attio] Error creating company:', error)
    // Don't fail if company creation fails
    return null
  }
}

export async function createDeal(
  personId: string, 
  companyId: string | null, 
  data: LeadData
) {
  try {
    const dealData: any = {
      data: {
        values: {
          name: `${data.company || data.email} - BrandGate Interest`,
          status: 'Inbox', // Initial stage
          source: data.source,
          notes: data.message || '',
          estimated_value: null,
        },
        relationships: {
          primary_contact: {
            data: [{ id: personId }]
          }
        }
      }
    }

    if (companyId) {
      dealData.data.relationships.company = {
        data: [{ id: companyId }]
      }
    }

    const deal = await attioRequest('/objects/deals/records', 'POST', dealData)

    console.log(`[Attio] Created deal for: ${data.email}`)
    return deal.data.id.record_id
  } catch (error) {
    console.error('[Attio] Error creating deal:', error)
    throw error
  }
}

export async function createLeadInAttio(data: LeadData) {
  // 1. Create/find person
  const personId = await findOrCreatePerson(data)
  
  // 2. Create/find company (if provided)
  const companyId = data.company 
    ? await findOrCreateCompany(data.company, data.website)
    : null

  // 3. Create deal
  const dealId = await createDeal(personId, companyId, data)

  return {
    personId,
    companyId,
    dealId,
    success: true
  }
}

// Track lead capture in Mixpanel
export async function trackLeadInMixpanel(data: LeadData, attioIds: any) {
  const mixpanelToken = process.env.MIXPANEL_TOKEN
  if (!mixpanelToken) return

  await fetch('https://api.mixpanel.com/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event: 'Lead Captured',
      properties: {
        distinct_id: data.email,
        token: mixpanelToken,
        time: Math.floor(Date.now() / 1000),
        $insert_id: `lead_${Date.now()}`,
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        company: data.company,
        source: data.source,
        company_size: data.company_size,
        use_case: data.use_case,
        has_message: !!data.message,
        attio_person_id: attioIds.personId,
        attio_deal_id: attioIds.dealId,
      }
    })
  })

  console.log(`[Mixpanel] Tracked lead: ${data.email}`)
}
