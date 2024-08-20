import React from 'react';
import ExperienceTimeline from './ExperienceTimeline';

const Ext = () => {
  const experiences = [
    {
        date: "apr 2024 - Jul 2024",
        company: "Task3 (Online)",
        position: "Cybersecurity and AI Intern",
        description: "Developed a web application that leveraged LLMs to process SSP documents and compare implementation statements with NIST-800 standards.",
        achievements: [
          "Created a tool for analyzing SSP documents using large language models (LLMs), enhancing accuracy in security compliance",
          "Automated the comparison of implementation statements against NIST-800 standards using LLM-based analysis",
          "Improved the efficiency of security compliance checks by integrating AI-driven text processing in the web app"
        ]
      }
      
    ,
    {
        date: "apr 2024 - Jul 2024",
        company: "Atlantic Smart Technology",
        position: "AI Engineer Intern",
        description: "Collaborated with a team to develop a platform for the Urban Agency of Kenitra City, enabling user interactions and chatbot responses.",
        achievements: [
          "Developed a chatbot capable of responding to user queries based on a textual database",
          "Successfully integrated the chatbot into the platform, enhancing user interaction and support",
          "Collaborated with two web developers to create a robust communication platform for the city"
        ]
      },
    {
        date: "June 2023 - Aug 2023",
        company: "Digiwage",
        position: "AI Engineer Intern",
        description: "Developed a traffic management system capable of counting vehicles and estimating their speed.",
        achievements: [
          "Designed and implemented a system to track vehicle counts and speed in real-time",
          "Integrated the system with city traffic lights to optimize traffic flow",
          "Improved traffic efficiency in a test region by leveraging data-driven synchronization of traffic signals"
        ]
      }
    // Add more experiences as needed
  ];

  return (
    <div className="Ext bg-gray-100 min-h-screen">
      <ExperienceTimeline experiences={experiences} />
    </div>
  );
};

export default Ext;