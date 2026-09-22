import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <footer className="relative z-10 pt-24 pb-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-2 mb-6 group">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                Qvertech
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Empowering businesses through intelligent digital transformation and premium IT solutions. Delivering excellence in ERP, Consulting, and Staffing.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-[10px]">Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/solutions/erp" onClick={scrollToTop} className="text-slate-500 hover:text-blue-600 text-sm transition-colors">ERP Solution</Link></li>
              <li><Link to="/solutions/effective-business" onClick={scrollToTop} className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Business Solution</Link></li>
              <li><Link to="/solutions/digital-transformation" onClick={scrollToTop} className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Digital Transformation</Link></li>
              <li><Link to="/solutions/service-commitment" onClick={scrollToTop} className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Service Commitment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-[10px]">Information</h4>
            <ul className="space-y-4">
              <li><Link to="/about" onClick={scrollToTop} className="text-slate-500 hover:text-blue-600 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/jobs" onClick={scrollToTop} className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Career</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-[10px]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-500 text-sm">
                <MapPin size={18} className="text-blue-600 shrink-0" />
                <span>5830 Granite Pkwy, #100, <br />Plano, TX 75024</span>
              </li>
              <li className="flex gap-3 text-slate-500 text-sm">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <span>+1 469-808-0111</span>
              </li>
              <li className="flex gap-3 text-slate-500 text-sm">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <span>info@qvertech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Qvertech. All rights reserved. Formerly BoT Tech.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-slate-400">
            <span>USA</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full mt-1.5" />
            <span>India</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full mt-1.5" />
            <span>UK</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
