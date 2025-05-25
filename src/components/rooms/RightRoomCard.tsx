"use client"
import React from "react"
import ComponentCard from "../common/ComponentCard"
import InfoContract from "./right-card/InfoContract"
import InfoRoom from "./right-card/InfoRoom"
import InfoMeter from "./right-card/InfoMeter"
import CustomerAccordion from "./right-card/CustomerAccordion"
import ServiceAccordion from "./right-card/ServiceAccordion"

interface Room {
  id: number
  name: string
  area: number
  price: number
  assets: string
}

interface RightRoomCardProps {
  room: Room | null // ✅ nhận room từ props
}

function RightRoomCard({ room }: RightRoomCardProps) {
  if (!room) {
    return (
      <ComponentCard title="Phòng">
        <p className="text-gray-500 text-sm">Chưa chọn phòng</p>
      </ComponentCard>
    )
  }

  return (
    <ComponentCard text="Đơn vị thuê:" title={`Phòng ${room.name}`}>
      <div className="space-y-2 text-sm text-gray-700">
        <InfoRoom />
        <InfoContract />
        <CustomerAccordion />
        <ServiceAccordion />
        <InfoMeter />
      </div>
    </ComponentCard>
  )
}

export default RightRoomCard
