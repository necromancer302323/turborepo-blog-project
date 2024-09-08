"use client"
import { BlogCard } from "@repo/ui/BlogCard"
import {  useUsersBlogs } from "../Hooks"

import { useRouter } from "next/navigation"




export default function BlogsOfUser(){
    const router=useRouter()
    const usersBlogs = useUsersBlogs("A")

    return <div>
        {usersBlogs?.map((blog)=><div 
        key={blog.id}
        className="flex content-center">
        <BlogCard
        authorName={blog.authorId}
        title={blog.title}
        content={blog.content}
        publishedDate={blog.published}
        id={blog.id}
       
        />
        <button className="text-white bg-gray-800 h-10 p-2 m-2 rounded-md " onClick={()=>{router.push(`/userSettings/editingBlog/${blog.id}`)}}>edit</button>
       </div>
        )}
         
    </div>
}