import { getSession } from '@/lib/auth'
import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'
import AddItemForm from './add-item-form'
import ItemsList from './items-list'
import TransactionsList from './transactions-list'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const prisma = new PrismaClient()

export default async function AdminDashboard() {
  const session = await getSession()
  
  if (!session) {
    redirect('/login')
  }

  const items = await prisma.item.findMany()
  const transactions = await prisma.transaction.findMany({
    include: {
      item: true,
      buyer: true,
      seller: true
    }
  })

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <Tabs defaultValue="items">
        <TabsList>
          <TabsTrigger value="items">Manage Items</TabsTrigger>
          <TabsTrigger value="add">Add Item</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>
        <TabsContent value="items">
          <ItemsList items={items} />
        </TabsContent>
        <TabsContent value="add">
          <AddItemForm />
        </TabsContent>
        <TabsContent value="transactions">
          <TransactionsList transactions={transactions} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

