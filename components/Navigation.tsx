"use client";
import { useState, useEffect } from "react";
import { ctas } from "@/lib/copy/ctas";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-3" : "bg-black/20 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className={`text-3xl font-black tracking-tight font-display drop-shadow-lg ${
              scrolled ? "text-forest" : "text-white"
            }`}>
              BUZZ<span className="text-amber">KILL</span>
            </span>
            <span className={`text-xs font-medium hidden sm:block drop-shadow-md ${
              scrolled ? "text-slate-500" : "text-white"
            }`}>
              Mosquito Solutions
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {ctas.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors drop-shadow-md hover:text-amber ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${ctas.footer.phone.replace(/-/g, "")}`}
              className={`text-sm font-semibold drop-shadow-md hover:text-amber transition-colors ${
                scrolled ? "text-forest" : "text-white"
              }`}
            >
              {ctas.footer.phone}
            </a>
            <a
              href={ctas.nav.cta.href}
              className={`text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 ${
                scrolled
                  ? "bg-forest text-white hover:bg-amber hover:text-charcoal"
                  : "bg-amber text-charcoal hover:bg-white hover:text-forest"
              }`}
            >
              {ctas.nav.cta.label}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all drop-shadow-md ${
              open ? "rotate-45 translate-y-2 bg-charcoal" : scrolled ? "bg-charcoal" : "bg-white"
            }`} />
            <span className={`block w-6 h-0.5 transition-all drop-shadow-md ${
              open ? "opacity-0" : scrolled ? "bg-charcoal" : "bg-white"
            }`} />
            <span className={`block w-6 h-0.5 transition-all drop-shadow-md ${
              open ? "-rotate-45 -translate-y-2 bg-charcoal" : scrolled ? "bg-charcoal" : "bg-white"
            }`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 flex flex-col gap-6 lg:hidden">
          {ctas.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-bold text-charcoal hover:text-forest transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctas.nav.cta.href}
            onClick={() => setOpen(false)}
            className="mt-4 bg-forest text-white text-lg font-semibold px-6 py-4 rounded-full text-center hover:bg-amber hover:text-charcoal transition-all"
          >
            {ctas.nav.cta.label}
          </a>
          <a
            href={`tel:${ctas.footer.phone.replace(/-/g, "")}`}
            className="text-center text-forest font-semibold text-lg"
          >
            {ctas.footer.phone}
          </a>
        </div>
      )}

      {/* Mobile bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-100 shadow-lg">
        <div className="flex items-center justify-around py-3">
          {ctas.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex flex-col items-center gap-0.5 text-xs font-medium text-slate-500 hover:text-forest transition-colors"
            >
              <span className="text-base">
                {link.label === "Services" ? "🛡️" :
                 link.label === "How It Works" ? "📋" :
                 link.label === "About" ? "👤" : "❓"}
              </span>
              {link.label}
            </a>
          ))}
          <a
            href={ctas.nav.cta.href}
            className="flex flex-col items-center gap-0.5 text-xs font-bold text-forest"
          >
            <span className="text-base">📞</span>
            Estimate
          </a>
        </div>
      </div>
    </>
  );
}
