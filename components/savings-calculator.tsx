"use client";

import { useMemo, useState } from "react";
import { MagneticButton } from "@/components/magnetic-button";
import { whatsappUrl } from "@/lib/whatsapp";

export function SavingsCalculator() {
  const [kmDay, setKmDay] = useState(30);
  const [gasPrice, setGasPrice] = useState(5.8);
  const [consumption, setConsumption] = useState(35);

  const result = useMemo(() => {
    const monthlyKm = kmDay * 22;
    const gasMonthly = (monthlyKm / consumption) * gasPrice;
    const electricMonthly = monthlyKm * 0.08;
    const monthlySavings = Math.max(0, gasMonthly - electricMonthly);
    return {
      gasMonthly,
      electricMonthly,
      yearly: monthlySavings * 12,
      threeYears: monthlySavings * 36
    };
  }, [kmDay, gasPrice, consumption]);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 md:p-8">
        <Slider label="Km que voce roda por dia" value={kmDay} min={5} max={100} suffix=" km" onChange={setKmDay} />
        <label className="mt-8 block">
          <span className="mb-3 flex justify-between text-sm text-gray-300">
            Preco da gasolina
            <strong className="text-primary-300">R$ {gasPrice.toFixed(2)}</strong>
          </span>
          <input
            type="number"
            min="3"
            max="10"
            step="0.1"
            value={gasPrice}
            onChange={(event) => setGasPrice(Number(event.target.value))}
            className="w-full rounded-2xl border border-white/10 bg-dark-950/80 px-4 py-4 text-white outline-none transition-colors duration-300 ease-smooth focus:border-primary-400"
          />
        </label>
        <Slider
          label="Consumo da sua moto atual"
          value={consumption}
          min={20}
          max={50}
          suffix=" km/L"
          onChange={setConsumption}
        />
      </div>

      <div className="rounded-[2rem] border border-primary-400/30 bg-primary-500/[0.08] p-6 shadow-glow md:p-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-primary-300">
          Resultado estimado
        </p>
        <p className="mt-6 font-display text-[clamp(3.4rem,9vw,7rem)] font-bold leading-none text-white">
          R$ {Math.round(result.yearly).toLocaleString("pt-BR")}
        </p>
        <p className="mt-3 text-lg text-gray-300">economizados por ano</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <ResultPill label="Gasolina hoje" value={`R$ ${Math.round(result.gasMonthly)}/mes`} />
          <ResultPill label="Eletrica" value={`R$ ${Math.round(result.electricMonthly)}/mes`} />
          <ResultPill label="Em 3 anos" value={`R$ ${Math.round(result.threeYears).toLocaleString("pt-BR")}`} />
          <ResultPill label="Impacto" value="Paga a scooter" />
        </div>
        <div className="mt-8">
          <MagneticButton href={whatsappUrl("economia")} variant="whatsapp">
            Quero economizar
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  suffix,
  onChange
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  suffix: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="mt-8 block first:mt-0">
      <span className="mb-3 flex justify-between text-sm text-gray-300">
        {label}
        <strong className="text-primary-300">
          {value}
          {suffix}
        </strong>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-primary-500"
      />
    </label>
  );
}

function ResultPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-dark-950/42 p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-gray-500">{label}</p>
      <p className="mt-2 font-display text-2xl font-bold text-white">{value}</p>
    </div>
  );
}
