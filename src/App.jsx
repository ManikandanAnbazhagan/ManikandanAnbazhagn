import React, { useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 relative selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden">
      {/* Background Decorators - Vibrant Pastel Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-pink-400/20 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-pulse-slow"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50rem] h-[50rem] bg-violet-400/20 rounded-full blur-[100px] mix-blend-multiply opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40rem] h-[40rem] bg-cyan-400/20 rounded-full blur-[100px] mix-blend-multiply opacity-60"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/70 backdrop-blur-xl border-b border-white/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tighter bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">Manikandan Anbazhagan</a>
          
          <ul className="hidden md:flex space-x-8 font-bold text-sm text-slate-600">
            <li><a href="#home" className="hover:text-violet-600 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-violet-600 transition-colors">Contact Me</a></li>
            <li><a href="#skills" className="hover:text-violet-600 transition-colors">Skills</a></li>
            <li><a href="#experience" className="hover:text-violet-600 transition-colors">Experience</a></li>
            <li><a href="#education" className="hover:text-violet-600 transition-colors">Education</a></li>
            <li><a href="#projects" className="hover:text-violet-600 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-violet-600 transition-colors">Contact</a></li>
          </ul>

          <button 
            className="md:hidden text-2xl text-slate-600 hover:text-violet-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ph ph-list"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-3xl z-50 p-6 flex flex-col md:hidden border-b border-gray-200">
          <div className="flex justify-end">
            <button className="text-3xl text-slate-600 hover:text-violet-600" onClick={() => setIsMenuOpen(false)}>
               <i className="ph ph-x"></i>
            </button>
          </div>
          <ul className="flex flex-col space-y-8 mt-12 text-2xl font-black items-center text-slate-800">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-violet-600 transition-colors">About</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-violet-600 transition-colors">Contact Me</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-violet-600 transition-colors">Skills</a></li>
            <li><a href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-violet-600 transition-colors">Experience</a></li>
            <li><a href="#education" onClick={() => setIsMenuOpen(false)} className="hover:text-violet-600 transition-colors">Education</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-violet-600 transition-colors">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-violet-600 transition-colors">Contact</a></li>
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
        <p>&copy; 2024 Manikandan A. | Backend Developer | Spring Boot & Microservices</p>
      </footer>
    </div>
  );
}

export default App;
