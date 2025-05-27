"use client"
import { useState } from "react"
import { ChevronDownIcon, Customers } from "@/icons"

export default function CustomerAccordion() {
  const [open, setOpen] = useState(false)

  return (
    <div className="border  dark:border-gray-800 rounded-t-2xl overflow-hidden w-full ">
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between bg-gray-200 cursor-pointer dark:bg-white/[0.05]  px-4 py-2"
      >
        <div className="flex items-center gap-2">
          <Customers
            className={`w-6 h-6 ${open ? "text-brand-500" : "text-gray-500"} `}
          />
          <span
            className={`text-lg ${open ? "text-brand-500" : "text-gray-500"}`}
          >
            Danh sách khách hàng
          </span>
        </div>
        <ChevronDownIcon
          className={`text-gray-700 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Content */}
      {open && (
        <div className=" border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden w-full">
          {/* TABLE - nằm trên cùng */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-md text-center text-gray-800">
              <thead className="bg-gray-100 text-gray-500 dark:border-gray-900 dark:bg-white/[0.03]  uppercase border-b">
                <tr>
                  <th className="px-2 py-3  font-medium">KHÁCH HÀNG</th>
                  <th className="px-2 py-3  font-medium">CCCD</th>
                  <th className="px-2 py-3  font-medium">SỐ ĐIỆN THOẠI</th>
                  <th className="px-2 py-3  font-medium">ĐẠI DIỆN</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b  dark:text-gray-300">
                  <td className="px-2 py-3 ">Nguyễn Thanh Quang</td>
                  <td className="px-2 py-3 ">12121121</td>
                  <td className="px-2 py-3 ">0335828494</td>
                  <td className="px-2 py-3 ">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-600" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
