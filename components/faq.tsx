"use client";

import { Plus } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => (
        <div key={item.question} className="rounded-3xl border border-white/10 bg-white/[0.045]">
          <button
            type="button"
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-5 p-5 text-left font-display text-xl font-bold text-white md:p-6"
          >
            {item.question}
            <Plus
              size={20}
              weight="thin"
              className={`shrink-0 transition-transform duration-300 ease-smooth ${open === index ? "rotate-45" : ""}`}
            />
          </button>
          <AnimatePresence initial={false}>
            {open === index ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm leading-7 text-gray-400 md:px-6 md:pb-6">
                  {item.answer}
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
