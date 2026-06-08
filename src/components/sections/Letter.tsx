import { motion } from "motion/react";

export function LetterSection() {
  return (
    <section id="carta" className="flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-script text-3xl text-primary mb-4 text-center"
        >
          uma cartinha para você
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl mb-10 text-center"
        >
          tudo que eu queria te dizer
        </motion.h2>

        <motion.article
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl p-8 md:p-14 shadow-[var(--shadow-card)] border border-border/50 relative"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 31px, oklch(0.9 0.02 40 / 0.4) 32px)",
          }}
        >
          <div className="font-script text-2xl md:text-3xl leading-[2rem] md:leading-[2.2rem] text-foreground/85 space-y-6">
            <p>Meu amor,</p>
            <p>
              [Escreva aqui a sua carta. Conte como tudo começou, o que ela representa
              pra você, as memórias que mais te marcam, as pequenas manias que você ama
              nela, e tudo aquilo que às vezes a gente esquece de dizer no dia a dia.]
            </p>
            <p>
              [Pode ser longo, pode ser curto — só precisa ser verdadeiro. Eu deixei esse
              espaço pronto pra você preencher quando estiver pronto. Substitua este texto
              em <code className="font-body text-xs bg-muted/60 px-1.5 py-0.5 rounded">src/components/sections/Letter.tsx</code>.]
            </p>
            <p className="text-right pt-4">com todo o meu amor,<br />sua nega ♥</p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
