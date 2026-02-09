"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GridPattern } from "./GridPattern";
import NetworkVisual from "./NetworkVisual";
import TypingText from "./TypingText";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-32 overflow-hidden bg-white min-h-[80vh] sm:min-h-0 flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <GridPattern className="opacity-[0.3] text-gray-200" />
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Full Screen Network Visual - hidden on small mobile for performance */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <NetworkVisual />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-black mb-4 sm:mb-6">
              Ayris Global
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8 leading-tight">
              The connected payment stack for <span className="text-[#0A7CFF]">modern enterprise.</span>
            </p>

            {/* Typing Description */}
            <div className="text-base sm:text-lg font-normal text-gray-700 leading-relaxed mb-8 sm:mb-10 min-h-[4.5rem] sm:min-h-[5rem] lg:min-h-[5rem]">
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
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white transition-all duration-200 bg-[#0A7CFF] border border-transparent rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-[#0A7CFF] focus:ring-offset-2"
              >
                Explore Products
                <ArrowRight className="ml-2 -mr-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-full shadow-lg shadow-gray-200/50 hover:border-[#F97316] hover:text-[#F97316] hover:shadow-orange-500/10 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />

        </div>
      </div>
    </section>
  );
}
