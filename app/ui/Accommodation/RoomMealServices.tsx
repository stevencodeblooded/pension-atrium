import { MdBathroom } from "react-icons/md";
import { FaToilet } from "react-icons/fa";
import { SiTalenthouse } from "react-icons/si";
import { PiTelevisionFill, PiBowlFoodBold } from "react-icons/pi";
import { FaRadio } from "react-icons/fa6";
import { MdOutlineBalcony, MdPool, MdOutlineFreeBreakfast, MdOutlineLunchDining, MdEmojiTransportation   } from "react-icons/md";
import { TbWashHand } from "react-icons/tb";

const RoomMealServices = () => {
  return (
    <div className="w-full mb-20">
      <div className="flex gap-4 lg:flex-col">
        <div className=" w-1/3 rounded-lg p-6 bg-blue-50 hover:bg-blue-100 lg:w-full ">
          <div>
            <h2 className="text-lg text-center font-semibold mb-4 text-blue-900">Room Type</h2>
            <h3 className="text-center font-semibold mb-2 text-blue-900">Tourist</h3>
            <div>
              <section className="flex justify-between">
                <p className="flex items-center gap-2"><span className="text-lg text-blue-900"><MdBathroom /></span>Shared</p>
                <p className="flex items-center gap-2"><span className="text-lg text-blue-900"><FaRadio /></span>Shared</p>
              </section>
              <section className="flex justify-between">
                <p className="flex items-center gap-2"><span className="text-lg text-blue-900"><MdPool/></span>Shared</p>
                <p className="flex items-center gap-2"><span className="text-lg text-blue-900"><SiTalenthouse /></span>Shared</p>
              </section>
            </div>
            <h3 className="text-center font-semibold mb-2 text-blue-900">Standard</h3>
            <div>
              <section className="flex justify-between">
                <p className="flex items-center gap-2"><span className="text-lg text-blue-900"><PiTelevisionFill /></span>Private</p>
                <p className="flex items-center gap-2"><span className="text-lg text-blue-900"><FaToilet /></span>Private</p>
              </section>
              <section className="flex justify-between">
                <p className="flex items-center gap-2"><span className="text-lg text-blue-900"><FaToilet /></span>Private</p>
                <p className="flex items-center gap-2"><span className="text-lg text-blue-900"><MdOutlineBalcony /></span>Shared</p>
              </section>
            </div>
          </div>
        </div>


        <div className="flex gap-4 sm:flex-col">

          <div className=" w-1/3 rounded-lg p-6 bg-blue-50 hover:bg-blue-100 lg:w-1/2 sm:w-full">
              <h2 className="text-lg text-center font-semibold mb-4 text-blue-900">Meal</h2>
              <div>
                <p className="text-sm text-center mb-3">Only for group consisting of 20 people or
                  more – need to order in advance
                </p>
                <section className="flex flex-col items-center gap-2">
                  <p className="flex items-center gap-2 text-sm font-semibold"><span className="text-lg text-blue-900"><MdOutlineFreeBreakfast /></span>Breakfast 80 Kč</p>
                  <p className="flex items-center gap-2 text-sm font-semibold"><span className="text-lg text-blue-900"><PiBowlFoodBold /></span>Half board 160 Kč</p>
                  <p className="flex items-center gap-2 text-sm font-semibold"><span className="text-lg text-blue-900"><MdOutlineLunchDining /></span>Full Board 240 Kč</p>
                </section>
              </div>
          </div>

          <div className=" w-1/3 rounded-lg p-6 bg-blue-50 hover:bg-blue-100 lg:w-1/2 sm:w-full">
              <h2 className="text-lg text-center font-semibold mb-4 text-blue-900">Other Services</h2>
              <div className="flex flex-col gap-5">
                <section className="flex gap-5">
                  <span className="text-lg text-blue-900">
                    <MdEmojiTransportation />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold">Transport</h2>
                    <p className="text-xs">VW Transporter,max. 8 people</p>
                  </div>
                  <p>10 Kč/km</p>
                </section>

                <section className="flex gap-5">
                  <span className="text-lg text-blue-900">
                    <TbWashHand />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold">Laundry</h2>
                    <p className="text-xs">max. 7kg</p>
                  </div>
                  <p>150 Kč/km</p>
                </section>

                <section className="flex gap-5">
                  <span className="text-lg text-blue-900">
                    <PiTelevisionFill />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold">Borrowing TV</h2>
                    <p className="text-xs">Only for Tourist Room</p>
                  </div>
                  <p>50 Kč/km</p>
                </section>

              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default RoomMealServices