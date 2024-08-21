import React from 'react';
import XIcon from './assets/twitter.svg';
import GithubIcon from './assets/github.svg';
import LinkedInIcon from './assets/linkedin.svg';
import Me from './assets/cleanedphoto.jpg';
const Hero = () => {
  return (
    <div className="my-8 md:h-96 flex flex-col md:flex-row md: gap-10 items-center justify-around p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 border-solid border-2 border-gray-400  max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Left Box */}
      <div className="md:w-1/2 w-full flex flex-col items-center">
        <img
          src= {Me} 
          alt="Profile"
          className="rounded-full w-72 h-72 mb-4"
        />


      </div>
      {/* Right Box */}
      <div className="md:w-96 mb-8 md:mb-0 text-center w-96 ">
        <h1 className="text-xl font-bold text-gray-700 dark:text-gray-400">Hello. I’m 
            <div className='text-4xl text-gray-900 dark:text-gray-100'>Anas Haddaoui</div>
            <div className='text-3xl text-gray-700 dark:text-gray-500'>AI Engineer</div>
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 ">
        <div className="flex space-x-4 mb-4 justify-center">
          <a href="https://x.com/Xnas229/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
            <img src={XIcon} alt='' className="w-8 h-12 mb-2" />
          </a>
          <a href="linkedin.com/in/anas-haddaoui-a16962276" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-700">
          <img src={LinkedInIcon} alt='' className="w-8 h-12 mb-2" />
          </a>
          <a href="https://github.com/xnas2290" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900">
          <img src={GithubIcon} alt='' className="w-8 h-12 mb-2" />
          </a>
        </div>
        <a
          href="anas_haddaoui_cv.pdf" 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          download
        >
          Download my CV
        </a>


        </p>
      </div>







     
    </div>
  );
};

export default Hero;
