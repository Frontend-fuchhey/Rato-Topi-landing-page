import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cloud, TrendingUp } from "lucide-react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setIsMounted(true);
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
      const datePart = now.toLocaleDateString('en-US', options);
      const timePart = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
      setCurrentTime(`${datePart} | ${timePart}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return <div className="min-h-screen" />;

  return (
    <section id="hero" className="min-h-screen bg-[#f8f9fa] flex flex-col pt-24 pb-16 overflow-hidden relative">
      <div className="absolute inset-0 bg-studio-dots opacity-40 pointer-events-none" />

      {/* Top Timestamp */}
      <div className="absolute top-24 right-8 lg:right-16 z-20">
        <span className="text-gray-400 font-sans text-sm tracking-widest uppercase">{currentTime}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center flex-grow max-w-7xl mx-auto w-full px-8 relative z-10">
        
        {/* LEFT SIDE: Typography */}
        <div className="flex flex-col z-20 pt-10 lg:pt-0">
          <motion.h1
            className="font-heading font-black leading-[1.1] text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
          >
            <span className="inline-block whitespace-nowrap">Engineering <span className="hollow-text inline-block translate-y-1" style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}>डिजिटल</span></span><br />
            Solutions with<br />
            Precision.
          </motion.h1>

          <motion.p 
            className="text-gray-500 max-w-md text-sm md:text-base mb-8 font-sans"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            We build fast, scalable and user-centric digital products that solve complex engineering problems for leading businesses and startups.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a href="#contact" className="px-8 py-3.5 rounded-full font-bold text-xs tracking-widest bg-[#c82021] text-white hover:bg-[#a01a1a] transition-colors shadow-lg text-center">
              START A PROJECT
            </a>
            <a href="#services" className="px-8 py-3.5 rounded-full font-bold text-xs tracking-widest border-2 border-gray-200 text-gray-900 bg-white hover:border-gray-900 transition-colors text-center">
              VIEW OUR WORK
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Laptop Image + Hovering Cards Container */}
        <div className="relative w-full aspect-square lg:aspect-[4/3] flex flex-col items-center justify-center mt-10 lg:mt-0 pointer-events-none transform scale-[0.9] md:scale-100 origin-center transition-all duration-700 ease-out will-change-transform">
          
          {/* STATIC LAPTOP IMAGE */}
          <motion.img 
            src="/laptop.png" 
            alt="Laptop Mockup"
            className="absolute inset-0 w-full h-full object-contain object-center drop-shadow-2xl z-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* FLOATING CARDS HOVERING OVER THE KEYBOARD */}
          <div className="absolute inset-0 z-30 transition-all duration-700 ease-out will-change-transform scale-[0.85] md:scale-100">
            
            {/* Card 1: Case Studies */}
            <motion.div layout className="absolute top-[35%] left-[5%] bg-white rounded-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col gap-2 w-40 pointer-events-auto will-change-transform"
              initial={{ y: 50, x: -30, opacity: 0 }} 
              animate={{ y: [-10, 10, -10], x: 0, opacity: 1 }} 
              transition={{ y: { repeat: Infinity, duration: 4, ease: "easeInOut" }, opacity: { duration: 0.8, delay: 0.2 }, x: { duration: 0.8, delay: 0.2 } }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center">
                   <img src="/icon-hat.png" className="w-4 h-4" alt="Hat" />
                </div>
                <span className="text-[10px] font-bold text-gray-800">Case Studies</span>
              </div>
              <div className="w-full h-1 bg-gray-200 rounded"></div>
              <div className="w-2/3 h-1 bg-gray-200 rounded"></div>
              <div className="w-full py-1.5 bg-red-600 rounded mt-2 text-[8px] font-bold tracking-wider text-white text-center">VIEW PROJECT</div>
            </motion.div>

            {/* Card 2: Cloud Solutions */}
            <motion.div layout className="absolute top-[25%] right-[8%] bg-white rounded-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col gap-2 w-44 pointer-events-auto will-change-transform"
              initial={{ y: 50, x: 30, opacity: 0 }} 
              animate={{ y: [10, -10, 10], x: 0, opacity: 1 }} 
              transition={{ y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }, opacity: { duration: 0.8, delay: 0.3 }, x: { duration: 0.8, delay: 0.3 } }}
            >
              <div className="flex items-center gap-3 mb-1">
                <Cloud size={18} className="text-blue-500"/>
                <span className="text-[11px] font-bold">Cloud Solutions</span>
              </div>
              <div className="w-full h-1 bg-gray-200 rounded"></div>
              <div className="w-5/6 h-1 bg-gray-200 rounded"></div>
              <div className="text-[8px] text-white bg-red-600 rounded px-2 py-1 w-fit mt-1">Deployed successfully</div>
            </motion.div>

            {/* Card 3: Team Overview */}
            <motion.div layout className="absolute bottom-[10%] left-[10%] bg-white rounded-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col gap-3 w-48 pointer-events-auto will-change-transform"
              initial={{ y: 50, scale: 0.8, opacity: 0 }} 
              animate={{ y: [-5, 5, -5], scale: 1, opacity: 1 }} 
              transition={{ y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }, opacity: { duration: 0.8, delay: 0.4 }, scale: { duration: 0.8, delay: 0.4 } }}
            >
              <span className="text-[11px] font-bold text-gray-800">Team Overview</span>
              <div className="flex gap-2">
                 <div className="flex flex-col items-center gap-1">
                   <img src="/team/bibek.jpg" className="w-6 h-6 rounded-full object-cover grayscale" alt="Team" />
                   <div className="w-8 h-1 bg-gray-200 rounded"></div>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                   <img src="/team/prajwal.jpg" className="w-6 h-6 rounded-full object-cover grayscale" alt="Team" />
                   <div className="w-8 h-1 bg-gray-200 rounded"></div>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                   <img src="/team/zubeen.jpg" className="w-6 h-6 rounded-full object-cover grayscale" alt="Team" />
                   <div className="w-8 h-1 bg-gray-200 rounded"></div>
                 </div>
              </div>
              <div className="flex items-center gap-2 mt-1">
                 <img src="/team/bibek.jpg" className="w-5 h-5 rounded-full object-cover grayscale" alt="Team" />
                 <div className="flex flex-col gap-1 w-full">
                    <div className="text-[8px] font-bold text-gray-700">James Doe</div>
                    <div className="w-full h-1 bg-gray-200 rounded"></div>
                 </div>
              </div>
            </motion.div>

            {/* Card 4: Data Integration (Line chart) */}
            <motion.div layout className="absolute bottom-[15%] right-[5%] bg-white rounded-xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col w-44 pointer-events-auto will-change-transform"
              initial={{ y: 50, x: 20, opacity: 0 }} 
              animate={{ y: [5, -5, 5], x: 0, opacity: 1 }} 
              transition={{ y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.2 }, opacity: { duration: 0.8, delay: 0.5 }, x: { duration: 0.8, delay: 0.5 } }}
            >
              <div className="flex justify-between items-center">
                 <span className="text-[10px] font-bold text-gray-800">Data Integration</span>
                 <TrendingUp size={12} className="text-gray-400" />
              </div>
              <div className="w-full h-12 mt-2 relative">
                 <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
                    <path d="M0,20 Q10,5 25,15 T50,20 T75,10 T100,25" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="25" cy="15" r="2" fill="#2563eb" />
                    <circle cx="50" cy="20" r="2" fill="#2563eb" />
                    <circle cx="75" cy="10" r="2" fill="#2563eb" />
                 </svg>
              </div>
            </motion.div>

            {/* Floating Hats (Centered & Overlapping) */}
            <motion.img layout src="/icon-hat.png" className="absolute top-[45%] left-[45%] w-16 drop-shadow-2xl z-40 pointer-events-auto will-change-transform"
              animate={{ y: [-15, 15, -15], rotate: [-8, 8, -8] }} 
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            />
            <motion.img layout src="/icon-hat.png" className="absolute bottom-[5%] right-[30%] w-12 drop-shadow-2xl z-40 pointer-events-auto will-change-transform"
              animate={{ y: [15, -15, 15], rotate: [12, -12, 12] }} 
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
            />

            {/* Small Faux Elements (Pies, Pyramids, Data blocks) */}
            <motion.div layout className="absolute top-[25%] left-[30%] w-10 h-10 rounded-full border-[4px] border-blue-900 border-t-red-400 border-l-blue-200 shadow-[0_10px_20px_rgba(0,0,0,0.2)] pointer-events-auto bg-white will-change-transform"
              animate={{ rotate: 360, y: [-5, 5, -5] }} 
              transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            />
            
            <motion.div layout className="absolute bottom-[0%] left-[35%] bg-white rounded-lg p-2 shadow-xl border border-gray-100 pointer-events-auto flex items-center gap-2 will-change-transform"
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: [0, -10, 0], opacity: 1 }} 
              transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }, opacity: { duration: 0.8, delay: 0.7 } }}
            >
               <div className="w-3 h-3 rounded-full border-2 border-red-500 border-t-blue-500"></div>
               <div className="flex flex-col gap-1">
                 <div className="w-8 h-1 bg-gray-200 rounded"></div>
                 <div className="w-4 h-1 bg-gray-200 rounded"></div>
               </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
