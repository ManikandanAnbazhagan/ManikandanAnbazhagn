import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        'service_default', // standard dummy ID or user placeholder
        'template_default', // standard dummy ID or user placeholder
        formRef.current,
        'public_key_here' // user placeholder
      )
      .then(
        () => {
          setStatus('success');
          formRef.current.reset();
          setTimeout(() => setStatus(''), 5000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus('error');
          setTimeout(() => setStatus(''), 5000);
        }
      );
  };
  return (
    <section id="contact" className="py-24 px-6 border-t border-slate-200/60 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight drop-shadow-sm">Let's Connect</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              I'm actively looking for new Backend Developer opportunities. Feel free to reach out via email or connect with me on LinkedIn.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:bg-violet-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 group-hover:-translate-y-1">
                  <i className="ph-fill ph-envelope-simple"></i>
                </div>
                <div className="pt-1">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</h4>
                  <a href="mailto:manikandanav52@gmail.com" className="text-lg font-bold text-slate-800 hover:text-violet-600 transition-colors">manikandanav52@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:bg-pink-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300 group-hover:-translate-y-1">
                  <i className="ph-fill ph-phone"></i>
                </div>
                <div className="pt-1">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</h4>
                  <a href="tel:+919361126528" className="text-lg font-bold text-slate-800 hover:text-pink-600 transition-colors">+91 9361126528</a>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 group-hover:-translate-y-1">
                  <i className="ph-fill ph-map-pin"></i>
                </div>
                <div className="pt-1">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</h4>
                  <span className="text-lg font-bold text-slate-800">Available for Relocation / Remote</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 p-8 lg:p-10 relative overflow-hidden">
            {status === 'success' && (
              <div className="absolute inset-0 bg-emerald-50/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-emerald-600 animate-fade-in">
                <i className="ph-fill ph-check-circle text-6xl mb-4"></i>
                <p className="text-xl font-bold">Message sent successfully!</p>
                <p className="text-sm font-medium mt-2">I'll get back to you soon.</p>
              </div>
            )}
            {status === 'error' && (
              <div className="absolute top-0 left-0 w-full bg-red-100 text-red-600 p-3 text-center text-sm font-bold animate-slide-down">
                Failed to send message. Please try again or email directly.
              </div>
            )}

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-bold text-slate-700 mb-2 tracking-wide">Name</label>
                <input type="text" id="user_name" name="user_name" placeholder="John Doe" className="w-full px-5 py-4 bg-slate-50 text-slate-900 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 outline-none transition-all font-medium placeholder-slate-400" required disabled={status === 'sending'} />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-bold text-slate-700 mb-2 tracking-wide">Email</label>
                <input type="email" id="user_email" name="user_email" placeholder="john@example.com" className="w-full px-5 py-4 bg-slate-50 text-slate-900 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 outline-none transition-all font-medium placeholder-slate-400" required disabled={status === 'sending'} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 tracking-wide">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="How can we work together?" className="w-full px-5 py-4 bg-slate-50 text-slate-900 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 outline-none transition-all resize-none font-medium placeholder-slate-400" required disabled={status === 'sending'}></textarea>
              </div>
              <button type="submit" disabled={status === 'sending'} className="w-full py-4 bg-gradient-to-r from-violet-600 to-pink-500 text-white rounded-2xl font-black text-lg hover:from-violet-500 hover:to-pink-400 transition-all shadow-[0_8px_20px_rgba(139,92,246,0.25)] hover:shadow-[0_10px_25px_rgba(139,92,246,0.4)] flex items-center justify-center gap-2 hover:-translate-y-1 tracking-wide disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed">
                {status === 'sending' ? (
                  <>Sending... <i className="ph ph-spinner animate-spin text-xl"></i></>
                ) : (
                  <>Send Message <i className="ph-bold ph-paper-plane-right text-xl"></i></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
