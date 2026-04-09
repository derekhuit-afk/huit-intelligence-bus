import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'online',
    service: 'huit-intelligence-bus',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  })
}
