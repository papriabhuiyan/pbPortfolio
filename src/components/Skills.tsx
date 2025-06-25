import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/skills';


const Bar = ({ level }: { level: number }) => {
  const [visible, setVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-2 bg-slate-800 rounded" ref={barRef}>
      <div
        className="h-2 rounded bg-gradient-to-r from-indigo-400 to-[#f6ab64] transition-all duration-1000"
        style={{ width: visible ? `${level}%` : '0%' }}
      ></div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="text-white space-y-10 px-6 md:px-16 ">
      <section id="skills">
      <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-[#f6ab64]">Technical Proficiency</h2>
        <h3 className="text-xl font-semibold mb-2 text-center text-indigo-500">Programming Languages</h3>
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
          {skills.programmingLanguages.map((lang) => (
            <span
              key={lang}
              className="px-6 py-3 bg-slate-900/50 backdrop-blur-sm rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#f6ab6494]"
            >
              {lang}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2 text-center text-indigo-500">Frontend</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.frontend.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1 text-sm">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Bar level={skill.level} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2 text-center text-indigo-500">Backend</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.backend.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1 text-sm">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Bar level={skill.level} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2 text-center text-indigo-500">Other Tools & Technologies</h3>
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
          {skills.other.map((tool) => (
            <span
              key={tool}
              className="px-6 py-3 bg-slate-900/50 backdrop-blur-sm rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#f6ab6494]"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;