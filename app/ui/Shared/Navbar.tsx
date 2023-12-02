import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className=" px-6 py-12">
      <div className="flex items-center justify-between">
        <Link href={'/'}>
          <Image src={'/logo.png'} alt="pensium-atrum-logo" width={150} height={200} />
        </Link>
        <ul className="flex items-center gap-8">
          <li><Link href={'/Accommodation'} className="font-semibold">Accommodation</Link></li>
          <li><Link href={'/Services'} className="font-semibold">Services</Link></li>
          <li><Link href={'/Surroundings'} className="font-semibold">Surroundings</Link></li>
          <li><Link href={'/Contact'} className="font-semibold">Contact</Link></li>
          <li>
            <select name="" id="" className="font-semibold outline-none rounded-md shadow-md shadow-slate-700 px-3 py-2">
              <option value="Kis" className="font-semibold">Kiswahili</option>
              <option value="Eng" className="font-semibold">English</option>
              <option value="Fra" className="font-semibold">France</option>
              <option value="Ger" className="font-semibold">German</option>
            </select>
          </li>
          <li>
            <button type="button" className="bg-blue-900 text-gray-50 font-semibold rounded-md px-3 py-2">Book Now</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar