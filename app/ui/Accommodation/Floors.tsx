import Image from "next/image"
import { FaPerson } from "react-icons/fa6";

const Floors = () => {
  return (
    <div className="mb-20 flex flex-col gap-8">
      <div className="">
        <h1 className="text-2xl font-semibold mb-4 text-blue-900">Ground Floor</h1>
        <div className="flex flex-col gap-4 ">
          <p className="text-sm">first floor - 30 beds, meeting room and kitchen wheelchair accessible.</p>
          <div className="flex justify-between items-center bg-blue-50 hover:bg-blue-100 p-4 rounded-lg">
            <Image src={'/beautiful-city-1.jpg'} alt="beautiful-city" width={200} height={100} className="rounded-lg" />
            <section className="flex flex-col gap-3">
              <p className="font-semibold">1 Bed Room</p>
              <p className="flex items-center">1 <span><FaPerson /></span></p>
            </section>

            <hr className="" />

            <section className="flex flex-col gap-3">
              <p className="font-semibold">500 Kč</p>
              <p>Tourist</p>
            </section>

            <section className="flex flex-col gap-3">
              <p className="font-semibold">600 Kč</p>
              <p>Standard</p>
            </section>

            <section className="flex flex-col gap-3 ">
              <select name="" id="" className="px-3 py-2 rounded-lg outline-none">
                <option value="">Short-term Stay (1-6Days)</option>
                <option value="">Short-term Stay (7-10Days)</option>
                <option value="">Short-term Stay (11-20Days)</option>
              </select>

              <button className="bg-blue-900 text-gray-50 font-semibold rounded-md px-3 py-2">Book Now</button>
            </section>

          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-2xl font-semibold mb-4 text-blue-900">First Floor</h1>
        <div className="flex flex-col gap-4 ">
          <p className="text-sm">first floor - 30 beds, meeting room and kitchen wheelchair accessible.</p>
          <div className="flex justify-between items-center bg-blue-50 hover:bg-blue-100 p-4 rounded-lg">
            <Image src={'/beautiful-city-2.jpg'} alt="beautiful-city" width={200} height={100} className="rounded-lg" />
            <section className="flex flex-col gap-3">
              <p className="font-semibold">1 Bed Room</p>
              <p className="flex items-center">1 <span><FaPerson /></span></p>
            </section>

            <hr className="" />

            <section className="flex flex-col gap-3">
              <p className="font-semibold">500 Kč</p>
              <p>Tourist</p>
            </section>

            <section className="flex flex-col gap-3">
              <p className="font-semibold">600 Kč</p>
              <p>Standard</p>
            </section>

            <section className="flex flex-col gap-3 ">
              <select name="" id="" className="px-3 py-2 rounded-lg outline-none">
                <option value="">Short-term Stay (1-6Days)</option>
                <option value="">Short-term Stay (7-10Days)</option>
                <option value="">Short-term Stay (11-20Days)</option>
              </select>

              <button className="bg-blue-900 text-gray-50 font-semibold rounded-md px-3 py-2">Book Now</button>
            </section>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Floors