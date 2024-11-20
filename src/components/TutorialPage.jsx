import React from "react";
import { useNavigate } from "react-router-dom";

const TutorialPage = () => {
  const navigate = useNavigate();

  const videos = [
    "https://www.youtube.com/embed/video_id_1",
    "https://www.youtube.com/embed/video_id_2",
    "https://www.youtube.com/embed/video_id_3",
    "https://www.youtube.com/embed/video_id_4",
    "https://www.youtube.com/embed/video_id_5",
    "https://www.youtube.com/embed/video_id_6",
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
