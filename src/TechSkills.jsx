import React from 'react';
import TechIcon from './TechIcon';

const TechSkills = ({ mastered, familiar }) => {
  return (
    <div className=" mx-auto mt-10 pt-5 px-4 max-w-7xl sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 dark:text-gray-100">Technical Skills</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 px-10 dark:text-gray-200">Technologies I've Mastered</h3>
        <div className="flex flex-wrap justify-center">
          {mastered.map((tech, index) => (
            <TechIcon key={index} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4 px-10 dark:text-gray-200">Technologies I've Worked With</h3>
        <div className="flex flex-wrap justify-center">
          {familiar.map((tech, index) => (
            <TechIcon key={index} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSkills;