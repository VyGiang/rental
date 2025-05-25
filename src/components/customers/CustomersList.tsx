"use client"
import React from "react"
import { useRouter } from "next/navigation"
import Button from "@/components/ui/button/Button"
import ComponentCard from "../common/ComponentCard"
import { Contracts, PlusCircle, TrashBinIcon } from "@/icons"
import CustomerTable from "./CustomerTable"

function CustomerList() {
  const router = useRouter()

  const handleAddCustomer = () => {
    router.push("/customers/addCustomer")
  }

  return (
    <ComponentCard
      icon={<Contracts />}
      title={
        <span className="text-2xl font-bold text-black">Hồ sơ khách hàng</span>
      }
      rightAction={
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button
            size="sm"
            variant="primary"
            startIcon={<PlusCircle />}
            onClick={handleAddCustomer}
          >
            Thêm khách hàng
          </Button>
          <Button size="sm" variant="primary" startIcon={<TrashBinIcon />}>
            Xóa
          </Button>
        </div>
      }
    >
      <CustomerTable />
    </ComponentCard>
  )
}

export default CustomerList
