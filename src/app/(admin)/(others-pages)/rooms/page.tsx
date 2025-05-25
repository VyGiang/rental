import RoomtHeaderCard from "@/components/rooms/RoomHeaderCard"
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
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">
          Quản lí phòng
        </h2>
      </div>
      <div className="grid grid-cols-1">
        <RoomtHeaderCard />
      </div>
    </div>
  )
}
