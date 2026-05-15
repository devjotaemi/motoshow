import { Reveal } from "@/components/reveal";
import { valueCards } from "@/lib/data";

export function ValueBento() {
  return (
    <section className="section-shell">
      <div className="mb-12 max-w-4xl">
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-primary-300">
          Compra inteligente
        </p>
        <h2 className="font-display text-[clamp(2.7rem,7vw,6.8rem)] font-bold leading-[0.92] text-white">
          Mais economia. Menos dor de cabeca.
        </h2>
      </div>

      <div className="grid-flow-dense grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:auto-rows-[auto]">
        {valueCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Reveal
              key={card.title}
              delay={index * 0.08}
              className={`w-full rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 text-white shadow-sm font-sans transition-transform duration-700 ease-smooth hover:-translate-y-2 hover:border-primary-400/50 ${card.className}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-gray-400" />
                  <h2 className="font-semibold text-lg">{card.title}</h2>
                </div>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-green-800 bg-green-950 text-green-300 whitespace-nowrap">
                  {card.stat}
                </span>
              </div>
              
              <hr className="my-4 border-white/10" />
              
              <div className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-gray-400">
                  {card.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
