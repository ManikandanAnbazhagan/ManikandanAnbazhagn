import React from 'react';
import profilePic from '../assets/Mani_Profile.jpeg';

function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div data-aos="fade-down" className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-300 text-black px-5 py-2.5 rounded-full text-sm font-bold mb-8 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]"></span>
          <span>Available for Java Full Stack Opportunities</span>
        </div>
        
        <div data-aos="zoom-in" data-aos-delay="100" className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-white border-4 border-gray-200 shadow-xl overflow-hidden flex items-center justify-center mb-6 relative group cursor-pointer transition-all duration-500 animate-float hover:shadow-2xl hover:shadow-gray-400 active:shadow-2xl active:shadow-gray-400 active:scale-95" onTouchStart={() => {}}>
            <img src={profilePic} alt="Manikandan Anbazhagan" className="w-full h-full object-cover object-[center_top] scale-105 transition-transform duration-500 ease-in-out group-hover:scale-115 group-active:scale-115" />
        </div>
        
        <h1 data-aos="fade-up" data-aos-delay="200" className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight mb-4 p-2">
          Hello, I'm Manikandan
        </h1>
        
        <p data-aos="fade-up" data-aos-delay="300" className="text-base md:text-lg text-gray-700 max-w-2xl leading-relaxed mb-8 font-medium">
         <p className="summary">A dedicated <span className="font-black text-black">Java Full Stack Developer</span> with 4 years of experience designing, developing, and deploying scalable server-side applications. Proficient in building high-performance REST APIs, optimizing databases, and integrating CI/CD pipelines.</p>
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
          <div className="flex flex-col items-center bg-gray-100 px-8 py-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-3xl md:text-4xl font-black tracking-tight text-black">4+</span>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest mt-1">Years Exp</span>
          </div>
          <div className="flex flex-col items-center bg-gray-100 px-8 py-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-3xl md:text-4xl font-black tracking-tight text-black">Java</span>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest mt-1">Spring Boot</span>
          </div>
          <div className="flex flex-col items-center bg-gray-100 px-8 py-5 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-3xl md:text-4xl font-black tracking-tight text-black">2 Cloud</span>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest mt-1">AWS / GCP</span>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col sm:flex-row items-center gap-6">
          <a href="#contact" className="px-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:-translate-y-1 active:scale-95 flex items-center gap-2">
            Contact Me <i className="pi pi-send text-sm"></i>
          </a>
          <a href={`${import.meta.env.BASE_URL}Manikandan_A_BE_Resume.pdf`} download="Manikandan_A_BE_Resume.pdf" className="px-8 py-4 bg-white border-2 border-black text-black rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-95 flex items-center gap-2 group">
            Download Resume <i className="pi pi-download text-sm text-black transition-colors"></i>
          </a>
          
          <div data-aos="fade-up" data-aos-delay="600" className="flex items-center gap-5 ml-2 mt-4 sm:mt-0">
            <a href="https://www.linkedin.com/in/manikandan-anbazhagan/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-all hover:scale-110 active:scale-90 text-3xl pb-1" aria-label="LinkedIn">
              <i className="pi pi-linkedin"></i>
            </a>
            <a href="mailto:manikandanav52@gmail.com" className="text-gray-500 hover:text-black transition-all hover:scale-110 active:scale-90 text-3xl pb-1" aria-label="Email">
              <i className="pi pi-envelope"></i>
            </a>
            <a href="https://github.com/ManikandanAnbazhagan/ManikandanAnbazhagn.git" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-all hover:scale-110 active:scale-90 text-3xl pb-1" aria-label="GitHub">
              <i className="pi pi-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
