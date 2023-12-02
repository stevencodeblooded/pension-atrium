import NearbyAreas from "../ui/Surroundings/NearbyAreas"
import SurroundingHeading from "../ui/Surroundings/SurroundingHeading"

const Surroundings = () => {
  return (
    <div className="px-6 py-12">
      <SurroundingHeading />
      <NearbyAreas />
    </div>
  )
}

export default Surroundings