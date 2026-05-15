import type { Metadata } from "next";
import { ChartBar, GasPump, Lightning } from "@phosphor-icons/react/dist/ssr";
import { CtaMap } from "@/components/cta-map";
import { JsonLd } from "@/components/json-ld";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal, TextReveal } from "@/components/reveal";
import { SavingsCalculator } from "@/components/savings-calculator";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { productJsonLd } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Quanto voce economiza com scooter eletrica?",
  description:
    "Calcule quanto voce economiza por ano trocando gasolina por scooter eletrica na Moto Show Mirassol.",
  alternates: { canonical: "/economia" },
  openGraph: {
    title: "Quanto voce economiza com scooter eletrica?",
    description: "Descubra sua economia anual e fale com Eduardo na Moto Show Mirassol."
  }
};

export default function EconomiaPage() {
  return (
    <main className="w-full max-w-full overflow-x-hidden pt-20">
      <JsonLd data={productJsonLd} />
      <section className="section-shell flex min-h-[100dvh] items-center">
        <div className="grid w-full gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <Reveal>
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.24em] text-primary-300">
              Calculadora de economia
            </p>
            <h1 className="max-w-6xl font-display text-[clamp(3.2rem,8vw,7.4rem)] font-bold uppercase leading-[0.9]">
              <TextReveal text="Voce gasta R$450/mes com gasolina." />
            </h1>
            <p className="mt-6 font-display text-[clamp(2.4rem,6vw,5.4rem)] font-bold leading-none text-primary-300">
              E se fossem R$35?
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300">
              Descubra quanto voce economiza por ano com uma scooter eletrica.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-glow">
            <div className="grid gap-4">
              <HeroStat icon={GasPump} label="Gasolina" value="R$450/mes" muted />
              <HeroStat icon={Lightning} label="Eletrica" value="R$35/mes" />
              <HeroStat icon={ChartBar} label="Economia possivel" value="Ate R$4.800/ano" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <Reveal>
          <SavingsCalculator />
        </Reveal>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-primary-300">
              Mes a mes
            </p>
            <h2 className="font-display text-[clamp(2.6rem,7vw,6rem)] font-bold leading-[0.92]">
              A diferenca fica impossivel de ignorar.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
            <div className="grid gap-5">
              {["Mes 1", "Mes 3", "Mes 6", "Mes 12"].map((label, index) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-sm text-gray-400">
                    <span>{label}</span>
                    <span>Gasolina vs eletrica</span>
                  </div>
                  <div className="grid gap-2">
                    <div className="h-3 rounded-full bg-gray-500/70" style={{ width: `${80 + index * 4}%` }} />
                    <div className="h-3 rounded-full bg-success" style={{ width: `${12 + index * 2}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <TestimonialCarousel />
      <section className="section-shell text-center">
        <Reveal className="mx-auto max-w-4xl">
          <h2 className="font-display text-[clamp(2.8rem,7vw,6.5rem)] font-bold leading-[0.9]">
            Precos da tabela atual por tempo limitado.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Chame Eduardo e entenda qual modelo faz mais sentido para sua rotina.
          </p>
          <div className="mt-8">
            <MagneticButton href={whatsappUrl("economia")} variant="whatsapp">
              Falar com Eduardo
            </MagneticButton>
          </div>
        </Reveal>
      </section>
      <CtaMap />
    </main>
  );
}

function HeroStat({
  icon: Icon,
  label,
  value,
  muted = false
}: {
  icon: typeof GasPump;
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className={`rounded-3xl border p-5 ${muted ? "border-white/10 bg-white/[0.035]" : "border-primary-400/30 bg-primary-500/10"}`}>
      <Icon size={24} weight="thin" className={muted ? "text-gray-400" : "text-primary-300"} />
      <p className="mt-4 text-sm text-gray-500">{label}</p>
      <p className="mt-1 font-display text-3xl font-bold text-white">{value}</p>
    </div>
  );
}
