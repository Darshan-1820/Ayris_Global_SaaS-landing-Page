"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PaymentControlVisual() {
  // Central Token Animation (Breathing/Floating)
  const tokenVariants = {
    animate: {
      scale: [1, 1.05, 1],
      y: [0, -10, 0],
      rotate: [0, 2, -2, 0],
      boxShadow: [
        "0px 0px 30px rgba(10, 124, 255, 0.4)",
        "0px 0px 50px rgba(10, 124, 255, 0.6)",
        "0px 0px 30px rgba(10, 124, 255, 0.4)",
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Rule Chips Data with Positions and Delays
  const rules = [
    { label: "Limit: $500", x: -120, y: -80, delay: 0 },
    { label: "MCC: SaaS", x: 120, y: -60, delay: 1.5 },
    { label: "Exclude: Gambling", x: -90, y: 90, delay: 0.8 },
    { label: "Time: 9-5 PM", x: 100, y: 70, delay: 2.2 },
  ];

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Background Ambient Glow */}
      <div className="absolute w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-[80px]" />

      {/* Central Token */}
      <motion.div
        variants={tokenVariants}
        animate="animate"
        className="relative z-20 w-40 h-24 bg-gradient-to-br from-[#0A7CFF] to-blue-600 rounded-xl flex items-center justify-center border border-white/20 backdrop-blur-sm shadow-2xl"
      >
        {/* Abstract Card Chip */}
        <div className="absolute left-4 top-4 w-8 h-6 bg-yellow-400/80 rounded-sm flex gap-0.5 p-0.5 overflow-hidden">
             <div className="w-1/2 h-full border-r border-yellow-600/30" />
             <div className="w-1/2 h-full border-l border-yellow-600/30" />
        </div>
        {/* Card Number Lines */}
        <div className="flex flex-col gap-2 mt-4 ml-8">
            <div className="h-1.5 w-16 bg-white/40 rounded-full" />
            <div className="h-1.5 w-10 bg-white/30 rounded-full" />
        </div>
      </motion.div>

      {/* Floating Rule Chips */}
      {rules.map((rule, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: rule.x,
            y: rule.y,
            transition: {
              delay: rule.delay,
              duration: 0.8,
              type: "spring",
            },
          }}
          className="absolute z-10"
        >
          {/* Bobbing Motion Wrapper */}
          <motion.div
             animate={{
                 y: [0, -8, 0],
             }}
             transition={{
                 duration: 3 + Math.random(),
                 repeat: Infinity,
                 ease: "easeInOut",
                 delay: Math.random() * 2,
             }}
             className="px-4 py-2 bg-white border border-gray-100 rounded-full shadow-lg shadow-gray-200/50 flex items-center gap-2"
          >
              <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-green-500' : 'bg-orange-500'}`} />
              <span className="text-xs font-bold text-gray-700 whitespace-nowrap tracking-tight">{rule.label}</span>
          </motion.div>
        </motion.div>
      ))}

      {/* Orbiting Lines (Subtle) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
          <motion.circle 
             cx="50%" cy="50%" r="160" 
             stroke="#94A3B8" strokeWidth="1" fill="none" strokeDasharray="8 8"
             animate={{ rotate: 360 }}
             transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
           <motion.circle 
             cx="50%" cy="50%" r="110" 
             stroke="#CBD5E1" strokeWidth="1" fill="none"
             animate={{ rotate: -360 }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
      </svg>
    </div>
  );
}
