import { ArrowUpRight } from "react-feather";

export default function Footer() {
  return (
    <section id="contact" className="px-5 md:px-[60px] p-5 md:p-10 lg:p-[60px] bg-neutral-950 text-[#eeeeee] overflow-x-hidden">
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
        {/* Main section with the introduction and email */}
        <div className="flex flex-col">
          <h2 className="text-[16px] md:text-4xl lg:text-6xl font-bold uppercase">Let's start something great</h2>
          {/* Contact information paragraph with email and arrow icon */}
          <p className="flex items-center gap-1 md:gap-2 lg:gap-4 text-[10px] md:text-xl lg:text-3xl ">
            Reach me out at{" "}
            <a href="mailto:juliannnfadzlin@gmail.com" className="group inline-flex items-end gap-0.5 hover:underline">
              {/* Email address with arrow icon */}
              juliannnfadzlin@gmail.com
              <ArrowUpRight className="w-2.5 md:w-4 lg:w-6 h-2.5 md:h-4 lg:h-6 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </p>
        </div>

        {/* Social media links section */}
        <div className="flex justify-center items-center gap-6  text-[10px] md:text-xs lg:text-[16px]">
          {/* LinkedIn link */}
          <a href="https://www.linkedin.com/in/juliannurfadzlin/" target="_blank" className="group inline-flex items-end gap-0.5">
            LinkedIn
            <ArrowUpRight className="w-2.5 md:w-3 lg:w-3.5 h-2.5 md:h-3 lg:h-3.5 transition-transform duration-300 group-hover:rotate-45" />
          </a>

          {/* Instagram link */}
          <a href="https://instagram.com/jfdzln" target="_blank" className="group inline-flex items-end gap-0.5 ">
            Instagram
            <ArrowUpRight className="w-2.5 md:w-3 lg:w-3.5 h-2.5 md:h-3 lg:h-3.5 transition-transform duration-300 group-hover:rotate-45" />
          </a>

          {/* GitHub link */}
          <a href="https://github.com/jejejullian" target="_blank" className="group inline-flex items-end gap-0.5 ">
            Github
            <ArrowUpRight className="w-2.5 md:w-3 lg:w-3.5 h-2.5 md:h-3 lg:h-3.5 transition-transform duration-300 group-hover:rotate-45" />
          </a>
        </div>

        {/* Copyright notice at the bottom */}
        <p className="text-[8px] md:text-[10px] lg:text-[13px] text-center text-[#424242]">© 2025 Juliannn Fadzlin. All rights reserved.</p>
      </div>
    </section>
  );
}
