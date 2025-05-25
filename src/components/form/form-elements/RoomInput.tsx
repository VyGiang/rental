"use client"
import React, { useState } from "react"
import ComponentCard from "../../common/ComponentCard"
import Label from "../Label"
import Input from "../input/InputField"
import Select from "../Select"
import { ChevronDownIcon } from "../../../icons"
import buildings from "../../../../data/buildings.json"
import TextArea from "../input/TextArea"

export default function RoomInput() {
  const floorOptions = Array.from(
    new Set(buildings.flatMap((b) => b.floors.map((f) => f.floorNumber)))
  ).map((num) => ({
    value: num.toString(),
    label: `Tầng ${num}`,
  }))

  const [message, setMessage] = useState("")

  const handleSelectChange = (value: string) => {
    console.log("Selected floor:", value)
  }

  return (
    <ComponentCard title="Thông tin phòng">
      <div className="space-y-6">
        <div>
          <Label>
            Tên Phòng <span className="text-red-700">*</span>
          </Label>
          <Input type="text" className="w-full" />
        </div>
        <div>
          <Label>
            Tầng <span className="text-red-700">*</span>
          </Label>
          <div className="relative">
            <Select
              options={floorOptions}
              placeholder="Chọn tầng"
              onChange={handleSelectChange}
              className="dark:bg-dark-900"
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <ChevronDownIcon />
            </span>
          </div>
        </div>
        <div>
          <Label>
            Diện tích(m2) <span className="text-red-700">*</span>
          </Label>
          <Input type="number " className="w-full" />
        </div>
        <div>
          <Label>
            Giá thuê <span className="text-red-700">*</span>
          </Label>
          <Input type="number " className="w-full" />
        </div>
        <div>
          <Label>Tài sản</Label>
          <TextArea
            value={message}
            onChange={(value) => setMessage(value)}
            rows={6}
          />
        </div>

        {/* Các input khác giữ nguyên */}
      </div>
    </ComponentCard>
  )
}
