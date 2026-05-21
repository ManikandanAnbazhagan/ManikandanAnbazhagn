import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-slate-200/60 relative">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight drop-shadow-sm">Let's Connect</h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-700 mb-16 leading-relaxed font-medium max-w-2xl mx-auto">
          I'm actively looking for new Java Full Stack Developer opportunities. Feel free to reach out via email or connect with me on my professional networks.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Email */}
          <a href="mailto:manikandanav52@gmail.com" data-aos="zoom-in" data-aos-delay="200" className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md hover:border-black transition-all duration-300 group flex flex-col items-center gap-4 hover:-translate-y-2 active:scale-95">
            <div className="w-16 h-16 bg-gray-100 text-black rounded-2xl flex items-center justify-center text-3xl group-hover:bg-black group-hover:text-white transition-all duration-300">
              <i className="pi pi-envelope text-3xl"></i>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email</h4>
              <span className="text-base font-bold text-black">Message Me</span>
            </div>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/manikandan-anbazhagan/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-delay="300" className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md hover:border-black transition-all duration-300 group flex flex-col items-center gap-4 hover:-translate-y-2 active:scale-95">
            <div className="w-16 h-16 bg-gray-100 text-black rounded-2xl flex items-center justify-center text-3xl group-hover:bg-black group-hover:text-white transition-all duration-300">
              <i className="pi pi-linkedin text-3xl"></i>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">LinkedIn</h4>
              <span className="text-base font-bold text-black">Connect</span>
            </div>
          </a>

          {/* GitHub */}
          <a href="https://github.com/ManikandanAnbazhagan/ManikandanAnbazhagn.git" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-delay="400" className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md hover:border-black transition-all duration-300 group flex flex-col items-center gap-4 hover:-translate-y-2 active:scale-95">
            <div className="w-16 h-16 bg-gray-100 text-black rounded-2xl flex items-center justify-center text-3xl group-hover:bg-black group-hover:text-white transition-all duration-300">
              <i className="pi pi-github text-3xl"></i>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">GitHub</h4>
              <span className="text-base font-bold text-black">View Profile</span>
            </div>
          </a>

          {/* Location */}
          <div data-aos="zoom-in" data-aos-delay="500" className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md hover:border-black transition-all duration-300 group flex flex-col items-center gap-4 cursor-default">
            <div className="w-16 h-16 bg-gray-100 text-black rounded-2xl flex items-center justify-center text-3xl group-hover:bg-black group-hover:text-white transition-all duration-300">
              <i className="pi pi-map-marker text-3xl"></i>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Location</h4>
              <span className="text-base font-bold text-black text-center block">Relocate / Remote</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
