import Image from "next/image"

const SampleImages = () => {
  return (
    <div className=" w-full mb-20">
      <div className="flex gap-4">
        <div className=" w-1/4">
          <Image src={'/home-fle-img-1.jpg'} alt="home-fle-img" width={500} height={500} className="rounded-lg shadow shadow-blue-900"/>
        </div>
        <div className=" w-1/4">
          <Image src={'/home-fle-img-2.jpg'} alt="home-fle-img" width={500} height={500} className="rounded-lg shadow shadow-blue-900"/>
        </div>
        <div className=" w-1/4">
          <Image src={'/home-fle-img-1.jpg'} alt="home-fle-img" width={500} height={500} className="rounded-lg shadow shadow-blue-900"/>
        </div>
        <div className=" w-1/4">
          <Image src={'/home-fle-img-2.jpg'} alt="home-fle-img" width={500} height={500} className="rounded-lg shadow shadow-blue-900"/>
        </div>
      </div>
    </div>
  )
}

export default SampleImages