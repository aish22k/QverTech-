import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    subLinks: [
      { 
        name: 'ERP Implementation', 
        href: '/services/erp',
        subLinks: [
          { name: 'SAP', href: '/services/erp/sap' },
          { name: 'Oracle', href: '/services/erp/oracle' },
          { name: 'Salesforce', href: '/services/erp/salesforce' },
        ]
      },
      { 
        name: 'Consulting', 
        href: '/services/consulting',
        subLinks: [
          { name: 'Business Advisory', href: '/services/consulting/advisory' },
          { name: 'Business Consulting', href: '/services/consulting/business' },
        ]
      },
      { 
        name: 'IT Support / AMS', 
        href: '/services/it-support',
        subLinks: [
          { name: 'On-site', href: '/services/it-support/on-site' },
          { name: 'Off-Shore', href: '/services/it-support/off-shore' },
        ]
      },
    ]
  },
  { name: 'Staffing', href: '/services/staffing' },
  { 
    name: 'Development', 
    href: '/development',
    subLinks: [
      { name: 'Mobile Development', href: '/development/mobile' },
      { name: 'Web Development', href: '/development/web' },
    ]
  },
  { name: 'Jobs', href: '/jobs' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleMobileNavClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "sticky top-0 w-full z-50 transition-all duration-300 bg-white border-b border-slate-100 shadow-sm",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <Link to="/" onClick={handleNavClick} className="flex items-center gap-2 group">
          <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Qvertech
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link 
                to={link.href}
                onClick={handleNavClick}
                className={cn(
                  "text-base font-medium transition-colors flex items-center gap-1",
                  location.pathname === link.href ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-slate-600 hover:text-blue-600"
                )}
              >
                {link.name}
                {link.subLinks && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
              </Link>
              
              {link.subLinks && (
                <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white border border-slate-100 min-w-[240px] rounded-2xl p-2 shadow-2xl shadow-slate-200/80">
                    {link.subLinks.map((sub) => (
                      <div key={sub.name} className="relative group/sub">
                        <Link
                          to={sub.href}
                          onClick={handleNavClick}
                          className="flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors uppercase tracking-tight"
                        >
                          <span>{sub.name}</span>
                          {sub.subLinks && (
                            <ChevronDown size={14} className="-rotate-90 group-hover/sub:rotate-0 transition-transform text-slate-400 group-hover/sub:text-blue-600" />
                          )}
                        </Link>
                        
                        {sub.subLinks && (
                          <div className="absolute left-full top-0 ml-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
                            <div className="bg-white border border-slate-100 min-w-[210px] rounded-2xl overflow-hidden p-2 shadow-2xl shadow-slate-200/80">
                              {sub.subLinks.map((nested) => (
                                <Link
                                  key={nested.name}
                                  to={nested.href}
                                  onClick={handleNavClick}
                                  className="block px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors uppercase tracking-wider"
                                >
                                  {nested.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl max-h-[80vh] overflow-y-auto"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  <Link
                    to={link.href}
                    onClick={handleMobileNavClick}
                    className="text-lg font-bold text-slate-900 hover:text-blue-600 flex items-center justify-between"
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="pl-4 flex flex-col gap-3 border-l-2 border-slate-100 mt-1 mb-2">
                      {link.subLinks.map((sub) => (
                        <div key={sub.name} className="flex flex-col gap-1.5">
                          <Link
                            to={sub.href}
                            onClick={handleMobileNavClick}
                            className="text-sm font-bold text-slate-700 hover:text-blue-600 uppercase tracking-tight"
                          >
                            {sub.name}
                          </Link>
                          {sub.subLinks && (
                            <div className="pl-3 flex flex-col gap-1 border-l border-slate-200 my-1">
                              {sub.subLinks.map((nested) => (
                                <Link
                                  key={nested.name}
                                  to={nested.href}
                                  onClick={handleMobileNavClick}
                                  className="text-xs font-semibold text-slate-500 hover:text-blue-600 py-1 uppercase tracking-wider"
                                >
                                  {nested.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
