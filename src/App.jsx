import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 50,
      disable: false, // Ensure animations run on mobile
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-black relative selection:bg-gray-200 selection:text-black overflow-x-hidden" onTouchStart={() => {}}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/70 backdrop-blur-xl border-b border-white/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tighter text-black">Manikandan Anbazhagan</a>
          
          <ul className="hidden md:flex space-x-8 font-bold text-sm text-slate-600">
            <li><a href="#home" className="hover:text-black transition-colors flex items-center gap-2"><i className="pi pi-user"></i>About</a></li>
            <li><a href="#skills" className="hover:text-black transition-colors flex items-center gap-2"><i className="pi pi-cog"></i>Skills</a></li>
            <li><a href="#experience" className="hover:text-black transition-colors flex items-center gap-2"><i className="pi pi-briefcase"></i>Experience</a></li>
            <li><a href="#education" className="hover:text-black transition-colors flex items-center gap-2"><i className="pi pi-book"></i>Education</a></li>
            <li><a href="#projects" className="hover:text-black transition-colors flex items-center gap-2"><i className="pi pi-folder"></i>Projects</a></li>
            <li><a href="#contact" className="hover:text-black transition-colors flex items-center gap-2"><i className="pi pi-envelope"></i>Contact</a></li>
          </ul>

          <button 
            className="md:hidden text-2xl text-black hover:text-gray-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="pi pi-bars"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-3xl z-50 p-6 flex flex-col md:hidden border-b border-gray-200">
          <div className="flex justify-end">
            <button className="text-3xl text-black hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>
               <i className="pi pi-times"></i>
            </button>
          </div>
          <ul className="flex flex-col space-y-8 mt-12 text-2xl font-black items-center text-slate-800">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500 transition-colors flex items-center gap-3"><i className="pi pi-user"></i>About</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500 transition-colors flex items-center gap-3"><i className="pi pi-cog"></i>Skills</a></li>
            <li><a href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500 transition-colors flex items-center gap-3"><i className="pi pi-briefcase"></i>Experience</a></li>
            <li><a href="#education" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500 transition-colors flex items-center gap-3"><i className="pi pi-book"></i>Education</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500 transition-colors flex items-center gap-3"><i className="pi pi-folder"></i>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500 transition-colors flex items-center gap-3"><i className="pi pi-envelope"></i>Contact</a></li>
          </ul>
        </div>
      )}

      <main className="relative z-10 w-full">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 bg-white/50 backdrop-blur-lg py-8 text-center text-slate-500 border-t border-slate-200 text-sm font-medium">
        <p>&copy; 2024 Manikandan A. | Java Full Stack Developer | Spring Boot & Microservices</p>
      </footer>
    </div>
  );
}

export default App;
