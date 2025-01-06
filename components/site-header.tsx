import Link from 'next/link'
import { MainNav } from '@/components/main-nav'
import { Button } from '@/components/ui/button'
import { getSession } from '@/lib/auth'

export async function SiteHeader() {
  const session = await getSession()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
      <div className="container flex h-14 items-center">
        <Link href="/" className="font-bold">
          Digital Marketplace
        </Link>
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          {session ? (
            <Button asChild variant="ghost">
              <Link href="/api/auth/logout">
                Logout
              </Link>
            </Button>
          ) : (
            <Button asChild variant="ghost">
              <Link href="/login">
                Login
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

