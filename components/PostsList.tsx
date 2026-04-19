import Link from "next/link";
import type { Posts } from "@/types";

interface PostsListProps {
  gridLayout?: boolean;
  className?: string;
}

const PostsList = async ({}: PostsListProps) => {
  const data = await fetch(
    "https://67bf1a03b2320ee050129b6f.mockapi.io/v1/posts",
    { cache: "no-store" },
  );
  const posts = (await data.json()) as Posts;

  return (
    <ul className="grid grid-cols-3 gap-4">
      {posts.map((post) => (
        <li key={post.id} className="flex">
          <Link
            href={`/posts/${post.slug}`}
            className="bg-red-800/10 text-sm rounded-lg p-4 hover:bg-red-800/20 transition block"
          >
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-base mt-2">{post.body}</p>
            <span className="text-sm mt-2 block">{post.category}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
