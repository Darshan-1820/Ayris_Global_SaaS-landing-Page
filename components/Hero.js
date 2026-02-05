"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GridPattern } from "./GridPattern";
import NetworkVisual from "./NetworkVisual";
import TypingText from "./TypingText";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-32 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <GridPattern className="opacity-[0.3] text-gray-200" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Full Screen Network Visual */}
      <div className="absolute inset-0 z-0">
        <NetworkVisual />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-black mb-6">
              Ayris Global
            </h1>

            {/* Tagline */}
            <p className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-8 leading-tight">
              The connected payment stack for <span className="text-[#0A7CFF]">modern enterprise.</span>
            </p>

            {/* Typing Description - Updated Typography */}
            <div className="text-lg font-light text-gray-500 leading-relaxed mb-10 h-24 lg:h-20">
              <TypingText 
                text="Accelerate certification, streamline acceptance, and build global payment products with a modular, cloud-native infrastructure."
                speed={20}
                delay={500}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#products" 
                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-[#0A7CFF] border border-transparent rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
              >
                Explore Products
                <ArrowRight className="ml-2 -mr-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-full shadow-lg shadow-gray-200/50 hover:border-[#F97316] hover:text-[#F97316] hover:shadow-orange-500/10"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column - Empty now as network is background, but keeping grid for spacing if needed or removing grid cols if we want full width left?? 
              Actually, if the network is background, the text should probably still be on the left.
              I will keep the grid but the second column will be empty or I'll just remove the second column div.
          */}
          <div className="hidden lg:block">
            {/* Spacer or empty div to keep the grid layout for the left text */}
          </div>
          
        </div>
      </div>
    </section>
  );
}
