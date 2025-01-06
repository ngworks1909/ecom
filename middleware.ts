import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './lib/auth'

export async function middleware(request: NextRequest) {
  // Check for authentication token
  const cookie = request.cookies.get('token');
  console.log(cookie);
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    const payload = await verifyToken(token)
    if (!payload) {
      throw new Error('Invalid token')
    }

    if (request.nextUrl.pathname === '/') {
      return NextResponse.redirect(new URL('/marketplace', request.url));
    }
    // For admin routes, verify user role
    if (request.nextUrl.pathname.startsWith('/admin')) {
      const res = await fetch(`${request.nextUrl.origin}/api/user/${payload.userId}`)
      if (!res.ok) {
        throw new Error('Failed to fetch user')
      }

      const user = await res.json()
      if (user.role !== 'ADMIN') {
        return NextResponse.redirect(new URL('/marketplace', request.url))
      }
    }

    return NextResponse.next()
  } catch (error) {
    // Clear invalid token
    const response = NextResponse.redirect(new URL('/login', request.url))
    response.cookies.delete('token')
    return response
  }
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/marketplace/:path*',
    '/profile/:path*',
    '/api/admin/:path*',
    '/api/marketplace/:path*',
    '/api/profile/:path*',
    '/'
  ]
}

