import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

type PetalsProps = {
  darkMode: boolean;
};

export function Petals({ darkMode }: PetalsProps) {
  const petals = useMemo(() => {
    const emojis = darkMode
      ? ["⭐", "✨", "🌙", "💖", "❤️", "♥", "💫", "☄️", "🌟"]
      : ["🌸", "🌷", "♥", "✿", "🌹", "🌼", "❤️", "🩷"];

    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 12 + Math.random() * 14,
      delay: Math.random() * 1,
      size: 12 + Math.random() * 18,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      opacity: 0.4 + Math.random() * 0.4,
    }));
  }, [darkMode]);

  return (
    <>
      {petals.map((p) => (
        <span
          key={`${darkMode}-${p.id}`}
          className="fall-petal"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </>
  );
}

const links = [
  { href: "#contagem", label: "início" },
  { href: "#musica", label: "música" },
  { href: "#carta", label: "carta" },
  { href: "#momentos", label: "momentos" },
  { href: "#linha-do-tempo", label: "linha do tempo" },
  { href: "#jogo", label: "jogo" },
];

type NavProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export function Nav({ darkMode, toggleDarkMode }: NavProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        <button
          onClick={() => setOpen((o) => !o)}
          className="
            md:hidden
            mr-4
            w-11
            h-11
            rounded-full
            bg-card/80
            backdrop-blur-md
            border
            border-border
            flex
            items-center
            justify-center
            text-xl
          "
        >
          {open ? "✕" : "☰"}
        </button>
        <a href="#contagem" className="font-script text-2xl text-primary">para você ♥</a>
        <nav className="hidden md:flex ml-auto items-center gap-7">          
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href} href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary py-1"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </motion.header>
  );
}
