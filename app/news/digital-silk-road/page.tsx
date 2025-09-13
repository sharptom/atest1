"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"
import { Calendar, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { translations } from "@/lib/i18n"

export default function DigitalSilkRoadPage() {
  const { t } = useLanguage()

  const newsContent = {
    "zh-TW": {
      title: "數字絲綢之路建設取得新進展",
      subtitle: "在數字化轉型浪潮下，數字絲綢之路為各國數字經濟發展注入新動力。",
      content: `
        隨著全球數字化轉型步伐的加快，數字絲綢之路建設正成為「一帶一路」合作的新亮點。近年來，中國與沿線國家在數字基礎設施、電子商務、數字支付、智慧城市等領域的合作不斷深化，為各國數字經濟發展注入了強勁動力。

        在數字基礎設施建設方面，中國企業積極參與沿線國家的5G網絡、數據中心、海底光纜等項目建設。截至目前，中國已與多個國家簽署了數字經濟合作協議，共同推進數字基礎設施的互聯互通。這些項目不僅提升了當地的數字化水平，也為數字經濟的發展奠定了堅實基礎。

        電子商務合作成果顯著，跨境電商平台為中小企業提供了更多參與國際貿易的機會。數字支付系統的推廣應用，極大地便利了跨境貿易和投資。同時，智慧城市建設項目在多個國家落地實施，通過數字技術提升城市管理效率和民生服務水平。

        展望未來，數字絲綢之路將繼續發揮橋樑紐帶作用，推動數字技術創新合作，促進數字經濟規則對接，為構建開放、公平、非歧視的數字經濟環境貢獻力量。通過深化數字領域合作，各國將共同分享數字化發展紅利，實現互利共贏。
      `,
      category: "數字經濟",
      date: "2024-03-10",
    },
    "zh-CN": {
      title: "数字丝绸之路建设取得新进展",
      subtitle: "在数字化转型浪潮下，数字丝绸之路为各国数字经济发展注入新动力。",
      content: `
        随着全球数字化转型步伐的加快，数字丝绸之路建设正成为"一带一路"合作的新亮点。近年来，中国与沿线国家在数字基础设施、电子商务、数字支付、智慧城市等领域的合作不断深化，为各国数字经济发展注入了强劲动力。

        在数字基础设施建设方面，中国企业积极参与沿线国家的5G网络、数据中心、海底光缆等项目建设。截至目前，中国已与多个国家签署了数字经济合作协议，共同推进数字基础设施的互联互通。这些项目不仅提升了当地的数字化水平，也为数字经济的发展奠定了坚实基础。

        电子商务合作成果显著，跨境电商平台为中小企业提供了更多参与国际贸易的机会。数字支付系统的推广应用，极大地便利了跨境贸易和投资。同时，智慧城市建设项目在多个国家落地实施，通过数字技术提升城市管理效率和民生服务水平。

        展望未来，数字丝绸之路将继续发挥桥梁纽带作用，推动数字技术创新合作，促进数字经济规则对接，为构建开放、公平、非歧视的数字经济环境贡献力量。通过深化数字领域合作，各国将共同分享数字化发展红利，实现互利共赢。
      `,
      category: "数字经济",
      date: "2024-03-10",
    },
    en: {
      title: "Digital Silk Road Construction Achieves New Progress",
      subtitle:
        "In the wave of digital transformation, the Digital Silk Road injects new momentum into the digital economic development of various countries.",
      content: `
        With the acceleration of global digital transformation, Digital Silk Road construction is becoming a new highlight of Belt and Road cooperation. In recent years, cooperation between China and countries along the route in digital infrastructure, e-commerce, digital payments, smart cities and other fields has continued to deepen, injecting strong momentum into the digital economic development of various countries.

        In terms of digital infrastructure construction, Chinese enterprises actively participate in the construction of 5G networks, data centers, submarine optical cables and other projects in countries along the route. So far, China has signed digital economy cooperation agreements with multiple countries to jointly promote the interconnection of digital infrastructure. These projects not only improve the local digitalization level but also lay a solid foundation for the development of the digital economy.

        E-commerce cooperation has achieved remarkable results, with cross-border e-commerce platforms providing more opportunities for small and medium-sized enterprises to participate in international trade. The promotion and application of digital payment systems have greatly facilitated cross-border trade and investment. At the same time, smart city construction projects have been implemented in multiple countries, improving urban management efficiency and public service levels through digital technology.

        Looking ahead, the Digital Silk Road will continue to play a bridging role, promote digital technology innovation cooperation, facilitate the alignment of digital economy rules, and contribute to building an open, fair, and non-discriminatory digital economy environment. Through deepening cooperation in the digital field, countries will jointly share the dividends of digital development and achieve mutual benefit and win-win results.
      `,
      category: "Digital Economy",
      date: "2024-03-10",
    },
  }

  const currentLang = t === translations["zh-TW"] ? "zh-TW" : t === translations["zh-CN"] ? "zh-CN" : "en"
  const content = newsContent[currentLang]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回首页
            </Button>
          </Link>

          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded">
                  {content.category}
                </span>
                <div className="flex items-center text-sm text-slate-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {content.date}
                </div>
              </div>

              <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">{content.title}</h1>

              <p className="text-xl text-slate-600 leading-relaxed">{content.subtitle}</p>
            </div>

            <div className="text-slate-700 leading-relaxed space-y-6">
              {content.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-base leading-7">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
