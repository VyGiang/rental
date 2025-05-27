import DropzoneComponent from "@/components/form/form-elements/DropZone"
import RoomInput from "@/components/form/form-elements/RoomInput"
import SaveButton from "@/components/form/form-elements/SaveButton"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Next.js Add Room Form  | RenAdmin",
  description: "This is Add Room Form page for RenAdmin ",
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
        Chỉnh sửa phòng
      </h2>
      <div className="grid grid-cols-1 ">
        <div className="space-y-6">
          <RoomInput />
          <DropzoneComponent />
          <SaveButton />
        </div>
      </div>
    </div>
  )
}
