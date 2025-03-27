import React, { useState } from "react";
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
    report: "/kanpur_report.pdf", // Report file path
    banner: "/kanpur_poster.pdf", // Banner file path
  },
];

const PE = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProjectDetails = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Projects Section */}
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="mt-8 space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg border-l-4 border-blue-600">
              <div
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() => toggleProjectDetails(index)}
              >
                <h3 className="text-2xl font-semibold text-blue-700">{project.title}</h3>
                <span className="text-2xl">{expandedProject === index ? "▲" : "▼"}</span>
              </div>

              {expandedProject === index && (
                <div className="p-6 bg-gray-50 border-t">
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* If the project has a report, show download button */}
                  {project.report && (
                    <a
                      href={project.report}
                      download
                      className="block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 mb-4 text-center"
                    >
                      Download Report
                    </a>
                  )}

                  {/* If the project has a banner, embed PDF viewer */}
                  {project.banner && (
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">Project Poster:</h4>
                      <img
  src={`${process.env.PUBLIC_URL}/poster.png`}
  alt="Kanpur Project Poster"
  className="w-full h-auto rounded-lg shadow-md"
/>


                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <h2 className="text-4xl font-bold text-center mt-16">Experience</h2>
        <div className="mt-8 space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-purple-600">
              <h3 className="text-2xl font-semibold text-purple-700">{exp.title}</h3>
              <p className="text-gray-500">{exp.period}</p>
              <p className="text-gray-600 mt-2">{exp.details}</p>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PE;
