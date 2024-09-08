"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../../config";
import { devNull } from "os";
import { Tillana } from "next/font/google";

interface Blogs {
  id: number;
  content: string;
  title: string;
  author: {
    name: string;
  };
}

export const useUserDetails = () => {
  type userDetail = {
    email: string;
    password: string;
  };
  const [usersDetails, setusersDetails] = useState<userDetail>({
    email: "",
    password: "",
  });
  async function GettingUsersData() {
    const res = await axios.get(`${BACKEND_URL}/api/v1/user/usersDetails`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setusersDetails(res.data);
  }
  useEffect(() => {
    GettingUsersData();
  }, []);

  return usersDetails;
};

export const useUsersBlogs = (a: string) => {
  type blogTypes = {
    id: number;
    title: string;
    content: string;
    published: string;
    authorId: string;
  };
  const [usersBlogs, setusersBlogs] = useState<blogTypes[]>();
  async function gettingUsersBlogs() {
    const res = await axios.get(`${BACKEND_URL}/api/v1/blog/usersBlogs`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setusersBlogs(res.data);
  }
  useEffect(() => {
    gettingUsersBlogs();
  }, []);
  return usersBlogs;
};


export const useBlogs = (a: string) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blogs[]>([]);
  async function FetchingBlogs() {
    const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setBlogs(res.data.blog);
    setLoading(false);
  }
  useEffect(() => {
    FetchingBlogs();
  }, []);
  return {
    loading,
    blogs,
  };
};
export interface Blog {
  id: number;
  content: string;
  title: string;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>({
    id: 1,
    content: "",
    title: "",
    author: {
      name: "",
    },
  });
  async function FetchingBlog() {
    const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    setBlog(res.data.blog);
    setLoading(false);
  }
  useEffect(() => {
    FetchingBlog();
  }, [id]);
  return {
    loading,
    blog,
  };
};
