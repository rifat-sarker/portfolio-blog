"use client";

import { createProject, updateProject } from "@/services/Project";
import { Project } from "@/types/project";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type ProjectModalProps = {
  closeModal: () => void;
  project: Project | null;
};

export default function ProjectModal({
  closeModal,
  project,
}: ProjectModalProps) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<Project>();

  const [imageURL, setImageURL] = useState(project?.image || "");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (project) {
      setValue("title", project.title);
      setValue("live", project.live);
      setValue("code", project.code);
      setValue("description", project.description);
      setValue("category", project.category);
      setImageURL(project.image);
    } else {
      reset();
    }
  }, [project, setValue, reset]);

  const onSubmit: SubmitHandler<Project> = async (data) => {
    const projectData: Partial<Project> = {
      title: data.title,
      live: data.live,
      code: data.code,
      description: data.description,
      category: data.category,
      image: imageURL,
    };

    setIsLoading(true);

    try {
      let res;
      if (project?._id) {
        res = await updateProject(projectData as Project, project._id);
        console.log("updating", res);
      } else {
        res = await createProject(projectData as Project);
        console.log("creatingres", res);
      }

      if (res?.success) {
        toast.success(res.message);
        closeModal();
      } else {
        toast.error(res?.message || "Failed to save project.");
      }
    } catch (error) {
      console.error("Error saving project:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/4">
        <h2 className="text-xl font-bold mb-4">
          {project ? "Update Project" : "Add New Project"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Project Title
            </label>
            <input
              id="title"
              type="text"
              {...register("title", { required: true })}
              placeholder="Project Title"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label
              htmlFor="live"
              className="block text-sm font-medium text-gray-700"
            >
              Live Link
            </label>
            <input
              id="live"
              type="url"
              {...register("live", { required: true })}
              placeholder="Live Link"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-700"
            >
              GitHub Repo Link
            </label>
            <input
              id="code"
              type="url"
              {...register("code", { required: true })}
              placeholder="GitHub Repo Link"
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
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Full Stack">Full Stack</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Project Description
            </label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              placeholder="Project Description"
              className="w-full p-2 border rounded"
              rows={3}
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
              disabled={isSubmitting || isLoading}
            >
              {isLoading ? (
                <span className="animate-spin">🔄</span>
              ) : project ? (
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
