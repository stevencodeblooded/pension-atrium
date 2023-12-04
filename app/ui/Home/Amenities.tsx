import { FaWifi, FaBed, FaWheelchair, FaBusAlt  } from "react-icons/fa";
import { TbPlayHandball } from "react-icons/tb";
import { RiParkingBoxLine } from "react-icons/ri";
import { FaKitchenSet, FaUserGroup } from "react-icons/fa6";

const Amenities = () => {
  return (
    <div className=" w-2/3 mx-auto">
      <h1 className="text-4xl font-semibold mb-8 text-center text-blue-900">Our Amenities</h1>
      <div className="flex flex-col gap-16 lg:flex-row">
        <div>
          <ul className="flex gap-16 lg:flex-col">
              <li className="flex flex-col items-center"><span className="text-4xl text-blue-900"><FaWifi /></span>Free wi-fi </li>
              <li className="flex flex-col items-center"><span className="text-4xl text-blue-900"><TbPlayHandball /></span>Garden with playground</li>
              <li className="flex flex-col items-center"><span className="text-4xl text-blue-900"><FaBed /></span>Beds from 200 Kč (8 €) per night</li>
              <li className="flex flex-col items-center"><span className="text-4xl text-blue-900"><RiParkingBoxLine /></span>Free parking</li>
            </ul>
        </div>

        <div>
          <ul className="flex gap-16 lg:flex-col">
            <li className="flex flex-col items-center"><span className="text-4xl text-blue-900"><FaWheelchair  /></span>Wheelchair accessible</li>
            <li className="flex flex-col items-center"><span className="text-4xl text-blue-900"><FaBusAlt  /></span>Close to the bus terminal and train station.</li>
            <li className="flex flex-col items-center"><span className="text-4xl text-blue-900"><FaUserGroup  /></span>Group discounts and long stay discounts</li>
            <li className="flex flex-col items-center"><span className="text-4xl text-blue-900"><FaKitchenSet  /></span>Kitchen and meeting room with TV</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Amenities