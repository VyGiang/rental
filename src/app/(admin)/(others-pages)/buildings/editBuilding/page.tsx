import BuildingInput from "@/components/form/form-elements/BuildingInput"
import PaymentInputs from "@/components/form/form-elements/PaymentInput"
import SaveButton from "@/components/form/form-elements/SaveButton"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Next.js Add Building Form  | RenAdmin",
  description: "This is Add Building Form page for RenAdmin ",
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
        Chỉnh sửa tòa nhà
      </h2>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BuildingInput />
        </div>
        <div className="space-y-6">
          <PaymentInputs />
          <SaveButton />
        </div>
      </div>
    </div>
  )
}
