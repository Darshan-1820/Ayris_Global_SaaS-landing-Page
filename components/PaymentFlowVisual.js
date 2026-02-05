"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PaymentFlowVisual() {
  const cardVariants = {
    hidden: { x: -50, y: 50, opacity: 0 },
    visible: { 
      x: 0, 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    animate: {
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 }
    }
  };

  return (
    <div className="w-full h-[400px] relative flex items-center justify-center">
      <svg width="600" height="300" viewBox="0 0 600 300" className="w-full h-full max-w-[800px]">
        {/* Defs for gradients/filters */}
        <defs>
           <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#3B82F6" />
             <stop offset="100%" stopColor="#1E40AF" />
           </linearGradient>
           <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
             <feGaussianBlur stdDeviation="5" result="blur" />
             <feComposite in="SourceGraphic" in2="blur" operator="over" />
           </filter>
        </defs>

        {/* 1. Virtual Card */}
        <motion.g
          variants={cardVariants}
          initial="hidden"
          animate={["visible", "animate"]}
        >
          {/* Card Shape (Isometric-ish) */}
          <path d="M100 150 L200 100 L200 220 L100 270 Z" fill="url(#cardGradient)" opacity="0.9" />
          <path d="M200 100 L300 150 L300 270 L200 220 Z" fill="#1D4ED8" /> {/* Side */}
          <path d="M100 150 L200 100 L300 150 L200 200 Z" fill="#60A5FA" opacity="0.4" /> {/* Top */}
          
          {/* Chip */}
          <rect x="130" y="160" width="40" height="30" rx="4" fill="#FBBF24" transform="skewY(-26.5)" />
        </motion.g>

        {/* Flow Path 1: Card to Terminal */}
        <motion.path 
          d="M300 185 C 350 160, 320 160, 360 140"
          stroke="#94A3B8" 
          strokeWidth="2" 
          fill="none" 
          strokeDasharray="5 5"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        {/* 2. Terminal Block */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
           <path d="M360 140 L420 110 L480 140 L420 170 Z" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="2" />
           <path d="M360 140 L420 170 L420 230 L360 200 Z" fill="#CBD5E1" />
           <path d="M420 170 L480 140 L480 200 L420 230 Z" fill="#94A3B8" />
           {/* Screen Glow */}
           <path d="M390 135 L450 135 L420 160 L360 160 Z" fill="#22C55E" opacity="0.2" filter="url(#glow)" transform="translate(10, 10) scale(0.6)"/>
        </motion.g>

         {/* Flow Path 2: Terminal to Logs */}
         <motion.path 
          d="M480 170 C 520 160, 500 160, 520 140"
          stroke="#94A3B8" 
          strokeWidth="2" 
          fill="none" 
          strokeDasharray="5 5"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          custom={1} // Add delay
        />

        {/* 3. Data/Logs Panel */}
        <motion.g
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 1.2, duration: 0.5 }}
        >
            <rect x="520" y="80" width="70" height="100" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="2" />
            <line x1="530" y1="100" x2="580" y2="100" stroke="#CBD5E1" strokeWidth="2" />
            <line x1="530" y1="115" x2="570" y2="115" stroke="#CBD5E1" strokeWidth="2" />
            <line x1="530" y1="130" x2="560" y2="130" stroke="#CBD5E1" strokeWidth="2" />
            <circle cx="580" cy="170" r="10" fill="#22C55E" opacity="0.8" />
             <path d="M576 170 L579 173 L584 168" stroke="white" strokeWidth="2" fill="none" />

        </motion.g>

      </svg>
    </div>
  );
}
