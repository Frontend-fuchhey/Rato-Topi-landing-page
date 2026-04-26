import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="w-full py-16 border-t border-gray-100 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Left: Logo */}
        <div className="flex flex-col items-start justify-center">
          <a href="#hero" className="mb-4">
            <img src="/logo.png" alt="Rato Topi Logo" className="h-8 w-auto object-contain" />
          </a>
        </div>

        {/* Center: Contact Info */}
        <div className="flex flex-col items-start justify-center gap-1">
          <h4 className="font-heading font-black text-sm mb-1 uppercase tracking-wider">Contact</h4>
          <a href="https://www.ratotopi.com" className="text-gray-600 hover:text-accent transition-colors text-xs font-sans">
            www.ratotopi.com
          </a>
          <a href="tel:+9779800000000" className="text-gray-600 hover:text-accent transition-colors text-xs font-sans">
            +4123 254 5587
          </a>
        </div>

        {/* Right: Socials */}
        <div className="flex flex-col items-start md:items-end justify-center gap-2">
          <h4 className="font-heading font-black text-sm mb-1 uppercase tracking-wider text-left md:text-right">Social Media</h4>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors text-xs font-sans">
              <Facebook size={12} />
              <span>@rato_topi_io</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors text-xs font-sans">
              <Instagram size={12} />
              <span>@rato_topi</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors text-xs font-sans">
              <Youtube size={12} />
              <span>@rato_topi</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors text-xs font-sans">
              <Twitter size={12} />
              <span>@rato_topi</span>
            </a>
          </div>
        </div>

      </div>

      <div className="w-full text-center mt-16 text-gray-400 font-mono text-xs uppercase tracking-widest pt-8 max-w-7xl mx-auto px-6 border-t border-gray-50">
        &copy; {new Date().getFullYear()} Rato Topi IT Team
      </div>
    </footer>
  );
}
