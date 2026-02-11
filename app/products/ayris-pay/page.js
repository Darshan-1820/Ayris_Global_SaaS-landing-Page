"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AyrisPayHeroVisual from "@/components/ayris-pay/AyrisPayHeroVisual";
import TypingText from "@/components/TypingText";
import { GridPattern } from "@/components/GridPattern";
import WhatIs_AyrisPay from "@/components/ayris-pay/WhatIs_AyrisPay";
import Features_AyrisPay from "@/components/ayris-pay/Features_AyrisPay";
import WhyAyrisPay from "@/components/ayris-pay/WhyAyrisPay";
import ScrollReveal from "@/components/ScrollReveal";

export default function AyrisPayPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">

      {/* 1. PRODUCT NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-20 flex items-center">
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
            {/* Left: Back Arrow -> Logo -> Text */}
          <Link href="/#products" className="flex items-center gap-4 group">
             <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors">
                <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
             </div>
             <div className="flex items-center gap-3">
                <div className="relative w-11 h-11">
                    <Image
                    src="/logo.png"
                    alt="Ayris Global Logo"
                    fill
                    className="object-contain"
                    />
                </div>
                <span className="text-xl font-bold text-gray-900 tracking-tight">
                Ayris Global
                </span>
             </div>
          </Link>

          {/* Right: Product Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#why" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Why Ayris Pay
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-2.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-[15px] font-semibold rounded-full transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-24 pb-10 lg:pt-36 lg:pb-20 overflow-hidden bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <GridPattern className="opacity-[0.3] text-gray-200" />
            <div className="absolute top-0 right-0 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="max-w-2xl">

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6 text-gray-900">
                  Ayris Pay
                </h1>

                {/* Tagline */}
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8 leading-tight">
                  Full control over how, where, <span className="text-blue-600">and when spending occurs.</span>
                </h2>

                {/* Typing Description */}
                <div className="text-lg text-gray-600 leading-relaxed mb-10 min-h-[5rem]">
                  <TypingText
                    text="A programmable control platform that empowers consumers, families, teams, and payment providers to securely manage how, where, and when spending occurs."
                    speed={30}
                    delay={200}
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-[#F97316] hover:bg-[#EA580C] rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5"
                  >
                    Contact Sales
                    <ArrowRight className="ml-2 -mr-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
            </div>

            {/* Right Column - Visual (hidden on phones where landscape mockup is too small) */}
            <div className="relative hidden md:block">
                 <AyrisPayHeroVisual />
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHAT IS AYRIS PAY */}
      <ScrollReveal>
        <WhatIs_AyrisPay />
      </ScrollReveal>

      {/* 4. FEATURES */}
      <ScrollReveal>
        <Features_AyrisPay />
      </ScrollReveal>

      {/* 5. WHY AYRIS PAY */}
      <ScrollReveal>
        <WhyAyrisPay />
      </ScrollReveal>

      {/* 7. CONTACT SALES CTA */}
      <ScrollReveal>
        <section id="demo" className="py-24 bg-blue-50">
          <div className="container mx-auto px-6 lg:px-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ready to take control?</h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                  Get a personalized consultation and see how Ayris Pay can secure your payment ecosystem.
              </p>

               <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-200 bg-[#F97316] hover:bg-[#EA580C] rounded-full shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1"
              >
                Contact Sales
              </Link>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}
