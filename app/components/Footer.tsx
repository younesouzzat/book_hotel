import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, LinkedInIcon, PinterestIcon, TikTokIcon, TwitterIcon } from "@/lib/assets";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="p-5">
      <div className="bg-slate-950 dark:bg-slate-900/40 rounded-xl p-6">
        <div className="flex flex-wrap lg:gap-y-0 gap-y-8">
          <div className="lg:w-[35%] md:w-[50%] w-full lg:pr-28">
            <h1 className="text-white font-semibold text-2xl mb-4">Horizon</h1>
            <p className="text-white/80 text-sm leading-6">
              Our mission is to equip modern explores with cutting-edge,
              functional, and stylish bags that elevate every adventure
            </p>
          </div>
          <div className="lg:w-[20%] md:w-[50%] w-full">
            <p className="text-white font-medium mb-4">About</p>

            <ul className="text-white/50 text-[15px] space-y-3 font-medium">
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Career</Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-[20%] md:w-[50%] w-full">
            <p className="text-white font-medium mb-4">Support</p>

            <ul className="text-white/50 text-[15px] space-y-3 font-medium">
              <li>
                <Link href="/">Contact Us</Link>
              </li>
              <li>
                <Link href="/">Return</Link>
              </li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-[25%] md:w-[50%] w-full">
            <p className="text-white font-medium mb-4">Get Updates</p>

            <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-1">
              <input
                placeholder="Enter your email"
                className="outline-none px-2 bg-transparent w-full text-sm text-white font-medium"
              />
              <Button>Subscribe</Button>
            </div>

            <ul className="mt-6 flex items-center justify-between gap-3">
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-center size-12 bg-white/20 rounded-full"
                >
                  <InstagramIcon className="text-white size-5" />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-center size-12 bg-white/20 rounded-full"
                >
                  <TwitterIcon className="text-white size-5" />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-center size-12 bg-white/20 rounded-full"
                >
                  <FacebookIcon className="text-white size-5" />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-center size-12 bg-white/20 rounded-full"
                >
                  <LinkedInIcon className="text-white size-5" />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-center size-12 bg-white/20 rounded-full"
                >
                  <PinterestIcon className="text-white size-5" />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-center size-12 bg-white/20 rounded-full"
                >
                  <TikTokIcon className="text-white size-5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 mt-16 border-t border-dashed border-white/5">
          <p className="text-white text-sm font-medium">
            &copy; 2023 Horizon. All rights reserved.
          </p>

          <ul className="flex items-center gap-4 font-medium text-white text-sm">
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
