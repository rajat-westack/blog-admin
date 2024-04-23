"use client";
import UpperNavBar from "@/app/UpperSideBar/page";
import React, { useEffect, useState } from "react";
import SideNavbar from "@/app/SideNavbar/page";
import Login from "@/app/login/page";
import { useRouter } from "next/navigation";

export default function RouterValidation({ children }) {
  const router = useRouter();
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setRedirect(true);
      router.push("/dashboard");
    } else {
      setRedirect(false);
      router.push("/login");
    }
  }, [redirect]);
  return (
    <>
      <div className={`grid  grid-rows-[0.01fr_0fr] gap-x-[50px] gap-y-[20px]`}>
        {redirect && <UpperNavBar />}
        <div className="min-h-screen   grid grid-cols-[0.1fr_5fr]  gap-x-[20px]   ">
          <div className="">{redirect && <SideNavbar />}</div>

          <div className="mt-20 w-full -mx-2 ">{children}</div>
        </div>
      </div>
    </>
  );
}
