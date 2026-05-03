import { content } from "../data/content";

export default function Footer() {
  const { footer } = content;

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
          <h4 className="font-heading font-black text-sm mb-1 uppercase tracking-wider">{footer.contactLabel}</h4>
          <a href={`https://${footer.contact.website}`} className="text-gray-600 hover:text-accent transition-colors text-xs font-sans">
            {footer.contact.website}
          </a>
          <a href={`tel:${footer.contact.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-accent transition-colors text-xs font-sans">
            {footer.contact.phone}
          </a>
        </div>

        {/* Right: Socials */}
        <div className="flex flex-col items-start md:items-end justify-center gap-2">
          <h4 className="font-heading font-black text-sm mb-1 uppercase tracking-wider text-left md:text-right">{footer.socialLabel}</h4>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {footer.socials.map((social, i) => (
              <a 
                key={i}
                href={social.link} 
                className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors text-xs font-sans"
              >
                <social.icon size={12} />
                <span>{social.handle}</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="w-full text-center mt-16 text-gray-400 font-mono text-xs uppercase tracking-widest pt-8 max-w-7xl mx-auto px-6 border-t border-gray-50">
        &copy; {new Date().getFullYear()} {footer.copyright}
      </div>

    </footer>
  );
}

