import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { createHmac } from 'crypto'
import { getSession } from '@/lib/auth'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      itemId
    } = await request.json()

    const body = razorpay_order_id + "|" + razorpay_payment_id
    const expectedSignature = createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body.toString())
      .digest('hex')

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    // Update transaction and item status
    await prisma.$transaction([
      prisma.transaction.create({
        data: {
          type: 'PURCHASE',
          amount: 0, // Set the actual amount
          itemId,
          buyerId: session.userId,
          status: 'COMPLETED'
        }
      }),
      prisma.item.update({
        where: { id: itemId },
        data: { status: 'SOLD' }
      })
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Payment verification failed' },
      { status: 500 }
    )
  }
}

