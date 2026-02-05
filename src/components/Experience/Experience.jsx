import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 lg:px-20 font-sans bg-skills-gradient clip-path-custom-2 ">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg">
          A collection of my work experience and roles in various organizations
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/60 -translate-x-1/2" />

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative flex w-full mb-20 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Card */}
            <div className="w-full sm:w-[46%] bg-gray-900 border border-white/70 rounded-2xl p-6 shadow-[0_0_25px_rgba(130,69,236,0.35)]">
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-14 bg-white rounded-md overflow-hidden">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-400">{exp.company}</p>
                  <p className="text-xs text-gray-500">{exp.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {exp.desc}
              </p>

              {/* Skills */}
              <div className="mt-4">
                <p className="text-white font-medium mb-2">Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-lg bg-[#8245ec] text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Dot */}
            <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 z-10">
              <div className="w-14 h-14 rounded-full bg-white border-4 border-[#8245ec] flex items-center justify-center">
                <img
                  src={exp.img}
                  alt={exp.company}
                  className="w-15 h-10 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
