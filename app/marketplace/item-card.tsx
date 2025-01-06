'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { toast } from "@/components/ui/use-toast"
import type { Item } from '@/types'

interface ItemCardProps {
  item: Item
}

export default function ItemCard({ item }: ItemCardProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  // const [error, setError] = useState('') //Removed setError

  // async function handlePurchase() {
  //   setLoading(true)
  //   //setError('') //Removed setError

  //   try {
  //     const res = await fetch('/api/razorpay/create-order', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         itemId: item.id,
  //         amount: item.price,
  //       }),
  //     })

  //     if (!res.ok) {
  //       const error = await res.json()
  //       throw new Error(error.message || 'Failed to create order')
  //     }

  //     const { orderId } = await res.json()
      
  //     const options = {
  //       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  //       amount: item.price * 100,
  //       currency: "INR",
  //       name: "Digital Marketplace",
  //       description: `Purchase ${item.name}`,
  //       order_id: orderId,
  //       handler: async function (response: any) {
  //         try {
  //           const verifyRes = await fetch('/api/razorpay/verify-payment', {
  //             method: 'POST',
  //             headers: {
  //               'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify({
  //               razorpay_payment_id: response.razorpay_payment_id,
  //               razorpay_order_id: response.razorpay_order_id,
  //               razorpay_signature: response.razorpay_signature,
  //               itemId: item.id,
  //             }),
  //           })

  //           if (!verifyRes.ok) {
  //             const error = await verifyRes.json()
  //             throw new Error(error.message || 'Payment verification failed')
  //           }

  //           router.refresh()
  //         } catch (error) {
  //           toast({
  //             variant: "destructive",
  //             title: "Error",
  //             description: error instanceof Error ? error.message : 'Payment verification failed'
  //           })
  //         }
  //       },
  //       modal: {
  //         ondismiss: function() {
  //           toast({
  //             variant: "destructive",
  //             title: "Error",
  //             description: 'Payment cancelled'
  //           })
  //         }
  //       },
  //       prefill: {
  //         name: '',
  //         email: '',
  //         contact: ''
  //       },
  //     }

  //     const razorpay = new (window as any).Razorpay(options)
  //     razorpay.open()
  //   } catch (error) {
  //     toast({
  //       variant: "destructive",
  //       title: "Error",
  //       description: error instanceof Error ? error.message : 'Purchase failed'
  //     })
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  const handleClick = () => {
    router.push(`/marketplace/tracks/${item.id}`)
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-48 mb-4">
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p className="text-sm text-gray-600 mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold">₹{item.price}</p>
            <p className="text-sm text-gray-500">Resale: ₹{item.resalePrice}</p>
          </div>
        </div>
        {/* {error && ( //Removed error alert
          <Alert variant="destructive" className="mt-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )} */}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleClick} 
          className="w-full" 
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}

