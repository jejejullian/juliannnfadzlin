import { techStackIcons } from "../../data";
import ScrollReveal from "../ui/ScrollReveal";

// Mapping icon names to display labels
const techNames = [
  "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Sass",
  "JavaScript", "React", "PHP", "XAMPP", "MySQL",
  "Git", "Postman", "Supabase",
];

export default function TechStack() {
  const icons = techStackIcons;

  // Duplikasi array untuk efek infinite scroll
  const duplicatedIcons = [...icons, ...icons];
  const duplicatedNames = [...techNames, ...techNames];

  return (
    <section className="py-16 md:py-24 lg:py-32">
      {/* Section heading */}
      <ScrollReveal className="px-5 md:px-[60px] mb-8 md:mb-12">
        <p className="text-xs md:text-sm text-neutral-400 uppercase tracking-[6px] text-center mb-2 md:mb-3">
          Skills
        </p>
        <h2 className="text-center text-xl md:text-3xl lg:text-4xl font-bold">
          Tools I Work With
        </h2>
      </ScrollReveal>

      {/* Scrolling icons */}
      <ScrollReveal delay={200}>
        <div className="group relative overflow-hidden whitespace-nowrap mask-[linear-gradient(to_right,transparent_0,white_128px,white_calc(100%-128px),transparent_100%)]">
          <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
            {duplicatedIcons.map((Icon, index) => (
              <div
                key={`tech-${index}`}
                className="relative mx-6 md:mx-8 inline-flex flex-col items-center group/icon"
              >
                <Icon
                  className="h-10 md:h-14 lg:h-16 w-auto text-neutral-400 hover:text-neutral-950 transition-colors duration-300 cursor-pointer"
                />
                {/* Tooltip */}
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[10px] md:text-xs px-2.5 py-1 rounded-md opacity-0 group-hover/icon:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-y-1 group-hover/icon:translate-y-0">
                  {duplicatedNames[index]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}