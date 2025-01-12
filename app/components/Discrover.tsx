import { HotelCarousel } from "./HotelCarousel";

export default function Discrover() {

  return (
    <div className="relative p-10">
        <h2 className="text-2xl font-semibold">Discover you destination</h2>
        <h3 className="text-slate-400">Explore our range of property types pf every traveler s preference</h3>
        <div className="py-5">
            <HotelCarousel />
        </div>
    </div>
  )
}
