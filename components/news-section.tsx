"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function NewsSection() {
  const { t } = useLanguage()
  const router = useRouter()

  const news = t.news.items.map((item, index) => ({
    id: index + 1,
    title: item.title,
    excerpt: item.excerpt,
    date: index === 0 ? "2024-01-15" : index === 1 ? "2024-02-20" : index === 2 ? "2024-03-10" : "2024-04-05",
    category: item.category,
  }))

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" suppressHydrationWarning>{t.news.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto" suppressHydrationWarning>{t.news.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer group h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded" suppressHydrationWarning>
                    {item.category}
                  </span>
                  <div className="flex items-center text-xs text-slate-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors" suppressHydrationWarning>
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm leading-relaxed" suppressHydrationWarning>{item.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/news">
            <Button variant="outline" size="lg">
              <span suppressHydrationWarning>{t.news.moreNews}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
