import { howItWorks } from "@/lib/copy/how-it-works";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-palegreen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-forest text-sm font-semibold tracking-widest uppercase">The Process</span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-charcoal mt-3">
            {howItWorks.headline}
          </h2>
          <p className="text-slate-500 text-lg mt-4">{howItWorks.subheadline}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-0.5 bg-forest/20" />

          {howItWorks.steps.map((step, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center`}>
              <div className="relative z-10 w-24 h-24 rounded-full bg-forest flex items-center justify-center mb-6 shadow-lg">
                <span className="font-display text-2xl font-black text-white">{step.number}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-charcoal mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 reveal">
          <a
            href="#contact"
            className="inline-block bg-forest text-white font-bold text-base px-10 py-4 rounded-full hover:bg-amber hover:text-charcoal transition-all duration-200"
          >
            Get a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
