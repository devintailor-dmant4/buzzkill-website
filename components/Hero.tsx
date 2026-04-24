import Image from "next/image";
import { hero } from "@/lib/copy/hero";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero/hero.png"
        alt="Family enjoying a mosquito-free backyard"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/55" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="max-w-2xl">
          <span className="inline-block text-amber text-sm font-semibold tracking-widest uppercase mb-4">
            {hero.eyebrow}
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            {hero.headline}
          </h1>
          <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            {hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={hero.cta1.href}
              className="bg-amber text-charcoal font-bold text-base px-8 py-4 rounded-full hover:bg-white transition-all duration-200 text-center"
            >
              {hero.cta1.label}
            </a>
            <a
              href={hero.cta2.href}
              className="border-2 border-white text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white hover:text-charcoal transition-all duration-200 text-center"
            >
              {hero.cta2.label}
            </a>
          </div>
          <p className="mt-6 text-white/70 text-sm">
            Or call us directly:{" "}
            <a href={`tel:${hero.phone.replace(/-/g, "")}`} className="text-amber font-semibold hover:underline">
              {hero.phone}
            </a>
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-offwhite to-transparent" />
    </section>
  );
}
