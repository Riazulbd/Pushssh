import { motion } from 'motion/react';
import footerBg from '../assets/footer-bg.png';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <section className="relative min-h-[600px] overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:min-h-[700px] lg:pt-40">
        <img
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          src={footerBg}
          alt="Footer background"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-full flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 font-headline text-4xl font-black text-white tight-tracking sm:mb-8 sm:text-5xl lg:text-6xl"
          >
            Ready to Automate Your Authority?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-10 max-w-2xl text-base text-white/90 sm:mb-12 sm:text-lg"
          >
            Join hundreds of real estate teams turning cold leads into booked appointments, automatically.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-secondary-container px-8 py-4 text-base font-bold text-on-secondary-container shadow-xl transition-transform sm:px-12 sm:py-6 sm:text-lg"
          >
            Start Your Free Trial
          </motion.button>
        </div>
      </section>

      {/* Footer links */}
      <div className="relative z-10 bg-slate-950/95 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <p className="text-sm text-slate-400">
              © 2024 Authority CRM. All rights reserved. Certified GoHighLevel Partner.
            </p>
            <div className="flex flex-wrap justify-center gap-5 text-sm sm:gap-8 md:justify-end">
              <a href="#" className="text-slate-400 transition-colors hover:text-white">Privacy Policy</a>
              <a href="#" className="text-slate-400 transition-colors hover:text-white">Terms of Service</a>
              <a href="#" className="text-slate-400 transition-colors hover:text-white">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
