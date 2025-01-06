import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getSession } from '@/lib/auth'

// const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { itemId, amount } = await request.json()

    // Verify item exists and belongs to user
    const item = await prisma.item.findFirst({
      where: {
        id: itemId,
        transactions: {
          some: {
            buyerId: session.userId,
            type: 'PURCHASE',
            status: 'COMPLETED'
          }
        }
      }
    })

    if (!item) {
      return NextResponse.json(
        { error: 'Item not found or not eligible for resale' },
        { status: 404 }
      )
    }

    // Verify item hasn't already been resold
    const existingResale = await prisma.transaction.findFirst({
      where: {
        itemId,
        buyerId: session.userId,
        type: 'RESALE'
      }
    })

    if (existingResale) {
      return NextResponse.json(
        { error: 'Item has already been resold' },
        { status: 400 }
      )
    }

    // Process resale
    const result = await prisma.$transaction(async (tx) => {
      const transaction = await tx.transaction.create({
        data: {
          type: 'RESALE',
          amount,
          itemId,
          buyerId: session.userId,
          status: 'COMPLETED'
        }
      })

      const user = await tx.user.update({
        where: { id: session.userId },
        data: {
          walletBalance: {
            increment: amount
          }
        }
      })

      await tx.item.update({
        where: { id: itemId },
        data: { status: 'AVAILABLE' }
      })

      return { transaction, user }
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Resale error:', error)
    return NextResponse.json(
      { error: 'Failed to process resale' },
      { status: 500 }
    )
  }
}

