import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col gap-3">
    <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase">{number} / {title}</span>
    <div className="w-12 h-[1px] bg-blue-600/30" />
  </div>
);

export const ServiceCommitment = () => {
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
                Unwavering Support
              </span>
              <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none pt-2">
                High Service <br />
                <span className="text-blue-600">Commitment</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed font-semibold pt-4">
                At QverTech, we follow a client-centric approach and strive to achieve the balance of business and IT alignment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Client-Centric Approach & Business/IT Alignment */}
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
                  Advanced IT Services & Infrastructure
                </h2>
                <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    At QverTech, we follow a client-centric approach and strive to achieve the balance of business and IT alignment.
                  </p>
                  <p>
                    We aim to provide advanced IT services that meet the exact needs of businesses. We work in tandem with our clients. We strive to comprehend their objectives and need for IT infrastructure. We provide both on-premise as well as cloud solutions.
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
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200" 
                  alt="High Service Commitment and IT Alignment" 
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: IT Specialists & Comprehensive Services */}
        <section className="py-24 border-b border-slate-100 bg-slate-50/40">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-12 space-y-4">
                <SectionHeader number="02" title="Industry Expertise" />
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
                  Driven by Deep IT Sector Knowledge
                </h2>
                <p className="text-slate-600 font-medium max-w-4xl text-base md:text-lg leading-relaxed pt-2">
                  QverTech is driven by a team of IT specialists having in-depth knowledge of the IT sector. We exert to streamline your IT infrastructure with our business consulting and enterprise application services. Moreover, QverTech also offers offshore and onshore staffing services as well as ERP implementation solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Business Consulting",
                  desc: "Streamlining IT infrastructure through tailored consulting and strategic frameworks."
                },
                {
                  title: "Enterprise Application Services",
                  desc: "Delivering advanced enterprise application services aligned with operational goals."
                },
                {
                  title: "Onshore & Offshore Staffing",
                  desc: "Providing agile onshore and offshore staffing services to fulfill talent demands."
                },
                {
                  title: "ERP Implementation",
                  desc: "Complete ERP implementation solutions to reduce risk and deliver value."
                }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-1 transition-all"
                >
                  <h3 className="text-xl font-black text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">{card.desc}</p>
                  <div className="border-t border-slate-100 pt-4 mt-6 flex items-center gap-2 text-xs font-bold text-blue-600">
                    <CheckCircle2 size={14} />
                    <span>QverTech Offering</span>
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

