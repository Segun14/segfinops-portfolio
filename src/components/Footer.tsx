export default function Footer() {
  return (
    <footer className="py-12 bg-bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a
          href="#"
          className="font-[family-name:var(--font-playfair)] text-xl text-accent font-bold tracking-tight"
        >
          segun.
        </a>

        <p className="text-text-muted text-sm text-center md:text-right">
          &copy; 2026 Oluwasegun Odunlade &middot; Built with intention, not
          templates.
        </p>
      </div>
    </footer>
  );
}
