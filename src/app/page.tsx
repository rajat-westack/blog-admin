"use client";
import Login from "@/Pages/Login";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/toggle_button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center container items-center   ">
      <Login />
    </div>
  );
}
