import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PasswordGate } from "@/components/PasswordGate";
import { Nav, Petals } from "@/components/Chrome";
import { CounterSection } from "@/components/sections/Counter";
import { SongSection } from "@/components/sections/Song";
import { LetterSection } from "@/components/sections/Letter";
import { MomentsSection } from "@/components/sections/Moments";
import { TimelineSection } from "@/components/sections/Timeline";
import { MemoryGameSection } from "@/components/sections/MemoryGame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Para Você ♥" },
      { name: "description", content: "Um cantinho só nosso — feito com muito amor." },
      { property: "og:title", content: "Para Você ♥" },
      { property: "og:description", content: "Um cantinho só nosso — feito com muito amor." },
    ],
  }),
  component: Index,
});

const STORAGE_KEY = "pv_unlocked_v1";

function Index() {
  const [unlocked, setUnlocked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1") {
      setUnlocked(true);
    }
  }, []);

  const handleUnlock = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setUnlocked(true);
  };

  if (!unlocked)
    return (
      <PasswordGate
        onUnlock={handleUnlock}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
    );

  return (
    <div className="relative overflow-x-hidden">
      <Petals darkMode={darkMode} />
      <div className="sticky top-0 z-50">
      <Nav
         darkMode={darkMode}
         toggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              fixed
              top-3
              right-5
              z-[9999]
              rounded-full
              px-4
              py-2
              dark:text-yellow-900
              bg-white/80
              backdrop-blur
              shadow-lg
              hover:scale-105
              transition
            "
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      <main className="relative z-10">
        <CounterSection />
        <SongSection />
        <LetterSection />
        <MomentsSection />
        <TimelineSection />
        <MemoryGameSection />
        <footer className="text-center py-10 text-sm text-muted-foreground italic">
          feito com muuuuuito amor ♥ — 19.06.2022 → para sempre
        </footer>
      </main>
    </div>
  );
}
