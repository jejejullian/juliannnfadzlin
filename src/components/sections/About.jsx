import { useState } from "react";
import { X, Download, Briefcase, Code } from "react-feather";
import profile1 from "../../assets/image/profile1.jpeg";
import profile2 from "../../assets/image/profile2.jpeg";
import profile3 from "../../assets/image/profile3.jpeg";

export default function About() {
  // Default: profile 2 is large
  const [hoveredImage, setHoveredImage] = useState(2);

  
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Data resume
  const resumeData = {
    experiences: [
      {
        title: "Front-End Developer",
        company: "PT. Niki Akurasi Persada",
        period: "2023",
        description: ["Developed company profile website using HTML, Bootstrap, and Javascript", "Collaborated with design team for responsive layouts", "Performed iterative testing and debugging to enhance user experience and functionality"],
      },
      {
        title: "Web Developer Intern",
        company: "Yadika Institution",
        period: "2024",
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
      Tools: ["Git", "Postman", "My-SQL" ,"VS Code"],
    },
  };

  const getImageSize = (imageIndex) => {
    const isHovered = hoveredImage === imageIndex;

    // Mobile (< md): 1 image full size
    // Tablet (md - lg): 2 images side by side
    // Desktop (>= lg): 3 images with hover effect
    if (isHovered) {
      return "w-full md:w-[320px] lg:w-[550px] h-[240px] md:h-[260px] lg:h-[360px]";
    }
    return "w-full md:w-[320px] lg:w-[280px] h-[240px] md:h-[260px] lg:h-[180px]";
  };

  return (
    <section id="about" className="relative flex flex-col items-center justify-center pt-20 md:pt-32 lg:pt-64 text-neutral-950 overflow-hidden scroll-mt-24">
      <div className="w-full px-5 md:px-[60px] max-w-[1440px] mx-auto">
        {/* Header section */}
        <div className="mb-6 md:mb-16">
          <p className="text-sm md:text-xl text-center">Hi, I'm</p>
          <h1 className="text-center text-4xl md:text-6xl font-bold mb-3 md:mb-8">Julian Nur Fadzlin</h1>
          <p className="text-center text-sm md:text-xl font-normal mb-3 md:mb-8">I design in code as a front-end developer.</p>
          <p className="max-w-[340px] md:max-w-[440px] mx-auto text-center text-sm md:text-xl mb-3 md:mb-8 font-bold">I'm passionate about building interfaces that work—and feel—just right.</p>
          <p className="text-center text-sm md:text-lg lg:text-xl">
            Want to know more?{" "}
            <button
              onClick={() => setShowResumeModal(true)}
              className="relative after:bg-neutral-950 after:absolute after:h-0.5 after:w-0 after:top-7 after:left-1/2 after:transform after:translate-x-[-50%] hover:after:w-full after:transition-all after:duration-300 active:text-[#545454] cursor-pointer"
            >
              Read My Resume
            </button>
          </p>
        </div>

        {/* Profile Images */}
        <div className="mb-6 md:mb-12">
          {/* Mobile view */}
          <div className="flex flex-col items-center gap-4 md:hidden">
            <img src={profile1} alt="Julian's photo 2" className={`rounded-xl object-cover object-top transition-all duration-300 ease-in-out ${getImageSize(2)}`} />
          </div>

          {/* Tablet view */}
          <div className="hidden md:flex lg:hidden items-center justify-center gap-4">
            <img src={profile2} alt="Julian's photo 1" className={`rounded-xl object-cover transition-all duration-300 ease-in-out ${getImageSize(1)}`} />
            <img src={profile3} alt="Julian's photo 2" className={`rounded-xl object-cover transition-all duration-300 ease-in-out ${getImageSize(2)}`} />
          </div>

          {/* Desktop view */}
          <div className="hidden lg:flex items-center justify-center gap-4 h-[360px]">
            {/* Set hovered image to profile 1 and Reset to profile 2 when mouse leaves */}
            <img
              src={profile1}
              alt="Julian's photo 1"
              className={`rounded-xl object-cover transition-all duration-300 ease-in-out cursor-pointer shrink-0 ${getImageSize(1)}`}
              onMouseEnter={() => setHoveredImage(1)}
              onMouseLeave={() => setHoveredImage(2)}
            />

            {/* Set hovered image to profile 2 */}
            <img src={profile2} alt="Julian's photo 2" className={`rounded-xl object-cover transition-all duration-300 ease-in-out cursor-pointer shrink-0 ${getImageSize(2)}`} onMouseEnter={() => setHoveredImage(2)} />

            {/* Set hovered image to profile 3 and Reset to profile 2 when mouse leaves */}
            <img
              src={profile3}
              alt="Julian's photo 3"
              className={`rounded-xl object-cover transition-all duration-300 ease-in-out cursor-pointer shrink-0 ${getImageSize(3)}`}
              onMouseEnter={() => setHoveredImage(3)}
              onMouseLeave={() => setHoveredImage(2)}
            />
          </div>
        </div>
      </div>

      {/* RESUME MODAL */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn" onClick={() => setShowResumeModal(false)}>
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-slideUp" onClick={(e) => e.stopPropagation()}>
            {/* Header Modal */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 md:px-8 py-4 flex items-center justify-between rounded-t-3xl">
              <h2 className="text-2xl md:text-3xl font-bold">My Resume</h2>
              <button onClick={() => setShowResumeModal(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer" aria-label="Close modal">
                <X size={24} />
              </button>
            </div>

            {/* Content Modal */}
            <div className="px-6 md:px-8 py-6 space-y-8">
              {/* EXPERIENCE SECTION */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase size={24} className="text-neutral-950" />
                  <h3 className="text-xl md:text-2xl font-bold">Experience</h3>
                </div>
                <div className="space-y-6">
                  {resumeData.experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-neutral-950 pl-4">
                      <h4 className="text-lg font-bold">{exp.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {exp.company} • {exp.period}
                      </p>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {exp.description.map((desc, idx) => (
                          <li key={idx} className="text-gray-700">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* EDUCATION SECTION */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold">Education</h3>
                </div>
                <div className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-neutral-950 pl-4">
                      <h4 className="text-lg font-bold">{edu.degree}</h4>
                      <p className="text-sm text-gray-600">
                        {edu.school} • {edu.period}
                      </p>
                      <p className="text-sm text-gray-700 mt-1">GPA: {edu.gpa}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SKILLS SECTION */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Code size={24} className="text-neutral-950" />
                  <h3 className="text-xl md:text-2xl font-bold">Skills</h3>
                </div>
                <div className="space-y-4">
                  {Object.entries(resumeData.skills).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className="font-bold text-sm mb-2 text-gray-600">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <span key={skill} className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-sm font-medium transition-colors cursor-pointer">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Modal - Download Button */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 md:px-8 py-4 rounded-b-3xl">
              <a href="/CV_JULIAN_NUR_FADZLIN.pdf" download="Julian_Nur_Fadzlin_Resume.pdf" className="flex items-center justify-center gap-2 w-full px-6 py-2 lg:py-3 bg-neutral-950 text-sm md:text-lg lg:text-xl text-white rounded-full hover:bg-neutral-800 transition-colors font-medium">
                <Download size={20} />
                Download PDF Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
