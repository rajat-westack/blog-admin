"use client";
import React, { useState } from "react";
import { Nav } from "@/components/ui/nav";
import {
  LayoutDashboard,
  UserRound,
  Layers2,
  Cuboid,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import { ModeToggle } from "@/components/toggle_button";
type Props = {};

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSideBar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const onlyWidth = useWindowWidth();
  const mobile = onlyWidth < 768;

  return (
    <div className="relative min-w-[80]  border-r px-3 pb-10 pt-24">
      {!mobile && (
        <div className="absolute right-[-20px] top-7">
          <Button
            variant={"secondary"}
            className="rounded-full p-2  "
            onClick={toggleSideBar}
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
      )}

      <div className="pl-2">{<ModeToggle />}</div>
      <Nav
        isCollapsed={mobile ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UserRound,
            variant: "ghost",
          },
          {
            title: "Articles",
            href: "/articles",
            icon: Layers2,
            variant: "ghost",
          },
          {
            title: "Category",
            href: "/categories",
            icon: Cuboid,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
