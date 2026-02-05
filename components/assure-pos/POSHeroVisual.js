"use client";

import React, { useState, useEffect, useId } from "react";
import { motion } from "framer-motion";
import { Settings, Wifi, Signal } from "lucide-react";

export default function POSHeroVisual() {
  const [isAssembled, setIsAssembled] = useState(false);
  const [activeBlock, setActiveBlock] = useState(0);
  const [logLines, setLogLines] = useState([
    { time: "16:56:57", level: "INFO", msg: "Reading SFI 01, Records 1-1" },
    { time: "16:56:57", level: "DEBUG", msg: "APDU CMD: 00 B2 01 0C 00" },
    { time: "16:56:57", level: "DEBUG", msg: "CMD DESC: READ RECORD" },
    { time: "16:56:58", level: "DEBUG", msg: "TIMING: APDU transceive took 167 ms" },
    { time: "16:56:58", level: "DEBUG", msg: "RSP DESC: Success" },
    { time: "16:56:58", level: "INFO", msg: "Record 1.1" },
  ]);
  const gridId = useId();

  // Cycle through blocks for highlighting
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBlock((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Trigger assembly animation after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsAssembled(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Simulate new log entries
  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = {
        time: new Date().toLocaleTimeString("en-US", { hour12: false }),
        level: Math.random() > 0.5 ? "DEBUG" : "INFO",
        msg: Math.random() > 0.5 ? "APDU RSP: 70 81 B9 5F 20 0D..." : "Processing transaction data...",
      };
      setLogLines((prev) => [...prev.slice(-5), newLog]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    {
      id: 0,
      icon: Settings,
      label: "POS Config",
      color: "from-blue-500 to-blue-600",
      position: { x: -140, y: -100 },
      assembledPosition: { x: -110, y: -80 },
    },
    {
      id: 1,
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
          <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      label: "Brand Selection",
      color: "from-orange-500 to-orange-600",
      position: { x: 140, y: -100 },
      assembledPosition: { x: 110, y: -80 },
    },
    {
      id: 2,
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" />
          <path d="M14 2v6h6M8 13h8M8 17h8" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      label: "Transaction Logs",
      color: "from-emerald-500 to-emerald-600",
      position: { x: -140, y: 120 },
      assembledPosition: { x: -110, y: 100 },
    },
    {
      id: 3,
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M9 9h6M9 12h6M9 15h4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      label: "APDU Logs",
      color: "from-purple-500 to-purple-600",
      position: { x: 140, y: 120 },
      assembledPosition: { x: 110, y: 100 },
    },
  ];

  return (
    <div className="relative w-full h-[520px] flex items-center justify-center select-none">
      {/* Soft Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="text-gray-400">
          <defs>
            <pattern
              id={gridId}
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
          <rect width="100%" height="100%" fill={`url(#${gridId})`} />
        </svg>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {blocks.map((block, idx) => {
          const targetPos = isAssembled ? block.assembledPosition : block.position;
          return (
            <motion.line
              key={`line-${idx}`}
              x1="50%"
              y1="50%"
              x2={`calc(50% + ${targetPos.x}px)`}
              y2={`calc(50% + ${targetPos.y}px)`}
              stroke={activeBlock === idx ? "#0A7CFF" : "#D1D5DB"}
              strokeWidth={activeBlock === idx ? 2 : 1}
              strokeDasharray="6 4"
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

      {/* Central Smartphone - Actual Assure POS UI */}
      <motion.div
        className="absolute z-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative w-[180px] h-[380px] bg-[#1a1a1a] rounded-[28px] p-[3px] shadow-2xl shadow-black/40">
          {/* Phone Frame Glow */}
          <motion.div
            className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 blur-md"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Screen */}
          <div className="relative w-full h-full bg-[#F5F5F5] rounded-[25px] overflow-hidden">
            {/* Status Bar - Android Style */}
            <div className="h-6 bg-[#E8E8E8] flex items-center justify-between px-3 text-[9px] font-medium text-gray-700">
              <span>4:57 PM</span>
              <div className="flex items-center gap-1">
                <span className="text-[8px] font-bold">NFC</span>
                <Signal className="w-3 h-3" />
                <span className="text-[8px]">25.2</span>
                <Wifi className="w-3 h-3" />
                <div className="flex items-center gap-0.5">
                  <div className="w-4 h-2 border border-gray-600 rounded-sm relative">
                    <div className="absolute inset-0.5 bg-gray-600 rounded-[1px]" style={{ width: "65%" }} />
                  </div>
                  <span className="text-[8px]">65</span>
                </div>
              </div>
            </div>

            {/* App Header */}
            <div className="bg-[#4A90A4] h-12 flex items-center justify-between px-4">
              <h1 className="text-white font-bold text-base tracking-wide">Assure POS</h1>
              <Settings className="w-5 h-5 text-white" />
            </div>

            {/* Main Content */}
            <div className="p-3 space-y-2.5">
              {/* Status Badge */}
              <motion.div
                className="bg-[#E8F5E9] border border-[#81C784] rounded-lg py-2 px-3 text-center"
                animate={{
                  borderColor: activeBlock === 0 ? "#4CAF50" : "#81C784",
                  boxShadow: activeBlock === 0 ? "0 0 8px rgba(76, 175, 80, 0.3)" : "none",
                }}
              >
                <span className="text-[#2E7D32] font-semibold text-xs">Ready for Transaction</span>
              </motion.div>

              {/* Amount Input */}
              <motion.div
                className="flex items-center gap-2"
                animate={{
                  scale: activeBlock === 1 ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-gray-800 font-semibold text-sm">Amount: $</span>
                <div className="flex-1 bg-white border border-gray-300 rounded-lg py-2 px-3 text-right">
                  <span className="text-gray-900 font-bold text-base">4.56</span>
                </div>
              </motion.div>

              {/* Start Transaction Button */}
              <motion.button
                className="w-full bg-[#37474F] hover:bg-[#455A64] text-white font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider shadow-md"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Start Transaction
              </motion.button>

              {/* Transaction Log Section */}
              <div className="mt-2">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-gray-800 font-semibold text-xs">Transaction Log</span>
                  <div className="flex gap-2">
                    <span className="text-[#1976D2] text-[9px] font-semibold cursor-pointer">SAVE LOG</span>
                    <span className="text-[#1976D2] text-[9px] font-semibold border border-[#1976D2] px-2 py-0.5 rounded cursor-pointer">CLEAR</span>
                  </div>
                </div>

                {/* Log Container */}
                <motion.div
                  className="bg-white border border-gray-200 rounded-lg p-2 h-[120px] overflow-hidden"
                  animate={{
                    borderColor: activeBlock === 2 || activeBlock === 3 ? "#0A7CFF" : "#E5E7EB",
                    boxShadow: activeBlock === 2 || activeBlock === 3 ? "0 0 8px rgba(10, 124, 255, 0.2)" : "none",
                  }}
                >
                  <div className="space-y-0.5 font-mono text-[6px] leading-tight text-gray-700 overflow-hidden">
                    {logLines.map((log, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex"
                      >
                        <span className="text-gray-500">[{log.time}]</span>
                        <span className={`ml-1 ${log.level === "DEBUG" ? "text-blue-600" : "text-green-600"}`}>
                          {log.level}:
                        </span>
                        <span className="ml-1 text-gray-800 truncate">{log.msg}</span>
                      </motion.div>
                    ))}
                    {/* APDU hex dump preview */}
                    <div className="text-[5px] text-red-600 mt-1 leading-relaxed">
                      0D 54 45 53 54 20 43 61 72 64 20 35 38 38<br />
                      46 81 90 56 96 60 D0 94 22 29 84 59 76 AC
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-black/20 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Floating Modular Blocks */}
      {blocks.map((block, idx) => {
        const Icon = block.icon;
        const targetPos = isAssembled ? block.assembledPosition : block.position;
        const isActive = activeBlock === idx;

        return (
          <motion.div
            key={block.id}
            className="absolute z-10"
            initial={{
              x: block.position.x * 1.5,
              y: block.position.y * 1.5,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: targetPos.x,
              y: targetPos.y,
              opacity: 1,
              scale: isActive ? 1.08 : 1,
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
                className={`absolute -inset-2 rounded-2xl blur-lg bg-gradient-to-r ${block.color} opacity-40`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
              />
            )}

            {/* Block Container - Isometric Style */}
            <div
              className={`relative w-[90px] h-[72px] rounded-xl bg-white border-2 transition-all duration-300 shadow-lg ${
                isActive ? "border-blue-400 shadow-xl shadow-blue-500/20" : "border-gray-200 shadow-md"
              }`}
            >
              {/* Subtle top edge for depth */}
              <div className="absolute -top-[1px] left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full" />

              {/* Inner Content */}
              <div className="p-2.5 h-full flex flex-col items-center justify-center">
                <div
                  className={`w-7 h-7 rounded-lg bg-gradient-to-br ${block.color} flex items-center justify-center mb-1.5 shadow-sm`}
                >
                  {typeof Icon === "function" ? <Icon /> : <Icon className="w-4 h-4 text-white" />}
                </div>
                <span className="text-[8px] font-bold text-gray-700 text-center leading-tight">
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
                  scale: isActive ? [1, 1.4, 1] : 1,
                }}
                transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
              />
            </div>
          </motion.div>
        );
      })}

      {/* Ambient Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-blue-400/50"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
