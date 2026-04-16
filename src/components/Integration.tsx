import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Integration() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/5 blur-[100px] sm:h-96 sm:w-96"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-2 rounded-[2rem] bg-primary/5 blur-2xl opacity-0 transition-opacity group-hover:opacity-100 sm:-inset-4 sm:rounded-[3rem]"></div>
            <img 
              className="relative z-10 w-full rounded-[1.75rem] border border-outline-variant/10 shadow-2xl sm:rounded-[2.5rem]" 
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
              className="mb-5 inline-block rounded-full bg-primary px-4 py-1 font-bold text-white sm:mb-6"
            >
              BUILT ON GHL
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6 font-headline text-3xl font-black tight-tracking sm:mb-8 sm:text-4xl lg:text-5xl"
            >
              Already in GoHighLevel? <br/>We're Live in 48 Hours.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8 text-base leading-relaxed text-on-surface-variant sm:text-lg"
            >
              No ripping out your stack. No learning new software. We install directly into your existing GHL sub-account and have everything live within two business days.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group inline-flex flex-wrap items-center gap-2 text-lg font-bold text-primary sm:text-xl"
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
