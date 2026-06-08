import { motion } from "motion/react";

const events = [
  { date: "19 · Jun · 2022", title: "o começo", text: "o dia em que tudo virou nós." },
  { date: "—", title: "primeira viagem", text: "descobrimos que somos ainda melhores na estrada." },
  { date: "—", title: "primeiro aniversário juntos", text: "um ano que pareceu uma vida inteira — no melhor sentido." },
  { date: "—", title: "aquele dia bobo", text: "rindo até doer a barriga, sem motivo nenhum." },
  { date: "hoje", title: "ainda aqui", text: "e tem muito mais pela frente." },
];

export function TimelineSection() {
  return (
    <section id="linha-do-tempo" className="px-6 py-16 bg-gradient-to-b from-transparent via-[oklch(0.94_0.03_30)]/40 to-transparent">
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
                    <h3 className="text-2xl mb-2">{e.title}</h3>
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
