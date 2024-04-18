"use client";

import { ModeToggle } from "@/components/toggle_button";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Newspaper } from "lucide-react";
import React from "react";

type Props = {};

export default function UpperNavBar({}: Props) {
  return (
    <nav className="bg-white  dark:bg-gray-900  fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 h-auto">
      <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse ">
          <div className=" rounded-full flex justify-center items-center border-2 border-white w-10 h-10">
            <Newspaper size={25} strokeWidth={1} />
          </div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Articles Point
          </span>
        </div>
        <div className="flex  justify-around">
          <div className=" mr-2 overflow-hidden">{<ModeToggle />}</div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-blue-500Dashboard" variant="outline">
                Profile
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘+S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
