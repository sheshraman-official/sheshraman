import React, { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "G+3 Market Complex Design",
    route: "/G3MarketComplex",
  },
  {
    title: "Lateral Placement & Heterogeneity Study",
    route: "/LateralStudy",
  },
  {
    title: "Hydraulic & Water Quality Modeling",
    route: "/HydraulicModeling",
  },
];

const experiences = [
  {
    title: "Research Intern at IIT Kanpur",
    period: "May 2024 - July 2024",
    description:
      "Worked on hydraulic and water quality modeling of water distribution systems using EPANET.",
    imagesFolder: "kanpur_internship/",
    totalImages: 4,
  },
  {
    title: "Intern at Marsyangdi Hydropower Station",
    period: "May 2023 - July 2023",
    description:
      "Assisted in sediment calculations, data entry, and riverbed sediment thickness measurement.",
    imagesFolder: "hydropower_internship/",
    totalImages: 7,
    report: "hydropower_internship/hydropower_report.pdf",
    excel: "hydropower_internship/hydropower_excel.xlsx",
  },
];

const PE = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-100 via-gray-200 to-orange-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-wallpoet font-bold text-center mb-12">Projects & Experience</h2>

        {/* PROJECTS SECTION */}
        <h3 className="text-4xl font-caveat font-semibold text-center text-gray-800 mb-6">Projects</h3>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.route}
              className="w-64 h-40 bg-orange-500 shadow-lg rounded-lg flex items-center justify-center text-center font-semibold text-xl text-gray-900 hover:scale-105 transition duration-300 hover:shadow-orange-600"
            >
              {project.title}
            </Link>
          ))}
        </div>

        {/* EXPERIENCE SECTION */}
        <h3 className="font-caveat text-3xl font-semibold text-center text-gray-800 mb-6">Experience</h3>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-2xl font-sirin font-semibold text-orange-800">{exp.title}</h4>
              <p className="text-gray-800 font-caveat text-xl">{exp.period}</p>
              <p className="text-gray-700 font-mono mt-2">{exp.description}</p>

              {/* Image Gallery */}
              <div className="mt-4 flex space-x-4 overflow-x-auto pb-2">
                {Array.from({ length: exp.totalImages }, (_, i) => (
                  <img
                    key={i}
                    src={`${process.env.PUBLIC_URL}/${exp.imagesFolder}${i + 1}.jpg`}
                    alt={`Internship ${i + 1}`}
                    className="w-40 h-40 object-cover rounded-md shadow-md hover:scale-110 transition cursor-pointer"
                    onClick={() => setSelectedImage(`${process.env.PUBLIC_URL}/${exp.imagesFolder}${i + 1}.jpg`)}
                  />
                ))}
              </div>

              {/* Downloadable Files (For Hydropower Internship Only) */}
              {exp.report && (
                <div className="mt-4">
                  <a
                    href={`${process.env.PUBLIC_URL}/${exp.report}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:underline"
                  >
                    Download Internship Report
                  </a>
                </div>
              )}

              {exp.excel && (
                <div className="mt-2">
                  <a
                    href={`${process.env.PUBLIC_URL}/${exp.excel}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:underline"
                  >
                    Download Excel Data
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Enlarged view" className="max-w-3xl max-h-[90vh] rounded-lg shadow-lg" />
        </div>
      )}
    </section>
  );
};

export default PE;
