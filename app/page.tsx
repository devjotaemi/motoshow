import type { Metadata } from "next";
import { CtaMap } from "@/components/cta-map";
import { Comparison } from "@/components/comparison";
import { JsonLd } from "@/components/json-ld";
import { MagneticButton } from "@/components/magnetic-button";
import { ModelCatalog } from "@/components/model-catalog";
import { Reveal, TextReveal } from "@/components/reveal";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { ValueBento } from "@/components/value-bento";
import { VideoShowcase } from "@/components/video-showcase";
import { productJsonLd } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Scooters e motos eletricas em Mirassol",
  description:
    "Moto Show Mirassol: scooters eletricas com economia real, test ride gratuito, financiamento facilitado e atendimento local com Eduardo.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Moto Show Mirassol | Scooters eletricas",
    description:
      "Acelere sem gasolina. Conheca modelos, simule economia e agende seu test ride em Mirassol/SP."
  }
};

export default function HomePage() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <JsonLd data={productJsonLd} />
      <section className="relative isolate flex min-h-[100dvh] items-center overflow-hidden px-5 pt-28 md:px-8">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 -z-30 h-full w-full object-cover"
        >
          <source src="/Scooter_with_neutral_flowers_202605142313.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-20 bg-dark-950/60" />
        {/* Top fade from header */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#0a0a0a] to-transparent z-0 pointer-events-none" />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center text-center">
          <Reveal className="flex max-w-5xl flex-col items-center justify-center">
            <p className="mb-5 inline-flex rounded-full border border-primary-400/30 bg-primary-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-primary-300 backdrop-blur-sm">
              Mobilidade eletrica em Mirassol
            </p>
            <h1 className="max-w-5xl text-center font-display text-[clamp(3.35rem,8.4vw,7.6rem)] font-bold uppercase leading-[0.88] text-white">
              <TextReveal text={"Acelere. Sem gasolina. Sem limites."} />
            </h1>
            <p className="mt-7 max-w-xl text-center text-lg leading-8 text-gray-300 drop-shadow-md md:text-xl">
              Scooters eletricas com autonomia real, economia absurda e parcelas que cabem no seu bolso.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton href={whatsappUrl("test-ride")}>
                Agendar test ride gratis
              </MagneticButton>
              <MagneticButton href="#modelos" variant="ghost">
                Ver modelos
              </MagneticButton>
            </div>
          </Reveal>
        </div>
        
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent z-0 pointer-events-none" />
        
        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.22em] text-gray-300 md:flex z-10">
          <span>Role para explorar</span>
          <span className="h-12 w-px overflow-hidden bg-white/10">
            <span className="block h-5 w-px animate-float bg-primary-500" />
          </span>
        </div>
      </section>
      <ValueBento />
      <VideoShowcase />
      <ModelCatalog />
      <Comparison />
      <TestimonialCarousel />
      <CtaMap />
    </main>
  );
}
