import { trustBar } from "@/lib/copy/trustbar";

export default function TrustBar() {
  return (
    <section className="bg-forest py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {trustBar.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden sm:block text-white/30 select-none">·</span>
              )}
              <span className="text-white text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
