import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Cloud, Cpu, Server, CheckCircle2, 
  ShieldCheck, Globe, Layers, Award, Zap
} from 'lucide-react';

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col gap-3">
    <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase">{number} / {title}</span>
    <div className="w-12 h-[1px] bg-blue-600/30" />
  </div>
);

export const DigitalTransformation = () => {
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
                Future Ready Enterprise
              </span>
              <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none pt-2">
                Digital <br />
                <span className="text-blue-600">Transformation</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed font-semibold pt-4">
                The extensive digitalization and need for digital transformation have made it necessary for business organizations to upgrade themselves.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: The Driving Force & Enterprise Solutions */}
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
                <SectionHeader number="01" title="Strategic Imperative" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                  Evolving Infrastructure & Seamless Digital Migration
                </h2>
                <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    The extensive digitalization and need for digital transformation have made it necessary for business organizations to upgrade themselves. The intense competition and need to keep up the pace with the evolving arena is significant. It acts as a driving force and appeals to businesses to incorporate the best enterprise application services.
                  </p>
                  <p>
                    QverTech is a leader in the field of information technology. We have experience of more than one decade in offering advanced Enterprise Solutions. We provide comprehensive enterprise application services.
                  </p>
                  <p className="text-slate-500 font-medium text-base">
                    Our team of experts are highly qualified, proficient, and talented. Their knowledge of the spectrum coupled with expertise facilitates the digital migration process. They devise the best cloud infrastructure and network plans based on your business functioning.
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
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Digital Transformation & Migration" 
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Core Pillars of Digital Transformation */}
        <section className="py-24 border-b border-slate-100 bg-slate-50/40">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-12 space-y-4">
                <SectionHeader number="02" title="Our Expertise" />
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
                  Comprehensive Enterprise Capabilities
                </h2>
                <p className="text-slate-500 font-semibold max-w-3xl text-base md:text-lg">
                  Empowering your digital migration with over a decade of IT leadership, tailored cloud plans, and qualified engineering talent.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Layers,
                  title: "Decade of Experience",
                  desc: "Leader in IT with over ten years of expertise in delivering advanced, high-impact Enterprise Solutions for evolving business needs."
                },
                {
                  icon: Cpu,
                  title: "Proficient Migration",
                  desc: "Highly skilled teams with deep spectrum knowledge to streamline digital migration without business disruption."
                },
                {
                  icon: Cloud,
                  title: "Tailored Cloud Plans",
                  desc: "Designing and deploying optimal cloud infrastructure and network architectures custom-tailored to your business functioning."
                }
              ].map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
                >
                  <div>
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      <pillar.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">{pillar.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="border-t border-slate-100 pt-6 mt-8 flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 size={16} className="text-blue-500" />
                    <span>Enterprise Application Services</span>
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

