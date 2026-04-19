import Link from "next/link";
import type { Post } from "@/types";
import { notFound } from "next/navigation";

export async function findPostBySlug(slug: string): Promise<Post | null> {
  try {
    const data = await fetch(
      `https://67bf1a03b2320ee050129b6f.mockapi.io/v1/posts?slug=${slug}`,
    );
    const post = (await data.json())[0] as Post;
    return post;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
}

const PostDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const post = await findPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl">
      <Link
        href="/dashboard"
        className="text-blue-600 hover:text-blue-800 underline mb-6 inline-block"
      >
        ← Back to Dashboard
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <span className="inline-block bg-violet-600 text-white px-3 py-1 rounded text-sm font-semibold">
          {post.category}
        </span>
      </header>

      <main className="prose max-w-none">
        <p className="text-lg leading-relaxed text-gray-700">{post.body}</p>
      </main>
    </article>
  );
};

export default PostDetailPage;
