import { trustItems } from "@/lib/data";

export function TrustMarquee() {
  const items = [...trustItems, ...trustItems];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-white/[0.035] py-5">
      <div className="group flex whitespace-nowrap">
        <div className="flex animate-marquee items-center gap-8 group-hover:[animation-play-state:paused]">
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-8 text-sm font-bold uppercase tracking-[0.22em] text-gray-400 transition-all duration-500 ease-smooth hover:scale-105 hover:text-primary-300"
            >
              {item}
              <span className="size-1.5 rotate-45 bg-primary-500/80" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
