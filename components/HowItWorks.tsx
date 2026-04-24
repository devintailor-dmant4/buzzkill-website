import Image from "next/image";
import { howItWorks } from "@/lib/copy/how-it-works";

const stepImages = [
  { src: "/images/how-it-works/step-1-call.png", alt: "Homeowner calling Buzz Kill for a free estimate" },
  { src: "/images/how-it-works/step-2-treat.png", alt: "Buzz Kill technician treating yard" },
  { src: "/images/how-it-works/step-3-enjoy.png", alt: "Family enjoying a mosquito-free backyard" },
];

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

        <div className="flex flex-col gap-16">
          {howItWorks.steps.map((step, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              style={{ direction: i % 2 === 1 ? "rtl" : "ltr" }}
            >
              {/* Image */}
              <div style={{ direction: "ltr" }} className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src={stepImages[i].src}
                  alt={stepImages[i].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Step badge */}
                <div className="absolute top-4 left-4 w-14 h-14 rounded-full bg-forest flex items-center justify-center shadow-lg">
                  <span className="font-display text-xl font-black text-white">{step.number}</span>
                </div>
              </div>

              {/* Text */}
              <div style={{ direction: "ltr" }} className="flex flex-col justify-center">
                <h3 className="font-display text-2xl md:text-3xl font-black text-charcoal mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 reveal">
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
