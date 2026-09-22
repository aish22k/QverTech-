import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Clock, 
  Globe, Monitor, HeartHandshake, Sparkles, Award
} from 'lucide-react';

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col gap-4">
    <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase">{number} / {title}</span>
    <div className="w-12 h-[1px] bg-blue-600/30" />
  </div>
);

export const ITSupport = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-8 md:pt-12 pb-20 md:pb-24 border-b border-blue-100/50 bg-gradient-to-b from-blue-50/20 to-transparent">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-100/50">
                Application Management Services & Global Delivery
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-none pt-2">
                IT Support <br />
                <span className="text-blue-600">& AMS</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed font-semibold pt-4">
                QverTech prides itself in providing round the clock on-shore and off-shore support across verticals. Our incredible team of professionals are based in India and are trained to resolve queries in record time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Theoretical Overview - Global Support & Trained Professionals */}
        <section className="py-24 border-b border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <SectionHeader number="01" title="Global Support Delivery" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                  Round-The-Clock On-Shore & Off-Shore Reliability
                </h2>
                <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    QverTech prides itself in providing round the clock on-shore and off-shore support across verticals. Our incredible team of professionals are based in India and are trained to resolve queries in record time.
                  </p>
                  <p>
                    QverTech follows all advised regulations of off-shoring and is dedicated to provide unmatched quality of service. We have carved a niche for ourselves in ensuring timely and effective resolve for our customers across the globe.
                  </p>
                  <p>
                    With a team that’s trained and ready to serve, we are your one stop shop for all your on-shore and off-shore service requirements.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[2.5rem] overflow-hidden shadow-3xl shadow-blue-950/5 border border-blue-100/20"
              >
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
                  alt="IT Support and Application Management Team" 
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Operational Standards & Global Presence */}
        <section className="py-24 border-b border-slate-100 bg-slate-50/40">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-4 text-center">
                <SectionHeader number="02" title="Unmatched Quality & Compliance" />
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Adherence to Regulations & Guaranteed Resolution Timelines
                </h2>
              </div>

              <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 space-y-8 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Our global Application Management Services follow all advised statutory and industrial regulations governing cross-border operations. By aligning our offshore talent hubs with rigorous international standards, QverTech guarantees seamless operational continuity and complete peace of mind.
                </p>
                <p>
                  Whether handling critical enterprise system patches, emergency incident mitigation, or ongoing day-to-day application health monitoring, our dedicated engineers ensure timely and effective resolution across all time zones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: IT Supports /AMS Services: (On-site & Off-Shore Cards) */}
        <section className="py-24 border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="space-y-4 mb-16">
              <SectionHeader number="03" title="Service Directory" />
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
                IT Supports /AMS Services:
              </h2>
              <p className="text-slate-500 font-semibold max-w-3xl text-base md:text-lg">
                Explore our specialized deployment models engineered for high-availability enterprise environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* On-site Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50/70 p-10 md:p-12 rounded-[2.5rem] border border-slate-200/70 hover:bg-white hover:border-blue-600 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Monitor size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                    On-site
                  </h3>
                  <p className="text-slate-600 font-medium text-base leading-relaxed mb-6">
                    On-premise solutions covering enterprise performance management, supply chain operations, data security, and full lifecycle execution from assessment to migration.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-200/80">
                  <Link
                    to="/services/it-support/on-site"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 group-hover:text-blue-700 transition-colors"
                  >
                    <span>Explore On-site Support</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              {/* Off-Shore Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-50/70 p-10 md:p-12 rounded-[2.5rem] border border-slate-200/70 hover:bg-white hover:border-blue-600 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Globe size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                    Off-Shore
                  </h3>
                  <p className="text-slate-600 font-medium text-base leading-relaxed mb-6">
                    Cost-effective global software engineering, customized applications, and comprehensive migration strategies tailored to enable resilient business growth.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-200/80">
                  <Link
                    to="/services/it-support/off-shore"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 group-hover:text-blue-700 transition-colors"
                  >
                    <span>Explore Off-Shore Support</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
