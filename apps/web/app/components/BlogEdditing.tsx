"use client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { AppBar } from "@repo/ui/AppBar";
import { BACKEND_URL } from "../../../config";

type BlogContentType = { 
    title: string; 
    description: string,
    Id:number
};

export const BlogEditing = ({ title, description,Id}: BlogContentType) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const route = useRouter();
  return (
    <div>
      <AppBar />
      <div className="flex justify-center w-full pt-8">
        <div className="max-w-screen-lg w-full">
          <input
            defaultValue={title}
            onChange={(e) => {
              setUpdatedTitle(e.target.value);
              
            }}
            type="text"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Title"
          />

          <TextEditor
            onChange={(e) => {
              setUpdatedDescription(e.target.value);
            }}
            inputValue={description}
          />
          <button
          onClick={async ()=>{
            const res=await axios.put(`${BACKEND_URL}/api/v1/blog/updatingBlog`,{
              title:updatedTitle,
              content:updatedDescription,
              id:Id
            }, {
              headers: {
                  Authorization: localStorage.getItem("token")
              }
            }
          )
          console.log(res.data.message)
         alert(res.data.message)
          route.push("/userSettings")
          }}
            type="submit"
            className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Edit post
          </button>
        </div>
      </div>
    </div>
  );
};

type TextEditorType = {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  inputValue: string;
};

function TextEditor({ onChange, inputValue }: TextEditorType) {
  return (
    <div className="mt-2">
      <div className="w-full mb-4 ">
        <div className="flex items-center justify-between border">
          <div className="my-2 bg-white rounded-b-lg w-full">
            <label className="sr-only">Publish post</label>
            <textarea
              defaultValue={inputValue}
              onChange={onChange}
              id="editor"
              rows={8}
              className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2"
              placeholder="Write an article..."
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
