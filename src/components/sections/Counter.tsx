import { useEffect, useState } from "react";
import { motion } from "motion/react";

const START_DATE = new Date("2022-06-19T00:00:00");

function diffParts(from: Date, to: Date) {
  const ms = to.getTime() - from.getTime();
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let dayDiff = to.getDate() - from.getDate();
  if (dayDiff < 0) months -= 1;
  if (months < 0) { years -= 1; months += 12; }

  return { days, hours, minutes, seconds, years, months: ((months % 12) + 12) % 12 };
}

export function CounterSection() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  const d = diffParts(START_DATE, now);

  const stats = [
    { label: "dias", value: d.days },
    { label: "horas", value: d.hours },
    { label: "minutos", value: d.minutes },
    { label: "segundos", value: d.seconds },
  ];

  return (
    <section id="contagem" className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-script text-3xl text-primary mb-4"
        >
          desde 19 de junho de 2022
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl mb-3"
        >
          estamos juntos há
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-12 italic"
        >
          {d.years} {d.years === 1 ? "ano" : "anos"} e {d.months} {d.months === 1 ? "mês" : "meses"} de nós
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)] border border-border/50"
            >
              <div className="text-4xl md:text-6xl font-display font-medium text-primary tabular-nums">
                {s.value.toString().padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground mt-2">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
          className="mt-12 text-2xl heart-pulse inline-block"
        >
          ♥
        </motion.div>
      </div>
    </section>
  );
}
