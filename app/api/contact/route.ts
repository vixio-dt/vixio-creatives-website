import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'
import { Resend } from 'resend'

function getResend() {
  return process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const type = body.type as string
  if (type !== 'buyer' && type !== 'creator') {
    return NextResponse.json({ error: 'Invalid form type' }, { status: 400 })
  }

  if (type === 'buyer') {
    const contact = body.contact as string
    if (!contact) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const { error } = await getSupabase().from('buyer_submissions').insert({ contact })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'Failed to submit' }, { status: 500 })
    }

    const resend = getResend()
    if (resend) {
      await resend.emails.send({
        from: 'Vixio Website <noreply@vixiocreatives.com>',
        to: 'hello@vixiocreatives.com',
        subject: `New Drop List Signup: ${contact}`,
        text: `New buyer waitlist signup:\n\nEmail: ${contact}`,
      }).catch((err) => console.error('Resend error:', err))
    }
  }

  if (type === 'creator') {
    const { name, portfolio, idea, contact } = body as {
      name: string
      portfolio: string
      idea: string
      contact: string
    }

    if (!name || !idea || !contact) {
      return NextResponse.json({ error: 'Name, idea, and contact are required' }, { status: 400 })
    }

    const { error } = await getSupabase().from('creator_submissions').insert({
      name,
      portfolio: portfolio || null,
      idea,
      contact,
    })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'Failed to submit' }, { status: 500 })
    }

    const resend = getResend()
    if (resend) {
      await resend.emails.send({
        from: 'Vixio Website <noreply@vixiocreatives.com>',
        to: 'hello@vixiocreatives.com',
        subject: `New Creator Inquiry: ${name}`,
        text: `Name: ${name}\nPortfolio: ${portfolio || 'Not provided'}\nIdea: ${idea}\nContact: ${contact}`,
      }).catch((err) => console.error('Resend error:', err))
    }
  }

  return NextResponse.json({ success: true })
}
