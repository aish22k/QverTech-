import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Cpu, Globe, Users, Briefcase, Zap, Shield, Rocket, Smile, Trophy, Cloud, Database, BarChart3, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const heroSlides = [
  {
    tag: "Strategic Infrastructure",
    title: "ERP Solution, consulting, staffing",
    description: "Curated pool of ERP professionals, agile onshore & offshore IT staffing, and strategic consulting to mitigate risk and optimize delivery costs.",
    link: "/solutions/erp",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
  },
  {
    tag: "Efficiency First",
    title: "Effective Business Solutions",
    description: "Effective and efficient methodologies focusing on maximum ROI and zero wastage. Precision-engineered solutions for sustainable growth.",
    link: "/solutions/effective-business",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600"
  },
  {
    tag: "Future Ready",
    title: "Digital Transformation",
    description: "Intelligent digital transformation modernization legacy systems and leveraging emerging tech to create a competitive edge.",
    link: "/solutions/digital-transformation",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600"
  },
  {
    tag: "Unwavering Support",
    title: "High Service Commitment",
    description: "High service commitment ensuring technical excellence and global support. Reliability and performance when you need it most.",
    link: "/solutions/service-commitment",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1600"
  }
];

const services = [
  {
    title: "ERP Implementation",
    description: "Holistic ERP strategies including SAP, Oracle, and Salesforce to streamline your operations.",
    icon: Cpu,
    link: "/services/erp",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Consulting",
    description: "Expert business advisory and strategic consulting to drive growth and process optimization.",
    icon: Globe,
    link: "/services/consulting",
    gradient: "from-blue-600 to-blue-700"
  },
  {
    title: "IT Support / AMS",
    description: "On-site and off-shore application management services for continuous business continuity.",
    icon: Zap,
    link: "/services/it-support",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Staffing",
    description: "Connecting top-tier talent with world-class organizations to build futuristic teams.",
    icon: Users,
    link: "/services/staffing",
    gradient: "from-blue-600 to-blue-700"
  }
];

export const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-[120px] pointer-events-none"></div>

      <main className="max-w-7xl mx-auto flex flex-col items-center px-6 lg:px-12 py-10 lg:py-20 relative z-10 min-h-[85vh] overflow-hidden">
        {/* Hero Content - Carousel */}
        <div className="w-full relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl bg-slate-900 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={heroSlides[slideIndex].image} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 z-0" 
                alt={heroSlides[slideIndex].title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent z-10" />
              
              <div className="relative z-20 w-full h-full flex flex-col justify-center px-8 md:px-20 text-left">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="max-w-2xl"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600/20 backdrop-blur-md text-blue-300 rounded-full text-[10px] font-black uppercase tracking-[0.25em] mb-8 border border-blue-400/30">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                    {heroSlides[slideIndex].tag}
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl font-black leading-[1.1] mb-6 text-white tracking-tight">
                    {heroSlides[slideIndex].title.split(' ')[0]} <br />
                    <span className="text-blue-400">{heroSlides[slideIndex].title.split(' ').slice(1).join(' ')}</span>
                  </h1>

                  <p className="text-sm md:text-lg text-slate-300 mb-10 leading-relaxed font-medium">
                    {heroSlides[slideIndex].description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to={heroSlides[slideIndex].link} 
                      className="bg-blue-600 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-blue-900/20 active:scale-95"
                    >
                      Explore Solutions 
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Slider Indicators - More Visible */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-40 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/5">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideIndex(idx)}
                className={cn(
                  "h-2 rounded-full transition-all duration-500 cursor-pointer",
                  idx === slideIndex 
                    ? "w-12 bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)]" 
                    : "w-4 bg-white/40 hover:bg-white/60"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* About QverTech Section */}
        <section className="w-full mt-32 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 rounded-full -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                alt="Architectural Vision" 
                className="rounded-[2.5rem] shadow-2xl shadow-blue-900/10 w-full object-cover aspect-[4/3] lg:aspect-square"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-left order-1 lg:order-2"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 border border-blue-100">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
                Your Strategic Partner in <br />
                <span className="text-blue-600">Digital Evolution</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  QverTech is a distinguished professional enterprise specializing in advanced IT solutions and comprehensive consulting services. With over 15 years of deep-rooted expertise across diverse global industries, we are recognized for pioneering futuristic digital transformations.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  Our elite team of technocrats combines technical mastery with strategic vision to implement sophisticated technical architectures. We take immense pride in supporting the technological evolution of global industry leaders, including many within the Fortune 500, delivering excellence that drives sustainable growth.
                </p>
                <div className="pt-4">
                  {/* <Link to="/contact" className="inline-flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-sm hover:gap-4 transition-all">
                    More about our mission <ArrowRight size={18} />
                  </Link> */}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Services Section (Moved up) */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Services We Offer</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Link to={service.link} className="block group h-full">
                  <div className="p-8 flex flex-col h-full bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all duration-500 group-hover:bg-blue-600 group-hover:shadow-2xl group-hover:shadow-blue-200 group-hover:-translate-y-2">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-blue-50 text-blue-600 shadow-sm transition-all duration-300 group-hover:bg-white/20 group-hover:text-white group-hover:rotate-6">
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-black mb-3 text-slate-900 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6 flex-grow text-slate-500 group-hover:text-white/80 transition-colors duration-300 font-medium">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 text-blue-600 group-hover:text-white group-hover:gap-4 transition-all duration-300">
                        Learn More 
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions & Team Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
                  QverTech <span className="text-blue-600">Team</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-700 text-lg leading-relaxed font-semibold">
                    It is considerably hassle-free when you start a business with expert assistance. Our experts focus on delivering concrete outcomes and competitive advantages from day one. By partnering with us, procrastination is eliminated, and technical delays or personal uncertainties are entirely avoided.
                  </p>
                  <p className="text-slate-600 text-base leading-relaxed">
                    QverTech offers comprehensive on-premise and enterprise cloud solutions tailored to your specific needs. Our on-premise portfolio includes enterprise performance management, robust supply chain management, and advanced data security. We handle the entire lifecycle—from initial assessment and design to implementation and migration.
                  </p>
                  <p className="text-slate-600 text-base leading-relaxed">
                    Our enterprise cloud ecosystem consists of specialized cloud storage, real-time data visualization, seamless integration, and advanced CRM platforms designed to scale with your ambitions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-100/40 rounded-full blur-3xl -z-10" />
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Team Collaboration" 
                  className="relative rounded-[2rem] shadow-2xl object-cover aspect-[4/3] w-full"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float Card */}
              <div className="absolute -bottom-10 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-[240px] hidden md:block animate-float text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <Briefcase size={24} />
                  </div>
                </div>
                <p className="text-2xl font-black text-slate-900 leading-tight">92</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mt-1">Projects Completed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section (Milestones) */}
      <div className="w-full py-24 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col items-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-blue-600 mb-4 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              Our Journey
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">QverTech's Milestones</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            <div className="text-center group">
              <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Briefcase size={24} />
              </div>
              <div className="text-4xl font-black text-slate-900 mb-1">92</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Successful Projects Delivered</div>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Smile size={24} />
              </div>
              <div className="text-4xl font-black text-slate-900 mb-1">53</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Trusted Global Partnerships</div>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Trophy size={24} />
              </div>
              <div className="text-4xl font-black text-slate-900 mb-1">107</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Innovation Milestones Achieved</div>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Users size={24} />
              </div>
              <div className="text-4xl font-black text-slate-900 mb-1">110</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Elite Technical Experts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Grid (Enhanced) */}
      {/* <section className="py-24 bg-white/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/5 to-transparent" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                  Driving Results Through <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">Innovation</span>
                </h2>
                <p className="text-slate-500 text-xl mb-12 leading-relaxed">
                  With years of expertise in ERP and digital transformation, we help startups and enterprises scale with confidence. Our commitment to high service quality ensures your success.
                </p>
                <div className="flex gap-12">
                  <div>
                    <div className="text-5xl font-black text-slate-900 mb-2">110+</div>
                    <div className="text-slate-400 font-medium">Expert Consultants</div>
                  </div>
                  <div>
                    <div className="text-5xl font-black text-slate-900 mb-2">95%</div>
                    <div className="text-slate-400 font-medium">Client Retention</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[Shield, Briefcase, Zap, Rocket].map((Icon, idx) => (
                  <div key={idx} className="p-8 bg-white rounded-2xl shadow-xl shadow-slate-100 flex flex-col gap-4">
                    <Icon className="text-blue-600" size={32} />
                    <div className="h-2 w-12 bg-blue-100 rounded-full" />
                    <div className="h-2 w-full bg-slate-50 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-32 bg-royal-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-bold mb-8">Ready to Elevate <br />Your Business?</h2>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto mb-12">
            Join the ranks of high-performing companies powered by QverTech's technical expertise and strategic consulting.
          </p>
          <Link to="/contact" className="inline-block px-12 py-6 bg-white text-royal-blue rounded-full font-black text-xl hover:bg-blue-50 hover:scale-105 transition-all">
            Get in Touch
          </Link>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        </div>
      </section> */}
    </div>
  );
};
