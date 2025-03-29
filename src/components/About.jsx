import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import VideoCarousel from "./VideoCarousel"; // Import VideoCarousel component
import ap3 from "../assets/images/ap3.webp"; // Background image

const timelineData = [
  { year: "October 2002", title: "Born", description: "I was born on October 9, 2002, in Nepal." },
  { year: "April 2019", title: "Class 10 Graduation", description: "Passed Class 10 from St. Joseph's English School, Gorkha with a GPA of 3.85 (96.25%)." },
  { year: "June 2021", title: "Class 12 Graduation", description: "Passed Class 12 from Kathmandu Model Secondary School, Kathmandu with a GPA of 3.57 (89.25%)." },
  { year: "December 2021", title: "Started Engineering", description: "Began my Civil Engineering journey at NIT Silchar." },
  { year: "May-July 2023", title: "Internship at Marsyangdi", description: "Worked at Marsyangdi Hydropower Station as a lab assistant, handling sediment calculations and river level data." },
  { year: "May-July 2024", title: "Internship at IIT Kanpur", description: "Completed a research internship on water distribution modeling using EPANET under Dr. Abhijith G.R." },
  { year: "2025", title: "Final Year Project", description: "Working on the Analysis & Design of a G+3 Market Complex in Silchar as my major project." },
];

const skills = ["💧 EPANET", "🏗️ AutoCAD", "🏛️ Structural Analysis", "🏢 Revit", "📊 Staad Pro", "🏠 ETABS"];
const hobbies = ["Playing Guitar", "Photography", "Sports Enthusiast"];

const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className="min-h-screen text-black py-10 px-6 md:px-20 relative"
      style={{
        backgroundImage: `url(${ap3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
  {[...Array(20)].map((_, index) => (
    <div
      key={index}
      className="absolute bg-blue-400 bg-opacity-50 rounded-full" // Changed color from white to blue
      style={{
        width: `${Math.random() * 200 + 40}px`,
        height: `${Math.random() * 20 + 40}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `bubbleFloat ${Math.random() * 6 + 4}s infinite linear`,
      }}
    ></div>
  ))}
</div>


      <div className="font-caveat text-xl relative max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-wallpoet font-bold mb-6">About Me</h1>

        {/* Collapsible Introduction */}
        <div className="relative max-w-3xl mx-auto text-black">
      <p className="text-2xl">
        I'm <strong>Sheshraman Shrestha</strong>, a passionate <strong>Civil Engineering student</strong> with hands-on experience in
        <strong> hydraulic modeling, structural analysis, and construction planning</strong>. I love solving real-world engineering challenges.
      </p>

      <div className={`relative overflow-hidden transition-all duration-500 ${expanded ? "max-h-full" : "max-h-40"}`}>
        <p className="text-2xl mt-1">
          My early education began at <strong>Shree Marsyangdi Bal Jyoti Awasiya Madhyamik Vidhyalaya, Aanbukhaireni</strong> until Grade 4, 
          after which I transferred to <strong>St. Joseph's English School</strong>, where I completed my schooling.  
          <br /><br />
          I have a strong fascinat  ion with technology, and I enjoy understanding how things work, from engineering structures to digital systems. 
          If there's a new gadget or software, you can bet I'll be exploring it! 
          <br /><br />
          As for my personality, I'm quite <strong>introverted</strong>. I don’t usually initiate conversations, but if someone talks to me, I love engaging with them. 
          The only problem? I don’t really know how to push the conversation forward—so if you stop talking, well… that's where it ends! 😅  
          <br /><br />
          I also <strong>don’t like being ordered around</strong>. If something needs to be done, just ask me politely—I’ll get it done. 
          But tell me what to do in a commanding way? Yeah, that’s not going to work!  
          <br /><br />
          Oh, and I have a bit of a <strong>materialistic side</strong>. I love collecting cool things, and if someone offers me a gift, 
          my first reaction is to hesitate… but if they insist, well, let’s just say I won’t refuse twice. 😂
        </p>
        {!expanded && (
          <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
        )}
      </div>

      {/* See More Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-blue-600 hover:underline cursor-pointer"
      >
        {expanded ? "See Less" : "See More"}
      </button>
      </div>

        {/* Timeline Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">My Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 hidden md:block"></div>

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center justify-between w-full md:w-3/4 mx-auto ${
                    index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                >
                  <div className="md:hidden text-center mb-4">
                    <span className="text-xl font-semibold text-blue-600">{item.year}</span>
                    <div className="w-1 h-16 bg-blue-500 mx-auto"></div>
                  </div>

                  <div
                    className={`relative bg-white bg-opacity-90 p-6 shadow-lg rounded-lg ${
                      index % 2 === 0 ? "border-r-4 border-blue-600" : "border-l-4 border-blue-600"
                    } md:w-1/2`}
                  >
                    <h3 className="text-xl font-bold text-blue-700">{item.title}</h3>
                    <p className="text-gray-800">{item.description}</p>
                    <div
                      className={`absolute top-1/2 w-5 h-5 bg-blue-500 rounded-full transform -translate-y-1/2 ${
                        index % 2 === 0 ? "-right-3" : "-left-3"
                      } hidden md:block`}
                    ></div>
                  </div>

                  <div className="hidden md:block text-xl font-semibold text-black">{item.year}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {skills.map((skill, index) => (
              <div key={index} className="bg-blue-100 p-4 rounded-lg shadow-md">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">Hobbies & Interests</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {hobbies.map((hobby, index) => (
              <div key={index} className="bg-green-100 p-4 rounded-lg shadow-md">
                {hobby}
              </div>
            ))}
          </div>
        </div>

        {/* Video Carousel */}
        <div className="mt-16">
          <VideoCarousel />
        </div>

        {/* Call to Action */}
<div className="mt-16">
  <h2 className="text-2xl font-semibold mb-4 text-black">Let's Connect!</h2>
  <p className="text-black">Want to collaborate? Reach out to me.</p>
  <Link to="/contact">
    <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-900 transition duration-300">
      Contact Me
    </button>
  </Link>
</div>

      </div>
    </section>
  );
};

export default About;
