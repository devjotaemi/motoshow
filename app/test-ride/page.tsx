import type { Metadata } from "next";
import { FAQ } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { MagneticButton } from "@/components/magnetic-button";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { Reveal, TextReveal } from "@/components/reveal";
import { TestRideForm } from "@/components/test-ride-form";
import { testRideSteps } from "@/lib/data";
import { productJsonLd } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Agende seu test ride gratis",
  description:
    "Pilote uma scooter eletrica antes de decidir. Test ride gratuito na Moto Show Mirassol.",
  alternates: { canonical: "/test-ride" },
  openGraph: {
    title: "Agende seu test ride gratis",
    description: "Sinta a diferenca de uma scooter eletrica na loja fisica em Mirassol/SP."
  }
};

const objections = [
  {
    question: "Preciso de CNH especial?",
    answer: "Nao. Categoria A ou ACC ja resolve para testar com seguranca."
  },
  {
    question: "Preciso comprar no dia?",
    answer: "Nao. O test ride e gratuito e sem compromisso."
  },
  {
    question: "Quanto tempo dura?",
    answer: "Em media 15 a 20 minutos, tempo suficiente para sentir torque, silencio e conforto."
  }
];

export default function TestRidePage() {
  return (
    <main className="w-full max-w-full overflow-x-hidden pt-20">
      <JsonLd data={productJsonLd} />
      <section className="section-shell flex min-h-[100dvh] items-center">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="max-w-5xl">
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.24em] text-primary-300">
              Test ride gratuito
            </p>
            <h1 className="font-display text-[clamp(3.2rem,8vw,7.5rem)] font-bold uppercase leading-[0.9]">
              <TextReveal text="Pilote antes de decidir." />
            </h1>
            <p className="mt-6 font-display text-[clamp(2.2rem,5vw,4.8rem)] font-bold leading-none text-primary-300">
              Sem compromisso.
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300">
              Agende, venha ate a loja e sinta torque instantaneo, silencio e economia real.
            </p>
            <div className="mt-8">
              <MagneticButton href={whatsappUrl("test-ride")} variant="whatsapp">
                Agendar agora
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <MediaPlaceholder
              token="VIDEO_TESTRIDE"
              label="Video placeholder de test ride gratuito"
              className="aspect-[4/5] rounded-[2rem] md:aspect-[5/4]"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <div className="mb-10 max-w-4xl">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-primary-300">
            Como funciona
          </p>
          <h2 className="font-display text-[clamp(2.7rem,7vw,6.4rem)] font-bold leading-[0.9]">
            Tres passos e voce no guidao.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testRideSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal
                key={step.title}
                delay={index * 0.08}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6"
              >
                <div className="mb-8 grid size-12 place-items-center rounded-full bg-primary-500/12 text-primary-300">
                  <Icon size={24} weight="thin" />
                </div>
                <h3 className="font-display text-3xl font-bold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-400">{step.description}</p>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-8 text-center text-gray-400">So traz CNH ou permissao e vem sentir a diferenca.</p>
      </section>

      <section className="section-shell">
        <div className="mb-10 max-w-4xl">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-primary-300">
            Galeria
          </p>
          <h2 className="font-display text-[clamp(2.7rem,7vw,6rem)] font-bold leading-[0.9]">
            Primeira volta, sorriso facil.
          </h2>
        </div>
        <div className="grid-flow-dense grid gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {["IMG_CLIENTE_1", "IMG_CLIENTE_2", "IMG_CLIENTE_3", "IMG_CLIENTE_4", "IMG_CLIENTE_5"].map((token, index) => (
            <Reveal
              key={token}
              delay={index * 0.06}
              className={index === 0 || index === 4 ? "md:col-span-2 md:row-span-2" : ""}
            >
              <MediaPlaceholder
                token={token}
                label={`Foto placeholder de cliente em test ride ${index + 1}`}
                className="h-full min-h-[260px] rounded-[2rem]"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-primary-300">
            Sem pressao
          </p>
          <h2 className="font-display text-[clamp(2.7rem,7vw,6rem)] font-bold leading-[0.92]">
            Voce testa. Depois decide.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <FAQ items={objections} />
        </Reveal>
      </section>

      <section className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-primary-300">
            Agendamento
          </p>
          <h2 className="font-display text-[clamp(2.7rem,7vw,6rem)] font-bold leading-[0.92]">
            Escolha um dia. Eduardo confirma pelo WhatsApp.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <TestRideForm />
        </Reveal>
      </section>
    </main>
  );
}
