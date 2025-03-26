import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-4">
      {/* Profile Image */}
      <img
        src="/profile.jpg" 
        alt="Sheshraman"
        className="w-40 h-40 rounded-full shadow-lg border-4 border-gray-600"
      />
      
      {/* Name & Introduction */}
      <h1 className="text-5xl font-bold mt-4">Hello, I'm Sheshraman</h1>
      <p className="text-lg text-gray-300 mt-2">
        A Civil Engineering Student | Guitar Enthusiast
      </p>
      
      {/* View Work Button - Now Navigates Correctly */}
      <Link to="/projects">
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          View My Work
        </button>
      </Link>
    </section>
  );
};

export default Hero;
