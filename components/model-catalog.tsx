import { BatteryCharging, Gauge, Lightning } from "@phosphor-icons/react/dist/ssr";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal } from "@/components/reveal";
import { models } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";

export function ModelCatalog() {
  return (
    <section id="modelos" className="section-shell overflow-hidden">
      <div className="mb-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-primary-300">
            Modelos disponiveis
          </p>
          <h2 className="font-display text-[clamp(2.7rem,7vw,6.8rem)] font-bold leading-[0.92]">
            Escolha a sua eletrica.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-gray-400">
          Cards com dados editaveis. Substitua as fotos pelos assets reais quando chegarem.
        </p>
      </div>

      <div className="-mx-5 flex snap-x gap-5 overflow-x-auto px-5 pb-6 [scrollbar-width:none] md:-mx-8 md:px-8">
        {models.map((model, index) => (
          <Reveal
            key={model.name}
            delay={index * 0.06}
            className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 text-white shadow-sm font-sans snap-center transition-transform duration-700 ease-smooth hover:-translate-y-2 md:min-w-[390px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lightning className="h-5 w-5 text-gray-400" />
                <h2 className="font-semibold text-lg">{model.name}</h2>
              </div>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-green-800 bg-green-950 text-green-300">
                Disponível
              </span>
            </div>
            
            <hr className="my-4 border-white/10" />

            <div
              className="relative mb-6 h-48 overflow-hidden rounded-xl border border-white/8 group"
              style={{
                background: `radial-gradient(circle at 50% 30%, ${model.color}55, transparent 16rem), linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))`
              }}
            >
              {/* Replace with real scooter photo: [IMG_SCOOTER_${index + 1}] */}
              <div className="absolute left-1/2 top-1/2 h-20 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-dark-950/48 shadow-glow transition-transform duration-700 ease-smooth group-hover:scale-105" />
              <div className="absolute left-[24%] top-[58%] size-20 rounded-full border-[10px] border-dark-950 bg-white/8" />
              <div className="absolute right-[20%] top-[58%] size-20 rounded-full border-[10px] border-dark-950 bg-white/8" />
              <div className="absolute left-[38%] top-[32%] h-10 w-24 rounded-full bg-dark-950/80" />
            </div>

            <h3 className="text-3xl font-bold tracking-tight mb-4">
              {model.price}
            </h3>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-400 mb-4">
              <div className="flex items-center gap-2">
                <BatteryCharging className="h-4 w-4" weight="fill" />
                <span>{model.autonomy}</span>
              </div>
              <div className="flex items-center gap-2">
                <Gauge className="h-4 w-4 text-green-500" weight="fill" />
                <span className="font-medium text-green-500">{model.speed}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-white/10 text-white border-transparent">
                <Lightning className="mr-1.5 h-3.5 w-3.5 fill-current" weight="fill" />
                {model.power}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-gray-400">{model.cash}</p>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <MagneticButton
                href={whatsappUrl("modelos", `Quero saber mais sobre o modelo ${model.slug}`)}
                className="w-full flex h-11 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors"
              >
                Quero essa
              </MagneticButton>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mx-auto mt-2 h-1 max-w-56 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-2/5 rounded-full bg-primary-500" />
      </div>
    </section>
  );
}
