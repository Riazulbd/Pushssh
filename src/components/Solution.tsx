import { motion } from 'motion/react';
import solutionLeadFunnel from '../assets/art/solution-lead-funnel.png';
import solutionPhoneCall from '../assets/art/solution-phone-call.png';
import solutionSmsAutomation from '../assets/art/solution-sms-automation.png';
import solutionCalendarBooking from '../assets/art/solution-calendar-booking.png';
import resultsStatsCard from '../assets/results-stats-card.png';

export default function Solution() {
  const steps = [
    { num: '01', title: 'Lead Arrives From Any Source', desc: 'Ads, website forms, referrals, or imported lists. Every lead enters the system.', art: solutionLeadFunnel },
    { num: '02', title: 'AI Voice Agent Calls in 60 Seconds', desc: 'A natural-sounding AI calls the lead immediately, day or night.', art: solutionPhoneCall },
    { num: '03', title: 'SMS Sequence Activates Automatically', desc: 'No answer? A smart SMS follow-up sequence kicks in with personalized messages.', art: solutionSmsAutomation },
    { num: '04', title: 'Lead Books Directly Into Your Calendar', desc: "Qualified leads self-book. You show up to the call. That's it.", art: solutionCalendarBooking, highlight: true },
  ];

  return (
    <section id="solutions" className="overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-20">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 font-bold text-primary"
          >
            THE SOLUTION
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-3xl font-black tight-tracking sm:text-4xl lg:text-5xl"
          >
            One System. Voice + SMS. <br />
            Running 24/7 Inside GHL.
          </motion.h2>
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-start gap-4 sm:gap-6"
              >
                <div className="relative shrink-0">
                  <div className="rounded-[1.5rem] border border-outline-variant/20 bg-surface p-2 shadow-md sm:rounded-[1.75rem]">
                    <img
                      className="h-16 w-16 rounded-[1.15rem] object-cover sm:h-20 sm:w-20 sm:rounded-[1.35rem]"
                      src={step.art}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span
                    className={`absolute -right-2 -bottom-2 flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold shadow-md ${
                      step.highlight ? 'bg-secondary-container text-on-secondary-container' : 'bg-primary text-on-primary'
                    }`}
                  >
                    {step.num}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="mb-2 font-headline text-xl font-bold transition-colors group-hover:text-primary sm:text-2xl">{step.title}</h3>
                  <p className="text-on-surface-variant">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[2rem] border border-outline-variant/10 bg-white p-3 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] sm:rounded-[3rem] sm:p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
            <img
              className="relative z-10 h-auto w-full rounded-[1.5rem] shadow-sm transition-transform duration-700 ease-out hover:scale-[1.02] sm:rounded-[2rem]"
              src={resultsStatsCard}
              alt="Lead response workflow stats card"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
