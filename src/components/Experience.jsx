import React from 'react';

const experiences = [
  {
    title: 'Software Engineer (Ford Project)',
    company: 'Tech Mahindra',
    date: 'Feb 2024 – Feb 2025',
    location: '',
    details: [
      "Worked on Ford Motor Company's backend modernization project by migrating legacy applications from PCF to Google Cloud Platform (GCP).",
      "Developed and enhanced Spring Boot microservices for secure data exchange between modules.",
      "Automated CI/CD pipelines using Tekton and managed deployments in OpenShift.",
      "Optimized PostgreSQL database queries, improving performance by 30%.",
      "Created API test suites in Postman and integrated automated testing with Jenkins."
    ],
    skills: ['Spring Boot', 'GCP', 'Tekton', 'OpenShift', 'PostgreSQL']
  },
  {
    title: 'Backend Developer',
    company: 'Annaa Silicon Technology Pvt Ltd',
    date: 'Mar 2022 – Nov 2023',
    location: 'Kumbakonam',
    details: [
      "Built and deployed backend services using Java, Spring Boot, and Hibernate.",
      "Designed and implemented RESTful APIs for billing, accounting, and reporting modules.",
      "Improved API response times by 40% through optimized data access logic.",
      "Integrated JasperSoft Studio for generating real-time reports and dashboards.",
      "Collaborated with front-end teams and DevOps for continuous delivery in AWS environment."
    ],
    skills: ['Java', 'REST APIs', 'Hibernate', 'AWS', 'MySQL']
  },
  {
    title: 'Software Trainee',
    company: 'We Fix Software Solution',
    date: 'Sep 2021 – Mar 2022',
    location: 'Kumbakonam',
    details: [
      "Developed and maintained web applications using Java, Spring Boot, and Hibernate.",
      "Assisted in API testing and bug resolution to support client deliverables."
    ],
    skills: ['Java', 'Spring Boot', 'Bug Resolution']
  }
];

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-slate-200/60 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight drop-shadow-sm">Professional Experience</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">My career journey and professional contributions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-md rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-violet-600 transition-colors tracking-wide">{exp.title}</h3>
                <h4 className="text-lg font-bold text-violet-500 mb-3">{exp.company}</h4>
                <div className="flex flex-col gap-1 text-sm text-slate-500 mb-4 font-medium">
                  <span className="flex items-center gap-2"><i className="ph ph-calendar-blank text-violet-400"></i> {exp.date}</span>
                  {exp.location && <span className="flex items-center gap-2"><i className="ph ph-map-pin text-violet-400"></i> {exp.location}</span>}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow text-slate-600 font-medium">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-violet-500 mr-2 mt-1 min-w-[16px] text-lg"><i className="ph-fill ph-check-circle"></i></span>
                    <span className="text-sm leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2 mt-auto">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="bg-violet-50 text-violet-700 border border-violet-100 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider">
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

export default Experience;
