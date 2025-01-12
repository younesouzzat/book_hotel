import * as React from "react";

import { Marquee } from "../../../components/ui/Marquee";

import Brand from "./Brand";

import {
  Brand1Logo,
  Brand2Logo,
  Brand3Logo,
  Brand4Logo,
  Brand5Logo,
  Brand6Logo,
  Brand7Logo,
} from "@/lib/assets";

type Brand = {
  logo: React.ComponentType;
};

export function BrandCarousel() {
  const logos = [
    Brand1Logo,
    Brand2Logo,
    Brand3Logo,
    Brand4Logo,
    Brand5Logo,
    Brand6Logo,
    Brand7Logo
  ];

  return (
    <div className="relative my-2 flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {logos.map((logo, idx) => (
          <Brand key={idx} logo={logo} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-slate-950 dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-slate-950 dark:from-background"></div>
    </div>
  );
}
