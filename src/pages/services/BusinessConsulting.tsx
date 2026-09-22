import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Layers, Compass, BarChart3, Settings, 
  ShieldCheck, Activity,
  Workflow, Cpu, Globe
} from 'lucide-react';

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col gap-4">
    <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase">{number} / {title}</span>
    <div className="w-12 h-[1px] bg-blue-600/30" />
  </div>
);

export const BusinessConsulting = () => {
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
                Operational Excellence
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-none pt-2">
                Business <br />
                <span className="text-blue-600">Consulting</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed font-semibold pt-4">
                Technology is ever evolving and every sunrise sees multiple solutions being introduced into the market. We ensure that technology works for you, serving as an incredible catalyst to future success and sustainable growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Strategic Alignment - Making Technology Work for You */}
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
                <SectionHeader number="01" title="Strategic Alignment" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                  Finding the Solutions That Work Best for Your Business
                </h2>
                <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    Technology is ever evolving and every sunrise sees multiple solutions being introduced into the market. While every organization has access to these incredible technologies, the challenge is to find a solution that works best for your business. One must always keep in mind the relevance of a technology and its impact on the success of the business.
                  </p>
                  <p>
                    We at QverTech ensure that technology works for you. Business Consulting with our experts helps you adopt solutions that are not only good for your business today but also act as an incredible catalyst to success for your business in the future.
                  </p>
                  <p>
                    We understand that no one solution can fit all industries appropriately, thus our team works creatively to customize each solution ensuring it fits your needs most effectively.
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
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200" 
                  alt="Business Strategic Consulting and Operational Alignment" 
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Consulting Services Portfolio (Theoretical Overview) */}
        <section className="py-24 border-b border-slate-100 bg-slate-50/40">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-4xl mb-16 space-y-4">
              <SectionHeader number="02" title="Our Services" />
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Comprehensive Consulting Portfolio
              </h2>
              <p className="text-slate-500 font-semibold text-base md:text-lg">
                Structured across enterprise architecture, operational transformation, and governance to tailor modern technologies precisely to your organizational requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Domain 1: Enterprise Architecture & Modernization */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Cpu size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Enterprise Architecture & Systems</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-4">
                    Our consulting practice guides leadership through Enterprise Architecture and Technology Selection, ERP Solutions, and Complex Package Integration & Modernization.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    We combine Cloud Advisory Services with comprehensive Infrastructure Optimization, establishing resilient technological foundations that effortlessly accommodate future computational and operational demands.
                  </p>
                </div>
              </motion.div>

              {/* Domain 2: Process & Operational Transformation */}
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
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Operations & Transformation</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-4">
                    We deliver customized business operations and process transformation across Customer Relationship Management (CRM) and Supply Chain Management (SCM) environments.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    Our consultants work closely with stakeholders to ensure Organization and Change Management is conducted seamlessly, removing cultural friction and enabling teams to extract peak value from newly deployed workflows.
                  </p>
                </div>
              </motion.div>

              {/* Domain 3: IT Strategy, Governance & Intelligence */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <BarChart3 size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Strategy & Cost Optimization</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-4">
                    We harmonize Business - IT Strategy and Innovation with Data Analytics and Business Intelligence, giving executive leaders real-time visibility into mission-critical trends.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    Furthermore, we address Risk Regulatory and Compliance, design optimal IT Organization & Operating Modes, conduct IT Cost Optimization, and provide Global Sourcing Information to maximize financial stewardship.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Strategic Assistance Framework */}
        <section className="py-24 border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-3xl mb-16 space-y-4">
              <SectionHeader number="03" title="Strategic Assistance" />
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Iterative Framework for Bottleneck Resolution
              </h2>
              <p className="text-slate-500 font-semibold text-base md:text-lg">
                Our strategic assistance methodology is structured around three foundational stages designed to identify growth obstacles, build adaptive systems, and measure impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-200/70 space-y-6"
              >
                <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-black flex items-center justify-center text-sm">
                  01
                </span>
                <h3 className="text-xl font-black text-slate-900">Diagnostic Assessment & Insight</h3>
                <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                  We assess and gain comprehensive insight on the firm's existing business practices to identify the actual bottlenecks that hinder sustainable enterprise growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-200/70 space-y-6"
              >
                <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-black flex items-center justify-center text-sm">
                  02
                </span>
                <h3 className="text-xl font-black text-slate-900">Adaptive Solution Design</h3>
                <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                  We design and create customized solutions engineered with built-in agility so they can change and evolve fluidly as future market conditions shift.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-200/70 space-y-6"
              >
                <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-black flex items-center justify-center text-sm">
                  03
                </span>
                <h3 className="text-xl font-black text-slate-900">Implementation & Analysis</h3>
                <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                  We assist in implementing the strategic plan and execute rigorous analysis of the results for each change, verifying that targeted business outcomes are accomplished.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
