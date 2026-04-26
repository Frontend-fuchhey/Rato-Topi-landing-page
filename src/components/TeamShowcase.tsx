import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { teamData } from "../data/teamData";

interface TeamProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export default function TeamShowcase({ activeIndex, setActiveIndex }: TeamProps) {
  const handlePortraitClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="team" className="py-24 bg-white flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header Area */}
        <div className="flex justify-between items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-heading font-black text-2xl tracking-wide uppercase"
          >
            TEAM SHOWCASE
          </motion.h2>
          
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-black">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-black">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Team List */}
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-10">
          {teamData.map((member, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={member.id}
                className="relative cursor-pointer flex flex-col items-center group"
                onClick={() => handlePortraitClick(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Slanted Hat Sitting on Corner */}
                {isActive && (
                  <motion.div
                    layoutId="team-hat"
                    className="absolute -top-3 -right-3 rotate-[25deg] w-10 h-10 z-20 pointer-events-none"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <img
                      src="/icon-hat.png"
                      alt="Hat"
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </motion.div>
                )}

                {/* Circular Thumbnail Frame */}
                <div
                  className={`relative overflow-hidden w-32 h-32 rounded-full border-2 p-1 transition-all duration-300 mb-4 ${
                    isActive
                      ? "border-[#c82021] shadow-lg z-10"
                      : "border-gray-100 hover:border-gray-300"
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        isActive ? "grayscale-0" : "grayscale group-hover:grayscale-0"
                      }`}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h4
                    className={`font-heading font-bold text-lg transition-colors duration-300 ${
                      isActive ? "text-[#c82021]" : "text-black"
                    }`}
                  >
                    {member.name}
                  </h4>
                  <p className="font-sans text-gray-500 text-xs mt-1 capitalize">
                    {member.role.split("&")[0].toLowerCase()}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
