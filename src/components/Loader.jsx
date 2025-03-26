import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <ClipLoader size={50} color={"#4A90E2"} />
    </div>
  );
};

export default Loader;
