"use server"
import slugify from "slugify"
import { revalidatePath } from 'next/cache'

const MOCKAPI_URL = "https://67bf1a03b2320ee050129b6f.mockapi.io/v1/posts"

type CreatePostInput = {
  title: string
  body: string
  category: string
}

export async function createPost(data: CreatePostInput) {
  const slug = slugify(data.title, { lower: true })

  const response = await fetch(MOCKAPI_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, slug, createdAt: new Date().toISOString() }),
  })

  if (!response.ok) throw new Error("Failed to create post")


  revalidatePath("/dashboard")
  return response.json()
}