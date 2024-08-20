import React from 'react';
import TechSkills from './TechSkills';

// Import icons (you'll need to have these icons in your project)
import pythonIcon from './assets/Python.svg';
import sklearnIcon from './assets/sklearn.svg';
import tensorflowIcon from './assets/tensorflow.svg';
import pytorchIcon from './assets/pytorch.svg';
import huggingfaceIcon from './assets/huggingface.svg';
import langchainIcon from './assets/langchain.svg';
import pandasIcon from './assets/pandas.svg';
import matplotlibIcon from './assets/matplotlib.svg';
import numpyIcon from './assets/numpy.svg';
import htmlIcon from './assets/html.svg';
import cssIcon from './assets/css.svg';
import javascriptIcon from './assets/js.svg';
import djangoIcon from './assets/django.svg';
import reactIcon from './assets/react.svg';
import tailwindIcon from './assets/tailwindcss.svg';
import cIcon from './assets/c.svg';
import LinuxIcon from './assets/linux.svg';

const Skills = () => {
  const masteredTech = [
    { name: 'Python', icon: pythonIcon },
    { name: 'Scikit-learn', icon: sklearnIcon },
    { name: 'TensorFlow', icon: tensorflowIcon },
    { name: 'PyTorch', icon: pytorchIcon },
    { name: 'Hugging Face', icon: huggingfaceIcon },
    { name: 'LangChain', icon: langchainIcon },
    { name: 'Pandas', icon: pandasIcon },
    { name: 'Matplotlib', icon: matplotlibIcon },
    { name: 'NumPy', icon: numpyIcon },
    { name: 'Linux', icon: LinuxIcon },

  ];

  const familiarTech = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'Django', icon: djangoIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon },
    { name: 'C', icon: cIcon },
  ];

  return (
    <div className="App bg-gray-100 m-10 pb-10 dark:bg-gray-800 max-w-7xl mx-auto px-16 sm:px-6 lg:px-8">
      {/* Other components */}
      <TechSkills mastered={masteredTech} familiar={familiarTech} />
      {/* Other components */}
    </div>
  );
};

export default Skills;