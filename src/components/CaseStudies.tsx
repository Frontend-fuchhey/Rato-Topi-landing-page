import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Garment FLOW",
    category: "ERP System",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Khaja Ghar",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Sano Bhai",
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2370&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Smart Predict",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2376&auto=format&fit=crop",
  }
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 bg-white flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header Area */}
        <div className="flex justify-between items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-heading font-black text-2xl tracking-wide uppercase"
          >
            CASE STUDIES
          </motion.h2>
          
          <div className="flex gap-2 hidden md:flex">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-black">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-black">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="min-w-[280px] md:min-w-[320px] lg:min-w-[380px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 snap-center relative group"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300 group-hover:bg-black/20" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider mb-2 text-gray-300">
                    {project.category}
                  </span>
                  <h3 className="font-heading font-bold text-xl">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
