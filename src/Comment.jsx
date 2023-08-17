import React from "react";

export default function Comment({ id, username, message }) {
  return (
    <div
      className="w-full h-fit flex flex-col gap-2 px-4 py-2 border-l"
      key={id}
    >
      <p className="text-gray-500">
        Posted by <span className="text-gray-500">•</span> {username}
      </p>
      <p>{message}</p>
      <div className="flex gap-8">
        <p className="text-xs text-gray-500 hover:text-gray-700 hover:cursor-pointer">
          REPLY
        </p>
        <p className="text-xs text-gray-500 hover:text-gray-700 hover:cursor-pointer">
          REPORT
        </p>
      </div>
    </div>
  );
}
