import React from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Get In Touch</h3>
              <p className="text-gray-400 mb-6">
                Feel free to reach out if you're looking for a developer, have a question, 
                or just want to connect.
              </p>
              
              <a 
                href="mailto:john.doe@example.com"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-[#f6ab64] hover:bg-indigo-700 rounded-lg transition-colors duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                papriabhuiyan@gmail.com
              </a>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Social</h3>
              <p className="text-gray-400 mb-6">
                Connect with me on social media or check out my code repositories.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/papriabhuiyan" 
                  target="_blank"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <GitHub className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/papria-bhuiyan/" 
                  target="_blank"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:papriabhuiyan@gmail.com" 
                  target="_blank"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p className="mt-2">
              Built by Papria Bhuiyan with React and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;