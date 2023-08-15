import React from "react";
import Vote from "./Vote";

export default function Comment({ username, comment }) {
  return (
    <div className="w-full h-fit px-4 py-2 ">
      <p className="text-gray-500">
        Posted by <span className="text-gray-500">•</span> {username}
      </p>
      <p>{comment}</p>
      <div>
        <p>reply</p>
      </div>
    </div>
  );
}
