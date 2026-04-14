import { motion } from 'motion/react';

export default function Results() {
  return (
    <>
      <div className="w-full overflow-hidden leading-[0] fill-primary relative z-10">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
      
      <section className="bg-primary pt-20 pb-32 text-on-primary relative overflow-hidden" id="results">
        {/* Animated background circles */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
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
            When Response Time Drops, <br/>Revenue Starts Compounding.
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { val: "68%", label: "Of cold leads reactivated from dead GHL pipelines." },
              { val: "$240K+", label: "In closed deals attributed to AI follow-up in 180 days." },
              { val: "47 hrs", label: "Saved per agent monthly on manual outreach." }
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
    </>
  );
}
