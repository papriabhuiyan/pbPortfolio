import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Footer from './components/Footer';
import LoadingScreen from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <LoadingScreen />;
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
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