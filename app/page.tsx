"use client"
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    const { error } = await supabase.from('leads').insert([{
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }])

    setLoading(false)

    if (error) {
      console.error('Submission Error:', error.message)
      alert('Error: ' + error.message)
    } else {
      setSubmitted(true)
      form.reset()
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 font-light selection:bg-slate-900 selection:text-white">
      
      {/* 01. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-slate-100 px-8 py-6 flex justify-between items-center">
        <a href="/" className="transition-opacity hover:opacity-70">
          <img 
            src="/images/logo.png" 
            alt="GrowthGrid" 
            className="h-8 md:h-9 w-auto object-contain" 
          />
        </a>
        <div className="hidden md:flex space-x-12 text-[10px] tracking-[0.3em] uppercase font-medium">
          <a href="#services" className="hover:text-slate-400 transition-all">Services</a>
          <a href="#about" className="hover:text-slate-400 transition-all">About</a>
          <a href="#contact" className="hover:text-slate-400 transition-all">Contact</a>
        </div>
      </nav>

      {/* 02. HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10 bg-cover bg-center transition-transform duration-[10s] scale-105 hover:scale-100"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        ></div>
        
        <div className="relative z-10 space-y-6">
          <h1 className="text-6xl md:text-8xl font-extralight tracking-[0.3em] uppercase animate-in fade-in slide-in-from-bottom-8 duration-1000">
            GrowthGrid
          </h1>
          <p className="max-w-xl mx-auto text-[11px] text-slate-500 tracking-[0.4em] font-light leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200 uppercase">
            Architecting Digital Identities Through High-Performance Engineering.
          </p>
          <div className="pt-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <a href="#contact" className="text-[10px] tracking-[0.5em] uppercase border-b border-slate-900 pb-3 hover:text-slate-400 hover:border-slate-400 transition-all">
              Initiate Project
            </a>
          </div>
        </div>
      </section>

      {/* 03. SERVICES SECTION */}
      <section id="services" className="py-40 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[10px] tracking-[0.6em] uppercase text-slate-300 mb-24 text-center italic font-medium">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-20">
            {[
              { title: 'Brand Identity', img: '/images/brand.jpg', desc: 'Crafting timeless visual languages for the digital elite.' },
              { title: 'Web Experience', img: '/images/web.jpg', desc: 'Minimalist Next.js solutions optimized for speed and luxury.' },
              { title: 'Market Growth', img: '/images/market.jpg', desc: 'Strategic scaling through data-driven architectural insights.' }
            ].map((service, i) => (
              <div key={i} className="group space-y-8 flex flex-col items-center text-center transition-all duration-700">
                <div className="w-full aspect-[4/5] overflow-hidden bg-slate-50 relative border border-slate-50">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg tracking-[0.2em] uppercase font-light">{service.title}</h3>
                <div className="w-6 h-[1px] bg-slate-200 group-hover:w-20 transition-all duration-700"></div>
                <p className="text-[12px] text-slate-400 leading-relaxed font-light tracking-widest max-w-[280px]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. ABOUT SECTION */}
      <section id="about" className="py-40 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-[10px] tracking-[0.6em] uppercase text-slate-400 italic">The Philosophy</h2>
              <h3 className="text-3xl md:text-4xl font-extralight tracking-tight leading-tight uppercase">
                Where Engineering <br /> Meets Digital Soul.
              </h3>
              <div className="space-y-6 text-[13px] text-slate-500 font-light leading-relaxed tracking-widest">
                <p>
                  Rooted in Software Engineering and inspired by luxury aesthetics, we bridge the gap between 
                  technical complexity and minimalist design. 
                </p>
                <p>
                  Every line of code is optimized for performance; every pixel is placed with intent. 
                  We believe true luxury is found in precision.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-slate-200">
                <div>
                  <span className="block text-xl font-light tracking-widest uppercase">01 / Perf</span>
                  <span className="text-[9px] text-slate-400 uppercase tracking-widest">Optimized Core Vitals</span>
                </div>
                <div>
                  <span className="block text-xl font-light tracking-widest uppercase">02 / Code</span>
                  <span className="text-[9px] text-slate-400 uppercase tracking-widest">Clean Architecture</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-square bg-white border border-slate-100 group overflow-hidden">
              <img 
                src="/images/about-visual.jpg" 
                alt="GrowthGrid Philosophy" 
                className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110 opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 05. CONTACT SECTION */}
      <section id="contact" className="py-40 px-6 bg-white">
        <div className="max-w-sm mx-auto text-center">
          <h2 className="text-[10px] tracking-[0.6em] uppercase text-slate-300 mb-20 italic">Connect</h2>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-12 text-left">
              <div className="group border-b border-slate-200 focus-within:border-slate-900 transition-all">
                <input name="name" placeholder="FULL NAME" required className="w-full py-4 px-1 outline-none text-[11px] tracking-widest uppercase bg-transparent placeholder:text-slate-300" />
              </div>
              <div className="group border-b border-slate-200 focus-within:border-slate-900 transition-all">
                <input name="email" type="email" placeholder="EMAIL ADDRESS" required className="w-full py-4 px-1 outline-none text-[11px] tracking-widest uppercase bg-transparent placeholder:text-slate-300" />
              </div>
              <div className="group border-b border-slate-200 focus-within:border-slate-900 transition-all">
                <textarea name="message" placeholder="TELL US ABOUT THE PROJECT" rows={4} required className="w-full py-4 px-1 outline-none text-[11px] tracking-widest uppercase resize-none bg-transparent placeholder:text-slate-300"></textarea>
              </div>
              <button type="submit" disabled={loading} className="w-full mt-12 py-6 bg-slate-900 text-white text-[10px] tracking-[0.4em] uppercase hover:bg-black transition-all disabled:opacity-50 font-medium">
                {loading ? 'TRANSMITTING...' : 'SEND INQUIRY'}
              </button>
            </form>
          ) : (
            <div className="py-20 animate-in fade-in zoom-in duration-1000">
              <h2 className="text-xl font-extralight tracking-[0.3em] uppercase mb-4 text-slate-900">Inquiry Received</h2>
              <p className="text-[11px] text-slate-400 tracking-widest font-light uppercase">We will respond within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className="mt-12 text-[9px] tracking-[0.3em] uppercase text-slate-300 hover:text-slate-900 transition-colors underline underline-offset-8">New Message</button>
            </div>
          )}
        </div>
      </section>

      {/* 06. FOOTER */}
      <footer className="py-24 bg-white border-t border-slate-50 text-center">
        <p className="text-[9px] tracking-[0.5em] uppercase text-slate-300">
          © 2026 GrowthGrid Agency — Colombo, SL. Built by Maleesh.
        </p>
      </footer>
    </main>
  )
}