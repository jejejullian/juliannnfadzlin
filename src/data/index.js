// Import Icon Tech Stack
import html from "../assets/icon/html.png";
import css from "../assets/icon/css.png";
import tailwind from "../assets/icon/tailwind.png";
import bootstrap from "../assets/icon/bootstrap.png";
import sass from "../assets/icon/sass.png";
import javascript from "../assets/icon/js.png"; 
import reactIcon from "../assets/icon/reactjs.png"; 
import php from "../assets/icon/php.png";
import xampp from "../assets/icon/xampp.png";
import mysql from "../assets/icon/mysql.png";
import git from "../assets/icon/git.png";
import postman from "../assets/icon/postman.png";
import vite from "../assets/icon/vite.png";

// Import Project Images
import niki from "../assets/image/project1.png";
import yadika from "../assets/image/project2.png";
import forecazt from "../assets/image/project3.png";
import battleship from '../assets/image/project4.png'

// Import Profile Images
import profile1 from "../assets/image/profile1.jpeg";
import profile2 from "../assets/image/profile2.jpeg";
import profile3 from "../assets/image/profile3.jpeg";

// Import Background Hero
import bgHero from "../assets/image/background1.jpg";

// --- Data Navigation ---
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

// --- Data Hero Section ---
export const heroData = {
  bgImage: bgHero,
  title: "WHO IS JULIAN?",
  subtitle: "Front-end Developer Enthusiast",
  description: "Crafting responsive and user-friendly web applications, pixel by pixel.",
  btnText: "More About Me",
  btnLink: "https://www.linkedin.com/in/juliannurfadzlin",
};

// --- Data Tech Stack (Carousel Icon) ---
export const techStackIcons = [
  html,
  css,
  tailwind,
  bootstrap,
  sass,
  javascript,
  reactIcon,
  php,
  xampp,
  mysql,
  git,
  postman,
];

// --- Data Projects ---
export const projectsData = [
  {
    id: 1,
    title: "PT. Niki Akurasi Persada",
    year: "2023",
    desc: "Company Profile",
    icons: [html, css, bootstrap], 
    image: niki,
    link: "https://niki-akurasi-persada.vercel.app/",
  },
  {
    id: 2,
    title: "Yadika's Inventory",
    year: "2024",
    desc: "Management System",
    icons: [php, javascript, bootstrap],
    image: yadika,
    link: null, // null jika tidak ada link
  },
  {
    id: 3,
    title: "Forecazt",
    year: "2025",
    desc: "weather app",
    icons: [javascript, tailwind, vite],
    image: forecazt,
    link: "https://weatherapp-odin-project.vercel.app/",
  },
  {
    id: 4, 
    title: "BattleShip",
    year: '2025',
    desc: 'Battleship',
    icons: [javascript, tailwind, vite],
    image: battleship,
    link: 'https://battleship-op.vercel.app/',
  },
];

// --- Data Resume (About & Modal) ---
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
      description: [
        "Built inventory management system using PHP and JavaScript",
        "Implemented CRUD operations with MySQL database",
        "Created user-friendly interfaces with Bootstrap",
      ],
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