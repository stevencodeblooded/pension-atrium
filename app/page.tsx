import Amenities from "./ui/Home/Amenities";
import Hero from "./ui/Home/Hero";
import SampleImages from "./ui/Home/SampleImages";

export default function Home() {
  return (
    <div className="px-6 py-12">
      <Hero />
      <SampleImages />
      <Amenities />
    </div>
  )
}
