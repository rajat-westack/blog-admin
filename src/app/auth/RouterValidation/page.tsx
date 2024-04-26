"use client";
import UpperNavBar from "@/app/UpperSideBar/page";
import React, { useEffect, useState } from "react";
import SideNavbar from "@/app/SideNavbar/page";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function RouterValidation({ children }) {
  const route = useRouter();

  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    if (token) {
      setRedirect(true);
      route.replace("/");
    } else {
      setRedirect(false);
      route.push("/login");
    }
  }, [redirect]);
  return (
    <div className={`grid  grid-rows-[0.01fr_0fr] gap-x-[50px] gap-y-[20px]`}>
      {redirect && <UpperNavBar />}
      <div className="min-h-screen   grid grid-cols-[0.1fr_5fr]  gap-x-[20px]   ">
        <div className="">{redirect && <SideNavbar />}</div>

        <div className="mt-20 w-full -mx-2 ">{children}</div>
      </div>
    </div>
  );
}
