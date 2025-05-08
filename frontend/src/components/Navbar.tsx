import React, { useEffect, useState } from "react";
import { Dumbbell } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center text-2xl font-bold">
            <Dumbbell
              className={`mr-2 ${scrolled ? "text-primary" : "text-white"}`}
            />
            <span className={scrolled ? "text-gray-800" : "text-white"}>
              Click Fit
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="#about" scrolled={scrolled}>
              About
            </NavLink>
            <NavLink href="#programs" scrolled={scrolled}>
              Programs
            </NavLink>
            <NavLink href="#trainers" scrolled={scrolled}>
              Trainers
            </NavLink>
            <NavLink href="#testimonials" scrolled={scrolled}>
              Testimonials
            </NavLink>
            <NavLink href="#upload" scrolled={scrolled}>
              Community
            </NavLink>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Join Now
            </a>
          </div>

          <button className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({
  href,
  children,
  scrolled,
}: {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}) => (
  <a
    href={href}
    className={`relative font-semibold hover:text-blue-500 transition-colors
      ${scrolled ? "text-gray-800" : "text-white"}
      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
      after:bg-blue-500 after:transition-all hover:after:w-full`}
  >
    {children}
  </a>
);

export default Navbar;
