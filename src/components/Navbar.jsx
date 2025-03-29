import React, { useState } from "react";
import { Link } from "react-router-dom";
import b4 from "../assets/images/b4.png";
import menuIcon from "../assets/images/menu.png"; // Import the menu button image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
      className="bg-white p-4 shadow-md font-wallpoet"
      style={{ backgroundImage: `url(${b4})` }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo (Links to Home) */}
        <Link to="/" className="text-3xl tracking-wide text-white transition duration-300 
             hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-600">
          My Portfolio
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <img src={menuIcon} alt="Menu" className="w-8 h-8" /> {/* White Menu Icon */}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg items-center">
          {["About", "P&E", "Blog", "Contact"].map((item, index) => (
            <li key={index}>
              <Link to={`/${item.toLowerCase()}`} className="text-lg text-blue-400 transition duration-300 
               hover:text-orange-600">
                {item}
              </Link>
            </li>
          ))}
          {/* Download Resume Button */}
          <li>
            <a 
              href="/resume.pdf" 
              download="Sheshraman_Resume.pdf"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-300 text-blue-800 rounded-md shadow-md transition duration-300 transform 
                        hover:text-orange-600 hover:bg-slate-600"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2 bg-blue-100 text-darkBlue p-4 rounded-lg">
          {["About", "P&E", "Blog", "Contact"].map((item, index) => (
            <li key={index}>
              <Link to={`/${item.toLowerCase()}`} className="block hover:text-blue-900" onClick={() => setIsOpen(false)}>
                {item}
              </Link>
            </li>
          ))}
          <li>
            <a 
              href="/resume.pdf" 
              download="Sheshraman_Resume.pdf"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-600 text-blue-500 rounded-md shadow-md transition duration-300 transform 
                        hover:text-orange-600 hover:bg-slate-600"
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
