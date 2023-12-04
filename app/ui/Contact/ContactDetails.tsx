const ContactDetails = () => {
  return (
    <div>
      <h2 className="text-xl font-medium mb-3 text-blue-900">Contact Details</h2>
      <div className="flex gap-4 w-full">
        <ul className="w-1/2 ">
          <h3 className="mb-2 font-semibold">Pension Atrium</h3>
          <li>Žižkova 504</li>
          <li className="mb-2">541 01 - Trutnov</li>
          
          <li>50°33'39.393"N,</li>
          <li>15°54'15.424"E</li>
        </ul>

        <ul className="w-1/2 ">
          <h3 className="mb-2 font-semibold">Zdeněk Plecháč</h3>
          <li><a href="http://penzionatrium@seznam.cz" target="_blank" rel="noopener noreferrer">penzionatrium@seznam.cz</a></li>
          <li className="mb-2"><a href="http://plechac@zskomtu.cz" target="_blank" rel="noopener noreferrer">plechac@zskomtu.cz</a></li>
          <li><a href="tel:+420 731 415 455">tel.:(+420) 731 415 455 </a></li>
          <li><a href="http://www.penziontrutnov.cz" target="_blank" rel="noopener noreferrer">www.penziontrutnov.cz</a></li>
        </ul>
      </div>


      








    </div>
  )
}

export default ContactDetails