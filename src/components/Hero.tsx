import React from 'react';
import { Github as GitHub, Linkedin, Mail, FileText } from 'lucide-react';
import avatar from '../assets/IMG_7505.jpg';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-indigo-700 to-[#0c120c] rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-indigo-950 to-[#0c120c] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-[#f6ab64] p-1">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-[#f6ab64]"><img src={avatar} className='w-full h-full object-cover rounded-full'/></span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-[#f6ab64] text-transparent bg-clip-text animate-gradient">
            Papria Bhuiyan
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-medium mb-8 text-gray-300">
            Software Engineer
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
          I enjoy building web applications that are reliable, accessible, and easy to use. I work across the full stack, from creating simple, responsive interfaces to developing backend systems that can handle large amounts of data efficiently. I’m especially interested in making sense of complex datasets and building tools that help people use information more effectively. I focus on writing clean, maintainable code and learning new technologies that help me build better solutions over time.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href="https://github.com/papriabhuiyan" 
              target="_blank"
              className="p-3 bg-[#0c120c] backdrop-blur-sm rounded-xl hover:bg-[#0c120c] transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[#f6ab6494]"
            >
              <GitHub className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/papria-bhuiyan/"
              target="_blank"
              className="p-3 bg-[#0c120c] backdrop-blur-sm rounded-xl hover:bg-[#0c120c] transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[#f6ab6494]"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:papriabhuiyan@gmail.com" 
              target="_blank"
              className="p-3 bg-[#0c120c] backdrop-blur-sm rounded-xl hover:bg-[#0c120c] transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[#f6ab6494]"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-[#f6ab64] rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#f6ab6494] hover:scale-105"
            >
              Contact Me
            </button>
            
            {/* <a 
              href="/resume.pdf" 
              download
              className="px-8 py-4 bg-slate-900/50 backdrop-blur-sm rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-amber-500/20 hover:scale-105"
            >
              <FileText className="w-5 h-5" />
              Download CV
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;