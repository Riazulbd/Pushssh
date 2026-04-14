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
      className="fixed top-0 w-full z-50 backdrop-blur-xl"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-2xl font-black text-primary tracking-tighter">Authority CRM</div>
        <nav className="hidden md:flex gap-8 items-center">
          <a className="text-primary font-bold border-b-2 border-primary hover:text-primary/80 transition-colors duration-300" href="#platform">Platform</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#solutions">Solutions</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#results">Results</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#pricing">Pricing</a>
        </nav>
        <motion.button 
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.9 }}
          className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-full font-bold shadow-sm"
        >
          Book a Call
        </motion.button>
      </div>
    </motion.header>
  );
}
