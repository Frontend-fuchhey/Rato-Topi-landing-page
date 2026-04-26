import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamData } from "../data/teamData";

export default function Hero({ activeIndex = 0 }: { activeIndex?: number }) {
  const [displayIndex, setDisplayIndex] = useState(activeIndex);
  const [isMounted, setIsMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setIsMounted(true);
    setDisplayIndex(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
      const datePart = now.toLocaleDateString('en-US', options);
      const timePart = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
      setCurrentTime(`${datePart}\n${timePart}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return <div className="h-screen" />;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-20 pb-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-red-100/30 blur-[120px] rounded-full z-0 translate-x-1/3" />

      {/* Top Right Timestamp */}
      <div className="absolute top-24 right-12 lg:right-20 z-20 flex flex-col items-end text-right">
        <span className="text-gray-400 font-sans text-sm">{currentTime.split('\n')[0]}</span>
        <span className="text-gray-400 font-sans text-4xl lg:text-5xl font-light">{currentTime.split('\n')[1]}</span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center z-10 pt-20">
        {/* Left Side: Typography */}
        <div className="text-left flex flex-col items-start">
          <motion.h1
            className="font-heading font-black text-5xl lg:text-7xl leading-[1.1] text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Engineering
            <span
              className="font-mukta text-6xl lg:text-8xl inline-block translate-y-1"
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px black",
              }}
            >
              डिजिटल
            </span>
            <br />
            Solutions with<br />
            Precision<span className="text-[#c82021]">.</span>
          </motion.h1>

          <p className="text-gray-500 font-sans text-sm lg:text-base max-w-md mb-8 leading-relaxed">
            We build fast, scalable and user-centric digital products that solve complex engineering problems for leading businesses and startups.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#c82021] text-white px-8 py-3 rounded-full font-bold text-sm hover:brightness-110 transition-all">
              START A PROJECT
            </button>
            <button className="border border-gray-200 text-gray-900 px-8 py-3 rounded-full font-bold text-sm bg-white hover:bg-gray-50 transition-all">
              VIEW OUR WORK
            </button>
          </div>
        </div>

        {/* Right Side: Selected Member Card goes here */}
        <div className="hidden lg:flex justify-end items-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayIndex}
              className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-row items-center gap-8 overflow-hidden w-full max-w-lg ml-auto"
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Card Left: Info */}
              <div className="flex-1 flex flex-col items-start z-10">
                <div className="text-[#c82021] font-mono text-[10px] uppercase tracking-[0.35em] font-bold mb-3">
                  {teamData[displayIndex].role}
                </div>
                <h3 className="font-heading font-black text-2xl lg:text-3xl text-black mb-4 tracking-tight">
                  {teamData[displayIndex].name}
                </h3>
                <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-[200px]">
                  {teamData[displayIndex].bio}
                </p>
              </div>

              {/* Card Right: Compact Image */}
              <div className="relative flex-shrink-0 z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-gray-50 rounded-full z-0" />
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={teamData[displayIndex].image}
                    alt={teamData[displayIndex].name}
                    className="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
