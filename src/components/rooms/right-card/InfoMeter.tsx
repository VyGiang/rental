"use client"

import Button from "@/components/ui/button/Button"
import { EditColor, PlusCircle } from "@/icons"
import { useState } from "react"

export default function InfoContract() {
  const [selectedTab, setSelectedTab] = useState<
    "hopdong" | "lichsu" | "hoadon"
  >("hopdong")

  return (
    <div className="rounded-2xl border border-gray-300 p-4 space-y-4 w-full bg-white">
      {/* Group button */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex rounded-xl bg-gray-200 p-1">
          <button
            onClick={() => setSelectedTab("hopdong")}
            className={`px-4 py-1.5 text-sm rounded-xl ${
              selectedTab === "hopdong"
                ? "bg-white text-brand-500 font-semibold"
                : "text-gray-600"
            }`}
          >
            Chỉ số công tơ
          </button>
          <button
            onClick={() => setSelectedTab("lichsu")}
            className={`px-4 py-1.5 text-sm rounded-xl ${
              selectedTab === "lichsu"
                ? "bg-white text-brand-500 font-semibold"
                : "text-gray-600"
            }`}
          >
            Lịch sử công tơ
          </button>
          <button
            onClick={() => setSelectedTab("hoadon")}
            className={`px-4 py-1.5 text-sm rounded-xl ${
              selectedTab === "hoadon"
                ? "bg-white text-brand-500 font-semibold"
                : "text-gray-600"
            }`}
          >
            Lịch sử hóa đơn
          </button>
        </div>
      </div>

      {selectedTab === "hopdong" && (
        <>
          <Button size="sm" variant="primary" startIcon={<PlusCircle />}>
            Thêm chỉ số
          </Button>
          {/* Bảng hình 1: chỉ số công tơ */}
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full text-xs text-center border border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border px-2 py-1">#</th>
                  <th className="border px-2 py-1">LOẠI CÔNG TƠ</th>
                  <th className="border px-2 py-1">SỐ ĐẦU</th>
                  <th className="border px-2 py-1">SỐ CUỐI</th>
                  <th className="border px-2 py-1">TIÊU THỤ</th>
                  <th className="border px-2 py-1">THÁNG</th>
                  <th className="border px-2 py-1">NĂM</th>
                  <th className="border px-2 py-1">NGÀY GHI</th>
                  <th className="border px-2 py-1">TRẠNG THÁI</th>
                  <th className="border px-2 py-1">NGÀY CHỐT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">
                    {" "}
                    <EditColor />
                  </td>
                  <td className="border px-2 py-1 flex items-center justify-center gap-1">
                    Công tơ điện
                  </td>
                  <td className="border px-2 py-1">0</td>
                  <td className="border px-2 py-1">0</td>
                  <td className="border px-2 py-1">0</td>
                  <td className="border px-2 py-1">5</td>
                  <td className="border px-2 py-1">2025</td>
                  <td className="border px-2 py-1">15/05/2025</td>
                  <td className="border px-2 py-1">Chưa chốt</td>
                  <td className="border px-2 py-1"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}

      {selectedTab === "lichsu" && (
        <div className="overflow-x-auto">
          {/* Bảng hình 2: lịch sử công tơ */}
          <table className="min-w-full text-xs text-center border border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="border px-2 py-1">LOẠI CÔNG TƠ</th>
                <th className="border px-2 py-1">SỐ ĐẦU</th>
                <th className="border px-2 py-1">SỐ CUỐI</th>
                <th className="border px-2 py-1">TIÊU THỤ</th>
                <th className="border px-2 py-1">THÁNG</th>
                <th className="border px-2 py-1">NĂM</th>
                <th className="border px-2 py-1">NGÀY GHI</th>
                <th className="border px-2 py-1">TRẠNG THÁI</th>
                <th className="border px-2 py-1">NGÀY CHỐT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Công tơ điện</td>
                <td className="border px-2 py-1">0</td>
                <td className="border px-2 py-1">0</td>
                <td className="border px-2 py-1">0</td>
                <td className="border px-2 py-1">5</td>
                <td className="border px-2 py-1">2025</td>
                <td className="border px-2 py-1">15/05/2025</td>
                <td className="border px-2 py-1">Chưa chốt</td>
                <td className="border px-2 py-1">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {selectedTab === "hoadon" && (
        <div className="overflow-x-auto">
          {/* Bảng hình 3: lịch sử hóa đơn */}
          <table className="min-w-full text-xs text-center border border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="border px-2 py-1">#</th>
                <th className="border px-2 py-1">MÃ HÓA ĐƠN</th>
                <th className="border px-2 py-1">TÊN HÓA ĐƠN</th>
                <th className="border px-2 py-1">NGÀY NHẬP</th>
                <th className="border px-2 py-1">NGÀY HẾT HẠN</th>
                <th className="border px-2 py-1">TỔNG</th>
                <th className="border px-2 py-1">ĐÃ THANH TOÁN</th>
                <th className="border px-2 py-1">TRẠNG THÁI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">1</td>
                <td className="border px-2 py-1">HD001</td>
                <td className="border px-2 py-1">Tiền phòng tháng 5</td>
                <td className="border px-2 py-1">01/05/2025</td>
                <td className="border px-2 py-1">10/05/2025</td>
                <td className="border px-2 py-1">5.000.000</td>
                <td className="border px-2 py-1">0</td>
                <td className="border px-2 py-1">Chưa thanh toán</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
