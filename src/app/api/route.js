import { NextResponse } from 'next/server'
 
export async function GET(Request) {
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
}