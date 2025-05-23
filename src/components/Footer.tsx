import React from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`py-8 ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">
              <span>Dev</span>
              <span className="text-blue-500">Portfolio</span>
            </h2>
            <p className={`text-sm ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Crafting digital experiences with code
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/wolfcutie-alt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
              }`}
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/trung-doan-95955a210/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:nathandoan24@gmail.com" 
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
              }`}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop} 
            className={`p-2 rounded-full transition-colors duration-300 ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className={`text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © {new Date().getFullYear()} Nathan Doan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;