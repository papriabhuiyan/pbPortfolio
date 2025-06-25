import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/skills';

// const Skills: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState('frontend');
//   const categories = [
//     { id: 'frontend', name: 'Frontend', icon: '🎨' },
//     { id: 'backend', name: 'Backend', icon: '⚙️' },
//     { id: 'other', name: 'Other', icon: '🛠' }
//   ];

//   return (
//     <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Background gradients */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-slate-950 to-transparent rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-slate-950 to-transparent rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto relative z-10">
//         <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-500 to-[#f6ab64] text-transparent bg-clip-text">
//           Technical Proficiency
//         </h2>
//         <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
//           A showcase of my technical expertise and professional competencies across different domains.
//         </p>

//         {/* Category Selection */}
//         <div className="flex justify-center gap-4 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id)}
//               className={`px-6 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center gap-2 ${
//                 activeCategory === category.id
//                   ? 'bg-gradient-to-r from-indigo-500 to-[#f6ab64] shadow-lg shadow-indigo-200/10'
//                   : 'bg-slate-900/30 hover:bg-slate-800/30'
//               }`}
//             >
//               <span className="text-xl">{category.icon}</span>
//               <span className={`font-medium ${
//                 activeCategory === category.id ? 'text-white' : 'text-gray-400'
//               }`}>{category.name}</span>
//             </button>
//           ))}
//         </div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {skills
//             .filter(skill => skill.category === activeCategory)
//             .map((skill, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#f6ab6494]"
//               >
//                 <div className="flex justify-between items-center mb-4">
//                   <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
//                   <span className="text-sm text-indigo-500">{skill.level}%</span>
//                 </div>

//                 {/* Progress bar background */}
//                 <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
//                   {/* Progress bar fill */}
//                   <div
//                     className="h-full bg-gradient-to-r from-indigo-500 to-[#f6ab64] transform origin-left transition-transform duration-1000 ease-out"
//                     style={{ 
//                       width: `${skill.level}%`,
//                       transform: `scaleX(${1})` 
//                     }}
//                   />
//                 </div>

//                 {/* Hover effect */}
//                 <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-200/20 transition-all duration-300" />
//               </div>
//             ))}
//         </div>

//         {/* Languages Section */}
//         <div className="mt-20">
//           <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-indigo-500 to-[#f6ab64] text-transparent bg-clip-text">
//             Programming Languages
//           </h3>
//           <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
//             {skills
//               .filter(skill => skill.category === 'language')
//               .map((skill, index) => (
//                 <div
//                   key={index}
//                   className="px-6 py-3 bg-slate-900/50 backdrop-blur-sm rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-200/10"
//                 >
//                   <span className="text-gray-200">{skill.name}</span>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

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
        <h3 className="text-xl font-semibold mb-2 text-center text-indigo-500"> Frontend</h3>
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