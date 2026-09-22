import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, BookOpen, Users
} from 'lucide-react';

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col gap-4">
    <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase">{number} / {title}</span>
    <div className="w-12 h-[1px] bg-blue-600/30" />
  </div>
);

export const BusinessAdvisory = () => {
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
                Corporate Advisory
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-none pt-2">
                Business <br />
                <span className="text-blue-600">Advisory</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed font-semibold pt-4">
                The success of a business is measured by its sustainability. Focus on the fourth dimension of sustainability to anticipate challenges, innovate continuously, and secure lasting market advantage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Theoretical Overview - Strategic Sustainability & The Fourth Dimension */}
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
                <SectionHeader number="01" title="Strategic Sustainability" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                  Anticipating and Innovating for Long-Term Enterprise Growth
                </h2>
                <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    The success of a business is measured by its sustainability. The rule of the thumb to run a successful business is to focus on sales, operations and quality however the fourth dimension for sustainability is highly critical and often ignored.
                  </p>
                  <p>
                    It is a complex world for any business today. The traditional concepts are being replaced by new age technologies that are ever evolving. Things are changing at a fast pace and businesses are finding it challenging to incorporate everything efficiently.
                  </p>
                  <p>
                    QverTech can help your business anticipate and innovate for long term sustainability. We ensure your organisation is prepared to evaluate the challenges and opportunities across all facets of your business - commercial, strategic, marketing or manufacturing. Our experts work on data points that are trusted thus ensuring you have solutions that catapult you into the future faster and in the right direction.
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
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200" 
                  alt="Business Strategic Sustainability and Executive Advisory" 
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Data-Driven Business Advisory & Core Modules */}
        <section className="py-24 border-b border-slate-100 bg-slate-50/40">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-4xl mb-16 space-y-4">
              <SectionHeader number="02" title="Evidence-Based Advisory" />
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Data-Driven Business Advisory & In-Depth Insight
              </h2>
              <p className="text-slate-500 font-semibold text-base md:text-lg">
                Evidence-based advisory frameworks designed to assist executives in resolving functional hurdles and accelerating enterprise-wide performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Module 1: Data Driven Business Advisory */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Data-Driven Advisory</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                    QverTech is a leading global strategy and operations consulting firm that offers evidence-based business advisory programs to assist executives on issues of strategy development as well as day-to-day operations. We offer function-specific expertise in all the major business functions as well as expertise in enterprise-wide concerns such as business performance management and business process outsourcing. Function-specific advisory programs are available for finance, HR, IT, procurement, and global business services.
                  </p>
                </div>
              </motion.div>

              {/* Module 2: In-depth Insight */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <BookOpen size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">In-Depth Insight</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                    QverTech’s business advisory programs give you on-demand access to insights from our comprehensive Best Practices Intelligence Center™. This searchable online repository, unmatched in its depth and scope, places a wealth of strategic and operational resources at your fingertips: QverTech's research reports, delivering empirical insight into emerging trends, opportunities and practices.
                  </p>
                </div>
              </motion.div>

              {/* Module 3: Experienced Advisors */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Users size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Experienced Advisors</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                    Our advisory programs provide you with fast access to our veteran team of consultants and practitioners who leverage their deep experience and QverTech’s best practice database to deliver fact-based insight into specific functional challenges or enterprise issues such as performance optimization and change management.
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
