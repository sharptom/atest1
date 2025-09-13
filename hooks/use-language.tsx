"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, getTranslation, type Translations } from "@/lib/i18n"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // 服务端和客户端都使用相同的默认语言，避免水合错误
  const [language, setLanguage] = useState<Language>("zh-TW")
  const [isHydrated, setIsHydrated] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setIsHydrated(true)
    
    // 水合完成后，从localStorage读取保存的语言设置
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["zh-TW", "zh-CN", "en"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    } else {
      // 如果没有保存的语言设置，使用繁体中文作为默认语言
      setLanguage("zh-TW")
    }
  }, [])

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("language", language)
    }
  }, [language, isHydrated])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang) // 保存语言设置到localStorage
  }

  const t = getTranslation(language)

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
