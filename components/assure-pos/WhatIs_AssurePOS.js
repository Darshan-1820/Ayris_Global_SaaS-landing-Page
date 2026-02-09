import React from 'react';
import { motion } from 'framer-motion';

export default function WhatIs_AssurePOS() {
  return (
    <section className="pt-10 pb-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-widest text-[#0A7CFF] uppercase bg-blue-50/50 rounded-full border border-blue-100/50">
            Virtual Terminal Testing
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 tracking-tight leading-[1.1]">
            What is Assure POS?
          </h2>
          <h3 className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
            Assure POS is a <span className="relative inline-block px-1">mobile terminal simulator
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
            </span> that replicates real POS behavior directly on a smartphone.
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-normal">
            Traditional POS testing requires expensive hardware, proprietary kernels, and complex maintenance. We remove these bottlenecks by offering a configurable, brand-aligned simulation environment that produces complete transaction logs instantly—without the hardware headache.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-100 pt-12">
             <div>
                <div className="text-lg font-bold text-gray-900 mb-1">Zero</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Hardware Cost</div>
             </div>
              <div>
                <div className="text-lg font-bold text-gray-900 mb-1">All Brands</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Configurable Kernels</div>
             </div>
              <div>
                <div className="text-lg font-bold text-gray-900 mb-1">Instant</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Transaction Logs</div>
             </div>
              <div>
                <div className="text-lg font-bold text-gray-900 mb-1">Anywhere</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Remote Debugging</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
