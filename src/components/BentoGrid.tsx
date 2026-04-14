import { Users, Settings, TimerOff, Database, Calendar, Ban } from 'lucide-react';
import { motion } from 'motion/react';

export default function BentoGrid() {
  const segments = [
    { icon: <Users className="w-8 h-8" />, title: "Real Estate Teams", desc: "You run a real estate team generating 10+ leads per month and need consistency.", bg: "bg-white" },
    { icon: <Settings className="w-8 h-8" />, title: "GHL Users", desc: "You use GoHighLevel or you are ready to—we build directly into your CRM.", bg: "bg-primary text-on-primary" },
    { icon: <TimerOff className="w-8 h-8" />, title: "Leads Unanswered", desc: "Leads are going unanswered after hours or on weekends when your team is off.", bg: "bg-white" },
    { icon: <Database className="w-8 h-8" />, title: "Cold Database", desc: "You have a cold database sitting untouched—reactivation flows will fix this.", bg: "bg-white" },
    { icon: <Calendar className="w-8 h-8" />, title: "Booked Meetings", desc: "You want booked appointments, not just automations that don't convert.", bg: "bg-secondary-container text-on-secondary-container" },
    { icon: <Ban className="w-8 h-8" />, title: "Manual Work", desc: "You are done relying on manual follow-up to grow your real estate business.", bg: "bg-white" }
  ];

  return (
    <section className="py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white px-4 py-1 font-bold rounded-full mb-4 inline-block"
          >
            TARGET SEGMENTS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline text-5xl font-black tight-tracking"
          >
            This Is Built For You If...
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {segments.map((segment, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className={`${segment.bg} p-10 rounded-[2.5rem] shadow-sm border border-outline-variant group transition-all`}
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0] }}
                className={`mb-6 p-3 rounded-2xl inline-block ${segment.bg.includes('primary') ? 'bg-white/10' : segment.bg.includes('secondary') ? 'bg-black/5' : 'bg-primary/5 text-primary'}`}
              >
                {segment.icon}
              </motion.div>
              <h3 className="font-headline text-2xl font-bold mb-4">{segment.title}</h3>
              <p className={segment.bg.includes('primary') ? 'text-on-primary/80' : segment.bg.includes('secondary') ? 'text-on-secondary-container/80' : 'text-on-surface-variant'}>
                {segment.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
