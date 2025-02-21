import { Project } from "@/types/project";
import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => {
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
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
