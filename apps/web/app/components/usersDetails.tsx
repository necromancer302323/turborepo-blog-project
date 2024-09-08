"use client";

import { useUserDetails } from "../Hooks";
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../../../config";
export default  function UserDetails() {

  let details = useUserDetails();
  const email = details.email;
  const password = details.password;
  const [UpdatedEmail, setUpdatedEmail] =  useState("");
  const [UpdatedPassword, setUpdatedPassword] = useState("");

  return (
    <div className=" col-span-3 w-[40rem]">
      <div className="flex flex-col gap-10 justify-center p-10 w-96 ">
        <div className="flex flex-col gap-2">
          <label>Username:</label>
          <input
          onChange={(e) => {
            setUpdatedEmail(e.target.value);
            console.log(e.target.value)
          }}
            defaultValue={email}
            className="border-2 border-slate-200 rounded-md p-2"
          ></input>
        </div>
      </div>

      <div className="flex flex-col gap-10 justify-center p-10 w-96 ">
        <div className="flex flex-col gap-2">
          <label>password:</label>
          <input
            onChange={(e) => {
              setUpdatedPassword(e.target.value);
            }}
            defaultValue={password}
            className="border-2 border-slate-200 rounded-md p-2"
          ></input>
        </div>
        <button 
        onClick={async ()=>{
         
          const res=await axios.put(`${BACKEND_URL}/api/v1/user/updatingUsersDetails`,{
           Email:UpdatedEmail,
           password:UpdatedPassword
          }, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
          }
        )
        alert(res.data.message)
        }}
        className="text-white bg-gray-800 h-10 p-2 m-2 rounded-md 
         hover:bg-gray-700 ">
          Update your details
        </button>
      </div>
    </div>
  );
}
