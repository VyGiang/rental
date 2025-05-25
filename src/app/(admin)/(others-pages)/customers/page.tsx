import CustomersList from "@/components/customers/CustomersList"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Next.js Customers | RenAdmin ",
  description: "This is Next.js Customers page for RenAdmin ",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function Customers() {
  return (
    <div>
      <div className="grid grid-cols-1">
        <CustomersList />
      </div>
    </div>
  )
}
