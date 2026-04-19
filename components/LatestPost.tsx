import React from "react";
import type { Post, Posts } from "@/types";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const LatestPost = async () => {
  const data = await fetch(
    "https://67bf1a03b2320ee050129b6f.mockapi.io/v1/posts",
    { cache: "no-store" },
  );
  const posts = (await data.json()) as Posts;

  // Sort by date and get the latest post
  const latestPost = posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )[0] as Post;

  if (!latestPost) {
    return <p>No posts available.</p>;
  }

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>{latestPost.title}</CardTitle>
        <p className="text-xs text-gray-500">
          {new Date(latestPost.createdAt).toLocaleDateString()}
        </p>
      </CardHeader>
      <CardContent>
        <CardDescription>{latestPost.body}</CardDescription>
      </CardContent>
      <CardFooter>
        <CardAction>
          <Link
            href={`/posts/${latestPost.slug}`}
            className={buttonVariants({ variant: "secondary" })}
          >
            Read more
          </Link>
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export default LatestPost;
