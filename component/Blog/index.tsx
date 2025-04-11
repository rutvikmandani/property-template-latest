"use client";

import { globalServices } from "@/services/global.services";
import { BlogData, SingleBlogData } from "@/src/types/blog";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { FullPageLoader } from "../Loader";
import styles from "@/styles/Container.module.scss";
import Link from "next/link";

async function fetchBlog(blogId: string) {
  const res = await globalServices.getAll(`/feeds/${blogId}`);
  return res;
}

const blogData = {
  id: "67c5c6199a77db56610c42b2",
  title: "MY BLOG",
  slug: "my-blog",
  content: "<p>A Nova Blog</p>",
  posted_at: "2025-03-03T15:09:13.165000Z",
  thumbnail:
    "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/1125/blogs/images/thumbnails/1741014553_1a489dbd-6bc9-48ca-81bf-5b0e86fbfdaa.jpg",
  image:
    "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/1125/blogs/images/1741014553_1a489dbd-6bc9-48ca-81bf-5b0e86fbfdaa.jpg",
  created_at: "2025-03-03T15:09:13.705000Z",
  updated_at: "2025-03-03T15:09:13.705000Z",
  isLoading: false,
};

const Blog = ({ blogId }: { blogId: string }) => {
  //   const blogs = useQuery({
  //     queryKey: ["excludedQueryKey", blogId],
  //     queryFn: () => fetchBlog(blogId),
  //     staleTime: 1000 * 60 * 5,
  //   });
  //   const blogData: SingleBlogData = blogs?.data?.data?.data;

  return blogData?.id ? (
    <div className={`${styles.mainContainer} p-8`}>
      <div
        className={`${styles.innerContent} flex text-[#212529] flex-col gap-6`}
      >
        <img
          className="rounded-xl w-full max-h-[75vh] object-cover"
          src={blogData?.image ?? "/images/blog/blog-grid-1.jpg"}
        />
        <div className="flex justify-center">
          <div className="w-full">
            <div className="text-[40px] font-semibold leading-[47px] mb-[12px]">
              {blogData?.title}
            </div>
            <div className="text-[#1f4b43] text-[14px] mb-6">
              {moment(blogData.posted_at).format("MMMM DD, YYYY")}
            </div>
            {blogData?.content && (
              <div
                className="mb-6"
                dangerouslySetInnerHTML={{ __html: blogData.content }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  ) : blogData?.isLoading ? (
    <FullPageLoader />
  ) : (
    <div className="flex flex-col gap-6 items-center p-8">
      <h1 className="text-6xl font-bold block text-center">No Blog Found</h1>
      <Link
        href="/"
        className="px-6 py-2 text-black text-white hover:text-black bg-secondary-pinkLight rounded-lg transition"
      >
        Go Back Blogs
      </Link>
    </div>
  );
};
export default Blog;
