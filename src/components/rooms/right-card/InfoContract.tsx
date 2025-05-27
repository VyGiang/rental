"use client"
import { EditColor } from "@/icons"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function InfoContract() {
  const [selectedTab, setSelectedTab] = useState<"hopdong" | "lichsu">(
    "hopdong"
  )
  const router = useRouter()

  const handleEditContract = () => {
    router.push("/contracts/editContract")
  }

  return (
    <div className="rounded-2xl border border-gray-300 p-4 space-y-4 w-full bg-white">
      {/* Group button */}
      <div className="inline-flex rounded-xl bg-gray-200 p-1">
        <button
          onClick={() => setSelectedTab("hopdong")}
          className={`px-4 py-1.5 text-md rounded-xl ${
            selectedTab === "hopdong"
              ? "bg-white text-brand-500 font-semibold"
              : "text-gray-600"
          }`}
        >
          Hợp đồng thuê
        </button>
        <button
          onClick={() => setSelectedTab("lichsu")}
          className={`px-4 py-1.5 text-md  rounded-xl ${
            selectedTab === "lichsu"
              ? "bg-white text-brand-500 font-semibold"
              : "text-gray-600"
          }`}
        >
          Lịch sử hợp đồng
        </button>
      </div>

      {selectedTab === "hopdong" ? (
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-y-3 text-md">
          {/* Row 1 */}
          <div className="text-gray-700 text-md">Tên hợp đồng</div>
          <div className="items-start">
            <div className="font-semibold text-black ">
              Hợp đồng thuê phòng trọ 101
              <button className="inline-flex items-center justify-center ml-1 ">
                <EditColor onClick={handleEditContract} />
              </button>
            </div>
          </div>

          <div className="text-black text-md">Mã</div>
          <div className="font-bold text-black">RTHS</div>

          {/* Row 2 */}
          <div className="text-black text-md">Trạng thái</div>
          <div>
            <span className="bg-sky-300 text-sky-900 px-3 py-1 rounded-full text-xs font-semibold">
              Hiệu lực
            </span>
          </div>

          {/* Row 3 */}
          <div className="text-black text-md">Thời gian bắt đầu</div>
          <div className="text-black font-semibold">04/05/2025</div>
          <div className="text-black text-md">Số tiền</div>
          <div className="text-green-600 font-semibold">5.000.000</div>

          {/* Row 4 */}
          <div className="text-black text-md">Thời gian kết thúc</div>
          <div className="text-black font-semibold">04/05/2026</div>
        </div>
      ) : (
        <div className="text-sm text-center text-gray-500">
          (Lịch sử hợp đồng sẽ hiển thị tại đây)
        </div>
      )}
    </div>
  )
}
