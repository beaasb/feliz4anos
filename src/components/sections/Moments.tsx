import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import outback from "@/assets/moments/outback.JPG";
import passeio from "@/assets/moments/passeio.JPG";
import morango from "@/assets/moments/morango.MP4";
import piscina from "@/assets/moments/piscina.JPG";
import teatro from "@/assets/moments/teatro.JPG";
import shopping from "@/assets/moments/shopping.MP4";
import madrinhas from "@/assets/moments/madrinhas.JPG";
import cataratas from "@/assets/moments/cataratas.jpg";
import show from "@/assets/moments/show.MP4";
import buque from "@/assets/moments/buque.JPG";
import astra from "@/assets/moments/astra.JPG";
import pipoca from "@/assets/moments/pipoca.MOV";

const moments = [
  {
    caption: "pedido no outback",
    type: "image",
    src: outback,
  },
  {
    caption: "passeio no parque da cidade",
    type: "image",
    src: passeio,
  },
  {
    caption: "festa do morango",
    type: "video",
    src: morango,
  },
  {
    caption: "piscininha 🌞",
    type: "image",
    src: piscina,
  },
  {
    caption: "show de luzes ",
    type: "image",
    src: teatro,
  },
  {
    caption: "rolê no shops",
    type: "video",
    src: shopping,
  },
  {
    caption: "madrinhas ✨",
    type: "image",
    src: madrinhas,
  },
  {
    caption: "viagem para as cataratas",
    type: "image",
    src: cataratas,
  },
  {
    caption: "showzin do Luan",
    type: "video",
    src: show,
  },
  {
    caption: "sempre com buquêzinho",
    type: "image",
    src: buque,
  },
  {
    caption: "rolêzin de astra",
    type: "image",
    src: astra,
  },
  {
    caption: "preparativos para a tarde de preguiça",
    type: "video",
    src: pipoca,
  },
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
    <section id="momentos" className="scroll-mt-8 px-6 py-16">
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
            nossas fotos e vídeos favoritos ♥
          </motion.p>
        </div>

        <div className="relative h-[620px] md:h-[720px] flex items-center justify-center overflow-hidden">

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
                w-[320px]
                sm:w-[320px]
                md:w-[420px]
                aspect-[4/5]
                rounded-2xl
                overflow-hidden
                shadow-[var(--shadow-card)]
                border border-border/50
                cursor-pointer
                group
              "
            >
              
            {m.type === "video" ? (
              <video
                src={m.src}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={m.src}
                alt={m.caption}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />
            )}
              
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <p className="font-script text-xl md:text-2xl text-white drop-shadow">
                  {m.caption}
                </p>
              </figcaption>
            </motion.figure>
          );
        })}
      </div>
      </div>
    </section>
  );
}
