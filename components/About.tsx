import Image from "next/image";
import { about } from "@/lib/copy/about";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="reveal relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/founder-placeholder.png"
                alt="Stu Golden, founder of Buzz Kill Mosquito Solutions"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-amber rounded-2xl p-5 shadow-lg hidden md:block">
              <p className="font-display font-black text-charcoal text-3xl leading-none">30+</p>
              <p className="text-charcoal text-xs font-semibold mt-1">years of service<br />experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="reveal reveal-delay-2">
            <span className="text-forest text-sm font-semibold tracking-widest uppercase">Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-charcoal mt-3 mb-6">
              {about.headline}
            </h2>
            <div className="flex flex-col gap-4 mb-8">
              {about.body.map((paragraph, i) => (
                <p key={i} className="text-slate-500 leading-relaxed">{paragraph}</p>
              ))}
            </div>

            {/* Credentials */}
            <ul className="flex flex-col gap-3 mb-8">
              {about.credentials.map((cred, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-forest flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-charcoal text-sm font-medium">{cred}</span>
                </li>
              ))}
            </ul>

            <a
              href={about.cta.href}
              className="inline-block bg-forest text-white font-bold px-8 py-4 rounded-full hover:bg-amber hover:text-charcoal transition-all duration-200"
            >
              {about.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
