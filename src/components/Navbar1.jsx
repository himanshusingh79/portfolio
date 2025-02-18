import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          MyPortfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="About.jsx" className="hover:text-blue-400">About Me</a>
          <a href="/Technologies.jsx" className="hover:text-blue-400">Technologies</a>
          <a href="/contact.jsx" className="hover:text-blue-400">Get In Touch</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4 bg-gray-800 p-4 rounded-lg">
          <a href="#about" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>About Me</a>
          <a href="#technologies" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Technologies</a>
          <a href="#contact" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Get In Touch</a>
        </div>
      )}
    </nav>
  );
}
