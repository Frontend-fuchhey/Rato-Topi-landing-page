"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Home, User, Briefcase, Image as ImageIcon, Send, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Work", href: "#work", icon: Briefcase },
  { name: "Gallery", href: "#gallery", icon: ImageIcon },
  { name: "Contact", href: "#contact", icon: Send },
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

  const NavLink = ({ 
    href, 
    text, 
    Icon
  }: { 
    href: string; 
    text: string; 
    Icon?: any;
  }) => (
    <Link 
      href={href} 
      className="group flex items-center gap-2 transition-colors text-black hover:text-accent font-heading font-semibold text-[13px] tracking-widest uppercase"
      onClick={() => setMobileMenuOpen(false)}
    >
      {Icon && (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-accent"
        >
          <Icon size={18} strokeWidth={2} />
        </motion.div>
      )}
      <span className="relative z-10 transition-colors duration-300">
        {text}
      </span>
    </Link>
  );

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 transition-all duration-300 ${
          scrolled ? "h-[70px] bg-white/90 backdrop-blur-md border-b border-[#F0F0F0]" : "h-[90px] bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <Link href="#hero" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Rato Topi Logo"
            width={160}
            height={50}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href} text={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-black p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl p-10 flex flex-col gap-8"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-heading font-bold text-accent tracking-tighter text-xl">MENU</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-black">
                  <X size={30} />
                </button>
              </div>
              
              <div className="flex flex-col gap-8 items-start">
                {navItems.map((item) => (
                  <NavLink key={item.name} href={item.href} text={item.name} Icon={item.icon} />
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-[#F0F0F0]">
                <p className="text-[10px] text-gray-400 tracking-[0.2em] font-bold uppercase">
                  © 2024 RATO TOPI
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
