import { motion } from "framer-motion";
import { CreditCard, Server, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { GlassCard } from "./GlassCard";

export default function PaymentFlow() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Background Connection Lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[2px] bg-gray-200 relative">
            <motion.div 
                className="absolute top-0 left-0 h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                initial={{ width: "0%", left: "0%" }}
                animate={{ 
                    width: ["0%", "20%", "0%"],
                    left: ["0%", "40%", "100%"]
                }}
                transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                }}
            />
        </div>
      </div>

      {/* Nodes Container */}
      <div className="relative z-10 flex gap-4 md:gap-12 items-center">
        
        {/* Node 1: Terminal/POS */}
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
        >
            <GlassCard className="w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center border-blue-100">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-2">
                    <CreditCard size={24} />
                </div>
                <span className="text-xs font-semibold text-gray-600">POS</span>
                <motion.div 
                    className="absolute -top-2 -right-2 bg-green-500 w-3 h-3 rounded-full border-2 border-white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                />
            </GlassCard>
        </motion.div>

        {/* Animated Arrow 1 */}
        <div className="text-gray-300 hidden md:block">
            <ArrowRight size={24} />
        </div>

        {/* Node 2: Ayris Cloud */}
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
        >
            <GlassCard className="w-28 h-28 md:w-40 md:h-40 flex flex-col items-center justify-center border-blue-200 bg-blue-50/50 relative">
                <div className="absolute inset-0 bg-blue-500/5 blur-xl rounded-full animate-pulse" />
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#0A7CFF] mb-3 relative z-10">
                    <Server size={32} />
                </div>
                <span className="text-sm font-bold text-gray-800">Ayris Core</span>
                <div className="mt-1 flex gap-1">
                    {[1,2,3].map(i => (
                        <motion.div 
                            key={i}
                            className="w-1 h-1 bg-blue-400 rounded-full"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ delay: i * 0.2, repeat: Infinity, duration: 1.5 }}
                        />
                    ))}
                </div>
            </GlassCard>
        </motion.div>

        {/* Animated Arrow 2 */}
        <div className="text-gray-300 hidden md:block">
            <ArrowRight size={24} />
        </div>

        {/* Node 3: Bank/Network */}
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
        >
            <GlassCard className="w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center border-emerald-100">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-2">
                    <Building2 size={24} />
                </div>
                <span className="text-xs font-semibold text-gray-600">Bank</span>
                <motion.div 
                    className="mt-1 flex items-center gap-1 bg-emerald-100 px-2 py-0.5 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                >
                    <CheckCircle2 size={10} className="text-emerald-600" />
                    <span className="text-[10px] font-medium text-emerald-700">Settled</span>
                </motion.div>
            </GlassCard>
        </motion.div>

      </div>
      
      {/* Floating Status Code */}
      <motion.div 
        className="absolute bottom-10 right-10 bg-gray-900 text-white p-3 rounded-lg text-xs font-mono shadow-2xl opacity-80 backdrop-blur-md border border-gray-700"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-red-400"/>
            <span className="w-2 h-2 rounded-full bg-yellow-400"/>
            <span className="w-2 h-2 rounded-full bg-green-400"/>
        </div>
        <p className="text-green-400">POST /v1/charges</p>
        <p className="text-white mt-1">{`{ status: "succeeded" }`}</p>
        <p className="text-gray-400 mt-1">Latency: 42ms</p>
      </motion.div>

    </div>
  );
}
