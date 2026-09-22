import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, ShieldCheck, Database, 
  Cpu, Sparkles, HeartHandshake,
  Cloud, Workflow, Award, LineChart
} from 'lucide-react';

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col gap-4">
    <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase">{number} / {title}</span>
    <div className="w-12 h-[1px] bg-blue-600/30" />
  </div>
);

export const OnSiteSupport = () => {
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
                Enterprise On-Premise & Cloud Delivery
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-none pt-2">
                On-Site <br />
                <span className="text-blue-600">Support & Solutions</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed font-semibold pt-4">
                QverTech offers comprehensive on-premise solutions as well as enterprise cloud solutions, backed by a rich legacy of over 15 years in delivering quality solutions for public and private applications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Theoretical Overview - On-Premise and Cloud Solutions */}
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
                <SectionHeader number="01" title="On-Premise & Enterprise Cloud" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                  Comprehensive Infrastructure & End-to-End Execution
                </h2>
                <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    QverTech offers on-premise solutions as well as enterprise cloud solutions. Our on-premise solutions include enterprise performance management, supply chain management as well as data security.
                  </p>
                  <p>
                    Our services include everything right from assessment, design, implementation, migration to implementation. Our enterprise cloud solutions consist of cloud storage solutions, data visualization, cloud integration and CRM.
                  </p>
                  <p>
                    We have a rich legacy of over 15 years in delivering quality solutions for public and private applications. Connect with a QverTech expert today for bespoke business consulting services about your new venture and discuss your startup with a consultant.
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
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200" 
                  alt="On-premise Infrastructure and Cloud Solutions" 
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Theoretical Pillars of On-Site and Cloud Solutions */}
        <section className="py-24 border-b border-slate-100 bg-slate-50/40">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-4xl mb-16 space-y-4">
              <SectionHeader number="02" title="Architectural Scope" />
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Integrated On-Premise and Cloud Capabilities
              </h2>
              <p className="text-slate-500 font-semibold text-base md:text-lg">
                Delivering complete coverage from physical data center environments to resilient, scalable cloud architectures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1: On-Premise Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Building2 size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">On-Premise Solutions</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-4">
                    Our dedicated on-premise offerings focus on enterprise performance management, robust supply chain management, and comprehensive data security frameworks.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    We ensure physical and virtual infrastructure operates with zero compromise to compliance, safeguarding critical mission data within sovereign boundary environments.
                  </p>
                </div>
              </motion.div>

              {/* Pillar 2: Full Lifecycle Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Workflow size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Full Lifecycle Delivery</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-4">
                    Our services encompass everything right from assessment, design, implementation, and migration to continuous operational execution.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    This end-to-end continuum removes operational friction, preventing handoff failures between planning phases and actual deployment stages.
                  </p>
                </div>
              </motion.div>

              {/* Pillar 3: Enterprise Cloud Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Cloud size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Enterprise Cloud Solutions</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-4">
                    Our cloud solutions portfolio consists of cloud storage solutions, high-impact data visualization, seamless cloud integration, and Customer Relationship Management (CRM).
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    These cloud-native technologies provide rapid scalability, democratizing intelligence across departments and empowering cross-functional decision-makers.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
