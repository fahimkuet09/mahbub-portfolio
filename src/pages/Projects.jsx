import React from "react";
import { NavLink } from "react-router-dom";

const projects = [
  {
    title: "E-Filing System",
    description:
      "A Laravel-based digital filing and document management system designed to streamline workflow automation.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    live: null,
    detailsPath: "https://github.com/fahimkuet09/E-filing-System-Laravel",

  },
  {
    title: "Inventory Management System",
    description:
      "An efficient inventory management application that tracks stock, sales, and purchase workflows.",
    technologies: ["Laravel", "PHP", "MySQL"],
    live: null,
    detailsPath: "https://github.com/fahimkuet09/Inventory-Management-System",

  },
  {
    title: "Prescription & Appointment System",
    description:
      "A Laravel-based system for managing patient appointments, prescriptions, and medical records.",
    technologies: ["Laravel", "PHP", "MySQL"],
    live: null,
    detailsPath: "https://github.com/fahimkuet09/Prescription-Appointment-System-Laravel",
  
  },
  {
    title: "Islamic App – Deen",
    description:
      "Your ultimate Islamic companion with Quran recitation, Hadiths, Duas, prayer times, Ramadan schedules, Hifz Tracker, Qibla Compass, Tasbih Counter, Zakat Calculator, and more.",
    technologies: ["Flutter", "Firebase", "REST API"],
    live: null,
    code: null,
    detailsPath: "https://play.google.com/store/apps/details?id=tech.nagorik.deen&hl=en",
  },
  {
    title: "Camden Market App",
    description:
      "Discover the best of Camden Market with exclusive discounts, offers, and interactive features for visitors.",
    technologies: ["Flutter", "Firebase", "REST API"],
    live: null,
    code: null,
    detailsPath: "https://play.google.com/store/apps/details?id=com.camdenmarket.app",
  },
];

const Projects = () => {
  return (
    <div className="projects-section bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Technologies:</strong>{" "}
                {project.technologies.join(", ")}
              </p>
              <div className="flex flex-wrap gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Site
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Code
                  </a>
                )}
              </div>
              <NavLink
                to={project.detailsPath}
                className="inline-block mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                View Details
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
