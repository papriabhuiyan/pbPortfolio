import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0c120c] text-gray-100">
      <Header />
      <main>
        <Hero />
        <Resume />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;