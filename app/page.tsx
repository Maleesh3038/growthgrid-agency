import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-white">
      {/* Background Image - ඔයාගේ screenshot එකේ තිබුණ styling එක */}
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center transition-transform duration-[10s] scale-105 hover:scale-100"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      <div className="relative z-10 space-y-6 w-full max-w-4xl mx-auto">
        {/* Main Title - Responsive size එක මෙතන තියෙන්නේ */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] text-slate-900 uppercase break-words">
          GROWTHGRID
        </h1>

        {/* Subtitle - Mobile එකේදී අකුරු පේළි 2කට ලස්සනට වැටෙන්න */}
        <p className="text-[10px] md:text-xs tracking-[0.4em] text-slate-500 max-w-[280px] md:max-w-none mx-auto leading-loose uppercase">
          Architecting Digital Identities Through High Performance Engineering
        </p>

        {/* Button - Mobile එකට ගැලපෙන space එකක් දුන්නා */}
        <div className="pt-8">
          <button className="px-8 py-3 border border-slate-200 text-[10px] tracking-[0.3em] uppercase hover:bg-slate-900 hover:text-white transition-all duration-500">
            Initiate Project
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator (Optional) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-slate-200" />
      </div>
    </section>
  );
};

export default Hero;