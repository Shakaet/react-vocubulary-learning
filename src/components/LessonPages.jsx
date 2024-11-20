import React, { useState } from "react";
import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import { Dialog } from "@headlessui/react"; // For Modal

const LessonPages = () => {

    let vocabularies= useLoaderData()
  const { lesson_no } = useParams(); // Get lesson_no from the URL
  const navigate = useNavigate();
  const [selectedWord, setSelectedWord] = useState(null); // Modal state

  // Filter vocabularies for the current lesson
  const lessonVocabularies = vocabularies.filter(
    (word) => word.lesson_no === Number(lesson_no)
  );

  // Handle opening the modal with selected word data
  const openModal = (word) => {
    setSelectedWord(word);
  };

  // Handle closing the modal
  const closeModal = () => {
    setSelectedWord(null);
  };

  return (
    <div className="lesson-page">
      {/* Page Title */}
      <section className="page-title py-10 bg-gray-100 text-center">
        <h1 className="text-4xl font-bold">Lesson {lesson_no}</h1>
      </section>

      {/* Vocabulary Cards */}
      <section className="vocab-section py-10 px-5 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-8">Vocabularies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {lessonVocabularies.map((word) => (
            <div
              key={word.id}
              className={`p-5 rounded-lg shadow-md ${
                word.difficulty === "easy"
                  ? "bg-green-100"
                  : word.difficulty === "medium"
                  ? "bg-yellow-100"
                  : "bg-red-100"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{word.word}</h3>
              <p className="text-gray-700">
                <strong>Meaning:</strong> {word.meaning}
              </p>
              <p className="text-gray-700">
                <strong>Pronunciation:</strong> {word.pronunciation}
              </p>
              <p className="text-gray-700">
                <strong>Part of Speech:</strong> {word.part_of_speech}
              </p>
              <button
                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => openModal(word)}
              >
                When to Say
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedWord && (
        <Dialog
          open={Boolean(selectedWord)}
          onClose={closeModal}
          className="fixed z-10 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
              <Dialog.Title className="text-xl font-bold mb-4">
                {selectedWord.word}
              </Dialog.Title>
              <p>
                <strong>Meaning:</strong> {selectedWord.meaning}
              </p>
              <p>
                <strong>When to Say:</strong> {selectedWord.when_to_say}
              </p>
              <p>
                <strong>Example:</strong> {selectedWord.example}
              </p>
              <button
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </Dialog>
      )}

      {/* Back Button */}
      <div className="text-center my-10">
        <button
          className="px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          onClick={() => navigate("/learnPage")}
        >
          Back to Lessons
        </button>
      </div>
    </div>
  );
};

export default LessonPages;
