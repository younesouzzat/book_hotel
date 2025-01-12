import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RoomCard from "./RoomCard";

type Room = {
  src: string;
  title: string;
  city: string;
  note: string;
  review: string;
  price: number;
  price_after_discount: number;
  has_discount: boolean;
  has_taxes: boolean;
  is_liked: boolean;
};

export function RoomsCarousel() {
  const room: Room[] = [
    {
      src: "image-9.jpg",
      title: "Montmartre Majesty Hotel",
      city: "Marseille",
      note: "4.7",
      review: "2,578",
      price: 250,
      has_discount: true,
      price_after_discount: 160,
      has_taxes: true,
      is_liked: false
    },
    {
      src: "image-10.jpg",
      title: "Elysée Retreat Paris",
      city: "Paris",
      note: "4.8",
      review: "1,236",
      price: 240,
      has_discount: true,
      price_after_discount: 150,
      has_taxes: true,
      is_liked: false
    },
    {
      src: "image-11.jpg",
      title: "Versailles Vista Inn",
      city: "Strasbourg",
      note: "4.7",
      review: "1,356",
      price: 220,
      has_discount: false,
      price_after_discount: 0,
      has_taxes: true,
      is_liked: false
    },
    {
      src: "image-12.jpg",
      title: "Loire Luxury Lodge Cannes",
      city: "Strasbourg",
      note: "4.9",
      review: "985",
      price: 398,
      has_discount: true,
      price_after_discount: 350,
      has_taxes: true,
      is_liked: false
    },
    {
      src: "image-13.jpg",
      title: "Montmartre Majesty Hotel",
      city: "Marseille",
      note: "4.7",
      review: "2,578",
      price: 250,
      has_discount: true,
      price_after_discount: 160,
      has_taxes: true,
      is_liked: false
    },
    {
      src: "image-14.jpg",
      title: "Elysée Retreat Paris",
      city: "Paris",
      note: "4.8",
      review: "1,236",
      price: 240,
      has_discount: true,
      price_after_discount: 150,
      has_taxes: true,
      is_liked: false
    },
    {
      src: "image-15.jpg",
      title: "Versailles Vista Inn",
      city: "Strasbourg",
      note: "4.7",
      review: "1,356",
      price: 220,
      has_discount: false,
      price_after_discount: 0,
      has_taxes: true,
      is_liked: false
    },
    {
      src: "image-16.jpg",
      title: "Loire Luxury Lodge Cannes",
      city: "Strasbourg",
      note: "4.9",
      review: "985",
      price: 398,
      has_discount: true,
      price_after_discount: 350,
      has_taxes: true,
      is_liked: false
    }
  ];
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className="w-full"
    >
      <CarouselContent>
        {room.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <RoomCard data={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
