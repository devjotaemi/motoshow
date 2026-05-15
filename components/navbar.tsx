"use client";

import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { business } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: "Modelos", href: "/#modelos" },
  { label: "Economia", href: "/economia" },
  { label: "Financiamento", href: "/financiamento" },
  { label: "Test Ride", href: "/test-ride" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    const nav = document.querySelector("[data-nav]");
    if (!nav) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        nav,
        { y: -28, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" }
      );

      ScrollTrigger.create({
        start: "top -80",
        end: 99999,
        onUpdate: (self) => {
          gsap.to(nav, {
            y: self.direction === 1 && self.progress > 0.02 ? -96 : 0,
            scale: self.direction === 1 ? 0.985 : 1,
            duration: 0.45,
            ease: "power3.out"
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:pt-6">
        <nav
          data-nav
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/12 bg-dark-950/72 px-4 py-3 opacity-0 shadow-2xl backdrop-blur-2xl md:px-6"
        >
          <Link href="/" className="flex items-center gap-3" aria-label="Moto Show Mirassol">
            <span className="grid size-9 place-items-center rounded-full bg-primary-500 text-sm font-black text-white shadow-glow">
              MS
            </span>
            <span className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Moto Show
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-200 transition-colors duration-300 ease-smooth hover:text-primary-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href={whatsappUrl("home")}
              className="rounded-full bg-primary-500 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.13em] text-white shadow-glow transition-all duration-500 ease-smooth hover:bg-primary-400"
            >
              Falar com {business.seller}
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-full border border-white/12 bg-white/5 text-white transition-colors duration-300 ease-smooth hover:bg-white/10 md:hidden"
          >
            {open ? <X size={20} weight="thin" /> : <List size={20} weight="thin" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-dark-950/92 px-6 pt-28 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-5 font-display text-4xl font-bold text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href={whatsappUrl("home")}
                className="mt-6 rounded-full bg-primary-500 px-6 py-4 text-center text-sm font-extrabold uppercase tracking-[0.13em] text-white shadow-glow"
              >
                Falar com Eduardo
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
