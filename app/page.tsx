"use client"
import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import Niches from '@/components/Niches'

const projects = [
  {
    id: 1,
    name: 'Drivo LK',
    url: 'https://www.thedrivo.com',
    displayUrl: 'thedrivo.com',
    tag: 'Car Rental Platform',
    desc: "Sri Lanka's #1 vehicle rental marketplace",
    image: '/images/drivo-ss.png',
    accent: '#1d4ed8',
    size: 'large',
  },
  {
    id: 2,
    name: 'Fernando Tours',
    url: 'https://www.fernandotourslk.com',
    displayUrl: 'fernandotourslk.com',
    tag: 'Travel Agency',
    desc: 'Sri Lanka tours · Est. 1990',
    image: '/images/fernando-ss.png',
    accent: '#16a34a',
    size: 'small',
  },
  {
    id: 3,
    name: 'Honeyland Tours',
    url: 'https://www.honeylandtours.com',
    displayUrl: 'honeylandtours.com',
    tag: 'Tour Operator',
    desc: 'Luxury private travel · Sri Lanka',
    image: '/images/honeyland-ss.png',
    accent: '#d97706',
    size: 'small',
  },
]

function BrowserMockup({ project, large = false }: { project: typeof projects[0]; large?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -8, borderColor: 'rgba(255,255,255,0.2)' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      onClick={() => window.open(project.url, '_blank')}
      className="group cursor-pointer rounded-2xl overflow-hidden"
      style={{
        background: '#0f172a',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 0 0 rgba(0,0,0,0)',
      }}
    >
      {/* Browser bar */}
      <div style={{ background: '#1e293b', borderBottom: '1px solid rgba(255,255,255,0.06)' }} className="flex items-center gap-3 px-4 py-3">
        <div className="flex gap-[5px]">
          <span className="w-[9px] h-[9px] rounded-full bg-red-500 block" />
          <span className="w-[9px] h-[9px] rounded-full bg-yellow-400 block" />
          <span className="w-[9px] h-[9px] rounded-full bg-green-500 block" />
        </div>
        <div style={{ background: '#0f172a', borderRadius: 5 }} className="flex-1 px-3 py-1">
          <span className="text-[10px] text-slate-500 font-mono">{project.displayUrl}</span>
        </div>
      </div>

      {/* Screen */}
      <div className="relative overflow-hidden" style={{ height: large ? 360 : 260 }}>
        {/* Scrolling screenshot */}
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full absolute top-0 left-0"
          style={{ transformOrigin: 'top center' }}
          animate={{ y: ['0%', '-65%'] }}
          transition={{
            duration: large ? 24 : 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to top, rgba(2,6,23,1) 0%, rgba(2,6,23,0.55) 45%, transparent 75%)',
          }}
        />

        {/* Project info */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
          <span
            className="inline-block text-[9px] tracking-[0.3em] uppercase px-3 py-1 rounded-full mb-3"
            style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#64748b' }}
          >
            {project.tag}
          </span>
          <div className="text-white font-bold tracking-tight mb-1" style={{ fontSize: large ? 22 : 17 }}>
            {project.name}
          </div>
          <div className="text-[10px] text-slate-500 uppercase tracking-widest">{project.desc}</div>
          <div
            className="flex items-center gap-2 mt-3 text-[10px] tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
          >
            Visit Site
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

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
    <main className="min-h-screen bg-[#020617] text-slate-100 overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-5"
        style={{ background: 'rgba(2,6,23,0.75)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <motion.a href="/" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <img src="/images/logo.png" alt="GrowthGrid" className="h-7 w-auto brightness-200 object-contain" />
        </motion.a>

        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Work', 'Expertise', 'About'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-[10px] tracking-[0.35em] uppercase text-slate-500 hover:text-white transition-colors duration-300">
              {item}
            </a>
          ))}
          <a href="#contact"
            className="text-[10px] tracking-[0.3em] uppercase px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-400">
            Contact
          </a>
        </div>

        <button className="md:hidden text-[9px] tracking-widest uppercase text-slate-400" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: 'rgba(2,6,23,0.97)' }}>
            {['Services', 'Work', 'Expertise', 'About', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-2xl tracking-[0.4em] uppercase text-white font-light">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-20"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2.5 }}
          css={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('/images/hero-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "url('/images/hero-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 w-full pt-20 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-[9px] tracking-[0.8em] uppercase text-slate-600 font-bold">
            Digital Agency · Sri Lanka
          </motion.p>

          <motion.h1
            initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }}
            className="font-black text-white leading-none tracking-tighter"
            style={{ fontSize: 'clamp(3rem, 12vw, 8rem)' }}>
            GROWTH<span style={{ color: '#1e293b' }}>GRID</span><span style={{ color: '#334155' }}>.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
            className="max-w-md mx-auto text-[11px] text-slate-500 tracking-[0.4em] uppercase leading-loose">
            Architecting Digital Identities Through<br />
            <span className="text-slate-300">High-Performance Engineering</span>
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="pt-8 flex gap-6 justify-center">
            <a href="#work"
              className="text-[10px] tracking-[0.5em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-all duration-300">
              View Work
            </a>
            <a href="#contact"
              className="text-[10px] tracking-[0.5em] uppercase text-slate-500 border-b border-slate-700 pb-1 hover:text-white hover:border-white transition-all duration-300">
              Start Project
            </a>
          </motion.div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[8px] tracking-[0.5em] uppercase text-slate-700">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-[1px] h-8 bg-gradient-to-b from-slate-700 to-transparent" />
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="py-5 bg-black overflow-hidden flex whitespace-nowrap relative" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, black, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, black, transparent)' }} />
        {[0, 1].map(i => (
          <div key={i} className="flex gap-12 opacity-25" style={{ animation: 'marquee 35s linear infinite' }}>
            {['PREMIUM ENGINEERING', 'NEXT.JS & REACT', 'UX/UI MASTERY', 'DATA-DRIVEN SEO', 'ZERO TEMPLATES', 'GROWTH OPTIMIZED', 'SUPABASE BACKEND', 'VERCEL DEPLOYMENT'].map(w => (
              <span key={w} className="text-lg font-black tracking-[0.5em] uppercase text-slate-400 ml-12">{w}</span>
            ))}
          </div>
        ))}
      </div>

      {/* ── SERVICES ── */}
      <section id="services" className="py-32 md:py-48 px-6 bg-[#020617]">
        <div className="max-w-6xl mx-auto">
          <motion.p whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}
            className="text-[9px] tracking-[1em] uppercase text-slate-700 mb-20 text-center font-bold">
            Capabilities
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ gridAutoRows: '380px' }}>
            {[
              {
                span: 'md:col-span-2', title: 'Digital Engineering', desc: 'Custom-built React & Next.js ecosystems for high-speed performance and scalability.',
                img: '/images/web.jpg', opacity: 'opacity-30',
              },
              {
                span: '', title: '99%', desc: 'Speed Score', sub: 'Optimised at root level.', stat: true,
              },
              {
                span: '', title: 'Social Strategy', desc: 'Data-driven growth.', img: '/images/market.jpg', opacity: 'opacity-20',
              },
              {
                span: 'md:col-span-2', title: 'End-to-End Management', desc: 'Architecture, security, updates — fully handled.',
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 24 }} transition={{ delay: i * 0.08 }}
                className={`${s.span} relative group overflow-hidden rounded-2xl p-8 flex flex-col ${s.stat ? 'items-center justify-center text-center' : 'justify-end'}`}
                style={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.06)' }}>
                {s.img && <img src={s.img} className={`absolute inset-0 w-full h-full object-cover ${s.opacity} grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700`} />}
                {s.stat ? (
                  <>
                    <div className="text-6xl font-black text-white mb-2">99<span className="text-lg text-slate-600 font-light">%</span></div>
                    <div className="text-[10px] tracking-[0.4em] uppercase text-slate-400">{s.title === '99%' ? 'Speed Score' : s.title}</div>
                    <div className="text-[9px] text-slate-600 mt-3 tracking-widest uppercase">{s.sub}</div>
                  </>
                ) : (
                  <div className="relative z-10">
                    <h3 className="text-xl tracking-widest uppercase font-light text-white mb-3">{s.title}</h3>
                    <p className="text-[11px] text-slate-500 tracking-widest uppercase leading-loose max-w-sm">{s.desc}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK / PROJECTS ── */}
      <section id="work" className="py-32 md:py-48 px-6 bg-black" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.p whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}
            className="text-[9px] tracking-[1em] uppercase text-slate-700 mb-4 text-center font-bold">
            Selected Work
          </motion.p>
          <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
            className="text-center font-black text-white tracking-tighter mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Projects We've Built
          </motion.h2>
          <motion.p whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.2 }}
            className="text-center text-[11px] text-slate-600 tracking-widest uppercase mb-20">
            Real businesses · Real results
          </motion.p>

          {/* Stats row */}
          <div className="flex justify-center gap-16 mb-20 pb-16" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            {[['3', 'Live Projects'], ['99', 'Avg Speed Score'], ['100%', 'Client Satisfaction']].map(([n, l]) => (
              <div key={l} className="text-center">
                <div className="text-3xl font-black text-white tracking-tighter">{n}</div>
                <div className="text-[9px] tracking-[0.4em] uppercase text-slate-600 mt-1">{l}</div>
              </div>
            ))}
          </div>

          {/* Large project */}
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} className="mb-6">
            <BrowserMockup project={projects[0]} large />
          </motion.div>

          {/* Two small projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(1).map((p, i) => (
              <motion.div key={p.id} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ delay: i * 0.1 }}>
                <BrowserMockup project={p} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <div id="expertise" className="bg-[#020617] py-20" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <Niches />
      </div>

      {/* ── ABOUT ── */}
      <section id="about" className="py-32 md:py-48 px-6 bg-black" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -30 }} className="flex-1 space-y-10">
            <p className="text-[9px] tracking-[0.8em] uppercase text-slate-700 font-bold">Philosophy</p>
            <h3 className="font-extralight tracking-tighter leading-tight uppercase text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Engineering<br />Meets <em className="text-slate-600 not-italic">Digital Soul.</em>
            </h3>
            <div className="space-y-5 text-[13px] text-slate-500 font-light leading-relaxed tracking-widest uppercase">
              <p>Rooted in <span className="text-white">Software Engineering</span>, inspired by luxury aesthetics.</p>
              <p>Every line of code optimised. Every pixel placed with intent.</p>
              <p>We don't use templates. We build what your brand deserves.</p>
            </div>
            <a href="#contact"
              className="inline-flex items-center gap-3 text-[10px] tracking-[0.5em] uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-all duration-300">
              Start a Project
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </motion.div>

          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 30 }}
            className="flex-1 aspect-square rounded-2xl overflow-hidden grayscale opacity-40"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            <img src="/images/about-visual.jpg" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-32 md:py-48 px-6 bg-[#020617]" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-sm mx-auto">
          <p className="text-[9px] tracking-[1em] uppercase text-slate-700 mb-6 font-bold text-center">Connect</p>
          <h2 className="text-center font-black text-white tracking-tighter mb-16" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Start a Project
          </h2>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-10">
              {[
                { name: 'name', placeholder: 'Full Name' },
                { name: 'email', placeholder: 'Email Address' },
                { name: 'message', placeholder: 'Tell us about your project' },
              ].map(f => (
                <div key={f.name} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                  className="focus-within:border-white/30 transition-all">
                  <input
                    name={f.name} required
                    placeholder={f.placeholder}
                    className="w-full py-4 outline-none text-[11px] tracking-widest uppercase bg-transparent text-white placeholder:text-slate-700"
                  />
                </div>
              ))}
              <button type="submit" disabled={loading}
                className="w-full py-5 bg-white text-black text-[10px] tracking-[0.5em] font-bold uppercase hover:invert transition-all duration-300 rounded-sm">
                {loading ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          ) : (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="py-16 text-center rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="text-2xl text-white font-light tracking-widest mb-2">Received.</div>
              <div className="text-[10px] text-slate-600 tracking-widest uppercase">We'll be in touch shortly.</div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-16 bg-black text-center px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="text-[9px] tracking-[0.5em] uppercase text-slate-700">
          © 2026 GrowthGrid Agency — Engineered by Maleesh Amendra
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        .animate-marquee { animation: marquee 35s linear infinite; }
        * { scroll-behavior: smooth; }
      `}</style>
    </main>
  )
}