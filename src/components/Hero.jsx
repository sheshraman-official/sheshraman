import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [hovered, setHovered] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) { // Disable hover on mobile
      setHovered(true);
      setTimeout(() => {
        setShowSecondImage(true);
      }, 400);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setShowSecondImage(false);
  };

  return (
    <section
      className="h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/webb.png)`,
        backgroundSize: window.innerWidth > 768 ? "400px 400px" : "200px 200px",
        backgroundRepeat: "repeat",
        backgroundColor: "#0a192f",
      }}
    >

      {/* Floating Bubbles - Reduced for Mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(window.innerWidth > 768 ? 10 : 3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-lightBlueprint opacity-20 rounded-full filter blur-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1.5, 0],
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              y: ["100%", "-100%"],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: `${Math.random() * (window.innerWidth > 768 ? 120 : 60) + 60}px`,
              height: `${Math.random() * (window.innerWidth > 768 ? 120 : 60) + 60}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Left Side - Text Section */}
      <div className="md:w-1/2 text-left space-y-6">
        <motion.h1 
          className="text-6xl font-wallpoet font-extrabold tracking-wider text-blue-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typewriter
            words={["Hello", "नमस्ते", "Hola", "こんにちは"]}
            loop={true} 
            cursor
            cursorStyle="_"
            typeSpeed={window.innerWidth > 768 ? 150 : 100} // Reduced speed for mobile
            deleteSpeed={window.innerWidth > 768 ? 70 : 50}
            delaySpeed={window.innerWidth > 768 ? 1500 : 1000}
          />
        </motion.h1>

        <motion.h2 
          className="text-5xl font-caveat font-medium text-orange-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <Typewriter
            words={["I'm Sheshraman", "I'm from Nepal", "A Civil Engineer", "Guitar Enthusiast"]}
            loop={true} 
            cursor
            cursorStyle="_"
            typeSpeed={window.innerWidth > 768 ? 150 : 100} // Reduced speed for mobile
            deleteSpeed={window.innerWidth > 768 ? 50 : 30}
            delaySpeed={window.innerWidth > 768 ? 1500 : 1000}
          />
        </motion.h2>

        {/* Buttons */}
        <div className="flex gap-6 mt-6">
          <Link to="/p&e">
            <motion.button 
              className="relative px-5 py-2 font-wallpoet bg-transparent border-2 border-b-orange-500 text-black rounded-md shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-black hover:text-orange-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </Link>

          <Link to="/contact">
            <motion.button 
              className="relative px-5 py-2 font-wallpoet bg-transparent border-2 border-b-orange-500 text-black rounded-md shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-black hover:text-orange-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <motion.div 
        className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Link to="/about">
          <div
            className={`relative w-52 h-52 flex justify-center items-center bg-gradient-to-r from-blueprintBlue to-blue-300 p-1 rounded-full transition-transform duration-700 ease-in-out ${hovered ? "md:scale-150" : "md:scale-125"}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={`${process.env.PUBLIC_URL}/${showSecondImage ? "profile2.jpg" : "profile.jpg"}`} 
              alt="Sheshraman"
              className="w-full h-full rounded-full border-4 border-orange-500 object-cover transition-opacity duration-700 ease-in-out"
            />
          </div>
        </Link>
      </motion.div>

    </section>
  );
};

export default Hero;
