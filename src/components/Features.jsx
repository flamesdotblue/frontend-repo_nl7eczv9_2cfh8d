import React from "react";
import { Users, Plug, CreditCard, BarChart3, Shield, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Client Management",
    description:
      "Add clients, assign bots, and keep activity centralized with logs and notes.",
    icon: Users,
  },
  {
    title: "Bot Integrations",
    description:
      "Connect OpenAI, Vapi, Twilio and more. Ship receptionist, lead gen, and WhatsApp bots.",
    icon: Plug,
  },
  {
    title: "Billing Automation",
    description:
      "Stripe subscriptions, usage-based billing, and branded invoices out of the box.",
    icon: CreditCard,
  },
  {
    title: "Analytics & ROI",
    description:
      "Calls handled, leads generated, costs and ROI per client with clear reporting.",
    icon: BarChart3,
  },
  {
    title: "Client Portal",
    description:
      "Share a white‑label dashboard so clients can view results without your help.",
    icon: Shield,
  },
  {
    title: "Team Access",
    description:
      "Invite teammates and set roles for admins, developers, and support.",
    icon: CheckCircle2,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Everything you need to run an AI agency</h2>
          <p className="mt-3 text-slate-600">
            Centralize operations, accelerate onboarding, automate billing, and prove value with live analytics.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>

        <div id="integrations" className="mt-16 rounded-2xl border border-slate-200 bg-gradient-to-r from-indigo-50 to-violet-50 p-8">
          <h3 className="text-lg font-semibold text-slate-900">Key integrations</h3>
          <p className="mt-1 text-sm text-slate-600">OpenAI, Vapi, Twilio, Stripe, Google Sheets, HubSpot, Notion and more.</p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["OpenAI", "Twilio", "Stripe", "Vercel", "Supabase", "PostHog", "Zapier", "Notion"].map((name) => (
              <div key={name} className="h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 text-sm font-medium">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
