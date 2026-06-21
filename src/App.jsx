import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import ButterflyScene from './components/ButterflyScene';

// Components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <div className="relative min-h-screen bg-dark-bg text-white selection:bg-green-accent selection:text-black font-inter overflow-x-hidden">
      <Preloader onComplete={() => setPreloaderDone(true)} />
      {preloaderDone && <Navbar />}

      {/* 3D Canvas - POSITIONED OVER ALL CONTENT (z-50) */}
      <div className="fixed top-0 left-0 w-screen h-screen z-50 pointer-events-none">
        <Canvas style={{ pointerEvents: 'none' }}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} color="#00FF88" />
          <directionalLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />

          <Suspense fallback={null}>
            <Environment preset="city" />
            <ButterflyScene />
            {/* Soft shadow underneath the butterfly for depth */}
            <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#00FF88" />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full flex flex-col">
        <HeroSection preloaderDone={preloaderDone} />
        <AboutSection />

        <ServiceSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
