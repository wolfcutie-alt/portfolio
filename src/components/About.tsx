import React from 'react';
import { Award, BookOpen, Briefcase } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className={`py-20 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <p className="text-lg mb-6 leading-relaxed">
              I'm a Computer Science student with a passion for web development and 
              creating intuitive user interfaces. My journey in tech started when I 
              built my first website at the age of 16, and I've been hooked ever since.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Currently, I'm focused on front-end development, learning modern 
              frameworks like React, and expanding my knowledge in UI/UX design principles. 
              I believe in clean code, responsive design, and creating accessible web experiences.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or enjoying outdoor activities to maintain a healthy work-life balance.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className={`rounded-lg p-6 ${
              darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h3 className="text-2xl font-bold mb-6">Education & Experience</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    darkMode ? 'bg-gray-600' : 'bg-gray-200'
                  }`}>
                    <BookOpen className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">B.Sc. Computer Science</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2023 - Present</p>
                    <p className="mt-2">Whitecliffe College, GPA: 3.8/4.0</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    darkMode ? 'bg-gray-600' : 'bg-gray-200'
                  }`}>
                    <Briefcase className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Web Development Intern</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Summer 2023</p>
                    <p className="mt-2">Megabliss Ltd., 3 months</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    darkMode ? 'bg-gray-600' : 'bg-gray-200'
                  }`}>
                    <Award className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Full Stack Development Certification</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2023</p>
                    <p className="mt-2">Codecademy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;