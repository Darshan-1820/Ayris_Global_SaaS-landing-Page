"use client";
import React, { useRef, useState, useEffect } from 'react';
import TypingText from "@/components/TypingText";

const stats = [
  { 
    value: "50–80%", 
    label: "Reduction", 
    desc: "in physical test card issuance costs",
    color: "text-white"
  },
  { 
    value: "2–3 FTE", 
    label: "Eliminated", 
    desc: "worth of manual coordination and tracking",
    color: "text-white"
  },
  { 
    value: "100%", 
    label: "Audit-Ready", 
    desc: "logs for every test run",
    color: "text-white"
  },
  { 
    value: "$300K–$500K", 
    label: "Annual Impact", 
    desc: "with a payback period in under a year",
    color: "text-white"
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

export default function ROI_Spotlight() {
  return (
    <section id="roi" className="py-24 bg-black text-white border-t border-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-6">Cost Reduction & ROI</h2>
                <div className="text-lg text-gray-400 leading-relaxed min-h-[4rem]">
                   <TypingText 
                     text="Organizations typically see a 50–80% reduction in physical test card issuance costs, eliminate 2–3 FTE worth of manual coordination and tracking, gain 100% audit-ready logs for every test run, and achieve an annual financial impact often reaching $300K–$500K with a payback period in under a year."
                     speed={15}
                     delay={200}
                   />
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <SpotlightCard key={idx} className="p-8 text-center group">
                        <div className={`text-3xl lg:text-4xl font-bold mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                            {stat.value}
                        </div>
                        <div className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                            {stat.label}
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {stat.desc}
                        </p>
                    </SpotlightCard>
                ))}
            </div>
        </div>
    </section>
  );
}
