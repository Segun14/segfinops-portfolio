const footerLinks = [
  ["Work", "#work"],
  ["Founder", "#founder"],
  ["Story", "#story"],
  ["Capabilities", "#services"],
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050a14] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:px-10">
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-black text-white">Segun Odunlade</p>
            <p className="mt-1 text-sm text-slate-500">Senior FP&amp;A · Founder · Finance Systems Builder</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-semibold text-slate-400 transition hover:text-cyan-300">{label}</a>
            ))}
            <a href="https://paidlens.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-400 transition hover:text-cyan-300">PaidLens ↗</a>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Segun Odunlade.</span>
          <span>Product visuals use fictional names and dummy data.</span>
        </div>
      </div>
    </footer>
  );
}
