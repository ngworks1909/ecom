import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Resale {
  id: string
  amount: number
  status: string
  createdAt: Date
  item: {
    name: string
  }
}

export default function ResaleHistory({ resales }: { resales: Resale[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Item</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resales.map((resale) => (
          <TableRow key={resale.id}>
            <TableCell>
              {new Date(resale.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell>{resale.item.name}</TableCell>
            <TableCell>₹{resale.amount}</TableCell>
            <TableCell>{resale.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

