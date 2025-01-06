'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Purchase {
  id: string
  amount: number
  status: string
  createdAt: Date
  item: {
    id: string
    name: string
    resalePrice: number
  }
}

export default function PurchaseHistory({ purchases }: { purchases: Purchase[] }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleResale(itemId: string, resalePrice: number) {
    setLoading(true)
    try {
      const res = await fetch('/api/resale', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemId,
          amount: resalePrice,
        }),
      })

      if (!res.ok) {
        throw new Error('Failed to initiate resale')
      }

      router.refresh()
    } catch (error) {
      console.error('Resale failed:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Item</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {purchases.map((purchase) => (
          <TableRow key={purchase.id}>
            <TableCell>
              {new Date(purchase.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell>{purchase.item.name}</TableCell>
            <TableCell>₹{purchase.amount}</TableCell>
            <TableCell>{purchase.status}</TableCell>
            <TableCell>
              {purchase.status === 'COMPLETED' && (
                <Button
                  onClick={() => handleResale(purchase.item.id, purchase.item.resalePrice)}
                  disabled={loading}
                >
                  Resell for ₹{purchase.item.resalePrice}
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

