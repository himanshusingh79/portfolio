import React, { useEffect, useState, useRef } from "react";
import { Menu, X, ArrowUp, MessageCircle } from "lucide-react";
import { LINKS, CONTACT } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleLinkClick = () => setIsOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatPhoneForWhatsApp = () => CONTACT.phoneNo.replace(/\D/g, "");
  const whatsappMessage = encodeURIComponent("Hello! I found you via your portfolio website.");
  const whatsappUrl = `https://wa.me/${formatPhoneForWhatsApp()}?text=${whatsappMessage}`;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/40">
        <div className="flex justify-between items-center px-6 py-4">
          <a href="#home" className="hover:opacity-80 transition-opacity duration-300">
            <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent font-bold">
              My Portfolio
            </h1>
          </a>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 text-lg">
            {LINKS.map(({ id, name }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={handleLinkClick} className="text-white hover:text-lime-500 transition-colors duration-300">
                  {name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button onClick={toggleMenu} className="md:hidden p-2 text-white hover:text-lime-500 transition-all duration-300" aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu with Slide-in Animation */}
        <div ref={menuRef} className={`fixed inset-y-0 right-0 w-3/4 max-w-xs bg-black text-white transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden flex flex-col items-center pt-16 shadow-lg`}>
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
            <X className="h-8 w-8" />
          </button>
          <ul className="space-y-6 text-xl bg-black w-full text-center">
            {LINKS.map(({ id, name }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={handleLinkClick} className="block py-2 hover:text-lime-300 transition-all duration-300">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      {/* Floating WhatsApp & Scroll-to-Top Button */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group p-4 rounded-full bg-green-500 text-white shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center">
          <MessageCircle className="h-6 w-6" />
          <span className="hidden md:inline ml-2">Message Me</span>
        </a>

        <button onClick={scrollToTop} className={`p-4 rounded-full bg-pink-500 text-white shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center ${showScrollButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
          <ArrowUp className="h-6 w-6" />
        </button>
      </div>
    </>
  );
};

export default Navbar;
