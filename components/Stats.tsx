import { stats } from "@/lib/copy/stats";

export default function Stats() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} text-center`}>
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="font-display text-5xl md:text-6xl font-black text-amber leading-none">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="font-display text-2xl font-bold text-amber/70 mb-1">{stat.unit}</span>
                )}
              </div>
              <p className="text-white/70 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
