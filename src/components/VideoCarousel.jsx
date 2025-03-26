import React, { useState } from "react";

const VideoCarousel = () => {
  const videos = [
    "DG91ue9_krM", 
    "RyWFf88QAOk",
    "5WkCTr61liY",
    "2w68Uy4GkFY",
    "XwdP9tyYmJ8",
    "sFAlBWXEoZM"
  ]; // Replace with actual YouTube video IDs

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="relative w-full flex flex-col items-center mt-10">
      <h2 className="text-2xl font-semibold mb-4">My YouTube Videos</h2>

      {/* Video Player */}
      <div className="relative w-full max-w-3xl">
        <iframe
          width="100%"
          height="450"
          src={`https://www.youtube.com/embed/${videos[currentIndex]}?autoplay=1&loop=1&playlist=${videos[currentIndex]}`}
          title="YouTube Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>

        {/* Navigation Buttons */}
        <button
          onClick={prevVideo}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 shadow-md"
        >
          ◀
        </button>

        <button
          onClick={nextVideo}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 shadow-md"
        >
          ▶
        </button>
      </div>

      {/* Video Indicator Dots */}
      <div className="flex space-x-2 mt-4">
        {videos.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
