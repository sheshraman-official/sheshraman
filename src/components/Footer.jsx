import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import p2 from "../assets/images/p2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram, faFacebook, faLinkedin, faGithub, faXTwitter, faYoutube, faThreads } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer 
      className="py-4 px-4 text-white font-wallpoet bg-cover flex flex-col items-center md:flex-row md:justify-between"
      style={{ backgroundImage: `url(${p2})` }}
    >
      {/* Contact Section */}
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h3 className="text-sm text-gray-300 mb-2">Contact</h3>
        <div className="flex justify-center md:justify-start gap-3">
          <a href="mailto:sheshraman.official@gmail.com" className="hover:text-blue-400 transition">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl text-white hover:text-blue-400" />
          </a>
          <a href="https://wa.me/917896173050" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <FontAwesomeIcon icon={faWhatsapp} className="text-xl text-white hover:text-green-400" />
          </a>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="text-center mb-4 md:mb-0">
        <h3 className="text-sm text-gray-300 mb-2">Social Media</h3>
        <div className="flex gap-3 flex-wrap justify-center">
          <a href="https://www.instagram.com/r5.504/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-xl text-white hover:text-pink-500 transition" />
          </a>
          <a href="https://www.facebook.com/Royaz.Shrestha0516" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-xl text-white hover:text-blue-600 transition" />
          </a>
          <a href="https://www.linkedin.com/in/sheshraman-shrestha-b80070230/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-xl text-white hover:text-blue-500 transition" />
          </a>
          <a href="https://github.com/sheshraman-official" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-xl text-white hover:text-blue-950 transition" />
          </a>
          <a href="https://x.com/s_sheshraman" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className="text-xl text-white hover:text-black transition" />
          </a>
          <a href="https://www.youtube.com/@sheshramanshrestha" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="text-xl text-white hover:text-red-600 transition" />
          </a>
          <a href="https://www.threads.net/@r5.504" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faThreads} className="text-xl text-white hover:text-black transition" />
          </a>
        </div>
      </div>

      {/* Legal Section */}
      <div className="text-center md:text-right">
        <h3 className="text-sm text-gray-300 mb-2">Legal</h3>
        <p className="text-xl font-sirin text-gray-300">© 2025 Sheshraman Shrestha</p>
        <div className="flex justify-center md:justify-end gap-3 text-gray-300 text-xs">
          <Link to="/terms" className="hover:text-orange-500 transition">Terms & Conditions</Link>
          <span>|</span>
          <Link to="/privacy" className="hover:text-orange-500 transition">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
