import React from 'react';

const educationData = [
  {
    degree: 'Master of Computer Applications (MCA)',
    college: 'Govt. Arts & Science College',
    location: 'Kumbakonam',
    duration: '2019 - 2022',
    score: '82%',
    theme: {
      card: 'bg-white border-t-4 border-t-black shadow-sm group hover:-translate-y-2 border-x border-b border-gray-200 hover:shadow-md',
      iconBg: 'bg-gray-100 text-black group-hover:bg-black group-hover:text-white',
      text: 'text-black'
    }
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    college: 'Sri Sankara Arts & Science College',
    location: 'Kumbakonam',
    duration: '2016 - 2019',
    score: '72%',
    theme: {
      card: 'bg-white border-t-4 border-t-black shadow-sm group hover:-translate-y-2 border-x border-b border-gray-200 hover:shadow-md',
      iconBg: 'bg-gray-100 text-black group-hover:bg-black group-hover:text-white',
      text: 'text-black'
    }
  }
];

function Education() {
  return (
    <section id="education" className="py-24 px-6 border-t border-slate-200/60 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-4 tracking-tight drop-shadow-sm">Academic Background</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">My educational qualifications and achievements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 150} className={`rounded-3xl p-8 transition-all duration-300 flex flex-col h-full active:scale-[0.98] ${edu.theme.card}`}>
              <div className="flex items-start gap-5 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 transition-all duration-300 ${edu.theme.iconBg}`}>
                  <i className="pi pi-book"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-1 tracking-wide">{edu.degree}</h3>
                  <h4 className={`text-lg font-bold mb-2 ${edu.theme.text}`}>{edu.college}</h4>
                </div>
              </div>
              
              <div className="space-y-4 mt-2">
                <div className="flex items-center gap-3 text-gray-600 font-medium">
                  <i className="pi pi-map-marker text-xl text-black"></i>
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 font-medium">
                  <i className="pi pi-calendar text-xl text-black"></i>
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 font-medium pt-4 border-t border-gray-100">
                  <i className="pi pi-verified text-xl text-black"></i>
                  <span className="font-bold text-black tracking-wide">Score: <span className={edu.theme.text}>{edu.score}</span></span>
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
