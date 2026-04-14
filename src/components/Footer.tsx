import { Mail, Phone, Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white rounded-t-[3rem] mt-20 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-8 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="text-3xl font-black text-white tracking-tighter mb-6">Authority CRM</div>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-sm">
              The premier automation agency for high-growth real estate teams. We turn cold leads into booked appointments while you sleep.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, color: '#feb700' }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-headline font-bold text-white mb-8 uppercase tracking-widest text-sm">Platform</h4>
              <ul className="space-y-4">
                {['AI Voice Agents', 'SMS Nurture', 'CRM Integration', 'Lead Reactivation'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                      <span className="w-0 group-hover:w-4 h-[1px] bg-secondary mr-0 group-hover:mr-2 transition-all"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold text-white mb-8 uppercase tracking-widest text-sm">Company</h4>
              <ul className="space-y-4">
                {['Success Stories', 'Pricing', 'About Us', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                      <span className="w-0 group-hover:w-4 h-[1px] bg-secondary mr-0 group-hover:mr-2 transition-all"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h4 className="font-headline font-bold text-white mb-8 uppercase tracking-widest text-sm">Stay Updated</h4>
            <p className="text-slate-400 mb-6">Get the latest AI automation strategies delivered to your inbox.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 focus:outline-none focus:border-primary transition-colors text-white"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-6 rounded-full font-bold hover:bg-primary-container transition-colors flex items-center gap-2">
                Join <ArrowRight size={16} />
              </button>
            </form>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2 text-slate-400">
                <Mail size={18} className="text-secondary" />
                <span className="text-sm">hello@authoritycrm.ai</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone size={18} className="text-secondary" />
                <span className="text-sm">+1 (555) 000-0000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2024 Authority CRM. All rights reserved. Certified GoHighLevel Partner.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
