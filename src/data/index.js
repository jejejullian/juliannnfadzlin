import { SiHtml5, SiCss, SiTailwindcss, SiBootstrap, SiSass, SiJavascript, SiReact, SiPhp, SiXampp, SiMysql, SiGit, SiPostman, SiVite, SiSupabase } from "react-icons/si";

import niki from "../assets/image/project1.png";
import yadika from "../assets/image/project2.png";
import forecazt from "../assets/image/project3.png";
import animedesuwa from "../assets/image/project4.png";

import profile1 from "../assets/image/profile1.jpeg";
import profile2 from "../assets/image/profile2.jpeg";
import profile3 from "../assets/image/profile3.jpeg";

import bgHero from "../assets/image/background1.jpg";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

export const heroData = {
  bgImage: bgHero,
  title: "WHO IS JULIAN?",
  subtitle: "Front-end Developer Enthusiast",
  description: "Crafting responsive and user-friendly web applications, pixel by pixel.",
  btnText: "More About Me",
  btnLink: "https://www.linkedin.com/in/juliannurfadzlin/",
};

export const techStackIcons = [SiHtml5, SiCss, SiTailwindcss, SiBootstrap, SiSass, SiJavascript, SiReact, SiPhp, SiXampp, SiMysql, SiGit, SiPostman, SiSupabase];

export const projectsData = [
  {
    id: 1,
    title: "PT. Niki Akurasi Persada",
    year: 2023,
    desc: "Company Profile",
    icons: [SiHtml5, SiCss, SiBootstrap],
    image: niki,
    link: "https://niki-akurasi-persada.vercel.app/",
  },
  {
    id: 2,
    title: "Yadika's Inventory",
    year: 2024,
    desc: "Management System",
    icons: [SiPhp, SiJavascript, SiBootstrap],
    image: yadika,
    link: null,
  },
  {
    id: 3,
    title: "Forecazt",
    year: 2025,
    desc: "weather app",
    icons: [SiJavascript, SiTailwindcss, SiVite],
    image: forecazt,
    link: "https://weatherapp-odin-project.vercel.app/",
  },
  {
    id: 4,
    title: "AnimeDesuwa",
    year: 2026,
    desc: "Anime Tracker",
    icons: [SiJavascript, SiTailwindcss, SiSupabase],
    image: animedesuwa,
    link: "https://animedesuwa.vercel.app/",
  },
];

export const profileImages = [profile1, profile2, profile3];

export const resumeData = {
  header: {
    name: "Julian Nur Fadzlin",
    role: "Front-end Developer",
    intro: "I design in code as a front-end developer.",
    subIntro: "I'm passionate about building interfaces that work—and feel—just right.",
  },
  experiences: [
    {
      title: "Front-End Developer",
      company: "PT. Niki Akurasi Persada",
      period: "2023",
      description: [
        "Developed company profile website using HTML, Bootstrap, and Javascript",
        "Collaborated with design team for responsive layouts",
        "Performed iterative testing and debugging to enhance user experience and functionality",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Yadika Institution",
      period: "2023",
      description: ["Built inventory management system using PHP and JavaScript", "Implemented CRUD operations with MySQL database", "Created user-friendly interfaces with Bootstrap"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Science",
      school: "Mercubuana University",
      period: "2021 - 2025",
      gpa: "3.8/4.0",
    },
  ],
  skills: {
    "Front-End": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
    "Back-End": ["PHP", "Node.js"],
    Tools: ["Git", "Postman", "My-SQL", "VS Code"],
  },
};
