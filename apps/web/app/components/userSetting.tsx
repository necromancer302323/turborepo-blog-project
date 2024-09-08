"use client"
import { useState } from "react"; 
import UserDetails from "./usersDetails";
import BlogsOfUser from "./usersBlogs";
import { AppBar } from "@repo/ui/AppBar";


export const SettingForUser = () => {
  const [usersBlogVisiblity,setUsersBlogVisiblity]=useState(false)



  return (
    <div>
      <AppBar />
      <div className="w-screen h-screen flex justify-center ">
        <div className="h-screen  grid grid-cols-4 w-fit ">
          <div className=" border-r-2">
            <div className="flex flex-col gap-10 justify-center font-medium text-gray-600 p-10">
              <button
                onClick={() => {
                  setUsersBlogVisiblity(false)
                }}
              >
                user
              </button>
              <button
                onClick={() => {
                  setUsersBlogVisiblity(true)
                }}
              >
                blogs
              </button>
            </div>
          </div>
          {!usersBlogVisiblity&&<UserDetails/>}
          {usersBlogVisiblity&&<BlogsOfUser/>}
          
        </div>
      </div>
    </div>
  );
};
