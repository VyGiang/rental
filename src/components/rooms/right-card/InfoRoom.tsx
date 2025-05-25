"use client"
import { useState } from "react"

export default function InfoRoom() {
  const [selectedTab, setSelectedTab] = useState<"unit" | "">("unit")

  return (
    <div className="rounded-2xl border border-gray-300 p-4 space-y-4 w-full bg-white">
      {/* Group button */}
      <div className="inline-flex rounded-xl bg-gray-200 p-1">
        <button
          onClick={() => setSelectedTab("unit")}
          className={`px-4 py-1.5 text-sm font-medium rounded-xl ${
            selectedTab === "unit"
              ? "bg-white text-brand-500 font-semibold"
              : "text-gray-600"
          }`}
        >
          Thông tin đơn vị thuê
        </button>
      </div>

      {selectedTab === "unit" ? (
        <div className="grid grid-cols-2  xl:grid-cols-4 gap-y-3 text-sm">
          {/* Row 1 */}
          <div className="text-black font-medium">Giá/tháng</div>
          <div className="text-green-600 font-semibold">4,000,000</div>
          <div className="text-black font-medium">Tiền cọc</div>
          <div className="text-green-600 font-semibold">2,000,000</div>

          {/* Row 2 */}
          <div className="text-black font-medium">Trạng thái</div>
          <div>
            <span className="bg-sky-300 text-sky-900 px-3 py-1 rounded-full text-xs font-semibold">
              Đã thuê
            </span>
          </div>
          <div className="text-black font-medium">Trạng thái hợp đồng</div>
          <div>
            <span className="bg-sky-300 text-sky-900 px-3 py-1 rounded-full text-xs font-semibold">
              Hiệu lực
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
