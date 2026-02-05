"use client";

import { CheckCircle2, Server, ShieldCheck, Smartphone } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Server className="w-8 h-8 text-blue-600" />,
      title: "Automated Payment Testing",
      description: "A platform for automated acceptance testing, virtual cards, and structured logs to accelerate certification.",
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
      title: "Transaction Control",
      description: "Pre-transaction rule enforcement and predictable acceptance for issuers and fintechs.",
      color: "bg-orange-50 border-orange-100"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Mobile POS Simulation",
      description: "Turn any mobile device into a terminal simulator for replicating real-world POS behavior.",
      color: "bg-gray-50 border-gray-100" // Neutral to balance
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">A unified platform for payment reliability</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ayris Global creates tools that simplify testing, improve acceptance consistency, and provide real-time control across the payment lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-2xl border ${card.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="mb-6 p-4 bg-white rounded-xl shadow-sm w-fit">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
