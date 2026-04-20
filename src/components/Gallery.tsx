"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section 
      id="gallery" 
      className="relative w-full min-h-[60vh] flex items-center justify-center bg-transparent overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="font-heading font-light text-[#CCCCCC] text-2xl tracking-[0.2em] uppercase">
          // Gallery Under Construction
        </h2>
      </motion.div>
    </section>
  );
}
