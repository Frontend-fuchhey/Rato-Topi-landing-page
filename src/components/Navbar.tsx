import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { content } from "../data/content";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = content.nav.items.map(item => document.getElementById(item.id));
      let current = "hero";
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop <= 150) {
            current = section.id;
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  const NavLink = ({ 
    id, 
    text
  }: { 
    id: string; 
    text: string;
  }) => {
    const isActive = activeSection === id;
    return (
      <a 
        href={`#${id}`}
        onClick={(e) => handleNavClick(e, id)}
        className={`relative flex flex-col items-center justify-center text-sm font-bold transition-colors ${isActive ? 'text-accent' : 'text-black hover:text-gray-600'}`}
      >
        <span>{text}</span>
        {/* Active Underline / Dot */}
        {isActive && (
          <motion.div 
            layoutId="nav-indicator"
            className="absolute -bottom-2 w-full h-[2px] bg-accent"
          />
        )}
      </a>
    );
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 flex justify-between items-center px-12">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>
            <img
              src="/logo.png"
              alt={content.nav.logoAlt}
              className="h-8 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {content.nav.items.map((item) => (
            <NavLink key={item.id} id={item.id} text={item.name} />
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-black p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[240px] bg-white z-[70] shadow-2xl p-8 flex flex-col gap-6"
            >
              <div className="flex justify-between items-center">
                <span className="font-heading font-bold text-accent tracking-tighter text-lg">{content.nav.menuLabel}</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-black">
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col gap-6 items-start">
                {content.nav.items.map((item) => (
                  <NavLink key={item.id} id={item.id} text={item.name} />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
}

