import Image from "next/image"

const NearbyAreas = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex gap-16">
        <Image src={'/beautiful-city-1.jpg'} alt="beautiful-city-1" width={400} height={300} className="rounded-md"/>
        <section className=" mt-10">
          <h2 className="text-xl font-semibold mb-4 text-blue-900">Trutnov city Center</h2>
          <p>Trutnov, surrounded by the Krkonoše Mountains, is a city filled with history and nature. Discover its historic sites,
            enjoy local festivals, and use it as a base for outdoor adventures. Easy transportation options make exploring the
            surrounding area a breeze.</p>
        </section>
      </div>

      <div className="flex gap-16">
        <Image src={'/beautiful-city-2.jpg'} alt="beautiful-city-2" width={400} height={300} className="rounded-md"/>
        <section className=" mt-10">
          <h2 className="text-xl font-semibold mb-4 text-blue-900">Adršpach - Teplice rocks</h2>
          <p>These unique sandstone rock formations are located just a short drive from Trutnov. They offer a fantastic hiking
            experience with dramatic landscapes. Include information on the best hiking routes and entrance fees.</p>
        </section>
      </div>

      <div className="flex gap-16">
        <Image src={'/beautiful-city-3.jpg'} alt="beautiful-city-3" width={400} height={300} className="rounded-md"/>
        <section className=" mt-10">
          <h2 className="text-xl font-semibold mb-4 text-blue-900">ZOO Dvůr Králové</h2>
          <p>ZOO Dvůr Králové is a renowned zoological garden located near Trutnov, Czech Republic. It is one of the largest
            and most respected zoos in Europe, known for its conservation efforts and breeding programs for endangered
            species. Visitors can explore diverse habitats and see a wide range of animals, including elephants, rhinoceroses,
            giraffes, and big cats. The zoo's mission is to promote wildlife conservation and educate visitors about the
            importance of protecting endangered species.</p>
        </section>
      </div>

      <div className="flex gap-16">
        <Image src={'/beautiful-city-4.jpg'} alt="beautiful-city-4" width={400} height={300} className="rounded-md"/>
        <section className=" mt-10">
          <h2 className="text-xl font-semibold mb-4 text-blue-900">Dolce Pond</h2>
          <p>Dolce Pond is a peaceful and scenic spot near Trutnov, Czech Republic. It's a great place for nature lovers to enjoy
            activities like fishing, boating, and picnicking. Surrounded by beautiful forests, it's the perfect location to relax and
            connect with nature..
            Is this how you imagined it?
            I can simplify the text so it can be more human</p>
        </section>
      </div>
    </div>
  )
}

export default NearbyAreas