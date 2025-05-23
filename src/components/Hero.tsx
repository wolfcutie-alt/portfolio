import React from 'react';
import { Github as GitHub, Linkedin, Mail, Download } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section 
      id="hero" 
      className={`min-h-screen flex items-center justify-center relative ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-0 right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-blue-500 text-lg mb-2 font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Nathan Doan
            </h1>
            <div className="text-xl md:text-2xl mb-6 h-8">
              <TypewriterEffect 
                texts={["IT Student", "Frontend Developer", "UI/UX Enthusiast", "Problem Solver"]} 
                delay={150}
                loop={true}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Passionate about creating beautiful, functional and user-centered digital experiences. 
              Currently pursuing my degree in Computer Science.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a 
                href="/resume.pdf" 
                className={`px-6 py-3 rounded-lg border flex items-center gap-2 transition-colors duration-300 ${
                  darkMode 
                    ? 'border-gray-600 hover:bg-gray-800' 
                    : 'border-gray-300 hover:bg-gray-100'
                }`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download size={18} />
                Resume
              </a>
            </div>

            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a 
                href="https://github.com/wolfcutie-alt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-2 rounded-full transition-colors duration-300 ${
                  darkMode 
                    ? 'hover:bg-gray-800' 
                    : 'hover:bg-gray-200'
                }`}
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/trung-doan-95955a210/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-2 rounded-full transition-colors duration-300 ${
                  darkMode 
                    ? 'hover:bg-gray-800' 
                    : 'hover:bg-gray-200'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:nathandoan24@gmail.com" 
                className={`p-2 rounded-full transition-colors duration-300 ${
                  darkMode 
                    ? 'hover:bg-gray-800' 
                    : 'hover:bg-gray-200'
                }`}
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
              darkMode ? 'border-gray-700' : 'border-white'
            }`}>
              <img 
                src="/me.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;