import type React from "react"
import { MainHeader } from "@/components/main-header"
import { GlobalFooter } from "@/components/global-footer"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainHeader />
      <main className="pt-[100px]">{children}</main>
      <GlobalFooter />
    </>
  )
}
