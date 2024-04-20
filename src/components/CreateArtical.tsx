"use client";
import React from "react";

export type createArticleData = {
  name: string;
  email: string;
  numberOfArticle: number;
};

const CreateArtical = (props: createArticleData) => {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <img
            width={200}
            height={200}
            src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${props.name}`}
            alt="avatar"
          />
        </div>
        <div className="text-sm">
          <p>{props.name}</p>
        </div>
        <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
          <p>{props.email}</p>
        </div>
      </section>
      <div>{props.numberOfArticle ? props.numberOfArticle : 0}</div>
    </div>
  );
};
export default CreateArtical;
