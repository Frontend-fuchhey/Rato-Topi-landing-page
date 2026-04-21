import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);

  return (
    <div className="w-full flex flex-col min-h-screen">
      <Nav />
      
      <main className="w-full flex flex-col">
        <Hero activeIndex={activeMemberIndex} setActiveIndex={setActiveMemberIndex} />
        <About />
        <CaseStudies />
        <Gallery />
        <Team activeIndex={activeMemberIndex} setActiveIndex={setActiveMemberIndex} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
