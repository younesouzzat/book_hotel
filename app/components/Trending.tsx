import { RoomsCarousel } from "./RoomsCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Trending() {
  return (
    <div className="relative p-10">
      <h2 className="text-2xl font-semibold">
        Top trending hotel in worldwide
      </h2>
      <h3 className="text-slate-400">
        Discover the top trending hotel worldwide for unforgettable experience
      </h3>
      <div className="py-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="w-full mb-5 space-x-3">
            <ul className="flex flex-wrap items-center gap-4 text-sm text-slate-900 dark:text-white font-medium">
              <li className="cursor-pointer bg-slate-900/5 dark:bg-white/10 py-2 px-4 rounded-lg">
                France
              </li>
              <li className="cursor-pointer py-2 px-4 rounded-lg">Japan</li>
              <li className="cursor-pointer py-2 px-4 rounded-lg">Italy</li>
              <li className="cursor-pointer py-2 px-4 rounded-lg">Australia</li>
            </ul>
          </div>
          
          <div className="hidden md:block">
            <Button variant="outline" size="lg"> See all <ArrowRight /> </Button>
          </div>
          
          <div className="md:hidden flex items-center w-full">
            <Button variant="outline" size="lg" className="w-full flex items-center">
              See all <ArrowRight />
            </Button>
          </div>

        </div>
        <RoomsCarousel />
      </div>
    </div>
  );
}
