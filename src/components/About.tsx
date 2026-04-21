"use client";

import { motion } from "framer-motion";
import { Code, Shield, Cpu, Plus } from "lucide-react";
import { useState } from "react";

const expertise = [
  {
    icon: Code,
    title: "Software Architecture",
    description: "Building scalable, clean-code foundations that last.",
  },
  {
    icon: Shield,
    title: "Security & Integrity",
    description: "Protecting digital assets with a cybersecurity-first mindset.",
  },
  {
    icon: Cpu,
    title: "Intelligent Systems",
    description: "Integrating AI/ML to automate and optimize complex workflows.",
  },
];

const offerings = [
  "Full-Stack Product Development",
  "UX/UI Engineering & Prototyping",
  "Custom App & software development",
  "Cybersecurity Audits & Implementation",
  "Backend Engine Optimization",
];

export default function About() {
  const [hoveredOffering, setHoveredOffering] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="relative w-full py-32 bg-white overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      {/* Precision Axis (Vertical Line) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#F0F0F0] -translate-x-1/2 hidden lg:block z-0" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        {/* Part 1: Who Are We? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-start">
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent font-mono text-[18px] font-bold tracking-[0.3em] uppercase"
            >
              01 // About US...
            </motion.span><br />
          </div>

          <div className="lg:col-span-8">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="outline-header font-heading font-black text-[3rem] mb-2 leading-tight"
            >
              Hami ko hau??
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading font-black text-4xl md:text-5xl text-black mb-10 leading-[1.1]"
            >
              We are a precision-driven <br /> engineering studio.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-foreground/70 text-lg md:text-xl leading-[1.6] max-w-2xl font-sans"
            >
              Rato Topi is a specialized collective of five engineers. We formed this studio to bridge the gap between high-level architectural logic and human-centric digital experiences. Our name, the &quot;Red Hat&quot;, symbolizes leadership, technical mastery, and our commitment to the Nepalese tech ecosystem.
            </motion.p>
          </div>
        </div>

        {/* Part 2: What We Do? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-4 hidden lg:block" />
          <div className="lg:col-span-8">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="outline-header font-heading font-black text-[3rem] mb-4 text-left"
            >
              Hami k garxau??
            </motion.h3>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-40">
          <div className="lg:col-span-4 hidden lg:block" />
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {expertise.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-start"
              >
                <div className="mb-6 text-accent">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-xl text-black mb-4 uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-foreground/60 leading-[1.6] text-sm md:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 3: What We Offer? */}
        <div className="pt-20 border-t border-[#F0F0F0]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-accent font-mono text-[18px] font-bold tracking-[0.3em] uppercase"
              >
                02 // OUR Services
              </motion.span>
            </div>
            <div className="lg:col-span-8 flex flex-col">
              {offerings.map((offering, idx) => (
                <motion.div
                  key={offering}
                  onMouseEnter={() => setHoveredOffering(idx)}
                  onMouseLeave={() => setHoveredOffering(null)}
                  className="group relative border-b border-[#F5F5F5] py-8 cursor-pointer flex items-center justify-between"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[10px] text-[#A0A0A0] transition-colors group-hover:text-accent">
                      {(idx + 1).toString().padStart(2, '0')}.
                    </span>
                    <h4 className={`font-heading font-bold text-2xl md:text-3xl transition-colors duration-300 ${hoveredOffering === idx ? "text-accent" : "text-black"}`}>
                      {offering}
                    </h4>
                  </div>
                  <motion.div
                    animate={{
                      rotate: hoveredOffering === idx ? 90 : 0,
                      scale: hoveredOffering === idx ? 1.2 : 1,
                      color: hoveredOffering === idx ? "#E11D2E" : "#D1D1D1"
                    }}
                  >
                    <Plus size={24} strokeWidth={1.5} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Part 4: Mission Statement (Relocated to bottom) */}
        <div className="mt-24 pt-20 border-t border-[#F0F0F0]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 hidden lg:block" />
            <div className="lg:col-span-8">
              <motion.h3 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="outline-header font-heading font-black text-[3rem] mb-2 text-left"
              >
                Hamro Mission
              </motion.h3>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-heading font-black text-4xl md:text-5xl text-black tracking-[-0.01em] mb-2"
              >
                Digitalize Nepal For Real
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-sans text-[#666666] text-sm md:text-base font-light tracking-wide pt-2"
              >
                Harek samasya ko digital samadhan hunxa nai hunxa
              </motion.p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
