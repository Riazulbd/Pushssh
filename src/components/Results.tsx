import { motion } from 'motion/react';

export default function Results() {
  return (
    <section className="bg-primary pt-20 pb-32 text-on-primary relative overflow-hidden" id="results">
      {/* Animated background circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] -mr-64 -mt-64"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-8 text-center mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-5xl font-black tight-tracking mb-6"
        >
          When Response Time Drops, <br />
          Revenue Starts Compounding.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { val: '68%', label: 'Of cold leads reactivated from dead GHL pipelines.' },
            { val: '$240K+', label: 'In closed deals attributed to AI follow-up in 180 days.' },
            { val: '47 hrs', label: 'Saved per agent monthly on manual outreach.' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/20 group"
            >
              <div className="text-5xl font-black mb-2 group-hover:text-secondary-container transition-colors">{stat.val}</div>
              <p className="text-on-primary/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-8 relative z-10"
      >
        <div className="relative bg-surface-container-lowest rounded-[3rem] p-4 shadow-[0_50px_100px_rgba(0,0,0,0.3)] group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.8rem]"></div>
          <img
            className="w-full h-auto rounded-[2.5rem]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbU87g_tCX__wO0vYAr9PP56149_ozt2PPyqlqyaXO0aU9muTkP6V3Vjjp0WKz1aT5cF-1-fjWT9OKRSa6SU45IQm34nYJPs73C5Fashk4xV4cO7eTmh_boG0NVIohWjn-okhIqNxsjxDMakiBnEqbQD3UlD3nHrjXrY4FnUpFNSJBySriA7osVHh719EdgGMZgZ5nOl_ji7LyTJH5FNXv03PCCMRbJNq_qew8tJJyzHIeG_Dxw_nWIvaFA6beD4faSwVLZXdXl0Zw"
            alt="Analytics Dashboard"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </section>
  );
}
