import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, Apple, Globe, Sparkles, 
  ShieldCheck, Eye, RefreshCw, HeartHandshake
} from 'lucide-react';

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col gap-4">
    <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase">{number} / {title}</span>
    <div className="w-12 h-[1px] bg-blue-600/30" />
  </div>
);

export const MobileDevelopment = () => {
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
                Native & Multi-Platform Engineering
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-none pt-2">
                Mobile <br />
                <span className="text-blue-600">Development</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed font-semibold pt-4">
                Make your business meet the most eyes and the likely-prospects. Mobile devices are so popular that it seems a larger world is running on them. And when something is of such prominence, it is not wise to stay behind leveraging it. Yes, we’re talking about business, and developing mobile apps can help you have a wide reach and broad customer base. Availability of mobile devices to a majority of the population globally boosts your business. It also improves it through quick reviews and prompts users to pay conveniently fast. Count on QverTech mobile app development services and discuss your app development needs today.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Theoretical Overview - Strategic Potent Medium */}
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
                <SectionHeader number="01" title="Strategic Opportunity" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                  QverTech Mobile App Development Services to Leverage the Potential-Mean
                </h2>
                <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    Bet on the most potent medium to grow and lead your business - that sounds like mobile app development. At QverTech, we possess the expertise to deliver well-recognized apps across our client base, designed to transform your operations and create direct digital relationships with end consumers.
                  </p>
                  <p>
                    To transform your business to portable devices and gain extensible customer reach, our engineering approach pairs appealing application aesthetics with rock-solid infrastructure. Every app look and feel is meticulously sculpted to divert and engage a diverse user base for potential conversion, providing effortless navigation and swift transactional checkouts.
                  </p>
                  <p>
                    We maintain complete transparency to keep you in the know of what we are up to while development proceeds. Applying a futuristic approach, our teams draw valuable insight from reviews and direct user feedbacks to improvise the application continuously, backing our clients every step of the way while developing, operating, or maintaining the product.
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
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200" 
                  alt="Mobile App Development Engineering" 
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Core Architectural Pillars (3-Card Layout matching OnSiteSupport & BusinessAdvisory) */}
        <section className="py-24 border-b border-slate-100 bg-slate-50/40">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-4xl mb-16 space-y-4">
              <SectionHeader number="02" title="Platform Architecture" />
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Targeting Dedicated Audiences with iOS, Android, and Hybrid Solutions
              </h2>
              <p className="text-slate-500 font-semibold text-base md:text-lg">
                Specialized native ecosystems and multi-platform architectures engineered to engage prospective customers across all portable devices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1: iOS App Development */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Apple size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">iOS App Development</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-4">
                    Though iOS users are limited in numbers, compared to the Android ones, they are more resourceful and potential prospects than their other counterparts. Developed on more secure Swift and extensive Objective-C programming languages, the OS is vast in scope and has a dedicated, more loyal user base that prefers sticking to it year after year.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    Targeting such a selective user base could be potentially a profitable business, so would be developing the same OS-based apps. Opt for QverTech iOS mobile app development service to extend your business to a dedicated user base. Our iOS mobile app development abilities encompass iPad mobile app development, iPhone mobile app development, Objective-C and Swift based mobile app development, Apple Watch mobile app development, Apple TV mobile app development, and Siri Intents mobile app development.
                  </p>
                </div>
              </motion.div>

              {/* Pillar 2: Android App Development */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Smartphone size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Android App Development</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-4">
                    Android users have outgrown numbers that make them a vast user pool to look forward to as a business. That is quite possible with Android-based development to extend your business to large and diverse prospects, most likely looking out for your kind of products or services.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    An interactive and custom app development approach could do wonders in engaging and multiplying your customers, thus business revenue. Discover QverTech Android app development capabilities to appeal and engage the target audience for likely convergence. Our Android app development potential combines tablet app development, Android native development, Android TV app development, Kotlin based app development, Java and J2ME based app development, and Location APIs based app development.
                  </p>
                </div>
              </motion.div>

              {/* Pillar 3: Hybrid App Development */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Globe size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Hybrid App Development</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base mb-4">
                    Imagine if you could get access to mobile devices irrespective of the OS, your business would have unbound possibilities. Make it happen with Hybrid apps that are a cross between diverse OS-based applications to provide universal accessibility to almost all the apps, no matter whether they are iOS, Android, or else.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    Those countless apps come with the combined user base, and engaging with them could be a potentially multiplied business. Experience QverTech hybrid app development expertise to leverage limitless app access advantages. Our hybrid capabilities expand with PhoneGap, Xamarin, HTML5, Flutter, Ionic, and CSS based hybrid development, as well as Progressive app development, Advanced app development, and React mobile app development.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Delivery Standards & Client Commitment */}
        <section className="py-24 border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-4 text-center">
                <SectionHeader number="03" title="Delivery Standards" />
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Why QverTech Mobile App Development Service?
                </h2>
              </div>

              <div className="bg-slate-50/70 p-10 md:p-14 rounded-[3rem] border border-slate-200/70 shadow-xl shadow-slate-200/50 space-y-8 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Transforming your enterprise to portable devices and securing extensible customer reach demands disciplined engineering, transparent collaboration, and strategic insight. At QverTech, we deliver on this promise through four foundational pillars:
                </p>
                <p>
                  First, we create an appealing app look and feel designed specifically to divert and engage a diverse user base, converting curious prospects into loyal brand advocates through intuitive UI/UX design.
                </p>
                <p>
                  Second, we practice complete transparency to keep you in the know of what we are up to throughout the entire development lifecycle, ensuring total alignment with your business milestones and technical criteria.
                </p>
                <p>
                  Third, we embrace a futuristic approach to draw real-time insight from user reviews and feedback, allowing us to continuously improvise and elevate application features to outpace market competitors.
                </p>
                <p>
                  Finally, we stand firmly behind our partners, backing our clients every step of the way while developing, operating, or maintaining the app for long-term scalability and sustained commercial success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
