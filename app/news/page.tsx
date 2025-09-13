"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"
import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function NewsListPage() {
  const { t } = useLanguage()

  const newsLinks = [
    "/news/belt-road-10th-anniversary",
    "/news/china-europe-railway",
    "/news/digital-silk-road",
    "/news/green-belt-road",
  ]

  const news = t.news.items.map((item, index) => ({
    id: index + 1,
    title: item.title,
    excerpt: item.excerpt,
    date: index === 0 ? "2024-01-15" : index === 1 ? "2024-02-20" : index === 2 ? "2024-03-10" : "2024-04-05",
    category: item.category,
    link: newsLinks[index],
  }))

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{t.news.title}</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t.news.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <Link key={item.id} href={item.link}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {item.category}
                      </span>
                      <div className="flex items-center text-xs text-slate-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed mb-4">{item.excerpt}</p>
                    <div className="flex items-center text-blue-600 text-sm font-medium">
                        <span suppressHydrationWarning>{t.news.moreNews}</span> <ArrowRight className="ml-1 h-3 w-3" />
                      </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
