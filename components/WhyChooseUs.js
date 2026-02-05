"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  return (
    <section className="pt-24 pb-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-widest text-[#0A7CFF] uppercase bg-blue-50/50 rounded-full border border-blue-100/50">
            Core Advantages
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-10 tracking-tight leading-[1.1]">
            Why Leading Enterprise Teams Choose Ayris Global
          </h2>
          <h3 className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
            Ayris Global helps organizations <span className="relative inline-block px-1">modernize, secure, and streamline
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
            </span> their payment infrastructure with a unified digital-first environment.
          </h3>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed font-light">
             By replacing manual testing steps, inconsistent acceptance processes, physical logistics, and scattered debugging tools, Ayris Global delivers faster certification cycles, reliable transaction outcomes, real-time debugging visibility, and complete control over the payment lifecycle.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center border-t border-gray-100 pt-16">
             {/* Item 1 */}
             <div>
                <div className="text-2xl font-bold text-gray-900 mb-3">Security First Approach</div>
                <div className="text-sm font-medium text-gray-500 leading-relaxed">
                  Built with deterministic controls, safe data handling, and governed digital processes.
                </div>
             </div>
             {/* Item 2 */}
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-3">&lt; 5s</div>
                <div className="text-xs font-bold uppercase tracking-wide text-blue-600 mb-2">Digital Provisioning Time</div>
                <div className="text-sm font-medium text-gray-500 leading-relaxed">
                  Instant creation and activation of cards, test assets, and simulation environments.
                </div>
             </div>
             {/* Item 3 */}
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-3">Cloud Based Solutions</div>
                <div className="text-sm font-medium text-gray-500 leading-relaxed">
                  Always-available, scalable infrastructure with continuous history retention.
                </div>
             </div>
             {/* Item 4 */}
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-3">4x</div>
                <div className="text-xs font-bold uppercase tracking-wide text-blue-600 mb-2">Faster Issue Resolution</div>
                <div className="text-sm font-medium text-gray-500 leading-relaxed">
                  Accelerated troubleshooting with structured logs and unified debugging workflows.
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
