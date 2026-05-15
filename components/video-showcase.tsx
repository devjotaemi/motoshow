import { MediaPlaceholder } from "@/components/media-placeholder";
import { Reveal } from "@/components/reveal";

export function VideoShowcase() {
  return (
    <section className="section-shell">
      <Reveal className="relative overflow-hidden rounded-[2.25rem] border border-white/10">
        <video
          src="/VIDEO_HERO.mp4"
          className="aspect-[16/10] w-full rounded-[2.25rem] object-cover object-[center_80%] md:aspect-[21/9]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/10 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-primary-300">
            Sinta a diferenca
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.5rem,7vw,6.2rem)] font-bold leading-[0.9]">
            0 a 80 km/h em silencio absoluto.
          </h2>
        </div>
      </Reveal>
    </section>
  );
}
