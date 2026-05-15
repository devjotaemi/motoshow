import { InstagramLogo, TiktokLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { business } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Modelos", href: "/#modelos" },
  { label: "Economia", href: "/economia" },
  { label: "Financiamento", href: "/financiamento" },
  { label: "Test Ride", href: "/test-ride" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-950">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-primary-500 text-sm font-black text-white shadow-glow">
              MS
            </span>
            <span className="font-display text-xl font-bold uppercase tracking-[0.16em]">
              Moto Show
            </span>
          </div>
          <p className="max-w-md text-sm leading-7 text-gray-400">
            Scooters e motos eletricas em Mirassol/SP com atendimento local,
            economia real e test ride gratuito.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-gray-200">
            Navegacao
          </h3>
          <div className="grid gap-3 text-sm text-gray-400">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-300 ease-smooth hover:text-primary-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-gray-200">
            Loja
          </h3>
          <p className="text-sm leading-7 text-gray-400">{business.address}</p>
          <p className="mt-3 text-sm text-gray-400">{business.whatsapp}</p>
          <div className="mt-5 flex gap-3">
            <Link
              href={business.instagram}
              aria-label="Instagram Moto Show Mirassol"
              className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 ease-smooth hover:border-primary-400"
            >
              <InstagramLogo size={19} weight="light" />
            </Link>
            <Link
              href={whatsappUrl("home")}
              aria-label="WhatsApp Moto Show Mirassol"
              className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 ease-smooth hover:border-whatsapp"
            >
              <WhatsappLogo size={19} weight="light" />
            </Link>
            <Link
              href={business.instagram}
              aria-label="TikTok Moto Show Mirassol"
              className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 ease-smooth hover:border-primary-400"
            >
              <TiktokLogo size={19} weight="light" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-gray-500">
        © 2025 Moto Show Mirassol — Todos os direitos reservados. Desenvolvido por Its Verion.
      </div>
    </footer>
  );
}
