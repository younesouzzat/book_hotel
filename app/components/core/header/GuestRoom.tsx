"use client";

import {
  Button,
  Group,
  Input,
  NumberField,
} from "react-aria-components";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button as ShadCnButton } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { UserIcon } from "@/lib/assets";
import { Label } from "@/components/ui/label";

type GuestRoomProps = {
  setGuest: (value: number) => void;
  setRoom: (value: number) => void;
  guest: number;
  room: number;
};

const GuestRoom = ({ setGuest, setRoom, guest, room }: GuestRoomProps) => {
  return (
    <div className="w-full">
      <Label className="font-semibold mr-1">Guests and Rooms</Label>

      <Popover>
        <PopoverTrigger asChild>
          <ShadCnButton
            variant="outline"
            className="border-none bg-gray-100 rounded-md h-9 w-full justify-start text-slate-500"
          >
            <UserIcon className="size-4 text-slate-500" /> {guest} guest, {room}{" "}
            room
          </ShadCnButton>
        </PopoverTrigger>
        <PopoverContent className="w-[450px] space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-foreground text-slate-900 dark:text-white">
              Guest
            </p>
            <div className="w-40">
              <NumberField
                onChange={(value) => setGuest(value)}
                defaultValue={guest}
                minValue={0}
              >
                <Group className="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-slate-300 dark:border-gray-800/90 text-sm ring-offset-background data-[focus-within]:border-ring data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-1 data-[focus-within]:ring-slate-800/20 dark:data-[focus-within]:ring-white/10 data-[focus-within]:ring-offset-2 data-[focus-within]:ring-offset-white dark:data-[focus-within]:ring-offset-slate-900">
                  <Button
                    slot="decrement"
                    className="-ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-lg border border-slate-300 dark:border-gray-800/90 bg-background text-sm text-muted-foreground/80 ring-offset-background hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Minus size={16} strokeWidth={2} aria-hidden="true" />
                  </Button>
                  <Input className="w-full bg-white dark:bg-slate-950 grow bg-background px-3 py-2 text-center tabular-nums text-foreground focus:outline-none" />
                  <Button
                    slot="increment"
                    className="-me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-lg border border-slate-300 dark:border-gray-800/90 bg-background text-sm text-muted-foreground/80 ring-offset-background hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Plus size={16} strokeWidth={2} aria-hidden="true" />
                  </Button>
                </Group>
              </NumberField>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-foreground text-slate-900 dark:text-white">
              Room
            </p>
            <div className="w-40">
              <NumberField
                onChange={(value) => setRoom(value)}
                defaultValue={room}
                minValue={0}
              >
                <Group className="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-slate-300 dark:border-gray-800/90 text-sm ring-offset-background data-[focus-within]:border-ring data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-1 data-[focus-within]:ring-slate-800/20 dark:data-[focus-within]:ring-white/10 data-[focus-within]:ring-offset-2 data-[focus-within]:ring-offset-white dark:data-[focus-within]:ring-offset-slate-900">
                  <Button
                    slot="decrement"
                    className="-ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-lg border border-slate-300 dark:border-gray-800/90 bg-background text-sm text-muted-foreground/80 ring-offset-background hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Minus size={16} strokeWidth={2} aria-hidden="true" />
                  </Button>
                  <Input className="w-full bg-white dark:bg-slate-950 grow bg-background px-3 py-2 text-center tabular-nums text-foreground focus:outline-none" />
                  <Button
                    slot="increment"
                    className="-me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-lg border border-slate-300 dark:border-gray-800/90 bg-background text-sm text-muted-foreground/80 ring-offset-background hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Plus size={16} strokeWidth={2} aria-hidden="true" />
                  </Button>
                </Group>
              </NumberField>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default GuestRoom;