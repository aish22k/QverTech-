import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, ShieldCheck, Database, 
  Cpu, Sparkles, HeartHandshake,
  Workflow, Layers, Award
} from 'lucide-react';

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col gap-4">
    <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase">{number} / {title}</span>
    <div className="w-12 h-[1px] bg-blue-600/30" />
  </div>
);

export const OffShoreSupport = () => {
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
                Global IT Delivery & Solutions
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-none pt-2">
                Off-Shore <br />
                <span className="text-blue-600">Support</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed font-semibold pt-4">
                Offshore IT support refers to the business practice of outsourcing IT-enabled services or business processes to an external partner in a different country, building cost-effective software and IT solutions that enable businesses to grow efficiently.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Theoretical Overview - Global Collaboration & Trusted Expertise */}
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
                <SectionHeader number="01" title="Strategic Sourcing" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                  Cost-Effective IT Collaboration Across Geographies
                </h2>
                <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    Offshore IT support refers to the business practice of outsourcing IT-enabled services or business processes to an external partner in a different country. In the fast-evolving IT industry, QverTech has emerged as a trusted name for clients to provide offshore IT support across geographies and industries.
                  </p>
                  <p>
                    We collaborate with clients to build cost-effective software and IT solutions to enable businesses to grow efficiently. Right from building customized applications suited for your business to creating migration strategies, QverTech LLC has solutions for all your IT needs.
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Global Offshore IT Collaboration and Software Engineering" 
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Theoretical Dimensions of Offshore Delivery */}
        <section className="py-24 border-b border-slate-100 bg-slate-50/40">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-4xl mb-16 space-y-4">
              <SectionHeader number="02" title="Core Capabilities" />
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Architecting Resilient Offshore Solutions
              </h2>
              <p className="text-slate-500 font-semibold text-base md:text-lg">
                Delivering high-performance software engineering, application modernization, and strategic migration across industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Dimension 1: Cross-Geography Trust */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Globe size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Cross-Geography Trust</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-4">
                    In the fast-evolving IT industry, QverTech stands as a trusted partner across multiple continents and vertical markets.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    Our offshore centers operate with stringent security protocols and seamless communication channels, ensuring geographical distance never inhibits operational transparency.
                  </p>
                </div>
              </motion.div>

              {/* Dimension 2: Customized Software Engineering */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Cpu size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Customized Applications</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-4">
                    We collaborate closely with clients to engineer customized applications precisely suited for their business workflows and end-user demands.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    This bespoke software engineering approach ensures cost-effectiveness while positioning the enterprise to scale smoothly as user volume expands.
                  </p>
                </div>
              </motion.div>

              {/* Dimension 3: Strategic Migration Execution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Workflow size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Migration Strategies</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-4">
                    From creating meticulous migration strategies to technical execution, QverTech LLC delivers holistic solutions for all your IT requirements.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    We systematically de-risk complex data transfers, system migrations, and cloud cutovers, eliminating unplanned service disruptions.
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
