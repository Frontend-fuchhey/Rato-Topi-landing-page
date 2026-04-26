import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="flex flex-col items-start text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-heading font-black text-2xl tracking-wide uppercase mb-4"
            >
              ABOUT US
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-3xl md:text-4xl text-black mb-6 leading-[1.2]"
            >
              Our team leads the IT sector<br />
              and stays with character.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-700 text-base md:text-lg leading-[1.6] max-w-lg font-sans"
            >
              Rato Topi IT Team energizes every business: serving today to make a more connected world. We navigate through the complexities. The solution is innovation, professional experts, and potential experience.
            </motion.p>
          </div>

          {/* Right: Group Photo Placeholder */}
          <div className="relative flex justify-center items-center w-full h-[300px] md:h-[400px] lg:h-[500px]">
            {/* Red Decorative Circle */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-[#c82021]/15 rounded-full blur-3xl z-0"
            />
            
            {/* Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 w-full h-full rounded-xl overflow-hidden shadow-none bg-transparent"
            >
              {/* Note: The user requested a group photo. We'll use a landscape unsplash placeholder here instead of portrait */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2370&auto=format&fit=crop"
                alt="Group Photo Placeholder"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
