import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, TrendingUp, Users, Shield, Cpu } from 'lucide-react';

export const BusinessSolution = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
            Efficiency First
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8">
            Effective & Efficient <br /><span className="text-blue-600">Business Solutions</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Precision-engineered methodologies focusing on maximum ROI and zero wastage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "Process Optimization",
              desc: "Analyzing workflows to identify and eliminate bottlenecks.",
              icon: Zap
            },
            {
              title: "ROI Acceleration",
              desc: "Ensuring every technical investment translates to business value.",
              icon: TrendingUp
            },
            {
              title: "Strategic Advisory",
              desc: "C-level consulting to align IT with long-term business goals.",
              icon: Target
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 glass-card"
            >
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Built for Scaling</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              We focus on lean, scalable solutions that drive sustainable growth. By leveraging data-driven insights, we help you make informed decisions that future-proof your enterprise.
            </p>
            <div className="flex gap-4">
               <div className="p-4 bg-white rounded-2xl shadow-sm border border-blue-100 flex-1 text-center">
                 <div className="text-3xl font-bold text-blue-600">30%</div>
                 <div className="text-xs font-bold text-slate-400 uppercase">Average Efficiency Gain</div>
               </div>
               <div className="p-4 bg-white rounded-2xl shadow-sm border border-blue-100 flex-1 text-center">
                 <div className="text-3xl font-bold text-blue-600">500+</div>
                 <div className="text-xs font-bold text-slate-400 uppercase">Optimized Workflows</div>
               </div>
            </div>
          </div>
          <div className="flex-1 relative">
             <div className="w-full h-80 bg-slate-900 rounded-3xl overflow-hidden relative shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
                <div className="flex items-center justify-center h-full">
                  <Shield className="text-blue-500 opacity-50" size={120} />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
