import { motion } from "motion/react";

const bonus = [
  "07g6lmHFSud1Suf2BvMdKb",
  "7BWj4bLH3ppKNGH9rncZWT",
];

export function SongSection() {
  return (
    <section id="musica" className="px-6 py-16 bg-gradient-to-b from-transparent via-[oklch(0.94_0.03_30)]/40 to-transparent">
      <div className="max-w-2xl w-full text-center mx-auto">
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
            data-testid="embed-iframe"
            title="Nossa música"
            style={{ borderRadius: 12 }}
            src="https://open.spotify.com/embed/track/3MZasYL4eB4Tm2U2LZ58tj?utm_source=generator&theme=0"
            width="100%"
            height={352}
            frameBorder={0}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto mt-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-script text-2xl text-primary mb-2"
        >
          bônus
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl mb-8"
        >
          mais um pouquinho de nós
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {bonus.map((id, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.1 }}
              className="rounded-xl overflow-hidden shadow-[var(--shadow-card)]"
            >
              <iframe
                data-testid="embed-iframe"
                title={`Bônus ${i + 1}`}
                style={{ borderRadius: 12 }}
                src={`https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`}
                width="100%"
                height={232}
                frameBorder={0}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
