"use client"
import Button from "@/components/ui/button/Button"
import { ChevronDownIcon, EditColor, PlusCircle } from "@/icons"
import { useState } from "react"
import { useModal } from "../../../hooks/useModal"
import { Modal } from "../../ui/modal"
import Label from "@/components/form/Label"
import Input from "@/components/form/input/InputField"
import DatePicker from "@/components/form/date-picker"
import Select from "@/components/form/Select"
export default function InfoContract() {
  const [selectedTab, setSelectedTab] = useState<
    "hopdong" | "lichsu" | "hoadon"
  >("hopdong")

  const { isOpen, openModal, closeModal } = useModal()
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...")
    closeModal()
  }

  const options = [{ value: "dien", label: "Công tơ điện" }]

  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value)
  }
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
          <Button
            size="sm"
            variant="primary"
            startIcon={<PlusCircle />}
            onClick={openModal}
          >
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
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Thêm chỉ số công tơ
            </h4>
          </div>
          <form className="flex flex-col">
            <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
              <div className="mt-7">
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1 mr-15">
                    <Label>
                      Loại công tơ <span className="text-red-700">*</span>
                    </Label>
                    <div className="relative">
                      <Select
                        options={options}
                        placeholder="Chọn công tơ"
                        onChange={handleSelectChange}
                        className="dark:bg-dark-900"
                      />
                      <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                        <ChevronDownIcon />
                      </span>
                    </div>
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>
                      Chỉ số đầu <span className="text-red-700">*</span>
                    </Label>
                    <Input type="number" defaultValue="Chowdhury" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>
                      Tháng <span className="text-red-700">*</span>
                    </Label>
                    <Input
                      type="text"
                      defaultValue="05"
                      disabled={true}
                      className="bg-gray-100"
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>
                      Chỉ số cuối <span className="text-red-700">*</span>
                    </Label>
                    <Input type="number" defaultValue="+09 363 398 46" />
                  </div>

                  <div className="col-span-2  lg:col-span-1">
                    <Label>
                      Năm <span className="text-red-700">*</span>
                    </Label>
                    <Input
                      type="text"
                      defaultValue="2025"
                      disabled={true}
                      className="bg-gray-100"
                    />
                  </div>

                  <div className="col-span-2  lg:col-span-1">
                    <Label>
                      Tiêu thụ <span className="text-red-700">*</span>
                    </Label>
                    <Input type="number" defaultValue="Team Manager" />
                  </div>
                  <div className="col-span-2  lg:col-span-1 "></div>
                  <div className="col-span-2  lg:col-span-1 mr-15">
                    <DatePicker
                      id="date-picker"
                      label={
                        <>
                          Ngày ghi <span className="text-red-700">*</span>
                        </>
                      }
                      placeholder="Select a date"
                      onChange={(dates, currentDateString) => {
                        // Handle your logic
                        console.log({ dates, currentDateString })
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Hủy
              </Button>
              <Button size="sm" onClick={handleSave}>
                Lưu lại
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  )
}
