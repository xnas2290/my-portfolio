import React from 'react';
import ProjectList from './ProjectList';
import Africa from './assets/africa.jpg';
import NN from './assets/nn.png';
import Quiz from './assets/quiz.jpg';
import Fr from './assets/fr.png'
const Prj = () => {
  const projects = [
    {
        title: 'Neural Networks from Scratch',
        description: 'A project that demonstrates a deep understanding of neural networks by implementing them from scratch. This project covers backpropagation, gradient descent, custom activation functions and more.',
        image: NN,
        link:'https://github.com/xnas2290/Simple-Neural-Network'
      },
      {
        title: 'North African Dialects Classification',
        description: 'An NLP project focused on classifying different North African dialects. This project uses machine learning models to analyze and categorize text in various dialects, contributing to the broader field of dialectal Arabic processing.',
        image: Africa,
        link:'https://github.com/xnas2290/North_africa_dialects_classification'
      },
      {
        title: 'Time Series Forecasting of Airline Passengers',
        description: 'This time series forecasting notebook analyzes and predicts monthly international airline passengers from 1949 to 1960. It decomposes the time series, trains SARIMAX and Prophet models.',
        image: Fr,
        link:'https://github.com/xnas2290/Time-Series-Forecasting-of-Airline-Passengers'
      },
      {
        title: 'PDF2Quiz',
        description: 'A web application that generates quizzes from a PDF file provided by the user. Each quiz will have multiple-choice questions with four options, only one of which is correct.',
        image:Quiz,
        link:'https://github.com/xnas2290/'
      },
      
  ];

  return (
    <div className="Prj max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id='Prj'>
      <h1 className="text-3xl font-bold my-8 dark:text-gray-100" >My Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Prj;