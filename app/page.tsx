"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
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
    <main className="min-h-screen bg-[#020617] text-slate-100 font-light selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* GLASSMORPHISM NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5 px-4 md:px-8 py-4 md:py-6 flex justify-between items-center">
        <motion.a 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          href="/" 
          className="transition-opacity hover:opacity-70"
        >
          <img src="/images/logo.png" alt="GrowthGrid" className="h-6 md:h-8 w-auto object-contain brightness-200" />
        </motion.a>
        
        <div className="hidden md:flex space-x-12 text-[10px] tracking-[0.4em] uppercase font-medium text-slate-400">
          {['Services', 'Expertise', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-all">{item}</a>
          ))}
          <a href="#contact" className="px-6 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-500">Contact</a>
        </div>
        <div className="md:hidden text-[9px] tracking-widest uppercase font-bold text-slate-400">Menu</div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0 bg-cover bg-center grayscale" 
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        ></motion.div>
        
        <div className="relative z-10 space-y-8 w-full pt-20">
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[14vw] md:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl"
          >
            GROWTHGRID<span className="text-slate-500">.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-sm md:max-w-xl mx-auto text-[10px] md:text-[12px] text-slate-400 tracking-[0.5em] font-light leading-relaxed uppercase"
          >
            Architecting Digital Identities Through <span className="text-white font-normal">High-Performance Engineering</span>.
          </motion.p>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="pt-12">
            <a href="#contact" className="group relative text-[10px] tracking-[0.6em] uppercase text-white pb-3 transition-all">
              Initiate Project
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* REFINED TECH MARQUEE */}
      <div className="py-6 md:py-8 bg-black border-y border-white/5 overflow-hidden flex whitespace-nowrap relative">
        <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee flex space-x-16 opacity-30">
          {[
            'PREMIUM WEB ENGINEERING', 'LIGHTNING-FAST SPEED', 'UX/UI MASTERY', 
            'DATA-DRIVEN SEO', 'CUSTOM CODE NO TEMPLATES', 'GROWTH OPTIMIZED'
          ].map((word) => (
            <span key={word} className="text-xl md:text-2xl font-black tracking-[0.6em] uppercase text-slate-400">
              {word}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex space-x-16 opacity-30 ml-16">
          {[
            'PREMIUM WEB ENGINEERING', 'LIGHTNING-FAST SPEED', 'UX/UI MASTERY', 
            'DATA-DRIVEN SEO', 'CUSTOM CODE NO TEMPLATES', 'GROWTH OPTIMIZED'
          ].map((word) => (
            <span key={word} className="text-xl md:text-2xl font-black tracking-[0.6em] uppercase text-slate-400">
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* BENTO GRID SERVICES */}
      <section id="services" className="py-32 md:py-48 px-6 bg-[#020617]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[10px] tracking-[1em] uppercase text-slate-600 mb-24 text-center font-bold italic">Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
              className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 p-8"
            >
              <div className="relative z-10 h-full flex flex-col justify-end space-y-4">
                <h3 className="text-2xl tracking-widest uppercase font-light text-white">Digital Engineering</h3>
                <p className="text-[11px] text-slate-400 max-w-xs tracking-widest uppercase leading-relaxed">Custom-built ecosystems with React & Next.js for high-speed performance.</p>
              </div>
              <img src="/images/web.jpg" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 grayscale group-hover:grayscale-0" />
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
              className="relative group overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 p-8 flex flex-col justify-center items-center text-center"
            >
              <div className="text-5xl font-bold text-white mb-4">99<span className="text-sm text-slate-500 font-light">%</span></div>
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-slate-300">Speed Score</h3>
              <p className="text-[9px] text-slate-500 mt-4 tracking-widest uppercase leading-loose">Optimized at root level.</p>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
              className="relative group overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 p-8"
            >
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-lg tracking-widest uppercase font-light text-white">Social Strategy</h3>
                <p className="text-[10px] text-slate-500 mt-2 tracking-widest uppercase">Data-driven growth.</p>
              </div>
              <img src="/images/market.jpg" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale transition-all duration-500" />
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
              className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 p-8 flex items-center"
            >
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl tracking-[0.3em] uppercase font-light text-white italic">End-to-End Management</h3>
                <p className="text-[11px] text-slate-400 max-w-md tracking-widest uppercase">We handle the architecture, security, and updates.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <div id="expertise" className="bg-black py-20 border-y border-white/5">
        <Niches />
      </div>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 md:py-48 px-6 bg-[#020617]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -30 }} className="flex-1 space-y-10">
            <h2 className="text-[10px] tracking-[0.8em] uppercase text-slate-600 font-bold">Philosophy</h2>
            <h3 className="text-3xl md:text-5xl font-extralight tracking-tighter leading-tight uppercase text-white">Engineering <br /> Meets <span className="italic text-slate-500">Digital Soul.</span></h3>
            <div className="space-y-6 text-[13px] text-slate-400 font-light leading-relaxed tracking-widest uppercase">
              <p>Rooted in <span className="text-white">Software Engineering</span> and inspired by luxury aesthetics.</p>
              <p>Every line of code is optimized; every pixel is placed with intent.</p>
            </div>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 30 }} className="flex-1 relative aspect-square border border-white/10 rounded-2xl overflow-hidden grayscale opacity-50">
            <img src="/images/about-visual.jpg" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 md:py-48 px-6 bg-black">
        <div className="max-w-sm mx-auto text-center">
          <h2 className="text-[10px] tracking-[1em] uppercase text-slate-700 mb-20 font-bold">Connect</h2>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-12 text-left">
              {['name', 'email', 'message'].map((f) => (
                <div key={f} className="border-b border-white/10 focus-within:border-white transition-all">
                  <input 
                    name={f} required 
                    placeholder={f.toUpperCase().replace('NAME', 'FULL NAME')} 
                    className="w-full py-4 outline-none text-[10px] tracking-widest uppercase bg-transparent text-white" 
                  />
                </div>
              ))}
              <button type="submit" disabled={loading} className="w-full mt-12 py-5 bg-white text-black text-[10px] tracking-[0.5em] font-bold uppercase hover:invert transition-all">
                {loading ? 'TRANSMITTING...' : 'SEND INQUIRY'}
              </button>
            </form>
          ) : (
            <div className="py-20 border border-white/5 rounded-2xl text-white uppercase tracking-widest">Received.</div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-black border-t border-white/5 text-center px-6 text-[9px] tracking-[0.5em] uppercase text-slate-600">
        © 2026 GrowthGrid Agency — Engineered by Maleesh Amendra.
      </footer>

      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
      `}</style>
    </main>
  )
}