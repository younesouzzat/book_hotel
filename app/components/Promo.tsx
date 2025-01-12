import { Button } from "@/components/ui/button";
import { SaleIcon } from "@/lib/assets";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Promo() {
  return (
    <div className="relative p-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-semibold">Get promo for cheaper price</h2>
        <div className="hidden md:block">
            <Button variant="outline" size="lg"> See all <ArrowRight /> </Button>
          </div>
          
          <div className="md:hidden flex items-center w-full">
            <Button variant="outline" size="lg" className="w-full flex items-center">
              See all <ArrowRight />
            </Button>
          </div>
      </div>
      <div className="flex lg:flex-row flex-col items-center gap-2 py-5">
        <div className="relative rounded-lg overflow-hidden h-72 w-full md:w-1/2">
          <div className="absolute inset-0 from-black/65 via-black/40 to-black/10 bg-gradient-to-r z-20"></div>
          <div className="absolute w-full h-full top-0 left-0 p-6 z-20">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center justify-between space-x-2">
                <div className="flex justify-center items-center bg-yellow-400 size-10 rounded-full">
                  <SaleIcon className="size-6" />
                </div>

                <div>
                  <div className="bg-slate-600/10 backdrop-blur-md text-white rounded-full px-4 md:px-8 py-1">
                    <span className="text-white text-[13px] font-medium">
                      Valid only on 14 Jan - 20 Jan 2024
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-white font-semibold text-xl mb-1 md:pr-96 pr-0">
                  Get Extra Discount at Azure Oasis Hotel
                </p>
                <p className="text-white text-5xl font-semibold">50%</p>
              </div>
              <p className="text-white/90 text-xs font-medium">
                with Terms and conditions
              </p>
            </div>
          </div>
          <Image
            src={`/assets/images/promo-1.jpg`}
            className="absolute object-cover"
            alt="promo1"
            fill
          />
        </div>

        <div className="relative rounded-lg overflow-hidden h-72 w-full md:w-1/2">
          <div className="absolute inset-0 from-black/65 via-black/40 to-black/10 bg-gradient-to-r z-20"></div>
          <div className="absolute w-full h-full top-0 left-0 p-6 z-20">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center justify-between space-x-2">
                <div className="flex justify-center items-center bg-yellow-400 size-10 rounded-full">
                  <SaleIcon className="size-6" />
                </div>

                <div>
                  <div className="bg-slate-600/10 backdrop-blur-md text-white rounded-full px-4 md:px-8 py-1">
                    <span className="text-white text-[13px] font-medium">
                        Valid only on 16 Jan - 28 Jan 2024
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-white font-semibold text-xl mb-1 md:pr-96 pr-0">
                    Exclusive Deals Just For You
                </p>
                <p className="text-white text-5xl font-semibold">75%</p>
              </div>
              <p className="text-white/90 text-xs font-medium">
                with Terms and conditions
              </p>
            </div>
          </div>
          <Image
            src={`/assets/images/promo-2.jpg`}
            className="absolute object-cover"
            alt="promo1"
            fill
          />
        </div>
      </div>
    </div>
  );
}
