"use client";
import React, { useRef, useState } from 'react';
import { Check, ArrowRight, ShieldCheck, CreditCard, LayoutTemplate, Server, BookOpen } from "lucide-react";
import Link from "next/link";
import TypingText from "@/components/TypingText";

const services = [
    {
        title: "L3 Certification Planning",
        desc: "Expert navigation through network certification requirements and test case optimization.",
        icon: BookOpen
    },
    {
        title: "EMV Kernel Config",
        desc: "Precise configuration and debugging for L2 kernels across all major payment schemes.",
        icon: CreditCard
    },
    {
        title: "PCI CPoC & SPoC Strategy",
        desc: "Strategic advisory for softPOS compliance and security architecture.",
        icon: ShieldCheck
    },
    {
        title: "Digital Wallet Architecture",
        desc: "Design scalable wallet infrastructure with tokenization and secure element integration.",
        icon: LayoutTemplate
    },
    {
        title: "Gateway Integration",
        desc: "Seamless integration patterns for ISO20022 and legacy message formats.",
        icon: Server
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

export default function Consulting() {
  return (
    <section id="consulting" className="py-24 bg-black text-white relative">
        <div className="container mx-auto px-6 lg:px-12">
            
            {/* Header Section */}
            <div className="text-center mb-16 relative z-10">
                <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">
                    Ayris Global Consulting
                </span>
                <h2 className="text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-6 pb-2 leading-tight">
                    Payment consulting and advisory
                </h2>
                <div className="text-gray-300 max-w-3xl mx-auto min-h-[3rem] flex items-center justify-center text-base sm:text-lg font-normal leading-relaxed">
                   <TypingText text="Beyond our platform, we offer deep expertise in certification planning, POS strategy, and payment modernization to help you navigate complex schemes." speed={30} delay={500} />
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative z-10">
                {services.map((service, idx) => (
                    <SpotlightCard key={idx} className="p-8 group">
                        <div className="w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center mb-6 border border-gray-700/50 group-hover:border-gray-500/50 transition-colors">
                            <service.icon className="w-6 h-6 text-gray-300" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
                    </SpotlightCard>
                ))}
                 
                 {/* CTA Card as the last item to fill grid or separate? 
                     Actually, having a CTA at the bottom is better.
                  */}
            </div>

            {/* Bottom CTA */}
            <div className="text-center relative z-10">
                 <Link 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#F97316] hover:bg-[#EA580C] rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5"
                >
                  Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </div>
            
             {/* Background Glow similar to Features */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-blue-500/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

        </div>
    </section>
  );
}
