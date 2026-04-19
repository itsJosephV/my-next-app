import React from "react";
import type { Post } from "@/types";

const LatestPost = async () => {
  const data = await fetch(
    "https://67bf1a03b2320ee050129b6f.mockapi.io/v1/posts",
    { cache: "no-store" },
  );
  const latestPost = (await data.json())[0] as Post;
  return (
    <div className="bg-green-950 max-w-fit">
      <h3 className="text-lg font-semibold">{latestPost.title}</h3>
      <p className="text-base mt-2">{latestPost.body}</p>
    </div>
  );
};

export default LatestPost;
