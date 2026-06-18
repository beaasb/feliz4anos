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

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1") {
      setUnlocked(true);
    }
  }, []);

  const handleUnlock = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setUnlocked(true);
  };

  if (!unlocked) return <PasswordGate onUnlock={handleUnlock} />;

  return (
    <div className="relative overflow-x-hidden">
      <Petals />
      <Nav />
      <main className="relative z-10">
        <CounterSection />
        <SongSection />
        <LetterSection />
        <MomentsSection />
        <TimelineSection />
        <MemoryGameSection />
        <footer className="text-center py-10 text-sm text-muted-foreground italic">
          feito com ♥ — 19.06.2022 → para sempre
        </footer>
      </main>
    </div>
  );
}
