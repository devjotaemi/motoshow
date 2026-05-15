"use client";

import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, city, model }, i) => (
                <div className="p-8 rounded-3xl border border-white/10 shadow-lg shadow-primary-500/10 w-full bg-[#0a0a0a]" key={i}>
                  <div className="text-gray-300 leading-relaxed text-sm md:text-base">"{text}"</div>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-300 font-bold">
                      {name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-5 text-white">{name}</div>
                      <div className="text-xs leading-5 opacity-60 tracking-tight text-gray-400">{model} &bull; {city}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export function TestimonialCarousel() {
  return (
    <section className="section-shell overflow-hidden py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row md:items-stretch">
        <div className="flex-1 md:py-24">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-primary-300">
            5 estrelas no Google
          </p>
          <h2 className="font-display text-[clamp(2.7rem,7vw,6.8rem)] font-bold leading-[0.92]">
            Quem testa entende rápido.
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-md">
            Veja o que nossos clientes estão falando sobre a economia, praticidade e o atendimento da Moto Show Mirassol.
          </p>
        </div>
        
        <div className="relative flex-1 h-[600px] overflow-hidden">
          {/* Top Fade */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-950 to-transparent z-10 pointer-events-none" />
          
          <TestimonialsColumn 
            testimonials={testimonials} 
            duration={40} 
            className="w-full max-w-md mx-auto h-full" 
          />
          
          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
