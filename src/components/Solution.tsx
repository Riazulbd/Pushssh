import { motion } from 'motion/react';

export default function Solution() {
  const steps = [
    { num: "01", title: "Lead Arrives From Any Source", desc: "Ads, website forms, referrals, or imported lists. Every lead enters the system." },
    { num: "02", title: "AI Voice Agent Calls in 60 Seconds", desc: "A natural-sounding AI calls the lead immediately, day or night." },
    { num: "03", title: "SMS Sequence Activates Automatically", desc: "No answer? A smart SMS follow-up sequence kicks in with personalized messages." },
    { num: "04", title: "Lead Books Directly Into Your Calendar", desc: "Qualified leads self-book. You show up to the call. That's it.", highlight: true }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-4 py-1 font-bold rounded-full mb-4"
          >
            THE SOLUTION
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-5xl font-black tight-tracking"
          >
            One System. Voice + SMS. <br/>Running 24/7 Inside GHL.
          </motion.h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 ${step.highlight ? 'bg-secondary-container text-on-secondary-container' : 'bg-primary text-on-primary'} rounded-full flex items-center justify-center font-bold shrink-0 shadow-lg transition-transform`}
                >
                  {step.num}
                </motion.div>
                <div>
                  <h3 className="font-headline text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-on-surface-variant">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-[3rem] p-6 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-outline-variant/10 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img 
              className="w-full h-auto rounded-[2rem] relative z-10 shadow-sm hover:scale-[1.02] transition-transform duration-700 ease-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcdxyh0BFH9kyUNaklShepbonf-HOikCtLs4GWBepn8Rc2MG8CKhXmrA88DDRy0ccBr8SvK8bdKB6VzR05KE1Zh98ZPRnlKN5MxgOP_2FIfGrYiRYaVZj_9ZkbMyyrnYWOhJBfd1yWlMdDyVnvieMJG0FHsNCBqsNg06F3Z3nCovOa04KyzQGZNajMRjgGWzBzFXI-kLbAXrn8bGF1TtZEsTjzB9iWGz7N7iYJE0g2iSIg356r3fm7oSJRrceuOspx-ONRVwNCzD2c" 
              alt="Workflow Automation"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
