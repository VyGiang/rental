import React from "react"
import Input from "../input/InputField"

const ServiceTable = () => {
  return (
    <div>
      <div className="w-full overflow-x-auto border rounded-xl">
        {/* Table */}
        <table className="min-w-full text-sm border-t">
          <thead className="bg-gray-100 text-gray-700 text-md">
            <tr>
              <th className="p-3 border-b text-center uppercase">Dịch vụ</th>
              <th className="p-3 border-b text-center uppercase">Số lượng</th>
              <th className="p-3 border-b text-center uppercase">Đơn giá</th>
              <th className="p-3 border-b text-center uppercase">Đơn vị</th>
              <th className="p-3 border-b text-center uppercase">Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border-b text-center">Phí thuê nhà</td>
              <td className="p-3 border-b text-center">
                <Input type="number" className="w-20 px-2 py-1 text-sm" />
              </td>
              <td className="p-3 border-b text-center">
                <Input type="number" className="w-30 px-2 py-1 text-sm" />
              </td>
              <td className="p-3 border-b text-center">tháng</td>
              <td className="p-3 border-b text-center">
                <Input type="text" className="w-full" />
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border-b text-center">Phí điện</td>
              <td className="p-3 border-b text-center">
                <Input type="number" className="w-20 px-2 py-1 text-sm" />
              </td>
              <td className="p-3 border-b text-center">
                <Input type="number" className="w-30 px-2 py-1 text-sm" />
              </td>
              <td className="p-3 border-b text-center">kWh</td>
              <td className="p-3 border-b text-center">
                <Input type="text" className="w-full" />
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border-b text-center">Phí nước</td>
              <td className="p-3 border-b text-center">
                <Input type="number" className="w-20 px-2 py-1 text-sm" />
              </td>
              <td className="p-3 border-b text-center">
                <Input type="number" className="w-30 px-2 py-1 text-sm" />
              </td>
              <td className="p-3 border-b text-center">tháng</td>
              <td className="p-3 border-b text-center">
                <Input type="text" className="w-full" />
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border-b text-center">Phí mạng</td>
              <td className="p-3 border-b text-center">
                <Input type="number" className="w-20 px-2 py-1 text-sm" />
              </td>
              <td className="p-3 border-b text-center">
                <Input type="number" className="w-30 " />
              </td>
              <td className="p-3 border-b text-center">tháng</td>
              <td className="p-3 border-b text-center">
                <Input type="text" className="w-full" />
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border-b text-center">Phí dịch vụ</td>
              <td className="p-3 border-b text-center">
                <Input type="number" className="w-20 px-2 py-1 text-sm" />
              </td>
              <td className="p-3 border-b text-center">
                <Input type="number" className="w-30 px-2 py-1 text-sm" />
              </td>
              <td className="p-3 border-b text-center">tháng</td>
              <td className="p-3 border-b text-center">
                <Input type="text" className="w-full " />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ServiceTable
