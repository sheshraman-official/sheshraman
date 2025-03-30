import React from "react";
import { Link } from "react-router-dom";

const HydraulicModeling = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-orange-700 mb-6">Hydraulic & Water Quality Modeling</h2>

        <p className="text-gray-600 mb-4">
          This project was part of my **IIT Kanpur SURGE 2024 internship**, focusing on **hydraulic and water quality modeling of water distribution systems** using **EPANET**.
        </p>

        <h3 className="text-2xl font-semibold text-orange-600 mt-6">Project Overview</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Modeled a complex water distribution network using EPANET.</li>
          <li>Simulated water flow, pressure, and quality variations over time.</li>
          <li>Analyzed real-world water supply issues and provided optimization solutions.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-orange-600 mt-6">Project Resources</h3>
        <div className="mt-4">
        <a
  href={`${process.env.PUBLIC_URL}/kanpur_report.pdf`}
  download
  className="block text-blue-600 hover:underline"
>
  📄 Download Project Report
</a>

        </div>

        {/* Display PNG Poster */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-orange-600">Project Poster</h3>
          <img
  src={`${process.env.PUBLIC_URL}/poster.png`}
  alt="Kanpur Project Poster"
  className="w-full h-auto rounded-lg shadow-md mt-2"
/>

        </div>

        <div className="text-center mt-6">
          <Link to="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HydraulicModeling;
