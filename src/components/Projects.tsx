import React, { useState } from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
}

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Beauty Salon Website",
      description: "A responsive website for a beauty salon with a booking system, services, and a blog.",
      image: "https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "TailwindCSS"],
      githubLink: "https://github.com/wolfcutie-alt/kc-nail",
      demoLink: "https://kc-nail.vercel.app/"
    },
    {
      id: 2,
      title: "Salon Booking App",
      description: "A booking application for a beauty salon with a booking system, services, and a blog.",
      image: "https://images.pexels.com/photos/1654834/pexels-photo-1654834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "TailwindCSS"],
      githubLink: "https://github.com/wolfcutie-alt/kcbooking",
      demoLink: "https://kcbooking.vercel.app/"
    },
    {
      id: 3,
      title: "Cinema Booking App",
      description: "A booking application for a cinema with a booking system, movies, and a blog.",
      image: "https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "TailwindCSS"],
      githubLink: "https://github.com/wolfcutie-alt/movie-theater",
      demoLink: "https://movie-theater-three.vercel.app/"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website designed for creative professionals to showcase their work and skills to potential clients.",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/wolfcutie-alt/portfolio",
      demoLink: "https://nathandoan.vercel.app/"
    },
    {
      id: 5,
      title: "Sushi Restaurant Website",
      description: "A website for a sushi restaurant with a menu, booking system, and a blog.",
      image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "TailwindCSS"],
      githubLink: "https://github.com/wolfcutie-alt/Sushi_web",
      demoLink: "https://wolfcutie-alt.github.io/Sushi_web/"
    }
  ];

  const [filter, setFilter] = useState<string>("all");
  const tags = ["all", ...Array.from(new Set(projects.flatMap(project => project.tags)))];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section 
      id="projects" 
      className={`py-20 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one is a learning experience 
            that has helped me grow as a developer.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm capitalize transition-colors duration-300 ${
                filter === tag
                  ? 'bg-blue-500 text-white'
                  : darkMode
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`text-xs px-2 py-1 rounded ${
                        darkMode ? 'bg-gray-600' : 'bg-gray-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-2 rounded ${
                      darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                    } transition-colors duration-300`}
                    aria-label="GitHub Repository"
                  >
                    <GitHub size={20} />
                  </a>
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-2 rounded ${
                      darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                    } transition-colors duration-300`}
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;