import Image from "next/image"
import { MdOutlineFreeBreakfast, MdOutlineLunchDining, MdOutlineSportsHandball, MdSportsBasketball, MdSportsKabaddi, MdSportsTennis, MdSports , MdOutlineSportsVolleyball } from "react-icons/md";
import { PiBowlFoodBold } from "react-icons/pi";
import { FaPersonSkiing } from "react-icons/fa6";

const MealSportsResorts = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex items-center gap-20">
        <Image src={'/sports-tools.jpg'} alt="sports-tools" width={400} height={400} className="rounded-lg"  />
        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-blue-900">Sports Centre of Komensky School</h2>
          <p>In the sports centre of Komenský School, which is located in the very neighbourhood of our pension (map),
              we offer to our guests:
          </p>

        <div className="flex gap-10">
          <div>
            <p className="flex items-center gap-2"><span className="text-blue-900 text-xl"><MdOutlineSportsHandball /></span>Sports Hall</p>
            <p className="flex items-center gap-2"><span className="text-blue-900 text-xl"><MdSportsKabaddi /></span>Multipurpose gym</p>
            <p className="flex items-center gap-2"><span className="text-blue-900 text-xl"><MdSportsTennis  /></span>Gymnastics hall</p>
            <p className="flex items-center gap-2"><span className="text-blue-900 text-xl"><MdOutlineSportsVolleyball  /></span>Fitness Gym</p>
            <p className="flex items-center gap-2"><span className="text-blue-900 text-xl"><MdSports /></span>Climbing Wall</p>
          </div>

          <div>
            <p className="flex items-center gap-2"><span className="text-blue-900 text-xl"><MdSportsBasketball /></span>Athletic stadium</p>
            <p className="flex items-center gap-2"><span className="text-blue-900 text-xl"><MdOutlineSportsHandball /></span>Multipurpose court</p>
            <p className="flex items-center gap-2"><span className="text-blue-900 text-xl"><MdSportsKabaddi /></span>Beach volleyball court</p>
            <p className="flex items-center gap-2"><span className="text-blue-900 text-xl"><MdSportsTennis  /></span>Asphalt circuit</p>
            <p className="flex items-center gap-2"><span className="text-blue-900 text-xl"><MdOutlineSportsVolleyball  /></span>Cross country ski trails</p>
          </div>
        </div>

        </section>
      </div>

      <div className="flex items-center gap-20">
        <Image src={'/top-view-table-full-delicious-food-composition.jpg'} alt="top-view-table-full-delicious-food-composition.jpg" width={400} height={400} className="rounded-lg" />
        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-blue-900">Meals</h2>
          <p>Only for group consisting of 20 people or more – need to order in advance</p>

          <p className="flex items-center gap-2"><span className="text-blue-900 text-xl"><MdOutlineFreeBreakfast /></span>Breakfast 80 Kč</p>
          <p className="flex items-center gap-2"><span className="text-blue-900 text-xl"><PiBowlFoodBold /></span>Half board 160 Kč</p>
          <p className="flex items-center gap-2"><span className="text-blue-900 text-xl"><MdOutlineLunchDining /></span>Full Board 240 Kč</p>

          <ul className="marker:text-blue-900  list-disc pl-5">
            <li>Snacks and drinks at the reception desk (18:00–21:00)</li>
            <li>Self cooking (induction cooker, microwave oven, dishes available)</li>
            <li>Dining room for 35 people</li>
          </ul>

        </section>
      </div>

      <div className="flex items-center gap-20">
        <Image src={'/friends-skiers-having-fun-ski-resort-mountains-winter-skiing-snowboarding.jpg'} alt="friends-skiers-having-fun-ski-resort-mountains-winter-skiing-snowboarding" width={400} height={400} className="rounded-lg" />
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-blue-900">Ski Resorts close to Trutnov</h2>
          <p>For group consisting of 20 people or more we offer free ski bus to these resorts (map)</p>

          <section>
            <p className="flex items-center gap-2"><span className="text-blue-900 text-xl"><FaPersonSkiing /></span>Ski park Mladé Buky (8 km)</p>
            <p className="flex items-center gap-2"><span className="text-blue-900 text-xl"><FaPersonSkiing /></span>Ski resort Černá Hora (14 km)</p>
            <p className="flex items-center gap-2"><span className="text-blue-900 text-xl"><FaPersonSkiing /></span>Ski area Petříkovice (9 km)</p>
            <p className="flex items-center gap-2"><span className="text-blue-900 text-xl"><FaPersonSkiing /></span>Ski area Žacléř (15 km)</p>
          </section>

        </div>
      </div>

    </div>
  )
}

export default MealSportsResorts