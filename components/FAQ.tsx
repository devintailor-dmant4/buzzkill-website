"use client";
import { useState } from "react";
import { faq } from "@/lib/copy/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-offwhite">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-forest text-sm font-semibold tracking-widest uppercase">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-charcoal mt-3">
            {faq.headline}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faq.items.map((item, i) => (
            <div
              key={i}
              className="reveal bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-palegreen transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-display font-bold text-charcoal text-base pr-4">{item.question}</span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-forest flex items-center justify-center transition-transform duration-200 ${openIndex === i ? "rotate-45" : ""}`}>
                  <svg className="w-3 h-3 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-500 text-sm leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
