import { IoClose, IoDownloadOutline } from "react-icons/io5";
import { MdOutlineWorkOutline, MdOutlineCode, MdOutlineSchool, MdOutlineVerified } from "react-icons/md";
import { resumeData } from "../../data";

export default function ResumeModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn" onClick={onClose}>
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl animate-slideUp" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-neutral-100 px-6 md:px-10 py-5 flex items-center justify-between rounded-t-3xl z-10">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900">{resumeData.header.name}</h2>
            <p className="text-sm text-neutral-400 mt-0.5">{resumeData.header.role}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer" aria-label="Close modal">
            <IoClose size={22} />
          </button>
        </div>

        <div className="px-6 md:px-10 py-8 space-y-10">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MdOutlineWorkOutline size={20} className="text-neutral-900" />
              <h3 className="text-base font-bold uppercase tracking-widest text-neutral-900">Experience</h3>
            </div>
            <div className="space-y-7">
              {resumeData.experiences.map((exp, index) => (
                <div key={index} className="grid grid-cols-[1px_1fr] gap-x-5">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-2 bg-neutral-200" />
                    <div className="w-2 h-2 rounded-full bg-neutral-900 shrink-0" />
                    <div className="w-px flex-1 bg-neutral-200" />
                  </div>
                  <div className="pb-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-2">
                      <h4 className="text-sm font-bold text-neutral-900">{exp.title}</h4>
                      <span className="text-xs text-neutral-400 shrink-0">{exp.period}</span>
                    </div>
                    <p className="text-xs font-medium text-neutral-500 mb-3">{exp.company}</p>
                    <ul className="space-y-1.5">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="text-sm text-neutral-600 flex gap-2">
                          <span className="text-neutral-300 mt-1 shrink-0">—</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MdOutlineSchool size={20} className="text-neutral-900" />
              <h3 className="text-base font-bold uppercase tracking-widest text-neutral-900">Education</h3>
            </div>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">{edu.degree}</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">{edu.school}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-neutral-400">{edu.period}</p>
                  <p className="text-xs font-semibold text-neutral-700 mt-0.5">GPA {edu.gpa}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MdOutlineCode size={20} className="text-neutral-900" />
              <h3 className="text-base font-bold uppercase tracking-widest text-neutral-900">Skills</h3>
            </div>
            <div className="space-y-4">
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <div key={category}>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-neutral-950 text-white rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MdOutlineVerified size={20} className="text-neutral-900" />
              <h3 className="text-base font-bold uppercase tracking-widest text-neutral-900">Certifications</h3>
            </div>
            <div className="space-y-3">
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-2xl border border-neutral-100 hover:border-neutral-200 transition-colors">
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{cert.name}</p>
                    <p className="text-xs text-neutral-400 mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-neutral-400 shrink-0">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-neutral-100 px-6 md:px-10 py-4 rounded-b-3xl">
          <a
            href="/CV_JULIAN_NUR_FADZLIN.pdf"
            download="Julian_Nur_Fadzlin_Resume.pdf"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-neutral-950 text-sm text-white rounded-full hover:bg-neutral-800 transition-colors font-medium"
          >
            <IoDownloadOutline size={18} />
            Download PDF Resume
          </a>
        </div>
      </div>
    </div>
  );
}
