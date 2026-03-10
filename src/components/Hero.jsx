import React from 'react';
import profilePic from '../assets/Mani_Profile.jpeg';

function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-white border border-emerald-200 text-emerald-600 px-5 py-2.5 rounded-full text-sm font-bold mb-8 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-[pulse_2s_ease-in-out_infinite]"></span>
          <span>Available for Backend Developer Opportunities</span>
        </div>
        
        <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-white border-4 border-white shadow-xl overflow-hidden flex items-center justify-center mb-6 relative group cursor-pointer transition-all duration-500 hover:border-violet-400 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]">
            <img src={profilePic} alt="Manikandan Anbazhagan" className="w-full h-full object-cover object-[center_top] scale-105 transition-transform duration-500 ease-in-out group-hover:scale-115" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-4 p-2">
          Hello, I'm Manikandan
        </h1>
        
        <p className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed mb-8 font-medium">
          A dedicated <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 font-bold">Backend Developer</span> with 3.2 years of experience designing, developing, and deploying scalable server-side applications. Proficient in building high-performance REST APIs, optimizing databases, and integrating CI/CD pipelines.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
          <div className="flex flex-col items-center bg-white/60 backdrop-blur-md px-8 py-5 rounded-2xl border border-white shadow-sm">
            <span className="text-3xl md:text-4xl font-black tracking-tight text-slate-800">3.2+</span>
            <span className="text-xs font-bold text-violet-600 uppercase tracking-widest mt-1">Years Exp</span>
          </div>
          <div className="flex flex-col items-center bg-white/60 backdrop-blur-md px-8 py-5 rounded-2xl border border-white shadow-sm">
            <span className="text-3xl md:text-4xl font-black tracking-tight text-slate-800">Java</span>
            <span className="text-xs font-bold text-pink-500 uppercase tracking-widest mt-1">Spring Boot</span>
          </div>
          <div className="flex flex-col items-center bg-white/60 backdrop-blur-md px-8 py-5 rounded-2xl border border-white shadow-sm">
            <span className="text-3xl md:text-4xl font-black tracking-tight text-slate-800">2 Cloud</span>
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest mt-1">AWS / GCP</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-violet-600 to-pink-500 text-white rounded-xl font-bold hover:from-violet-500 hover:to-pink-400 transition-all duration-300 shadow-[0_8px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_10px_25px_rgba(139,92,246,0.5)] hover:-translate-y-1 flex items-center gap-2">
            Contact Me <i className="ph-bold ph-paper-plane-right text-lg"></i>
          </a>
          <a href="/Manikandan_A_BE_Resume.pdf" download="Manikandan_A_BE_Resume.pdf" className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center gap-2 group">
            Download Resume <i className="ph-bold ph-download-simple text-lg text-slate-400 group-hover:text-slate-600 transition-colors"></i>
          </a>
          
          <div className="flex items-center gap-5 ml-2 mt-4 sm:mt-0">
            <a href="http://localhost:5175/#home" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-600 transition-all hover:scale-110 text-3xl pb-1" aria-label="LinkedIn">
              <i className="ph-fill ph-linkedin-logo"></i>
            </a>
            <a href="mailto:manikandanav52@gmail.com" className="text-slate-400 hover:text-pink-500 transition-all hover:scale-110 text-3xl pb-1" aria-label="Email">
              <i className="ph-fill ph-envelope-simple"></i>
            </a>
            <a href="https://github.com/ManikandanAnbazhagan/ManikandanAnbazhagn.git" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-all hover:scale-110 text-3xl pb-1" aria-label="GitHub">
              <i className="ph-fill ph-github-logo"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
