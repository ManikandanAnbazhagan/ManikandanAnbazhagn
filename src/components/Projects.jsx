import React from 'react';

const projects = [
  {
    title: 'Ford PCF to GCP Cloud Migration',
    description: 'Migrated microservices from PCF to GCP to improve scalability, resilience, and cost efficiency. Refactored codebase for containerization using Docker and integrated with Tekton pipelines, ensuring zero downtime deployments and high system availability.',
    skills: ['GCP', 'Docker', 'Tekton', 'Microservices'],
    theme: {
      cardWrapper: 'bg-gradient-to-br from-violet-400 to-fuchsia-500 shadow-[0_8px_30px_rgba(139,92,246,0.15)] group-hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)]',
      blob: 'bg-violet-500',
      iconBg: 'bg-violet-50 text-violet-600 shadow-inner group-hover:bg-violet-600 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]',
      title: 'text-slate-900 group-hover:text-violet-700 transition-colors duration-300',
      text: 'text-slate-600',
      tag: 'bg-violet-50/80 text-violet-700 border border-violet-200 group-hover:bg-white group-hover:shadow-sm'
    }
  },
  {
    title: 'Enterprise Data & Reporting Platform',
    description: 'Developed backend modules using Spring Boot for comprehensive billing and accounting operations. Integrated robust APIs with MySQL to manage financial data securely and optimized SQL queries, improving overall report generation performance by 25%.',
    skills: ['Spring Boot', 'MySQL', 'JasperSoft'],
    theme: {
      cardWrapper: 'bg-gradient-to-br from-pink-400 to-rose-500 shadow-[0_8px_30px_rgba(236,72,153,0.15)] group-hover:shadow-[0_20px_50px_rgba(236,72,153,0.3)]',
      blob: 'bg-pink-500',
      iconBg: 'bg-pink-50 text-pink-600 shadow-inner group-hover:bg-pink-600 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]',
      title: 'text-slate-900 group-hover:text-pink-700 transition-colors duration-300',
      text: 'text-slate-600',
      tag: 'bg-pink-50/80 text-pink-700 border border-pink-200 group-hover:bg-white group-hover:shadow-sm'
    }
  }
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-slate-200/60 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight drop-shadow-sm">Project Highlights</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">Key initiatives I've architected and delivered.</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className={`rounded-[2rem] p-1 transition-all duration-500 hover:-translate-y-3 group ${project.theme.cardWrapper}`}>
              <div className="bg-white/95 backdrop-blur-xl h-full w-full rounded-[1.8rem] p-8 flex flex-col relative overflow-hidden">
                
                {/* Decorative blob */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-700 ${project.theme.blob}`}></div>

                <div className="flex items-start gap-5 mb-6 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${project.theme.iconBg}`}>
                    <i className="ph-bold ph-strategy"></i>
                  </div>
                  <div className="pt-2">
                    <h3 className={`text-xl font-black mb-1 tracking-wide leading-tight ${project.theme.title}`}>{project.title}</h3>
                  </div>
                </div>
                
                <div className="space-y-4 mt-2 flex-grow relative z-10">
                  <p className={`text-sm leading-relaxed whitespace-pre-line font-medium ${project.theme.text}`}>
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-100 relative z-10">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className={`px-4 py-1.5 rounded-xl text-xs font-bold tracking-wider ${project.theme.tag} transition-all duration-300 group-hover:-translate-y-1`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
