import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
