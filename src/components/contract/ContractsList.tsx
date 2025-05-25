"use client"
import React from "react"
import { useRouter } from "next/navigation"
import Button from "@/components/ui/button/Button"
import ComponentCard from "../common/ComponentCard"
import { Contracts, PlusCircle } from "@/icons"
import ContractTable from "./ContractTable"

export default function ContractsList() {
  const router = useRouter()

  const handleAddContract = () => {
    router.push("/contracts/addContract")
  }

  return (
    <ComponentCard
      icon={<Contracts />}
      title={
        <span className="text-2xl font-bold text-black">
          Danh sách hợp đồng
        </span>
      }
      rightAction={
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button
            size="sm"
            variant="primary"
            startIcon={<PlusCircle />}
            onClick={handleAddContract}
          >
            Thêm hợp đồng
          </Button>
        </div>
      }
    >
      <ContractTable />
    </ComponentCard>
  )
}
