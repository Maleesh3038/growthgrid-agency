import React from 'react';

const niches = [
  {
    title: "Coffee Shops & Cafes",
    description: "Aesthetic designs to showcase your brew and menu.",
    icon: "☕",
    link: "/demo/coffee"
  },
  {
    title: "Home Services",
    description: "High-converting sites for Plumbers, Electricians & Roofers.",
    icon: "🛠️",
    link: "/demo/plumbing"
  },
  {
    title: "Street Food & Trucks",
    description: "Live location tracking and vibrant food galleries.",
    icon: "🍔",
    link: "/demo/street-food"
  },
  {
    title: "Personal Training & Gyms",
    description: "Booking systems and schedule management for fitness.",
    icon: "💪",
    link: "/demo/gym"
  }
];

const Niches = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Industries We Specialize In</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We build tailor-made digital experiences for small businesses looking to scale globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {niches.map((niche, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-6">{niche.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                {niche.title}
              </h3>
              <p className="text-slate-500 mb-6 text-sm">
                {niche.description}
              </p>
              <button className="text-sm font-semibold text-blue-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                View Live Demo <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Niches;