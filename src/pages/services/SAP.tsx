import React from 'react';
import { motion } from 'framer-motion';
import { Database, CheckCircle2, Cloud, Zap, Shield, BarChart3, Users, Globe } from 'lucide-react';

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col gap-4">
    <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase">{number} / {title}</span>
    <div className="w-12 h-[1px] bg-blue-600/30" />
  </div>
);

export const SAP = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Subtle Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-40 pb-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-12">
                SAP <br />
                <span className="text-blue-600">Enterprise</span> Intelligence.
              </h1>
              <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-medium">
                A smart way to manage your day-to-day business activities. In a competitive business environment, leverage the power of SAP with QverTech expertise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Strategic Advantage */}
        <section className="py-32 border-b border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
              <div className="lg:col-span-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <SectionHeader number="01" title="Strategic Advantage" />
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-[1.2]">
                  Smart Management for <br />Modern Enterprises.
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    Think of SAP, the advanced ERP software to cast the hassle out of organizing your regular business activities and bringing ultimate ease of executing different business functions. Leverage the benefits of SAP to accelerate your business operations.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    QverTech experts assist small and mid-size businesses to effectively manage their core operations with efficient solutions designed for the digital age.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[2rem] overflow-hidden shadow-3xl shadow-blue-900/10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                  alt="SAP Strategic Advantage" 
                  className="w-full object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Core Offerings */}
        <section className="py-32 border-b border-slate-100 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
              <div className="lg:col-span-12">
                <SectionHeader number="02" title="Core Solutions" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "SAP S/4 HANA Cloud",
                  desc: "Transform your business processes On-Premise or in Cloud with native AI-powered integration.",
                  icon: Cloud,
                  points: ["Simplifying data models", "Industry best practices", "AI-driven analytics"]
                },
                {
                  title: "SAP Cloud ALM",
                  desc: "Ensure smooth operations by eliminating disruptions with proactive monitoring and automated alerts.",
                  icon: Zap,
                  points: ["Business continuity", "Automated operations", "Advanced analytics"]
                },
                {
                  title: "Rise with SAP",
                  desc: "A comprehensive package to accelerate your digital journey and simplify complex business processes.",
                  icon: Shield,
                  points: ["Modular Cloud ERP", "Future-proof innovation", "Industry-specific packages"]
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-10 rounded-[2.5rem] hover:bg-white transition-all shadow-xl shadow-slate-200/50 group"
                >
                  <item.icon className="text-blue-600 mb-8 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-500 mb-8 font-medium leading-relaxed">{item.desc}</p>
                  <ul className="space-y-3">
                    {item.points.map((p, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 uppercase tracking-tight">
                        <CheckCircle2 size={16} className="text-blue-600" /> {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Specialized Expertise */}
        <section className="py-32 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <SectionHeader number="03" title="Specialized Expertise" />
                <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-[1.2] mt-8 mb-12">
                  Comprehensive SAP Service Architecture.
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "SAP Core ECC", "SAP FICO", "SAP BPC", "SAP SCM", "SAP CRM", 
                    "SAP HANA Platform", "SAP ABAP", "SAP S/4 HANA", "Success Factors",
                    "Success Factors", "Governance & Risk", "Commerce Solutions"
                  ].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-3 border-b border-slate-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                <div className="p-12 glass rounded-[3rem] border border-blue-100/50 shadow-2xl shadow-blue-500/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10" />
                  <h3 className="text-2xl font-black text-slate-900 mb-8">Process Optimization</h3>
                  <div className="space-y-6">
                    {[
                      { title: "Procure to Pay", icon: Zap },
                      { title: "Order To Cash", icon: BarChart3 },
                      { title: "Supply Chain", icon: Globe },
                      { title: "Human Capital", icon: Users }
                    ].map((proc, idx) => (
                      <div key={idx} className="flex items-center gap-6 group">
                        <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <proc.icon size={20} />
                        </div>
                        <span className="text-lg font-bold text-slate-800 tracking-tight">{proc.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
