import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Get in <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed">
              Have a project in mind or need expert consulting? Our team is ready to help you navigate your digital transformation journey.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-center group">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-1">Email Us</h4>
                  <p className="text-xl font-bold text-slate-900">info@qvertech.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-center group">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-1">Call Us</h4>
                  <p className="text-xl font-bold text-slate-900">+1 (469) 555-0123</p>
                </div>
              </div>
              <div className="flex gap-6 items-center group">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-1">Visit Us</h4>
                  <p className="text-xl font-bold text-slate-900">Plano, Texas, USA</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-12 rounded-[3rem] shadow-2xl relative"
          >
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Service Interest</label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none cursor-pointer">
                  <option>ERP Implementation</option>
                  <option>Strategic Consulting</option>
                  <option>Technical Staffing</option>
                  <option>Software Development</option>
                  <option>IT Support / AMS</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Message</label>
                <textarea className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all h-32" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full py-5 bg-blue-600 text-white rounded-full font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2">
                Send Message <Send size={20} />
              </button>
            </form>
            
            {/* Background blur decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>

        <div className="mt-32 glass rounded-[4rem] p-12 text-center flex flex-col md:flex-row items-center justify-between gap-8 h-full min-h-[300px] border-slate-100">
            <div className="md:text-left md:max-w-xl">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Start a conversation with an expert</h3>
                <p className="text-slate-500 text-lg">Prefer a direct chat? Speak with our solution architects today to get a quote.</p>
            </div>
            <button className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold flex items-center gap-3 hover:bg-blue-600 transition-colors">
                <MessageSquare size={24} /> Book a Discovery Call
            </button>
        </div>
      </div>
    </div>
  );
};
