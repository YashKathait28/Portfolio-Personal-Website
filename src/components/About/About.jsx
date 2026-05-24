import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/LogoID.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-6 sm:px-10 lg:px-16 font-sans mt-25 md:mt-30"
    >
      {/* Max width container */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 xl:gap-14">
          {/* LEFT SIDE */}
          <div className="md:ml-40 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              Hi, I am
            </h1>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Yash Kathait
            </h2>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-4 text-[#8245ec]">
              <span className="text-white">I am a </span>
              <ReactTypingEffect
                text={[
                  "Fullstack Developer",
                  "Web Designer",
                  "AIML Engineer",
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              />
            </h3>

            <p className="text-base sm:text-lg md:text-base lg:text-lg text-gray-400 mt-8 mb-10 leading-relaxed max-w-xl">
              I am a full-stack developer with over 1 year of experience in
              building scalable web applications. Skilled in both front-end and
              back-end development, I specialize in the MERN stack and modern
              technologies to create efficient, user-focused solutions and also I
              have experience and knowledge in AI/ML development.
            </p>

            <a
              href="https://drive.google.com/file/d/1WFllxUICohN5i-eb-WJaJC2W1fkr1_OV/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 8px rgba(130,69,236,0.8)",
              }}
            >
              DOWNLOAD RESUME
            </a>
          </div>

          {/* RIGHT SIDE */}
          {/* RIGHT SIDE */}
          <div className="md:mr-10 flex justify-center">
            <Tilt
              className="
                w-56 h-56
                sm:w-72 sm:h-72
                md:w-96 md:h-96
                lg:w-[25rem] lg:h-[25rem]
                xl:w-[25rem] xl:h-[25rem]
                border-4 border-purple-700
                rounded-full
                flex items-center justify-center
              "
              tiltMaxAngleX={18}
              tiltMaxAngleY={18}
              perspective={1000}
              scale={1.03}
              transitionSpeed={800}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Yash Kathait"
                className="
                  w-full h-full
                  rounded-full
                  object-cover object-center
                  drop-shadow-[0_12px_28px_rgba(130,69,236,0.45)]
                "
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
