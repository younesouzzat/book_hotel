"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Globe, Search, Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import SearchForm from "./core/header/SearchForm";
import Link from "next/link";
import { Label } from "@radix-ui/react-label";
import { DarkModeToggle } from "./core/header/DarkModeToggle";

export const Header = () => {
  const [height, setHeight] = React.useState("100vh");

  React.useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerWidth <= 768 ? "70vh" : "100vh");
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="relative p-1 md:p-2">
      <div
        className="p-2 md:p-10 relative"
        style={{
          backgroundImage: "url(assets/images/banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: height,
          width: "100%",
          borderRadius: "12px",
        }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-black rounded-xl opacity-50 z-0"></div>
        <div className=" relative w-full h-full z-10">
          {/* Web Menu */}
          <div className="hidden md:flex items-center justify-between">
            <div className="logo flex justify-around items-center space-x-10">
              <h1 className="font-bold text-white text-2xl">Horizon</h1>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="font-medium text-white space-x-10">
                    <Link href="/">Hotel</Link>
                    <Link href="/">Flight</Link>
                    <Link href="/">Train</Link>
                    <Link href="/">Travel</Link>
                    <Link href="/">Car Rental</Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex justify-center w-80 relative">
              <Input
                type="text"
                placeholder="Search destination ..."
                className="px-5 py-5 bg-white font-medium placeholder:text-white bg-opacity-20 text-white backdrop-blur-md"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-5">
                <Search className="h-5 w-5 text-white" />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center space-x-4">
                <DarkModeToggle />

                <div className="flex justify-between items-center">
                  <div className="flex items-center justify-center size-7 mr-2 bg-white text-black rounded-full">
                    <Globe className="size-5" />
                  </div>
                  <Label className="text-white font-medium">EN</Label>
                </div>

                <div className="flex justify-between">
                  <Button variant="link" className="font-semibold text-white">
                    Log In
                  </Button>
                  <Button variant={"secondary"}>Sign Up</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center justify-between px-2">
            <h1 className="font-bold text-white text-2xl">Horizon</h1>

            <DarkModeToggle />
            
            <Sheet>
              <SheetTrigger>
                <Menu className="font-bold text-white" />
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem className="flex flex-col items-start space-y-5 font-semibold">
                        <Link href="/">Hotel</Link>
                        <Link href="/">Flight</Link>
                        <Link href="/">Train</Link>
                        <Link href="/">Travel</Link>
                        <Link href="/">Car Rental</Link>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          <div className="absolute bottom-2 left-0 w-full">
            <div className="relative space-y-4">
              <h1 className="text-white font-semibold text-2xl text-center md:text-left md:text-5xl">
                Find Your Best Staycation
              </h1>
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
