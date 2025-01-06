import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import Razorpay from 'razorpay'
import { getSession } from '@/lib/auth'

const prisma = new PrismaClient()
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

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

    const order = await razorpay.orders.create({
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      receipt: `order_${itemId}`,
    })

    return NextResponse.json({ orderId: order.id })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}

