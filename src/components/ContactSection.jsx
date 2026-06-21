import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
  { name: 'Figma', url: 'https://www.figma.com/' },
  { name: 'GitHub', url: 'https://github.com/' }
];

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', project: '', message: '' });
  const [focused, setFocused] = useState('');
  const [sent, setSent] = useState(false);

  useGSAP(() => {
    gsap.from('.contact-title', {
      y: 80, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.contact-title', start: 'top 85%' }
    });
    gsap.from('.contact-form-field', {
      y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.contact-form-field', start: 'top 90%' }
    });
    gsap.from('.contact-info-block', {
      x: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.contact-info-block', start: 'top 90%' }
    });
  }, { scope: sectionRef });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, project, message } = formData;
    const text = `Hi Julial,%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Project Type:* ${project}%0A*Message:* ${message}`;
    
    window.open(`https://wa.me/917695973074?text=${text}`, '_blank');
    
    setSent(true);
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  const inputClass = (name) =>
    `w-full bg-transparent border-b-2 py-4 text-white placeholder-white/20 font-medium text-base outline-none transition-all duration-300 ${focused === name ? 'border-[#f03e3e]' : 'border-white/10'
    }`;

  return (
    <section id="contact-section" ref={sectionRef} className="relative bg-white text-[#1a1a1a] w-screen min-h-screen py-20 md:py-32 font-inter flex flex-col justify-center">

      {/* Radial glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[#f03e3e] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="contact-title text-center mb-16 md:mb-24">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#f03e3e] mb-4">Let's Talk</p>
          <h2 className="text-[16vw] md:text-[11vw] font-black uppercase leading-[0.85] tracking-tighter text-[#1a1a1a]">
            Contact
          </h2>
          <p className="text-black/40 text-base md:text-lg max-w-md mx-auto mt-6 font-medium leading-relaxed">
            Have a project in mind? Let's design something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center py-24 gap-6 text-center">
                <div className="w-20 h-20 rounded-full bg-[#f03e3e]/10 border border-[#f03e3e]/30 flex items-center justify-center">
                  <svg className="w-9 h-9 text-[#f03e3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white">Message Sent!</h3>
                <p className="text-white/40 text-sm">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="contact-form-field">
                  <label className="text-xs font-bold tracking-widest uppercase text-white/30 mb-2 block">Your Name</label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    className={`w-full bg-transparent border-b-2 py-4 text-[#1a1a1a] placeholder-black/20 font-medium text-base outline-none transition-all duration-300 ${focused === 'name' ? 'border-[#f03e3e]' : 'border-black/10'}`}
                  />
                </div>
                <div className="contact-form-field">
                  <label className="text-xs font-bold tracking-widest uppercase text-white/30 mb-2 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    className={`w-full bg-transparent border-b-2 py-4 text-[#1a1a1a] placeholder-black/20 font-medium text-base outline-none transition-all duration-300 ${focused === 'email' ? 'border-[#f03e3e]' : 'border-black/10'}`}
                  />
                </div>
                <div className="contact-form-field">
                  <label className="text-xs font-bold tracking-widest uppercase text-white/30 mb-2 block">Project Type</label>
                  <input
                    type="text"
                    placeholder="UI/UX Design, Branding, Web..."
                    value={formData.project}
                    onChange={e => setFormData({ ...formData, project: e.target.value })}
                    onFocus={() => setFocused('project')}
                    onBlur={() => setFocused('')}
                    className={`w-full bg-transparent border-b-2 py-4 text-[#1a1a1a] placeholder-black/20 font-medium text-base outline-none transition-all duration-300 ${focused === 'project' ? 'border-[#f03e3e]' : 'border-black/10'}`}
                  />
                </div>
                <div className="contact-form-field">
                  <label className="text-xs font-bold tracking-widest uppercase text-white/30 mb-2 block">Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    className={`w-full bg-transparent border-b-2 py-4 text-[#1a1a1a] placeholder-black/20 font-medium text-base outline-none transition-all duration-300 resize-none ${focused === 'message' ? 'border-[#f03e3e]' : 'border-black/10'}`}
                  />
                </div>
                <button
                  type="submit"
                  className="self-start group flex items-center gap-3 px-8 py-4 bg-[#f03e3e] text-white font-black uppercase tracking-widest text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(240,62,62,0.4)] active:scale-95 mt-4"
                >
                  Send Message
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8">
            <div className="contact-info-block p-6 rounded-2xl border border-black/5 bg-black/[0.02]">
              <p className="text-xs font-bold tracking-widest uppercase text-[#f03e3e] mb-3">Email</p>
              <a href="mailto:Julial.design@gmail.com" className="text-[#1a1a1a] font-bold text-lg hover:text-[#f03e3e] transition-colors duration-200">
                Julial.design@gmail.com
              </a>
            </div>
            <div className="contact-info-block p-6 rounded-2xl border border-black/5 bg-black/[0.02]">
              <p className="text-xs font-bold tracking-widest uppercase text-[#f03e3e] mb-3">Location</p>
              <p className="text-[#1a1a1a] font-bold text-lg">India · Available Worldwide</p>
              <p className="text-black/40 text-sm mt-1">Remote-friendly · IST (UTC+5:30)</p>
            </div>
            <div className="contact-info-block p-6 rounded-2xl border border-black/5 bg-black/[0.02]">
              <p className="text-xs font-bold tracking-widest uppercase text-[#f03e3e] mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socialLinks.map(s => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-black/30 px-3 py-2 rounded-full border border-black/10 hover:border-[#f03e3e]/50 hover:text-[#f03e3e] transition-all duration-200"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-info-block p-6 rounded-2xl bg-gradient-to-br from-[#f03e3e]/10 to-transparent border border-[#f03e3e]/20">
              <p className="text-xs font-bold tracking-widest uppercase text-[#f03e3e] mb-2">Availability</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-white font-bold">Open for new projects</p>
              </div>
              <p className="text-white/30 text-sm">Estimated start: July 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
