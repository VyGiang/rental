"use client"
import React, { useState } from "react"
import ComponentCard from "../common/ComponentCard"
import { BoxIcon, HorizontaLDots, Mark, PlusCircle } from "@/icons"
import Button from "../ui/button/Button"
import { Dropdown } from "../ui/dropdown/Dropdown"
import { DropdownItem } from "../ui/dropdown/DropdownItem"
import { useRouter } from "next/navigation"

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

interface LeftRoomCardProps {
  building: Building
  onRoomSelect: (room: Room) => void
}

function LeftRoomCard({ building, onRoomSelect }: LeftRoomCardProps) {
  const [openDropdownRoomId, setOpenDropdownRoomId] = useState<number | null>(
    null
  )

  function toggleDropdown(roomId: number) {
    setOpenDropdownRoomId((prev) => (prev === roomId ? null : roomId))
  }

  function closeDropdown() {
    setOpenDropdownRoomId(null)
  }
  const router = useRouter()

  const handleAddRoom = () => {
    router.push("/rooms/addRoom")
  }

  const handleAddContract = () => {
    router.push("/contracts/addContract")
  }

  return (
    <ComponentCard icon={<Mark />} title={building.address}>
      <div className="space-y-4">
        {/* 1. Nhóm trạng thái */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
          <div className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 text-sm text-center font-medium rounded-full py-2">
            Tất cả
          </div>
          <div className="bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300 text-sm text-center font-medium rounded-full py-2">
            Đã thuê
          </div>

          <div className="bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300 text-sm text-center font-medium rounded-full py-2">
            Trống
          </div>
          <div className="bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300 text-sm text-center font-medium rounded-full py-2">
            Tạm ngưng
          </div>
        </div>

        {/* 2. Danh sách tầng và phòng */}
        <div className="space-y-3">
          {building.floors.map((floor) => {
            const totalRooms = floor.rooms.length
            const rented = Math.floor(totalRooms / 2) // ví dụ giả định
            const percent = Math.round((rented / totalRooms) * 100)

            return (
              <div key={floor.floorNumber}>
                {/* Card tầng */}
                <div className="border rounded-xl px-3 py-2 text-center space-y-1 w-[180px] dark:border-gray-700">
                  <div className="text-base font-bold dark:text-white">
                    Tầng {floor.floorNumber}
                  </div>

                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div
                      className="h-full"
                      style={{
                        backgroundColor: "#73BA77",
                        width: `${percent}%`,
                      }}
                    />
                  </div>

                  <Button
                    size="md"
                    variant="primary"
                    startIcon={<PlusCircle />}
                    className="w-full h-12 text-sm font-semibold whitespace-nowrap rounded-xl"
                    onClick={handleAddRoom}
                  >
                    Thêm phòng
                  </Button>
                </div>

                {/* Danh sách phòng */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-3">
                  {floor.rooms.map((room) => (
                    <div
                      key={room.id}
                      className="relative rounded-2xl border border-gray-300 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-2 w-full shadow-sm"
                    >
                      {/* Nút 3 chấm góc phải */}
                      <div className="absolute top-1 right-2">
                        <div className="relative inline-block">
                          <button
                            onClick={() => toggleDropdown(room.id)}
                            className="dropdown-toggle"
                          >
                            <HorizontaLDots className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
                          </button>

                          {/* ✅ Sửa vị trí dropdown tại đây */}
                          {openDropdownRoomId === room.id && (
                            <div className="absolute -right-30 -mt-1 z-50">
                              <Dropdown
                                isOpen
                                onClose={closeDropdown}
                                className="w-40 p-2"
                              >
                                <DropdownItem onItemClick={closeDropdown}>
                                  Chuyển trạng thái
                                </DropdownItem>
                                <DropdownItem
                                  onItemClick={() => {
                                    closeDropdown()
                                    handleAddContract()
                                  }}
                                >
                                  Tạo hợp đồng
                                </DropdownItem>
                                <DropdownItem onItemClick={closeDropdown}>
                                  Xuất hóa đơn
                                </DropdownItem>
                                <DropdownItem onItemClick={closeDropdown}>
                                  Sửa phòng
                                </DropdownItem>
                                <DropdownItem
                                  onItemClick={closeDropdown}
                                  className="text-red-300"
                                >
                                  Xóa phòng
                                </DropdownItem>
                              </Dropdown>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Nút phòng */}
                      <button
                        onClick={() => onRoomSelect(room)}
                        className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-medium text-sm py-2 px-2 rounded-xl flex items-center justify-center gap-2"
                      >
                        <BoxIcon className="w-5 h-5" /> {/* ✅ tăng icon */}
                        <span className="text-base font-semibold">
                          {room.name}
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </ComponentCard>
  )
}

export default LeftRoomCard
