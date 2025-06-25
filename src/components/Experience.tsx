import React, { useState } from 'react';
import { experiences } from '../data/experiences';
import { Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 to-slate-950">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-[#f6ab64]">Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Timeline navigation */}
            <div className="md:w-1/3">
              <div className="sticky top-24 space-y-2">
                {experiences.map((experience, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveExperience(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center ${
                      activeExperience === index 
                        ? 'bg-indigo-900/40 border-l-4 border-[#f6ab64]' 
                        : 'bg-gray-900/40 hover:bg-gray-700/40'
                    }`}
                  >
                    <div>
                      <p className={`font-medium ${activeExperience === index ? 'text-indigo-400' : 'text-gray-300'}`}>
                        {experience.company}
                      </p>
                      <p className="text-sm text-gray-500">{experience.period}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Experience details */}
            <div className="md:w-2/3 bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-[#f6ab64]">
                  {experiences[activeExperience].title}
                </h3>
                
                <div className="flex items-center text-gray-400 my-2">
                  <span className="font-medium">{experiences[activeExperience].company}</span>
                  <span className="mx-2">•</span>
                  <span>{experiences[activeExperience].location}</span>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{experiences[activeExperience].period}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {experiences[activeExperience].responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start">
                    <div className="min-w-4 h-4 mt-1.5 mr-3">
                      <div className="w-1.5 h-1.5 bg-[#f6ab64] rounded-full"></div>
                    </div>
                    <p className="text-gray-300">{responsibility}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies used:</h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeExperience].technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;