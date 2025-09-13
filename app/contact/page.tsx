"use client"

import { useLanguage } from "@/hooks/use-language"
import { Mail, MapPin } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance" suppressHydrationWarning>{t.contact.title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto text-pretty" suppressHydrationWarning>{t.contact.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <div className="text-2xl font-bold text-blue-600 mb-4">BRI</div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8" suppressHydrationWarning>{t.footer.description}</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2" suppressHydrationWarning>{t.contact.addressTitle}</h3>
                <p className="text-gray-600" suppressHydrationWarning>{t.footer.address}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2" suppressHydrationWarning>{t.contact.emailTitle}</h3>
                <p className="text-gray-600" suppressHydrationWarning>{t.footer.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
