"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type MagneticButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "whatsapp";
  showArrow?: boolean;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
  ...props
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.3 });
  const rotate = useTransform(springX, [-18, 18], [-2, 2]);

  const variants = {
    primary:
      "bg-primary-500 text-white shadow-glow hover:bg-primary-400 border-primary-400/70",
    ghost:
      "border-white/18 bg-white/[0.045] text-white hover:border-primary-400/60 hover:bg-white/[0.075]",
    whatsapp:
      "border-whatsapp/50 bg-whatsapp text-dark-950 hover:bg-white shadow-[0_0_42px_rgba(37,211,102,0.26)]"
  };

  return (
    <motion.div
      style={{ x: springX, y: springY, rotate }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-flex active-motion"
    >
      <Link
        href={href}
        className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] transition-all duration-500 ease-smooth ${variants[variant]} ${className}`}
        {...props}
      >
        <span>{children}</span>
        {showArrow ? (
          <ArrowRight
            size={18}
            weight="thin"
            className="transition-transform duration-500 ease-smooth group-hover:translate-x-1"
          />
        ) : null}
      </Link>
    </motion.div>
  );
}
