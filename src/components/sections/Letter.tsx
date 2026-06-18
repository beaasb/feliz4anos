import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const photos = [
  { emoji: "💋", tone: "from-[oklch(0.88_0.08_15)] to-[oklch(0.78_0.12_10)]", rotate: -8, top: "-4%", right: "55%" },
  { emoji: "🥰", tone: "from-[oklch(0.9_0.07_350)] to-[oklch(0.8_0.1_340)]", rotate: 4, top: "32%", right: "20%" },
  { emoji: "💞", tone: "from-[oklch(0.88_0.08_25)] to-[oklch(0.78_0.1_20)]", rotate: 10, top: "70%", right: "-8%" },
];

export function LetterSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="carta" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-3xl w-full">
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

        {/* Container único: envelope + carta + fotos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative mx-auto w-full"
          style={{ perspective: "1400px" }}
        >
          <div className="relative">
            {/* ENVELOPE — absoluto, desce ao abrir */}
            <motion.div
              className="absolute left-0 right-0 w-full aspect-[3/2] mx-auto"
              initial={false}
              animate={{
                top: open ? "calc(100% - 38%)" : "0%",
                scale: open ? 0.92 : 1,
                zIndex: open ? 0 : 20,
              }}
              transition={{
                top: { type: "spring", stiffness: 180, damping: 14, mass: 0.9, delay: open ? 0.35 : 0 },
                scale: { duration: 0.5, delay: open ? 0.35 : 0 },
                zIndex: { delay: open ? 0 : 0.6 },
              }}
            >
              <div
                className="absolute inset-0 rounded-md shadow-[var(--shadow-card)]"
                style={{ background: "linear-gradient(160deg, oklch(0.9 0.07 22), oklch(0.82 0.1 18))" }}
              />
              <div
                className="absolute inset-0 rounded-md"
                style={{
                  background: "linear-gradient(180deg, oklch(0.88 0.08 22), oklch(0.8 0.11 18))",
                  clipPath: "polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)",
                  boxShadow: "inset 0 2px 8px oklch(0.4 0.08 25 / 0.18)",
                }}
              />
              <motion.div
                className="absolute top-0 left-0 right-0 h-[55%] origin-top"
                style={{
                  background: "linear-gradient(180deg, oklch(0.86 0.09 20), oklch(0.78 0.11 18))",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  transformStyle: "preserve-3d",
                  filter: open ? "none" : "drop-shadow(0 4px 6px oklch(0.4 0.08 25 / 0.25))",
                }}
                animate={{ rotateX: open ? -178 : 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <AnimatePresence>
                {!open && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.4 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground text-2xl shadow-[var(--shadow-soft)] heart-pulse z-10"
                  >
                    ♥
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Placeholder pra manter altura do envelope quando fechado */}
            <div className="w-full aspect-[3/2] invisible" aria-hidden />

            {/* CARTA — em primeiro plano abaixo do z das fotos */}
            <motion.div
              className="overflow-hidden relative z-10"
              initial={false}
              animate={{ height: open ? "auto" : 0, marginTop: open ? "-25%" : 0 }}
              transition={{ duration: 0.6, delay: open ? 0.2 : 0.4, ease: "easeInOut" }}
            >
              <motion.article
                className="mx-auto w-[92%] bg-card rounded-md border border-border/60 shadow-[var(--shadow-card)] p-6 md:p-8 relative"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(transparent, transparent 27px, oklch(0.9 0.02 40 / 0.4) 28px)",
                }}
                initial={false}
                animate={{ y: open ? 0 : -120, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.7, delay: open ? 0.4 : 0, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="font-script text-xl md:text-2xl leading-[1.8rem] md:leading-[2.1rem] text-foreground/85 space-y-4">
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
                </div>
              </motion.article>
            </motion.div>

            {/* FOTOS — em diagonal sobre envelope/carta, sempre por cima */}
            <div className="absolute inset-0 pointer-events-none z-40">
              {photos.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -20, rotate: p.rotate - 6 }}
                  whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12, type: "spring", stiffness: 120, damping: 14 }}
                  whileHover={{ scale: 1.06, rotate: p.rotate + 2, zIndex: 50 }}
                  className="absolute bg-white p-2 pb-6 shadow-[var(--shadow-card)] rounded-sm pointer-events-auto"
                  style={{ top: p.top, right: p.right }}
                >
                  <div
                    className={`w-28 md:w-32 aspect-square bg-gradient-to-br ${p.tone} flex items-center justify-center text-4xl`}
                  >
                    {p.emoji}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="mt-10 mx-auto block px-6 py-3 rounded-full bg-primary text-primary-foreground font-script text-2xl shadow-[var(--shadow-soft)] hover:scale-105 transition-transform relative z-30"
          >
            {open ? "fechar carta" : "abrir e ler ♥"}
          </button>
        </motion.div>

        <p className="text-center text-xs text-muted-foreground/70 mt-10 italic">
          dica: troque os 3 placeholders das fotos por &lt;img&gt; em src/components/sections/Letter.tsx
        </p>
      </div>
    </section>
  );
}
