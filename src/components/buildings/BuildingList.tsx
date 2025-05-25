"use client"
import React from "react"
import { useRouter } from "next/navigation"
import buildings from "../../../data/buildings.json"
import Button from "@/components/ui/button/Button"
import ComponentCard from "../common/ComponentCard"
import { Computer, PlusCircle } from "@/icons"
import ItemCard from "../common/ItemCard"

function BuildingsList() {
  const router = useRouter()

  const handleAddBuilding = () => {
    router.push("/buildings/addBuilding")
  }

  return (
    <ComponentCard
      icon={<Computer />}
      title="Quản lí toà nhà"
      rightAction={
        <Button
          size="sm"
          variant="primary"
          startIcon={<PlusCircle />}
          onClick={handleAddBuilding}
        >
          Thêm tòa nhà
        </Button>
      }
    >
      {/* Grid wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {buildings.map((building) => {
          const totalFloors = building.floors.length
          const totalRooms = building.floors.reduce(
            (sum, floor) => sum + floor.rooms.length,
            0
          )
          const rented = Math.floor(totalRooms / 2) // Tuỳ logic
          const available = totalRooms - rented

          return (
            <ItemCard
              key={building.id}
              name={building.name}
              address={building.address}
              progress={Math.round((rented / totalRooms) * 100)}
              stats={{
                floor: totalFloors,
                rentalUnits: totalRooms,
                rented: rented,
                vacant: available,
              }}
            />
          )
        })}
      </div>
    </ComponentCard>
  )
}

export default BuildingsList
