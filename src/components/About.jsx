import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import VideoCarousel from "./VideoCarousel"; // Import the Video Carousel component

const timelineData = [
  { year: "October 2002", title: "Born", description: "I was born on October 9, 2002, in Nepal." },
  { year: "April 2019", title: "Class 10 Graduation", description: "Passed Class 10 from St. Joseph's English School, Gorkha with a GPA of 3.85 (96.25%)." },
  { year: "June 2021", title: "Class 102 Graduation", description: "Passed Class 12 from Kathmandu Model Secondary School, Kathmandu with a GPA of 3.57 (89.25%)." },
  { year: "Decemeber 2021", title: "Started Engineering", description: "Began my Civil Engineering journey at NIT Silchar." },
  { year: "May-July 2023", title: "Internship at Marsyangdi", description: "Worked at Marsyangdi Hydropower Station as a lab assistant, handling sediment calculations and river level data." },
  { year: "May-July 2024", title: "Internship at IIT Kanpur", description: "Completed a research internship on water distribution modeling using EPANET under Dr. Abhijith G.R." },
  { year: "2025", title: "Final Year Project", description: "Working on the Analysis & Design of a G+3 Market Complex in Silchar as my major project." },
];

const skills = ["💧 EPANET", "🏗️ AutoCAD", "🏛️ Structural Analysis", "🏢 Revit", "📊 Staad Pro", "🏠 ETABS"];

const hobbies = [" Playing Guitar", "Photography", "Sports Enthusiast"];

const About = () => {
  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 py-10 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg text-gray-700">
          I'm Sheshraman Shrestha, a passionate <strong>Civil Engineering student</strong> with hands-on experience in
          <strong> hydraulic modeling, structural analysis, and construction planning</strong>. I love solving real-world engineering challenges.
        </p>

        {/* Timeline Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">My Journey</h2>
          <div className="relative">
            {/* Timeline Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 hidden md:block"></div>

            {/* Timeline Items */}
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
                  {/* Year and Line Connector (Mobile View) */}
                  <div className="md:hidden text-center mb-4">
                    <span className="text-xl font-semibold text-blue-600">{item.year}</span>
                    <div className="w-1 h-16 bg-blue-500 mx-auto"></div>
                  </div>

                  {/* Event Box */}
                  <div
                    className={`relative bg-white p-6 shadow-lg rounded-lg ${
                      index % 2 === 0 ? "border-r-4 border-blue-600" : "border-l-4 border-blue-600"
                    } md:w-1/2`}
                  >
                    <h3 className="text-xl font-bold text-blue-700">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                    {/* Connector for Large Screens */}
                    <div
                      className={`absolute top-1/2 w-5 h-5 bg-blue-500 rounded-full transform -translate-y-1/2 ${
                        index % 2 === 0 ? "-right-3" : "-left-3"
                      } hidden md:block`}
                    ></div>
                  </div>

                  {/* Year Display (Large Screens) */}
                  <div className="hidden md:block text-xl font-semibold text-blue-600">{item.year}</div>
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
          <h2 className="text-2xl font-semibold mb-4">Let's Connect!</h2>
          <p>Want to collaborate? Reach out to me.</p>
          <Link to="/contact">
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
