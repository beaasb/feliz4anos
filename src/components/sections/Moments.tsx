import { motion } from "motion/react";

const moments = [
  { caption: "nosso primeiro encontro", emoji: "☕", tone: "from-[oklch(0.88_0.08_25)] to-[oklch(0.78_0.1_20)]" },
  { caption: "aquela viagem", emoji: "🌊", tone: "from-[oklch(0.85_0.07_220)] to-[oklch(0.75_0.1_230)]" },
  { caption: "do nada, num domingo", emoji: "🌷", tone: "from-[oklch(0.9_0.07_350)] to-[oklch(0.8_0.1_340)]" },
  { caption: "aniversário", emoji: "🎂", tone: "from-[oklch(0.9_0.06_60)] to-[oklch(0.8_0.1_50)]" },
  { caption: "rindo de besteira", emoji: "✨", tone: "from-[oklch(0.92_0.05_90)] to-[oklch(0.82_0.08_80)]" },
  { caption: "abraço apertado", emoji: "💕", tone: "from-[oklch(0.88_0.08_15)] to-[oklch(0.78_0.12_10)]" },
];

export function MomentsSection() {
  return (
    <section id="momentos" className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-script text-3xl text-primary mb-4"
          >
            nossos momentos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl"
          >
            congelados pra sempre
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-muted-foreground italic mt-3"
          >
            substitua os cards abaixo pelas nossas fotos e vídeos favoritos
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {moments.map((m, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-border/50"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${m.tone}`} />
              <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl opacity-80 group-hover:scale-110 transition-transform duration-500">
                {m.emoji}
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <p className="font-script text-xl md:text-2xl text-white drop-shadow">{m.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground/70 mt-8 italic">
          dica: troque cada card por uma &lt;img&gt; ou &lt;video&gt; em src/components/sections/Moments.tsx
        </p>
      </div>
    </section>
  );
}
