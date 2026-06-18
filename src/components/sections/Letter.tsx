import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const photoStrip = [
  { emoji: "💋", tone: "from-[oklch(0.88_0.08_15)] to-[oklch(0.78_0.12_10)]" },
  { emoji: "🥰", tone: "from-[oklch(0.9_0.07_350)] to-[oklch(0.8_0.1_340)]" },
  { emoji: "💞", tone: "from-[oklch(0.88_0.08_25)] to-[oklch(0.78_0.1_20)]" },
];

export function LetterSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="carta" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-script text-3xl text-primary mb-4 text-center"
        >
          uma carta para você
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl mb-14 text-center"
        >
          tudo que eu queria te dizer
        </motion.h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center justify-items-center">
          {/* Envelope + carta */}
          <div className="relative w-full max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="relative mx-auto"
              style={{ perspective: "1200px" }}
            >
              <AnimatePresence mode="wait">
                {!open ? (
                  <motion.div
                    key="envelope"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full aspect-[3/2] mx-auto"
                  >
                    {/* corpo do envelope */}
                    <div className="absolute inset-0 rounded-md shadow-[var(--shadow-card)] overflow-hidden"
                      style={{ background: "linear-gradient(135deg, oklch(0.92 0.05 25), oklch(0.85 0.08 20))" }}
                    >
                      {/* aba inferior (V invertido) */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.88 0.06 22) 50%, transparent 50%), linear-gradient(-135deg, oklch(0.88 0.06 22) 50%, transparent 50%)",
                          backgroundSize: "50% 100%",
                          backgroundPosition: "left, right",
                          backgroundRepeat: "no-repeat",
                          opacity: 0.6,
                        }}
                      />
                      {/* aba superior (triangular fechada) */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1/2"
                        style={{
                          background: "linear-gradient(180deg, oklch(0.82 0.09 18), oklch(0.78 0.1 18))",
                          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                        }}
                      />
                      {/* selo de coração */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground text-xl shadow-[var(--shadow-soft)] heart-pulse">
                        ♥
                      </div>
                    </div>

                    <button
                      onClick={() => setOpen(true)}
                      className="absolute -bottom-14 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-script text-2xl shadow-[var(--shadow-soft)] hover:scale-105 transition-transform"
                    >
                      abrir e ler ♥
                    </button>
                  </motion.div>
                ) : (
                  <motion.article
                    key="letter"
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-card rounded-2xl p-8 md:p-12 shadow-[var(--shadow-card)] border border-border/50 relative"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(transparent, transparent 31px, oklch(0.9 0.02 40 / 0.4) 32px)",
                    }}
                  >
                    <div className="font-script text-2xl md:text-3xl leading-[2rem] md:leading-[2.2rem] text-foreground/85 space-y-5">
                      <p>Meu amor,</p>
                      <p>
                        [Escreva aqui a sua carta. Conte como tudo começou, o que ela
                        representa pra você, as memórias que mais te marcam e tudo aquilo
                        que às vezes a gente esquece de dizer no dia a dia.]
                      </p>
                      <p>
                        [Substitua este texto em{" "}
                        <code className="font-body text-xs bg-muted/60 px-1.5 py-0.5 rounded">
                          src/components/sections/Letter.tsx
                        </code>
                        .]
                      </p>
                      <p className="text-right pt-3">com todo o meu amor,<br />sempre seu ♥</p>
                    </div>

                    <button
                      onClick={() => setOpen(false)}
                      className="mt-8 mx-auto block text-sm text-muted-foreground italic underline-offset-4 hover:underline"
                    >
                      fechar carta
                    </button>
                  </motion.article>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Tirinha de fotos estilo cabine */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 6 }}
            whileInView={{ opacity: 1, x: 0, rotate: 4 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-3 pb-10 shadow-[var(--shadow-card)] rounded-sm relative"
            style={{ transform: "rotate(4deg)" }}
          >
            <div className="flex flex-col gap-3">
              {photoStrip.map((p, i) => (
                <div
                  key={i}
                  className={`w-36 md:w-40 aspect-square bg-gradient-to-br ${p.tone} flex items-center justify-center text-4xl`}
                >
                  {p.emoji}
                </div>
              ))}
            </div>
            <p className="absolute bottom-2 left-0 right-0 text-center font-script text-lg text-foreground/60">
              nós ♥
            </p>
          </motion.div>
        </div>

        <p className="text-center text-xs text-muted-foreground/70 mt-10 italic">
          dica: troque os 3 placeholders da tirinha por &lt;img&gt; em src/components/sections/Letter.tsx
        </p>
      </div>
    </section>
  );
}
