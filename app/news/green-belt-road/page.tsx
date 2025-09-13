"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"
import { Calendar, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { translations } from "@/lib/i18n"

export default function GreenBeltRoadPage() {
  const { t } = useLanguage()

  const newsContent = {
    "zh-TW": {
      title: "綠色「一帶一路」合作成果豐碩",
      subtitle: "推進綠色發展理念，促進可持續發展，為全球環境治理貢獻中國智慧。",
      content: `
        綠色發展已成為「一帶一路」建設的重要主題。近年來，中國與沿線國家在綠色能源、環境保護、氣候變化應對等領域的合作不斷深化，綠色「一帶一路」建設取得了豐碩成果，為全球可持續發展注入了新動能。

        在綠色能源合作方面，中國企業積極參與沿線國家的太陽能、風能、水電等清潔能源項目建設。截至目前，中國在「一帶一路」沿線國家投資建設的清潔能源項目總裝機容量超過4000萬千瓦，為當地提供了清潔、可靠的電力供應，有效減少了碳排放。

        環境保護合作成效顯著，中國與多個國家开展了生態修復、污染治理、生物多樣性保護等項目。通過技術轉移和經驗分享，幫助沿線國家提升環境治理能力，改善生態環境質量。同時，綠色金融合作不斷深化，為綠色項目提供了有力的資金支持。

        在應對氣候變化方面，各國攜手推進低碳發展，共同制定減排目標和行動計劃。綠色技術創新合作日益活躍，在節能環保、新能源汽車、綠色建築等領域形成了一批合作成果。這些努力不僅促進了經濟發展，也為應對全球氣候挑戰作出了積極貢獻。

        展望未來，綠色「一帶一路」將繼續堅持生態優先、綠色發展的理念，推動更多綠色項目落地實施，為建設清潔美麗的世界貢獻更大力量。
      `,
      category: "綠色發展",
      date: "2024-04-05",
    },
    "zh-CN": {
      title: '绿色"一带一路"合作成果丰硕',
      subtitle: "推进绿色发展理念，促进可持续发展，为全球环境治理贡献中国智慧。",
      content: `
        绿色发展已成为"一带一路"建设的重要主题。近年来，中国与沿线国家在绿色能源、环境保护、气候变化应对等领域的合作不断深化，绿色"一带一路"建设取得了丰硕成果，为全球可持续发展注入了新动能。

        在绿色能源合作方面，中国企业积极参与沿线国家的太阳能、风能、水电等清洁能源项目建设。截至目前，中国在"一带一路"沿线国家投资建设的清洁能源项目总装机容量超过4000万千瓦，为当地提供了清洁、可靠的电力供应，有效减少了碳排放。

        环境保护合作成效显著，中国与多个国家开展了生态修复、污染治理、生物多样性保护等项目。通过技术转移和经验分享，帮助沿线国家提升环境治理能力，改善生态环境质量。同时，绿色金融合作不断深化，为绿色项目提供了有力的资金支持。

        在应对气候变化方面，各国携手推进低碳发展，共同制定减排目标和行动计划。绿色技术创新合作日益活跃，在节能环保、新能源汽车、绿色建筑等领域形成了一批合作成果。这些努力不仅促进了经济发展，也为应对全球气候挑战作出了积极贡献。

        展望未来，绿色"一带一路"将继续坚持生态优先、绿色发展的理念，推动更多绿色项目落地实施，为建设清洁美丽的世界贡献更大力量。
      `,
      category: "绿色发展",
      date: "2024-04-05",
    },
    en: {
      title: "Green Belt and Road Cooperation Yields Fruitful Results",
      subtitle:
        "Promoting green development concepts and sustainable development, contributing Chinese wisdom to global environmental governance.",
      content: `
        Green development has become an important theme of Belt and Road construction. In recent years, cooperation between China and countries along the route in green energy, environmental protection, climate change response and other fields has continued to deepen. Green Belt and Road construction has achieved fruitful results, injecting new momentum into global sustainable development.

        In terms of green energy cooperation, Chinese enterprises actively participate in the construction of solar, wind, hydroelectric and other clean energy projects in countries along the route. So far, the total installed capacity of clean energy projects invested and built by China in Belt and Road countries exceeds 40 million kilowatts, providing clean and reliable power supply for local areas and effectively reducing carbon emissions.

        Environmental protection cooperation has achieved remarkable results. China has carried out ecological restoration, pollution control, biodiversity protection and other projects with multiple countries. Through technology transfer and experience sharing, it has helped countries along the route improve their environmental governance capabilities and improve ecological environment quality. At the same time, green finance cooperation continues to deepen, providing strong financial support for green projects.

        In responding to climate change, countries work together to promote low-carbon development and jointly formulate emission reduction targets and action plans. Green technology innovation cooperation is increasingly active, forming a number of cooperation results in energy conservation and environmental protection, new energy vehicles, green buildings and other fields. These efforts not only promote economic development but also make positive contributions to addressing global climate challenges.

        Looking ahead, the Green Belt and Road will continue to adhere to the concept of ecological priority and green development, promote the implementation of more green projects, and contribute greater strength to building a clean and beautiful world.
      `,
      category: "Green Development",
      date: "2024-04-05",
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
