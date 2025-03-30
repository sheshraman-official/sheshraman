import React, { useState } from "react";
import { Link } from "react-router-dom";

const LateralStudy = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-orange-700 mb-6">Lateral Placement & Heterogeneity Study</h2>

        <p className="text-gray-600 mb-4">
          This research project was conducted under **Dr. Subhadip Biswas**, analyzing vehicle movement inconsistency.
        </p>

        <h3 className="text-2xl font-semibold text-orange-600 mt-6">Project Overview</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Three-member team assigned different video datasets.</li>
          <li>Professor provided multiple videos for analysis.</li>
          <li>My assigned video was **004**, with a total duration of 37 minutes.</li>
          <li>Data extraction was performed using **Kinovea** software.</li>
          <li>Extracted data was saved in **Microsoft Excel (sheet1.xlsx)**.</li>
          <li>A master Excel sheet was later prepared combining all data.</li>
        </ul>

        {showMore && (
          <div>
            <h3 className="text-2xl font-semibold text-orange-600 mt-6">Research Process</h3>
            <p className="text-gray-600">
              The goal of the study was to analyze **lateral movement patterns of vehicles** in heterogeneous traffic
              conditions. Key analysis steps included:
            </p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>**Data Extraction:** Kinovea software was used to track vehicle positions.</li>
              <li>**Excel Processing:** The extracted data was compiled into an Excel sheet.</li>
              <li>**Heterogeneity Index Calculation:** The movement patterns were used to derive the heterogeneity index.</li>
              <li>**Research Papers:** We referred to two research papers provided by the professor.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-orange-600 mt-6">View Research Papers & Data</h3>
            <div className="mt-4">
            <a href={`${process.env.PUBLIC_URL}/paper1.pdf`} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
  📄 Research Paper 1
</a>
<a href={`${process.env.PUBLIC_URL}/paper2.pdf`} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline mt-2">
  📄 Research Paper 2
</a>
<a href={`${process.env.PUBLIC_URL}/sheet1.xlsx`} download className="block text-blue-600 hover:underline mt-2">
  📊 Download Excel Data (Sheet1)
</a>
            </div>
          </div>
        )}

        <button
          className="mt-4 text-blue-500 underline"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "See Less" : "See More"}
        </button>

        <div className="text-center mt-6">
          <Link to="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LateralStudy;
