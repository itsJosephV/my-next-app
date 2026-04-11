import type { Posts } from "@/types";

export default async function Home() {
  const data = await fetch(
    "https://67bf1a03b2320ee050129b6f.mockapi.io/v1/posts",
    { cache: "no-store" },
  );
  const posts = (await data.json()) as Posts;

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world from Dockploy!
      </h1>
      <div className="mt-4">
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
      </div>
    </div>
  );
}
