"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import type { Language } from "@/lib/i18n"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  const languages: { code: Language; name: string }[] = [
    { code: "zh-TW", name: "繁體中文" },
    { code: "zh-CN", name: "简体中文" },
    { code: "en", name: "English" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-2 text-slate-300 hover:text-white hover:bg-slate-700"
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm" suppressHydrationWarning>{currentLanguage?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border border-slate-200">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-slate-50"}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
