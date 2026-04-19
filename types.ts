export type Category = "Tech" | "Lifestyle" | "Travel"

export type Post = {
  title: string;
  body: string;
  category: Category;
  id: number;
  slug: string;
  createdAt: string;
}

export type Posts = Post[];