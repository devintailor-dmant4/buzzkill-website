"use client";
import { useState } from "react";
import { ctas } from "@/lib/copy/ctas";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with actual form handler (Formspree, Resend, etc.)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div className="reveal">
            <span className="text-forest text-sm font-semibold tracking-widest uppercase">Get Started</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-charcoal mt-3 mb-6">
              Free Estimate.<br />No Obligation.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Tell us about your property and we&apos;ll get back to you with a no-pressure estimate. Prefer to talk? Stu picks up the phone himself.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${ctas.footer.phone.replace(/-/g, "")}`}
                className="flex items-center gap-3 text-charcoal font-semibold hover:text-forest transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-palegreen flex items-center justify-center text-forest text-lg">📞</span>
                {ctas.footer.phone}
              </a>
              <a
                href={`mailto:${ctas.footer.email}`}
                className="flex items-center gap-3 text-charcoal font-semibold hover:text-forest transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-palegreen flex items-center justify-center text-forest text-lg">✉️</span>
                {ctas.footer.email}
              </a>
              <div className="flex items-center gap-3 text-slate-500">
                <span className="w-10 h-10 rounded-full bg-palegreen flex items-center justify-center text-forest text-lg">🕐</span>
                {ctas.footer.hours}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal reveal-delay-2">
            {submitted ? (
              <div className="bg-palegreen rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display text-2xl font-bold text-charcoal mb-2">We&apos;ll be in touch!</h3>
                <p className="text-slate-500">Expect a call or email within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-offwhite rounded-2xl p-8 flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">First Name</label>
                    <input required type="text" placeholder="John" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-charcoal text-sm focus:outline-none focus:border-forest transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Last Name</label>
                    <input required type="text" placeholder="Smith" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-charcoal text-sm focus:outline-none focus:border-forest transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Phone Number</label>
                  <input required type="tel" placeholder="(224) 000-0000" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-charcoal text-sm focus:outline-none focus:border-forest transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Email</label>
                  <input required type="email" placeholder="john@example.com" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-charcoal text-sm focus:outline-none focus:border-forest transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">City / Neighborhood</label>
                  <input type="text" placeholder="Buffalo Grove, Schaumburg..." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-charcoal text-sm focus:outline-none focus:border-forest transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Service Type</label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-charcoal text-sm focus:outline-none focus:border-forest transition-colors bg-white">
                    <option value="">Select a service...</option>
                    <option>Seasonal Program</option>
                    <option>One-Time Event Treatment</option>
                    <option>Mosquito Control</option>
                    <option>Tick Control</option>
                    <option>Flea Control</option>
                    <option>Commercial Property</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Message (optional)</label>
                  <textarea rows={3} placeholder="Tell us about your yard or event..." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-charcoal text-sm focus:outline-none focus:border-forest transition-colors resize-none" />
                </div>
                <button
                  type="submit"
                  className="bg-forest text-white font-bold text-base py-4 rounded-full hover:bg-amber hover:text-charcoal transition-all duration-200"
                >
                  Request My Free Estimate
                </button>
                <p className="text-xs text-center text-slate-400">No spam. No obligation. We&apos;ll call you to schedule.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
