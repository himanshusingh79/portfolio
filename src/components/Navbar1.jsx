import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LINKS } from "../constants";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="mb-20 flex items-left justify-between py-6">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo or Brand Name */}
          <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">My PortFolio</h1>

          {/* Desktop Menu (Hidden on Mobile) */}
          <ul className="m-8 flex items-center justify-center gap-4 text-2xl">
            {LINKS.map(({ id, name }) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-lime-300 transition">
                  {name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button (Hidden on Desktop) */}
          <button
            onClick={toggleMenu}
            className="p-2 md:hidden focus:outline-none"
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Only visible when `isOpen` is true) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black text-white z-40 flex flex-col items-center justify-center md:hidden">
          <ul className="space-y-6 text-2xl">
            {LINKS.map(({ id, name }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={toggleMenu}
                  className="text-4xl font-semibold uppercase tracking-wide hover:text-lime-300 transition"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar1;
