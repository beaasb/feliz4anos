import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

import foto1 from "@/assets/letter/foto1.JPG";
import foto2 from "@/assets/letter/foto2.jpg";
import foto3 from "@/assets/letter/foto3.JPG";

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
          animate={{
          paddingBottom: open ? 200 : 0
        }}
        transition={{ duration: 0.4 }}
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
              className="relative z-10"
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
                <div className="font-script text-xl dark:text-red-900 md:text-2xl leading-[1.8rem] md:leading-[2.1rem] text-foreground/85 space-y-4">
                  <p>Meu amor,</p>
                  <p>
                    Quatro anos.
                    E, por mais que pareça simples escrever esse número, eu sei que existe uma vida inteira de memórias dentro dele.
                  </p>
                  <p>
                    Foram anos de risadas, conversas, descobertas, aprendizados e de tantas versões nossas que passaram por esse caminho. 
                    E quando eu olho para trás, não vejo apenas os momentos felizes. Vejo tudo. 
                    Vejo os dias leves, os dias difíceis, os medos, as inseguranças e todas as vezes em que escolhemos continuar caminhando juntas.
                  </p>
                  <p>
                    Você me ensinou muito sobre o amor. 
                    Me ensinou que parceria é construída todos os dias, nos grandes momentos e principalmente nos pequenos. 
                    E eu amo a mulher que você é hoje, assim como amo todas as versões suas que tive a sorte de conhecer ao longo desses quatro anos.
                  </p>
                  <p>
                    Se tem uma coisa que aprendi sobre nós, é que a nossa história nem sempre aconteceu da forma que imaginamos. 
                    Mas, de alguma forma, ela sempre encontrou um caminho.
                  </p>
                  <p>
                    Talvez seja por isso que, quando eu penso no futuro, eu consigo enxergar uma vida inteira para nós. 
                    Não uma vida perfeita ou sem desafios, mas uma vida construída juntas, um passo de cada vez. Eu penso em nós. 
                    Penso nos sonhos que ainda não têm data, nas páginas que ainda estão em branco, nas fotos que ainda não tiramos, 
                    nos lugares que ainda não conhecemos, nas conquistas que ainda estão por vir e nas memórias que ainda nem imaginamos que vamos criar.
                  </p>
                  <p>
                    Porque, quando imagino os próximos capítulos da minha vida, você está em todos eles.
                  </p>
                  <p>
                    Obrigada por cada abraço, por cada conversa sincera e por continuar escolhendo nós. 
                    Eu escolho você hoje. E vou continuar escolhendo você, todos os dias, para sempre.
                  </p>
                  <p className="text-right pt-2">com todo o meu amor,<br />sua Nega ♥</p>
                </div>
              </motion.article>
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
              </motion.div>
            </motion.div>
            {/* BOTÃO INTEGRADO AO ENVELOPE */}
                <button
                  onClick={() => setOpen(!open)}
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    top-[calc(100%_-_20px)]
                    px-6 py-2
                    rounded-full
                    bg-primary
                    text-primary-foreground
                    font-script
                    text-xl
                    shadow-[var(--shadow-soft)]
                    hover:scale-105
                    transition-transform
                    z-50
                  "
                >
                  {open ? "fechar carta" : "abrir e ler ♥"}
                </button>

            {/* TIRINHA DE FOTOS (cabine) — sempre por cima */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -10, rotate: 8 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 5 }}
              animate={{
              top: open 
              ? "180px"   // mobile
              : "-20px"
            }}
            transition={{
              top: { duration: 0.6, ease: "easeInOut" },
              delay: 0.3,
              type: "spring",
              stiffness: 120,
              damping: 14,
            }}
              whileHover={{ rotate: 2, scale: 1.03 }}
              className="
                absolute
                top-[-4%]
                right-[-4%]
                md:right-[-10%]
                z-40
                bg-white
                p-3
                pb-10
                shadow-[var(--shadow-card)]
                rounded-sm
                -rotate-12
              "
            >
              <div className="flex flex-col gap-2">
                <img
                  src={foto1}
                  alt="Nós 1"
                  className="w-16 sm:w-20 md:w-28 aspect-square object-cover"
                />

                <img
                  src={foto2}
                  alt="Nós 2"
                  className="w-16 sm:w-20 md:w-28 aspect-square object-cover"
                />

                <img
                  src={foto3}
                  alt="Nós 3"
                  className="w-16 sm:w-20 md:w-28 aspect-square object-cover"
                />
              </div>

              <p className="absolute bottom-2 left-0 right-0 text-center font-script text-base text-zinc-700">
                nós ♥
              </p>
            </motion.div>

          </div>

         
        </motion.div>
      </div>
    </section>
  );
}
