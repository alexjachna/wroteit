import React, { useState } from "react";

export default function Comment({ id, postId, username, message, addComment }) {
  const [showTextarea, setShowTextarea] = useState(false);
  const [reply, setReply] = useState("@" + username + " ");

  function handleReplyAdd(e) {
    e.preventDefault();

    addComment(postId, reply);

    setShowTextarea(!showTextarea);

    setReply("@" + username);
  }

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
        <p
          className="text-xs text-gray-500 hover:text-gray-700 hover:cursor-pointer"
          onClick={() => setShowTextarea(!showTextarea)}
        >
          REPLY
        </p>
        <p className="text-xs text-gray-500 hover:text-gray-700 hover:cursor-pointer">
          REPORT
        </p>
      </div>
      {showTextarea && (
        <div className=" p-4 border-b">
          <form onSubmit={handleReplyAdd}>
            <textarea
              name="description"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="what is your reply?"
              className="w-full h-48 border rounded-sm p-4 text-black resize-none"
              required
            ></textarea>
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white w-48 font-bold py-2 px-4 rounded"
              >
                Reply
              </button>
              <p
                className="text-gray-500 text-xs hover:cursor-pointer hover:text-gray-700"
                onClick={() => setShowTextarea(!showTextarea)}
              >
                cancel
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
