import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading font-black text-5xl mb-8">About Us.</h2>
          <p className="text-gray-600 font-sans text-lg mb-6 leading-relaxed">
            We are a collective of passionate engineers, designers, and strategists. 
            Our mission is to build digital products that are not only highly functional 
            but also beautiful and intuitive. We believe in precision, scalability, and 
            user-centric design.
          </p>
          <p className="text-gray-600 font-sans text-lg mb-10 leading-relaxed">
            Every project is treated as an engineering challenge that requires the utmost care, ensuring the final output is robust, resilient, and ready to scale.
          </p>
          <a href="#team" className="inline-block border-b-2 border-[#c82021] pb-1 text-[#c82021] font-bold text-sm uppercase tracking-widest hover:text-black hover:border-black transition-colors">
            Meet the Team &rarr;
          </a>
        </motion.div>
        <motion.div
          className="relative h-[500px] w-full bg-gray-100 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Landscape imagery placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
             <span className="text-gray-400 font-medium uppercase tracking-widest">Studio / Workspace</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
