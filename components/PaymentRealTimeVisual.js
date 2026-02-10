"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Monitor, Wifi, CreditCard, Activity } from "lucide-react";

export default function PaymentRealTimeVisual() {
  const [activeCard, setActiveCard] = useState("visa"); // 'visa' | 'discover'
  const [logs, setLogs] = useState([
    { id: 1, type: "Visa", amount: "$120.50", status: "Approved", time: "10:42:01" },
    { id: 2, type: "Discover", amount: "$45.00", status: "Approved", time: "10:41:55" },
    { id: 3, type: "Visa", amount: "$89.99", status: "Verified", time: "10:41:40" },
  ]);

  // Toggle state every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev === "visa" ? "discover" : "visa"));
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  // When card changes, add a new log entry
  useEffect(() => {
    const newLog = {
      id: Date.now(),
      type: activeCard === "visa" ? "Visa" : "Discover",
      amount: activeCard === "visa" ? "$250.00" : "$99.95",
      status: "Processing",
      time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" })
    };

    setLogs(prev => [newLog, ...prev.slice(0, 4)]); // Keep last 5
  }, [activeCard]);

  const isVisa = activeCard === "visa";

  return (
    <div className="w-full h-auto py-12 relative flex items-center justify-center font-sans select-none origin-center overflow-hidden">

      {/* Background Connection Pulse (Optional / Subtle) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
         <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-400/30 rounded-full blur-[80px]" />
      </div>

      <div className="relative w-[680px] h-[450px] flex items-end select-none perspective-[2000px] max-w-full">

        {/* --- PC MONITOR (Studio Display Style) --- */}
        <div className="absolute right-0 bottom-12 z-10 flex flex-col items-center group">
            
            {/* Monitor Head */}
            <div className="relative w-[540px] h-[360px] bg-[#1a1a1a] rounded-[24px] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.4)] ring-1 ring-white/10 p-[12px] transition-transform duration-700 ease-out group-hover:rotate-x-1">
                {/* Glossy Edge Highlight */}
                <div className="absolute inset-0 rounded-[24px] ring-1 ring-white/5 pointer-events-none z-50"></div>
                
                {/* Screen Content Area */}
                <div className="w-full h-full bg-white rounded-[16px] overflow-hidden relative shadow-inner">
                    
                    {/* Browser Header */}
                    <div className="h-8 bg-[#f5f5f7] border-b border-gray-200 flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm"/>
                            <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm"/>
                            <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm"/>
                        </div>
                        <div className="ml-4 flex-1 h-6 bg-white rounded-[4px] border border-gray-200 shadow-sm text-[10px] text-gray-500 flex items-center px-3 font-medium tracking-wide">
                            <span className="opacity-50 mr-1">🔒</span> dashboard.ayris.com/live-logs
                        </div>
                    </div>

                    {/* Dashboard Body */}
                    <div className="flex-1 h-[calc(100%-2rem)] p-5 flex gap-5 bg-gradient-to-b from-white to-gray-50">
                        {/* Graphs Column */}
                        <div className="w-1/3 flex flex-col gap-3">
                            <div className="bg-white rounded-xl p-3 border border-gray-100 flex-1 flex flex-col shadow-sm">
                                <div className="text-[9px] font-bold text-gray-400 mb-2 tracking-wider uppercase">Volume</div>
                                <div className="flex-1 flex items-end justify-between gap-1.5 px-1">
                                    {[35, 65, 45, 85, 55].map((h, i) => (
                                        <motion.div 
                                            key={i} 
                                            className="w-full bg-blue-500 rounded-t-[2px]"
                                            animate={{ height: `${h + (Math.random() * 15)}%` }}
                                            transition={{ duration: 0.6 }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-1">
                                    <Activity className="w-4 h-4 text-emerald-500" />
                                    <span className="text-[12px] font-bold text-gray-800">99.99%</span>
                                </div>
                                <div className="text-[9px] text-gray-400 font-medium">Uptime Guarantee</div>
                            </div>
                        </div>

                        {/* Logs Column */}
                        <div className="flex-1 flex flex-col">
                            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 flex justify-between items-center px-1">
                                <span>Real-Time Logs</span>
                                <div className="flex items-center gap-1.5">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                </div>
                            </div>
                            
                            <div className="flex-1 overflow-hidden relative space-y-2.5 mask-gradient-bottom">
                                <AnimatePresence initial={false} mode="popLayout">
                                    {logs.map((log) => (
                                        <motion.div
                                            key={log.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            className="flex items-center justify-between p-2.5 rounded-lg border border-gray-100 bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:border-blue-200 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-1.5 h-6 rounded-full ${log.type === "Visa" ? "bg-[#1A1F71]" : "bg-[#F97316]"}`} />
                                                <div>
                                                    <div className="font-bold text-gray-900 text-[11px] leading-tight">{log.type} Payment</div>
                                                    <div className="text-gray-400 text-[9px] font-mono mt-0.5">{log.time} • ID: {log.id.toString().slice(-4)}</div> 
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-mono font-bold text-gray-900 text-[11px]">{log.amount}</div>
                                                <div className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full inline-block mt-0.5">Success</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Reflection Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                </div>
            </div>

            {/* Realistic Stand */}
            <div className="relative -mt-1 z-0 flex flex-col items-center">
                {/* Neck */}
                <div className="w-32 h-16 bg-gradient-to-b from-[#1a1a1a] to-[#262626] [clip-path:polygon(15%_0%,85%_0%,100%_100%,0%_100%)] shadow-2xl"></div>
                {/* Base */}
                <div className="w-48 h-2 bg-[#2d2d2d] rounded-md shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5)] ring-1 ring-white/5 -mt-0.5"></div>
            </div>
        </div>

        {/* --- MOBILE PHONE (Realistic iPhone Style) --- */}
        <div className="absolute left-6 bottom-12 z-30 w-[170px] h-[340px] bg-[#000000] rounded-[36px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6),inset_0_0_0_2px_#333] pl-[4px] pr-[4px] pt-[4px] pb-[4px] flex flex-col shrink-0">
             
             {/* Side Buttons */}
             <div className="absolute top-24 -left-[2px] w-[2px] h-6 bg-[#333] rounded-l-md"></div>
             <div className="absolute top-36 -left-[2px] w-[2px] h-10 bg-[#333] rounded-l-md"></div>
             <div className="absolute top-28 -right-[2px] w-[2px] h-12 bg-[#333] rounded-r-md"></div>

             {/* Screen Area */}
             <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative border border-black/10">
                 
                 {/* Dynamic Island */}
                 <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[54px] h-[16px] bg-black rounded-full z-40 flex items-center justify-center gap-1.5 px-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/50 blur-[0.5px]"></div>
                 </div>

                 {/* Status Bar */}
                 <div className="w-full h-10 px-4 flex justify-between items-end pb-1 absolute top-0 z-30 text-[9px] font-bold text-black/80">
                      <span>9:41</span>
                      <div className="flex gap-1.5 items-center">
                          <Wifi className="w-3 h-3" strokeWidth={3} />
                          <div className="w-4 h-2 rounded-[2px] border border-current relative">
                              <div className="absolute inset-0.5 bg-current rounded-[1px]"></div>
                          </div>
                      </div>
                 </div>

                 {/* App Header */}
                 <div className="pt-12 px-4 pb-4 bg-gray-50/80 backdrop-blur-md border-b border-gray-200/50">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-[9px] font-bold text-blue-600 uppercase tracking-wider">Assure PAT</span>
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-[9px]">👤</span>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">My Cards</h2>
                 </div>

                 {/* App Content */}
                 <div className="p-4 pt-2 space-y-4">
                     {/* Visa Card */}
                    <motion.div 
                        animate={{ y: isVisa ? 0 : 25, scale: isVisa ? 1 : 0.94, opacity: isVisa ? 1 : 0.5, zIndex: isVisa ? 20 : 10 }}
                        className="w-full aspect-[1.586] rounded-xl bg-gradient-to-br from-[#1A1F71] to-[#0D1250] p-3 text-white shadow-xl shadow-blue-900/20 relative overflow-hidden group"
                    >
                        {/* Card Gloss */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
                        
                        <div className="flex justify-between items-start relative z-10">
                            <span className="font-bold italic text-sm tracking-wide">Visa</span>
                            <Wifi className="w-3.5 h-3.5 opacity-70 rotate-90" />
                        </div>
                        <div className="mt-6 flex justify-between items-end relative z-10">
                             <div className="font-mono text-[10px] tracking-widest opacity-90">•••• 4242</div>
                             <div className="text-[7px] opacity-70 font-semibold uppercase">Business</div>
                        </div>
                        {isVisa && <motion.div layoutId="active-glow" className="absolute -inset-1 bg-blue-500/20 blur-md -z-10" />}
                    </motion.div>

                    {/* Discover Card */}
                    <motion.div 
                        animate={{ y: isVisa ? -100 : 0, scale: isVisa ? 0.94 : 1, opacity: isVisa ? 0.5 : 1, zIndex: isVisa ? 10 : 20 }}
                        className="w-full aspect-[1.586] rounded-xl bg-gradient-to-br from-[#F97316] to-[#C2410C] p-3 text-white shadow-xl shadow-orange-900/20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>

                        <div className="flex justify-between items-start relative z-10">
                            <span className="font-bold italic text-sm tracking-wide">Discover</span>
                             <Wifi className="w-3.5 h-3.5 opacity-70 rotate-90" />
                        </div>
                        <div className="mt-6 flex justify-between items-end relative z-10">
                             <div className="font-mono text-[10px] tracking-widest opacity-90">•••• 9876</div>
                             <div className="text-[7px] opacity-70 font-semibold uppercase">Corporate</div>
                        </div>
                         {!isVisa && <motion.div layoutId="active-glow" className="absolute -inset-1 bg-orange-500/20 blur-md -z-10" />}
                    </motion.div>
                 </div>

                 {/* Testing Button */}
                 <div className="absolute bottom-6 left-4 right-4 h-10 w-auto">
                     <motion.div
                        key={activeCard}
                        initial={{ scale: 0.95, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={`w-full h-full rounded-full flex items-center justify-center shadow-lg font-semibold text-[11px] text-white tracking-wide transition-colors duration-300 ${isVisa ? 'bg-[#1A1F71]' : 'bg-[#F97316]'}`}
                     >
                         Testing {isVisa ? 'Visa' : 'Discover'}...
                         <div className="ml-2 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                     </motion.div>
                 </div>
                 
                 {/* Home Indicator */}
                 <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-black/20 rounded-full"></div>
             </div>
        </div>

      </div>
    </div>
  );
}
