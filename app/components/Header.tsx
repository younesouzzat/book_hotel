"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Globe, Search, Menu, X } from "lucide-react";

import {
  Sheet,
  SheetClose,
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
  // Use CSS viewport units instead of JS for responsive height
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Handle scroll events to add header styles when scrolling
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative p-1 sm:p-2">
      <div
        className="p-2 sm:p-4 md:p-6 lg:p-10 relative rounded-xl overflow-hidden"
        style={{
          backgroundImage: "url(assets/images/banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "min(100vh, 700px)",
          width: "100%",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative w-full h-full z-10 flex flex-col">
          {/* Header navigation - both mobile and desktop */}
          <nav className={`w-full transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md rounded-lg shadow-md" : ""}`}>
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center justify-between py-4 px-2">
              <div className="flex items-center space-x-10">
                <h1 className="font-bold text-white text-2xl">Horizon</h1>
                <NavigationMenu>
                  <NavigationMenuList className="space-x-6">
                    <NavigationMenuItem className="font-medium text-white">
                      <Link href="/" className="hover:text-primary transition-colors">Hotel</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="font-medium text-white">
                      <Link href="/" className="hover:text-primary transition-colors">Flight</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="font-medium text-white">
                      <Link href="/" className="hover:text-primary transition-colors">Train</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="font-medium text-white">
                      <Link href="/" className="hover:text-primary transition-colors">Travel</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="font-medium text-white">
                      <Link href="/" className="hover:text-primary transition-colors">Car Rental</Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative w-64">
                  <Input
                    type="text"
                    placeholder="Search destination..."
                    className="pl-4 pr-10 py-2 bg-white/20 text-white placeholder:text-white/70 backdrop-blur-md border-0 focus:ring-2 focus:ring-primary"
                  />
                  <button className="absolute inset-y-0 right-0 flex items-center px-3 text-white">
                    <Search className="h-4 w-4" />
                  </button>
                </div>

                <DarkModeToggle />

                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center size-7 bg-white text-black rounded-full">
                    <Globe className="size-4" />
                  </div>
                  <Label className="text-white font-medium">EN</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="link" className="font-medium text-white hover:text-primary">
                    Log In
                  </Button>
                  <Button variant="secondary" className="font-medium">Sign Up</Button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="flex lg:hidden items-center justify-between p-4">
              <Link href="/" className="font-bold text-white text-xl sm:text-2xl z-20">
                Horizon
              </Link>

              <div className="flex items-center space-x-3">
                <DarkModeToggle />
                
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>

                  <SheetContent side="left" className="w-64 sm:w-80">
                    <SheetHeader className="mb-6">
                      <div className="flex items-center justify-between">
                        <SheetTitle className="text-xl font-bold">Horizon</SheetTitle>
                        <SheetClose asChild>
                          <Button variant="ghost" size="icon">
                            <X className="h-4 w-4" />
                          </Button>
                        </SheetClose>
                      </div>
                    </SheetHeader>

                    <div className="flex flex-col space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-muted-foreground">Navigation</h3>
                        <nav className="flex flex-col space-y-4">
                          <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">Hotel</Link>
                          <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">Flight</Link>
                          <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">Train</Link>
                          <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">Travel</Link>
                          <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">Car Rental</Link>
                        </nav>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-muted-foreground">Account</h3>
                        <div className="flex flex-col space-y-3">
                          <Button variant="outline" className="justify-start">Log In</Button>
                          <Button className="justify-start">Sign Up</Button>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center justify-center size-6 bg-primary/10 text-primary rounded-full">
                            <Globe className="size-4" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="font-medium">EN</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </nav>

          {/* Mobile search bar that appears below the header */}
          <div className="lg:hidden mt-2 px-2">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search destination..."
                className="pl-4 pr-10 py-2 bg-white/20 text-white placeholder:text-white/70 backdrop-blur-md border-0 w-full"
              />
              <button className="absolute inset-y-0 right-0 flex items-center px-3 text-white">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Hero content */}
          <div className="flex-1 flex flex-col justify-end pb-4 sm:pb-6 md:pb-8 px-2 sm:px-4">
            <div className="space-y-4 sm:space-y-6 max-w-4xl">
              <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
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