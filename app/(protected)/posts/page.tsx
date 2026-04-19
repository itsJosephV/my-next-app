import PostsList from "@/components/PostsList";

const PostsListPage = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">All Posts</h2>
      <PostsList gridLayout={false} />
    </>
  );
};

export default PostsListPage;
