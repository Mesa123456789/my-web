import { useState } from "react";
import { competitionsData } from "../data/competitionsData";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import type { Project } from "../types/project";

export default function Competitions() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="min-h-screen pt-28 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">
        Competitions & Hackathons
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {competitionsData.map((c) => (
          <ProjectCard key={c.name} project={c} onOpen={setSelected} />
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
