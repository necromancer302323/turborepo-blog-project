"use client"
import { BlogEditing } from "../../../../components/BlogEdditing";
import { useBlog } from "../../../../Hooks";
import { useParams } from "next/navigation";

export default function EditingBlog(){
    const { id } = useParams();
    const { loading, blog } = useBlog({
        //@ts-ignore
        id: id || "",
      });
    return <div>
        <BlogEditing title={blog.title} description={blog.content} Id={Number(id)}/>
    </div>
}