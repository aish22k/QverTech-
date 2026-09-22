import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Landmark, TrendingUp, 
  Sparkles, CheckCircle2, ShieldCheck, HeartHandshake,
  Lightbulb, Compass
} from 'lucide-react';

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col gap-4">
    <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase">{number} / {title}</span>
    <div className="w-12 h-[1px] bg-blue-600/30" />
  </div>
);

export const Consulting = () => {
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
                Strategic Guidance & Execution
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-none pt-2">
                Consulting <br />
                <span className="text-blue-600">Services</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed font-semibold pt-4">
                Working with a specialist can bring in instant results. It helps the Clients get clarity, trial and error is removed from the equation and questions are answered.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Theoretical Overview - Immediate Results & Specialist Guidance */}
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
                <SectionHeader number="01" title="Immediate Value & Clarity" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                  Eliminating Trial and Error Through Specialized Experience
                </h2>
                <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    Working with a specialist can bring in instant results. It helps the Clients get clarity, trial and error is removed from the equation and questions are answered.
                  </p>
                  <p>
                    Our experienced Consultants can start working on critical objectives right away. Their years of experience and critical understanding of business and markets help you to channelize your resources optimally.
                  </p>
                  <p>
                    Our consultants are business experts. They strive to update themselves with the latest developments in the market and bring innovative solutions for your business.
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                  alt="Specialist Business and IT Consultants" 
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Theoretical Overview - Technology-Driven Company & Early Phase Growth */}
        <section className="py-24 border-b border-slate-100 bg-slate-50/40">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-4 text-center">
                <SectionHeader number="02" title="Technology-Driven Consulting" />
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Optimum Utilization of Resources & Enterprise Structuring
                </h2>
              </div>

              <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 space-y-8 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  QverTech is a technology-driven company. We aim to introduce the latest technology in a business to improve its operations and make optimum utilization of resources. Our team of business consultants and specialists educate the business to leverage technological advances to the fullest, thus working in favour of the company.
                </p>
                <p>
                  Company consulting services from QverTech for start-ups concentrate on the early phases of a business endeavour. We assist our clients in legally structuring their businesses. We provide consulting services for staffing, IT support, Enterprise applications, Analytics, IT consulting, cloud hosting as well as assessment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Consulting Services (Advisory & Business Consulting Cards) */}
        <section className="py-24 border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="space-y-4 mb-16">
              <SectionHeader number="03" title="Consulting Services" />
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
                Consulting Services:
              </h2>
              <p className="text-slate-500 font-semibold max-w-3xl text-base md:text-lg">
                Explore our core consulting practices designed to align strategic vision with operational execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Business Advisory Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50/70 p-10 md:p-12 rounded-[2.5rem] border border-slate-200/70 hover:bg-white hover:border-blue-600 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Landmark size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                    Business Advisory
                  </h3>
                  <p className="text-slate-600 font-medium text-base leading-relaxed mb-6">
                    Partnering with executive leadership to legally structure enterprises, navigate regulatory compliance, evaluate risk, and optimize capital investments.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-200/80">
                  <Link
                    to="/services/consulting/advisory"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 group-hover:text-blue-700 transition-colors"
                  >
                    <span>Explore Business Advisory</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              {/* Business Consulting Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-50/70 p-10 md:p-12 rounded-[2.5rem] border border-slate-200/70 hover:bg-white hover:border-blue-600 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <TrendingUp size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                    Business Consulting
                  </h3>
                  <p className="text-slate-600 font-medium text-base leading-relaxed mb-6">
                    Streamlining core operations, deploying cutting-edge enterprise applications, and modernizing workflows to ensure maximum resource utilization.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-200/80">
                  <Link
                    to="/services/consulting/business"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 group-hover:text-blue-700 transition-colors"
                  >
                    <span>Explore Business Consulting</span>
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
