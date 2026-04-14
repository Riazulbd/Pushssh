import { motion } from 'motion/react';

export default function Booking() {
  return (
    <section id="booking" className="py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white px-4 py-1 font-bold rounded-full mb-4 inline-block"
          >
            GET STARTED
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline text-5xl font-black tight-tracking"
          >
            Book Your Strategy Call
          </motion.h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-outline-variant/10 min-h-[600px] relative"
        >
          <iframe 
            src="https://link.automationpaths.com/widget/booking/EpX6GpsE7i9HfNCJceF4" 
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }} 
            scrolling="no" 
            id="uQlTYqUYXJQGWX0qKmRA_1776153205906"
            title="Booking Calendar"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
