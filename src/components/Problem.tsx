import { motion } from 'motion/react';

export default function Problem() {
  const stats = [
    { value: '78%', title: 'Leads Never Get a Second Follow-Up', desc: 'Most agents stop after one attempt, leaving qualified money on the table.' },
    { value: '5 min', title: 'Before Lead Interest Drops 80%', desc: 'The first response window is brutally short. AI never misses it.' },
    { value: '60%', title: 'Of Your CRM Could Be Reactivated', desc: 'Dead leads are not dead - they just were not followed up correctly.' },
  ];

  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-32">
      <div className="absolute top-1/2 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <motion.span
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: -2 }}
            viewport={{ once: true }}
            className="mb-6 inline-block rounded-full bg-secondary px-4 py-1 font-bold text-white"
          >
            THE PROBLEM
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 font-headline text-3xl font-black tight-tracking sm:mb-8 sm:text-4xl lg:text-5xl"
          >
            Most Leads Go Cold Before <br />
            Your Team Even Calls Once.
          </motion.h2>
        </div>

        <div className="relative">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3 lg:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative z-10 rounded-[2rem] border border-outline-variant bg-white p-6 text-center shadow-sm transition-all hover:shadow-xl sm:rounded-[2.5rem] sm:p-8"
              >
                <div className="mb-4 inline-block text-3xl font-black text-primary transition-transform group-hover:scale-110 sm:text-4xl">{stat.value}</div>
                <h3 className="mb-2 text-xl font-bold">{stat.title}</h3>
                <p className="text-sm text-on-surface-variant">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
