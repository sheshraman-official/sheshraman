import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "G+3 Market Complex Design",
    description: "A structural design project analyzing a multi-floor commercial complex in Silchar.",
  },
  {
    title: "Lateral Placement & Heterogeneity Study",
    description: "A research project under Dr. Subhadip Biswas analyzing vehicle movement inconsistency.",
  },
  {
    title: "Hydraulic & Water Quality Modeling",
    description: "An IIT Kanpur internship project using EPANET to simulate water distribution networks.",
  },
];

const Projects = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-8 px-10">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="mt-10 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
        Back to Home
      </Link>
    </section>
  );
};

export default Projects;
