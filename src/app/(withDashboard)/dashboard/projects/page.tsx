import AddProjectButton from "@/components/modules/Project/AddProjectButton";
import ProjectCard from "@/components/modules/Project/ProjectCard";
import { project } from "@/services/Project";
import { Project } from "@/types/project";

export default async function ProjectPage() {
  const projects = await project();
  // console.log(projects.data);
  return (
    <div className="p-4">
      <AddProjectButton />
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4">
        {projects.data.map((project: Project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}
