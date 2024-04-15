"use client";
import Login from "@/app/login/page";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/toggle_button";

import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
