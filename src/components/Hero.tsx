"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Transition } from "framer-motion";
import Image from "next/image";

const teamData = [
  {
    id: 1,
    name: "Bibek Parajuli",
    role: "Fullstack Developer & Tech Lead",
    bio: "The bridge between complex architecture and seamless deployment. Orchestrating the full technical lifecycle.",
    image: "/team/bibek.jpg",
  },
  {
    id: 2,
    name: "Prajwal Chaudhary",
    role: "Cybersecurity Expert",
    bio: "Guardian of the digital perimeter. Ensuring every solution is built with an uncompromising security-first mindset.",
    image: "/team/prajwal.jpg",
  },
  {
    id: 3,
    name: "Zubeen Khatiwada",
    role: "Backend Developer",
    bio: "Engineer of the unseen. Crafting the robust, high-performance engines that power Rato Topi’s digital solutions.",
    image: "/team/zubeen.jpg",
  },
  {
    id: 4,
    name: "Shrawan Karki",
    role: "Frontend Developer",
    bio: "Architect of the user experience. Transforming complex logic into beautiful, responsive, and high-speed interfaces.",
    image: "/team/shrawan.jpg",
  },
  {
    id: 5,
    name: "Benjip Pokhrel",
    role: "AI/ML Engineer",
    bio: "Innovator in intelligent systems. Integrating cutting-edge machine learning and automation into the core of our tech stack.",
    image: "/team/benjip.jpg",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Picks a random member on page load
    const randomIdx = Math.floor(Math.random() * teamData.length);
    setActiveIndex(randomIdx);
    setDisplayIndex(randomIdx);
  }, []);

  const handlePortraitClick = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setIsAnimating(true);
  };

  const customEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

  const glideTransition: Transition = {
    layout: { duration: 0.7, ease: customEase },
    y: { duration: 0.7, ease: customEase },
  };

  const slotSize = 180;
  const inactiveScale = 0.85;

  if (!isMounted) return <div className="min-h-screen bg-white" />;

  return (
    <motion.section
      id="hero"
      className="relative w-full min-h-screen pt-[70px] pb-32 overflow-hidden bg-white flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{
        backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12 flex-1 relative z-20">

        {/* Left Col: Headline */}
        <div className="w-full md:w-[60%] flex flex-col items-start justify-center pr-8">
          <motion.h1
            className="font-heading font-black text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-black text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Engineering <span className="glossy-text">डिजिटल</span>
            <br />
            Solutions with <span className="text-black relative inline-block">
              Precision.
              <div className="absolute left-0 right-0 bottom-[1px] h-[2px] bg-accent z-[-1]" />
            </span>
          </motion.h1>

          <motion.button
            className="bg-black text-white px-6 py-[10px] rounded-[2px] font-heading font-medium tracking-[1px] text-[13px] hover:bg-accent transition-colors duration-300 mt-8 w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            START A PROJECT
          </motion.button>
        </div>

        {/* Right Col: Info Card */}
        <div className="w-full md:w-[40%] flex justify-center lg:justify-end items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayIndex}
              className="w-full max-w-sm bg-white border border-[#EDEDED] shadow-sm rounded-sm p-8 flex flex-col justify-center min-h-[220px]"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={glideTransition}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-accent font-mono text-[11px] uppercase tracking-widest font-bold block pb-3"
              >
                {teamData[displayIndex].role}
              </motion.span>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-heading font-black text-4xl text-black mb-4 tracking-tighter"
              >
                {teamData[displayIndex].name}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#4A4A4A] font-sans text-sm leading-[1.6]"
              >
                {teamData[displayIndex].bio}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Team Dock: Fixed Geometric Grid */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full flex items-center justify-center z-40">
        <div className="flex items-end justify-center gap-6">
          {teamData.map((member, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={member.id}
                className="relative flex items-center justify-center"
                style={{ width: slotSize, height: slotSize }}
              >
                {/* Rato Hat: Perched on TOP-RIGHT Corner */}
                {isActive && (
                  <motion.div
                    layoutId="brand-hat"
                    className="absolute -top-[15px] -right-[15px] z-50 pointer-events-none"
                    initial={false}
                    animate={{
                      y: isAnimating ? [0, -25, 0] : 0, // Subtle arc lift
                      rotate: 15, // Constant 15-degree clockwise tilt
                    }}
                    onAnimationComplete={() => {
                      if (isAnimating) {
                        setIsAnimating(false);
                        setDisplayIndex(activeIndex); // Update Card when hat lands
                      }
                    }}
                    transition={glideTransition}
                  >
                    <Image
                      src="/icon-hat.png"
                      alt="Rato Hat"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </motion.div>
                )}

                {/* Active Frame Highlight (Rato Red #E11D2E) */}
                {isActive && (
                  <motion.div
                    layoutId="active-frame"
                    className="absolute border-2 border-accent z-10 pointer-events-none"
                    initial={false}
                    animate={{
                      opacity: isAnimating ? 0.2 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ width: slotSize, height: slotSize }}
                  />
                )}

                {/* Portrait Frame */}
                <motion.div
                  className="cursor-pointer bg-white flex items-center justify-center shadow-md overflow-hidden box-border relative z-0"
                  onClick={() => handlePortraitClick(index)}
                  animate={{
                    width: isActive ? slotSize : slotSize * inactiveScale,
                    height: isActive ? slotSize : slotSize * inactiveScale,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top pointer-events-none"
                    animate={{
                      filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                      opacity: isActive ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
