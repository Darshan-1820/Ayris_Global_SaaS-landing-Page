"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TypingText from "../TypingText";

export default function HeroGlassmorphism() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#0c1a3d] to-[#0f172a]">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] top-[-5%] right-[5%] rounded-full bg-gradient-to-br from-[#0A7CFF]/40 to-[#06B6D4]/20 blur-[80px] animate-float" />
        <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bottom-[5%] left-[-5%] rounded-full bg-gradient-to-tr from-[#6366F1]/30 to-[#0A7CFF]/15 blur-[80px] animate-float-delayed" />
        <div className="absolute w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] top-[50%] right-[30%] rounded-full bg-[#F97316]/10 blur-[70px] animate-float-slow" />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left — text content */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.1]">
              Ayris Global
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white/80 mb-6 sm:mb-8 leading-tight">
              The connected payment stack for{" "}
              <span className="text-[#60A5FA]">modern enterprise.</span>
            </p>
            <div className="text-base sm:text-lg font-normal text-white/55 leading-relaxed mb-8 sm:mb-10 min-h-[4.5rem] sm:min-h-[5rem] max-w-xl">
              <TypingText
                text="Accelerate certification, streamline acceptance, and build global payment products with a modular, cloud-native infrastructure."
                speed={20}
                delay={500}
              />
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link
                href="#products"
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white transition-all duration-200 bg-[#0A7CFF] rounded-full hover:bg-[#0A7CFF]/80 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-[#0A7CFF] focus:ring-offset-2 focus:ring-offset-[#0f172a]"
              >
                Explore Products
                <ArrowRight className="ml-2 -mr-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white/90 transition-all duration-200 bg-white/5 border border-white/20 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0f172a]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right — glass cards showcasing products */}
          <div className="hidden lg:flex flex-col gap-4">
            {[
              { title: "Assure PAT", desc: "Automated payment acceptance testing", color: "from-blue-500/20 to-blue-600/10", border: "border-blue-400/20" },
              { title: "Assure PAY", desc: "Wallet & pre-transaction rule engine", color: "from-orange-500/20 to-orange-600/10", border: "border-orange-400/20" },
              { title: "Assure POS", desc: "Mobile terminal simulation platform", color: "from-gray-400/20 to-gray-500/10", border: "border-gray-400/20" },
            ].map((product, i) => (
              <Link
                key={product.title}
                href="#products"
                className={`group relative p-6 rounded-2xl border ${product.border} bg-gradient-to-br ${product.color} backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/5`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{product.title}</h3>
                    <p className="text-sm text-white/50">{product.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
