"use client";

import { ModeToggle } from "@/components/toggle_button";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/ui/nav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Newspaper } from "lucide-react";
import React, { useState } from "react";

type Props = {};

export default function UpperNavBar({}: Props) {
  return (
    <nav className="bg-white  dark:bg-gray-900  fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 h-auto">
      <div className="    flex flex-wrap   items-center justify-between ml-auto p-4">
        <div className="flex items-center  space-x-3 rtl:space-x-reverse ">
          <div className=" rounded-full flex justify-center items-center border-2 border-white w-10 h-10">
            <Newspaper size={25} strokeWidth={1} />
          </div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Articles Point
          </span>
        </div>
        <div className="flex mr-5  justify-around">
          <div className=" mr-5 overflow-hidden">{<ModeToggle />}</div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-blue-500" variant="outline">
                Profile
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
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
