import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { hashPassword } from '@/lib/auth'
import { ApiError, handleApiError } from '@/lib/api-error'
import { registerSchema } from '@/lib/validations'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const result = registerSchema.safeParse(body)
    if (!result.success) {
      throw new ApiError('Invalid input', 400, 'VALIDATION_ERROR')
    }

    const { name, email, password } = result.data

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      throw new ApiError('User already exists', 400, 'USER_EXISTS')
    }

    const hashedPassword = await hashPassword(password)

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 201 }
    )
  } catch (error) {
    return handleApiError(error)
  }
}

