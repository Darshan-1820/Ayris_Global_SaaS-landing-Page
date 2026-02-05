"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Settings,
  CreditCard,
  FileText,
  Wifi,
  CheckCircle,
  Layers,
  Cpu,
} from "lucide-react";

export default function POSHeroVisual() {
  const [activeBlock, setActiveBlock] = useState(0);
  const [isAssembled, setIsAssembled] = useState(false);

  // Cycle through blocks for highlighting
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBlock((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Trigger assembly animation after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsAssembled(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const blocks = [
    {
      id: 0,
      icon: Settings,
      label: "POS Config",
      color: "from-blue-500 to-blue-600",
      glow: "blue",
      position: { x: -140, y: -80 },
      assembledPosition: { x: -100, y: -60 },
    },
    {
      id: 1,
      icon: CreditCard,
      label: "Brand Select",
      color: "from-orange-500 to-orange-600",
      glow: "orange",
      position: { x: 140, y: -80 },
      assembledPosition: { x: 100, y: -60 },
    },
    {
      id: 2,
      icon: FileText,
      label: "Transaction Logs",
      color: "from-emerald-500 to-emerald-600",
      glow: "emerald",
      position: { x: -140, y: 100 },
      assembledPosition: { x: -100, y: 80 },
    },
    {
      id: 3,
      icon: Layers,
      label: "Kernel Config",
      color: "from-purple-500 to-purple-600",
      glow: "purple",
      position: { x: 140, y: 100 },
      assembledPosition: { x: 100, y: 80 },
    },
  ];

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center select-none">
      {/* Soft Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" className="text-gray-300">
          <defs>
            <pattern
              id="pos-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pos-grid)" />
        </svg>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {blocks.map((block, idx) => {
          const targetPos = isAssembled
            ? block.assembledPosition
            : block.position;
          return (
            <motion.line
              key={`line-${idx}`}
              x1="50%"
              y1="50%"
              x2={`calc(50% + ${targetPos.x}px)`}
              y2={`calc(50% + ${targetPos.y}px)`}
              stroke={activeBlock === idx ? "#0A7CFF" : "#E5E7EB"}
              strokeWidth={activeBlock === idx ? 2 : 1}
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: isAssembled ? 1 : 0,
                opacity: isAssembled ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            />
          );
        })}
      </svg>

      {/* Central Smartphone */}
      <motion.div
        className="absolute z-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative w-[160px] h-[320px] bg-black rounded-[32px] p-[3px] shadow-2xl shadow-black/30">
          {/* Phone Frame Glow */}
          <motion.div
            className="absolute -inset-1 rounded-[36px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 blur-md"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Screen */}
          <div className="relative w-full h-full bg-white rounded-[29px] overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[50px] h-[14px] bg-black rounded-full z-40" />

            {/* Status Bar */}
            <div className="absolute top-0 w-full h-8 px-4 flex justify-between items-end pb-1 text-[8px] font-bold text-black/70 z-30">
              <span>9:41</span>
              <div className="flex gap-1 items-center">
                <Wifi className="w-2.5 h-2.5" strokeWidth={3} />
                <div className="w-3.5 h-1.5 rounded-[2px] border border-current relative">
                  <div className="absolute inset-0.5 bg-current rounded-[1px]" />
                </div>
              </div>
            </div>

            {/* App Header */}
            <div className="pt-10 px-4 pb-3 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Smartphone className="w-3 h-3 text-white" />
                </div>
                <span className="text-[9px] font-bold text-gray-900 uppercase tracking-wider">
                  Assure POS
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                Terminal Sim
              </h3>
            </div>

            {/* App Content */}
            <div className="p-3 space-y-2">
              {/* Config Status */}
              <motion.div
                className="p-2.5 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100/50 border border-blue-200/50"
                animate={{
                  borderColor:
                    activeBlock === 0
                      ? "rgba(59, 130, 246, 0.5)"
                      : "rgba(191, 219, 254, 0.5)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-blue-500 flex items-center justify-center">
                    <Cpu className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[9px] font-bold text-gray-900">
                      Kernel Active
                    </div>
                    <div className="text-[8px] text-gray-500">
                      Visa • Discover • JCB
                    </div>
                  </div>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
              </motion.div>

              {/* Current Transaction */}
              <motion.div
                className="p-2.5 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200/50"
                animate={{
                  borderColor:
                    activeBlock === 1
                      ? "rgba(249, 115, 22, 0.5)"
                      : "rgba(254, 215, 170, 0.5)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-orange-500 flex items-center justify-center">
                    <CreditCard className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[9px] font-bold text-gray-900">
                      Testing Card
                    </div>
                    <div className="text-[8px] text-gray-500">
                      •••• 4242 • Visa
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Log Entry */}
              <motion.div
                className="p-2.5 rounded-lg bg-gradient-to-r from-emerald-50 to-emerald-100/50 border border-emerald-200/50"
                animate={{
                  borderColor:
                    activeBlock === 2
                      ? "rgba(16, 185, 129, 0.5)"
                      : "rgba(167, 243, 208, 0.5)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-emerald-500 flex items-center justify-center">
                    <FileText className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[9px] font-bold text-gray-900">
                      Transaction Log
                    </div>
                    <div className="text-[8px] text-gray-500">
                      12 entries captured
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Action */}
            <div className="absolute bottom-6 left-3 right-3">
              <motion.div
                className="w-full py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-[10px] font-bold text-center shadow-lg shadow-blue-500/20"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Simulate Transaction
              </motion.div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-14 h-1 bg-black/20 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Floating Modular Blocks */}
      {blocks.map((block, idx) => {
        const Icon = block.icon;
        const targetPos = isAssembled
          ? block.assembledPosition
          : block.position;
        const isActive = activeBlock === idx;

        return (
          <motion.div
            key={block.id}
            className="absolute z-10"
            initial={{
              x: block.position.x * 2,
              y: block.position.y * 2,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: targetPos.x,
              y: targetPos.y,
              opacity: 1,
              scale: isActive ? 1.05 : 1,
            }}
            transition={{
              duration: 0.8,
              delay: idx * 0.15,
              ease: "easeOut",
              scale: { duration: 0.3 },
            }}
          >
            {/* Block Glow */}
            {isActive && (
              <motion.div
                className={`absolute -inset-2 rounded-2xl blur-lg bg-gradient-to-r ${block.color} opacity-30`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
              />
            )}

            {/* Block Container */}
            <div
              className={`relative w-[100px] h-[80px] rounded-xl bg-white border-2 transition-all duration-300 shadow-lg ${
                isActive
                  ? "border-blue-400 shadow-xl"
                  : "border-gray-200 shadow-md"
              }`}
            >
              {/* Isometric Top Edge Effect */}
              <div className="absolute -top-[2px] left-2 right-2 h-[3px] bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-t-full" />

              {/* Inner Content */}
              <div className="p-3 h-full flex flex-col items-center justify-center">
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${block.color} flex items-center justify-center mb-2 shadow-sm`}
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-[9px] font-bold text-gray-700 text-center leading-tight">
                  {block.label}
                </span>
              </div>

              {/* Connection Dot */}
              <motion.div
                className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${block.color}`}
                style={{
                  left: targetPos.x > 0 ? "-4px" : "auto",
                  right: targetPos.x < 0 ? "-4px" : "auto",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                animate={{
                  scale: isActive ? [1, 1.5, 1] : 1,
                }}
                transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
              />
            </div>
          </motion.div>
        );
      })}

      {/* Ambient Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/40"
          initial={{
            x: (Math.random() - 0.5) * 300,
            y: (Math.random() - 0.5) * 300,
            opacity: 0,
          }}
          animate={{
            x: (Math.random() - 0.5) * 300,
            y: (Math.random() - 0.5) * 300,
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
