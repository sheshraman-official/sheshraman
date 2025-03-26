import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo (Links to Home) */}
        <Link to="/" className="text-2xl font-bold">
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
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link to="/about" className="hover:text-blue-400">About</Link>  {/* Replaced "Home" with "About" */}
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-400">Projects</Link>
          </li>
          <li>
            <Link to="/experience" className="hover:text-blue-400">Experience</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400">Contact</Link>
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
            <Link to="/projects" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link to="/experience" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Experience</Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
