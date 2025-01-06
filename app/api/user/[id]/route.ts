import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getSession } from '@/lib/auth'
import { ApiError, handleApiError } from '@/lib/api-error'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession()
    if (!session) {
      throw new ApiError('Unauthorized', 401)
    }

    const user = await prisma.user.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    })

    if (!user) {
      throw new ApiError('User not found', 404)
    }

    return NextResponse.json(user)
  } catch (error) {
    return handleApiError(error)
  }
}

