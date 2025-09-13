"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"
import { Calendar, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { translations } from "@/lib/i18n"

export default function BeltRoad10thAnniversaryPage() {
  const { t } = useLanguage()

  const newsContent = {
    "zh-TW": {
      title: "「一帶一路」倡議十周年：成就與展望",
      subtitle: "回顧十年來「一帶一路」建設取得的重大成就，展望未來發展前景和合作機遇。",
      content: `
        十年前，習近平主席提出了「一帶一路」倡議，這一偉大構想如今已成為推動全球發展的重要引擎。回顧過去十年，「一帶一路」建設取得了舉世矚目的成就，為世界各國帶來了實實在在的發展機遇。

        在基礎設施建設方面，「一帶一路」項目遍布全球，從中歐班列的穩定運行到雅萬高鐵的成功通車，從比雷埃夫斯港的華麗轉身到瓜达尔港的蓬勃發展，一個個標誌性工程見證了互聯互通的偉大成就。這些項目不僅改善了當地的基礎設施條件，更為經濟發展注入了強勁動力。

        在貿易投資領域，「一帶一路」合作夥伴貿易額持續增長，投資合作不斷深化。數字顯示，中國與「一帶一路」沿線國家貿易額已超過19萬億美元，為全球經濟復甦和發展作出了重要貢獻。同時，綠色發展理念深入人心，綠色「一帶一路」建設成果豐碩。

        展望未來，「一帶一路」建設將繼續秉承共商共建共享原則，推動更高質量、更高標準的合作。數字絲綢之路、健康絲綢之路、綠色絲綢之路等新興合作領域將為全球發展開闢新的路徑，為構建人類命運共同體貢獻更大力量。
      `,
      category: "重要新聞",
      date: "2024-01-15",
    },
    "zh-CN": {
      title: '"一带一路"倡议十周年：成就与展望',
      subtitle: '回顾十年来"一带一路"建设取得的重大成就，展望未来发展前景和合作机遇。',
      content: `
        十年前，习近平主席提出了"一带一路"倡议，这一伟大构想如今已成为推动全球发展的重要引擎。回顾过去十年，"一带一路"建设取得了举世瞩目的成就，为世界各国带来了实实在在的发展机遇。

        在基础设施建设方面，"一带一路"项目遍布全球，从中欧班列的稳定运行到雅万高铁的成功通车，从比雷埃夫斯港的华丽转身到瓜达尔港的蓬勃发展，一个个标志性工程见证了互联互通的伟大成就。这些项目不仅改善了当地的基础设施条件，更为经济发展注入了强劲动力。

        在贸易投资领域，"一带一路"合作伙伴贸易额持续增长，投资合作不断深化。数字显示，中国与"一带一路"沿线国家贸易额已超过19万亿美元，为全球经济复苏和发展作出了重要贡献。同时，绿色发展理念深入人心，绿色"一带一路"建设成果丰硕。

        展望未来，"一带一路"建设将继续秉承共商共建共享原则，推动更高质量、更高标准的合作。数字丝绸之路、健康丝绸之路、绿色丝绸之路等新兴合作领域将为全球发展开辟新的路径，为构建人类命运共同体贡献更大力量。
      `,
      category: "重要新闻",
      date: "2024-01-15",
    },
    en: {
      title: "Belt and Road Initiative 10th Anniversary: Achievements and Prospects",
      subtitle:
        "Reviewing the major achievements of Belt and Road construction over the past decade and looking forward to future development prospects and cooperation opportunities.",
      content: `
        Ten years ago, President Xi Jinping proposed the Belt and Road Initiative, a great vision that has now become an important engine for promoting global development. Looking back over the past decade, Belt and Road construction has achieved remarkable achievements, bringing tangible development opportunities to countries around the world.

        In terms of infrastructure construction, Belt and Road projects are spread across the globe, from the stable operation of China-Europe Railway Express to the successful opening of the Jakarta-Bandung High-Speed Railway, from the magnificent transformation of Piraeus Port to the vigorous development of Gwadar Port. These landmark projects witness the great achievements of connectivity and not only improve local infrastructure conditions but also inject strong momentum into economic development.

        In the field of trade and investment, trade volume between Belt and Road cooperation partners continues to grow, and investment cooperation continues to deepen. Data shows that trade between China and Belt and Road countries has exceeded $19 trillion, making important contributions to global economic recovery and development. At the same time, the concept of green development has taken deep root, and the construction of a green Belt and Road has yielded fruitful results.

        Looking ahead, Belt and Road construction will continue to uphold the principle of extensive consultation, joint contribution and shared benefits, promoting higher quality and higher standard cooperation. Emerging cooperation areas such as the Digital Silk Road, Health Silk Road, and Green Silk Road will open new paths for global development and contribute greater strength to building a community with a shared future for mankind.
      `,
      category: "Important News",
      date: "2024-01-15",
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
