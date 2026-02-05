"use client";

import { Zap, Shield, CheckCircle, Activity, Layout, Clock } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      text: "Faster testing and certification"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      text: "More reliable transaction acceptance"
    },
    {
      icon: <Layout className="w-6 h-6 text-orange-600" />,
      text: "Rule-based control before authorization"
    },
    {
      icon: <Activity className="w-6 h-6 text-blue-600" />,
      text: "Real-time debugging information"
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-600" />,
      text: "Reduced operational workload"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      text: "Fully digital lifecycle processes"
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Leading Enterprise Teams Choose Ayris Global
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 pl-4">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full border border-gray-100 shadow-sm flex items-center justify-center">
                {benefit.icon}
              </div>
              <p className="text-lg font-medium text-gray-700 pt-2">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
