import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, CheckCircle2, ShieldCheck, HeartHandshake, 
  Globe2, Building2, Zap, Target
} from 'lucide-react';

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col gap-3">
    <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase">{number} / {title}</span>
    <div className="w-12 h-[1px] bg-blue-600/30" />
  </div>
);

export const ERPSolution = () => {
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
                Strategic Enterprise Ecosystem
              </span>
              <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight pt-2">
                ERP Solution, <br />
                <span className="text-blue-600">consulting. staffing</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed font-semibold pt-4">
                Empowering businesses with nationwide ERP professional networks, agile consulting models, and dedicated staffing solutions that mitigate risk and accelerate deliverable timelines.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Wide Network & Direct Sourcing */}
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
                <SectionHeader number="01" title="Talent & Direct Sourcing" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                  Curated ERP Expertise & Nationwide Network
                </h2>
                <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    QverTech has access to a wide network of ERP professionals across the nation that helps our customers in cost-effective and easy deployment solutions. We can easily curate a perfect pool for you from our experienced network.
                  </p>
                  <p>
                    With QverTech you can easily mitigate your risk and make use of effective direct sourcing and improve on-boarding time, your company’s sourcing cost and surely you will get talent satisfaction. We are known for inducing the right talent to reduce the complexity of the deliverables.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {[
                  {
                    title: "Nationwide Talent Pool",
                    desc: "Curated network of seasoned ERP professionals across SAP, Oracle, & Salesforce.",
                    icon: Users
                  },
                  {
                    title: "Risk Mitigation",
                    desc: "Effective direct sourcing models that reduce complexity & onboarding lag.",
                    icon: ShieldCheck
                  },
                  {
                    title: "Optimized Sourcing Cost",
                    desc: "Cost-effective deployment solutions maximizing enterprise ROI.",
                    icon: Target
                  },
                  {
                    title: "Talent Satisfaction",
                    desc: "Delivering the right fit to ensure long-term deliverable excellence.",
                    icon: HeartHandshake
                  }
                ].map((card, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all">
                    <card.icon className="text-blue-600 mb-4" size={28} />
                    <h3 className="text-base font-black text-slate-900 mb-2">{card.title}</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Onshore, Nearshore & Offshore Staffing */}
        <section className="py-24 border-b border-slate-100 bg-slate-50/40">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-12 space-y-4">
                <SectionHeader number="02" title="Global Service Models" />
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
                  IT-Based Onshore, Nearshore, & Offshore Services
                </h2>
                <div className="max-w-4xl space-y-4 pt-4 text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                  <p>
                    We are offering IT-based onshore, nearshore, and offshore staffing services. We are known for our utmost agility and a strong network. Over the years, we have carved a niche for ourselves in the IT field with our constant dedication and service commitment.
                  </p>
                  <p className="text-blue-600 font-bold">
                    Our goal is to meet all the IT staffing requirements of our clients and help them decide the best outsourcing engagement model for the firm. We are not simply a staffing service provider; we are your partners!!
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  type: "Onshore Staffing",
                  desc: "Local, domain-specific ERP consultants embedded directly into your core operations for real-time collaboration.",
                  badge: "Local Integration"
                },
                {
                  type: "Nearshore Staffing",
                  desc: "Time-zone aligned talent pools delivering agile execution and seamless communication at optimized rates.",
                  badge: "Agile Alignment"
                },
                {
                  type: "Offshore Staffing",
                  desc: "Scalable offshore engineering centers offering round-the-clock technical capacity and cost reduction.",
                  badge: "24/7 Execution"
                }
              ].map((model, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col justify-between hover:-translate-y-1 transition-transform"
                >
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mb-6">
                      {model.badge}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">{model.type}</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                      {model.desc}
                    </p>
                  </div>
                  <div className="border-t border-slate-100 pt-6 mt-8 flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 size={16} className="text-blue-600" />
                    <span>Dedicated Partner Model</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

