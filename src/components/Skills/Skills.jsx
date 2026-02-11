import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="pt-40 sm:pt-32 md:pt-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"

  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap justify-between gap-y-12">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="
            bg-gray-900 backdrop-blur-md
            px-6 py-8
            w-full sm:w-[48%]
            rounded-xl
            border border-white/20
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
          "
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
            {category.title}
          </h3>

          {/* Skill Items */}
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={900}
            scale={1.05}
            transitionSpeed={500}
            gyroscope={true}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="
                    flex items-center gap-2
                    border border-gray-700
                    rounded-full
                    py-2 px-4
                    text-center
                    whitespace-nowrap
                    hover:border-[#8245ec]
                    transition
                  "
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6"
                  />
                  <span className="text-sm text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
