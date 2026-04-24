import Image from "next/image";
import { services } from "@/lib/copy/services";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-forest text-sm font-semibold tracking-widest uppercase">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-charcoal mt-3">
            Full Protection. All Season.
          </h2>
          <p className="text-slate-500 text-lg mt-4 max-w-xl mx-auto">
            From mosquitoes to ticks to special events — we keep pests out so you can enjoy every inch of your property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group`}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-charcoal mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
