import { useState } from "react";
import { motion } from "motion/react";

const PASSWORD = "190622";

export function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(0);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setShake((s) => s + 1);
      setTimeout(() => setError(false), 1500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <div className="text-5xl heart-pulse inline-block mb-6">♥</div>
        <p className="font-script text-3xl text-primary mb-3">oi, meu amor</p>
        <h1 className="text-4xl md:text-5xl mb-3">um cantinho só nosso</h1>
        <p className="text-muted-foreground italic mb-10">digite a nossa data pra entrar</p>

        <motion.form
          key={shake}
          onSubmit={submit}
          animate={error ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <input
            type="password"
            inputMode="numeric"
            pattern="[0-9]*"
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value.replace(/\D/g, ""))}
            placeholder="••••••"
            className="w-full text-center text-3xl tracking-[0.6em] py-4 px-6 rounded-2xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 transition-all font-display"
          />
          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-[var(--shadow-soft)]"
          >
            entrar
          </button>
          {error && (
            <p className="text-sm text-destructive italic">
              quase... tenta de novo ♥
            </p>
          )}
        </motion.form>

        <p className="text-xs text-muted-foreground/60 mt-10 italic">
          dica: é uma data muito especial pra nós dois
        </p>
      </motion.div>
    </div>
  );
}
