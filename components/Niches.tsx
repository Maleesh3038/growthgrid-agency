import React from 'react';

const niches = [
  {
    title: "Coffee Shops & Cafes",
    description: "Aesthetic designs to showcase your brew and menu.",
    image: "/images/coffee.jpg", // Local image path
    link: "/demo/coffee"
  },
  {
    title: "Home Services",
    description: "High-converting sites for Plumbers and Electricians.",
    image: "/images/plumbing.jpg",
    link: "/demo/plumbing"
  },
  {
    title: "Street Food & Trucks",
    description: "Live location tracking and vibrant food galleries.",
    image: "/images/street-food.jpg",
    link: "/demo/street-food"
  },
  {
    title: "Fitness & Gyms",
    description: "Booking systems and schedule management.",
    image: "/images/gym.jpg",
    link: "/demo/gym"
  }
];

const Niches = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[10px] tracking-[0.6em] uppercase text-slate-300 mb-4 italic font-medium">Global Niches</h2>
          <h3 className="text-3xl md:text-5xl font-light uppercase tracking-tight">Industries We Scale</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {niches.map((niche, index) => (
            <div key={index} className="group relative overflow-hidden rounded-none aspect-[3/4] bg-slate-100">
              {/* Always Color Image with Zoom Effect */}
              <img 
                src={niche.image} 
                alt={niche.title} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110"
              />
              
              {/* Content Overlay - ලස්සනට පේන්න පොඩි gradient එකක් තිබ්බා */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <h4 className="text-xl font-light text-white uppercase tracking-widest mb-2">
                  {niche.title}
                </h4>
                <p className="text-[10px] text-slate-200 tracking-[0.2em] uppercase mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {niche.description}
                </p>
                <button className="text-[9px] text-white tracking-[0.4em] uppercase border-b border-white/40 pb-2 w-fit hover:border-white transition-all">
                  Explore Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Niches;