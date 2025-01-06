import { PropertyCard, PropertyCardProps } from "@/components/PropertyCard"


const propertyData:PropertyCardProps = {
  id: "property_004",
  name: "Cozy Cottage in Vermont",
  description: "A charming 2-bedroom cottage surrounded by nature, perfect for a peaceful retreat. Nestled in the heart of Vermont's lush green mountains, this idyllic property offers a serene escape from the hustle and bustle of city life. The cottage features a warm and inviting interior with exposed wooden beams, a stone fireplace, and large windows that flood the space with natural light. The well-equipped kitchen opens to a cozy dining area, perfect for intimate family meals. Outside, a wraparound porch provides the ideal spot to sip your morning coffee while taking in the breathtaking views of the surrounding forest. With hiking trails nearby and ski resorts just a short drive away, this cottage is a year-round haven for nature lovers and outdoor enthusiasts. The property also includes a detached garage that can be used as a workshop or converted into a guest house. Recent upgrades include a new energy-efficient heating system and updated plumbing, ensuring modern comfort in this classic New England retreat. Whether you're looking for a vacation home, a rental investment, or a permanent residence away from the city, this Vermont cottage offers the perfect blend of rustic charm and modern convenience.",
  price: 450000,
  resalePrice: 400000,
  imageUrl: "https://www.homestratosphere.com/wp-content/uploads/2018/05/luxury-master-bedroom2018-05-24-at-8.38.40-AM-3.jpg",
  status: "AVAILABLE",
  createdAt: new Date("2023-11-25T14:30:00Z"),
  updatedAt: new Date("2024-01-03T11:45:00Z"),
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <PropertyCard {...propertyData} />
    </main>
  )
}

