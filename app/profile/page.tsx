import { getSession } from '@/lib/auth'
import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import PurchaseHistory from './purchase-history'
import ResaleHistory from './resale-history'

const prisma = new PrismaClient()

export default async function ProfilePage() {
  const session = await getSession()
  
  if (!session) {
    redirect('/login')
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    include: {
      purchases: {
        include: {
          item: true,
        },
      },
      resales: {
        include: {
          item: true,
        },
      },
    },
  })

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Your account details and wallet balance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Wallet Balance:</strong> ₹{user.walletBalance}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Purchase History</CardTitle>
          </CardHeader>
          <CardContent>
            <PurchaseHistory purchases={user.purchases} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resale History</CardTitle>
          </CardHeader>
          <CardContent>
            <ResaleHistory resales={user.resales} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

