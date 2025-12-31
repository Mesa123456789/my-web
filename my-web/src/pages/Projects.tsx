import { useState } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import type { Project } from "../types/project"; // ✅ type-only import

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="min-h-screen pt-28 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((p) => (
          <ProjectCard key={p.name} project={p} onOpen={setSelected} />
        ))}
      </div>

      <ProjectModal
        isOpen={!!selected}
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
