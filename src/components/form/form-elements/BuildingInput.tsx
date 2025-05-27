"use client"
import React from "react"
import ComponentCard from "../../common/ComponentCard"
import Label from "../Label"
import Input from "../input/InputField"
import Select from "../Select"
import { ChevronDownIcon } from "../../../icons"

export default function BuildingInput() {
  const options = [
    { value: "tháng", label: "Theo Tháng" },
    { value: "m3", label: "Theo m3" },
  ]
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value)
  }
  return (
    <ComponentCard title="Thông tin toà nhà">
      <div className="space-y-6">
        <div>
          <Label>
            Tên tòa nhà <span className="text-red-700">*</span>
          </Label>
          <Input type="text" className="w-full" />
        </div>
        <div>
          <Label>
            Chủ sở hữu <span className="text-red-700">*</span>
          </Label>
          <Input type="text" className="w-full" />
        </div>
        <div>
          <Label>
            Địa chỉ<span className="text-red-700">*</span>
          </Label>
          <Input type="text" className="w-full" />
        </div>
        <div>
          <Label>
            Số tầng <span className="text-red-700">*</span>
          </Label>
          <Input type="number" className="w-full" />
        </div>

        <div>
          <Label>
            Cách tính nước <span className="text-red-700">*</span>
          </Label>
          <div className="relative">
            <Select
              options={options}
              placeholder="Chọn tùy chọn"
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
            Điện thoại<span className="text-red-700">*</span>
          </Label>
          <Input type="number" className="w-full" />
        </div>
        <div>
          <Label>
            Giá thuê<span className="text-red-700">*</span>
          </Label>
          <Input type="text" className="w-full" />
        </div>
      </div>
    </ComponentCard>
  )
}
