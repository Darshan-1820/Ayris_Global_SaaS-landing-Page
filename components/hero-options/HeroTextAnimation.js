"use client";

import Link from "next/link";
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

export default function HeroTextAnimation() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Subtle animated background */}
      <div className="absolute inset-0">
        {/* Soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-orange-50/40" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.3]" style={{
          backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />
        {/* Soft glow accents */}
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] bg-orange-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 text-xs font-bold tracking-widest text-[#0A7CFF] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A7CFF] animate-pulse" />
              Payment Infrastructure Platform
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-4 leading-[1.05]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A7CFF] to-[#06B6D4]">
              Ayris Global
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-6 leading-tight"
          >
            The connected payment stack for modern enterprise.
          </motion.p>

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
