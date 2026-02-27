import { NextResponse } from 'next/server'
import { createLeadInAttio, trackLeadInMixpanel } from './attio'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // Validate required fields
    if (!data.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Sanitize and prepare lead data
    const leadData = {
      email: data.email.toLowerCase().trim(),
      first_name: data.first_name?.trim() || '',
      last_name: data.last_name?.trim() || '',
      company: data.company?.trim() || '',
      job_title: data.job_title?.trim() || '',
      phone: data.phone?.trim() || '',
      website: data.website?.trim() || '',
      source: data.source || 'website',
      message: data.message?.trim() || '',
      company_size: data.company_size || '',
      use_case: data.use_case || '',
    }

    // Create in Attio
    const attioResult = await createLeadInAttio(leadData)

    // Track in Mixpanel
    await trackLeadInMixpanel(leadData, attioResult)

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
      leadId: attioResult.dealId,
    })

  } catch (error: any) {
    console.error('Lead capture error:', error)
    return NextResponse.json(
      { error: 'Failed to capture lead', message: error.message },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to check status
export async function GET() {
  return NextResponse.json({
    status: 'Lead capture API is running',
    timestamp: new Date().toISOString(),
  })
}
