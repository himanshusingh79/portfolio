import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaArrowUp } from "react-icons/fa";
import { LINKS } from "../constants";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  
  // Show/hide scroll button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup scroll listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo or Brand Name */}
          <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent font-bold">
            My Portfolio
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-lg">
            {LINKS && LINKS.map(({ id, name }) => (
              <li key={id}>
                <a href={`#${id}`} className="text-white hover:text-lime-500 transition">
                  {name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 focus:outline-none text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center md:hidden"
            style={{ zIndex: 49 }}
          >
            <ul className="space-y-6 text-2xl text-center">
              {LINKS && LINKS.map(({ id, name }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={handleLinkClick}
                    className="text-4xl font-semibold uppercase tracking-wide hover:text-lime-300 transition"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-lg transition-all duration-300 z-50 ${
          showScrollButton ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="h-5 w-5" />
      </button>
    </>
  );
};

export default Navbar1;