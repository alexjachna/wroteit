import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import Post from "../Post";

export default function PostPage({
  username,
  bio,
  posts,
  setPosts,
  handleVote,
}) {
  const { id } = useParams();

  return (
    <div className="w-full h-fit flex flex-col">
      <Nav username={username} bio={bio} />
      <div className="px-2 lg:px-60 flex flex-col bg-zinc-50 justify-center align-center w-full">
        <h1 className="text-black text-4xl font-bold w-full py-7">yo</h1>
        {posts.map((post) => {
          if (post.id == id) {
            return <Post {...post} handleVote={handleVote} key={post.id} />;
          }
        })}
      </div>
    </div>
  );
}
