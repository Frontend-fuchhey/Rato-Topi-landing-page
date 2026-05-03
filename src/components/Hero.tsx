import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, MoreHorizontal } from "lucide-react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setIsMounted(true);
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long" }) +
          " · " +
          now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return <div className="min-h-screen bg-[#1A1A1A]" />;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1A1A1A]/65" />
      {/* Dot Grid Overlay */}
      <div className="absolute inset-0 bg-studio-dots-dark opacity-60 pointer-events-none" />

      {/* Timestamp — top right */}
      <div className="absolute top-24 right-8 lg:right-14 z-20">
        <span className="text-white/40 font-sans text-[11px] tracking-[0.2em] uppercase">{currentTime}</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: Typography */}
        <div className="flex flex-col items-start">
          {/* Label */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block w-8 h-[2px] bg-[#BE1E2D]" />
            <span className="text-[#BE1E2D] font-heading font-bold text-[11px] tracking-[0.25em] uppercase">
              Crafted in Nepal
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="font-heading font-black text-white leading-[1.05] mb-6 uppercase"
            style={{ fontSize: "clamp(2.8rem, 6vw, 6.5rem)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Innovation,{" "}
            <span className="hollow-text-white">डिजिटल</span>
            <br />
            Crafted in{" "}
            <span className="text-[#BE1E2D]">Nepal.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="text-white/70 font-sans text-base lg:text-lg max-w-md mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Rato Topi: Your partners in digital transformation — building fast, secure, and scalable products for ambitious businesses.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="#services" className="btn-primary gap-2">
              Our Services <ArrowRight size={14} />
            </a>
            <a href="#portfolio" className="btn-outline-white">
              View Our Work
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="flex gap-8 mt-14 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "5", label: "Expert Engineers" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-heading font-black text-white text-2xl lg:text-3xl">{stat.value}</span>
                <span className="text-white/50 font-sans text-[11px] tracking-wider uppercase mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Laptop Mockup */}
        <motion.div
          className="relative w-full hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[60%] h-[60%] rounded-full bg-[#BE1E2D]/20 blur-[80px]" />
          </div>

          {/* Laptop frame */}
          <div className="relative w-full max-w-[540px]">
            <img
              src="/laptop.png"
              alt="Rato Topi Dashboard"
              className="w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] relative z-10"
            />

            {/* Dashboard overlay inside screen */}
            <div className="absolute top-[10%] left-[10%] w-[78%] h-[55%] bg-[#0f1117] rounded-md overflow-hidden z-20 shadow-inner border border-white/5">
              {/* Titlebar */}
              <div className="w-full h-7 bg-[#1a1e2e] border-b border-white/5 flex items-center px-3 gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="ml-auto text-[8px] text-white/30 font-sans">Dashboard Overview</span>
              </div>

              {/* Dashboard body */}
              <div className="relative p-3 flex gap-2 h-[calc(100%-1.75rem)]">
                {/* Sidebar */}
                <div className="w-[22%] flex flex-col gap-2 pt-1">
                  <div className="w-6 h-6 rounded bg-[#BE1E2D]/25 flex items-center justify-center mb-2">
                    <img src="/icon-hat.png" alt="" className="w-4 h-4 object-contain" />
                  </div>
                  {[70, 55, 80, 45].map((w, i) => (
                    <div key={i} className="h-1.5 rounded bg-white/10" style={{ width: `${w}%` }} />
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col gap-2 relative">
                  {/* Team Overview card */}
                  <motion.div
                    className="absolute top-0 left-0 bg-white rounded-lg p-2.5 shadow-2xl border border-gray-100 w-[56%] z-30"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.7 }}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[9px] font-heading font-bold text-gray-800">Team Overview</span>
                      <MoreHorizontal size={10} className="text-gray-400" />
                    </div>
                    <div className="flex gap-1.5 mb-2">
                      {["/team/bibek.jpg", "/team/prajwal.jpg", "/team/zubeen.jpg"].map((src, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <img src={src} alt="" className="w-6 h-6 rounded-full object-cover" />
                          <div className="w-5 h-0.5 rounded bg-gray-200" />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 p-1 rounded-md border border-gray-100">
                      <img src="/team/shrawan.jpg" alt="" className="w-4 h-4 rounded-full object-cover" />
                      <div>
                        <div className="text-[7px] font-bold text-gray-700">Active Member</div>
                        <div className="w-12 h-0.5 bg-gray-200 rounded mt-0.5" />
                      </div>
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-green-400" />
                    </div>
                  </motion.div>

                  {/* Data Integration card */}
                  <motion.div
                    className="absolute bottom-0 right-0 bg-[#1e2336] rounded-lg p-2.5 border border-white/10 w-[52%] z-20"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.7 }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[9px] font-medium text-gray-300">Data Integration</span>
                      <TrendingUp size={10} className="text-[#BE1E2D]" />
                    </div>
                    <svg viewBox="0 0 100 30" className="w-full h-10">
                      <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#BE1E2D" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#BE1E2D" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,25 Q15,5 30,15 T60,10 T100,20" fill="none" stroke="#BE1E2D" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="30" cy="15" r="1.5" fill="#BE1E2D" />
                      <circle cx="60" cy="10" r="1.5" fill="#BE1E2D" />
                      <circle cx="100" cy="20" r="1.5" fill="#BE1E2D" />
                    </svg>
                  </motion.div>

                  {/* Cloud badge */}
                  <motion.div
                    className="absolute top-0 right-0 bg-[#1e2336] rounded-lg p-2 border border-white/10 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                  >
                    <div className="text-[7px] text-gray-400 mb-0.5">Cloud Status</div>
                    <div className="text-[7px] text-white bg-[#BE1E2D] rounded px-1.5 py-0.5 font-bold">Deployed ✓</div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Hats on keyboard */}
            <motion.img
              src="/icon-hat.png"
              alt="Rato Topi Hat"
              className="absolute bottom-[18%] left-[26%] w-[11%] z-30 drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0, rotate: -12 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            />
            <motion.img
              src="/icon-hat.png"
              alt="Rato Topi Hat"
              className="absolute bottom-[17%] right-[24%] w-[10%] z-30 drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 14 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-white/30 text-[10px] font-sans tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
