"use client";
import { deleteProject } from "@/services/Project";
import { Project } from "@/types/project";
import Image from "next/image";
import { toast } from "sonner";

const ProjectCard = ({ project }: { project: Project }) => {
  const handleDeleteProject = async () => {
    // const isConfirmed = window.confirm(
    //   "Are you sure you want to delete this project?"
    // );
    // if (!isConfirmed) return;

    try {
      const res = await deleteProject(project._id);
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message || "Failed to delete project.");
      }
    } catch (err: any) {
      toast.error(err?.message || "An error occurred.");
      console.error("Delete error:", err);
    }
  };
  return (
    <div className="space-y-3">
      <Image
        src={project.image || "/default-placeholder.png"}
        alt={project.title || "project_img"}
        height={500}
        width={500}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold">{project.title}</h2>
      <p className="text-sm text-gray-600 pb-2">{project.description}</p>
      <span className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-full w-fit">
        {project.category}
      </span>
      <div className="grid grid-cols-2 gap-2">
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Edit
        </button>
        <button
          onClick={handleDeleteProject}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
