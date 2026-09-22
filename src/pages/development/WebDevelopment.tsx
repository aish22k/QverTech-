import React from 'react';
import { motion } from 'framer-motion';
import { 
  MonitorSmartphone, Layers, ShoppingBag, Building2, 
  Globe, Sparkles, Server, Code2
} from 'lucide-react';

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col gap-4">
    <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase">{number} / {title}</span>
    <div className="w-12 h-[1px] bg-blue-600/30" />
  </div>
);

export const WebDevelopment = () => {
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
                Uninterrupted Business & Web Architecture
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-none pt-2">
                Web <br />
                <span className="text-blue-600">Development</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed font-semibold pt-4">
                We help you unlock the potential of the evolving web. The medium of the web has grown strong, especially after the post-pandemic world. Like the web space has emerged into being of immense importance for the disrupted businesses to transform digitally and reach even explore new audience, the web technologies have innovated in equal proportion to complement businesses, dealing on the online platform. We have observed the improvisation in web technologies after the virus-struck business era. That is the cause we have refined our web development services to empower your business so you can leverage the digital space to grow and lead.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Theoretical Overview - Uninterrupted Business & Technology Ecosystem */}
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
                <SectionHeader number="01" title="Uninterrupted Business" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                  QverTech Web Development Services for Your Uninterrupted Business
                </h2>
                <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    Business must be always-on, and we empower it with our innovative and customized web development services so you can operate uninterrupted, irrespective of your off or online business modes.
                  </p>
                  <p>
                    Growing digitization and web technologies have evolved web development, so we have up-scaled our services. Our extensive web development services include custom web development, SaaS development, web app development, ERP development, and open source development to ensure resilient enterprise continuity.
                  </p>
                  <p>
                    To create an interactive and engaging experience for your audience, we utilize an advanced array of web technologies including Java, Ajax, PHP, HTML 5, CSS, Magento, WordPress, ASP.NET, Perl, and Drupal, harmonizing robust backend architecture with intuitive front-end presentation.
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Web Development Engineering and Architecture" 
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Core Web Offerings (4-Card Grid matching inner services layout) */}
        <section className="py-24 border-b border-slate-100 bg-slate-50/40">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-4xl mb-16 space-y-4">
              <SectionHeader number="02" title="Specialized Offerings" />
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Responsive, CMS, eCommerce, and Enterprise Web Development
              </h2>
              <p className="text-slate-500 font-semibold text-base md:text-lg">
                Engineered solutions tailored to respond to modern consumer demands and execute sophisticated enterprise operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Offering 1: Responsive Web Development */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <MonitorSmartphone size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Responsive Web Development</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-4">
                    Your business transforming to digital space and responding to the users the way they want is the best way to engage and even convert your audience.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    The QverTech responsive web development service optimizes your website to make it able to respond to different devices and engage with the audience present there. Ultimately, it would multiply your chances of having a fair audience diversion and conversion.
                  </p>
                </div>
              </motion.div>

              {/* Offering 2: CMS Development */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Layers size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">CMS Development</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-4">
                    Allow your team to post or edit website content without relying on front-end developers, and even engage your users to contribute to website content.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    Either of your purposes meets perfectly by opting for QverTech CMS development that helps you with the custom content management system based on your specific business needs. Now engage your team or users to your website without any tech complexities and encourage them to contribute with utmost ease.
                  </p>
                </div>
              </motion.div>

              {/* Offering 3: eCommerce Development */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <ShoppingBag size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">eCommerce Development</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-4">
                    Explore limitless business possibilities to expand your business there. When digital space provides you boundless reach to new markets and users, you don’t need to restrict your business anymore to a boundary.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    Launch your business across the places with QverTech eCommerce development and multiply your user base, thus your revenue. Benefit from interactive and innovative web development to engage more users.
                  </p>
                </div>
              </motion.div>

              {/* Offering 4: Enterprise Website Development */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Building2 size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Enterprise Website Development</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-4">
                    Unlike a generic website, an enterprise website carries extensive internal and external business operations.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    Given the augmented capabilities involved in enterprise web development, it differentiates enterprise-based web development from general web development and demands experienced professionals to perform the task. Count on QverTech enterprise web development services to deliver ultimate ease in operating complicated to complex enterprise-bound tasks.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Strategic Value Proposition */}
        <section className="py-24 border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-4 text-center">
                <SectionHeader number="03" title="Strategic Value" />
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Precisely, Why You Should Go for QverTech Web Development Services
                </h2>
              </div>

              <div className="bg-slate-50/70 p-10 md:p-14 rounded-[3rem] border border-slate-200/70 shadow-xl shadow-slate-200/50 space-y-8 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Leverage the digital space to reach out to a limitless audience. By establishing a modern, highly responsive web presence, your enterprise connects effortlessly with users across geographies and devices, maximizing your market visibility and brand reach.
                </p>
                <p>
                  Expand your business to explore new horizons. Our custom web applications and enterprise platforms provide the scalability and digital agility necessary to seize emerging commercial opportunities and expand beyond traditional market boundaries.
                </p>
                <p>
                  Be boundless and discover new prospects. Through interactive digital experiences, seamless content management, and robust transactional backends, QverTech positions your business to engage prospective clients and sustain uninterrupted growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
