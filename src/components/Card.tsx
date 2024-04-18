"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  user?: string;
  articles?: string;
  discription: string;
};

export default function Card(props: CardProps) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <CardContent
      data-aos="flip-up"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-duration="900"
    >
      <section className="flex justify-between gap-2">
        {/* label */}
        <p className="text-sm">{props.label}</p>
        {/* icon */}
        <props.icon className="h-4 w-5 text-gray-400" />
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{props.user}</h2>
        <h2 className="text-2xl font-semibold">{props.articles}</h2>
        <p className="text-xs text-gray-500">{props.discription}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        props.className
      )}
    />
  );
}
