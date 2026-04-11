import React from "react";
import type { Posts } from "@/types";

const page = async () => {
  const data = await fetch(
    "https://67bf1a03b2320ee050129b6f.mockapi.io/v1/posts",
    { cache: "no-store" },
  );
  const posts = (await data.json()) as Posts;

  return (
    <>
      <h2 className="text-2xl font-bold">Posts:</h2>
      <ul className="">
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p>{post.body}</p>
            <span className="text-sm text-gray-500">{post.category}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default page;
