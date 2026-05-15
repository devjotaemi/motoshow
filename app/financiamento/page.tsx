import type { Metadata } from "next";
import { FinanceSimulator } from "@/components/finance-simulator";
import { FAQ } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal, TextReveal } from "@/components/reveal";
import { processSteps } from "@/lib/data";
import { productJsonLd } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Scooter eletrica parcelada em ate 48x",
  description:
    "Financiamento facilitado para scooter eletrica em Mirassol. Simule parcelas e fale com Eduardo.",
  alternates: { canonical: "/financiamento" },
  openGraph: {
    title: "Scooter eletrica parcelada em ate 48x",
    description: "Aprovacao rapida, parcelas acessiveis e atendimento local em Mirassol/SP."
  }
};

const financeFaq = [
  {
    question: "Precisa dar entrada?",
    answer: "Depende do modelo, perfil de credito e campanha vigente. A simulacao ajuda a encontrar uma parcela confortavel."
  },
  {
    question: "A aprovacao demora?",
    answer: "A analise costuma ser rapida. Eduardo confirma os documentos e orienta o melhor caminho pelo WhatsApp."
  },
  {
    question: "Score baixo impede a compra?",
    answer: "Nao necessariamente. Cada caso passa por analise, e a loja pode sugerir alternativas de entrada e prazo."
  },
  {
    question: "Quais documentos preciso?",
    answer: "Documento pessoal, comprovante de residencia e comprovante de renda costumam resolver a maior parte das simulacoes."
  }
];

export default function FinanciamentoPage() {
  return (
    <main className="w-full max-w-full overflow-x-hidden pt-20">
      <JsonLd data={productJsonLd} />
      <section className="section-shell flex min-h-[100dvh] items-center">
        <Reveal className="max-w-6xl">
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.24em] text-primary-300">
            Financiamento facilitado
          </p>
          <h1 className="font-display text-[clamp(3.2rem,8vw,7.5rem)] font-bold uppercase leading-[0.9]">
            <TextReveal text="Sua scooter eletrica" />
            <span className="block text-primary-300">a partir de R$149/mes</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300">
            Financiamento facilitado, aprovacao rapida e parcela que cabe no bolso.
          </p>
          <div className="mt-8">
            <MagneticButton href={whatsappUrl("financiamento")} variant="whatsapp">
              Simular agora
            </MagneticButton>
          </div>
        </Reveal>
      </section>

      <section className="section-shell">
        <Reveal>
          <FinanceSimulator />
        </Reveal>
      </section>

      <section className="section-shell">
        <div className="mb-10 max-w-4xl">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-primary-300">
            Da simulacao ao guidao
          </p>
          <h2 className="font-display text-[clamp(2.7rem,7vw,6.4rem)] font-bold leading-[0.9]">
            Quatro passos. Sem enrolacao.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => {
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
                <p className="text-sm text-gray-500">0{index + 1}</p>
                <h3 className="mt-2 font-display text-2xl font-bold">{step.title}</h3>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-primary-300">
            Perguntas frequentes
          </p>
          <h2 className="font-display text-[clamp(2.7rem,7vw,6rem)] font-bold leading-[0.92]">
            Credito claro antes da compra.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <FAQ items={financeFaq} />
        </Reveal>
      </section>

      <section className="section-shell text-center">
        <Reveal className="mx-auto max-w-4xl rounded-[2rem] border border-primary-400/30 bg-primary-500/[0.08] p-8 shadow-glow md:p-12">
          <h2 className="font-display text-[clamp(2.6rem,7vw,6.2rem)] font-bold leading-[0.9]">
            Descubra sua parcela hoje.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Eduardo te ajuda a encontrar modelo, entrada e prazo sem burocracia.
          </p>
          <div className="mt-8">
            <MagneticButton href={whatsappUrl("financiamento")} variant="whatsapp">
              Simular no WhatsApp
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
