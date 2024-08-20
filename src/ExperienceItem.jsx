import React from 'react';

const ExperienceItem = ({ experience }) => {
  return (
    <div className="mb-8 flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:w-1/3 pr-4">
        <span className="font-bold text-indigo-600 dark:text-indigo-400 ">{experience.date}</span>
        <span className="text-sm dark:text-gray-300 text-gray-500">{experience.company}</span>
      </div>
      <div className="md:w-2/3">
        <h3 className="text-xl font-bold mb-2 dark:text-gray-300">{experience.position}</h3>
        <p className="text-gray-700 mb-4 dark:text-gray-400">{experience.description}</p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-500">
          {experience.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;