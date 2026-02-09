"use client";

export default function Testimonials() {

  const testimonials = [
    { text: "Reduced our L3 certification timeline by 4 months.", company: "Major Fintech" },
    { text: "The most reliable simulator we've used for SoftPOS.", company: "Global Bank" },
    { text: "Automated 90% of our manual acceptance tests.", company: "Payment Gateway" },
    { text: "Finally, a unified stack for issuance and acceptance.", company: "Neobank" },
    { text: "Expert guidance that saved us from compliance pitfalls.", company: "Retail Chain" },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Trusted by innovators</h2>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-marquee flex gap-4 sm:gap-8 py-4 pl-4 sm:pl-8">
          {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex flex-col justify-center w-[260px] sm:w-[350px] flex-shrink-0 p-5 sm:p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <p className="text-base sm:text-lg text-gray-700 italic mb-4">&ldquo;{item.text}&rdquo;</p>
              <p className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wide text-right">— {item.company}</p>
            </div>
          ))}
        </div>

        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
