"use client";

import { createBlog, updateBlog } from "@/services/Blog";
import { Blog } from "@/types/blog";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type BlogModalProps = {
  closeModal: () => void;
  blog?: Blog | null;
};

export default function BlogModal({ closeModal, blog }: BlogModalProps) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<Blog>();

  const [imageURL, setImageURL] = useState(blog?.image || "");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (blog) {
      setValue("title", blog.title);
      setValue("content", blog.content);
      setValue("category", blog.category);
      setImageURL(blog.image);
    } else {
      reset();
    }
  }, [blog, setValue, reset]);

  const onSubmit: SubmitHandler<Blog> = async (data) => {
    const blogData: Partial<Blog> = {
      title: data.title,
      content: data.content,
      category: data.category,
      image: imageURL,
    };

    setIsLoading(true);

    try {
      let res;
      if (blog?._id) {
        res = await updateBlog(blogData as Blog, blog._id);
        // console.log("updating", res);
      } else {
        res = await createBlog(blogData as Blog);
        // console.log("creatingres", res);
      }

      if (res?.success) {
        toast.success(res.message);
        closeModal();
      } else {
        toast.error(res?.message || "Failed to save blog.");
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/4">
        <h2 className="text-xl font-bold mb-4">
          {blog ? "Update Blog" : "Add New Blog"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Blog Title
            </label>
            <input
              id="title"
              type="text"
              {...register("title", { required: true })}
              placeholder="Blog Title"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Blog Content
            </label>
            <input
              id="code"
              type="text"
              {...register("content", { required: true })}
              placeholder="Content"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              id="image"
              type="url"
              placeholder="Image URL"
              className="w-full p-2 border rounded"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              id="category"
              {...register("category", { required: true })}
              className="w-full p-2 border rounded"
            >
              <option value="Technology">Technology</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Business">Business</option>
            </select>
          </div>


          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
              disabled={isSubmitting || isLoading}
            >
              {isLoading ? (
                <span className="animate-spin">🔄</span>
              ) : blog ? (
                "Update"
              ) : (
                "Add"
              )}
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
