"use client"
import React from "react"

import Button from "@/components/ui/button/Button"
import ComponentCard from "../common/ComponentCard"
import { Computer, PlusCircle } from "@/icons"

function BuildingsList() {
  return (
    <ComponentCard
      icon={<Computer />}
      title="Quản lí toà nhà"
      rightAction={
        <Button size="sm" variant="primary" startIcon={<PlusCircle />}>
          Thêm tòa nhà
        </Button>
      }
      children={undefined}
    ></ComponentCard>
  )
}

export default BuildingsList
