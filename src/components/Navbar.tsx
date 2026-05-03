import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", id: "hero" },
  { name: "Services", id: "services" },
  { name: "Portfolio", id: "portfolio" },
  { name: "About", id: "about" },
  { name: "Team", id: "team" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      let current = "hero";
      sections.forEach(section => {
        if (section && section.getBoundingClientRect().top <= 140) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
    }
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav py-3 shadow-sm" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNavClick(e, "hero")} className="flex items-center gap-2">
            <img src="/logo.png" alt="Rato Topi Logo" className="h-8 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative font-heading font-semibold text-[13px] tracking-wider uppercase transition-colors duration-200 ${
                    isActive ? "text-[#BE1E2D]" : "text-[#1A1A1A] hover:text-[#BE1E2D]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#BE1E2D] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="hidden md:inline-flex btn-primary py-2.5 px-6 text-[11px]"
            >
              Get a Quote
            </a>
            <button
              className="md:hidden p-2 text-[#1A1A1A] hover:text-[#BE1E2D] transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-10">
                <img src="/logo.png" alt="Rato Topi" className="h-7 w-auto" />
                <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-[#1A1A1A] hover:text-[#BE1E2D]">
                  <X size={22} />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`font-heading font-bold text-sm uppercase tracking-widest transition-colors ${
                      activeSection === item.id ? "text-[#BE1E2D]" : "text-[#1A1A1A] hover:text-[#BE1E2D]"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-auto">
                <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="btn-primary w-full justify-center py-3">
                  Get a Quote
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
