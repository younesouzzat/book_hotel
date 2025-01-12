"use client";
import { useState } from "react";
import Image from "next/image";
import { MapPinIcon, Star } from "lucide-react";

import {
    HeartAngelIcon,
  HeartIcon
} from "@/lib/assets";

type RoomCardProps = {
  data: {
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
};

export default function RoomCard({ data }: RoomCardProps) {
  const [isLiked, setIsLiked] = useState(data.is_liked);

  const changeLikedItemStatus = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="mt-5">
      <div className="flex relative object-cover items-center justify-center p-28">
        <Image
          alt=""
          className="rounded-sm"
          src={`/assets/images/items/${data.src}`}
          style={{ width: "100%" }}
          layout="fill"
        />
        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-lg size-7 rounded-full flex items-center justify-center">
          <button onClick={changeLikedItemStatus} >
            { isLiked && isLiked ? 
                (<HeartAngelIcon className="size-5 text-red-500" />):
                (<HeartIcon className="size-5 text-white" />)
            }
          </button >
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-md font-medium mt-2">{data.title}</p>
          <div className="text-sm font-medium flex flex-col justify-start space-y-2 text-slate-600 p-0">
            <div className="flex items-center">
              <MapPinIcon className="w-4 h-4 mr-1" /> <span className="dark:text-white/50">{data.city}</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />{" "}
              <span className="dark:text-white/50">
                {data.note} ({data.review} review)
              </span>
            </div>
            <div className="flex items-center">
              {data.has_discount ? (
                <span className="text-xl dark:text-white/50 text-gray-950">
                  ${data.price_after_discount}{" "}
                  <del className="text-sm text-gray-500">${data.price}</del>
                </span>
              ) : (
                <span className="text-xl dark:text-white/50 text-gray-950 font-semibold">
                  ${data.price}
                </span>
              )}
            </div>
            <div className="flex items-center">
              {data.has_taxes && (
                <span className="text-xs dark:text-white/50">include taxes and fees</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
