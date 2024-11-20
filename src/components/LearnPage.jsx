import React from "react";
import { useNavigate } from "react-router-dom";

const LearnPage = () => {
  const navigate = useNavigate();

  // Static lesson cards
  const lessons = Array.from({ length: 10 }, (_, index) => ({
    lesson_no: index + 1,
    title: `Lesson-${index + 1}`,
  }));

  // Handle card click to navigate to lesson page
  const handleCardClick = (lesson_no) => {
    navigate(`/lesson/${lesson_no}`);
  };

  // Handle "View More" button click
  const handleViewMoreClick = () => {
    navigate("/tutorialPage");
  };

  return (
    <div className="lets-learn-page">
      {/* Page Title */}
      <section className="page-title py-10 bg-gray-100 text-center">
        <h1 className="text-4xl font-bold">Let’s Learn</h1>
      </section>

      {/* Lesson Cards */}
      <section className="lessons-section py-10 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-8">Lessons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-5">
          {lessons.map((lesson) => (
            <div
              key={lesson.lesson_no}
              className="lesson-card p-5 bg-blue-100 text-center rounded-lg shadow-md hover:bg-blue-200 cursor-pointer transition"
              onClick={() => handleCardClick(lesson.lesson_no)}
            >
              <h3 className="text-xl font-bold">{lesson.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="tutorial-section py-10 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-5">Learn the Alphabet</h2>
        <div className="youtube-video-container max-w-4xl mx-auto">
          <iframe
            className="w-full h-64 sm:h-80 lg:h-96"
            src="https://www.youtube.com/embed/awIXN5LgWKY?si=j-FAF4NB0st72ts5" // Replace VIDEO_ID with your YouTube video ID
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <button
          className="view-more-btn mt-5 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          onClick={handleViewMoreClick}
        >
          View More
        </button>
      </section>
    </div>
  );
};

export default LearnPage;
