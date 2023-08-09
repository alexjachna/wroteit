import React from "react";
import { useNavigate } from "react-router-dom";

export default function Post({ username, id, community, title, desc }) {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-60 bg-white border-zinc-100 border rounded-md text-black shadow-sm"
      key={id}
    >
      <div id="content" className="h-[80%] flex">
        <div
          id="vote"
          className="flex flex-col gap-4 justify-center items-center basis-1/6"
        >
          <img
            src="../public/up-arrow.png"
            alt=""
            className="w-8 xl:w-6 invert-[25%]"
          />
          <p>0</p>
          <img
            src="../public/down-arrow.png"
            alt=""
            className="w-8 xl:w-6 invert-[25%] "
          />
        </div>
        <div
          id="info"
          className="flex flex-col gap-4 py-4 overflow-hidden basis-5/6"
        >
          <div id="credentials" className="flex gap-1 items-center">
            <p
              className="inline-block border-b border-b-gray-900 font-semibold hover:cursor-pointer"
              onClick={() => navigate(`/${community}`)}
            >
              w/{community}
            </p>
            <span className="text-gray-500">•</span>
            <p className="text-gray-500 text-sm">Posted by {username}</p>
          </div>
          <p id="title" className="text-lg font-bold">
            {title}
          </p>
          <p id="description">{desc}</p>
        </div>
      </div>
      <div
        id="comments"
        className="h-[20%] bg-slate-50 flex items-center gap-3 px-6"
      >
        <img src="../public/comments.png" alt="" className="h-6" />
        <p>0 Comments</p>
      </div>
    </div>
  );
}
