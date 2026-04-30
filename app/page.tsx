import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-slate-50">
      {/* Background Image - Opacity එක සහ Styling එක හරිගැස්සුවා */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
        style={{ 
          backgroundImage: "url('/images/hero-bg.jpg')",
          opacity: 0.4 // මෙතන 0.1 තිබුණේ, ඒකයි පෙනුණේ නැත්තේ. දැන් 40% ක් තියෙනවා.
        }}
      />

      {/* Overlay එකක් දැම්මා අකුරු ලස්සනට පේන්න */}
      <div className="absolute inset-0 bg-white/30 z-0" />

      <div className="relative z-10 space-y-8 w-full max-w-7xl mx-auto">
        {/* Main Title - අකුරු කැඩෙන්නේ නැති වෙන්න whitespace-nowrap සහ vw sizes දැම්මා */}
        <h1 className="text-[12vw] md:text-[9vw] lg:text-9xl font-light tracking-[0.2em] text-slate-900 uppercase whitespace-nowrap leading-none">
          GROWTHGRID
        </h1>

        {/* Subtitle */}
        <p className="text-[9px] md:text-xs tracking-[0.4em] text-slate-600 max-w-[320px] md:max-w-none mx-auto leading-relaxed uppercase">
          Architecting Digital Identities Through High Performance Engineering
        </p>

        {/* Button */}
        <div className="pt-4">
          <button className="px-10 py-4 border border-slate-900/10 bg-white/50 backdrop-blur-sm text-slate-900 text-[10px] tracking-[0.3em] uppercase hover:bg-slate-900 hover:text-white transition-all duration-500 rounded-sm">
            Initiate Project
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-16 bg-slate-400" />
      </div>
    </section>
  );
};

export default Hero;