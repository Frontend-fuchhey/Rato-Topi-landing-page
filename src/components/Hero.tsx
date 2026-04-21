import { useState, useEffect } from "react";
import { motion, AnimatePresence, Transition } from "framer-motion";

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

interface HeroProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export default function Hero({ activeIndex, setActiveIndex }: HeroProps) {
  const [displayIndex, setDisplayIndex] = useState(activeIndex);
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (activeIndex !== displayIndex) {
      setIsAnimating(true);
    }
  }, [activeIndex]);

  const handlePortraitClick = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  const customEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

  const glideTransition: Transition = {
    layout: { duration: 0.7, ease: customEase },
    y: { duration: 0.7, ease: customEase },
  };

  if (!isMounted) return <div className="h-screen bg-white" />;

  return (
    <motion.section
      id="hero"
      className="relative h-screen max-h-screen overflow-hidden flex flex-col justify-between py-4 px-12 lg:px-20 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-red-100/20 blur-[100px] rounded-full z-0 translate-x-1/3" />

      {/* Middle Section: Split Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center flex-grow pt-14 px-4 overflow-hidden">

        {/* Left Side: Typography */}
        <div className="text-left flex flex-col items-start translate-y-[-10px]">
          <motion.h1
            className="font-heading font-black text-4xl lg:text-6xl leading-[1.1] text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Engineering
            <span className="text-accent font-mukta font-size-34">डिजिटल</span><br />
            Precision<span className="text-accent">.</span>
          </motion.h1>

          <p className="text-gray-500 font-sans text-xs lg:text-sm max-w-sm mb-6 leading-relaxed">
            We build fast, scalable and user-centric digital products that solve complex engineering problems for leading businesses and startups.
          </p>

          <div className="flex flex-row items-center gap-4">
            <button className="bg-accent text-white px-5 py-2.5 rounded-full font-heading font-bold tracking-[1px] text-[12px] hover:bg-black transition-all duration-300 shadow-lg active:scale-95">
              START A PROJECT
            </button>
            <button className="bg-white text-black border border-gray-200 px-5 py-2.5 rounded-full font-heading font-bold tracking-[1px] text-[12px] hover:border-black transition-all duration-300 active:scale-95">
              VIEW OUR WORK
            </button>
          </div>
        </div>

        {/* Right Side: Compact Bio Card */}
        <div className="hidden lg:flex justify-end items-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayIndex}
              className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-50 flex flex-row items-center gap-6 overflow-hidden w-full max-w-sm ml-auto"
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Card Left: Info */}
              <div className="flex-1 flex flex-col items-start z-10">
                <div className="text-accent font-mono text-[10px] uppercase tracking-[0.35em] font-bold mb-3">
                  {teamData[displayIndex].role}
                </div>
                <h3 className="font-heading font-black text-xl lg:text-2xl text-black mb-4 tracking-tight">
                  {teamData[displayIndex].name}
                </h3>
                <p className="text-gray-400 font-sans text-[13px] leading-relaxed max-w-[150px]">
                  {teamData[displayIndex].bio}
                </p>
              </div>

              {/* Card Right: Compact Image */}
              <div className="relative flex-shrink-0 z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/5 rounded-full z-0" />
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                  <img
                    src={teamData[displayIndex].image}
                    alt={teamData[displayIndex].name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Section: Thumbnails */}
      <div className="w-full mt-auto pb-6 z-40 flex flex-col items-center">
        <div className="flex items-end justify-center gap-4 md:gap-8">
          {teamData.map((member, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={member.id}
                className="relative cursor-pointer group"
                onClick={() => handlePortraitClick(index)}
              >
                {/* Slanted Hat Sitting on Corner */}
                {isActive && (
                  <motion.div
                    layoutId="small-hat"
                    className="absolute -top-2 -right-2 rotate-[15deg] w-8 h-8 z-50 pointer-events-none"
                    initial={false}
                    animate={{
                      y: isAnimating ? [0, -10, 0] : 0,
                    }}
                    onAnimationComplete={() => {
                      if (isAnimating) {
                        setIsAnimating(false);
                        setDisplayIndex(activeIndex);
                      }
                    }}
                    transition={glideTransition}
                  >
                    <img
                      src="/icon-hat.png"
                      alt="Hat"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                )}

                {/* Thumbnail Frame */}
                <div
                  className={`relative overflow-hidden w-24 h-32 lg:w-32 lg:h-44 border-2 transition-all duration-500 rounded-xl ${isActive ? "border-accent scale-105 shadow-lg" : "border-transparent opacity-40 hover:opacity-100"
                    }`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
