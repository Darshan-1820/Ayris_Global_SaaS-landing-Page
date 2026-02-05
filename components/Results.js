"use client";

export default function Results() {
  const stats = [
    { label: "Reduction in manual testing steps", value: "85%" },
    { label: "Digital provisioning time", value: "< 5s" },
    { label: "Transaction history retention", value: "Forever" },
    { label: "Faster issue resolution", value: "4x" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven impact</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Ayris Global helps organizations improve performance, reduce operational effort, and modernize their payment infrastructure with measurable results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
