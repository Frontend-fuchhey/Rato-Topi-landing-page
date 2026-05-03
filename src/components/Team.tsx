"use client";

import { motion, Variants } from "framer-motion";
import { content } from "../data/content";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const childVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
    } 
  },
};

export default function Team() {
  return (
    <section id="team" className="w-full py-32 border-t border-divider bg-background">
      <div className="max-w-7xl mx-auto px-8 relative">
        <h2 className="font-heading font-black text-5xl mb-20 text-center">Team Showcase.</h2>

        <motion.div
          className="flex flex-wrap justify-center gap-12 lg:gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {content.team.members.map((member) => (
            <motion.div 
              key={member.id} 
              variants={childVariant} 
              className="flex flex-col items-center group w-48"
            >
              <div className="relative w-40 h-40 mb-6 rounded-full overflow-visible">
                {/* Red Hat appears on hover */}
                <img
                  src="/icon-hat.png"
                  alt="Rato Hat"
                  className="absolute -top-6 -right-4 rotate-[20deg] w-14 h-14 z-20 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 ease-out drop-shadow-md"
                />
                
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-transparent group-hover:border-accent transition-all duration-300 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-heading font-bold text-xl text-black group-hover:text-accent transition-colors">{member.name}</h4>
                <p className="font-sans text-foreground/60 text-sm mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
