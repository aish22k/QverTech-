import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, CheckCircle2, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col gap-4">
    <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase">{number} / {title}</span>
    <div className="w-12 h-[1px] bg-blue-600/30" />
  </div>
);

const subServices = [
  { 
    name: 'SAP Implementation', 
    description: 'Advanced SAP solutions including S/4HANA migration, global deployment, module customization, and operational optimization.', 
    icon: Database, 
    color: 'text-blue-600', 
    link: '/services/erp/sap' 
  },
  { 
    name: 'Oracle E-Business', 
    description: 'Comprehensive Oracle E-Business Suite and Cloud enterprise applications for financial and operational efficiency.', 
    icon: Layout, 
    color: 'text-blue-600', 
    link: '/services/erp/oracle' 
  },
  { 
    name: 'Salesforce CRM', 
    description: 'Transform customer journeys with our end-to-end Salesforce CRM architecture, integration, and cloud intelligence.', 
    icon: Server, 
    color: 'text-blue-600', 
    link: '/services/erp/salesforce' 
  }
];

export const ERP = () => {
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
                Enterprise Solutions
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-none pt-2">
                ERP <br />
                <span className="text-blue-600">Implementation</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed font-semibold pt-4">
                Navigating the complexities of Enterprise Resource Planning requires more than just technical skill—it requires a strategic partner. QverTech delivers end-to-end ERP implementations that unify your business processes across finance, supply chain, and global customer touchpoints.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Overview and Strategic Implementation */}
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
                <SectionHeader number="01" title="Strategic Infrastructure" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                  Unifying Critical Systems for Scalable Enterprise Growth
                </h2>
                <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    Modern enterprises operate across disparate workflows, legacy databases, and distributed operations. QverTech builds cohesive ERP backbones that align operational resources, eliminate data silos, and provide real-time visibility into mission-critical KPIs.
                  </p>
                  <p>
                    Our certified architects manage full lifecycle deployments—from initial readiness assessments and custom schema design to seamless data migration, custom module development, and comprehensive change management.
                  </p>
                  <p>
                    Whether transitioning to cloud-native platforms like SAP S/4HANA, deploying scalable Oracle suites, or unifying sales through Salesforce CRM, QverTech guarantees measurable enterprise ROI and uninterrupted uptime.
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
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
                  alt="Enterprise Resource Planning Infrastructure" 
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Dedicated ERP Practices */}
        <section className="py-24 border-b border-slate-100 bg-slate-50/40">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-4xl mb-16 space-y-4">
              <SectionHeader number="02" title="Core Disciplines" />
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Enterprise Platforms & Specialized Ecosystems
              </h2>
              <p className="text-slate-500 font-semibold text-base md:text-lg">
                Industry-leading technology platforms implemented by certified practitioners with over 15 years of deployment experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subServices.map((service, idx) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
                >
                  <div>
                    <div className={`w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center ${service.color} mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">{service.name}</h3>
                    <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-slate-100">
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all uppercase tracking-wider"
                    >
                      <span>Explore Practice</span>
                      <ArrowRight size={16} />
                    </Link>
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
