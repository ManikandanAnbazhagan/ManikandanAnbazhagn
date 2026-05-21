import React from 'react';

const skillCategories = [
  {
    title: 'Languages & Databases',
    icon: 'pi pi-database',
    skills: ['Java 8+', 'SQL', 'MySQL', 'PostgreSQL'],
    theme: {
      header: 'text-black border-gray-200',
      card: 'bg-white border-gray-200 shadow-sm hover:shadow-md hover:border-black group',
      tag: 'bg-gray-100 text-black border-gray-200 shadow-sm group-hover:bg-black group-hover:text-white group-hover:border-black'
    }
  },
  {
    title: 'Frameworks & APIs',
    icon: 'pi pi-server',
    skills: ['Spring Boot', 'Spring MVC', 'Hibernate', 'Microservices', 'RESTful APIs', 'Angular'],
    theme: {
      header: 'text-black border-gray-200',
      card: 'bg-white border-gray-200 shadow-sm hover:shadow-md hover:border-black group',
      tag: 'bg-gray-100 text-black border-gray-200 shadow-sm group-hover:bg-black group-hover:text-white group-hover:border-black'
    }
  },
  {
    title: 'Cloud & DevOps',
    icon: 'pi pi-cloud',
    skills: ['GCP', 'AWS', 'Tekton', 'OpenShift', 'CI/CD'],
    theme: {
      header: 'text-black border-gray-200',
      card: 'bg-white border-gray-200 shadow-sm hover:shadow-md hover:border-black group',
      tag: 'bg-gray-100 text-black border-gray-200 shadow-sm group-hover:bg-black group-hover:text-white group-hover:border-black'
    }
  },
  {
    title: 'Tools & Testing',
    icon: 'pi pi-wrench',
    skills: ['Git / GitHub', 'Postman', 'JUnit', 'SonarQube', 'Jasper Soft Studio'],
    theme: {
      header: 'text-black border-gray-200',
      card: 'bg-white border-gray-200 shadow-sm hover:shadow-md hover:border-black group',
      tag: 'bg-gray-100 text-black border-gray-200 shadow-sm group-hover:bg-black group-hover:text-white group-hover:border-black'
    }
  }
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-4 tracking-tight drop-shadow-sm">Technical Skills</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">The tools and technologies I use to build robust backends.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className={`rounded-3xl backdrop-blur-md border p-6 transition-all duration-300 hover:-translate-y-2 active:scale-95 ${category.theme.card}`}>
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-100">
                <i className={`${category.icon} text-xl text-black`}></i>
                <h3 className={`font-bold text-lg tracking-wide ${category.theme.header}`}>{category.title}</h3>
              </div>
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
