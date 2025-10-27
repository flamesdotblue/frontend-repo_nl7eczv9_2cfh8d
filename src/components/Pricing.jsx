import React from "react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$49/mo",
    highlight: false,
    features: [
      "3 clients",
      "Basic bot templates",
      "Client dashboard",
      "Email support",
    ],
    cta: "Start free",
  },
  {
    name: "Pro",
    price: "$199/mo",
    highlight: true,
    features: [
      "15 clients",
      "Custom branding",
      "Analytics & ROI",
      "Priority support",
    ],
    cta: "Upgrade",
  },
  {
    name: "Enterprise",
    price: "$499–$999/mo",
    highlight: false,
    features: [
      "Unlimited clients",
      "White‑label portal",
      "Team roles & SSO",
      "Dedicated success manager",
    ],
    cta: "Contact sales",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Simple, scalable pricing</h2>
          <p className="mt-3 text-slate-600">Choose a plan that fits your agency today and grows with you.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 bg-white shadow-sm ${
                tier.highlight
                  ? "border-indigo-300 ring-2 ring-indigo-200"
                  : "border-slate-200"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow-sm">
                  Most popular
                </div>
              )}

              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <div className="mt-2 text-3xl font-extrabold text-slate-900">{tier.price}</div>

              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-indigo-600">
                      <Check className="h-4 w-4" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus-visible:ring-2 ${
                  tier.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-400"
                    : "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Usage add‑ons available for phone calls, messages, and additional templates.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
