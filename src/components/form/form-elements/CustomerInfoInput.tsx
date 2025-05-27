"use client"
import React from "react"
import ComponentCard from "../../common/ComponentCard"
import Label from "../Label"
import Input from "../input/InputField"
import Select from "../Select"
import { ChevronDownIcon } from "../../../icons"
import DatePicker from "../date-picker"

export default function CustomerInfoInput() {
  const options = [
    { value: "nam", label: "nam" },
    { value: "nữ", label: "nữ" },
  ]
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value)
  }
  return (
    <ComponentCard title="Thông tin khách hàng">
      <div className="space-y-6">
        <div>
          <Label>
            Họ và tên <span className="text-red-700">*</span>
          </Label>
          <Input type="text" className="w-full" />
        </div>
        <div>
          <Label>
            Số điện thoại <span className="text-red-700">*</span>
          </Label>
          <Input type="number" className="w-full" />
        </div>
        <div>
          <Label>
            Email <span className="text-red-700">*</span>
          </Label>
          <Input type="text" className="w-full" />
        </div>
        <div>
          <Label>
            Giới tính <span className="text-red-700">*</span>
          </Label>
          <div className="relative">
            <Select
              options={options}
              placeholder="Chọn giới tính"
              onChange={handleSelectChange}
              className="dark:bg-dark-900"
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <ChevronDownIcon />
            </span>
          </div>
        </div>
        <div>
          <DatePicker
            id="date-picker"
            label="Ngày sinh"
            placeholder="dd-mm-yyyy"
            onChange={(dates, currentDateString) => {
              // Handle your logic
              console.log({ dates, currentDateString })
            }}
          />
        </div>
        <div>
          <Label>
            Số CCCD<span className="text-red-700">*</span>
          </Label>
          <Input type="number" className="w-full" />
        </div>
        <div>
          <Label>
            Nơi cấp CCCD <span className="text-red-700">*</span>
          </Label>
          <Input type="text" className="w-full" />
        </div>
        <div>
          <Label>
            Địa chủ thường chú <span className="text-red-700">*</span>
          </Label>
          <Input type="text" className="w-full" />
        </div>
        <div>
          <Label>Nghề nghiệp</Label>
          <Input type="text" className="w-full" />
        </div>
      </div>
    </ComponentCard>
  )
}
