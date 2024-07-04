import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Passionate engineering graduate skilled in Java and web technologies, eager to innovate and solve real-world problems with creativity and efficiency. Ready to bring fresh perspectives and technical expertise to your team.`;

export const ABOUT_TEXT = `I have recently completed my Bachelor of Engineering in Electronics and Telecommunication. I am passionate about utilizing my strong technical and analytical skills to engineer innovative software solutions. With expertise in Java, JavaScript, and React.js, I quickly grasp new technologies and processes, aiming to contribute effectively to your company’s success. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Online Protal for NEP-2020",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Spring Boot", "MySQL"],
  },
  {
    title: "Course Management System",
    image: project2,
    description:
      "An simple Backend application for managing courses, with RESTful APIs such as Create, Update, Delete and Replace.",
    technologies: [ "Spring Boot", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React"],
  },
];
