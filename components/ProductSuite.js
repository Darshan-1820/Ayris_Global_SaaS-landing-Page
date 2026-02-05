"use client";
import { ArrowRight, CreditCard, Monitor, Smartphone, ReceiptText } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductSuite() {
  const products = [
    {
      id: "pat",
      title: "Assure PAT",
      category: "Payment Acceptance Testing",
      description: "A platform for automated payment acceptance testing, virtual test cards, workflows, and structured transaction logs.",
      icon: (
        <div className="relative w-10 h-10">
          <Monitor className="w-9 h-9 text-white absolute top-0 left-0" />
          <Smartphone className="w-5 h-5 text-white absolute bottom-[-2px] right-[-2px] fill-blue-600/20" />
        </div>
      ),
      gradient: "from-blue-600 to-blue-700",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      href: "/products/assure-pat"
    },
    {
      id: "pay",
      title: "Assure PAY",
      category: "Wallet & Rules Engine",
      description: "A platform for pre-transaction rule enforcement, predictable acceptance, and issued card controls.",
      icon: <CreditCard className="w-10 h-10 text-white" />,
      gradient: "from-orange-500 to-orange-600",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      href: "/products/assure-pay"
    },
    {
      id: "pos",
      title: "Assure POS",
      category: "Terminal Simulation",
      description: "A mobile terminal simulator for replicating POS behavior, capturing logs, and L3 certification testing.",
      icon: (
        <div className="relative w-10 h-10">
          <Smartphone className="w-9 h-9 text-white absolute top-0 left-0" />
          <ReceiptText className="w-5 h-5 text-white absolute bottom-[-2px] right-[-2px] fill-gray-800/20" />
        </div>
      ),
      gradient: "from-gray-800 to-gray-900",
      buttonColor: "bg-gray-800 hover:bg-gray-900",
      href: "/products/assure-pos"
    }
  ];

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern matching minimal design */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section - Minimal Design but without underline */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-widest text-[#0A7CFF] uppercase bg-blue-50/50 rounded-full border border-blue-100/50">
              Our Solutions
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-[1.1]">
              A unified platform for <br className="hidden md:block" />
              payment reliability
            </h2>
            
            <p className="text-xl font-light text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Ayris Global creates tools that simplify testing, improve acceptance consistency, and provide real-time control across the payment lifecycle.
            </p>
          </motion.div>
        </div>

        {/* Product Grid - Original Gradient Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { duration: 0.6, delay: index * 0.2 },
                y: { duration: 0.6, delay: index * 0.2 },
                scale: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="bg-white rounded-[2rem] p-2 border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col h-full group transition-colors duration-300"
            >
              {/* Card Header & Icon */}
              <div className={`rounded-[1.5rem] p-8 bg-gradient-to-br ${product.gradient} text-white relative overflow-hidden h-64 flex flex-col justify-between`}>
                <div className="relative z-10 w-fit p-3 bg-white/20 backdrop-blur-md rounded-2xl mb-4">
                  {product.icon}
                </div>
                
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                     <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
                     <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="2" />
                   </svg>
                </div>

                <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2 block">{product.category}</span>
                  <h3 className="text-3xl font-bold">{product.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col pt-6">
                <p className="font-light text-gray-500 leading-relaxed mb-8 flex-grow">
                  {product.description}
                </p>

                <Link 
                  href={product.href || "#"} 
                  className="group/btn inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-400 rounded-xl shadow-sm hover:border-[#F97316] hover:text-[#F97316] hover:shadow-lg hover:shadow-orange-500/10"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
