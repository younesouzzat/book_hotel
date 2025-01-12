import { Button } from "@/components/ui/button";
import {
  image5,
  image7,
  ArrowRightIcon,
  GlobalIcon,
} from "@/lib/assets";
import Image from "next/image";
import React from "react";

export const Explore = () => {
  return (
    <div className="relative p-10">
      <div className="parent flex flex-col md:flex-row space-x-4">
        <div className="flex flex-col space-y-4 w-full md:w-[35%] h-[500px]">
          <div className="relative rounded-lg overflow-hidden h-[60%]">
            {/* overlay */}
            <div className="bg-slate-950/60 backdrop-blur-lg z-20 absolute top-0 left-0 w-full h-full"></div>

            {/* Content */}
            <div className="absolute w-full h-full top-0 left-0 p-6 z-20">
              <div className="relative flex flex-col space-y-10">
                <div className="icon flex justify-center items-center size-10 rounded-lg bg-white/10">
                  <GlobalIcon className="text-white size-6" />
                </div>
                <div>
                  <p className="text-white font-medium text-2xl">
                    Explore more to get your comfort zone
                  </p>
                  <p className="text-white text-base">
                    Book your perfect stay with us.
                  </p>
                </div>
                <div>
                  <Button>
                    Booking Now <ArrowRightIcon />
                  </Button>
                </div>
              </div>
            </div>

            {/* Image */}
            <Image
              src={image5}
              className="absolute object-cover"
              alt="image5"
              fill
            />
          </div>

          <div className="relative rounded-lg overflow-hidden h-[40%]">
            {/* Overlay */}
            <div className="absolute inset-0 from-black/65 via-black/40 to-black/10 bg-gradient-to-l z-20"></div>

            {/* Content */}
            <div className="absolute w-full h-full top-0 left-0 p-6 z-20">
              <div className="relative w-full h-full flex flex-col">
                <div className="absolute left-0 bottom-0">
                  <p className="text-white font-medium text-2xl">
                    Hotel Available
                  </p>
                  <p className="text-white font-medium text-[34px]">
                    1,765,489
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <Image
              src={image7}
              className="absolute object-cover"
              alt="image7"
              fill
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[65%]">
          <div className="relative rounded-lg overflow-hidden h-full">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-20"></div>

            {/* Content */}
            <p className="absolute w-full md:px-28 px-5 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-white font-medium">
                Beyond acomodation, creating memories of a life time
            </p>

            {/* Image */}
            <Image
              src={image7}
              className="absolute object-cover"
              alt="image7"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};
