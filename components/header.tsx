"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { name: t.header.nav.home, href: "/" },
    { name: t.header.nav.about, href: "/about" },
    { name: t.header.nav.news, href: "/news" }, // Updated link to news page
    { name: t.header.nav.products, href: "/products" },
    { name: t.header.nav.contact, href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
      {/* Top bar */}
      <div className="bg-black/40 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4 text-white drop-shadow-lg">
              <span suppressHydrationWarning>{t.header.welcome}</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white hover:bg-white/20 drop-shadow-lg"
              >
                <Search className="h-4 w-4" />
              </Button>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and subtitle */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="BRI Logo"
                width={60}
                height={24}
                className="h-6 w-auto drop-shadow-lg"
              />
            </div>
            <div className="text-sm text-white font-medium drop-shadow-lg" suppressHydrationWarning>{t.header.logo.subtitle}</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-300 font-medium transition-colors drop-shadow-lg"
                suppressHydrationWarning
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-white hover:bg-white/20 drop-shadow-lg"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-black/50 backdrop-blur-sm">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-white hover:text-blue-300 hover:bg-white/20 transition-colors drop-shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
