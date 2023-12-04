import Image from "next/image"
import Link from "next/link";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-wrap w-full justify-between gap-10">
      <div>
        <Link href={'/'}>
          <Image src={'/pension_atrium_footer-logo.png'} alt="pension atrium footer-logo" width={100} height={100}/>
        </Link>
      </div>
      <div>
        <h2 className=" font-semibold mb-2">Follow Us</h2>
        <ul>
          <span className="flex items-center gap-2"><FaInstagramSquare /><li className="text-sm text-slate-300 hover:text-slate-50"><a href="http://instagram.com/pensionatrium" target="_blank" rel="noopener noreferrer">pensionatrium</a></li></span>
          <span className="flex items-center gap-2"><FaFacebook /><li className="text-sm text-slate-300 hover:text-slate-50"><a href="http://facebook.com/pensionatriumcz" target="_blank" rel="noopener noreferrer">pensionatriumcz</a></li></span>
        </ul>
      </div>
      <div>
        <h2  className=" font-semibold mb-2">Pension Atrium</h2>
        <ul className="text-slate-300">
          <li className="text-sm hover:text-slate-50">Žižkova 504</li>
          <li className="text-sm hover:text-slate-50">541 01 - Trutnov</li>
          <li className="text-sm hover:text-slate-50">50°33'39.393"N,</li>
          <li className="text-sm hover:text-slate-50">15°54'15.424"E</li>
        </ul>
      </div>
      <div>
        <h2  className=" font-semibold mb-2">Zdeněk Plecháč</h2>
        <ul className="text-slate-300">
          <li className="text-sm hover:text-slate-50"><a href="http://penzionatrium@seznam.cz" target="_blank" rel="noopener noreferrer">penzionatrium@seznam.cz</a></li>
          <li className="text-sm hover:text-slate-50"><a href="http://plechac@zskomtu.cz" target="_blank" rel="noopener noreferrer">plechac@zskomtu.cz</a></li>
          <li className="text-sm hover:text-slate-50"><a href="tel:420 731 415 455">tel.: (+420) 731 415 455</a></li>
          <li className="text-sm hover:text-slate-50"><a href="http://www.penziontrutnov.cz" target="_blank" rel="noopener noreferrer">www.penziontrutnov.cz</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer