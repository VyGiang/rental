import BuildingsList from "@/components/buildings/BuildingList"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Next.js Buildings | RenAdmin - Next.js Dashboard Template",
  description: "This is  Buildings page for RenAdmin ",
  // other metadata
}
export default function page() {
  return (
    <div>
      <div className="grid grid-cols-1">
        <BuildingsList />
      </div>
    </div>
  )
}
