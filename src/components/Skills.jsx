import React from 'react';

const skillCategories = [
  {
    title: 'Languages & Databases',
    skills: ['Java 8+', 'SQL', 'MySQL', 'PostgreSQL'],
    theme: {
      header: 'text-violet-700 border-violet-200',
      card: 'bg-gradient-to-br from-violet-50/50 to-purple-50/50 border-violet-100 shadow-sm hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] group',
      tag: 'bg-white text-violet-700 border-violet-200 shadow-sm group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600'
    }
  },
  {
    title: 'Frameworks & APIs',
    skills: ['Spring Boot', 'Spring MVC', 'Hibernate', 'Microservices', 'RESTful APIs'],
    theme: {
      header: 'text-pink-700 border-pink-200',
      card: 'bg-gradient-to-br from-pink-50/50 to-rose-50/50 border-pink-100 shadow-sm hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)] group',
      tag: 'bg-white text-pink-700 border-pink-200 shadow-sm group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500'
    }
  },
  {
    title: 'Cloud & DevOps',
    skills: ['GCP', 'AWS', 'Docker', 'Tekton', 'OpenShift', 'CI/CD'],
    theme: {
      header: 'text-emerald-700 border-emerald-200',
      card: 'bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border-emerald-100 shadow-sm hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] group',
      tag: 'bg-white text-emerald-700 border-emerald-200 shadow-sm group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500'
    }
  },
  {
    title: 'Tools & Testing',
    skills: ['Git / GitHub', 'Postman', 'JUnit', 'SonarQube', 'Jasper Soft Studio'],
    theme: {
      header: 'text-amber-700 border-amber-200',
      card: 'bg-gradient-to-br from-amber-50/50 to-orange-50/50 border-amber-100 shadow-sm hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)] group',
      tag: 'bg-white text-amber-700 border-amber-200 shadow-sm group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500'
    }
  }
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight drop-shadow-sm">Technical Skills</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">The tools and technologies I use to build robust backends.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className={`rounded-3xl backdrop-blur-md border p-6 transition-all duration-300 hover:-translate-y-2 ${category.theme.card}`}>
              <h3 className={`font-bold mb-5 pb-3 border-b text-lg tracking-wide ${category.theme.header}`}>{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={`px-3 py-1.5 border rounded-lg text-sm font-bold transition-all duration-300 cursor-default ${category.theme.tag}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
