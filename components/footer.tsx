"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function Footer() {
  const { t } = useLanguage() // 使用多语言hook

  const footerSections = [
    { title: t.footer.navTitles.news, links: t.footer.links.news },
    { title: t.footer.navTitles.about, links: t.footer.links.about },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-8">
          {/* Company info - 占用4列 */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <div className="text-2xl font-bold text-blue-400 mb-2" suppressHydrationWarning>{t.footer.companyName}</div>
              <p className="text-slate-300 text-sm leading-relaxed" suppressHydrationWarning>
                {t.footer.description} {/* 使用翻译文本 */}
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300" suppressHydrationWarning>{t.footer.address}</span> {/* 使用翻译文本 */}
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300" suppressHydrationWarning>{t.footer.email}</span> {/* 使用翻译文本 */}
              </div>
            </div>
          </div>

          {/* 空白间距 - 占用4列 */}
          <div className="lg:col-span-4"></div>

          {/* Footer links - 每个占用2列，总共4列，向右对齐 */}
          <div className="lg:col-span-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-white mb-4" suppressHydrationWarning>{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => {
                    let href = "#"
                    if (section.title === t.footer.navTitles.about) {
                      if (link === "社会责任" || link === "社會責任" || link === "Social Responsibility") {
                        href = "/about?tab=responsibility"
                      } else {
                        href = "/about?tab=culture"
                      }
                    } else if (section.title === t.footer.navTitles.news) {
                      if (link === "活动资讯" || link === "活動資訊" || link === "Event News") {
                        href = "/news"
                      }
                    }
                    return (
                      <li key={link}>
                        <a
                          href={href}
                          className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                          suppressHydrationWarning
                        >
                          {link}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social media and newsletter */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-slate-300 text-sm" suppressHydrationWarning>{t.footer.followUs}</span> {/* 使用翻译文本 */}
              <div className="flex space-x-3">
                {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
                  <Button key={index} variant="ghost" size="sm" className="text-slate-400 hover:text-blue-400">
                    <Icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <p className="text-slate-400 text-sm" suppressHydrationWarning>{t.footer.copyright}</p> {/* 使用翻译文本 */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
