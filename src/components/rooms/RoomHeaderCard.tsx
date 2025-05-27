"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import buildingsJson from "../../../data/buildings.json"
import { BuildingColor, ChevronDownIcon, PlusCircle } from "@/icons"
import Select from "@/components/form/Select"
import ComponentCard from "../common/ComponentCard"
import Button from "../ui/button/Button"
import LeftRoomCard from "./LeftRoomCard"
import RightRoomCard from "./RightRoomCard"

interface Room {
  id: number
  name: string
  area: number
  price: number
  assets: string
  images: string[]
}

interface Floor {
  floorNumber: number
  rooms: Room[]
}

interface Building {
  id: number
  name: string
  address: string
  floors: Floor[]
}

const buildings: Building[] = buildingsJson

const options = buildings.map((b) => ({
  label: b.name,
  value: b.id.toString(),
}))

export default function RoomtHeaderCard() {
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(
    null
  )
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)

  useEffect(() => {
    const defaultBuilding = buildings.find((b) => b.id === 1)
    if (defaultBuilding) {
      setSelectedBuilding(defaultBuilding)
    }
  }, []) // ← chỉ chạy 1 lần khi component mount

  const handleSelectChange = (value: string) => {
    const selected = buildings.find((b) => b.id.toString() === value)
    if (selected) {
      setSelectedBuilding(selected)
      setSelectedRoom(null) // optional: reset room khi đổi tòa nhà
      setIsSelectOpen(false) // icon quay lại khi chọn xong
    }
  }

  const router = useRouter()

  const handleAddContract = () => {
    router.push("/contracts/addContract")
  }

  return (
    <ComponentCard
      icon={<BuildingColor />}
      title="Tòa nhà"
      leftAction={
        <div className="flex items-center gap-2">
          <div>
            <div
              className="relative"
              tabIndex={-1}
              onFocus={() => setIsSelectOpen(true)}
              onBlur={() => setIsSelectOpen(false)}
            >
              <Select
                options={options}
                placeholder="Chọn tòa nhà"
                onChange={handleSelectChange}
                className="dark:bg-dark-900"
                // Thêm onFocus/onBlur nếu cần
              />
              <span
                className={`absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400 transition-transform duration-200 ${
                  isSelectOpen ? "rotate-180" : ""
                }`}
              >
                <ChevronDownIcon />
              </span>
            </div>
          </div>
        </div>
      }
      rightAction={
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button
            size="sm"
            variant="primary"
            startIcon={<PlusCircle />}
            onClick={handleAddContract}
          >
            Tạo hợp đồng
          </Button>
          <Button size="sm" variant="primary" startIcon={<PlusCircle />}>
            Xuất hóa đơn
          </Button>
        </div>
      }
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          {selectedBuilding && (
            <LeftRoomCard
              building={selectedBuilding}
              onRoomSelect={setSelectedRoom}
            />
          )}
        </div>
        <div>
          <RightRoomCard room={selectedRoom} />
        </div>
      </div>
    </ComponentCard>
  )
}
