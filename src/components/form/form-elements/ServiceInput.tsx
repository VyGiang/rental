import ComponentCard from "@/components/common/ComponentCard"
import React from "react"
import ServiceTableInput from "./ServiceTableInput"

const ServiceInput = () => {
  return (
    <div>
      <ComponentCard
        title={<span className="text-lg  text-black">Thông tin dịch vụ</span>}
      >
        <ServiceTableInput />
      </ComponentCard>
    </div>
  )
}

export default ServiceInput
