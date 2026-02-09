"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TypingText from "../TypingText";

export default function HeroGradientMesh() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0e1a]">
      {/* Animated gradient mesh blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary blue blob */}
        <div className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] top-[-10%] right-[-10%] rounded-full bg-[#0A7CFF]/30 blur-[120px] animate-mesh-1" />
        {/* Cyan blob */}
        <div className="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bottom-[-15%] left-[-5%] rounded-full bg-[#06B6D4]/25 blur-[120px] animate-mesh-2" />
        {/* Orange accent blob */}
        <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] top-[30%] left-[40%] rounded-full bg-[#F97316]/15 blur-[100px] animate-mesh-3" />
        {/* Deep purple blob */}
        <div className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] top-[10%] left-[10%] rounded-full bg-[#6366F1]/20 blur-[120px] animate-mesh-4" />
        {/* Subtle noise/grain overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#0A7CFF] animate-pulse" />
            <span className="text-xs font-medium text-blue-200 tracking-wide">Payment Infrastructure Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.1]">
            Ayris Global
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white/80 mb-6 sm:mb-8 leading-tight">
            The connected payment stack for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A7CFF] to-[#06B6D4]">
              modern enterprise.
            </span>
          </p>

          {/* Description */}
          <div className="text-base sm:text-lg font-normal text-white/60 leading-relaxed mb-8 sm:mb-10 min-h-[4.5rem] sm:min-h-[5rem] max-w-2xl">
            <TypingText
              text="Accelerate certification, streamline acceptance, and build global payment products with a modular, cloud-native infrastructure."
              speed={20}
              delay={500}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Link
              href="#products"
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white transition-all duration-200 bg-[#0A7CFF] border border-[#0A7CFF] rounded-full hover:bg-[#0A7CFF]/80 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-[#0A7CFF] focus:ring-offset-2 focus:ring-offset-[#0a0e1a]"
            >
              Explore Products
              <ArrowRight className="ml-2 -mr-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white/90 transition-all duration-200 bg-white/5 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0a0e1a]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade to white for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <style jsx global>{`
        @keyframes mesh1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.95); }
          75% { transform: translate(40px, 30px) scale(1.05); }
        }
        @keyframes mesh2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-40px, 30px) scale(1.05); }
          50% { transform: translate(30px, -40px) scale(1.1); }
          75% { transform: translate(-20px, -20px) scale(0.95); }
        }
        @keyframes mesh3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, 30px) scale(1.15); }
          66% { transform: translate(-30px, -40px) scale(0.9); }
        }
        @keyframes mesh4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          20% { transform: translate(-30px, 40px) scale(1.08); }
          60% { transform: translate(40px, -20px) scale(0.92); }
          80% { transform: translate(10px, 30px) scale(1.05); }
        }
        .animate-mesh-1 { animation: mesh1 15s ease-in-out infinite; }
        .animate-mesh-2 { animation: mesh2 18s ease-in-out infinite; }
        .animate-mesh-3 { animation: mesh3 12s ease-in-out infinite; }
        .animate-mesh-4 { animation: mesh4 20s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
