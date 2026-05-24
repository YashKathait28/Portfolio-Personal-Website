// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import localwpLogo from "./assets/tech_logo/LocalWP.png";

// Experience Section Logo's
import skillsbgimg from "./assets/company_logo/3bg.png";
import etharaLogo from "./assets/company_logo/ethara_ai.png"; 
import agcLogo from "./assets/company_logo/chi.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/mru.png";
import bsaLogo from "./assets/education_logo/gtbp.png";
import vpsLogo from "./assets/education_logo/ngfs.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/AI-Chat-Bot.png";
import csprepLogo from "./assets/work_logo/E-commerce.png";
import movierecLogo from "./assets/work_logo/EMS-IMG.png";
import taskremLogo from "./assets/work_logo/Techno-web.png";
import npmLogo from "./assets/work_logo/Video-Con-IMG.png";
import webverLogo from "./assets/work_logo/Gallery-IMG.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },

      { name: "Redux", logo: reduxLogo },

      { name: "Tailwind CSS", logo: tailwindcssLogo },

      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },

      { name: "Python", logo: pythonLogo },

      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "LocalWP", logo: localwpLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: etharaLogo,
    role: "Full Stack Developer / AIML Intern",
    company: "Ethara.AI",
    date: "February 2026 – May 2026",
    desc: "Worked at Ethara.AI on AI tasks involving LLM workflows, web applications, and real-time data handling. Contributed to API integration, dashboard features, and AI-based evaluation workflows while improving problem-solving and development skills in a professional environment.",
    skills: [
      "Python",
      "REST APIs",
      "AI/ML",
      "LLM Workflows",
      "API Integration",
    ],
  },

  {
    id: 1,
    img: agcLogo,
    role: "Research Intern (Full Stack Developer)",
    company: "Centre for Health Innovations (CHI), MRIIRS",
    date: "January 2026 – June 2026",
    desc: "Worked as a Research Intern (Full Stack Developer) at CHI, MRIIRS on a real-time YOLO-based dental surgical instrument tracking system. Contributed to frontend and backend development, real-time detection workflows, dashboard interfaces, API integration, and AI-based healthcare solutions using MERN stack and Python technologies.",
    skills: [
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Python",
      "YOLO",
      "REST APIs",
      "Tailwind CSS",
      "AI/ML",
      "GitHub",
    ],
  },

  {
    id: 2,
    img: skillsbgimg,
    role: "AIML Intern",
    company: "3 Skill",
    date: "November 2025 – January 2026",
    desc: "Worked as an AIML Intern at 3 Skill, focusing on learning and applying core concepts of Artificial Intelligence and Machine Learning through guided tasks and practical exercises. Developed a strong foundation in Python-based workflows, basic machine learning concepts, and problem-solving approaches while maintaining professional discipline and commitment.",
    skills: [
      "Python",
      "Machine Learning",
      "AI Fundamentals",
      "Data Handling",
      "Problem Solving",
    ],
  },

  {
    id: 3,
    img: agcLogo,
    role: "Web Developer",
    company: "Centre for Health Innovations(CHI), MRIIRS",
    date: "June 2025 - August 2025",
    desc: "I completed my internship at the Centre for Health Innovations (CHI), where I worked on the Anemia Detection System project. The project focused on developing a web-based solution to identify and manage anemia cases efficiently. My role involved building features using MERN stack, improving data handling, and supporting real-time analysis for better healthcare outcomes.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Manav Rachna Institute",
    date: "August 2023 - July 2026",
    grade: "7.8 CGPA",
    desc: "Pursuing B.Tech in Computer Science and Engineering at Manav Rachna International Institute of Research and Studies, I have gained strong foundations in programming, data structures, algorithms, databases, operating systems, and software development. Alongside academics, I explored web development, IoT, artificial intelligence, and data analytics through projects, internships, and hands-on learning. This journey has strengthened my technical expertise, problem-solving skills, teamwork, and innovative thinking, preparing me for real-world challenges in the tech industry.",
    degree: "Bachelors of Technology - B.tech (CSE)",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "Guru Tegh Bahadur Institute of Polytechnic",
    date: "October 2019 - July 2023",
    grade: "82%",
    desc: "I have completed my Diploma in Computer Engineering at Guru Tegh Bahadur Institute of Polytechnic, where I built a strong foundation in computer programming, hardware, networking, databases, and operating systems. During the course, I worked on practical assignments and mini-projects that enhanced my technical skills, logical thinking, and problem-solving abilities. This academic journey helped me develop a clear understanding of core engineering concepts and prepared me for advanced studies in Computer Science and Engineering",
    degree: "Diploma - (Computer Engineering)",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "New Green Field School",
    date: "July 2010 - March 2020",
    grade: "65%",
    desc: "I have completed my 10th grade in 2020, acquiring a solid foundation in core subjects and enhancing my knowledge in areas like Mathematics, Science, and English. During this time, I developed strong problem-solving and analytical skills, along with critical thinking abilities. I also focused on personal growth, discipline, and building a mindset for continuous learning, preparing myself for future academic and professional challenges.",
    degree: "CBSE (X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "AI Chat Bot",
    description:
      "I developed an AI-powered chatbot using React.js that provides real-time, intelligent responses to user queries. The project combines a modern, responsive frontend with conversational AI integration, ensuring smooth interaction and an engaging user experience. This chatbot demonstrates my ability to merge React-based UI development with AI technologies to create practical, innovative solutions.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/YashKathait28/AI-Chat-Bot",
    webapp: "https://ai-chat-bot-brown-seven.vercel.app/",
  },
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "I built a fully functional e-commerce website using React.js, featuring product listings, shopping cart, and secure checkout functionality. The website includes a responsive user interface, smooth navigation, and dynamic state management for a seamless shopping experience. This project highlights my skills in frontend development, component-based design, and creating real-world web applications.",
    image: csprepLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    github: "https://github.com/YashKathait28/E-Commerce-Website",
    webapp: "https://e-commerce-website-ijz4.vercel.app/",
  },
  {
    id: 2,
    title: "Employee Management System",
    description:
      "A web-based Employee Management System built using React.js to manage employee records efficiently. The application allows users to add, view, update, and delete employee details through a clean and responsive interface. It focuses on CRUD operations, structured data handling, and component-based architecture.",
    image: movierecLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Authentication"],
    github: "https://github.com/YashKathait28/Employee-Management-System-App",
    webapp: "https://employee-management-system-app-beryl.vercel.app/",
  },
  {
    id: 3,
    title: "Video Conferencing App",
    description:
      "A real-time video conferencing web application built using modern web technologies to enable seamless virtual communication. The application supports live video calls with an interactive and responsive user interface, focusing on real-time media handling and smooth user experience.",
    image: npmLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "WebRTC", "ZegoCloud"],
    github: "https://github.com/YashKathait28/Video-Conferencing-App",
    webapp: "https://video-conferencing-app-teal.vercel.app/",
  },
  {
    id: 4,
    title: "Techno-Web",
    description:
      "I created a Techno-Web website featuring a modern, responsive navigation bar built with clean design and smooth interactions. The project highlights my ability to implement user-friendly interfaces with attention to detail in layout, styling, and responsiveness across devices.",
    image: taskremLogo,
    tags: ["HTML", "CSS", "JavaScript", "Chrome Extension"],
    github: "https://github.com/YashKathait28/Techno-web",
    webapp: "https://techno-web-eight.vercel.app/",
  },
  {
    id: 5,
    title: "Gallery App",
    description:
      "A responsive image gallery web application built using React.js that fetches and displays images dynamically from an external API. The application focuses on clean UI design, efficient data fetching, and smooth rendering of image content.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion", "React JS", "API"],
    github: "https://github.com/YashKathait28/Gallery-App",
    webapp: "https://gallery-app-rust.vercel.app/",
  },
];
