import ContractsList from "@/components/contract/ContractsList"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Next.js Rooms | RenAdmin ",
  description: "This is Next.js Rooms page for RenAdmin ",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function Rooms() {
  return (
    <div>
      <div className="grid grid-cols-1">
        <ContractsList />
      </div>
    </div>
  )
}
