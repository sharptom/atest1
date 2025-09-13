"use client"

import React from "react"
import { useLanguage } from "@/hooks/use-language"

export function DynamicHtmlLang({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()
  
  React.useEffect(() => {
    document.documentElement.lang = language
  }, [language])
  
  return <>{children}</>
}