"use client"
import ComponentCard from "@/components/common/ComponentCard"
import Button from "@/components/ui/button/Button"
import { PlusCircle } from "@/icons"
import React from "react"
import CustomerTableInput from "./CustomerTableInput"

function CustomerInput() {
  return (
    <ComponentCard
      title={<span className="text-lg  text-black">Thông tin khách hàng</span>}
      rightAction={
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button size="sm" variant="primary" startIcon={<PlusCircle />}>
            Thêm khách hàng
          </Button>
        </div>
      }
    >
      <CustomerTableInput />
    </ComponentCard>
  )
}

export default CustomerInput
