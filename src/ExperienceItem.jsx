import React from 'react';

const ExperienceItem = ({ experience }) => {
  return (
    <div className="mb-8 flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:w-1/3 pr-4">
        <span className="font-bold text-indigo-600">{experience.date}</span>
        <span className="text-sm text-gray-500">{experience.company}</span>
      </div>
      <div className="md:w-2/3">
        <h3 className="text-xl font-bold mb-2">{experience.position}</h3>
        <p className="text-gray-700 mb-4">{experience.description}</p>
        <ul className="list-disc list-inside text-gray-600">
          {experience.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;