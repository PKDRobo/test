import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import designImg1 from '../assets/service/left.png';
import designImg2 from '../assets/service/right.png';
import designImg3 from '../assets/about/about.jpeg';

import project1Img from '../assets/project/milk shake.png';
import project2Img from '../assets/project/Fooderordering.png';
import project3Img from '../assets/project/image.png';
import project4Img from '../assets/project/image copy.png';
import project5Img from '../assets/project/image copy 2.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: '01',
    title: 'Milkshake Ad UI',
    category: 'UI Design · Advertisement',
    description: 'Created a modern milkshake advertisement UI in Figma, emphasizing visual storytelling, product presentation, and user engagement.',
    tags: ['Figma', 'UI Design', 'Storytelling', 'Advertisement'],
    year: '2026',
    color: '#f03e3e',
    img: project1Img,
    figmaLink: 'https://www.figma.com/',
    behanceLink: 'https://www.behance.net/janani4',
  },
  {
    id: '02',
    title: 'Food Delivery App',
    category: 'UI/UX Design · Mobile App',
    description: 'A modern food delivery app UI featuring product details, add-ons, cart management, and an intuitive user experience designed to simplify online food ordering.',
    tags: ['Mobile App', 'Figma', 'UX Research', 'E-Commerce'],
    year: '2026',
    color: '#7c3aed',
    img: project2Img,
    figmaLink: 'https://www.figma.com/',
    behanceLink: 'https://www.behance.net/janani4',
  },
  {
    id: '03',
    title: 'Modern Web Application',
    category: 'Web Development · Full Stack',
    description: 'A responsive and dynamic web application featuring modern UI/UX design, interactive animations, and seamless user experience.',
    tags: ['React', 'Frontend', 'Web Design', 'Interactive'],
    year: '2025',
    color: '#0ea5e9',
    img: project3Img,
    githubLink: 'https://github.com/',
  },
  {
    id: '04',
    title: 'SneakerX E-Commerce',
    category: 'Web Development · E-Commerce',
    description: 'A sleek, modern e-commerce platform dedicated to premium footwear. Features include a dynamic product catalog, interactive filtering, and an optimized checkout experience.',
    tags: ['React', 'E-Commerce', 'UI/UX', 'Web Design'],
    year: '2025',
    color: '#f59e0b',
    img: project4Img,
    githubLink: 'https://github.com/',
  },
  {
    id: '05',
    title: 'Artisan Coffee Roasters',
    category: 'Web Development · Cafe',
    description: 'A warm and inviting website for a local coffee shop. Features an online ordering system, menu showcase, and an interactive location map.',
    tags: ['React', 'Frontend', 'UI/UX', 'Web Design'],
    year: '2025',
    color: '#8b5a2b',
    img: project5Img,
    githubLink: 'https://github.com/',
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x: y * -10, y: x * 10 });
  };

  return (
    <div
      ref={cardRef}
      className="project-card group cursor-pointer"
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
    >
      <div
        className="relative w-full rounded-3xl border overflow-hidden transition-all duration-300 bg-white"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
          border: hovered ? `1px solid ${project.color}50` : '1px solid rgba(0,0,0,0.06)',
          boxShadow: hovered
            ? `0 30px 80px rgba(0,0,0,0.15), 0 0 0 1px ${project.color}30`
            : '0 8px 32px rgba(0,0,0,0.08)',
        }}
      >
        {/* Project image preview */}
        <div className="w-full h-40 md:h-52 overflow-hidden relative">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700"
            style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none" />
          <span
            className="absolute top-4 right-4 text-xs font-black px-3 py-1 rounded-full text-white"
            style={{ background: project.color }}
          >
            {project.year}
          </span>
        </div>
        {/* Content */}
        <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
          {/* Number */}
          <div className="shrink-0">
            <span
              className="text-6xl md:text-7xl font-black leading-none select-none transition-all duration-300"
              style={{ color: hovered ? project.color : 'rgba(0,0,0,0.08)', WebkitTextStroke: hovered ? '0px' : `2px ${project.color}50` }}
            >
              {project.id}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border" style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}10` }}>
                {project.category}
              </span>
              <span className="text-xs font-bold text-white/30">{project.year}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-[#1a1a1a] tracking-tight leading-none">
              {project.title}
            </h3>
            <p className="text-black/50 text-sm md:text-base leading-relaxed font-medium">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-bold text-black/40 px-3 py-1 rounded-full bg-black/5 border border-black/10">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            {(project.figmaLink || project.behanceLink || project.githubLink) && (
              <div className="flex flex-wrap gap-4 mt-4">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors duration-300">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <span className="text-xs font-bold text-black/70">GitHub</span>
                  </a>
                )}
                {project.figmaLink && (
                  <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors duration-300">
                    <svg className="w-4 h-4" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 28.5C24.2467 28.5 28.5 24.2467 28.5 19C28.5 13.7533 24.2467 9.5 19 9.5C13.7533 9.5 9.5 13.7533 9.5 19C9.5 24.2467 13.7533 28.5 19 28.5Z" fill="#1ABCFE"/>
                      <path d="M9.5 28.5C9.5 23.2533 13.7533 19 19 19V38C13.7533 38 9.5 33.7467 9.5 28.5Z" fill="#0ACF83"/>
                      <path d="M19 57C13.7533 57 9.5 52.7467 9.5 47.5C9.5 42.2533 13.7533 38 19 38C24.2467 38 28.5 42.2533 28.5 47.5C28.5 52.7467 24.2467 57 19 57Z" fill="#FF7262"/>
                      <path d="M19 19V0C24.2467 0 28.5 4.25329 28.5 9.5C28.5 14.7467 24.2467 19 19 19Z" fill="#F24E1E"/>
                      <path d="M9.5 9.5C9.5 4.25329 13.7533 0 19 0V19C13.7533 19 9.5 14.7467 9.5 9.5Z" fill="#A259FF"/>
                    </svg>
                    <span className="text-xs font-bold text-black/70">Figma</span>
                  </a>
                )}
                {project.behanceLink && (
                  <a href={project.behanceLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 hover:bg-[#1769ff]/10 transition-colors duration-300">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1769ff" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 7h-7v-2h7v2zM11.501 9.134c-.815-.558-2.072-.888-3.551-.888H0v15h8.043c1.782 0 3.161-.284 4.148-.847 1.053-.599 1.638-1.571 1.638-2.887 0-1.077-.456-1.953-1.196-2.502-.676-.5-1.637-.791-2.909-.853 2.146-.356 3.421-1.614 3.421-3.619 0-1.401-.58-2.453-1.644-3.404zm-7.391 3.513v-2.8h2.907c1.464 0 2.215.539 2.215 1.458 0 .914-.852 1.342-2.316 1.342h-2.806zm3.504 6.786H4.11v-3.32h3.505c1.464 0 2.417.472 2.417 1.603 0 1.258-1.114 1.717-2.418 1.717zM23.955 12.381c-.046-1.066-.316-2.036-.803-2.883-.559-.974-1.328-1.748-2.284-2.299C19.914 6.649 18.847 6.37 17.65 6.37c-1.332 0-2.529.324-3.558.961-.925.576-1.657 1.378-2.176 2.381-.518 1.002-.782 2.164-.782 3.448 0 1.34.252 2.504.751 3.468.497.962 1.205 1.724 2.106 2.268s1.954.825 3.091.825c1.404 0 2.593-.34 3.535-1.011s1.583-1.638 1.91-2.885h-3.427c-.126.39-.379.715-.751.968-.372.253-.846.381-1.409.381-.741 0-1.325-.218-1.737-.648-.41-.429-.638-1.018-.679-1.75h9.421c.01-.19.015-.453.015-.795h-.005zm-6.287-3.43c.594 0 1.082.202 1.453.601.371.398.571.933.594 1.593h-4.04c.058-.696.284-1.246.671-1.638.388-.393.844-.588 1.353-.588h-.031z"/>
                    </svg>
                    <span className="text-xs font-bold text-[#1769ff]">Behance</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Arrow */}
          <div className="shrink-0 self-center">
            <div
              className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300"
              style={{
                borderColor: hovered ? project.color : 'rgba(255,255,255,0.1)',
                background: hovered ? project.color : 'transparent',
                transform: hovered ? 'rotate(-45deg)' : 'rotate(0deg)',
              }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.projects-title', {
      y: 80, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.projects-title', start: 'top 85%' }
    });
    gsap.from('.project-card', {
      y: 100, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.project-card', start: 'top 90%' }
    });
  }, { scope: sectionRef });

  return (
    <section id="projects-section" ref={sectionRef} className="relative bg-white text-[#1a1a1a] w-screen min-h-screen py-20 md:py-32 font-inter overflow-hidden flex flex-col justify-center">

      {/* Light grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="projects-title mb-16 md:mb-24">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#f03e3e] mb-4">Selected Work</p>
          <h2 className="text-[15vw] md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter text-[#1a1a1a]">
            Projects
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
