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
              <div className="relative w-full aspect-[3/2] mx-auto">
                {/* Corpo do envelope (sempre visível) */}
                <div
                  className="absolute inset-0 rounded-md shadow-[var(--shadow-card)] overflow-hidden z-10"
                  style={{ background: "linear-gradient(135deg, oklch(0.92 0.05 25), oklch(0.85 0.08 20))" }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.88 0.06 22) 50%, transparent 50%), linear-gradient(-135deg, oklch(0.88 0.06 22) 50%, transparent 50%)",
                      backgroundSize: "50% 100%",
                      backgroundPosition: "left, right",
                      backgroundRepeat: "no-repeat",
                      opacity: 0.5,
                    }}
                  />
                </div>

                {/* Aba superior — abre quando open */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1/2 z-30"
                  style={{
                    background: "linear-gradient(180deg, oklch(0.82 0.09 18), oklch(0.78 0.1 18))",
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    transformOrigin: "top",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  animate={{ rotateX: open ? -175 : 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Selo de coração (só fechado) */}
                <AnimatePresence>
                  {!open && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.4 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground text-xl shadow-[var(--shadow-soft)] heart-pulse z-40"
                    >
                      ♥
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Carta saindo de dentro */}
                <motion.article
                  className="absolute left-1/2 -translate-x-1/2 w-[88%] bg-card rounded-md border border-border/60 shadow-[var(--shadow-card)] z-20 overflow-hidden"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(transparent, transparent 23px, oklch(0.9 0.02 40 / 0.4) 24px)",
                    top: "20%",
                    transformOrigin: "bottom center",
                  }}
                  initial={false}
                  animate={
                    open
                      ? { y: "-78%", height: "auto", paddingTop: 28, paddingBottom: 24 }
                      : { y: "0%", height: "60%", paddingTop: 16, paddingBottom: 16 }
                  }
                  transition={{
                    y: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: open ? 0.45 : 0 },
                    height: { duration: 0.5, delay: open ? 1.3 : 0 },
                  }}
                >
                  <motion.div
                    initial={false}
                    animate={{ opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.4, delay: open ? 1.5 : 0 }}
                    className="px-6 md:px-8 font-script text-xl md:text-2xl leading-[1.7rem] md:leading-[2rem] text-foreground/85 space-y-4"
                  >
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
                    <p className="text-right pt-2">com todo o meu amor,<br />sempre seu ♥</p>
                  </motion.div>
                </motion.article>

                {/* Bolso frontal do envelope (na frente da carta) */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2 z-30 rounded-b-md"
                  style={{
                    background: "linear-gradient(180deg, oklch(0.88 0.07 22), oklch(0.84 0.09 20))",
                    clipPath: "polygon(0 0, 50% 70%, 100% 0, 100% 100%, 0 100%)",
                    boxShadow: "inset 0 8px 16px -8px oklch(0.4 0.08 25 / 0.25)",
                  }}
                />
              </div>

              <button
                onClick={() => setOpen(!open)}
                className="mt-8 mx-auto block px-6 py-3 rounded-full bg-primary text-primary-foreground font-script text-2xl shadow-[var(--shadow-soft)] hover:scale-105 transition-transform"
              >
                {open ? "fechar carta" : "abrir e ler ♥"}
              </button>
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
