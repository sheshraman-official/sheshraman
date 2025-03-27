import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p className="text-lg">© 2025 Sheshraman Shrestha. All Rights Reserved.</p>
      
      {/* Social Links */}
      <div className="mt-3 flex justify-center gap-4">
        <a href="https://github.com/sheshraman-official" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/sheshraman-shrestha-b80070230/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
          LinkedIn
        </a>
        <a href="mailto:sheshraman.official@gmail.com" className="hover:text-gray-400 transition duration-300">
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
