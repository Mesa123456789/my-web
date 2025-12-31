import { useEffect, useState } from "react";
import type { Project } from "../types/project"; // ✅ ใช้ type-only import

type ProjectModalProps = {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ isOpen, project, onClose }: ProjectModalProps) {
  const [index, setIndex] = useState(0);

  // ✅ ป้องกัน warning จาก eslint (ใช้ asynchronous state update)
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIndex(0), 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg p-6 max-w-3xl w-[90%] relative overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          onClick={onClose}
          title="Close modal" // ✅ แก้ accessibility warning
        >
          ✕
        </button>

        <h3 className="text-2xl font-semibold text-blue-600 mb-4">
          {project.name}
        </h3>

        {/* === Media Carousel === */}
        {project.media && project.media.length > 0 && (
          <div className="relative mb-4">
            <img
              src={project.media[index]}
              alt={project.name}
              className="w-full rounded-lg shadow-md"
            />
            {project.media.length > 1 && (
              <div className="absolute bottom-3 right-3 flex gap-2">
                {project.media.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full ${
                      i === index ? "bg-blue-500" : "bg-gray-300"
                    }`}
                    title={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <p className="text-gray-700 whitespace-pre-line">{project.detail}</p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-blue-600 hover:underline"
          >
            View Project ↗
          </a>
        )}
      </div>
    </div>
  );
}
