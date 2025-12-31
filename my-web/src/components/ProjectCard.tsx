import type { Project } from "../types/project";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <div
      onClick={() => onOpen(project)}
      className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition p-4"
    >
      <img
        src={project.media?.[0]}
        alt={project.name}
        className="rounded-lg mb-3 w-full h-48 object-cover"
      />
      <h3 className="text-lg font-semibold text-blue-600">{project.name}</h3>
      <p className="text-gray-600 text-sm">{project.shortDesc}</p>
    </div>
  );
}
