import * as React from "react";
import { HouseIcon, Building, Building2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PropertyCard from "./ProprityCard";

const iconMap = {
  HouseIcon: HouseIcon,
  Building: Building,
  Building2: Building2,
} as const;

type IconType = keyof typeof iconMap;

type Room = {
  src: string;
  icon: IconType;
  title: string;
  number: string;
};

export function HotelCarousel() {
  const rooms: Room[] = [
    { src: "image-1.jpg", icon: "HouseIcon", title: "Villa", number: "12,578" },
    { src: "image-2.jpg", icon: "Building", title: "Apartments", number: "12,850" },
    { src: "image-3.jpg", icon: "Building2", title: "Resorts", number: "50,578" },
    { src: "image-4.jpg", icon: "HouseIcon", title: "Cottage", number: "10,952" },
    { src: "image-5.jpg", icon: "Building", title: "Villa", number: "12,578" },
    { src: "image-6.jpg", icon: "Building2", title: "Apartments", number: "78,985" },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {rooms.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <PropertyCard 
              data={item} // Just pass the `item` directly
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
