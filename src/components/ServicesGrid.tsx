import { motion } from "framer-motion";
import { Cloud, Globe, ShieldCheck, BarChart3 } from "lucide-react";

const services = [
  {
    id: 1,
    title: "CLOUD\nSOLUTIONS",
    icon: Cloud,
  },
  {
    id: 2,
    title: "GLOBAL SOFTWARE\nDEVELOPMENT",
    icon: Globe,
  },
  {
    id: 3,
    title: "CYBERSECURITY &\nNETWORK DEPLOYMENT",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "DATA ANALYTICS\n& INSIGHTS",
    icon: BarChart3,
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 bg-white flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 -mt-24 lg:-mt-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative bg-white rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 flex flex-col items-start overflow-hidden h-64 md:h-72"
            >
              {/* Icon */}
              <div className="mb-6 text-black">
                <service.icon size={40} strokeWidth={1} />
              </div>

              {/* Title */}
              <h3 className="font-heading font-black text-[#c82021] text-sm tracking-wide leading-tight whitespace-pre-line relative z-10">
                {service.title}
              </h3>

              {/* Watermark Hat */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-[0.08] pointer-events-none">
                <img src="/icon-hat.png" alt="Watermark" className="w-full h-full object-contain" style={{ filter: "sepia(1) hue-rotate(-50deg) saturate(5) opacity(0.3)" }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
