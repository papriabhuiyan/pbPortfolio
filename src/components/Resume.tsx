import React from 'react';
import { FileText, Download, GraduationCap } from 'lucide-react';
import { education } from '../data/education';
import PDF from "../components/1PageResume_Modified.pdf";

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-teal-600/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-amber-600/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-teal-400 to-amber-400 text-transparent bg-clip-text">
            Resume & Education
          </h2>
          
          {/* Resume Download Section */}
          <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-12">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-teal-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">My Resume</h3>
                  <p className="text-sm text-gray-400">Last updated: June 2025</p>
                </div>
              </div>
              <a 
                href="PDF"
                target = "_blank"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-amber-600 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
              >
                <Download size={18} />
                Download
              </a>
            </div>
          </div>
          
          {/* Education Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="text-teal-400" />
              <span>Education</span>
            </h3>
            
            <div className="grid gap-4">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-teal-400">{edu.degree}</h4>
                      <p className="text-sm text-gray-300">{edu.institution} • {edu.location}</p>
                      {/* <p className="text-sm text-gray-400 mt-1">{edu.description}</p> */}
                    </div>
                    <span className="text-sm text-amber-400 whitespace-nowrap">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;