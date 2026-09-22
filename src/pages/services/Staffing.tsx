import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Star, BarChart, UserCircle, Rocket, CheckCircle } from 'lucide-react';

const staffingTiers = [
    { title: "Direct Hire", description: "Finding the perfect permanent addition to your internal core team.", icon: UserPlus },
    { title: "Contract-to-Hire", description: "Evaluate talent in your environment before making a final commitment.", icon: Star },
    { title: "Project Based", description: "Specialized teams for time-sensitive development or ERP rollouts.", icon: Rocket }
];

export const Staffing = () => {
    return (
        <div className="pt-32 pb-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-bold text-slate-900 mb-8"
                    >
                        Futuristic <span className="text-blue-600">Staffing</span>
                    </motion.h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        In the race for digital transformation, talent is your most valuable asset. QverTech bridges the gap between top-tier technical experts and innovative organizations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
                    {staffingTiers.map((tier, idx) => (
                        <motion.div
                            key={tier.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-12 glass rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all text-center group"
                        >
                            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-blue-600/20 group-hover:scale-110 transition-transform">
                                <tier.icon size={40} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">{tier.title}</h3>
                            <p className="text-slate-500 leading-relaxed mb-8">
                                {tier.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="relative glass rounded-[4rem] p-12 md:p-24 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Why Partner With <span className="text-blue-600">QverTech Staffing?</span></h2>
                            <ul className="space-y-6">
                                {[
                                    "Deep expertise in SAP/Oracle/Salesforce talent markets",
                                    "Rigorous technical vetting process by senior architects",
                                    "Global reach with focus on North American & Asian markets",
                                    "Speed-to-hire focused on project-critical deadlines"
                                ].map((item) => (
                                    <li key={item} className="flex gap-4 items-center text-lg text-slate-600 font-medium">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                            <CheckCircle size={18} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="aspect-video glass rounded-3xl flex items-center justify-center relative bg-royal-blue overflow-hidden">
                             <UserCircle size={120} className="text-white opacity-20 absolute" />
                             <div className="text-center relative z-10 px-8">
                                <h4 className="text-3xl font-bold text-white mb-4">Scale Your Team Now</h4>
                                <p className="text-blue-200 mb-8">Access our network of 5,000+ vetted technical consultants.</p>
                                <button className="px-8 py-4 bg-white text-royal-blue rounded-full font-bold hover:bg-blue-50 transition-all">Submit Vacancy</button>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
