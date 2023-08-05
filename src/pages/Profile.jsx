import React from "react";
import Nav from "../Nav";
import { useNavigate } from "react-router-dom";
import Post from "../Post";

export default function Profile({ username, bio, posts }) {
  const navigate = useNavigate();

  function ifPosted(post) {
    if (post.username == username) {
      return true;
    }
  }

  return (
    <div className="bg-zinc-50 w-full h-fit flex flex-col items-center gap-4">
      <Nav username={username} bio={bio} />

      <div className="flex flex-col lg:px-60 w-full">
        <p className="text-black text-4xl font-bold py-7">My Profile</p>

        <div className="flex w-full">
          <div className="relative w-full h-fit xl:w-1/2 flex flex-col items-center gap-2 bg-white border-zinc-100 border rounded-md text-black shadow-sm">
            <div className="bg-green-100 rounded-t w-full h-60 py-4 flex justify-center items-center">
              <img
                src="/public/vite.svg"
                alt=""
                className="border-slate-200 border-2 p-6 h-36 xl:h-48 shadow-sm rounded-full z-10 bg-white"
              />
            </div>

            <div className="relative rounded w-full h-48 flex flex-col items-center justify-center gap-4 px-12">
              <p className="text-black font-bold text-6xl">{username}</p>
              <p className="text-black font-light text-xl">{bio}</p>
              <div
                className="absolute flex items-center justify-center rounded-full bg-zinc-100 bottom-3 right-3 w-8 h-8"
                onClick={() => navigate("/EditProfile.jsx")}
              >
                <img
                  src="/public/edit.png"
                  alt=""
                  className="w-4 invert-[70%]"
                />
              </div>
            </div>
          </div>

          <div className=" w-11/12 h-1/2 flex flex-col items-center p-4 gap-4">
            <p className="text-black text-2xl">Your posts</p>
            {posts
              .filter((p) => p.username == username)
              .map((post) => (
                <Post
                  username={post.username}
                  id={post.id}
                  community={post.community}
                  title={post.title}
                  desc={post.desc}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
