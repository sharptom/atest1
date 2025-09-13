"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()

  const [activeTab, setActiveTab] = useState<"culture" | "responsibility">("culture")

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab === "culture" || tab === "responsibility") {
      setActiveTab(tab)
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance" suppressHydrationWarning>{t.about.title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto text-pretty" suppressHydrationWarning>{t.about.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <Button
              variant={activeTab === "culture" ? "default" : "ghost"}
              onClick={() => setActiveTab("culture")}
              className="py-4 px-6 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600"
              suppressHydrationWarning
            >
              {t.about.tabs.culture}
            </Button>
            <Button
              variant={activeTab === "responsibility" ? "default" : "ghost"}
              onClick={() => setActiveTab("responsibility")}
              className="py-4 px-6 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600"
              suppressHydrationWarning
            >
              {t.about.tabs.responsibility}
            </Button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === "culture" && (
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" suppressHydrationWarning>{t.about.culture.title}</h2>
            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center font-medium text-blue-800" suppressHydrationWarning>
                "{t.about.culture.mission}"
              </p>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p suppressHydrationWarning>{t.about.culture.content.paragraph1}</p>
              <p suppressHydrationWarning>{t.about.culture.content.paragraph2}</p>
              <p suppressHydrationWarning>{t.about.culture.content.paragraph3}</p>
            </div>
          </div>
        )}

        {activeTab === "responsibility" && (
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" suppressHydrationWarning>{t.about.responsibility.title}</h2>
            <div className="space-y-8">
              {t.about.responsibility.sections.map((section, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4" suppressHydrationWarning>{section.title}</h3>
                  <p className="text-gray-700 leading-relaxed" suppressHydrationWarning>{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
