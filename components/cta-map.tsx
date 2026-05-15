import { MapPin } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { MagneticButton } from "@/components/magnetic-button";
import { business } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";

export function CtaMap() {
  return (
    <section className="section-shell">
      <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 md:p-10">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-primary-300">
            Loja fisica
          </p>
          <h2 className="font-display text-[clamp(2.7rem,7vw,6.4rem)] font-bold leading-[0.9]">
            Venha conhecer pessoalmente.
          </h2>
          <p className="mt-6 text-base leading-8 text-gray-300">{business.address}</p>
          <p className="mt-3 text-sm text-gray-500">{business.hours}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href={whatsappUrl("test-ride")} variant="whatsapp">
              WhatsApp
            </MagneticButton>
            <MagneticButton href={business.mapsUrl} variant="ghost">
              Google Maps
            </MagneticButton>
          </div>
        </div>

        <Link
          href={business.mapsUrl}
          className="group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_52%_42%,rgba(255,107,0,0.25),transparent_12rem),linear-gradient(135deg,#101010,#1a1a1a)]"
          aria-label="Abrir localizacao da Moto Show Mirassol no Google Maps"
        >
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary-500 text-white shadow-glow-strong transition-transform duration-700 ease-smooth group-hover:scale-110">
            <span className="absolute inset-0 rounded-full bg-primary-500 animate-pulse-ring" />
            <MapPin size={34} weight="light" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/10 bg-dark-950/70 p-5 backdrop-blur-xl">
            <p className="text-sm font-bold text-white">{business.shortAddress}</p>
            <p className="mt-1 text-sm text-gray-400">{business.city}</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
