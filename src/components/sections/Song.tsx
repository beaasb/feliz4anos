import { motion } from "motion/react";

export function SongSection() {
  return (
    <section id="musica" className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-b from-transparent via-[oklch(0.94_0.03_30)]/40 to-transparent">
      <div className="max-w-2xl w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-script text-3xl text-primary mb-4"
        >
          a nossa música
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl mb-3"
        >
          toca pra você lembrar de mim
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-muted-foreground italic mb-10"
        >
          aperta o play e fecha os olhos
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-[var(--shadow-soft)]"
        >
          <iframe
            title="Nossa música"
            src="https://open.spotify.com/embed/track/3MZasYL4eB4Tm2U2LZ58tj?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder={0}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
