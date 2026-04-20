"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleFocus = (name: string) => setFocusedInput(name);
  const handleBlur = () => setFocusedInput(null);

  return (
    <section id="contact" className="w-full py-32 border-t border-divider bg-white">
      <div className="max-w-4xl mx-auto px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="font-heading font-black text-5xl mb-4">Let&apos;s talk.</h2>
          <p className="font-sans text-foreground/60 text-lg">No unnecessary details, just the essentials.</p>
        </motion.div>

        <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col md:flex-row gap-12 w-full">
            <div className="w-full relative">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onFocus={() => handleFocus("name")}
                onBlur={handleBlur}
                className="w-full bg-transparent outline-none py-2 text-xl font-heading placeholder:text-foreground/30 transition-colors border-b-2"
                style={{
                  borderBottomColor: focusedInput === "name" ? "var(--accent)" : "var(--foreground)",
                }}
              />
            </div>
            <div className="w-full relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                className="w-full bg-transparent outline-none py-2 text-xl font-heading placeholder:text-foreground/30 transition-colors border-b-2"
                style={{
                  borderBottomColor: focusedInput === "email" ? "var(--accent)" : "var(--foreground)",
                }}
              />
            </div>
          </div>
          <div className="w-full relative h-[100px]">
             <textarea
                name="message"
                placeholder="Message"
                onFocus={() => handleFocus("message")}
                onBlur={handleBlur}
                className="w-full h-full resize-none bg-transparent outline-none py-2 text-xl font-heading placeholder:text-foreground/30 transition-colors border-b-2"
                style={{
                  borderBottomColor: focusedInput === "message" ? "var(--accent)" : "var(--foreground)",
                }}
              />
          </div>

          <div className="flex justify-end mt-8">
            <motion.button
              className="bg-foreground text-white font-heading font-bold text-lg px-12 py-4 hover:bg-accent transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SEND INQUIRY
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}
