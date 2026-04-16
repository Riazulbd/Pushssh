import { motion } from 'motion/react';
import ctaAccent from '../assets/art/cta-accent.png';

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-[2rem] bg-primary p-8 text-center sm:rounded-[3rem] sm:p-12 md:p-16 lg:p-24"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container/40 via-transparent to-transparent"
          ></motion.div>

          <motion.img
            animate={{ y: [0, -10, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -right-4 -bottom-6 hidden w-24 translate-y-1/4 sm:block md:w-32 lg:-right-6 lg:w-40"
            src={ctaAccent}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 font-headline text-3xl font-black text-white sm:mb-8 sm:text-4xl lg:text-6xl"
            >
              Ready to Install Your <br />
              AI Sales Rep?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mx-auto mb-10 max-w-2xl text-base text-white/80 sm:mb-12 sm:text-xl"
            >
              Claim your territory and automate your authority. Limited spots available for certified GHL implementation.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-full bg-secondary-container px-8 py-4 text-base font-bold text-on-secondary-container shadow-2xl transition-transform hover:shadow-secondary-container/20 sm:w-auto sm:px-12 sm:py-6 sm:text-xl"
            >
              Book Your Implementation Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
