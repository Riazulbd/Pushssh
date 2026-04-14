import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-32 overflow-hidden">
      {/* Decorative background blobs */}
      <motion.div 
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 blur-[100px] rounded-full"
      ></motion.div>
      <motion.div 
        animate={{ 
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 blur-[100px] rounded-full"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-2 bg-primary/10 text-primary font-bold rounded-full mb-8 text-sm tracking-wide uppercase"
        >
          Kinetic Authority AI Automation
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-7xl font-extrabold tight-tracking mb-8 leading-[1.1]"
        >
          Your Leads Deserve an Answer in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">60 Seconds.</span> <br/>Not Tomorrow.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-on-surface-variant mb-12"
        >
          We install a Voice + SMS automation system inside GoHighLevel that follows up with every lead - instantly, 24/7, without lifting a finger.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-full text-lg font-bold shadow-xl transition-transform"
          >
            Launch Your Automation
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-on-primary px-10 py-5 rounded-full text-lg font-bold shadow-xl transition-transform"
          >
            Watch Live Demo
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative max-w-5xl mx-auto group"
        >
          <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative bg-surface-container-lowest rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.12)] p-2 overflow-hidden border border-outline-variant/10">
            <img 
              className="w-full h-auto rounded-[2rem] transition-transform duration-700 group-hover:scale-[1.02]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUPnMOteDeW8u4-CwBeojtKHbWJtrafBXVV1GAYPvzl7HncGq8rie3JK9Tkjr7nEuYp23XlYXxlwXMaZzzWQ05P4h46M-Odaxlf-5pR8nRt71NB9vdmMP1OGN1Mph5vD9TQqsXHMFyhVRI6bn1fK-dOt28eKzUft3naX89_u5avnKKoBAJ55ikivBTpPeftwpIh13IoKWUipPUUmnCN2_Z-aPZj2vxlcGAaBt9MG3j2Lf1h9HDK8qEZNYXAzRTqQHjEvtQs4w342bS" 
              alt="AI Dashboard"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
