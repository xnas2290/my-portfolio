import React from 'react';
import Timeline from './Timeline';

const Time = () => {
  const timelineItems = [
    {
        date: "2022-2024",
        title: "Master's Degree in AI",
        description: "Completed a Master's in AI at Ibn Tofail University, focusing on deep learning and NLP. Key projects included neural networks and dialect classification."
      },
      {
        date: "2018-2022",
        title: "Bachelor's Degree in Mathematics & Computer Science",
        description: "Earned a Bachelor's in Mathematics & CS from Ibn Tofail University, with strong foundations in algorithms, data structures, and programming."
      },
      {
        date: "2017",
        title: "High School Diploma in Science",
        description: "Graduated with a focus on science and mathematics, leading to a future in AI and computer science studies."
      }
      
  ];

  return (
    <div className="Edc max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id='Edc'>
      <h1 className="text-3xl font-bold my-8 dark:text-gray-100">Education</h1>
      <Timeline items={timelineItems} />
    </div>
  );
};

export default Time;