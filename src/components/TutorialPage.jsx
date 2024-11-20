import React from "react";
import { useNavigate } from "react-router-dom";

const TutorialPage = () => {
  const navigate = useNavigate();

  const videos = [
    "https://www.youtube.com/embed/awIXN5LgWKY?si=j-FAF4NB0st72ts5",
    "https://www.youtube.com/embed/5WjFQieCwBM?si=EPe7S1mKG85Mjp_F",
    "https://www.youtube.com/embed/9TxiTk669IQ?si=EKuYmYbKp9AZOIEE",
    "https://www.youtube.com/embed/J_CgRikV-tU?si=Ye0iBG2S6GniAygg",
    "https://www.youtube.com/embed/S0tUOS43bj0?si=Q9AS18rPxpeE18qW",
    "https://www.youtube.com/embed/PxW9TnogX2Y?si=5PC5xRb6SjuA3ziT",
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Tutorials for Learning
      </h1>

      {/* Video Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <iframe
              src={video}
              title={`Tutorial ${index + 1}`}
              className="w-full h-52"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* Navigation Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => navigate("/learnPage")}
          className="btn btn-primary text-lg"
        >
          Learn Vocabularies
        </button>
      </div>
    </div>
  );
};

export default TutorialPage;
