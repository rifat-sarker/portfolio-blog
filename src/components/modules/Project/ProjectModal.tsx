"use client";

import { createProject } from "@/services/Project";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ProjectModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const [imageURL, setImageURL] = useState("");

  // Handle form submission
  const onSubmit = async (data: any) => {
    const projectData = {
      title: data.title,
      live: data.liveLink,
      code: data.codeLink,
      description: data.description,
      category: data.category, 
      image: imageURL, 
    };

    // console.log("Sending Data:", projectData);

    try {
      const res = await createProject(projectData);
      // console.log("Response:", res); 
      if (res.success) {
        toast.success(res.message);
        closeModal();
      } else {
        toast.error("Failed to create project");
      }
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add New Project</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Project Title"
            className="w-full p-2 border rounded"
          />
          <input
            type="url"
            {...register("liveLink", { required: true })}
            placeholder="Live Link"
            className="w-full p-2 border rounded"
          />
          <input
            type="url"
            {...register("codeLink", { required: true })}
            placeholder="GitHub Repo Link"
            className="w-full p-2 border rounded"
          />

          <input
            type="url"
            placeholder="Image URL"
            className="w-full p-2 border rounded"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            required
          />
          <select
            {...register("category", { required: true })}
            className="w-full p-2 border rounded"
          >
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Full Stack">Full Stack</option>
          </select>
          <textarea
            {...register("description", { required: true })}
            placeholder="Project Description"
            className="w-full p-2 border rounded"
            rows={3}
          />

          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding..." : "Add"}
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
