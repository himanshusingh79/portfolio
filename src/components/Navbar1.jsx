import React, { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes, FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { LINKS } from "../constants";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
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

  const whatsappUrl = "https://wa.me/yourphonenumber?text=Hello!%20I%20found%20you%20via%20your%20portfolio%20website.";

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="flex justify-between items-center px-6 py-4">
          <a href="#home" className="hover:opacity-80 transition">
            <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent font-bold">
              My Portfolio
            </h1>
          </a>

          <ul className="hidden md:flex items-center gap-6 text-lg">
            {LINKS && LINKS.map(({ id, name }) => (
              <li key={id}>
                <a href={`#${id}`} className="text-white hover:text-lime-500 transition">
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 focus:outline-none text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div
            ref={menuRef}
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

      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      <a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:bg-green-600 flex items-center justify-center md:gap-2 w-14 h-14 md:w-auto md:px-4"
  aria-label="WhatsApp"
>
  <FaWhatsapp className="h-8 w-8 md:h-6 md:w-6" />
  <span className="hidden md:inline text-base font-medium">WhatsApp</span>
</a>

        <button
          onClick={scrollToTop}
          className={`p-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-lg transition-all duration-300 md:w-12 md:h-12 flex items-center justify-center ${showScrollButton ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="h-5 w-5" />
        </button>
      </div>
    </>
  );
};

export default Navbar1;
