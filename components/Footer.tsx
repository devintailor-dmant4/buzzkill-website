import { ctas } from "@/lib/copy/ctas";

export default function Footer() {
  const { footer, nav } = ctas;
  return (
    <footer className="bg-charcoal text-white pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="font-display text-2xl font-black tracking-tight">
              BUZZ<span className="text-amber">KILL</span>
            </span>
            <p className="text-white/60 text-sm mt-1 mb-4">Mosquito Solutions</p>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">{footer.tagline}</p>
            <p className="text-white/50 text-xs mt-4">{footer.serviceArea}</p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="flex flex-col gap-3">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 text-sm hover:text-amber transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-white/70 text-sm hover:text-amber transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Contact</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={`tel:${footer.phone.replace(/-/g, "")}`} className="text-white/70 text-sm hover:text-amber transition-colors">
                  📞 {footer.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${footer.email}`} className="text-white/70 text-sm hover:text-amber transition-colors">
                  ✉️ {footer.email}
                </a>
              </li>
              <li>
                <span className="text-white/70 text-sm">🕐 {footer.hours}</span>
              </li>
              <li>
                <a href={footer.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 text-sm hover:text-amber transition-colors">
                  📘 Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Buzz Kill Mosquito Solutions. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">Serving Chicagoland since day one.</p>
        </div>
      </div>
    </footer>
  );
}
