"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";

const screens = [
  { src: "/Discover_Card.png", alt: "Ayris Pay - Discover Card view" },
  { src: "/Diners_Card.png", alt: "Ayris Pay - Diners Club Card view" },
];

/* ───────── Option 3: 3D Tilt on Hover ───────── */
export default function AyrisPayHeroVisual() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 30 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screens.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[590px] mx-auto" style={{ perspective: "1000px" }}>
      {/* Ambient glow behind the phone */}
      <div className="absolute inset-0 -inset-x-8 -inset-y-4 bg-blue-400/15 rounded-[3rem] blur-[40px] pointer-events-none" />

      {/* Phone container with 3D tilt */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-[2rem] cursor-default"
      >
        {/* Shine overlay that follows the tilt */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none rounded-[2rem]"
          style={{
            background: useTransform(
              mouseX,
              [-0.5, 0, 0.5],
              [
                "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)",
                "linear-gradient(135deg, transparent 0%, transparent 100%)",
                "linear-gradient(315deg, rgba(255,255,255,0.15) 0%, transparent 50%)",
              ]
            ),
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="scale-[1.2] origin-center"
          >
            <Image
              src={screens[current].src}
              alt={screens[current].alt}
              width={680}
              height={850}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

    </div>
  );
}
