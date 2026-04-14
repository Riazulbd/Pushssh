import { motion } from 'motion/react';

export default function Problem() {
  const stats = [
    { value: "78%", title: "Leads Never Get a Second Follow-Up", desc: "Most agents stop after one attempt, leaving qualified money on the table." },
    { value: "5 min", title: "Before Lead Interest Drops 80%", desc: "The first response window is brutally short. AI never misses it." },
    { value: "60%", title: "Of Your CRM Could Be Reactivated", desc: "Dead leads are not dead—they just were not followed up correctly." }
  ];

  return (
    <section className="relative py-32 bg-surface overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: -2 }}
            viewport={{ once: true }}
            className="inline-block bg-secondary px-4 py-1 text-white font-bold rounded-full mb-6"
          >
            THE PROBLEM
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl md:text-5xl font-black tight-tracking mb-8"
          >
            Most Leads Go Cold Before <br/>Your Team Even Calls Once.
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-outline-variant text-center group transition-all hover:shadow-xl"
            >
              <div className="text-4xl font-black text-primary mb-4 group-hover:scale-110 transition-transform inline-block">{stat.value}</div>
              <h3 className="font-bold text-xl mb-2">{stat.title}</h3>
              <p className="text-on-surface-variant text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
