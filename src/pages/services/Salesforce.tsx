import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Cloud, Zap, Shield, BarChart3, Users, 
  ArrowRight, Smartphone, AppWindow, Award, HeartHandshake, Compass
} from 'lucide-react';

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col gap-4">
    <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase">{number} / {title}</span>
    <div className="w-12 h-[1px] bg-blue-600/30" />
  </div>
);

export const Salesforce = () => {
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
                Customer Success Platform
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none pt-2">
                Salesforce <br />
                <span className="text-blue-600">Customer</span> Experience.
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-semibold pt-4">
                Deliver exceptional customer experience and grow your business with Salesforce.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: CRM Leadership */}
        <section className="py-32 border-b border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
              <div className="lg:col-span-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <SectionHeader number="01" title="CRM Excellence" />
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
                  Unite Teams. <br />Engage Customers.
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    Don’t let that actionable business insight go in vain due to your diverse and distributed team. Provide your marketing and sales team an integrated medium to easily flow customer information across.
                  </p>
                  <p>
                    Count on Salesforce – a unified CRM platform – to combine your disparate apps and unite your distributed teams for the great benefit of your business. Let QverTech Salesforce services help your business achieve a shared view of every customer, enabling your teams to deliver exceptional solutions.
                  </p>
                </div>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-4 bg-blue-50/50 border border-blue-100/50 rounded-2xl px-6 py-4">
                    <Compass className="text-blue-600 shrink-0" size={24} />
                    <div>
                      <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Unify Customer Activities</h4>
                      <p className="text-xs text-slate-500 font-medium">Never lose track of what customers are up to, and respond instantly with structured insights.</p>
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
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1200" 
                  alt="Salesforce CRM Platform" 
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Core Cloud Offerings */}
        <section className="py-32 border-b border-slate-100 bg-slate-50/40">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
              <div className="lg:col-span-12">
                <SectionHeader number="02" title="Core Cloud Pillars" />
                <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-none mt-6">
                  Transformative Experience Across All Channels
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Card 1: Salesforce Sales Cloud */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Zap size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Salesforce Sales Cloud</h3>
                  <p className="text-slate-500 mb-8 font-medium leading-relaxed text-sm">
                    Consolidate customer relationships to leverage terms. Avoid falling back on concreting agreements with clients, achieving better retention and an increased sales graph. QverTech positions you for deeper, high-performing connections and real-time monitoring.
                  </p>
                  
                  <div className="border-t border-slate-100 pt-6">
                    <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase block mb-4">Why QverTech Sales Cloud?</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Defining business vision & goals",
                        "Empowering members through training",
                        "Additional features for cohesive CRM",
                        "Data imports & custom permissions"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                          <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Salesforce Marketing Cloud */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <BarChart3 size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Salesforce Marketing Cloud</h3>
                  <p className="text-slate-500 mb-8 font-medium leading-relaxed text-sm">
                    Extract actionable insights to target potential product pipelines at exactly the right time. Multiply ROI using structured intelligence, yielding a unified and flexible view of every customer alongside high-performance marketing channels.
                  </p>
                  
                  <div className="border-t border-slate-100 pt-6">
                    <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase block mb-4">Why QverTech Marketing Cloud?</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Deeper customer understanding",
                        "Engaging AI across emails & ads",
                        "Actionable dashboard analytics",
                        "Connecting cross-channel records"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                          <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Salesforce Commerce Cloud */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Cloud size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Salesforce Commerce Cloud</h3>
                  <p className="text-slate-500 mb-8 font-medium leading-relaxed text-sm">
                    Gain the complete flexibility to scale and multiply customer retention as business and sales operations grow. Rely on automation and AI integrations to keep visitors highly engaged throughout every purchasing journey.
                  </p>
                  
                  <div className="border-t border-slate-100 pt-6">
                    <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase block mb-4">Why QverTech Commerce Cloud?</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Embedded commerce with fast clicks",
                        "Scale for seasonal peak volumes",
                        "Increase multi-channel activities",
                        "Connected marketing-to-service views"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                          <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Salesforce Service Cloud */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Users size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Salesforce Service Cloud</h3>
                  <p className="text-slate-500 mb-8 font-medium leading-relaxed text-sm">
                    Simplify customer service with AI power. Deliver highly personalized, immediate communication that ensures long-term confidence, boosts conversion rates, and maximizes continuous brand loyalty across every single endpoint.
                  </p>
                  
                  <div className="border-t border-slate-100 pt-6">
                    <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase block mb-4">Why QverTech Service Cloud?</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Supporting multi-channel interactions",
                        "AI-powered automated workflows",
                        "High-productivity management tools",
                        "Continuous real-time tracking data"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                          <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
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
      </div>
    </div>
  );
};
