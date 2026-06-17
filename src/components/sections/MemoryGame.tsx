import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

import jogo from "@/assets/memorygame/jogo.jpg";
import jogo1 from "@/assets/memorygame/jogo1.jpg";
import jogo2 from "@/assets/memorygame/jogo2.JPG";
import jogo3 from "@/assets/memorygame/jogo3.JPG";
import jogo4 from "@/assets/memorygame/jogo4.JPG";
import jogo5 from "@/assets/memorygame/jogo5.JPG";
import jogo6 from "@/assets/memorygame/jogo6.JPG";
import jogo7 from "@/assets/memorygame/jogo7.JPG";

console.log(jogo);
console.log(jogo1);

type Card = {
  id: number;
  pairId: number;
  image: string;
};

const pairs = [
  { image: jogo },
  { image: jogo1 },
  { image: jogo2 },
  { image: jogo3 },
  { image: jogo4 },
  { image: jogo5 },
  { image: jogo6 },
  { image: jogo7 },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeDeck(): Card[] {
  const deck: Card[] = [];
  pairs.forEach((p, idx) => {
    deck.push({
    id: idx * 2,
    pairId: idx,
    image: p.image,
  });
  deck.push({
    id: idx * 2 + 1,
    pairId: idx,
    image: p.image,
  });
  });
  return shuffle(deck);
}

export function MemoryGameSection() {
  const [deck, setDeck] = useState<Card[]>(() => makeDeck());
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  const won = matched.length === deck.length;

  useEffect(() => {
    if (flipped.length !== 2) return;
    const [a, b] = flipped;
    const ca = deck.find((c) => c.id === a)!;
    const cb = deck.find((c) => c.id === b)!;
    setMoves((m) => m + 1);
    if (ca.pairId === cb.pairId) {
      setMatched((m) => [...m, a, b]);
      setFlipped([]);
    } else {
      const t = setTimeout(() => setFlipped([]), 850);
      return () => clearTimeout(t);
    }
  }, [flipped, deck]);

  const handleFlip = (id: number) => {
    if (flipped.length === 2) return;
    if (flipped.includes(id) || matched.includes(id)) return;
    setFlipped((f) => [...f, id]);
  };

  const reset = () => {
    setDeck(makeDeck());
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  return (
    <section id="jogo" className="scroll-mt-8 px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-script text-3xl text-primary mb-4"
          >
            um joguinho pra você
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl mb-3"
          >
            jogo da memória
          </motion.h2>
          <p className="text-muted-foreground italic">encontre as fotos pares ♥</p>
        </div>

        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-sm text-muted-foreground">jogadas: <span className="font-medium text-foreground tabular-nums">{moves}</span></p>
          <button
            onClick={reset}
            className="text-sm px-4 py-2 dark:text-red-900 rounded-full border border-border bg-card hover:bg-accent transition-colors"
          >
            reiniciar
          </button>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {deck.map((c) => {
            const isOpen = flipped.includes(c.id) || matched.includes(c.id);
            return (
              <button
                key={c.id}
                onClick={() => handleFlip(c.id)}
                className="aspect-square relative [perspective:1000px]"
                aria-label="carta"
              >
                <div
                  className="absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d]"
                  style={{ transform: isOpen ? "rotateY(180deg)" : "rotateY(0deg)" }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(0.7_0.16_18)] to-[oklch(0.55_0.18_15)] shadow-[var(--shadow-card)] flex items-center justify-center text-white text-3xl [backface-visibility:hidden]">
                    ♥
                  </div>
                  <div
                    className={`
                      absolute inset-0
                      rounded-2xl
                      overflow-hidden
                      shadow-[var(--shadow-card)]
                      [backface-visibility:hidden]
                      [transform:rotateY(180deg)]
                      ${matched.includes(c.id) ? "ring-2 ring-primary/60" : ""}
                    `}
                  >
                    <img
                      src={c.image}
                      alt="memória"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {won && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="mt-10 text-center bg-card rounded-2xl p-8 border border-border/50 shadow-[var(--shadow-card)]"
          >
            <p className="font-script text-4xl text-primary mb-2">você venceu ♥</p>
            <p className="text-muted-foreground">em {moves} jogadas. eu já tinha te escolhido na primeira.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
