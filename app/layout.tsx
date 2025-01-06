

import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import  ErrorBoundary from '@/components/error-boundary'
import { cn } from "@/lib/utils"
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Digital Marketplace',
  description: 'Buy and sell digital goods',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://checkout.razorpay.com/v1/checkout.js" async />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
          {children}
        <Toaster />
      </body>
    </html>
  )
}

