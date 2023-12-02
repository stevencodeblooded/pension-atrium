import Floors from "../ui/Accommodation/Floors"
import Heading from "../ui/Accommodation/Heading"
import Notice from "../ui/Accommodation/Notice"
import RoomMealServices from "../ui/Accommodation/RoomMealServices"

const Accommodation = () => {
  return (
    <div className="px-6 py-12">
      <Heading />
      <RoomMealServices />
      <Floors />
      <Notice />
    </div>
  )
}

export default Accommodation