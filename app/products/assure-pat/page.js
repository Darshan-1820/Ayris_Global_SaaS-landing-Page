"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PaymentRealTimeVisual from "@/components/PaymentRealTimeVisual";
import TypingText from "@/components/TypingText";
import { GridPattern } from "@/components/GridPattern";
import WhatIs_Minimal from "@/components/assure-pat/design-options/WhatIs_Minimal";
import Features_Spotlight from "@/components/assure-pat/features-options/Features_Spotlight";
import WhyAssurePAT from "@/components/assure-pat/WhyAssurePAT";
import ROI_Spotlight from "@/components/assure-pat/ROI_Spotlight";
import ScrollReveal from "@/components/ScrollReveal";

export default function AssurePATPage() {
  const [email, setEmail] = useState("");

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    const subject = encodeURIComponent("Demo Request for Assure PAT");
    const body = encodeURIComponent(`I am interested in a demo for Assure PAT.\n\nSent from: ${email}`);

    window.location.href = `mailto:contact@ayrisglobal.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* 1. PRODUCT NAVBAR - Keep as is */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-20 flex items-center">
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
            {/* ... Navbar content ... */}
            {/* Left: Logo -> Home */}
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
              Why Assure PAT
            </Link>
            <Link href="#roi" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              ROI
            </Link>
            <Link 
              href="#demo" 
              className="px-6 py-2.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-[15px] font-semibold rounded-full transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-24 pb-10 lg:pt-36 lg:pb-20 overflow-hidden bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
            <GridPattern className="opacity-[0.3] text-gray-200" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
                
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6 text-gray-900">
                  Assure PAT
                </h1>

                {/* Tagline */}
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8 leading-tight">
                  Automated payment acceptance testing, <span className="text-blue-600">built for speed and control.</span>
                </h2>
                
                {/* Typing Description */}
                <div className="text-lg text-gray-600 leading-relaxed mb-10 min-h-[5rem]">
                  <TypingText 
                    text="A single platform that streamlines certification, strengthens governance, and eliminates the operational chaos of manual testing."
                    speed={30}
                    delay={200}
                  />
                </div>
                
                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://assure-live.ayrisglobal.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-[#0A7CFF] border border-transparent rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
                  >
                    Login
                    <ArrowRight className="ml-2 -mr-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>

                  <Link 
                    href="#demo"
                    className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-full shadow-lg shadow-gray-200/50 hover:border-[#F97316] hover:text-[#F97316] hover:shadow-orange-500/10"
                  >
                    Book Demo
                  </Link>
                </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
                 <PaymentRealTimeVisual />
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHAT IS ASSURE PAT */}
      <ScrollReveal>
        <WhatIs_Minimal />
      </ScrollReveal>

      {/* 4. FEATURES */}
      <ScrollReveal>
        <Features_Spotlight />
      </ScrollReveal>

      {/* 5. WHY ASSURE PAT (Justification) */}
      <ScrollReveal>
        <WhyAssurePAT />
      </ScrollReveal>
      
      {/* 6. COST REDUCTION & ROI */}
      <ScrollReveal>
        <ROI_Spotlight />
      </ScrollReveal>

      {/* 7. CONTACT / DEMO */}
      <ScrollReveal>
        <section id="demo" className="py-24 bg-blue-50">
          <div className="container mx-auto px-6 lg:px-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ready to modernize your testing?</h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                  Book a personalized demo of Assure PAT and see how much time your team can save.
              </p>
              
              <form 
                  onSubmit={handleDemoSubmit}
                  className="max-w-md mx-auto flex flex-col gap-4"
              >
                  <div>
                       <input 
                          type="email" 
                          placeholder="Enter your work email" 
                          className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required 
                      />
                  </div>
                  <button 
                      type="submit"
                      className="w-full px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-orange-500 rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:-translate-y-1"
                  >
                      Book Demo
                  </button>

              </form>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}
