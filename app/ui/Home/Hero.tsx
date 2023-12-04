import Image from "next/image"

const Hero = () => {
  return (
    <div className="w-full flex gap-4 justify-between items-center mb-20 lg:flex-col lg:gap-16">
      <div className="w-1/2 lg:w-full">
        <h1 className="text-5xl font-semibold mb-8 lg:text-center sm:text-4xl">Discover <span className="text-blue-500">Trutnov</span>'s <br className=" lg:hidden" />Hidden Gem</h1>
        <p className=" text-lg lg:text-center">Our prime and affordable location near the historical center of
            Trutnov ensures convenience and easy access to all the
            attractions the city has to offer.
        </p>

        <form action="" className="flex flex-col">
          <div className="flex gap-4 my-5 ">
            <section className="flex flex-col w-1/2">
              <label htmlFor="checkin" className="font-semibold mb-1">Check-In:</label>
              <input type="date" name="checkin" id="checkin" className="p-2 bg-slate-300 rounded-md outline-none focus:border-blue-900" />
            </section>

            <section className="flex flex-col w-1/2">
              <label htmlFor="checkout" className="font-semibold mb-1">Check-Out:</label>
              <input type="date" name="checkout" id="checkout" className="p-2 bg-slate-300 rounded-md outline-none focus:border-blue-900" />
            </section>
          </div>
          <button className="bg-blue-900 text-gray-50 font-semibold rounded-md py-2" type="submit">Book Now</button>
        </form>
      </div>

      <div className="lg:w-full lg:flex justify-center">
        <Image src={'/hero-image.jpg'} alt="hero-image" height={500} width={500} className="rounded-lg lg:w-11/12"/>
      </div>
    </div>
  )
}

export default Hero