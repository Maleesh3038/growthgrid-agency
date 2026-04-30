import React from 'react';
// Components import කරන එක ලේසියි, ඒත් ඔයාට ඔක්කොම එකම තැන ඕන නිසා මම පහලින් ඒවා ලියන්නම්

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white font-sans text-slate-900">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo එක පේන්නේ නැත්නම් public/images/logo.png තියෙනවද බලන්න */}
          <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">GG</span>
          </div>
          <span className="font-bold tracking-tighter uppercase text-sm">GrowthGrid</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium">
          <a href="#home" className="hover:text-slate-500 transition-colors">Home</a>
          <a href="#services" className="hover:text-slate-500 transition-colors">Services</a>
          <a href="#about" className="hover:text-slate-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-slate-500 transition-colors">Contact</a>
        </div>
        <button className="text-[10px] uppercase tracking-[0.2em] border border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-white transition-all">
          Menu
        </button>
      </nav>

      {/* --- HERO SECTION (Mobile Responsive) --- */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-slate-50">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
          style={{ 
            backgroundImage: "url('/images/hero-bg.jpg')",
            opacity: 0.4
          }}
        />
        <div className="absolute inset-0 bg-white/20 z-0" />
        <div className="relative z-10 space-y-8 w-full max-w-7xl mx-auto">
          {/* Mobile එකේදී කැඩෙන්නේ නැති වෙන්න whitespace-nowrap සහ viewport width (vw) දැම්මා */}
          <h1 className="text-[12vw] md:text-[9vw] lg:text-9xl font-light tracking-[0.2em] text-slate-900 uppercase whitespace-nowrap leading-none">
            GROWTHGRID
          </h1>
          <p className="text-[9px] md:text-xs tracking-[0.4em] text-slate-600 max-w-[320px] md:max-w-none mx-auto leading-relaxed uppercase">
            Architecting Digital Identities Through High Performance Engineering
          </p>
          <div className="pt-4">
            <a href="#contact" className="px-10 py-4 border border-slate-900/10 bg-white/50 backdrop-blur-sm text-slate-900 text-[10px] tracking-[0.3em] uppercase hover:bg-slate-900 hover:text-white transition-all duration-500">
              Initiate Project
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-[1px] h-16 bg-slate-400" />
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-slate-400 mb-12">Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {['Web Development', 'UI/UX Design', 'Branding'].map((service, i) => (
              <div key={i} className="group border-t border-slate-100 pt-8 hover:border-slate-900 transition-colors">
                <span className="text-xs text-slate-300 mb-4 block">0{i+1}</span>
                <h3 className="text-xl font-light uppercase tracking-widest mb-4">{service}</h3>
                <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-tighter">
                  Delivering high-performance digital solutions tailored for luxury agencies.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-slate-400 mb-8">Our Vision</h2>
            <p className="text-2xl md:text-4xl font-light leading-snug text-slate-900 uppercase tracking-tight">
              We build fast, aesthetic, and scalable digital systems for modern growth.
            </p>
          </div>
          <div className="space-y-6 text-sm text-slate-500 leading-loose uppercase tracking-tighter">
            <p>Based in Sri Lanka, we specialize in React, Next.js and high-end automotive aesthetics.</p>
            <p>Our engineering discipline ensures 100% performance on every project we deliver.</p>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-slate-400 mb-8">Contact</h2>
          <p className="text-xl md:text-2xl font-light mb-12 uppercase tracking-widest">Ready to build the future?</p>
          <form className="space-y-6">
            <input type="text" placeholder="NAME" className="w-full border-b border-slate-200 py-4 text-[10px] tracking-widest focus:border-slate-900 outline-none transition-colors uppercase" />
            <input type="email" placeholder="EMAIL" className="w-full border-b border-slate-200 py-4 text-[10px] tracking-widest focus:border-slate-900 outline-none transition-colors uppercase" />
            <textarea placeholder="MESSAGE" rows={4} className="w-full border-b border-slate-200 py-4 text-[10px] tracking-widest focus:border-slate-900 outline-none transition-colors uppercase"></textarea>
            <button className="w-full bg-slate-900 text-white py-6 text-[10px] tracking-[0.5em] uppercase hover:bg-slate-800 transition-colors">Send Inquiry</button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 border-t border-slate-100 text-center">
        <p className="text-[9px] tracking-[0.4em] text-slate-400 uppercase">
          © 2026 GrowthGrid Agency. All Rights Reserved.
        </p>
      </footer>

    </main>
  );
}