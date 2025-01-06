import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
  cookies().delete('token')
  return NextResponse.redirect(new URL('/login', process.env.NEXT_PUBLIC_APP_URL))
}

