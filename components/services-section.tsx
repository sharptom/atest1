"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Truck, Zap, Leaf, Building, Users } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function ServicesSection() {
  const { t } = useLanguage() // 使用多语言hook

  const services = [
    {
      icon: Globe,
      title: t.services.items[0].title,
      description: t.services.items[0].description,
    },
    {
      icon: Truck,
      title: t.services.items[1].title,
      description: t.services.items[1].description,
    },
    {
      icon: Zap,
      title: t.services.items[2].title,
      description: t.services.items[2].description,
    },
    {
      icon: Building,
      title: t.services.items[3].title,
      description: t.services.items[3].description,
    },
    {
      icon: Users,
      title: t.services.items[4].title,
      description: t.services.items[4].description,
    },
    {
      icon: Leaf,
      title: t.services.items[5].title,
      description: t.services.items[5].description,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" suppressHydrationWarning>{t.services.title}</h2>{" "}
          {/* 使用翻译文本 */}
          <p className="text-lg text-slate-600 max-w-2xl mx-auto" suppressHydrationWarning>
            {t.services.subtitle} {/* 使用翻译文本 */}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-slate-900" suppressHydrationWarning>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed" suppressHydrationWarning>{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
