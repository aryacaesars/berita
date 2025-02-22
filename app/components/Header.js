import Link from "next/link"
import { SearchIcon, MenuIcon, SunIcon } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="font-bold text-2xl">
            NewsHub
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="hover:text-primary">
              Technology
            </Link>
            <Link href="#" className="hover:text-primary">
              Business
            </Link>
            <Link href="#" className="hover:text-primary">
              Science
            </Link>
            <Link href="#" className="hover:text-primary">
              Sports
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 text-sm">
            <SearchIcon className="h-4 w-4" />
            Search
          </button>
          <button className="hidden md:flex items-center gap-2">
            <SunIcon className="h-4 w-4" />
          </button>
          <button className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}