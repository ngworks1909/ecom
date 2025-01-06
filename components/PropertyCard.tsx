"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { formatCurrency, formatDate } from "@/lib/utils"
import Image from "next/image"

export interface PropertyCardProps {
  id: string
  name: string
  description: string
  price: number
  resalePrice: number
  imageUrl: string
  status: "SOLD" | "AVAILABLE" | "PENDING"
  createdAt: Date
  updatedAt: Date
}

export function PropertyCard({
  id,
  name,
  description,
  price,
  resalePrice,
  imageUrl,
  status,
  createdAt,
  updatedAt,
}: PropertyCardProps) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-y-auto">
        <Card className="w-full max-w-2xl mx-auto">
          <div className="relative h-64">
            <Image
              src={imageUrl}
              alt={name}
              layout="fill"
              objectFit="cover"
            />
            <Badge 
              variant={status === "SOLD" ? "destructive" : status === "PENDING" ? "secondary" : "default"}
              className="absolute top-2 right-2"
            >
              {status}
            </Badge>
          </div>
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-4">{name}</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">{description}</p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-gray-500">Price</p>
                <p className="font-semibold text-xl">{formatCurrency(price)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Resale Price</p>
                <p className="font-semibold text-xl">{formatCurrency(resalePrice)}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 p-6 text-sm text-gray-500">
            <div className="w-full flex justify-between">
              <span>Created: {formatDate(createdAt)}</span>
              <span>Updated: {formatDate(updatedAt)}</span>
            </div>
          </CardFooter>
        </Card>
      </div>
      {status === "AVAILABLE" && (
        <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
          <div className="w-full max-w-2xl mx-auto">
            <Button className="w-full" size="lg" onClick={() => console.log(`Added ${id} to cart`)}>
              Buy Now
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

