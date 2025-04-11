import React from "react";
import { Metadata } from "next";
import BlogsList from "@/component/BlogsList";

export const metadata: Metadata = {
  title: "Blog List",
};

const Blogs = () => {
  return <BlogsList />;
};

export default Blogs;
