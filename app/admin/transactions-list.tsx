import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Transaction {
  id: string
  type: string
  amount: number
  status: string
  createdAt: Date
  item: {
    name: string
  }
  buyer: {
    name: string
    email: string
  }
  seller?: {
    name: string
    email: string
  }
}

export default function TransactionsList({ transactions }: { transactions: Transaction[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Item</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Buyer</TableHead>
          <TableHead>Seller</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>
              {new Date(transaction.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>{transaction.item.name}</TableCell>
            <TableCell>₹{transaction.amount}</TableCell>
            <TableCell>{transaction.buyer.name}</TableCell>
            <TableCell>{transaction.seller?.name || '-'}</TableCell>
            <TableCell>{transaction.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

