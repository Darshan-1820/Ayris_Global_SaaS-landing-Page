"use client";

import Link from "next/link";
import { useRef, useCallback } from "react";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const highlights = [
  { icon: Shield, label: "PCI-DSS Compliant", color: "text-blue-600 bg-blue-50" },
  { icon: Zap, label: "< 5s Provisioning", color: "text-orange-600 bg-orange-50" },
  { icon: Globe, label: "Cloud-Native", color: "text-cyan-600 bg-cyan-50" },
];

// Option 4: "This is Ayris Global." → "Build payments that just work."
export default function HeroOption4() {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!glowRef.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(10,124,255,0.15), rgba(6,182,212,0.08) 40%, transparent 70%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!glowRef.current) return;
    glowRef.current.style.background = 'transparent';
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-white pt-28 sm:pt-32 pb-12 sm:pb-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-orange-50/40" />
        <div className="absolute inset-0 opacity-[0.25]" style={{
          backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />
        {/* Animated gradient blobs */}
        <div className="hero-blob hero-blob-1 absolute w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="hero-blob hero-blob-2 absolute w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] rounded-full blur-[70px] sm:blur-[100px]" />
        <div className="hero-blob hero-blob-3 absolute w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] rounded-full blur-[70px] sm:blur-[100px]" />
      </div>

      <style jsx>{`
        .hero-blob-1 {
          background: linear-gradient(135deg, #60a5fa, #0A7CFF, #06B6D4);
          top: 5%;
          right: -5%;
          opacity: 0.5;
          animation: blobDrift1 12s ease-in-out infinite;
        }
        .hero-blob-2 {
          background: linear-gradient(135deg, #fb923c, #F97316, #f59e0b);
          bottom: 8%;
          left: -3%;
          opacity: 0.4;
          animation: blobDrift2 15s ease-in-out infinite;
        }
        .hero-blob-3 {
          background: linear-gradient(135deg, #67e8f9, #06B6D4, #3b82f6);
          top: 40%;
          left: 30%;
          opacity: 0.32;
          animation: blobDrift3 18s ease-in-out infinite;
        }
        @keyframes blobDrift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-60px, 40px) scale(1.1); }
          66% { transform: translate(30px, -20px) scale(0.95); }
        }
        @keyframes blobDrift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -30px) scale(1.08); }
          66% { transform: translate(-40px, 20px) scale(0.92); }
        }
        @keyframes blobDrift3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, 30px) scale(1.12); }
          66% { transform: translate(-50px, -40px) scale(0.9); }
        }
      `}</style>

      {/* Mouse-following glow overlay */}
      <div
        ref={glowRef}
        className="absolute inset-0 z-[1] pointer-events-none transition-[background] duration-300 ease-out"
      />

      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Brand opener */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 tracking-tight text-gray-900"
          >
            This is <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F97316]">Ayris Global</span>.
          </motion.p>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.05]"
          >
            Build payments that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A7CFF] to-[#06B6D4]">
              just work.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl font-normal text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Accelerate certification, streamline acceptance, and build global payment products with a modular, cloud-native infrastructure.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mb-16"
          >
            <Link
              href="#products"
              className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-[#0A7CFF] rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-[#0A7CFF] focus:ring-offset-2"
            >
              Explore Products
              <ArrowRight className="ml-2 -mr-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-full shadow-sm hover:border-[#F97316] hover:text-[#F97316] hover:shadow-orange-500/10 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Highlight pills */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${item.color}`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
