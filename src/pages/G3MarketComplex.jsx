import React from "react";
import { Link } from "react-router-dom";

const G3MarketComplex = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-orange-700 mb-6">G+3 Market Complex Design</h2>

        <p className="text-gray-600 mb-4">
          This project involves the structural design of a **G+3 Market Complex** located in Silchar. The primary goal is
          to analyze the stability, load-bearing capacity, and overall feasibility of the structure.
        </p>

        <h3 className="text-2xl font-semibold text-orange-600 mt-6">Project Overview</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Three-member team working collaboratively.</li>
          <li>**Phase 1:** Architectural planning of the building (Completed).</li>
          <li>**Phase 2:** Structural analysis is currently in progress.</li>
          <li>**Phase 3:** Hand calculations for load distribution (Upcoming).</li>
          <li>The final report is still in process and will be uploaded soon.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-orange-600 mt-6">Scope of Work</h3>
        <p className="text-gray-600">
          The market complex is being designed to **withstand various load conditions**, including:
          - Dead Load (self-weight of the structure)
          - Live Load (occupants & furniture)
          - Wind & Seismic Loads (as per IS 1893:2016)
        </p>

        <div className="text-center mt-6">
          <Link to="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default G3MarketComplex;
