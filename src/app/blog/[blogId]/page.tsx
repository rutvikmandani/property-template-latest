import Blog from "@/component/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog Detail'
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>
}) {
  const { blogId } = await params;
  return blogId ? <Blog blogId={blogId} /> : null;
}