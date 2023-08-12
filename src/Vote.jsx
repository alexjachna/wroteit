import React from "react";
import { useRef, useState } from "react";

export default function Vote({ likes, setLikes }) {
  const up = useRef("");
  const down = useRef("");
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  function handleLike(ifLiked) {
    if (ifLiked) {
      if (liked && !disliked) {
        setLikes((prevLikes) => prevLikes - 1);
        setLiked(false);
        setDisliked(false);
        up.current.id = "";
      } else if (!liked && disliked) {
        setLikes((prevLikes) => prevLikes + 2);
        setLiked(true);
        setDisliked(false);
        up.current.id = "up-arrow-selected";
        down.current.id = "";
      } else if (!liked && !disliked) {
        setLikes((prevLikes) => prevLikes + 1);
        setLiked(true);
        up.current.id = "up-arrow-selected";
        down.current.id = "";
      }
    } else {
      if (liked && !disliked) {
        setLikes((prevLikes) => prevLikes - 2);
        setLiked(false);
        setDisliked(true);
        down.current.id = "down-arrow-selected";
        up.current.id = "";
      } else if (!liked && disliked) {
        setLikes((prevLikes) => prevLikes + 1);
        setLiked(false);
        setDisliked(false);
        down.current.id = "";
      } else if (!liked && !disliked) {
        setLikes((prevLikes) => prevLikes - 1);
        setDisliked(true);
        down.current.id = "down-arrow-selected";
        up.current.id = "";
      }
    }
  }

  return (
    <div
      id="vote"
      className="flex flex-col gap-4 justify-center items-center basis-1/6"
    >
      <img
        src="../public/up-arrow.png"
        alt="upvote-arrow"
        ref={up}
        className="w-8 xl:w-6 hover:cursor-pointer"
        onClick={() => {
          handleLike(true);
        }}
      />
      <p className="font-bold">{likes}</p>
      <img
        src="../public/down-arrow.png"
        alt="downvote-arrow"
        ref={down}
        className="w-8 xl:w-6 hover:cursor-pointer"
        onClick={() => {
          handleLike(false);
        }}
      />
    </div>
  );
}
