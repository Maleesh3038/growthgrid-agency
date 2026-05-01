"use client"
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import Niches from '@/components/Niches' 

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
      alert('Error: ' + error.message)
    } else {
      setSubmitted(true)
      form.reset()
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 font-light selection:bg-slate-900 selection:text-white">
      
      {/* DARK NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900 text-white px-4 md:px-8 py-4 md:py-5 flex justify-between items-center shadow-lg">
        <a href="/" className="transition-opacity hover:opacity-70 invert brightness-0">
          <img src="/images/logo.png" alt="GrowthGrid" className="h-6 md:h-8 w-auto object-contain" />
        </a>
        <div className="hidden md:flex space-x-12 text-[10px] tracking-[0.3em] uppercase font-medium">
          <a href="#services" className="hover:text-slate-400 transition-all">Services</a>
          <a href="#expertise" className="hover:text-slate-400 transition-all">Expertise</a>
          <a href="#about" className="hover:text-slate-400 transition-all">About</a>
          <a href="#contact" className="hover:text-slate-400 transition-all text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-slate-900">Contact</a>
        </div>
        <div className="md:hidden text-[9px] tracking-widest uppercase font-bold">Menu</div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-cover bg-center transition-transform duration-[10s] scale-105" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}></div>
        <div className="relative z-10 space-y-6 w-full pt-20">
          <h1 className="text-[12vw] md:text-8xl font-bold break-words text-center">GROWTHGRID</h1>
          <p className="max-w-sm md:max-w-xl mx-auto text-[9px] md:text-[11px] text-slate-500 tracking-[0.3em] md:tracking-[0.4em] font-light leading-relaxed uppercase">
            Architecting Digital Identities Through High-Performance Engineering.
          </p>
          <div className="pt-8 md:pt-12">
            <a href="#contact" className="text-[10px] tracking-[0.5em] uppercase border-b border-slate-900 pb-3 hover:text-slate-400 transition-all">Initiate Project</a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 md:py-40 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[10px] tracking-[0.6em] uppercase text-slate-300 mb-16 md:mb-24 text-center italic font-medium">Our Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 max-w-4xl mx-auto">
            {[
              { 
                title: 'Web Design & Management', 
                img: '/images/web.jpg', 
                desc: 'We build premium business websites and handle all ongoing maintenance. Affordable monthly plans for complete digital peace of mind.' 
              },
              { 
                title: 'Social Media Marketing', 
                img: '/images/market.jpg', 
                desc: 'Strategic social media management and advertising campaigns designed to grow your audience and drive sales.' 
              }
            ].map((service, i) => (
              <div key={i} className="group space-y-6 md:space-y-8 flex flex-col items-center text-center">
                <div className="w-full aspect-[4/5] overflow-hidden bg-slate-50 relative border border-slate-100 rounded-[2rem] shadow-sm">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" />
                </div>
                <h3 className="text-base md:text-lg tracking-[0.2em] uppercase font-light text-slate-900">{service.title}</h3>
                <div className="w-6 h-[1px] bg-slate-200 group-hover:w-20 transition-all duration-700"></div>
                <p className="text-[11px] md:text-[12px] text-slate-400 leading-relaxed font-light tracking-widest uppercase">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE / DEMO SECTION */}
      <Niches />

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-40 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="space-y-8 md:space-y-10 order-2 md:order-1">
              <h2 className="text-[10px] tracking-[0.6em] uppercase text-slate-400 italic">The Philosophy</h2>
              <h3 className="text-2xl md:text-4xl font-extralight tracking-tight leading-tight uppercase text-slate-900">Where Engineering <br className="hidden md:block" /> Meets Digital Soul.</h3>
              <div className="space-y-6 text-[12px] md:text-[13px] text-slate-500 font-light leading-relaxed tracking-widest">
                <p>Rooted in Software Engineering and inspired by luxury aesthetics, we bridge the gap between technical complexity and minimalist design.</p>
                <p>Every line of code is optimized; every pixel is placed with intent.</p>
              </div>
            </div>
            <div className="relative aspect-square bg-white border border-slate-100 group overflow-hidden rounded-[2rem] order-1 md:order-2 shadow-sm">
              <img src="/images/about-visual.jpg" alt="Philosophy" className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110 opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 md:py-40 px-6 bg-white">
        <div className="max-w-sm mx-auto text-center">
          <h2 className="text-[10px] tracking-[0.6em] uppercase text-slate-300 mb-16 italic">Connect</h2>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-10 text-left">
              <div className="border-b border-slate-200 focus-within:border-slate-900 transition-all">
                <input name="name" placeholder="FULL NAME" required className="w-full py-3 outline-none text-[10px] tracking-widest uppercase bg-transparent" />
              </div>
              <div className="border-b border-slate-200 focus-within:border-slate-900 transition-all">
                <input name="email" type="email" placeholder="EMAIL ADDRESS" required className="w-full py-3 outline-none text-[10px] tracking-widest uppercase bg-transparent" />
              </div>
              <div className="border-b border-slate-200 focus-within:border-slate-900 transition-all">
                <input name="message" placeholder="MESSAGE" required className="w-full py-3 outline-none text-[10px] tracking-widest uppercase bg-transparent" />
              </div>
              <button type="submit" disabled={loading} className="w-full mt-8 py-5 bg-slate-900 text-white text-[10px] tracking-[0.4em] uppercase hover:bg-black transition-all">
                {loading ? 'TRANSMITTING...' : 'SEND INQUIRY'}
              </button>
            </form>
          ) : (
            <div className="py-10">
              <h2 className="text-lg font-extralight tracking-[0.2em] uppercase mb-4 text-slate-900">Received</h2>
              <button onClick={() => setSubmitted(false)} className="text-[9px] tracking-[0.3em] uppercase underline underline-offset-8 text-slate-400">New Message</button>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 md:py-24 bg-white border-t border-slate-50 text-center px-6">
        <p className="text-[8px] md:text-[9px] tracking-[0.4em] uppercase text-slate-300 leading-loose">
          © 2026 GrowthGrid Agency — Colombo, SL. Built by Maleesh.
        </p>
      </footer>
    </main>
  )
}