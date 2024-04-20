"use client";
import { DataTable } from "@/components/DataTable";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import PageTitle from "@/components/PageTitle";

const Users = () => {
  return (
    <div>
      <div className="flex flex-col justify-center gap-5">
        <PageTitle
          title="Users"
          className=" text-3xl font-bold mb-2   gap-5 "
        />
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Users;

export type data = {
  id?: string;
  name: string;
  numberOfArticle: number;
  Month_Article: number;
  email: string;
};

export const columns: ColumnDef<data>[] = [
  {
    accessorKey: "name",
    header: "name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="avatar"
          />
          <p>{row.getValue("name")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "Month_Article",
    header: "Month-Article",
  },
  {
    accessorKey: "numberOfArticle",
    header: "Total-Article",
  },
];

export const data: data[] = [
  {
    name: "Himanshu jain",
    email: "jain@gmail.com",
    numberOfArticle: 10,
    Month_Article: 5,
  },
  {
    name: "Depanshu Tyagi",
    email: "tyagi@gmail.com",
    numberOfArticle: 24,
    Month_Article: 5,
  },
  {
    name: "Ritik sharma",
    email: "sharma@gmail.com",
    Month_Article: 5,
    numberOfArticle: 14,
  },
  {
    name: "Neha Tiwari",
    email: "tiwari@gmail.com",
    numberOfArticle: 14,
    Month_Article: 1,
  },
  {
    name: "Purvaj Patel",
    email: "patel@gmail.com",
    numberOfArticle: 12,
    Month_Article: 7,
  },
  {
    name: "Rituraj Patel",
    email: "Rituraj@gmail.com",
    numberOfArticle: 24,
    Month_Article: 19,
  },
  {
    name: "Hans Pipile",
    email: "hass@gmail.com",
    numberOfArticle: 27,
    Month_Article: 9,
  },
  {
    name: "Utkarsh Patel",
    email: "utkarsh123@gmail.com",
    numberOfArticle: 55,
    Month_Article: 41,
  },
  {
    name: "Himanshu jain",
    email: "jain@gmail.com",
    numberOfArticle: 10,
    Month_Article: 5,
  },
  {
    name: "Depanshu Tyagi",
    email: "tyagi@gmail.com",
    numberOfArticle: 24,
    Month_Article: 5,
  },
  {
    name: "Ritik sharma",
    email: "sharma@gmail.com",
    Month_Article: 5,
    numberOfArticle: 14,
  },
  {
    name: "Neha Tiwari",
    email: "tiwari@gmail.com",
    numberOfArticle: 14,
    Month_Article: 1,
  },
  {
    name: "Purvaj Patel",
    email: "patel@gmail.com",
    numberOfArticle: 12,
    Month_Article: 7,
  },
  {
    name: "Rituraj Patel",
    email: "Rituraj@gmail.com",
    numberOfArticle: 24,
    Month_Article: 19,
  },
  {
    name: "Hans Pipile",
    email: "hass@gmail.com",
    numberOfArticle: 27,
    Month_Article: 9,
  },
  {
    name: "Utkarsh Patel",
    email: "utkarsh123@gmail.com",
    numberOfArticle: 55,
    Month_Article: 41,
  },
  {
    name: "Himanshu jain",
    email: "jain@gmail.com",
    numberOfArticle: 10,
    Month_Article: 5,
  },
  {
    name: "Depanshu Tyagi",
    email: "tyagi@gmail.com",
    numberOfArticle: 24,
    Month_Article: 5,
  },
  {
    name: "Ritik sharma",
    email: "sharma@gmail.com",
    Month_Article: 5,
    numberOfArticle: 14,
  },
  {
    name: "Neha Tiwari",
    email: "tiwari@gmail.com",
    numberOfArticle: 14,
    Month_Article: 1,
  },
  {
    name: "Purvaj Patel",
    email: "patel@gmail.com",
    numberOfArticle: 12,
    Month_Article: 7,
  },
  {
    name: "Rituraj Patel",
    email: "Rituraj@gmail.com",
    numberOfArticle: 24,
    Month_Article: 19,
  },
  {
    name: "Hans Pipile",
    email: "hass@gmail.com",
    numberOfArticle: 27,
    Month_Article: 9,
  },
  {
    name: "Utkarsh Patel",
    email: "utkarsh123@gmail.com",
    numberOfArticle: 55,
    Month_Article: 41,
  },
  {
    name: "Himanshu jain",
    email: "jain@gmail.com",
    numberOfArticle: 10,
    Month_Article: 5,
  },
  {
    name: "Depanshu Tyagi",
    email: "tyagi@gmail.com",
    numberOfArticle: 24,
    Month_Article: 5,
  },
  {
    name: "Ritik sharma",
    email: "sharma@gmail.com",
    Month_Article: 5,
    numberOfArticle: 14,
  },
  {
    name: "Neha Tiwari",
    email: "tiwari@gmail.com",
    numberOfArticle: 14,
    Month_Article: 1,
  },
  {
    name: "Purvaj Patel",
    email: "patel@gmail.com",
    numberOfArticle: 12,
    Month_Article: 7,
  },
  {
    name: "Rituraj Patel",
    email: "Rituraj@gmail.com",
    numberOfArticle: 24,
    Month_Article: 19,
  },
  {
    name: "Hans Pipile",
    email: "hass@gmail.com",
    numberOfArticle: 27,
    Month_Article: 9,
  },
  {
    name: "Utkarsh Patel",
    email: "utkarsh123@gmail.com",
    numberOfArticle: 55,
    Month_Article: 41,
  },
  {
    name: "Depanshu Tyagi",
    email: "tyagi@gmail.com",
    numberOfArticle: 24,
    Month_Article: 5,
  },
  {
    name: "Ritik sharma",
    email: "sharma@gmail.com",
    Month_Article: 5,
    numberOfArticle: 14,
  },
  {
    name: "Neha Tiwari",
    email: "tiwari@gmail.com",
    numberOfArticle: 14,
    Month_Article: 1,
  },
  {
    name: "Purvaj Patel",
    email: "patel@gmail.com",
    numberOfArticle: 12,
    Month_Article: 7,
  },
  {
    name: "Rituraj Patel",
    email: "Rituraj@gmail.com",
    numberOfArticle: 24,
    Month_Article: 19,
  },
  {
    name: "Hans Pipile",
    email: "hass@gmail.com",
    numberOfArticle: 27,
    Month_Article: 9,
  },
  {
    name: "Utkarsh Patel",
    email: "utkarsh123@gmail.com",
    numberOfArticle: 55,
    Month_Article: 41,
  },
  {
    name: "Depanshu Tyagi",
    email: "tyagi@gmail.com",
    numberOfArticle: 24,
    Month_Article: 5,
  },
  {
    name: "Ritik sharma",
    email: "sharma@gmail.com",
    Month_Article: 5,
    numberOfArticle: 14,
  },
  {
    name: "Neha Tiwari",
    email: "tiwari@gmail.com",
    numberOfArticle: 14,
    Month_Article: 1,
  },
  {
    name: "Purvaj Patel",
    email: "patel@gmail.com",
    numberOfArticle: 12,
    Month_Article: 7,
  },
  {
    name: "Rituraj Patel",
    email: "Rituraj@gmail.com",
    numberOfArticle: 24,
    Month_Article: 19,
  },
  {
    name: "Hans Pipile",
    email: "hass@gmail.com",
    numberOfArticle: 27,
    Month_Article: 9,
  },
  {
    name: "Utkarsh Patel",
    email: "utkarsh123@gmail.com",
    numberOfArticle: 55,
    Month_Article: 41,
  },
  // ...
];
