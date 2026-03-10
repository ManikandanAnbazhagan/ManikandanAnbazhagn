import React from 'react';

const educationData = [
  {
    degree: 'Master of Computer Applications (MCA)',
    college: 'Govt. Arts & Science College',
    location: 'Kumbakonam',
    duration: '2019 - 2022',
    score: '82%',
    theme: {
      card: 'bg-white/80 backdrop-blur-md border-t-4 border-t-indigo-500 shadow-sm hover:shadow-[0_15px_40px_rgba(99,102,241,0.15)] group hover:-translate-y-2 border-x border-b border-slate-100',
      iconBg: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]',
      text: 'text-indigo-600'
    }
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    college: 'Sri Sankara Arts & Science College',
    location: 'Kumbakonam',
    duration: '2016 - 2019',
    score: '72%',
    theme: {
      card: 'bg-white/80 backdrop-blur-md border-t-4 border-t-cyan-500 shadow-sm hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)] group hover:-translate-y-2 border-x border-b border-slate-100',
      iconBg: 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]',
      text: 'text-cyan-600'
    }
  }
];

function Education() {
  return (
    <section id="education" className="py-24 px-6 border-t border-slate-200/60 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight drop-shadow-sm">Academic Background</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">My educational qualifications and achievements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div key={index} className={`rounded-3xl p-8 transition-all duration-300 flex flex-col h-full ${edu.theme.card}`}>
              <div className="flex items-start gap-5 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 transition-all duration-300 ${edu.theme.iconBg}`}>
                  <i className="ph-fill ph-graduation-cap"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-wide">{edu.degree}</h3>
                  <h4 className={`text-lg font-bold mb-2 ${edu.theme.text}`}>{edu.college}</h4>
                </div>
              </div>
              
              <div className="space-y-4 mt-2">
                <div className="flex items-center gap-3 text-slate-600 font-medium">
                  <i className="ph-fill ph-map-pin text-xl text-slate-400"></i>
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 font-medium">
                  <i className="ph-fill ph-calendar-blank text-xl text-slate-400"></i>
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 font-medium pt-4 border-t border-slate-100">
                  <i className="ph-fill ph-certificate text-xl text-slate-400"></i>
                  <span className="font-bold text-slate-800 tracking-wide">Score: <span className={edu.theme.text}>{edu.score}</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
