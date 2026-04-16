import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1 font-bold text-primary"
            >
              WHO WE ARE
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6 font-headline text-3xl font-black tight-tracking sm:mb-8 sm:text-4xl lg:text-5xl"
            >
              Built by Operators. <br/>Not a Software Company.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8 text-base leading-relaxed text-on-surface-variant sm:mb-10 sm:text-lg"
            >
              We're Revenue Systems Architects who build the same AI infrastructure we'd want running our own real estate business. Certified GHL Admins with 1000+ implementations.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <div className="flex -space-x-4">
                {[
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBh7e-uYTAqCoBl89E_pHIoKLyHM6fnA9rMbrP1mAT9LQp99_v_7Sk0F37ltYj6oMe_8LgwkIS_JeQo6vWJMWUwkvyM16VLVZ_nTQ1UKWE0Hbo8fyplcHrm9E37YKpeoNWCJza-pzCQDX_cVlSyjUIEXQn3F4s9bDk4ev7-F8gewMOYPa6fZq7EAK4F04zcueRENN6Ppwv06pmNg7o3aPlaUKomq_qb5cQ6W9Aw4ix5MOx6shLESZZLaecfrUNyrw7A9JAYmdYJzUKp",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDdT8kWJKSDGZXeBcJCBYEwpuvJtAPOH4m1M965bvLptz4bZfW_cwo-eZ32lz5Kxh6BLzNKE9bb78wigAyySqyB7AVSaB1ejR0zIQnVOg14Wed5BzKTPMWkazfBF_eD5JL9vTA2dMj9FDVR1InEzxYWCqc1A-d-1ubU0sau6C9JW6_WGUy1qfFTQDhwpXZD4YFJiEZiDOhRIsdHB1FLZEUecV8fdSjbMDIUuAepGPc9JbjFyk3VE4ggPdvcCZKiCWMh8sUZRboGXj3v"
                ].map((src, i) => (
                  <motion.img 
                    key={i}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="h-12 w-12 cursor-pointer rounded-full border-4 border-white object-cover shadow-lg sm:h-14 sm:w-14" 
                    src={src} 
                    alt="Team member"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <p className="text-lg font-bold">The Monolith Team</p>
                <p className="text-sm text-on-surface-variant">Certified GHL Partners</p>
              </div>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-[2rem] border border-outline-variant bg-surface p-6 sm:rounded-[3rem] sm:p-10 lg:p-12"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 transition-opacity group-hover:opacity-20 sm:p-8">
              <Star size={80} className="text-primary" />
            </div>
            <div className="relative z-10 mb-8">
              <div className="mb-4 flex text-secondary-container">
                {[...Array(5)].map((_, i) => <Star key={i} className="fill-current" />)}
              </div>
              <p className="mb-4 text-xl font-bold leading-tight sm:text-2xl">"Within 2 weeks, our AI booked 11 appointments from leads we thought were completely dead."</p>
              <p className="text-sm font-medium text-on-surface-variant">- Real Estate Team Lead, Texas</p>
            </div>
            <div className="relative z-10 border-t border-outline-variant pt-8">
              <p className="mb-4 text-xl font-bold leading-tight sm:text-2xl">"The system paid for itself in the first month. Our agents don't manually follow up anymore."</p>
              <p className="text-sm font-medium text-on-surface-variant">- Broker, Florida</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
