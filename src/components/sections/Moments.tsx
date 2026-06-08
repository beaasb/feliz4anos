import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const moments = [
  { caption: "nosso primeiro encontro", emoji: "☕", tone: "from-[oklch(0.88_0.08_25)] to-[oklch(0.78_0.1_20)]" },
  { caption: "aquela viagem", emoji: "🌊", tone: "from-[oklch(0.85_0.07_220)] to-[oklch(0.75_0.1_230)]" },
  { caption: "do nada, num domingo", emoji: "🌷", tone: "from-[oklch(0.9_0.07_350)] to-[oklch(0.8_0.1_340)]" },
  { caption: "aniversário", emoji: "🎂", tone: "from-[oklch(0.9_0.06_60)] to-[oklch(0.8_0.1_50)]" },
  { caption: "rindo de besteira", emoji: "✨", tone: "from-[oklch(0.92_0.05_90)] to-[oklch(0.82_0.08_80)]" },
  { caption: "abraço apertado", emoji: "💕", tone: "from-[oklch(0.80_0.08_15)] to-[oklch(0.78_0.12_10)]" },
  { caption: "nossa música", emoji: "🎵", tone: "from-[oklch(0.87_0.08_290)] to-[oklch(0.77_0.12_280)]" },
  { caption: "assistindo filme juntos", emoji: "🎬", tone: "from-[oklch(0.86_0.07_250)] to-[oklch(0.74_0.10_240)]" },
  { caption: "mensagem inesperada", emoji: "💌", tone: "from-[oklch(0.91_0.08_10)] to-[oklch(0.82_0.12_5)]" },
  { caption: "planos para o futuro", emoji: "🏡", tone: "from-[oklch(0.90_0.06_140)] to-[oklch(0.80_0.09_130)]" },  
];

export function MomentsSection() {

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % moments.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? moments.length - 1 : prev - 1
    );
  };
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

        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">

        <button
          onClick={prev}
          className="absolute left-2 md:left-40 z-50 p-3 rounded-full bg-white/80 backdrop-blur shadow-lg hover:scale-110 transition"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={next}
          className="absolute right-2 md:right-40 z-50 p-3 rounded-full bg-white/80 backdrop-blur shadow-lg hover:scale-110 transition"
        >
          <ChevronRight size={28} />
        </button>

        {moments.map((m, i) => {
          const offset =
            (i - current + moments.length) % moments.length;

          const positions = [
            { x: 0, y: 0, rotate: 0, scale: 1 },

            { x: -8, y: 6, rotate: -3, scale: 0.98 },
            { x: 9, y: -4, rotate: 2, scale: 0.98 },

            { x: -12, y: -8, rotate: 3, scale: 0.97 },
            { x: 11, y: 12, rotate: -4, scale: 0.97 },

            { x: -16, y: 18, rotate: -6, scale: 0.96 },
            { x: 17, y: -11, rotate: 4, scale: 0.96 },

            { x: -20, y: -13, rotate: -2, scale: 0.95 },
            { x: 19, y: 22, rotate: 6, scale: 0.95 },

            { x: -24, y: -17, rotate: -7, scale: 0.94 },
          ];

          const pos = positions[offset];

          if (!pos) return null;

          return (
            <motion.figure
              key={i}
              animate={{
                x: pos.x,
                y: pos.y,
                rotate: pos.rotate,
                scale: pos.scale,
                opacity: offset === 4 ? 0.5 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 20,
              }}
              style={{
                zIndex: 10 - offset,
              }}
              whileHover={{
                y: pos.y - 15,
                scale: pos.scale + 0.03,
              }}
              className="
                absolute
                w-[260px]
                md:w-[340px]
                aspect-[4/5]
                rounded-2xl
                overflow-hidden
                shadow-[var(--shadow-card)]
                border border-border/50
                cursor-pointer
                group
              "
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${m.tone}`}
              />

              <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl opacity-80 transition-transform duration-500 group-hover:scale-110">
                {m.emoji}
              </div>

              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <p className="font-script text-xl md:text-2xl text-white drop-shadow">
                  {m.caption}
                </p>
              </figcaption>
            </motion.figure>
          );
        })}
      </div>

        <p className="text-center text-xs text-muted-foreground/70 mt-8 italic">
          dica: troque cada card por uma &lt;img&gt; ou &lt;video&gt; em src/components/sections/Moments.tsx
        </p>
      </div>
    </section>
  );
}
