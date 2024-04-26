"use client";
import Login from "@/app/login/page";
import BarChart from "@/components/BarChart";
import Card, { CardContent, CardProps } from "@/components/Card";
import CreateArtical, { createArticleData } from "@/components/CreateArtical";

import PageTitle from "@/components/PageTitle";

import { DollarSign, Layers3, UserCog, UsersRound } from "lucide-react";
import { useEffect } from "react";
const carDummyData: CardProps[] = [
  {
    label: "Total Revenue",
    articles: "$251,00.55",
    discription: "+35% from last month",
    icon: DollarSign,
  },
  {
    label: "Total Articals",
    articles: "+525",
    discription: "Total Articals",
    icon: Layers3,
  },
  {
    label: "Subcriptions",
    user: "310",
    discription: "+25% Subcriptions",
    icon: UsersRound,
  },
  {
    label: "Current User Live",
    user: "+100",
    discription: "+19% Current User Live",
    icon: UserCog,
  },
];
const createArticleData: createArticleData[] = [
  {
    name: "Himanshu jain",
    email: "jain@gmail.com",
    numberOfArticle: 10,
  },
  {
    name: "Depanshu Tyagi",
    email: "tyagi@gmail.com",
    numberOfArticle: 24,
  },
  {
    name: "Ritik sharma",
    email: "sharma@gmail.com",
    numberOfArticle: 14,
  },
  {
    name: "Neha Tiwari",
    email: "tiwari@gmail.com",
    numberOfArticle: 14,
  },
  {
    name: "Purvaj Patel",
    email: "patel@gmail.com",
    numberOfArticle: 12,
  },
  {
    name: "Rituraj Patel",
    email: "Rituraj@gmail.com",
    numberOfArticle: 24,
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center gap-5 w-full ">
      <PageTitle className="text-3xl font-bold" title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-x-8 gap-4  transition-all sm:grid-cols-2 xl:grid-cols-4">
        {carDummyData.map((data, i) => (
          <Card
            key={i}
            discription={data.discription}
            icon={data.icon}
            user={data.user}
            label={data.label}
            articles={data.articles}
          />
        ))}
      </section>
      <section className="grid-cols-1 grid gap-4 transition-all lg:grid-cols-2">
        <CardContent className={`bg-white`}>
          <p className="p-4 font-semibold">Overview</p>
          <span className="color-red-400">
            <BarChart />
          </span>
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Articles</p>
            <p className="text-sm text-gray-400">Artical created this month</p>
          </section>
          {createArticleData.map((data, i) => (
            <CreateArtical
              key={i}
              name={data.name}
              email={data.email}
              numberOfArticle={data.numberOfArticle}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
