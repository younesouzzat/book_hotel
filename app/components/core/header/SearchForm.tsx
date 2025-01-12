"use client";
import * as React from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Calendar as CalendarIcon, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import GuestRoom from "./GuestRoom";

export default function SearchForm() {
  
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  const [guest, setGuest] = React.useState(1);
  const [room, setRoom] = React.useState(1);

  return (
    <div>
      <Card className="dark:bg-slate-950">
        <CardContent className="flex flex-col md:flex-row items-start md:justify-between gap-5 pt-5 md:pt-10">
          
          <div className="w-full md:w-1/3">
            <Label className="font-semibold mb-2">Location</Label>
            <Select>
              <SelectTrigger className="hover:bg-slate-100 hover:text-slate-400 bg-slate-100 text-slate-400">
                <div className="flex justify-start items-center space-x-1 ">
                  <MapPin className="w-4 h-4" />
                  <SelectValue placeholder="Find Location" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="morocco">Morocco</SelectItem>
                  <SelectItem value="spain">Spain</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full md:w-1/3">
            <Label className="font-semibold mb-2">Check-in and Check-out Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal hover:bg-slate-100 hover:text-slate-400 bg-slate-100 text-slate-400",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col w-full md:w-1/3">
            <GuestRoom
              setGuest={setGuest}
              setRoom={setRoom}
              guest={guest}
              room={room}
            />
          </div>

        </CardContent>
        <CardFooter className="flex flex-col md:flex-row md:justify-between">
          <div className="w-full flex flex-wrap md:flex-row items-center space-x-2 space-y-2 md:space-x-3">
            <Label className="font-semibold mr-1">Filter</Label>
            <Button size={"sm"} className="py-0 rounded-full">
              Hotels
            </Button>
            <Button
              size={"sm"}
              variant="secondary"
              className="py-0 rounded-full"
            >
              Villas
            </Button>
            <Button
              size={"sm"}
              variant="secondary"
              className="py-0 rounded-full"
            >
              Apartments
            </Button>
            <Button
              size={"sm"}
              variant="secondary"
              className="py-0 rounded-full"
            >
              Resorts
            </Button>
            <Button
              size={"sm"}
              variant="secondary"
              className="py-0 rounded-full"
            >
              Cottages
            </Button>
          </div>
          <Button className="mt-5 w-full md:w-1/4 md:mt-0 md:px-6">
            Search Now <ArrowRight />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
