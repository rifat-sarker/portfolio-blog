"use client";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { deleteBlog } from "@/services/Blog";
import BlogModal from "./BlogModal";
import { Blog } from "@/types/blog";

const BlogCard = ({ blog }: { blog: Blog }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDeleteBlog = async () => {
    // const isConfirmed = window.confirm(
    //   "Are you sure you want to delete this project?"
    // );
    // if (!isConfirmed) return;

    try {
      const res = await deleteBlog(blog._id);
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message || "Failed to delete blog.");
      }
    } catch (err: any) {
      toast.error(err?.message || "An error occurred.");
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="space-y-3">
      <Image
        src={blog.image || "/default-placeholder.png"}
        alt={blog.title || "blog_img"}
        height={500}
        width={500}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <span className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-full w-fit">
        {blog.category}
      </span>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={openModal}
          className="px-4 py-2 bg-[#176433] text-white rounded-lg hover:bg-green-600"
        >
          Edit
        </button>
        <button
          onClick={handleDeleteBlog}
          className="px-4 py-2 bg-[#B30D0D] text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
      {isModalOpen && <BlogModal closeModal={closeModal} blog={blog} />}
    </div>
  );
};

export default BlogCard;
