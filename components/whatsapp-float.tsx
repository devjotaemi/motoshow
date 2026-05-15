"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { whatsappUrl, type WhatsAppContext } from "@/lib/whatsapp";

function contextFromPath(pathname: string): WhatsAppContext {
  if (pathname.startsWith("/economia")) return "economia";
  if (pathname.startsWith("/financiamento")) return "financiamento";
  if (pathname.startsWith("/test-ride")) return "test-ride";
  return "home";
}

export function WhatsAppFloat() {
  const pathname = usePathname();
  const context = contextFromPath(pathname);

  return (
    <Link
      href={whatsappUrl(context)}
      aria-label="Fale com Eduardo no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex min-h-14 items-center gap-3 rounded-full bg-whatsapp px-4 py-3 font-bold text-dark-950 shadow-[0_0_46px_rgba(37,211,102,0.38)] transition-all duration-500 ease-smooth hover:bg-white md:bottom-7 md:right-7"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-whatsapp animate-pulse-ring" />
      <WhatsappLogo size={26} weight="light" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm uppercase tracking-[0.1em] opacity-0 transition-all duration-500 ease-smooth group-hover:max-w-44 group-hover:opacity-100 md:inline-block">
        Fale com Eduardo
      </span>
    </Link>
  );
}
