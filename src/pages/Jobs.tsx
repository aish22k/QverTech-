import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Star } from 'lucide-react';

const positions = [
  { title: "Senior SAP Consultant", location: "Plano, TX / Remote", type: "Full-time", description: "Leading S/4HANA implementation projects for global retail clients." },
  { title: "Oracle EBS Specialist", location: "Global / Remote", type: "Contract", description: "Expertise in Finance and SCM modules for large-scale enterprise rollouts." },
  { title: "Full Stack React Developer", location: "Off-shore / Remote", type: "Full-time", description: "Building futuristic dashboards and ERP portlets using React and Node.js." },
  { title: "Technical Recruiter", location: "Remote", type: "Full-time", description: "Connecting top-tier IT talent with our premium fortune 500 clients." }
];

export const Jobs = () => {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-8"
          >
            Join the <span className="text-blue-600">Team</span>
          </motion.h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            QverTech is always looking for brilliant minds to join our global network of consultants and developers. We offer high service commitment not just to our clients, but to our employees.
          </p>
        </div>
      </div>
    </div>
  );
};
