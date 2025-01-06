import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { redirect } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import ItemCard from './item-card'
import { Item } from '@/types'

export default async function MarketplacePage() {
  const session = await getSession()
  
  if (!session) {
    redirect('/login')
  }

  // const items = await prisma.item.findMany({
  //   where: {
  //     status: 'AVAILABLE'
  //   }
  // })
  const items: Item[] = [
    {
      id: "property_001",
      name: "Luxury Villa in Beverly Hills",
      description: "A stunning 5-bedroom villa with a private pool, garden, and panoramic views of the city.",
      price: 2500000,
      resalePrice: 2400000,
      imageUrl: "https://www.homestratosphere.com/wp-content/uploads/2018/05/luxury-master-bedroom2018-05-24-at-8.38.40-AM-3.jpg",
      status: "AVAILABLE",
      createdAt: new Date("2024-01-01T10:00:00Z"),
      updatedAt: new Date("2024-01-05T15:00:00Z"),
    },
    {
      id: "property_002",
      name: "Modern Apartment in New York",
      description: "A sleek 2-bedroom apartment located in the heart of Manhattan with state-of-the-art amenities.",
      price: 1200000,
      resalePrice: 1150000,
      imageUrl: "https://www.homestratosphere.com/wp-content/uploads/2018/05/luxury-master-bedroom2018-05-24-at-8.38.40-AM-3.jpg",
      status: "AVAILABLE",
      createdAt: new Date("2024-01-02T09:30:00Z"),
      updatedAt: new Date("2024-01-06T12:00:00Z"),
    },
    {
      id: "property_003",
      name: "Beachfront Condo in Miami",
      description: "A luxurious 3-bedroom condo with direct access to the beach and spectacular ocean views.",
      price: 1800000,
      resalePrice: 1700000,
      imageUrl: "https://www.homestratosphere.com/wp-content/uploads/2018/05/luxury-master-bedroom2018-05-24-at-8.38.40-AM-3.jpg",
      status: "SOLD",
      createdAt: new Date("2023-12-15T08:00:00Z"),
      updatedAt: new Date("2024-01-04T14:00:00Z"),
    },
    {
      id: "property_004",
      name: "Cozy Cottage in Vermont",
      description: "A charming 2-bedroom cottage surrounded by nature, perfect for a peaceful retreat.",
      price: 450000,
      resalePrice: 400000,
      imageUrl: "https://www.homestratosphere.com/wp-content/uploads/2018/05/luxury-master-bedroom2018-05-24-at-8.38.40-AM-3.jpg",
      status: "AVAILABLE",
      createdAt: new Date("2023-11-25T14:30:00Z"),
      updatedAt: new Date("2024-01-03T11:45:00Z"),
    },
    {
      id: "property_005",
      name: "Penthouse in Dubai Marina",
      description: "A luxurious penthouse with 4 bedrooms, a private pool, and breathtaking views of the marina.",
      price: 5000000,
      resalePrice: 4800000,
      imageUrl: "https://www.homestratosphere.com/wp-content/uploads/2018/05/luxury-master-bedroom2018-05-24-at-8.38.40-AM-3.jpg",
      status: "SOLD",
      createdAt: new Date("2023-10-10T12:00:00Z"),
      updatedAt: new Date("2024-01-07T16:20:00Z"),
    },
  ];
  
  

  return (
    <>
      <SiteHeader />
      <div className="container mx-auto py-8 px-8">
        <h1 className="text-3xl font-bold mb-8">Available Items</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

