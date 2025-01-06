import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
import bcrypt from 'bcryptjs'

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY)

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10)
}

export async function comparePasswords(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword)
}

export async function createToken(userId: string, email: string) {
  return new SignJWT({ userId, email })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(secretKey)
}

export async function verifyToken(token: string) {
  try {
    const verified = await jwtVerify(token, secretKey)
    return verified.payload
  } catch (err) {
    return null
  }
}

export async function getSession() {
  const token = cookies().get('token')?.value
  if (!token) return null
  return verifyToken(token)
}

