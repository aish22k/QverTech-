import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, CheckCircle2, Cloud, Zap, Shield, BarChart3, 
  Settings, Users, Globe, Activity, FileText, Layout, ArrowRight 
} from 'lucide-react';

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col gap-4">
    <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase">{number} / {title}</span>
    <div className="w-12 h-[1px] bg-blue-600/30" />
  </div>
);

export const Oracle = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-40 pb-24 border-b border-blue-100/50 bg-gradient-to-b from-blue-50/20 to-transparent">
          <div className="max-w-7xl mx-auto px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-100/50">
                Enterprise Cloud Applications
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none pt-2">
                Oracle <br />
                <span className="text-blue-600">Enterprise</span> suite.
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-medium pt-4">
                Eliminate the hassle involved in your day-to-day business activities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Intro - Strategic ERP Automation */}
        <section className="py-32 border-b border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
              <div className="lg:col-span-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <SectionHeader number="01" title="Strategic ERP Automation" />
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
                  Automate Operations. <br />Fast Track Growth.
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    Dealing manually with daily business activities acts as a hurdle that disrupts accelerating your business processes. What can be better than automating regular business operations that help save manual efforts and fast tracks output?
                  </p>
                  <p>
                    Cut to Oracle ERP – as a business management suite, the software assists you from finance and supply chain management to accounting and procurement. Let QverTech Oracle ERP solutions back you to leverage the ultimate advantages of bringing business processes together to encourage collaboration, promote business productivity, and drive data-oriented decisions.
                  </p>
                </div>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-4 bg-blue-50/50 border border-blue-100/50 rounded-2xl px-6 py-4">
                    <Activity className="text-blue-600 shrink-0" size={24} />
                    <div>
                      <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Diverse solutions</h4>
                      <p className="text-xs text-slate-500 font-medium">Advance your business functions to drive more informed and growth-prone results.</p>
                    </div>
                  </div>
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
                  src="https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=1200" 
                  alt="Oracle ERP Solutions" 
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Core Oracle Ecosystem Offerings */}
        <section className="py-32 border-b border-slate-100 bg-slate-50/40">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
              <div className="lg:col-span-12">
                <SectionHeader number="02" title="Oracle Ecosystem" />
                <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-none mt-6">
                  Targeted Solutions for Enterprise Excellence
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Card 1: Oracle ERP Cloud */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Cloud size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Oracle ERP Cloud</h3>
                  <p className="text-slate-500 mb-8 font-medium leading-relaxed text-sm">
                    Meet the future of ERP that combines the flexibility to scale as you grow. Fulfills the ultimate demands of growing businesses from higher education, finance, healthcare, insurance, and more, powered by machine learning and embedded AI.
                  </p>
                  
                  <div className="border-t border-slate-100 pt-6 mt-6">
                    <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase block mb-4">Why QverTech Oracle Cloud?</span>
                    <ul className="space-y-3">
                      {[
                        "Oracle Financial Cloud – manage expenses, assets, & more",
                        "Oracle Procurement Cloud – automated supplier systems",
                        "Oracle Supply Chain – master inventory operations",
                        "Oracle Project Management – digital projects end-to-end"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs font-bold text-slate-700">
                          <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Oracle JD Edwards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Settings size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Oracle JD Edwards</h3>
                  <p className="text-slate-500 mb-8 font-medium leading-relaxed text-sm">
                    Bring reliance to your operations with the umbrella service of Oracle JD Edwards. Featuring an innovative design and highly flexible deployment models spanning both on-premise and public/private clouds to diversely benefit businesses globally.
                  </p>
                  
                  <div className="border-t border-slate-100 pt-6 mt-6">
                    <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase block mb-4">Why QverTech JD Edwards?</span>
                    <ul className="space-y-3">
                      {[
                        "Oracle Manufacturing – streamline delivery & orders",
                        "Asset Lifecycle Management – visible tracking & metrics",
                        "Oracle Supply Chain – optimized vendor & carrier routing",
                        "One View Reporting – design & share customized reports"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs font-bold text-slate-700">
                          <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Oracle NetSuite */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <BarChart3 size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Oracle NetSuite</h3>
                  <p className="text-slate-500 mb-8 font-medium leading-relaxed text-sm">
                    Leverage the most trusted cloud-native global ERP suite that seamlessly combines a diverse range of operational toolsets and features built-in analytics to facilitate immediate insights and stimulate data-driven performance.
                  </p>
                  
                  <div className="border-t border-slate-100 pt-6 mt-6">
                    <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase block mb-4">Why QverTech NetSuite?</span>
                    <ul className="space-y-3">
                      {[
                        "Production Management – order processing in real-time",
                        "Financial Planning – centralized budget tools",
                        "Human Capital – streamlined core HR records",
                        "Warehouse Fulfillment – manage all resources in one tool"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs font-bold text-slate-700">
                          <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Specialized Oracle Services */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 text-center">
              <div className="lg:col-span-12">
                <SectionHeader number="03" title="Oracle Services" />
                <h2 className="text-4xl font-black text-slate-900 mt-6 max-w-2xl mx-auto tracking-tight">
                  Premium Assistance For Operational Optimization
                </h2>
                <p className="text-lg text-slate-500 mt-4 max-w-3xl mx-auto font-medium">
                  As a complete ERP suite provider, QverTech offers comprehensive services to help your business boost performance globally across Cloud SaaS and PaaS/IaaS paradigms.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Oracle SaaS Panel */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                      <Layout size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 leading-tight">Oracle SaaS</h3>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">End-To-End Cloud Suite</span>
                    </div>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed mb-8">
                    Benefit from consistent processes through a single dashboard from enterprise resource planning and supply chain management to human capital and custom customer experience metrics. Make implementation efficient and secure with QverTech guidance:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Cloud Advisory & Migration",
                      "New Implementations (ERP, EPM, HCM, CX)",
                      "On-Going Managed Services",
                      "On-Premise Application Integrations",
                      "PaaS/IaaS App Integration (OIC)",
                      "B2B/B2C Commerce Architectures",
                      "Configure - Price - Quote (CPQ)"
                    ].map((svc, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 py-2.5 border-b border-slate-200/50">
                        <ArrowRight size={14} className="text-blue-600 shrink-0" />
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-tight">{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Oracle PaaS / IaaS Panel */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 text-white p-12 rounded-[3.5rem] flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                
                <div>
                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-blue-400">
                      <Database size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black leading-tight">Oracle PaaS/IaaS</h3>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Platform & Infrastructure</span>
                    </div>
                  </div>
                  <p className="text-slate-400 font-medium leading-relaxed mb-8 relative z-10">
                    Empower always-on businesses with optimized cloud environments tailored to deliver unmatched response times, scalable microservices, and reliable database governance. Harness modern database and analytics setups for:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                    {[
                      "Cloud Advisory & Advisory Migration",
                      "On-Premise To Cloud Migration Support",
                      "Custom Cloud Application Development",
                      "Integration Cloud (OIC) Setup",
                      "Fusion Middleware & Dell Boomi",
                      "Data Warehouse & Master Governance",
                      "Analytics & Advanced Dashboards",
                      "Data Visualization Solutions",
                      "Performance Monitoring & Fine Tuning"
                    ].map((svc, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 py-2.5 border-b border-slate-800">
                        <ArrowRight size={14} className="text-blue-400 shrink-0" />
                        <span className="text-xs font-bold text-slate-200 uppercase tracking-tight">{svc}</span>
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

