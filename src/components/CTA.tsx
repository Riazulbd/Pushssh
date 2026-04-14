import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] overflow-hidden relative p-12 md:p-24 text-center group"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container/40 via-transparent to-transparent"
          ></motion.div>
          
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline text-5xl md:text-6xl font-black text-white mb-8"
            >
              Ready to Install Your <br/>AI Sales Rep?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-xl max-w-2xl mx-auto mb-12"
            >
              Claim your territory and automate your authority. Limited spots available for certified GHL implementation.
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary-container text-on-secondary-container px-12 py-6 rounded-full text-xl font-bold transition-transform shadow-2xl hover:shadow-secondary-container/20"
            >
              Book Your Implementation Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
