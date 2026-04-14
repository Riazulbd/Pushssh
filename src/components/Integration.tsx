import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Integration() {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img 
              className="w-full rounded-[2.5rem] shadow-2xl relative z-10 border border-outline-variant/10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUPnMOteDeW8u4-CwBeojtKHbWJtrafBXVV1GAYPvzl7HncGq8rie3JK9Tkjr7nEuYp23XlYXxlwXMaZzzWQ05P4h46M-Odaxlf-5pR8nRt71NB9vdmMP1OGN1Mph5vD9TQqsXHMFyhVRI6bn1fK-dOt28eKzUft3naX89_u5avnKKoBAJ55ikivBTpPeftwpIh13IoKWUipPUUmnCN2_Z-aPZj2vxlcGAaBt9MG3j2Lf1h9HDK8qEZNYXAzRTqQHjEvtQs4w342bS" 
              alt="GHL Integration"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-primary text-white px-4 py-1 font-bold rounded-full mb-6"
            >
              BUILT ON GHL
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-headline text-5xl font-black tight-tracking mb-8"
            >
              Already in GoHighLevel? <br/>We're Live in 48 Hours.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-on-surface-variant mb-8 leading-relaxed"
            >
              No ripping out your stack. No learning new software. We install directly into your existing GHL sub-account and have everything live within two business days.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-primary font-bold flex items-center gap-2 group text-xl"
            >
              Book Your Strategy Call 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
