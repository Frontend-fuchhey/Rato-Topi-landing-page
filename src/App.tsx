import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import About from './components/About';
import TeamShowcase from './components/TeamShowcase';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

export default function App() {
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);

  return (
    <div className="w-full min-h-screen bg-white text-black font-sans">
      <Nav />
      <main>
        <Hero activeIndex={activeMemberIndex} />
        <ServicesGrid />
        <About />
        <TeamShowcase activeIndex={activeMemberIndex} setActiveIndex={setActiveMemberIndex} />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
}
