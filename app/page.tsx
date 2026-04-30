"use client"; // Database වැඩ කරන්න මේක අනිවාර්යයි

import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// --- Supabase Setup ---
// Vercel Environment Variables වල මේ නම් දෙක හරියටම තියෙන්න ඕනේ
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function FullPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  // --- Form Submission Logic ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase
      .from('contact_inquiries') // ඔයාගේ Supabase table එකේ නම බලන්න
      .insert([formData]);

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Inquiry Sent Successfully!");
      setFormData({ name: '', email: '', message: '' });
    }
    setLoading(false);
  };

  return (
    <main className="relative min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">GG</span>
          </div>
          <span className="font-bold tracking-tighter uppercase text-sm">GrowthGrid</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium">
          <a href="#home" className="hover:text-slate-500">Home</a>
          <a href="#about" className="hover:text-slate-500">About</a>
          <a href="#contact" className="hover:text-slate-500">Contact</a>
        </div>
        <button className="text-[10px] border border-slate-900 px-4 py-2 uppercase tracking-widest">Menu</button>
      </nav>

      {/* 2. HERO SECTION (Mobile Responsive Fix) */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-slate-50">
        <div 
          className="absolute inset-0 z-0 opacity-10 bg-cover bg-center transition-transform duration-[10s] scale-105"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="relative z-10 space-y-6 w-full max-w-7xl mx-auto">
          {/* අකුරු පේළි කැඩෙන්නේ නැති වෙන්න [12vw] දැම්මා */}
          <h1 className="text-[12vw] md:text-[8vw] lg:text-9xl font-light tracking-[0.2em] text-slate-900 uppercase whitespace-nowrap leading-none">
            GROWTHGRID
          </h1>
          <p className="text-[9px] md:text-xs tracking-[0.4em] text-slate-500 max-w-[300px] md:max-w-none mx-auto leading-loose uppercase">
            Architecting Digital Identities Through High Performance Engineering
          </p>
          <div className="pt-8">
            <a href="#contact" className="px-10 py-4 border border-slate-900/10 bg-white/50 backdrop-blur-sm text-slate-900 text-[10px] tracking-[0.3em] uppercase hover:bg-slate-900 hover:text-white transition-all duration-500">
              Initiate Project
            </a>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-24 px-6 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tighter leading-tight">
            We build fast, aesthetic systems for modern growth.
          </h2>
          <p className="text-xs text-slate-500 uppercase tracking-widest leading-loose pt-4">
            Based in Sri Lanka, we specialize in React, Next.js and high-end automotive design aesthetics for luxury brands.
          </p>
        </div>
      </section>

      {/* 4. CONTACT SECTION (Database Logic Included) */}
      <section id="contact" className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-slate-400 mb-12 text-center">Inquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <input 
              required
              type="text" 
              placeholder="NAME" 
              className="w-full border-b border-slate-200 bg-transparent py-4 text-[10px] tracking-widest outline-none focus:border-slate-900 uppercase"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              required
              type="email" 
              placeholder="EMAIL" 
              className="w-full border-b border-slate-200 bg-transparent py-4 text-[10px] tracking-widest outline-none focus:border-slate-900 uppercase"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <textarea 
              required
              placeholder="MESSAGE" 
              rows={4} 
              className="w-full border-b border-slate-200 bg-transparent py-4 text-[10px] tracking-widest outline-none focus:border-slate-900 uppercase"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
            <button 
              disabled={loading}
              className="w-full bg-slate-900 text-white py-6 text-[10px] tracking-[0.5em] uppercase hover:bg-black transition-colors"
            >
              {loading ? "SENDING..." : "Send Inquiry"}
            </button>
          </form>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-[8px] tracking-[0.4em] text-slate-400 uppercase">© 2026 GrowthGrid Agency</p>
      </footer>

    </main>
  );
}