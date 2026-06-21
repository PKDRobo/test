import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import aboutImg from '../assets/about/about.jpeg';
import kapkapImg from '../assets/about/kapkap_20260616220228690_sys.png';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Initial states
    gsap.set('.about-text', { y: -100, opacity: 0 });
    gsap.set('.me-text', { y: 100, opacity: 0 });
    gsap.set('.about-line', { scaleY: 0, transformOrigin: 'top' });
    gsap.set('.me-line', { scaleY: 0, transformOrigin: 'bottom' });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 75%',
      onEnter: () => {
        const tl = gsap.timeline();
        
        tl.to('.about-text', { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' })
          .to('.me-text', { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }, '<')
          .to('.about-line', { scaleY: 1, duration: 1, ease: 'expo.inOut' }, '-=0.8')
          .to('.me-line', { scaleY: 1, duration: 1, ease: 'expo.inOut' }, '<');
      }
    });

    gsap.to('.about-word', {
      color: 'rgba(0, 0, 0, 0.9)',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.about-paragraph',
        start: 'top 85%',
        end: 'bottom 50%',
        scrub: true,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about-section" className="bg-white h-screen w-screen relative flex flex-col font-inter text-black px-6 py-6 md:px-12 md:py-10 overflow-hidden z-[50]">

      {/* Top Right Portrait Image — large and prominent */}
      <div className="absolute top-0 right-0 w-[55vw] md:w-[36vw] max-w-[500px] h-[40vh] md:h-[70vh] overflow-hidden z-0">
        <img
          src={aboutImg}
          alt="Julial Portrait"
          className="w-full h-full object-cover object-top"
          style={{ filter: 'contrast(1.08) grayscale(0.1)' }}
        />
        {/* Fade into page on the left edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent pointer-events-none" />
        {/* Fade into page on the bottom edge */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Typography */}
      <div className="flex-1 flex flex-col justify-center relative w-full h-full max-w-screen-xl mx-auto">

        <div className="relative z-[50] flex flex-col h-full mt-8">

          <div className="w-full flex items-end mt-[15vh] md:mt-0">
            <h1 className="about-text text-[clamp(100px,22vh,24vw)] font-black leading-[0.75] tracking-[-0.06em] m-0 ml-[-1vw] relative">
              about
              {/* vertical line */}
              <div className="about-line absolute bottom-[74%] left-[56.5%] w-[2px] bg-black h-[100vh] z-[-1] hidden md:block" />
            </h1>
          </div>

          <div className="w-full flex items-center mt-4 md:mt-6">
            <h1 className="me-text text-[clamp(100px,22vh,24vw)] font-black leading-[0.75] tracking-[-0.06em] m-0 relative ml-[-1vw] text-black z-10">
              me.
              <div className="me-line absolute top-[75%] left-[25.5%] md:left-[23.5%] w-[2px] bg-black h-[100vh] z-[-1] hidden md:block" />
            </h1>
          </div>

          {/* Bottom Content Area */}
          <div className="mt-auto max-w-2xl pl-0 sm:pl-[10%] md:pl-[22%] relative z-10 pb-20 md:pb-12">

            {/* Tag chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              {['UI/UX Design', 'Developer', 'Creator', 'India'].map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#f03e3e]/30 text-[#f03e3e] bg-[#f03e3e]/5">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-[clamp(18px,4vw,3rem)] font-black tracking-tight mb-4 md:mb-6 leading-none whitespace-nowrap">
              nice to meet you!
            </h2>
            <p className="about-paragraph text-[10px] md:text-xs lg:text-sm font-bold leading-relaxed tracking-tight max-w-lg text-justify">
              {"I'm Julial. I design, I code, and I build — basically, I do everything that feels creative. Tech has always been a part of me; I've been fascinated by it since I was a child. This space is where I share it all — from coding tips and creative ideas to my process, experiments, and even the occasional random, slightly chaotic thought. It's a little messy, very honest, and always driven by a love for creating. Glad you're here — thank you for the support!".split(' ').map((word, index) => (
                <span key={index} className="about-word text-black/20">
                  {word}{' '}
                </span>
              ))}
            </p>

            {/* Stats row */}
            <div className="hidden md:flex gap-8 mt-6">
              {[['4+', 'Years Exp.'], ['20+', 'Projects'], ['15+', 'Clients']].map(([num, label]) => (
                <div key={label}>
                  <p className="text-2xl font-black text-[#f03e3e] leading-none">{num}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Signature */}
      <div className="absolute bottom-6 md:bottom-10 right-6 md:right-12 text-xl md:text-3xl font-black tracking-tighter shrink-0 z-20 bg-white px-2">
        ~ Julial
      </div>

      {/* Bottom Right Decoration */}
      <img src={kapkapImg} alt="Decoration" className="absolute bottom-0 right-0 w-36 md:w-52 lg:w-64 object-contain pointer-events-none z-10" />

    </section>
  );
};

export default AboutSection;
