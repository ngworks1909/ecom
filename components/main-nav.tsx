'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const items = [
  {
    title: 'Marketplace',
    href: '/marketplace',
  },
  {
    title: 'Profile',
    href: '/profile',
  },
]

export function MainNav({className}: {className?: string}) {
  const pathname = usePathname()

  return (
    <nav className={`hidden items-center space-x-6 ${className} sm:flex`}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            pathname === item.href
              ? 'text-foreground'
              : 'text-muted-foreground'
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

