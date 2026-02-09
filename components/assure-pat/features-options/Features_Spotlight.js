"use client";
import React, { useRef, useState } from 'react';
import { Zap, CheckCircle2, FileText, Workflow, Shield, UserCheck, BarChart3 } from 'lucide-react';
import TypingText from "@/components/TypingText";

const features = [
  { 
    title: "Automated Acceptance Testing", 
    desc: "The platform includes automated acceptance testing flows to speed up certification cycles.",
    icon: Zap
  },
  { 
    title: "Virtual Test Card Lifecycle", 
    desc: "A full virtual test card lifecycle with strict controls for issuance and provisioning.",
    icon: CheckCircle2
  },
  { 
    title: "Real-Time Logging", 
    desc: "Capture deep-level APDU and transaction logs in real-time for complete traceability.",
    icon: FileText
  },
  { 
    title: "Detailed Reporting", 
    desc: "Generate detailed reporting for certification readiness and compliance audits.",
    icon: BarChart3
  },
  { 
    title: "Governance", 
    desc: "Built-in budget and project governance tools to keep testing overhead in check.",
    icon: Shield
  },
  { 
    title: "Role-Based Access", 
    desc: "Granular access controls for testers and managers to ensure secure operations.",
    icon: UserCheck
  }
];

const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-xl border border-gray-800 bg-gray-900 overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

export default function Features_Spotlight() {
  return (
    <section id="features" className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-4">Platform Features</h2>
                <div className="text-gray-300 max-w-2xl mx-auto min-h-[1.5rem] flex items-center justify-center">
                   <TypingText text="Everything you need to modernize your payment testing infrastructure." speed={30} delay={500} />
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                    <SpotlightCard key={idx} className="p-8 group">
                        <div className="w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center mb-6 border border-gray-700/50 group-hover:border-gray-500/50 transition-colors">
                            <feature.icon className="w-6 h-6 text-gray-300" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
                    </SpotlightCard>
                ))}
            </div>
        </div>
    </section>
  );
}
