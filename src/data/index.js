import { SiHtml5, SiCss, SiTailwindcss, SiBootstrap, SiSass, SiJavascript, SiReact, SiPhp, SiXampp, SiMysql, SiGit, SiPostman, SiVite, SiSupabase, SiNodedotjs, SiExpress, SiPrisma, SiPostgresql } from "react-icons/si";

import niki from "../assets/image/project1.png";
import yadika from "../assets/image/project2.png";
import forecazt from "../assets/image/project3.png";
import animedesuwa from "../assets/image/project4.png";
import blogapi from "../assets/image/project5.png";
import jobtrack from "../assets/image/project6.png";

import profile1 from "../assets/image/profile1.jpeg";

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

export const techStackIcons = [
  SiJavascript, SiReact,
  SiNodedotjs, SiExpress, SiPostgresql, SiPrisma,
  SiGit, SiPostman, SiVite,
  SiHtml5, SiCss, SiTailwindcss, SiBootstrap, SiSass
];

export const cardThemes = [
  { bg: "var(--color-dark)", text: "var(--color-light)", accent: "var(--color-muted)", iconColor: "var(--color-muted-light)" },
  { bg: "var(--color-card-light)", text: "var(--color-dark)", accent: "var(--color-muted-dark)", iconColor: "var(--color-muted-dark)" },
  { bg: "var(--color-dark)", text: "var(--color-light)", accent: "var(--color-muted)", iconColor: "var(--color-muted-light)" },
  { bg: "var(--color-card-light)", text: "var(--color-dark)", accent: "var(--color-muted-dark)", iconColor: "var(--color-muted-dark)" },
];

export const projectsData = [
  {
    id: 1,
    title: "PT. Niki Akurasi Persada",
    year: 2023,
    date: "2023-08",
    desc: "Company Profile",
    icons: [SiHtml5, SiCss, SiJavascript, SiBootstrap],
    image: niki,
    link: "https://niki-akurasi-persada.vercel.app/",
  },
  {
    id: 2,
    title: "Yadika's Inventory",
    year: 2024,
    date: "2024-03",
    desc: "Management System",
    icons: [SiPhp, SiJavascript, SiMysql, SiBootstrap],
    image: yadika,
    link: null,
  },
  {
    id: 3,
    title: "Forecazt",
    year: 2025,
    date: "2025-06",
    desc: "Weather App",
    icons: [SiJavascript, SiTailwindcss, SiVite],
    image: forecazt,
    link: "https://weatherapp-odin-project.vercel.app/",
  },
  {
    id: 4,
    title: "AnimeDesuwa",
    year: 2026,
    date: "2026-01",
    desc: "Anime Tracker",
    icons: [SiJavascript, SiTailwindcss, SiSupabase],
    image: animedesuwa,
    link: "https://animedesuwa.vercel.app/",
  },
  {
    id: 5,
    title: "Blog API",
    year: 2026,
    date: "2026-05",
    desc: "Full-Stack Blog Platform",
    icons: [SiNodedotjs, SiExpress, SiPrisma, SiPostgresql, SiReact, SiTailwindcss, SiVite],
    image: blogapi,
    link: "https://github.com/jejejullian/blog-api",
  },
  {
    id: 6,
    title: "JobTrack",
    year: 2026,
    date: "2026-06",
    desc: "Job Application Tracker",
    icons: [SiReact, SiVite, SiTailwindcss, SiNodedotjs, SiExpress, SiPrisma, SiPostgresql],
    image: jobtrack,
    link: "https://jobtracker.my.id",
  },
];

export const profileImages = [profile1];

export const resumeData = {
  header: {
    name: "Julian Nur Fadzlin",
    role: "Web Developer",
    intro: "I design in code as a front-end developer.",
    subIntro: "I'm passionate about building interfaces that work—and feel—just right.",
  },
  experiences: [
    {
      title: "Web Developer Intern",
      company: "YADIKA Kalijati",
      period: "Aug – Oct 2023",
      description: [
        "Built a web-based IT Asset Management platform that digitized 100% of ±50 hardware devices.",
        "Conducted QA testing before deployment and provided end-user training to non-technical staff.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "PT Niki Akurasi Persada",
      period: "Jun – Jul 2023",
      description: [
        "Built a responsive company profile (mobile + desktop) using HTML, CSS, and Bootstrap — went live within 1 month from brief to deployment.",
        "Handled full-cycle deployment (hosting, domain, server) and implemented On-Page SEO.",
      ],
    },
    {
      title: "Assembly Engine",
      company: "PT Astra Honda Motor",
      period: "Feb 2020 – Nov 2021",
      description: [
        "Achieved ±700 units/shift target with <0.5% defect rate and 100% attendance over 21 months.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Informatics Engineering",
      school: "Universitas Mercu Buana",
      period: "2021 – 2025",
      gpa: "3.82 / 4.00",
    },
  ],
  skills: {
    "Front-End": ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3", "TypeScript (basic)", "PHP"],
    "Styling & UI": ["Tailwind CSS", "Bootstrap", "Responsive Web Design"],
    "Back-End & Database": ["Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "Supabase", "REST API"],
    "Tools": ["Git", "Vite", "Postman", "Vercel", "SEO On-Page"],
  },
  certifications: [
    { name: "React JS Basics", issuer: "Meta / Coursera", year: "2026" },
    { name: "Javascript Basics", issuer: "Dicoding", year: "2023 – 2026" },
    { name: "Software Engineer", issuer: "BNSP", year: "2024 – 2027" },
  ],
};