import { BlogData } from "@/src/types/blog";
import moment from "moment";
import Link from "next/link";
import React from "react";
import styles from "@/styles/Container.module.scss";

const blogs = [
  {
    id: "67f56c44d220d08471029e52",
    title: "New Blog",
    slug: "new-blog",
    content:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus diam non lacus posuere porta. Integer aliquam laoreet orci nec aliquam. Etiam vehicula tristique augue. Donec a eros semper, malesuada augue id, consectetur neque. Vivamus id ullamcorper ligula, ac feugiat metus. Nam lobortis nec urna ac suscipit. Nullam sed tellus eleifend tellus bibendum elementum vel vitae leo. Aenean id sem ut dolor sagittis bibendum sed eget nulla. Duis commodo eros et fringilla tempor.</p><p>Aenean maximus ut orci a porttitor. Mauris convallis ipsum ut cursus ornare. In quis massa porta, euismod nisl in, dapibus nulla. Aliquam erat volutpat. In at urna eu est varius blandit nec blandit lectus. Nam ac euismod ante. Pellentesque quis mauris vel tortor bibendum malesuada. Duis nunc nulla, volutpat molestie consectetur eget, ultricies vel diam. Pellentesque ultricies erat non purus auctor pellentesque. Ut pellentesque, nulla a lacinia convallis, tortor elit pretium nisl, non posuere libero nisl sit amet nisi. Aliquam erat volutpat. Praesent diam massa, ornare ut dolor eget, aliquet aliquet lectus. Proin in enim non magna laoreet cursus eu eget metus. Donec ut nisi auctor, tincidunt erat ac, convallis arcu.</p><p>Donec id ipsum dignissim, tempus purus in, varius felis. Duis interdum pulvinar egestas. Cras gravida faucibus lorem, id ullamcorper felis pharetra a. Phasellus malesuada risus eget venenatis varius. Sed tristique nisi a purus fringilla consequat. Proin vitae lobortis arcu. In ut mattis risus. Cras vitae felis lacus. Vestibulum id enim cursus, pellentesque risus in, placerat mi. Maecenas venenatis, augue blandit laoreet tincidunt, lacus dui elementum purus, eu congue est elit at tortor. Cras cursus urna ipsum, vitae tempor risus posuere tristique. Proin imperdiet diam dolor. Duis viverra lacinia ex, eget semper sem tristique in. Maecenas pulvinar volutpat molestie. Vestibulum eu interdum lectus, ac commodo augue. Maecenas at mi ut ligula euismod viverra.</p><p>Integer urna nibh, auctor non vulputate eget, condimentum et ex. Curabitur ultricies nibh felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ut orci dolor. Sed porta vitae massa eu fringilla. Aliquam sit amet dignissim diam, lacinia viverra felis. Praesent semper est nec faucibus cursus. Morbi et leo turpis. Donec at ornare ex. Integer fermentum vitae nulla quis varius.</p>",
    posted_at: "2025-04-08T18:34:44.078000Z",
    thumbnail:
      "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/1125/blogs/images/thumbnails/1744137284_file-example-jpg-100kb.jpg",
    image:
      "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/1125/blogs/images/1744137284_file-example-jpg-100kb.jpg",
    created_at: "2025-04-08T18:34:44.385000Z",
    updated_at: "2025-04-08T18:34:44.385000Z",
  },
  {
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
  },
];

const BlogsList = () => {
  return (
    <div className={`${styles.mainContainer} p-8`}>
      <div
        className={`${styles.innerContent} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4`}
      >
        {blogs.map((blog: BlogData) => (
          <Link className="w-full" href={`/blog/${blog.slug}`}>
            <div
              className={
                "w-full bg-white rounded-t-[20px] overflow-hidden text-[#212529]"
              }
            >
              <img
                src={blog.thumbnail}
                alt={`Image ${blog.slug}`}
                className={"styles.image"}
              />
              <div className={`px-2 py-3 flex flex-col gap-2 items-center`}>
                <p className={"text-lg font-semibold truncate"}>
                  {blog.title.length > 50
                    ? `${blog.title.slice(0, 47)}...`
                    : blog.title}
                </p>
                <p className={"styles.date"}>
                  {moment(blog.created_at).format("MMMM DD, YYYY")}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsList;
