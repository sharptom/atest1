"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"
import { Calendar, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { translations } from "@/lib/i18n"

export default function ChinaEuropeRailwayPage() {
  const { t } = useLanguage()

  const newsContent = {
    "zh-TW": {
      title: "中歐班列累計開行突破8萬列",
      subtitle: "中歐班列作為「一帶一路」建設的重要載體，為促進中歐貿易往來發揮了重要作用。",
      content: `
        近日，中歐班列累計開行數量正式突破8萬列大關，這一里程碑式的成就標誌著中歐班列在推動「一帶一路」建設中發揮了越來越重要的作用。作為連接亞歐大陸的重要橋樑，中歐班列已成為國際物流的重要通道。

        自2011年首列中歐班列開行以來，這條「鋼鐵駝隊」不斷發展壯大。目前，中歐班列已鋪畫82條運行線路，通達歐洲25個國家的200多個城市，運輸網絡覆蓋亞歐大陸全境。從最初的每週1列到如今的日均超過40列，中歐班列的開行密度和覆蓋範圍實現了跨越式發展。

        在貨物運輸方面，中歐班列承運的商品品類日益豐富，從最初的電子產品、機械設備擴展到汽車、化工產品、農產品、醫療器械等50多個品類。特別是在新冠疫情期間，中歐班列發揮了重要的「生命線」作用，為保障國際供應鏈穩定作出了突出貢獻。

        展望未來，中歐班列將繼續優化運輸組織，提升服務質量，推動數字化轉型，為中歐經貿合作注入新動能。同時，隨著「一帶一路」建設的深入推進，中歐班列有望在更大範圍、更深層次上服務於國際貿易和全球產業鏈供應鏈的穩定發展。
      `,
      category: "交通物流",
      date: "2024-02-20",
    },
    "zh-CN": {
      title: "中欧班列累计开行突破8万列",
      subtitle: '中欧班列作为"一带一路"建设的重要载体，为促进中欧贸易往来发挥了重要作用。',
      content: `
        近日，中欧班列累计开行数量正式突破8万列大关，这一里程碑式的成就标志着中欧班列在推动"一带一路"建设中发挥了越来越重要的作用。作为连接亚欧大陆的重要桥梁，中欧班列已成为国际物流的重要通道。

        自2011年首列中欧班列开行以来，这条"钢铁驼队"不断发展壮大。目前，中欧班列已铺画82条运行线路，通达欧洲25个国家的200多个城市，运输网络覆盖亚欧大陆全境。从最初的每周1列到如今的日均超过40列，中欧班列的开行密度和覆盖范围实现了跨越式发展。

        在货物运输方面，中欧班列承运的商品品类日益丰富，从最初的电子产品、机械设备扩展到汽车、化工产品、农产品、医疗器械等50多个品类。特别是在新冠疫情期间，中欧班列发挥了重要的"生命线"作用，为保障国际供应链稳定作出了突出贡献。

        展望未来，中欧班列将继续优化运输组织，提升服务质量，推动数字化转型，为中欧经贸合作注入新动能。同时，随着"一带一路"建设的深入推进，中欧班列有望在更大范围、更深层次上服务于国际贸易和全球产业链供应链的稳定发展。
      `,
      category: "交通物流",
      date: "2024-02-20",
    },
    en: {
      title: "China-Europe Railway Express Surpasses 80,000 Trips",
      subtitle:
        "As an important carrier of Belt and Road construction, China-Europe Railway Express has played a vital role in promoting China-Europe trade.",
      content: `
        Recently, the cumulative number of China-Europe Railway Express trips officially exceeded 80,000, a milestone achievement that marks the increasingly important role of China-Europe Railway Express in promoting Belt and Road construction. As an important bridge connecting the Eurasian continent, China-Europe Railway Express has become a vital channel for international logistics.

        Since the first China-Europe Railway Express was launched in 2011, this "steel camel caravan" has continued to grow and expand. Currently, China-Europe Railway Express has established 82 operating routes, reaching more than 200 cities in 25 European countries, with a transportation network covering the entire Eurasian continent. From the initial one train per week to the current daily average of more than 40 trains, the operating density and coverage of China-Europe Railway Express have achieved leapfrog development.

        In terms of cargo transportation, the categories of goods carried by China-Europe Railway Express have become increasingly diverse, expanding from the initial electronic products and mechanical equipment to more than 50 categories including automobiles, chemical products, agricultural products, and medical equipment. Particularly during the COVID-19 pandemic, China-Europe Railway Express played an important "lifeline" role, making outstanding contributions to ensuring the stability of international supply chains.

        Looking ahead, China-Europe Railway Express will continue to optimize transportation organization, improve service quality, and promote digital transformation, injecting new momentum into China-Europe economic and trade cooperation. At the same time, with the deepening of Belt and Road construction, China-Europe Railway Express is expected to serve international trade and the stable development of global industrial and supply chains on a larger scale and at a deeper level.
      `,
      category: "Transportation & Logistics",
      date: "2024-02-20",
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
