import { motion } from "motion/react";

import pedido from "@/assets/timeline/pedidoJu.JPG";
import viagem from "@/assets/timeline/viagem.JPG";
import namo from "@/assets/timeline/diadosnamo.jpg";
import aliança from "@/assets/timeline/alianca.jpg";
import bobo from "@/assets/timeline/bobo.jpg";
import niver from "@/assets/timeline/niver19.jpg";
import show from "@/assets/timeline/show.jpg";
import niver2 from "@/assets/timeline/niver2.jpg";
import capa from "@/assets/timeline/capa.jpg";
import cataratas from "@/assets/timeline/cataratas.jpg";
import hoje from "@/assets/timeline/hoje.jpg";

const events = [
  { date: "19 · Jun · 2022", 
    title: "o começo", 
    text: "o dia em que tudo virou nós.",
    src: pedido},
  { date: "15 · Jan · 2022", 
    title: "primeira viagem", 
    text: "junto com a família Bernardes, o caos. Mas deu tudo certo no final!",
    src: viagem},
  { date: "12 · Jun · 2022", 
    title: "nosso primeiro 12 de junho", 
    text: "um dia dos namorados especial porque, pela primeira vez, era ao seu lado.", 
    src: namo},  
  { date: "23 · Out · 2022", 
    title: "primeiro rolê de aliança", 
    text: "um detalhe no dedo, um universo inteiro de amor por trás dele.",
    src: aliança},    
  { date: "06· Nov · 2022", 
    title: "aquele dia bobo", 
    text: "rindo até doer a barriga, sem motivo nenhum.",
    src: bobo},
  { date: "19 · Jun · 2023 ", 
    title: "primeiro aniversário juntas", 
    text: "um ano depois, meu lugar favorito continuava sendo ao seu lado.",
    src: niver},
  { date: "08 · Out · 2024", 
    title: "show do Bruninho", 
    text: "melhor show da vidaaaaaaa",
    src: show},
  { date: "20 · Jun · 2025", 
    title: "Ahh esse olhar...", 
    text: "se amor tivesse uma forma, acho que seria exatamente esse olhar.",
    src: niver2},
  { date: "16 · Ago · 2025", 
    title: "nós, de novo", 
    text: "não importa o lugar, quando estou com você sinto que estou em casa.",
    src: capa},
  { date: "02 · Jan · 2026", 
    title: "primeira viagem 'internacional'", 
    text: "três países, centenas de fotos e a prova de que qualquer lugar fica melhor ao seu lado.",
    src: cataratas},  
  { date: "a alguns dias atrás", 
    title: "sempre ao seu lado", 
    text: "cada lembrança dessa linha do tempo me faz ter ainda mais certeza de que quero viver muitas outras ao seu lado...",
    src: hoje},
];

export function TimelineSection() {
  return (
    <section id="linha-do-tempo" className="scroll-mt-8 px-6 py-16 bg-gradient-to-b from-transparent via-[oklch(0.94_0.03_30)]/40 to-transparent dark:via-transparent">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-script text-3xl text-primary mb-4"
          >
            a nossa linha do tempo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl"
          >
            de onde viemos
          </motion.h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {events.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-6 ring-4 ring-background" />

                <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] border border-border/50">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">{e.date}</p>
                      <img
                        src={e.src}
                        alt={e.title}
                        className="
                          w-full
                          h-100
                          object-cover
                          rounded-xl
                          mb-4
                        "
                      />
                    <h3 className="text-2xl mb-2 dark:text-red-900">{e.title}</h3>
                    <p className="text-muted-foreground italic text-sm leading-relaxed">{e.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
