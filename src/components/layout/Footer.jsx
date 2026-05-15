import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiInstagram, SiGithub } from "react-icons/si";
import ScrollReveal from "../ui/ScrollReveal";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/juliannurfadzlin/",
      icon: FaLinkedinIn,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/jfdzln",
      icon: SiInstagram,
    },
    {
      name: "Github",
      href: "https://github.com/jejejullian",
      icon: SiGithub,
    },
  ];

  return (
    <>
      {/* Gradient transition from light bg to dark footer */}
      <div
        className="h-24 md:h-32 lg:h-40"
        style={{
          background: "linear-gradient(to bottom, var(--color-light) 0%, var(--color-dark) 100%)",
        }}
      />

      <section id="contact" className="px-5 md:px-page p-5 md:p-10 lg:p-page bg-dark text-offwhite overflow-hidden">
        <div className="flex flex-col gap-10 md:gap-14 lg:gap-20 max-w-[1440px] mx-auto">
          {/* Section label */}
          <div>
            <ScrollReveal>
              <p className="text-xs md:text-sm text-neutral-500 uppercase tracking-[6px] mb-4 md:mb-6">
                Contact
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-2xl md:text-5xl lg:text-7xl font-bold uppercase leading-tight">
                Let's start something great
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="flex items-center flex-wrap gap-1 md:gap-2 lg:gap-3 text-sm md:text-xl lg:text-2xl mt-3 md:mt-4 text-neutral-400">
                Reach me out at{" "}
                <a
                  href="mailto:juliannnfadzlin@gmail.com"
                  className="group inline-flex items-end gap-0.5 text-offwhite hover:text-white transition-colors duration-300"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300">
                    juliannnfadzlin@gmail.com
                  </span>
                  <FiArrowUpRight className="w-3 md:w-5 lg:w-6 h-3 md:h-5 lg:h-6 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </p>
            </ScrollReveal>
          </div>

          {/* Social Links — Bigger with icons */}
          <ScrollReveal delay={300}>
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4 md:gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-2.5 px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-neutral-700 text-sm md:text-base text-neutral-300 hover:text-white hover:border-neutral-400 hover:bg-white/5 transition-all duration-300 ${index === 2
                    ? "col-span-2 justify-self-center w-fit md:w-auto"
                    : "justify-center md:justify-start"
                    }`}
                >
                  <link.icon className="w-4 h-4 md:w-5 md:h-5" />
                  {link.name}
                  <FiArrowUpRight
                    className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Copyright */}
          <ScrollReveal delay={400}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 pt-6 md:pt-8 border-t border-neutral-800">
              <p className="text-[10px] md:text-xs lg:text-sm text-neutral-600">
                © 2025 Juliannn Fadzlin. All rights reserved.
              </p>
              <p className="text-[10px] md:text-xs lg:text-sm text-neutral-600">
                Designed & Built with ❤️
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}