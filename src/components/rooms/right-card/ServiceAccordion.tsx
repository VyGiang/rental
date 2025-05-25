"use client"
import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon, DocsIcon } from "@/icons"

export default function ServiceAccordion() {
  const [open, setOpen] = useState(false)

  return (
    <div className="border rounded-t-2xl overflow-hidden w-full ">
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between bg-gray-200 cursor-pointer px-4 py-2"
      >
        <div className="flex items-center gap-2">
          <DocsIcon
            className={`w-6 h-6 ${open ? "text-brand-500" : "text-gray-500"} `}
          />
          <span
            className={`text-lg ${open ? "text-blue-600" : "text-gray-500"}`}
          >
            Danh sách dịch vụ
          </span>
        </div>
        {open ? (
          <ChevronUpIcon className=" text-gray-700" />
        ) : (
          <ChevronDownIcon className=" text-gray-700" />
        )}
      </div>

      {/* Content */}
      {open && (
        <div className="border border-gray-200 bg-white overflow-hidden w-full">
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs text-center text-gray-800 border-collapse">
              <thead className="bg-gray-100 text-gray-600 uppercase border-b">
                <tr>
                  <th className="px-2 py-3 font-semibold border border-gray-200">
                    DỊCH VỤ
                  </th>
                  <th className="px-2 py-3 font-semibold border border-gray-200">
                    SỐ LƯỢNG
                  </th>
                  <th className="px-2 py-3 font-semibold border border-gray-200">
                    ĐƠN GIÁ
                  </th>
                  <th className="px-2 py-3 font-semibold border border-gray-200">
                    ĐƠN VỊ
                  </th>
                  <th className="px-2 py-3 font-semibold border border-gray-200">
                    NGÀY TÍNH PHÍ
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Phí thuê nhà",
                    qty: 1,
                    type: "Theo tháng",
                    price: "5.000.000",
                    unit: "",
                    date: "04/05/2025",
                  },
                  {
                    name: "Phí điện",
                    qty: 1,
                    type: "Cố định",
                    price: "3.500",
                    unit: "kWh",
                    date: "04/05/2025",
                  },
                  {
                    name: "Phí nước",
                    qty: 1,
                    type: "Theo tháng",
                    price: "250.000",
                    unit: "Người",
                    date: "04/05/2025",
                  },
                  {
                    name: "Phí mạng",
                    qty: 1,
                    type: "Theo tháng",
                    price: "200.000",
                    unit: "Người",
                    date: "04/05/2025",
                  },
                  {
                    name: "Phí dịch vụ",
                    qty: 1,
                    type: "Theo tháng",
                    price: "100.000",
                    unit: "Người",
                    date: "04/05/2025",
                  },
                ].map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-2 py-3 border border-gray-100">
                      {item.name}
                    </td>
                    <td className="px-2 py-3 border border-gray-100">
                      {item.qty}
                    </td>
                    <td className="px-2 py-3 border border-gray-100">
                      <table className="w-full">
                        <tbody>
                          <tr>
                            <td className="w-1/2 text-left text-xs text-gray-700 pr-2 border-r border-gray-300">
                              {item.type}
                            </td>
                            <td className="w-1/2 text-right text-xs text-gray-700 pl-2">
                              {item.price}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td className="px-2 py-3 border border-gray-100">
                      {item.unit}
                    </td>
                    <td className="px-2 py-3 border border-gray-100">
                      {item.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
