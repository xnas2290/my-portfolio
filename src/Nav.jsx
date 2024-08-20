import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('En');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'En' ? 'Fr' : 'En');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="dark:bg-gray-800 bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <button onClick={toggleLanguage} className="px-3 py-2 text-gray-700 dark:text-gray-300 w-10 p-5">
              {language}
            </button>
            <button onClick={toggleTheme} className="px-3 py-2 text-gray-700 dark:text-gray-300">
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>
          <div className="hidden md:flex space-x-4 items-center font-semibold">
            <a href="#about" className="px-3 py-2 text-gray-700 dark:text-gray-300 ">About</a>
            <a href="#Edc" className="px-3 py-2 text-gray-700 dark:text-gray-300">Education</a>
            <a href="#Prj" className="px-3 py-2 text-gray-700 dark:text-gray-300">Projects</a>
            <a href="#Exp" className="px-3 py-2 text-gray-700 dark:text-gray-300">Experiences</a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="px-3 py-2 text-gray-700 dark:text-gray-300"
            >
              🍔
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 relative">
          <a href="#about" className="block px-3 py-2 text-gray-700 dark:text-gray-300">About</a>
          <a href="#projects" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Projects</a>
          <a href="#experiences" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Experiences</a>
          <a href="#contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
