import React from 'react';
import { Zap, DollarSign, Settings, Eye, CheckCircle } from 'lucide-react';
import TypingText from "@/components/TypingText";

export default function WhyAssurePOS() {
  const values = [
    {
      title: "Speed",
      desc: "Faster testing without hardware procurement.",
      icon: Zap,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Cost",
      desc: "Eliminate expensive terminal costs ($150-450/unit).",
      icon: DollarSign,
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      title: "Flexibility",
      desc: "Consistent behavior across brands and kernels.",
      icon: Settings,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Visibility",
      desc: "Complete visibility into every transaction component.",
      icon: Eye,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      title: "Reliability",
      desc: "Predictable, always-available testing environment.",
      icon: CheckCircle,
      color: "text-red-500",
      bg: "bg-red-50"
    }
  ];

  return (
    <section id="why" className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Assure POS?</h2>
          <div className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-normal min-h-[4rem]">
            <TypingText 
              text="Teams choose Assure POS because it delivers faster, more flexible testing without the cost or complexity of physical hardware. By providing a single, consistent simulation environment, we eliminate the unpredictable behavior of physical devices and enable instant debugging from anywhere."
              speed={20}
              delay={200}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 border-t border-gray-100 pt-12">
          {values.map((item, idx) => (
            <div key={idx} className="text-center group">
              <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <item.icon className={`w-8 h-8 ${item.color}`} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
