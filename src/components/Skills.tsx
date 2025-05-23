import React from 'react';

interface SkillProps {
  name: string;
  percentage: number;
  darkMode: boolean;
}

const Skill: React.FC<SkillProps> = ({ name, percentage, darkMode }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div 
          className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  darkMode: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon, darkMode }) => {
  return (
    <div className={`p-6 rounded-lg ${
      darkMode ? 'bg-gray-700' : 'bg-white shadow-md'
    }`}>
      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
          darkMode ? 'bg-gray-600' : 'bg-blue-100'
        }`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  return (
    <section 
      id="skills" 
      className={`py-20 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the technologies and tools I've been working with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <Skill name="HTML/CSS" percentage={90} darkMode={darkMode} />
            <Skill name="JavaScript" percentage={85} darkMode={darkMode} />
            <Skill name="React" percentage={80} darkMode={darkMode} />
            <Skill name="TypeScript" percentage={75} darkMode={darkMode} />
            <Skill name="Node.js" percentage={70} darkMode={darkMode} />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Other Skills</h3>
            <Skill name="UI/UX Design" percentage={75} darkMode={darkMode} />
            <Skill name="Git/Version Control" percentage={85} darkMode={darkMode} />
            <Skill name="Responsive Design" percentage={90} darkMode={darkMode} />
            <Skill name="Database Management" percentage={65} darkMode={darkMode} />
            <Skill name="Problem Solving" percentage={80} darkMode={darkMode} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCard 
            title="Frontend" 
            skills={["HTML5", "CSS3/SASS", "JavaScript/TypeScript", "React", "TailwindCSS"]}
            icon={<svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            darkMode={darkMode}
          />
          <SkillCard 
            title="Backend" 
            skills={["Node.js", "Express", "MongoDB", "RESTful APIs", "Firebase"]}
            icon={<svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>}
            darkMode={darkMode}
          />
          <SkillCard 
            title="Tools & Others" 
            skills={["Git", "VS Code", "Figma", "Responsive Design", "WordPress"]}
            icon={<svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>}
            darkMode={darkMode}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;