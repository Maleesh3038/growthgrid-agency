"use client"

const niches = [
  {
    id: 1,
    title: "Premium Coffee Roasters",
    description: "High-performance digital storefront for specialty coffee brands.",
    link: "https://growthgrid-demos.vercel.app/coffee",
    image: "/images/coffee.jpg"
  },
  {
    id: 2,
    title: "Elite Fitness Hub",
    description: "Modern booking and membership management for luxury gyms.",
    link: "https://growthgrid-demos.vercel.app/gym",
    image: "/images/gym.jpg"
  },
  {
    id: 3,
    title: "Professional Services",
    description: "Lead generation and booking systems for premium trade services.",
    link: "https://growthgrid-demos.vercel.app/plumbing",
    image: "/images/plumbing.jpg"
  },
  {
    id: 4,
    title: "Artisan Street Food",
    description: "Dynamic menu and location tracking for premium food vendors.",
    link: "https://growthgrid-demos.vercel.app/street-food",
    image: "/images/street-food.jpg"
  }
]

export default function Niches() {
  return (
    <section id="expertise" className="py-24 md:py-40 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[10px] tracking-[0.6em] uppercase text-slate-300 mb-16 md:mb-24 text-center italic font-medium">
          Industry Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {niches.map((niche) => (
            <div key={niche.id} className="group space-y-8">
              <div className="w-full aspect-video overflow-hidden bg-slate-50 rounded-[2rem] border border-slate-100 shadow-sm">
                <img 
                  src={niche.image} 
                  alt={niche.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              
              <div className="space-y-4 px-2">
                <h3 className="text-base md:text-lg tracking-[0.2em] uppercase font-light text-slate-900">
                  {niche.title}
                </h3>
                <p className="text-[11px] text-slate-400 tracking-widest leading-relaxed uppercase max-w-md">
                  {niche.description}
                </p>
                <div className="pt-2">
                  <a 
                    href={niche.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[9px] tracking-[0.4em] uppercase border-b border-slate-900 pb-2 hover:text-slate-400 hover:border-slate-400 transition-all text-slate-900"
                  >
                    View Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}