// src/components/ui/ResumeModal.jsx
import { X, Download, Briefcase, Code } from "react-feather";
import { resumeData } from "../../data"; 

export default function ResumeModal({ onClose }) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn" 
      onClick={onClose} // Menutup modal saat klik area gelap
    >
      {/* Container Putih Modal */}
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-slideUp" 
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat klik isinya
      >
        {/* Header Modal */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 md:px-8 py-4 flex items-center justify-between rounded-t-3xl">
          <h2 className="text-2xl md:text-3xl font-bold">My Resume</h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer" 
            aria-label="Close modal"
          >
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
                      <span 
                        key={skill} 
                        className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-sm font-medium transition-colors cursor-pointer"
                      >
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
          <a 
            href="/CV_JULIAN_NUR_FADZLIN.pdf" 
            download="Julian_Nur_Fadzlin_Resume.pdf" 
            className="flex items-center justify-center gap-2 w-full px-6 py-2 lg:py-3 bg-neutral-950 text-sm md:text-lg lg:text-xl text-white rounded-full hover:bg-neutral-800 transition-colors font-medium"
          >
            <Download size={20} />
            Download PDF Resume
          </a>
        </div>
      </div>
    </div>
  );
}