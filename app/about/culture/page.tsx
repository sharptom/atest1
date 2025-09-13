"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CulturePage() {
  const router = useRouter()

  useEffect(() => {
    // 重定向到关于我们页面并显示企业文化页签
    router.replace("/about?tab=culture")
  }, [router])

  return null
}
