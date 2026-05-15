"use client";

import { useMemo, useState } from "react";
import { MagneticButton } from "@/components/magnetic-button";
import { models } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";

const basePrices = [5890, 6490, 6990, 7990];

export function FinanceSimulator() {
  const [modelIndex, setModelIndex] = useState(1);
  const [entry, setEntry] = useState(1000);
  const [months, setMonths] = useState(36);

  const installment = useMemo(() => {
    const financed = Math.max(0, basePrices[modelIndex] - entry);
    const monthlyRate = 0.025;
    const factor = (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return Math.max(149, Math.round(financed * factor));
  }, [entry, modelIndex, months]);

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 md:p-8">
        <div className="grid gap-3 sm:grid-cols-2">
          {models.map((model, index) => (
            <button
              key={model.name}
              type="button"
              onClick={() => setModelIndex(index)}
              className={`rounded-2xl border p-4 text-left transition-all duration-300 ease-smooth ${
                modelIndex === index
                  ? "border-primary-400 bg-primary-500/14 text-white shadow-glow"
                  : "border-white/10 bg-white/[0.035] text-gray-400 hover:border-white/20"
              }`}
            >
              <span className="font-display text-xl font-bold">{model.name}</span>
              <span className="mt-1 block text-xs">{model.cash}</span>
            </button>
          ))}
        </div>

        <Range label="Entrada" min={0} max={3000} step={100} value={entry} prefix="R$ " onChange={setEntry} />
        <Range label="Parcelas" min={12} max={48} step={6} value={months} suffix="x" onChange={setMonths} />
      </div>

      <div className="rounded-[2rem] border border-primary-400/30 bg-primary-500/[0.08] p-6 shadow-glow md:p-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-primary-300">
          Simulacao
        </p>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
          {models[modelIndex].name}
        </h2>
        <p className="mt-8 text-sm text-gray-400">Parcela estimada</p>
        <p className="font-display text-[clamp(3.5rem,9vw,7rem)] font-bold leading-none">
          R$ {installment}
        </p>
        <p className="mt-3 text-sm text-gray-500">Sujeito a analise de credito.</p>
        <div className="mt-8">
          <MagneticButton
            href={whatsappUrl("financiamento", `Modelo ${models[modelIndex].name}, entrada R$ ${entry}, ${months}x`)}
            variant="whatsapp"
          >
            Simular no WhatsApp
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}

function Range({
  label,
  min,
  max,
  step,
  value,
  prefix = "",
  suffix = "",
  onChange
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  prefix?: string;
  suffix?: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="mt-8 block">
      <span className="mb-3 flex justify-between text-sm text-gray-300">
        {label}
        <strong className="text-primary-300">
          {prefix}
          {value}
          {suffix}
        </strong>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-primary-500"
      />
    </label>
  );
}
