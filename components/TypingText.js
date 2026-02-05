"use client";

import { useState, useEffect, useRef } from 'react';

export default function TypingText({ text, speed = 30, delay = 0, className = "" }) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    // Reset if text changes
    setDisplayedText("");

    let i = -1;
    let intervalId = null;

    const timer = setTimeout(() => {
      intervalId = setInterval(() => {
        i++;
        if (i < text.length) {
          setDisplayedText((prev) => prev + text.charAt(i));
        } else {
          clearInterval(intervalId);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [started, text, speed, delay]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      <span className="inline-block w-[2px] h-[1em] align-middle bg-blue-600 ml-1 animate-pulse" />
    </span>
  );
}
