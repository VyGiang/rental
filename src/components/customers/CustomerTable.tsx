"use client"

import { ChevronDownIcon, Edit, SortDown, SortUp } from "@/icons"
import { useState, useEffect } from "react"
import test from "../../../data/test.json"
import Select from "../form/Select"
import { Dropdown } from "../ui/dropdown/Dropdown"
import { DropdownItem } from "../ui/dropdown/DropdownItem"

export default function CustomerTable() {
  const options = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
  ]
  const [sortField, setSortField] = useState<keyof (typeof data)[0] | null>(
    null
  )
  const [sortAsc, setSortAsc] = useState(true)
  const [data, setData] = useState(test)
  const [pageSize, setPageSize] = useState(5) // số dòng mỗi trang
  const [currentPage, setCurrentPage] = useState(1) // trang hiện tại
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const totalPages = Math.ceil(data.length / pageSize)

  const goToPage = (page: number) => {
    // (4) Thêm toàn bộ hàm này
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }
  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  const visibleData = data.slice(start, end)

  // Sliding window pagination
  let startPage = currentPage
  let endPage = currentPage + 1

  if (currentPage >= totalPages) {
    startPage = totalPages - 1
    endPage = totalPages
  }
  if (startPage < 1) startPage = 1
  if (endPage > totalPages) endPage = totalPages

  const sortByField = (field: keyof (typeof data)[0], ascending: boolean) => {
    const sorted = [...data].sort((a, b) => {
      const aVal = a[field]
      const bVal = b[field]

      if (typeof aVal === "number" && typeof bVal === "number") {
        return ascending ? aVal - bVal : bVal - aVal
      }

      return ascending
        ? String(aVal).localeCompare(String(bVal), "vi", {
            sensitivity: "base",
          })
        : String(bVal).localeCompare(String(aVal), "vi", {
            sensitivity: "base",
          })
    })

    setData(sorted)
    setSortField(field)
    setSortAsc(ascending)
  }

  const toggleRow = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const toggleSelectAll = () => {
    if (selectedIds.length === data.length) {
      setSelectedIds([])
    } else {
      setSelectedIds(data.map((item) => item.id))
    }
  }

  const [openDropdownCustomerId, setOpenDropdownCustomerId] = useState<
    number | null
  >(null)

  function toggleDropdown(customerId: number) {
    setOpenDropdownCustomerId((prev) =>
      prev === customerId ? null : customerId
    )
  }

  function closeDropdown() {
    setOpenDropdownCustomerId(null)
  }

  useEffect(() => {
    console.log("ID đã chọn:", selectedIds)

    const selectedData = data.filter((item) => selectedIds.includes(item.id))
    console.log("Dữ liệu đã chọn:", selectedData)
  })

  return (
    <div className="w-full overflow-x-auto border rounded-xl">
      {/* Top controls */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <label className="text-sm whitespace-nowrap">Hiển thị</label>
          <div className="relative w-[120px]">
            <Select
              options={options}
              placeholder="Số dòng"
              defaultValue="5" // 👈 đúng kiểu string
              onChange={(value) => {
                setPageSize(Number(value)) // chuyển từ string thành number
                setCurrentPage(1) // reset về trang đầu tiên
              }}
              className="dark:bg-dark-900"
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <ChevronDownIcon className="w-4 h-4" />
            </span>
          </div>
          <span className="text-sm whitespace-nowrap">dòng</span>
        </div>
      </div>

      {/* Table */}
      <table className="min-w-full text-sm text-left border-t">
        <thead className="bg-gray-100 text-gray-700 text-md">
          <tr>
            <th className="p-3 border-b">
              <input
                type="checkbox"
                onChange={toggleSelectAll}
                checked={selectedIds.length === data.length}
              />
            </th>

            <th className="p-3 border-b">#</th>
            <th className="p-3 border-b relative text-left">
              <div className="flex items-center gap-1 w-full justify-between uppercase">
                CCCD
                <div className="flex flex-col">
                  <SortUp
                    className={`w-3 h-3 cursor-pointer ${
                      sortField === "cmnd" && sortAsc
                        ? "text-brand-500"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                    onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                      e.stopPropagation()
                      e.stopPropagation()
                      sortByField("cmnd", true) // ⬆️ sort tăng
                    }}
                  />
                  <SortDown
                    className={`w-3 h-3 cursor-pointer ${
                      sortField === "cmnd" && !sortAsc
                        ? "text-brand-500"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                    onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                      e.stopPropagation()
                      e.stopPropagation()
                      sortByField("cmnd", false) // ⬇️ sort giảm
                    }}
                  />
                </div>
              </div>
            </th>
            <th className="p-3 border-b relative text-left">
              <div className="flex items-center gap-1 w-full justify-between uppercase">
                Họ và tên
                <div className="flex flex-col">
                  <SortUp
                    className={`w-3 h-3 cursor-pointer ${
                      sortField === "name" && sortAsc
                        ? "text-brand-500"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                    onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                      e.stopPropagation()
                      e.stopPropagation()
                      sortByField("name", true) // ⬆️ sort tăng
                    }}
                  />
                  <SortDown
                    className={`w-3 h-3 cursor-pointer ${
                      sortField === "name" && !sortAsc
                        ? "text-brand-500"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                    onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                      e.stopPropagation()
                      e.stopPropagation()
                      sortByField("name", false) // ⬇️ sort giảm
                    }}
                  />
                </div>
              </div>
            </th>
            <th className="p-3 border-b relative text-left">
              <div className="flex items-center gap-1 w-full justify-between uppercase">
                Số điện thoại
                <div className="flex flex-col">
                  <SortUp
                    className={`w-3 h-3 cursor-pointer ${
                      sortField === "phone" && sortAsc
                        ? "text-brand-500"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                    onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                      e.stopPropagation()
                      e.stopPropagation()
                      sortByField("phone", true) // ⬆️ sort tăng
                    }}
                  />
                  <SortDown
                    className={`w-3 h-3 cursor-pointer ${
                      sortField === "phone" && !sortAsc
                        ? "text-brand-500"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                    onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                      e.stopPropagation()
                      e.stopPropagation()
                      sortByField("phone", false) // ⬇️ sort giảm
                    }}
                  />
                </div>
              </div>
            </th>
            <th className="p-3 border-b relative text-left">
              <div className="flex items-center gap-1 w-full justify-between uppercase">
                Email{" "}
                <div className="flex flex-col">
                  <SortUp
                    className={`w-3 h-3 cursor-pointer ${
                      sortField === "email" && sortAsc
                        ? "text-brand-500"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                    onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                      e.stopPropagation()
                      e.stopPropagation()
                      sortByField("email", true) // ⬆️ sort tăng
                    }}
                  />
                  <SortDown
                    className={`w-3 h-3 cursor-pointer ${
                      sortField === "email" && !sortAsc
                        ? "text-brand-500"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                    onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                      e.stopPropagation()
                      e.stopPropagation()
                      sortByField("email", false) // ⬇️ sort giảm
                    }}
                  />
                </div>
              </div>
            </th>
            <th className="p-3 border-b relative text-left">
              <div className="flex items-center gap-1 w-full justify-between uppercase">
                hợp đồng hiện tại
                <div className="flex flex-col">
                  <SortUp
                    className={`w-3 h-3 cursor-pointer ${
                      sortField === "contract" && sortAsc
                        ? "text-brand-500"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                    onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                      e.stopPropagation()
                      e.stopPropagation()
                      sortByField("contract", true) // ⬆️ sort tăng
                    }}
                  />
                  <SortDown
                    className={`w-3 h-3 cursor-pointer ${
                      sortField === "contract" && !sortAsc
                        ? "text-brand-500"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                    onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                      e.stopPropagation()
                      sortByField("contract", false) // ⬇️ sort giảm
                    }}
                  />
                </div>
              </div>
            </th>
            <th className="p-3 border-b relative text-left"></th>
          </tr>
        </thead>
        <tbody>
          {visibleData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="p-3 border-b">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(item.id)}
                  onChange={() => toggleRow(item.id)}
                />
              </td>
              <td className="p-3 border-b">
                <div className="relative inline-block">
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className="dropdown-toggle"
                  >
                    <Edit />
                  </button>
                  {openDropdownCustomerId === item.id && (
                    <div className="absolute -right-40 -mt-5 z-50">
                      <Dropdown
                        isOpen
                        onClose={closeDropdown}
                        className="w-40 p-2"
                      >
                        <DropdownItem onItemClick={closeDropdown}>
                          Chỉnh sửa
                        </DropdownItem>
                        <DropdownItem
                          onItemClick={closeDropdown}
                          className="text-red-300"
                        >
                          Xóa
                        </DropdownItem>
                      </Dropdown>
                    </div>
                  )}
                </div>
              </td>
              <td className="p-3 border-b">{item.cmnd}</td>
              <td className="p-3 border-b">{item.name}</td>
              <td className="p-3 border-b">{item.phone}</td>
              <td className="p-3 border-b">{item.email}</td>
              <td className="p-3 border-b">{item.contract}</td>
              <td className="p-3 border-b relative"></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 text-sm text-gray-600">
        <div className="text-center sm:text-left w-full sm:w-auto">
          Hiển thị {start + 1} đến {Math.min(end, data.length)} trong{" "}
          {data.length} dòng
        </div>
        <hr className="block sm:hidden border-t border-gray-200 w-full" />
        <div className="flex justify-center sm:justify-start flex-wrap items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded border transition-colors duration-150 ${
              currentPage === 1
                ? "text-gray-500 "
                : "text-gray-800 hover:bg-gray-200 hover:text-black border-gray-400"
            }`}
          >
            Previous
          </button>

          {Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i
          ).map((pageNum) => (
            <button
              key={pageNum}
              className={`px-3 py-1 rounded border ${
                currentPage === pageNum
                  ? "bg-brand-500 text-white"
                  : "text-gray-500"
              }`}
              onClick={() => goToPage(pageNum)}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded border transition-colors duration-150 ${
              currentPage === totalPages
                ? "text-gray-500 "
                : "text-gray-800 hover:bg-gray-200 hover:text-black  border-gray-400"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
