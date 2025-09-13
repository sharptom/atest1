import { redirect } from "next/navigation"

export default function ResponsibilityPage() {
  // 服务端重定向到关于我们页面并显示社会责任页签
  redirect("/about?tab=responsibility")
}
