import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <a href={project.link}>
    <div className="mb-8 w-full">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-400 dark:bg-gray-800 ">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="mb-2 font-bold text-gray-800 text-xl dark:text-gray-300">{project.title}</h3>
          <p className="text-sm leading-snug tracking-wide text-gray-600 dark:text-gray-400">{project.description}</p>
        </div>
      </div>
    </div>
    </a>
  );
};

export default ProjectCard;