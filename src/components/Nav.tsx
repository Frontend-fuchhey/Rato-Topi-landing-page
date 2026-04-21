import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Image as ImageIcon, Mail, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", id: "hero", icon: Home },
  { name: "About", id: "about", icon: User },
  { name: "Work", id: "work", icon: Briefcase },
  { name: "Gallery", id: "gallery", icon: ImageIcon },
  { name: "Contact", id: "contact", icon: Mail },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    setMobileMenuOpen(false);
  };

  const NavLink = ({ 
    id, 
    text,
    Icon
  }: { 
    id: string; 
    text: string;
    Icon: any;
  }) => (
    <a 
      href={`#${id}`}
      onClick={(e) => handleNavClick(e, id)}
      className="flex flex-row items-center gap-1.5 text-[11px] font-bold text-black hover:text-[#e11d2e] transition uppercase tracking-widest"
    >
      <Icon size={12} />
      <span>{text}</span>
    </a>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full px-12 lg:px-20 py-3 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-sm border-b border-divider shadow-sm" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>
            <img
              src="/logo.png"
              alt="Rato Topi Logo"
              className="h-6 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <NavLink key={item.id} id={item.id} text={item.name} Icon={item.icon} />
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
                <span className="font-heading font-bold text-accent tracking-tighter text-lg">MENU</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-black">
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col gap-6 items-start">
                {navItems.map((item) => (
                  <NavLink key={item.id} id={item.id} text={item.name} Icon={item.icon} />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
