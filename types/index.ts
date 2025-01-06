export interface User {
  id: string
  name: string
  email: string
  role: 'ADMIN' | 'BUYER'
  walletBalance: number
  createdAt: Date
  updatedAt: Date
}

export interface Item {
  id: string
  name: string
  description: string
  price: number
  resalePrice: number
  imageUrl: string
  status: 'AVAILABLE' | 'SOLD'
  createdAt: Date
  updatedAt: Date
}

export interface Transaction {
  id: string
  type: 'PURCHASE' | 'RESALE'
  amount: number
  itemId: string
  buyerId: string
  sellerId?: string
  status: 'PENDING' | 'COMPLETED' | 'FAILED'
  createdAt: Date
  item: Item
  buyer: User
  seller?: User
}

