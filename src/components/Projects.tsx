import React, { useState } from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-[#f6ab64]">Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
          A selection of my recent work and personal projects. Each project is briefly described with links to code repositories and live demos.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-900 rounded-lg overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70 transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-90' : 'opacity-70'
                  }`}
                ></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-[#f6ab64]">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <GitHub size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-slate-700 text-gray-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
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