import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/hooks/use-language"
import { DynamicHtmlLang } from "@/components/dynamic-html-lang"
import { Suspense } from "react"
import { Header } from "@/components/header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BRI - Belt and Road Initiative",
  description: "Official website of Belt and Road Initiative",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className={`font-sans ${inter.className}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <LanguageProvider>
            <DynamicHtmlLang>
              <Header />
              {children}
            </DynamicHtmlLang>
          </LanguageProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
