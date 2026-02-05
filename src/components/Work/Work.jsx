import { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-20 font-sans clip-path-flat">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg">
          A showcase of the projects I have worked on
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer bg-gray-900 border border-white/40 rounded-2xl overflow-hidden
                       shadow-[0_0_25px_rgba(130,69,236,0.35)]
                       hover:-translate-y-2 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-[#251f38] text-purple-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div
            className="
              relative w-[92%] max-w-4xl
              bg-gray-900 rounded-2xl
              border border-white/40
              shadow-[0_0_40px_rgba(130,69,236,0.45)]
              flex flex-col
              max-h-[85vh]
            "
          >
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-purple-400 z-10"
            >
              &times;
            </button>

            {/* Image (FIXED HEIGHT) */}
            <div className="h-[220px] w-full bg-black flex items-center justify-center rounded-t-2xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-full object-contain"
              />
            </div>

            {/* Scrollable Content ONLY */}
            <div className="p-6 overflow-y-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-[#251f38] text-purple-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="flex-1 text-center py-3 rounded-xl bg-gray-800 text-white hover:bg-gray-700"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  className="flex-1 text-center py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
