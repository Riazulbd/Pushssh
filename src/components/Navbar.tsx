import { motion, useScroll, useTransform } from 'motion/react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ['none', '0 20px 40px rgba(25,28,29,0.06)']
  );

  return (
    <motion.header 
      style={{ backgroundColor, boxShadow }}
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-8">
        <div className="text-xl font-black tracking-tighter text-primary sm:text-2xl">Authority CRM</div>
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          <a className="text-primary font-bold border-b-2 border-primary hover:text-primary/80 transition-colors duration-300" href="#platform">Platform</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#solutions">Solutions</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#results">Results</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#pricing">Pricing</a>
        </nav>
        <motion.button 
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.9 }}
          className="shrink-0 rounded-full bg-secondary-container px-4 py-2.5 text-sm font-bold text-on-secondary-container shadow-sm sm:px-6 sm:py-3 sm:text-base lg:px-8"
        >
          Book a Call
        </motion.button>
      </div>
    </motion.header>
  );
}
