"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Garment FLOW",
    category: "[WEB DEVELOPMENT]",
    description: "Erp System",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Khaja Ghar",
    category: "[APP DEVELOPMENT]",
    description: "A native iOS experience focusing on behavioral nudges and medical-grade precision in data tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Sano Bhai",
    category: "AI automation",
    description: "A highly resilient backend architecture built to handle real-time tracking for over 10,000 active shipments.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2370&auto=format&fit=crop",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="w-full pt-20 pb-32 border-t border-divider">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-heading font-black text-4xl mb-24">Selected Work.</h2>
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center gap-12 py-16 border-b border-divider ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              <div className="w-full md:w-1/2 overflow-hidden h-[400px]">
                <motion.div
                  className="w-full h-full bg-divider"
                  initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
                  whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover saturate-[1.1] transition-all duration-500 hover:brightness-110 hover:shadow-[0_0_40px_rgba(225,29,46,0.2)]"
                  />
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
                <motion.span
                  className="text-accent font-mono text-sm tracking-widest mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {project.category}
                </motion.span>
                <motion.h3
                  className="font-heading text-3xl font-bold mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-foreground/70 text-lg max-w-md"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {project.description}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
