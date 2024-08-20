import React from 'react';
import ExperienceItem from './ExperienceItem';

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-20 dark:text-gray-100" id='Exp'>Professional Experience</h2>
      <div className="relative">
        <div className="absolute left-0 md:left-1/3 border-r-2 border-indigo-400 h-full"></div>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;