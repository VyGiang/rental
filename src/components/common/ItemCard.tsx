import React, { useState } from "react"
import {
  BuildingColor,
  CheckCircleIcon,
  MoreDotIcon,
  Rental,
  Rented,
  FloorIcon,
  Emptyicon,
} from "@/icons"

import { Dropdown } from "../ui/dropdown/Dropdown"
import { DropdownItem } from "../ui/dropdown/DropdownItem"

interface ItemCardProps {
  name: string
  address: string
  progress: number
  stats: {
    floor: number
    rentalUnits: number
    rented: number
    vacant: number
  }
}

const ItemCard: React.FC<ItemCardProps> = ({
  name,
  address,
  progress,
  stats,
}) => {
  const statItems = [
    {
      icon: <FloorIcon />,
      value: stats.floor,
      label: "Tầng",
    },
    {
      icon: <Rental />,
      value: stats.rentalUnits,
      label: "Số phòng",
    },
    {
      icon: <Rented />,
      value: stats.rented,
      label: "Đã thuê",
    },
    {
      icon: <Emptyicon />,
      value: stats.vacant,
      label: "Trống",
    },
  ]
  const [isOpen, setIsOpen] = useState(false)

  function toggleDropdown() {
    setIsOpen(!isOpen)
  }

  function closeDropdown() {
    setIsOpen(false)
  }

  return (
    <div className="relative z-10 rounded-2xl border border-gray-300 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-4 shadow-md w-full max-w-sm">
      {/* w-full max-w-sm:Chiều rộng tối đa theo cha,	Nhưng không bao giờ vượt quá 384px  */}
      {/* Header */}
      <div className="grid grid-cols-[1fr_auto] gap-2 items-start">
        {/* 1fr: Cột đầu tiên chiếm phần còn lại (flexible width). Đây là nơi bạn để phần title + address.
          auto: Cột thứ hai chỉ chiếm đúng kích thước nội dung bên trong. Đây là nơi bạn để nút MoreDotIcon. */}
        <div className="min-w-0">
          {/* min-w-0	:Cho phép text trong Grid/Flex co lại (Bắt buộc có)*/}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-1 truncate ">
            <span className="shrink-0">
              <BuildingColor />
            </span>
            {/* truncate – Tự động cắt text + thêm ... */}
            <span className="truncate">{name}</span>
            <span className="shrink-0">
              <CheckCircleIcon />
            </span>
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
            {address}
          </p>
        </div>

        <div className="relative inline-block">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
          </button>
          <Dropdown
            isOpen={isOpen}
            onClose={closeDropdown}
            className="w-40 p-2"
          >
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Chỉnh sửa
            </DropdownItem>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Xóa
            </DropdownItem>
          </Dropdown>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-3">
        <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded">
          <div
            className="absolute top-0 left-0 h-2 bg-brand-500 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-brand-500 dark:text-brand-400 mt-1">
          {progress}%
        </p>
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-4 gap-2 text-center">
        {statItems.map((stat, index) => (
          <div key={index}>
            <div className={`mx-auto  flex items-center justify-center `}>
              <div className="w-15 h-15">{stat.icon}</div>
            </div>
            <p className="text-lg font-bold mt-1 text-gray-800 dark:text-white">
              {stat.value}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemCard
