import React from "react";

const AboutUs = () => {
  const projects = [
    {
      name: "Programmer Expenses Assistant",
      description:
        "A web tool for tracking and managing developer expenses with a sleek UI.",
    },
    {
      name: "University Admission Score Calculator",
      description:
        "An app for calculating university admission scores based on multiple criteria.",
    },
    {
      name: "Unity Game: Bounce Ball",
      description: "A fun game where players score by guiding a ball to targets.",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React",
  ];

  return (
    <div className="min-h-screen bg-base-100 text-gray-700 py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">About Me</h1>
          <p className="text-lg">
            Hi, I'm a passionate web and app developer with expertise in modern
            technologies. Here's a glimpse into my journey and skills.
          </p>
        </div>

        {/* Section: About */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
          <p className="leading-relaxed">
            I'm a dedicated developer who loves creating innovative and
            user-friendly applications. Whether it's a responsive website or a
            dynamic app, I enjoy bringing ideas to life. My journey has been
            fueled by learning, experimenting, and collaborating on various
            projects.
          </p>
        </div>

        {/* Section: Projects */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {project.name}
                </h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Skills */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-primary text-white px-4 py-2 rounded-full text-sm shadow-sm mx-auto"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Want to collaborate or learn more? Reach out via the contact page!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
