import { motion } from "framer-motion";
import { 
  Database, FileText, Activity, ShieldAlert, 
  Smartphone, CreditCard, Search, BarChart3, 
  Layers, Lock
} from "lucide-react";
import { GlassCard } from "./GlassCard";

export default function SystemEcosystem() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      
      {/* Central Hub: Ayris Core */}
      <motion.div 
        className="relative z-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl shadow-blue-500/30 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"/>
            <div className="text-white text-center">
                <Layers size={40} className="mx-auto mb-2" />
                <span className="font-bold text-sm tracking-widest">AYRIS<br/>CORE</span>
            </div>
        </div>
      </motion.div>

      {/* Orbital Ring 1 */}
      <div className="absolute w-[300px] h-[300px] border border-blue-100/30 rounded-full animate-[spin_60s_linear_infinite]" />
      <div className="absolute w-[450px] h-[450px] border border-blue-100/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

      {/* Orbiting Modules (Satellites) */}
      {/* 1. Logs */}
      <ModuleNode angle={0} delay={0} icon={<Activity size={20} />} label="Real-time Logs" color="text-green-400" />
      {/* 2. Inventory */}
      <ModuleNode angle={72} delay={0.2} icon={<Database size={20} />} label="Card Inventory" color="text-blue-400" />
      {/* 3. Audit */}
      <ModuleNode angle={144} delay={0.4} icon={<Search size={20} />} label="Audit System" color="text-orange-400" />
      {/* 4. Reports */}
      <ModuleNode angle={216} delay={0.6} icon={<BarChart3 size={20} />} label="Reports" color="text-purple-400" />
      {/* 5. Issue Mgmt */}
      <ModuleNode angle={288} delay={0.8} icon={<ShieldAlert size={20} />} label="Issue Mgmt" color="text-red-400" />

      {/* Floating Inputs checkin in */}
      <InputTransaction delay={2} x={-180} y={100} label="Assure PAY" icon={<Smartphone size={16}/>} />
      <InputTransaction delay={3.5} x={180} y={-80} label="Assure POS" icon={<CreditCard size={16}/>} />

    </div>
  );
}

function ModuleNode({ angle, delay, icon, label, color }) {
    // Convert angle to position on a 220px radius circle
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * 160; 
    const y = Math.sin(rad) * 160;

    return (
        <motion.div
            className="absolute z-10"
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5 }}
        >
            <GlassCard className="w-24 h-24 flex flex-col items-center justify-center !rounded-full !p-0 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-white/40">
                <div className={`mb-1 ${color}`}>{icon}</div>
                <span className="text-[10px] font-semibold text-gray-600 text-center leading-tight">{label}</span>
                <div className="absolute -bottom-2 w-1 h-1 bg-blue-500 rounded-full animate-bounce"/>
            </GlassCard>
            {/* Connection Line to Center */}
            {/* Note: Drawing lines in absolute div is tricky without SVG, simplifying to just bubbles for now to ensure robustness */}
        </motion.div>
    )
}

function InputTransaction({ delay, x, y, label, icon }) {
    return (
        <motion.div
            className="absolute z-30"
            initial={{ opacity: 0, x: x * 2, y: y * 2 }}
            animate={{ opacity: 1, x, y }}
            transition={{ delay, duration: 1, type: "spring" }}
        >
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl flex items-center gap-2 text-xs font-bold border border-gray-700">
                {icon}
                <span>{label}</span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-1"/>
            </div>
        </motion.div>
    )
}
