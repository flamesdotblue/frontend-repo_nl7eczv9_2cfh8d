import { Rocket } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold text-slate-900 tracking-tight">AgencyOS</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#integrations" className="hover:text-slate-900 transition-colors">Integrations</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Join waitlist
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
