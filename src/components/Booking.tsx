import { motion } from 'motion/react';

export default function Booking() {
  return (
    <section id="booking" className="overflow-hidden bg-surface py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full bg-primary px-4 py-1 font-bold text-white"
          >
            GET STARTED
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline text-3xl font-black tight-tracking sm:text-4xl lg:text-5xl"
          >
            Book Your Strategy Call
          </motion.h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-outline-variant/10 bg-white shadow-2xl sm:min-h-[600px] sm:rounded-[3rem]"
        >
          <iframe 
            src="https://link.automationpaths.com/widget/booking/EpX6GpsE7i9HfNCJceF4" 
            className="min-h-[520px] w-full sm:min-h-[600px]"
            style={{ border: 'none', overflow: 'hidden' }} 
            scrolling="no" 
            id="uQlTYqUYXJQGWX0qKmRA_1776153205906"
            title="Booking Calendar"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
