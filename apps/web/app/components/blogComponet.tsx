"use client"

import { FullBlogSkeleton } from "./BlogSkeleton";
import { FullBlog } from "./FullBlog";
import { useBlog } from "../../Hooks";
import { useParams } from "next/navigation";
import { AppBar } from "@repo/ui/AppBar";

export default function BlogComponent  ()  {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    //@ts-ignore
    id: id || "",
  });
  if (loading) {
    return (
        <div>
            <AppBar/>
      <div>
        <FullBlogSkeleton/>
        <FullBlogSkeleton/>
        <FullBlogSkeleton/>
      </div>
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};
