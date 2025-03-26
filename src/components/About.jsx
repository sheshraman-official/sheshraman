import React from "react";
import { Link } from "react-router-dom";
import VideoCarousel from "./VideoCarousel"; // Import the Video Carousel component

const About = () => {
  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 py-10 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        {/* Personal Introduction */}
        <p className="text-lg text-gray-700">
          I'm Sheshraman, a passionate <strong>civil engineering student</strong> with hands-on experience in <strong>hydraulic modeling, structural analysis, and construction planning</strong>. I love solving real-world engineering challenges and exploring innovative technologies.
        </p>

        {/* Journey Timeline */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
          <ul className="border-l-4 border-blue-600 pl-6">
            <li className="mb-4"><span className="font-bold">2021:</span> Started Civil Engineering at <strong>NIT Silchar</strong>.</li>
            <li className="mb-4"><span className="font-bold">2023:</span> Internship at <strong>Marsyangdi Hydropower Station</strong>.</li>
            <li className="mb-4"><span className="font-bold">2024:</span> SURGE Internship at <strong>IIT Kanpur</strong>.</li>
            <li className="mb-4"><span className="font-bold">2025:</span> Final Year Project & <strong>Portfolio Website Launch</strong>.</li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="mt-10">
  <h2 className="text-2xl font-semibold mb-4">Skills</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
    <div className="bg-blue-100 p-4 rounded-lg shadow">💧 EPANET</div>
    <div className="bg-blue-100 p-4 rounded-lg shadow">🏗️ AutoCAD</div>
    <div className="bg-blue-100 p-4 rounded-lg shadow">🏛️ Structural Analysis</div>
    {/* <div className="bg-blue-100 p-4 rounded-lg shadow">🌐 React & Tailwind</div> */}
    <div className="bg-blue-100 p-4 rounded-lg shadow">🏢 Revit</div>
    <div className="bg-blue-100 p-4 rounded-lg shadow">📊 Staad Pro</div>
  </div>
</div>

        {/* Hobbies Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Hobbies & Interests</h2>
          <p className="text-lg text-gray-700">Outside of engineering, I enjoy playing <strong>guitar</strong>, exploring <strong>photography</strong>, and following <strong>football</strong>.</p>
        </div>

        {/* Video Carousel (YouTube) */}
        <VideoCarousel /> {/* This will display the video carousel */}

        {/* Testimonials */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Motto of Life</h2>
          <blockquote className="italic text-gray-700">
            "Perform your obligatory duty because action is indeed better than inaction."
            <br /> – <span className="font-bold">Bhagavad Gita</span>
          </blockquote>
        </div>

        

        {/* Call to Action */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Let's Connect!</h2>
          <p>Want to collaborate? Reach out to me.</p>
          <Link to="/contact">
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
