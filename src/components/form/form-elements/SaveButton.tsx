import Button from "@/components/ui/button/Button"
import React from "react"

const SaveButton = () => {
  return (
    <div className="w-full flex justify-end">
      <div className="flex flex-col sm:flex-row gap-2">
        <Button size="sm" variant="primary">
          Hủy
        </Button>
        <Button size="sm" variant="primary">
          Lưu thông tin
        </Button>
      </div>
    </div>
  )
}

export default SaveButton
