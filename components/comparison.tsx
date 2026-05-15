"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { MagneticButton } from "@/components/magnetic-button";

gsap.registerPlugin(ScrollTrigger);

const rows = [
  { label: "Custo mensal", gas: 450, electric: 35, suffix: "/mes" },
  { label: "Manutencao", gas: 200, electric: 20, suffix: "/mes" },
  { label: "Barulho", gas: 85, electric: 0, suffix: " dB" },
  { label: "Emissao CO2", gas: 23, electric: 0, suffix: " ton/ano", divide: 10 }
];

export function Comparison() {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const bars = root.querySelectorAll("[data-bar]");
    const counters = root.querySelectorAll("[data-counter]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bars,
        { scaleX: 0 },
        {
          scaleX: 1,
          stagger: 0.08,
          duration: 1.25,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start: "top 76%" }
        }
      );

      counters.forEach((counter) => {
        const target = Number(counter.getAttribute("data-target"));
        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: target,
            duration: 1.8,
            snap: { innerText: 1 },
            ease: "power1.out",
            scrollTrigger: { trigger: root, start: "top 76%" }
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-shell">
      <div className="mb-12 text-center">
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-primary-300">
          Eletrica vs gasolina
        </p>
        <h2 className="font-display text-[clamp(2.7rem,7vw,6.8rem)] font-bold leading-[0.92]">
          Por que eletrica?
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
        <div className="w-full max-w-sm mx-auto rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 text-white shadow-sm font-sans">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h2 className="font-semibold text-lg">Gasolina</h2>
            </div>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-yellow-800 bg-yellow-950 text-yellow-300">
              Custo Alto
            </span>
          </div>
          
          <hr className="my-4 border-white/10" />

          <div className="grid gap-6">
            {rows.map((row) => (
              <Metric key={row.label} label={row.label} value={row.gas} max={450} suffix={row.suffix} tone="gas" />
            ))}
          </div>
        </div>

        <div className="hidden w-px bg-gradient-to-b from-transparent via-primary-500 to-transparent md:block" />

        <div className="w-full max-w-sm mx-auto rounded-2xl border border-primary-400/30 bg-[#0a0a0a] p-6 text-white shadow-sm font-sans shadow-glow">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h2 className="font-semibold text-lg text-primary-300">Eletrica</h2>
            </div>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-green-800 bg-green-950 text-green-300">
              Economia
            </span>
          </div>
          
          <hr className="my-4 border-white/10" />

          <div className="grid gap-6">
            {rows.map((row) => (
              <Metric
                key={row.label}
                label={row.label}
                value={row.electric}
                max={450}
                suffix={row.suffix}
                tone="electric"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <MagneticButton href="/economia">Calcule sua economia</MagneticButton>
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
  max,
  suffix,
  tone
}: {
  label: string;
  value: number;
  max: number;
  suffix: string;
  tone: "gas" | "electric";
}) {
  return (
    <div>
      <div className="mb-2 flex items-end justify-between gap-3">
        <span className="text-sm text-gray-400">{label}</span>
        <span className={`font-display text-2xl font-bold ${tone === "electric" ? "text-success" : "text-gray-300"}`}>
          R$
          <span data-counter data-target={value}>
            0
          </span>
          {suffix}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          data-bar
          className={`h-full origin-left rounded-full ${tone === "electric" ? "bg-success" : "bg-gray-500"}`}
          style={{ width: `${Math.max(5, (value / max) * 100)}%` }}
        />
      </div>
    </div>
  );
}
