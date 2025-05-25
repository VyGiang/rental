"use client"
import React from "react"
import ComponentCard from "../../common/ComponentCard"
import Label from "../Label"
import Input from "../input/InputField"
import DatePicker from "../date-picker"

export default function ContractInput() {
  return (
    <ComponentCard title="Thông tin hợp đồng">
      <div className="space-y-6">
        <div>
          <Label>
            Tên phòng thuê <span className="text-red-700">*</span>
          </Label>
          <Input type="text" className="w-full" />
        </div>
        <div>
          <Label>
            Mã hợp đồng <span className="text-red-700">*</span>
          </Label>
          <Input type="text" className="w-full" />
        </div>
        <div>
          <Label>
            Tên hợp đồng <span className="text-red-700">*</span>
          </Label>
          <Input type="text" className="w-full" />
        </div>
        <div>
          <DatePicker
            id="date-picker"
            label={
              <>
                Ngày bắt đầu <span className="text-red-700">*</span>
              </>
            }
            placeholder="dd-mm-yyyy"
            onChange={(dates, currentDateString) => {
              // Handle your logic
              console.log({ dates, currentDateString })
            }}
          />
        </div>
        <div>
          <DatePicker
            id="date-picker"
            label={
              <>
                Ngày kết thúc <span className="text-red-700">*</span>
              </>
            }
            placeholder="dd-mm-yyyy"
            onChange={(dates, currentDateString) => {
              // Handle your logic
              console.log({ dates, currentDateString })
            }}
          />
        </div>
        <div>
          <DatePicker
            id="date-picker"
            label={
              <>
                Ngày tính phí <span className="text-red-700">*</span>
              </>
            }
            placeholder="dd-mm-yyyy"
            onChange={(dates, currentDateString) => {
              // Handle your logic
              console.log({ dates, currentDateString })
            }}
          />
        </div>
        <div>
          <Label>
            Tiền cọc <span className="text-red-700">*</span>
          </Label>
          <Input type="number" className="w-full" />
        </div>

        {/* Các input khác giữ nguyên */}
      </div>
    </ComponentCard>
  )
}
