export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#0a1628] text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg text-white mb-3">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-[#2563eb] text-white text-xs font-bold">B</div>
            BlueDot
          </div>
          <p className="text-sm leading-relaxed">
            The leading talent accelerator for beneficial AI and societal resilience.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Courses</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">AGI Strategy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Technical AI Safety</a></li>
            <li><a href="#" className="hover:text-white transition-colors">AI Governance</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Biosecurity</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Rapid Grants</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Career Transition Grants</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} BlueDot Impact. All rights reserved.
      </div>
    </footer>
  );
}
