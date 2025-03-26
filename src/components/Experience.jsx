import React from "react";
import { Link } from "react-router-dom";

const experiences = [
  {
    title: "Research Intern at IIT Kanpur",
    period: "May 2024 - July 2024",
    details: "Worked on hydraulic and water quality modeling of water distribution systems using EPANET.",
  },
  {
    title: "Intern at Marsyangdi Hydropower Station",
    period: "May 2023 - July 2023",
    details: "Assisted in sediment calculations, data entry, and riverbed sediment thickness measurement.",
  },
];

const Experience = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold text-gray-900">Experience</h2>
      <div className="mt-8 space-y-6 px-10">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="text-gray-500">{exp.period}</p>
            <p className="text-gray-600 mt-2">{exp.details}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="mt-10 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
        Back to Home
      </Link>
    </section>
  );
};

export default Experience;
