"use client";

import { FormEvent, useState } from "react";
import { whatsappNumber } from "@/lib/whatsapp";

export function TestRideForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [day, setDay] = useState("Esta semana");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `Oi! Quero agendar meu test ride gratuito. Nome: ${name}. WhatsApp: ${phone}. Melhor dia: ${day}.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-gray-400">Nome</span>
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-dark-950/80 px-4 py-4 text-white outline-none transition-colors duration-300 ease-smooth focus:border-primary-400"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-gray-400">WhatsApp</span>
          <input
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-dark-950/80 px-4 py-4 text-white outline-none transition-colors duration-300 ease-smooth focus:border-primary-400"
          />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="mb-2 block text-sm text-gray-400">Melhor dia</span>
        <select
          value={day}
          onChange={(event) => setDay(event.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-dark-950/80 px-4 py-4 text-white outline-none transition-colors duration-300 ease-smooth focus:border-primary-400"
        >
          <option>Esta semana</option>
          <option>Sabado</option>
          <option>Segunda a sexta</option>
          <option>Quero combinar pelo WhatsApp</option>
        </select>
      </label>
      <button
        type="submit"
        className="mt-6 min-h-14 w-full rounded-full bg-primary-500 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white shadow-glow transition-colors duration-500 ease-smooth hover:bg-primary-400"
      >
        Agendar meu test ride
      </button>
    </form>
  );
}
