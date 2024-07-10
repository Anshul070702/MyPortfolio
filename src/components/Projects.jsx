import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { projectList } from "../constants/Projects.js";

function Projects() {
  return (
    <>
      <div
        name="Projects"
        className="bg-[#FEFBF6] bg-gradient-to-br from-gray-100 to-gray-200 h-auto py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-12">Projects</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projectList.map((project) => (
              <div
                key={project.id}
                className="relative group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">
                    {project.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                </div>
                <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="flex justify-between w-full p-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-3 rounded-full hover:from-purple-600 hover:to-blue-600 transition duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <IoLogoGithub className="mr-2" />
                      GitHub
                    </a>
                    {
                      <a
                        href={project.deployedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-gradient-to-r from-green-400 to-blue-400 text-white px-5 py-3 rounded-full hover:from-green-500 hover:to-blue-500 transition duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <FiExternalLink className="mr-2" />
                        Demo
                      </a>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Projects;
