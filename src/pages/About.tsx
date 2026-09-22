import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Award, Briefcase, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const values = [
  { title: "Innovation", description: "Symbolizing our core approach to deliver insightful and futuristic solutions.", icon: Zap },
  { title: "Simplicity", description: "Transforming great ideas into simple, cost-effective, and complete results.", icon: Target },
  { title: "Integrity", description: "A deep-rooted commitment to personal integrity and professional excellence.", icon: Shield },
  { title: "Partnership", description: "Unrelenting focus on relationships and creating personalized value for clients.", icon: Users }
];

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col gap-4">
    <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase">{number} / {title}</span>
    <div className="w-12 h-[1px] bg-blue-600/30" />
  </div>
);

export const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Subtle Background Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10">
        {/* Simple Hero */}
        <section className="pt-40 pb-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-12">
                About <br />
                <span className="text-blue-600">QverTech</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-medium mx-auto">
                QverTech is an end-to-end professional services firm that delivers high-value enterprise application solutions to leading mid-size and Fortune 500 companies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Legacy & Experience */}
        <section className="py-32 border-b border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
              <div className="lg:col-span-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <SectionHeader number="01" title="Our Legacy" />
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
                  Over a Decade of <br />Strategic Partnerships.
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    For more than a decade, QverTech has partnered with clients in the development, delivery and oversight of targeted Business Intelligence and Enterprise Applications Initiatives. During this existence, we have delivered hundreds of projects in ERP for multiple industries like Manufacturing, Automotive, Chemical, Hi-Tech, Media, Financial, Retail and Food & Beverage.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    Our service offerings range across industry verticals such as SAP & Oracle Implementation, Data Migration & Data Governance, Analytics, Offshore Custom Development and Application Maintenance Support. We are determined to over-deliver on our commitments.
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
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Strategic Partnership" 
                  className="w-full object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Portfolio & Approach */}
        <section className="py-32 border-b border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 text-right lg:block">
              <div className="lg:col-span-12 flex lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <SectionHeader number="02" title="Our Portfolio" />
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[2rem] overflow-hidden shadow-3xl shadow-blue-900/10 order-2 lg:order-1"
              >
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Solution Portfolio" 
                  className="w-full object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8 order-1 lg:order-2"
              >
                <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-[1.2]">
                  Comprehensive Solutions for <br />Competitive Edge.
                </h2>
                <p className="text-2xl text-slate-800 font-medium leading-relaxed">
                  We provide a comprehensive portfolio of solutions and services designed to help companies increase effectiveness, reduce operational costs and improve business performance.
                </p>
                <p className="text-lg text-slate-500 leading-relaxed">
                  While we thrive on engaging clients in a project mode, sharing responsibility for deliverables and outcomes, we also frequently provide skilled consultants to augment our clients' projects and/or implementation of specialized functions. QverTech also offers design and development of custom software, with a dedicated team focused on emerging technologies.
                </p>
                <div className="pt-6">
                  <div className="flex items-center gap-4 text-blue-600 font-black uppercase tracking-widest text-[10px]">
                    <span>Quality Excellence Guaranteed</span>
                    <div className="h-[1px] w-20 bg-blue-600" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Values & Quality */}
        <section className="py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 text-center">
              <div className="lg:col-span-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <SectionHeader number="03" title="Core Values" />
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-[1.2]">
                    Innovation and Simplicity.
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    QverTech core values symbolize Innovation and Simplicity which enable us to consistently deliver insightful, complete and cost-effective solutions. We exist to inspire our employees, infuse passion and develop a commitment to personal integrity & excellence. we believe in the transformation of great Ideas into Simple Solutions.
                  </p>
                  <p className="text-base text-slate-500 leading-relaxed italic border-l-2 border-blue-600 pl-6">
                    "Quality comes from a combination of experience, communication and commitment to excellence. QverTech’s Global Enterprise Management Specialists promise to deliver these attributes to all clients."
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-[2rem] overflow-hidden shadow-3xl shadow-blue-900/10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                  alt="Team Innovation" 
                  className="w-full object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-100"
            >
              {values.map((v, idx) => (
                <div
                  key={v.title}
                  className="p-10 bg-white group hover:bg-slate-50 transition-colors h-full"
                >
                  <v.icon className="text-blue-600 mb-6 transition-transform group-hover:scale-110" size={28} />
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};
