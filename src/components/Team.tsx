"use client";

import { motion, Variants } from "framer-motion";


const teamMembers = [
  {
    id: 1,
    name: "Bibek Parajuli",
    role: "Fullstack Developer & Tech Lead",
    bio: "The bridge between complex architecture and seamless deployment. Orchestrating the full technical lifecycle.",
    image: "/team/bibek.jpg",
  },
  {
    id: 2,
    name: "Prajwal Chaudhary",
    role: "Cybersecurity Expert",
    bio: "Guardian of the digital perimeter. Ensuring every solution is built with an uncompromising security-first mindset.",
    image: "/team/prajwal.jpg",
  },
  {
    id: 3,
    name: "Zubeen Khatiwada",
    role: "Backend Developer",
    bio: "Engineer of the unseen. Crafting the robust, high-performance engines that power Rato Topi’s digital solutions.",
    image: "/team/zubeen.jpg",
  },
  {
    id: 4,
    name: "Shrawan Karki",
    role: "Frontend Developer",
    bio: "Architect of the user experience. Transforming complex logic into beautiful, responsive, and high-speed interfaces.",
    image: "/team/shrawan.jpg",
  },
  {
    id: 5,
    name: "Benjip Pokhrel",
    role: "AI/ML Engineer",
    bio: "Innovator in intelligent systems. Integrating cutting-edge machine learning and automation into the core of our tech stack.",
    image: "/team/benjip.jpg",
  },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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

interface TeamProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export default function Team({ activeIndex, setActiveIndex }: TeamProps) {
  return (
    <section id="team" className="w-full py-32 border-t border-divider bg-background">
      <div className="max-w-7xl mx-auto px-8 relative">
        <h2 className="font-heading font-black text-4xl mb-16 text-center">The Power of Five.</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id} 
              variants={childVariant} 
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => {
                setActiveIndex(index);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden bg-divider">
                {activeIndex === index && (
                  <img
                    src="/icon-hat.png"
                    alt="Rato Hat"
                    className="absolute -top-3 -right-3 rotate-[20deg] w-10 h-10 md:w-12 md:h-12 z-20 pointer-events-none"
                  />
                )}
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 ${
                    activeIndex === index ? "grayscale-0 border-2 border-accent" : "grayscale saturate-[1.1]"
                  }`}
                />
              </div>
              <div className="w-full flex items-center justify-between px-1">
                <div>
                  <h4 className={`font-heading font-bold text-lg transition-colors ${activeIndex === index ? "text-accent" : "text-black"}`}>{member.name}</h4>
                  <p className="font-sans text-foreground/60 text-sm">{member.role}</p>
                </div>
                <div className={`w-2.5 h-2.5 rounded-full animate-pulse ${activeIndex === index ? "bg-accent" : "bg-gray-300"}`} title="Active/Online"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
