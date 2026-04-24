import { ctas } from "@/lib/copy/ctas";

export default function FinalCTA() {
  const { finalCta } = ctas;
  return (
    <section className="py-24 bg-forest">
      <div className="max-w-4xl mx-auto px-6 text-center reveal">
        <h2 className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-4">
          {finalCta.headline}
        </h2>
        <p className="text-white/75 text-lg mb-10">{finalCta.subheadline}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={finalCta.cta1.href}
            className="bg-amber text-charcoal font-bold text-base px-10 py-4 rounded-full hover:bg-white transition-all duration-200"
          >
            {finalCta.cta1.label}
          </a>
          <a
            href={finalCta.cta2.href}
            className="border-2 border-white text-white font-semibold text-base px-10 py-4 rounded-full hover:bg-white hover:text-charcoal transition-all duration-200"
          >
            {finalCta.cta2.label}
          </a>
        </div>
      </div>
    </section>
  );
}
