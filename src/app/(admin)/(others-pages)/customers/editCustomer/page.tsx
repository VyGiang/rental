import CustomerInfoInput from "@/components/form/form-elements/CustomerInfoInput"
import DropzoneComponent from "@/components/form/form-elements/DropZone"
import PaymentInputs from "@/components/form/form-elements/PaymentInput"
import SaveButton from "@/components/form/form-elements/SaveButton"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Next.js Add Customer Form  | RenAdmin",
  description: "This is Add Customer Form page for RenAdmin ",
  icons: {
    icon: "/favicon.ico",
  },
  // other metadata
}
export default function page() {
  return (
    <div>
      <h2
        className="text-lg font-semibold text-gray-800 dark:text-white/90 pb-4"
        x-text="pageName"
      >
        Chỉnh sửa khách hàng
      </h2>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <CustomerInfoInput />
        </div>
        <div className="space-y-6">
          <PaymentInputs />
          <DropzoneComponent title="Hình CCCD" />
          <SaveButton />
        </div>
      </div>
    </div>
  )
}
