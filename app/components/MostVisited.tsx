import { RoomsCarousel } from "./RoomsCarousel";

export default function MostVisited() {
  return (
    <div className="relative p-10">
      <h2 className="text-2xl font-semibold">
        Most visited hotel this month
      </h2>
      <h3 className="text-slate-400">
        Trending exceptional hospitality that captivated travelers this month.
      </h3>
      <div className="py-5">
        <RoomsCarousel />
      </div>
    </div>
  );
}
