import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-primary/10 text-primary px-4 py-1 font-bold rounded-full mb-6"
            >
              WHO WE ARE
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-headline text-5xl font-black tight-tracking mb-8"
            >
              Built by Operators. <br/>Not a Software Company.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-on-surface-variant mb-10 leading-relaxed"
            >
              We're Revenue Systems Architects who build the same AI infrastructure we'd want running our own real estate business. Certified GHL Admins with 1000+ implementations.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 items-center"
            >
              <div className="flex -space-x-4">
                {[
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBh7e-uYTAqCoBl89E_pHIoKLyHM6fnA9rMbrP1mAT9LQp99_v_7Sk0F37ltYj6oMe_8LgwkIS_JeQo6vWJMWUwkvyM16VLVZ_nTQ1UKWE0Hbo8fyplcHrm9E37YKpeoNWCJza-pzCQDX_cVlSyjUIEXQn3F4s9bDk4ev7-F8gewMOYPa6fZq7EAK4F04zcueRENN6Ppwv06pmNg7o3aPlaUKomq_qb5cQ6W9Aw4ix5MOx6shLESZZLaecfrUNyrw7A9JAYmdYJzUKp",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDdT8kWJKSDGZXeBcJCBYEwpuvJtAPOH4m1M965bvLptz4bZfW_cwo-eZ32lz5Kxh6BLzNKE9bb78wigAyySqyB7AVSaB1ejR0zIQnVOg14Wed5BzKTPMWkazfBF_eD5JL9vTA2dMj9FDVR1InEzxYWCqc1A-d-1ubU0sau6C9JW6_WGUy1qfFTQDhwpXZD4YFJiEZiDOhRIsdHB1FLZEUecV8fdSjbMDIUuAepGPc9JbjFyk3VE4ggPdvcCZKiCWMh8sUZRboGXj3v"
                ].map((src, i) => (
                  <motion.img 
                    key={i}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-lg cursor-pointer" 
                    src={src} 
                    alt="Team member"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <p className="font-bold text-lg">The Monolith Team</p>
                <p className="text-sm text-on-surface-variant">Certified GHL Partners</p>
              </div>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-12 rounded-[3rem] border border-outline-variant relative group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Star size={80} className="text-primary" />
            </div>
            <div className="mb-8 relative z-10">
              <div className="flex text-secondary-container mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="fill-current" />)}
              </div>
              <p className="text-2xl font-bold mb-4 leading-tight">"Within 2 weeks, our AI booked 11 appointments from leads we thought were completely dead."</p>
              <p className="text-sm text-on-surface-variant font-medium">— Real Estate Team Lead, Texas</p>
            </div>
            <div className="pt-8 border-t border-outline-variant relative z-10">
              <p className="text-2xl font-bold mb-4 leading-tight">"The system paid for itself in the first month. Our agents don't manually follow up anymore."</p>
              <p className="text-sm text-on-surface-variant font-medium">— Broker, Florida</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
