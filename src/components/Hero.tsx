import { motion } from 'motion/react';
import heroBg from '../assets/art/hero-bg.png';
import heroMain from '../assets/art/hero-main.png';
import heroStackAccent from '../assets/art/hero-stack-accent.png';

export default function Hero() {
  return (
    <section id="platform" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28">
      <img
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-18"
        src={heroBg}
        alt=""
        aria-hidden="true"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(254,183,0,0.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,255,255,0.92)_35%,rgba(255,255,255,0.98))]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:gap-12">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-block rounded-full bg-primary/10 px-3 py-2 text-xs font-bold tracking-wide text-primary uppercase sm:mb-8 sm:px-4 sm:text-sm"
            >
              Kinetic Authority AI Automation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 font-headline text-4xl font-extrabold leading-[1.05] tight-tracking sm:mb-8 sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Your Leads Deserve an Answer in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">60 Seconds.</span>{' '}
              <br />
              Not Tomorrow.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mb-10 max-w-2xl text-base text-on-surface-variant sm:mb-12 sm:text-lg lg:mx-0"
            >
              We install a Voice + SMS automation system inside GoHighLevel that follows up with every lead instantly, 24/7, without lifting a finger.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-full bg-secondary-container px-6 py-4 text-base font-bold text-on-secondary-container shadow-xl transition-transform sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
              >
                Launch Your Automation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-full bg-primary px-6 py-4 text-base font-bold text-on-primary shadow-xl transition-transform sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
              >
                Watch Live Demo
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-primary/10 blur-3xl"></div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-2 shadow-[0_32px_80px_rgba(0,91,191,0.16)] backdrop-blur-sm sm:rounded-[2.5rem]">
              <img
                className="aspect-[4/3] w-full rounded-[1.5rem] object-cover sm:rounded-[2rem]"
                src={heroMain}
                alt="Colorful automation world"
                loading="eager"
              />
            </div>
            <motion.img
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute -right-2 -bottom-6 w-24 drop-shadow-[0_20px_30px_rgba(25,28,29,0.18)] sm:-right-6 sm:-bottom-10 sm:w-32 lg:-right-10 lg:w-40"
              src={heroStackAccent}
              alt=""
              aria-hidden="true"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
