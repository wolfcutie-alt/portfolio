import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? `bg-white shadow-md ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}` 
          : `${darkMode ? 'bg-transparent text-white' : 'bg-transparent text-gray-900'}`
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <a href="#hero" className="flex items-center">
            <span>Dev</span>
            <span className="text-blue-500">Portfolio</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-blue-500 transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors duration-300">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors duration-300">Contact</a>
          <button 
            onClick={toggleDarkMode} 
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode} 
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={toggleMenu} 
            className="text-gray-800 dark:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#about" 
            className="py-2 hover:text-blue-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="py-2 hover:text-blue-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="py-2 hover:text-blue-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="py-2 hover:text-blue-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;