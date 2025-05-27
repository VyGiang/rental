import ContractInput from "@/components/form/form-elements/ContractInput"
import CustomerInput from "@/components/form/form-elements/CustomerInput"
import SaveButton from "@/components/form/form-elements/SaveButton"
import ServiceInput from "@/components/form/form-elements/ServiceInput"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Next.js Add Contract Form  | RenAdmin",
  description: "This is Add Contract Form page for RenAdmin ",
  icons: {
    icon: "/favicon.ico",
  },
  // other metadata
}
export default function page() {
  return (
    <div>
      <h2
        className="text-xl font-semibold text-gray-800 dark:text-white/90 pb-4"
        x-text="pageName"
      >
        Chỉnh sửa hợp đồng
      </h2>
      <div className="grid grid-cols-1">
        <div className="space-y-6">
          <ContractInput />
          <CustomerInput />
          <ServiceInput />
          <SaveButton />
        </div>
      </div>
    </div>
  )
}
