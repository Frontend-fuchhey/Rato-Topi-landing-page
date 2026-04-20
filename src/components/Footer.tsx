export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-divider bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-heading font-black text-xl tracking-tighter">
          RATO TOPI<span className="text-accent">.</span>
        </div>
        <div className="font-sans text-sm text-foreground/60 tracking-wider uppercase">
          Built by the Rato Topi Crew &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
