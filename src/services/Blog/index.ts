"use server";

import { Blog } from "@/types/blog";
import { revalidateTag } from "next/cache";

export const blog = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
      next: {
        tags: ["BLOG"],
      },
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const createBlog = async (blogData: Blog) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });
    revalidateTag("BLOG");
    return res.json();
  } catch (error: any) {
    console.error("Error:", error);
    return { success: false, message: error.message };
  }
};

export const deleteBlog = async (blogId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`,
      {
        method: "DELETE",
      }
    );
    revalidateTag("BLOG");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const updateBlog = async (blogData: Blog, blogId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      }
    );

    revalidateTag("BLOG");
    return res.json();
  } catch (error: any) {
    console.error("Error:", error);
    return { success: false, message: error.message };
  }
};
