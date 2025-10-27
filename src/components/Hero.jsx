import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium ring-1 ring-indigo-200">
              <Sparkles className="h-3.5 w-3.5" />
              All‑in‑one platform for AI agencies
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Run your entire AI agency from one dashboard
            </h1>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              Launch bots, manage clients, automate billing, and track ROI — without stitching 10 tools together. The operating system for AI service providers.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3" id="waitlist">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                View pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
              >
                Explore features
              </a>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              <span className="font-medium text-slate-700">Beta timeline:</span> Landing page now • MVP in 45 days
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 via-white to-violet-100" />
              <div className="relative h-full w-full p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-24 rounded-md bg-slate-200" />
                    <div className="h-6 w-6 rounded-full bg-slate-200" />
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="h-24 rounded-lg bg-indigo-200/60" />
                    <div className="h-24 rounded-lg bg-violet-200/60" />
                    <div className="h-24 rounded-lg bg-blue-200/60" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-3 rounded bg-slate-200" />
                  <div className="h-3 rounded bg-slate-200" />
                  <div className="h-3 rounded bg-slate-200" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-indigo-200/60 blur-2xl" />
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-violet-200/60 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
