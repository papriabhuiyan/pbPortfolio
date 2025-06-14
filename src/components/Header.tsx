import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-indigo-400">P</span>B
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('resume')}
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              Resume
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              Skills
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('resume')}
              className="block px-3 py-2 w-full text-left rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Resume
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block px-3 py-2 w-full text-left rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="block px-3 py-2 w-full text-left rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block px-3 py-2 w-full text-left rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Skills
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;