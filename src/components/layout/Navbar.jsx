import { useState } from "react";
import { ArrowUpRight, Menu, X } from "react-feather";
import { navLinks } from "../../data"; 

export default function Navbar() {
  // State to manage mobile menu toggle
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  // Close mobile menu when a menu item is clicked
  const handleMenuClick = () => {
    setMobileMenuIsOpen(false);
  };

  return (
    <header className="fixed w-full px-5 md:px-[60px] z-50">
      {/* NAVBAR: Main navbar container */}
      <div
        className={`mx-auto flex flex-col md:flex-row items-center justify-start md:justify-between gap-0 md:gap-6 px-5 sm:px-6 lg:px-8 py-2 bg-black/20 backdrop-blur-[2px] text-slate-50 mt-4 shadow-xl md:shadow-none transition-all duration-300 ease-in-out md:rounded-full ${
          mobileMenuIsOpen ? "gap-6 rounded-4xl" : "gap-0 rounded-4xl"
        }`}
      >
        {/* Top Bar: Logo and Desktop Navigation Links */}
        <div className="flex w-full items-center justify-between ">
          {/* Logo */}
          <a className="block text-xl font-normal font-nico" href="#">
            FDZLN
          </a>

          {/* Desktop Nav Links: Visible only on medium and larger screens */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center space-x-8 lg:space-x-16 text-xl">
              {/* Mapping dari data navLinks, bukan hardcode */}
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a className="text-slate-50 transition hover:text-slate-50/75" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Contact Button: "Let's Talk" button */}
          <a
            href="mailto:juliannnfadzlin@gmail.com"
            className="hidden md:inline-flex group items-center gap-2 px-6 py-2  text-xl text-slate-50 font-semibold rounded-full border border-slate-50 bg-white/0 transition-all duration-300 ease-out hover:bg-white/20 hover:text-white"
          >
            Let's Talk
            <ArrowUpRight size={22} className="transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile Menu Button: Toggles between menu (hamburger) and close (X) icons */}
          <button onClick={() => setMobileMenuIsOpen((prev) => !prev)} className="block rounded p-2.5 text-slate-50 transition hover:text-slate-50/75 md:hidden cursor-pointer" aria-label="Toggle menu">
            <div className="relative w-[22px] h-[22px]">
              <Menu className={`absolute inset-0 transition-all duration-300 ease-in-out ${!mobileMenuIsOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"}`} size={22} />
              <X className={`absolute inset-0 transition-all duration-300 ease-in-out ${mobileMenuIsOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-90"}`} size={22} />
            </div>
          </button>
        </div>

        {/* MOBILE DROPDOWN MENU: Mobile menu that appears on click */}
        <div className={`md:hidden w-full flex flex-col items-center overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuIsOpen ? "max-h-[500px] opacity-100 pb-[22px]" : "max-h-0 opacity-0"}`}>
          <nav className="w-full">
            {/* Menu Items for Mobile */}
            <ul className="flex flex-col items-center gap-2 text-center text-xl font-medium text-slate-50">
              {navLinks.map((item) => (
                <li key={item.label} className="w-full py-2 focus:bg-black/10 active:bg-black/10 rounded-lg">
                  <a href={item.href} onClick={handleMenuClick} className="transition duration-300 hover:text-slate-50/75 font-normal focus:outline-none">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Contact Button */}
          <div className="w-full flex justify-center mt-4 ">
            <a
              href="mailto:juliannnfadzlin@gmail.com"
              onClick={handleMenuClick}
              className="inline-flex group items-center gap-2 px-5 py-2 rounded-full border border-slate-50 text-base text-slate-50 font-normal bg-white/0 transition-all duration-300 ease-out hover:bg-white/20 hover:text-white"
            >
              Let's Talk
              <ArrowUpRight size={18} className="transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}