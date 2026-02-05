import React from 'react';
import { Leaf, Target, Activity, Eye, Shield } from 'lucide-react';
import TypingText from "@/components/TypingText";

export default function WhyAssurePAT() {
  const values = [
    {
      title: "Efficiency",
      desc: "Significantly lower operational effort.",
      icon: Leaf,
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      title: "Accuracy",
      desc: "Faster and more accurate testing.",
      icon: Target,
      color: "text-red-500",
      bg: "bg-red-50"
    },
    {
      title: "Reliability",
      desc: "Reliable and predictable execution.",
      icon: Activity,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Control",
      desc: "Complete visibility into tester activity.",
      icon: Eye,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Governance",
      desc: "Stronger, audit-ready governance.",
      icon: Shield,
      color: "text-orange-600",
      bg: "bg-orange-50"
    }
  ];

  return (
    <section id="why" className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Assure PAT?</h2>
          <div className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed font-light min-h-[4rem]">
            <TypingText 
              text="Teams choose Assure PAT because it delivers faster and more accurate testing, reliable and predictable execution, complete visibility into tester activity, stronger governance, and significantly lower operational effort than manual processes or tools that only cover part of the lifecycle."
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
