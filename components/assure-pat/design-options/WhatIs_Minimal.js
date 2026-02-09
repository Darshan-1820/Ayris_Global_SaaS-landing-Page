import React from 'react';
import { motion } from 'framer-motion';

export default function WhatIs_Minimal() {
  return (
    <section className="pt-10 pb-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-widest text-[#0A7CFF] uppercase bg-blue-50/50 rounded-full border border-blue-100/50">
            The New Standard
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 tracking-tight leading-[1.1]">
            What is Assure PAT?
          </h2>
          <h3 className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
            Assure PAT is the first platform to <span className="relative inline-block px-1">digitize and centralize
              <motion.svg 
                className="absolute w-full h-2 bottom-0 left-0 text-[#0A7CFF]" 
                viewBox="0 0 100 10" 
                preserveAspectRatio="none"
              >
                <motion.path 
                  d="M0 5 Q 50 10 100 5" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  fill="none" 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                />
              </motion.svg>
            </span> payment acceptance testing.
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-normal">
            We replace the chaos of physical test cards, spreadsheets, and unsecured logs with a unified environment for instant virtual cards, structured approval workflows, and complete, real-time audit traceability.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-100 pt-12">
             <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">5×</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Faster testing cycles</div>
             </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">80%</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Less manual coordination</div>
             </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">Minutes</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">not days to reassign test cards</div>
             </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">Instant</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Approval workflows</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
