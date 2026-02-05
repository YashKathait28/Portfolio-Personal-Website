import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-12 lg:px-20 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg">
          My education has been a journey of learning and development
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/60 -translate-x-1/2" />

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex w-full mb-20 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Card */}
            <div className="w-full sm:w-[46%] bg-gray-900 border border-white/70 rounded-2xl p-6 shadow-[0_0_25px_rgba(130,69,236,0.35)]">
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-15 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-400">{edu.school}</p>
                  <p className="text-xs text-gray-500">{edu.date}</p>
                </div>
              </div>

              {/* Grade */}
              <p className="text-gray-300 text-sm font-medium mb-2">
                Grade: {edu.grade}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {edu.desc}
              </p>
            </div>

            {/* Timeline Dot */}
            {/* Timeline Dot */}
<div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 z-10">

              <div className="w-14 h-14 rounded-full bg-white border-4 border-[#8245ec] flex items-center justify-center">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-15 h-15 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
