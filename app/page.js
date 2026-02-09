"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import HeroGradientMesh from "../components/hero-options/HeroGradientMesh";
import HeroGlassmorphism from "../components/hero-options/HeroGlassmorphism";
import HeroTextAnimation from "../components/hero-options/HeroTextAnimation";
import ProductSuite from "../components/ProductSuite";
import WhyChooseUs from "../components/WhyChooseUs";
import Consulting from "../components/Consulting";
import Testimonials from "../components/Testimonials";
import Founder from "../components/Founder";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const heroOptions = [
  { id: "gradient-mesh", label: "1: Gradient Mesh", component: HeroGradientMesh },
  { id: "glassmorphism", label: "2: Glassmorphism", component: HeroGlassmorphism },
  { id: "text-animation", label: "4: Text Animation", component: HeroTextAnimation },
  { id: "original", label: "Original", component: Hero },
];

export default function Home() {
  const [activeHero, setActiveHero] = useState("gradient-mesh");

  const ActiveHeroComponent = heroOptions.find(h => h.id === activeHero)?.component || HeroGradientMesh;

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">

      {/* Hero Variant Switcher — TEMPORARY for preview, remove after picking one */}
      <div className="fixed top-20 right-4 z-[999] flex flex-col gap-1 bg-black/80 backdrop-blur-md rounded-xl p-2 shadow-2xl border border-white/10">
        <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest px-2 py-1">Hero Style</span>
        {heroOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setActiveHero(option.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeHero === option.id
                ? "bg-[#0A7CFF] text-white"
                : "text-white/60 hover:text-white hover:bg-white/10"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <main>
        <ActiveHeroComponent />

        <ScrollReveal>
          <ProductSuite />
        </ScrollReveal>

        <ScrollReveal>
          <WhyChooseUs />
        </ScrollReveal>

        <ScrollReveal>
          <Consulting />
        </ScrollReveal>

        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal>
          <Founder />
        </ScrollReveal>

        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
