import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo (Links to Home) */}
        <Link to="/" className="text-3xl font-bold transition duration-300 
             hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          My Portfolio
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg items-center">
          <li>
            <Link to="/about" className="text-lg font-poppins transition duration-300 
             hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">About</Link>
          </li>
          <li>
            <Link to="/p&e" className="text-lg font-poppins transition duration-300 
             hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">P&E</Link>
          </li>
          <li>
            <Link to="/blog" className="text-lg font-poppins transition duration-300 
             hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Blog</Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg font-poppins transition duration-300 
             hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Contact</Link>
          </li>
          {/* Download Resume Button - Stylish & Attractive */}
          <li>
            <a 
              href="/resume.pdf" 
              download="Sheshraman_Resume.pdf"
              rel="noopener noreferrer"
              className="px-4 py-2 font-poppins bg-blue-600 text-white rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-700"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2 bg-gray-800 text-white p-4 rounded-lg">
          <li>
            <Link to="/about" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/p&e" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>P&E</Link>
          </li>
          <li>
            <Link to="/blog" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Blog</Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
          <li>
            <a 
              href="/resume.pdf" 
              download="Sheshraman_Resume.pdf"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md transition duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-700"
            >
              Download Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
