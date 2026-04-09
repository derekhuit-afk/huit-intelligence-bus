import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { target, event, payload } = body

    if (!target || !event) {
      return NextResponse.json({ error: 'Missing target or event' }, { status: 400 })
    }

    // Log the relay event
    console.log(`[Bus] Relay → ${target} | Event: ${event}`, payload)

    return NextResponse.json({
      status: 'relayed',
      target,
      event,
      timestamp: new Date().toISOString(),
    })
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}

export async function GET() {
  return NextResponse.json({ endpoint: 'relay', method: 'POST', status: 'ready' })
}
