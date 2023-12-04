"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";
import { IoMenu, IoClose  } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname()
  const [menuMobile, setMenuMobile] = useState(false)

  const showMobileLinks = () => setMenuMobile(true)
  const handleCloseMenu = () => setMenuMobile(false)

  return (
    <div className=" px-6 py-12">
      <div className="flex items-center justify-between relative">
        <Link href={'/'}>
          <Image src={'/logo.png'} alt="pensium-atrum-logo" width={150} height={200} />
        </Link>
        <ul className={`flex items-center gap-8 lg:hidden`}>
          <li><Link href={'/Accommodation'} className={`font-semibold ${pathname === '/Accommodation' ? 'bg-blue-100 text-blue-900 font-semibold rounded-md px-3 py-2' : ''}`}>Accommodation</Link></li>
          <li><Link href={'/Services'} className={`font-semibold ${pathname === '/Services' ? 'bg-blue-100 text-blue-900 font-semibold rounded-md px-3 py-2' : ''}`}>Services</Link></li>
          <li><Link href={'/Surroundings'} className={`font-semibold ${pathname === '/Surroundings' ? 'bg-blue-100 text-blue-900 font-semibold rounded-md px-3 py-2' : ''}`}>Surroundings</Link></li>
          <li><Link href={'/Contact'} className={`font-semibold ${pathname === '/Contact' ? 'bg-blue-100 text-blue-900 font-semibold rounded-md px-3 py-2' : ''}`}>Contact</Link></li>
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

        {
          menuMobile && (
            <ul className='absolute top-0 rounded-lg flex flex-col items-center gap-6 py-24 bg-blue-400 w-full '>
              <li><Link href={'/'} onClick={handleCloseMenu} className={`font-semibold ${pathname === '/' ? 'bg-blue-100 text-blue-900 font-semibold rounded-md px-3 py-2' : ''}`}>Home</Link></li>
              <li><Link href={'/Accommodation'} onClick={handleCloseMenu} className={`font-semibold ${pathname === '/Accommodation' ? 'bg-blue-100 text-blue-900 font-semibold rounded-md px-3 py-2' : ''}`}>Accommodation</Link></li>
              <li><Link href={'/Services'} onClick={handleCloseMenu}  className={`font-semibold ${pathname === '/Services' ? 'bg-blue-100 text-blue-900 font-semibold rounded-md px-3 py-2' : ''}`}>Services</Link></li>
              <li><Link href={'/Surroundings'} onClick={handleCloseMenu}  className={`font-semibold ${pathname === '/Surroundings' ? 'bg-blue-100 text-blue-900 font-semibold rounded-md px-3 py-2' : ''}`}>Surroundings</Link></li>
              <li><Link href={'/Contact'} onClick={handleCloseMenu}  className={`font-semibold ${pathname === '/Contact' ? 'bg-blue-100 text-blue-900 font-semibold rounded-md px-3 py-2' : ''}`}>Contact</Link></li>
              <li>
              <select name="" id="" className="font-semibold outline-none rounded-md shadow-md shadow-slate-700 px-3 py-2">
                <option value="Kis" className="font-semibold">Kiswahili</option>
                <option value="Eng" className="font-semibold">English</option>
                <option value="Fra" className="font-semibold">France</option>
                <option value="Ger" className="font-semibold">German</option>
              </select> 
              </li>
              <li>
                <button type="button" onClick={handleCloseMenu}  className="bg-blue-900 text-gray-50 font-semibold rounded-md px-3 py-2">Book Now</button>
              </li>
              <li className=" right-4 underline cursor-pointer hover:font-semibold" onClick={handleCloseMenu}>Close</li>
            </ul>
          )
        }

        <div className="hidden lg:block cursor-pointer text-3xl" onClick={showMobileLinks}>
          <IoMenu />
        </div>
      </div>
    </div>
  )
}

export default Navbar