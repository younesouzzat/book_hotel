import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, HouseIcon, Building, Building2 } from "lucide-react";

const iconMap = {
  HouseIcon: HouseIcon,
  Building: Building,
  Building2: Building2,
} as const;

type PropertyCardData = {
  icon: keyof typeof iconMap; // Ensures 'icon' is a valid key of 'iconMap'
  title: string;
  number: string;
  src: string;
};

export default function PropertyCard({ data }: { data: PropertyCardData }) {
  const IconComponent = iconMap[data.icon]; // Resolve the component from the key

  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-xl md:text-base font-medium p-0">{data.title}</p>
            <p className="text-sm md:text-base font-medium flex items-center space-x-2 dark:text-white/50 text-slate-600 p-0">
              {IconComponent && <IconComponent className="w-4 h-4" />}{" "}
              <span>{data.number} available</span>
            </p>
          </div>
          <Button
            variant={"ghost"}
            className="w-10 h-10 dark:bg-slate-950 dark:hover:bg-slate-900 dark:text-white bg-white border-2 border-gray-200 rounded"
          >
            <ArrowRight />
          </Button>
        </div>
        <Card className="mt-2">
          <CardContent className="flex relative object-cover items-center justify-center p-20">
            <Image
              alt=""
              className="rounded-sm"
              src={`/assets/images/items/${data.src}`}
              style={{ width: "100%" }}
              layout="fill"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
