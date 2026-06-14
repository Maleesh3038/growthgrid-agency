"use client"
import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import Niches from '@/components/Niches'

const projects = [
  { id: 1, name: 'Drivo LK', url: 'https://www.thedrivo.com', displayUrl: 'thedrivo.com', tag: 'Car Rental Platform', desc: "Sri Lanka's #1 vehicle rental marketplace", image: '/images/drivo-ss.png', color: '#3b82f6' },
  { id: 2, name: 'Fernando Tours', url: 'https://www.fernandotourslk.com', displayUrl: 'fernandotourslk.com', tag: 'Travel Agency', desc: 'Sri Lanka tours · Est. 1990', image: '/images/fernando-ss.png', color: '#22c55e' },
  { id: 3, name: 'Honeyland Tours', url: 'https://www.honeylandtours.com', displayUrl: 'honeylandtours.com', tag: 'Tour Operator', desc: 'Luxury private travel · Sri Lanka', image: '/images/honeyland-ss.png', color: '#f59e0b' },
]

const services = [
  { icon: '⚡', title: 'Web Engineering', desc: 'Custom React & Next.js websites built for speed, SEO, and conversions.' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'User-first interfaces that look stunning and turn visitors into customers.' },
  { icon: '📈', title: 'Social Strategy', desc: 'Data-driven growth for Instagram, Facebook & LinkedIn.' },
  { icon: '🔧', title: 'Maintenance', desc: 'Ongoing support, security updates, and performance monitoring.' },
]

function BrowserMockup({ project, large = false }: { project: typeof projects[0]; large?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(0,0,0,0.25)' }}
      transition={{ duration: 0.3 }}
      onClick={() => window.open(project.url, '_blank')}
      className="group cursor-pointer rounded-2xl overflow-hidden"
      style={{ background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
    >
      <div style={{ background: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }} className="flex items-center gap-3 px-4 py-3">
        <div className="flex gap-[5px]">
          <span style={{ width:9, height:9, borderRadius:'50%', background:'#f87171', display:'block' }} />
          <span style={{ width:9, height:9, borderRadius:'50%', background:'#fbbf24', display:'block' }} />
          <span style={{ width:9, height:9, borderRadius:'50%', background:'#4ade80', display:'block' }} />
        </div>
        <div style={{ background: '#fff', borderRadius: 6, border: '1px solid #e2e8f0', flex:1, padding:'4px 12px' }}>
          <span style={{ fontSize:10, fontFamily:'monospace', color:'#94a3b8' }}>{project.displayUrl}</span>
        </div>
      </div>
      <div className="relative overflow-hidden" style={{ height: large ? 340 : 240 }}>
        <motion.img src={project.image} alt={project.name} style={{ width:'100%', position:'absolute', top:0, left:0, transformOrigin:'top center' }}
          animate={{ y: ['0%', '-62%'] }}
          transition={{ duration: large ? 22 : 18, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(15,23,42,0.97) 0%,rgba(15,23,42,0.55) 40%,transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ padding: '1.25rem 1.5rem' }}>
          <span style={{ display:'inline-block', fontSize:9, fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', padding:'3px 10px', borderRadius:100, marginBottom:8, background:`${project.color}22`, color:project.color, border:`1px solid ${project.color}44` }}>
            {project.tag}
          </span>
          <div style={{ color:'#fff', fontWeight:700, marginBottom:4, fontSize: large ? 20 : 16 }}>{project.name}</div>
          <div style={{ color:'#94a3b8', fontSize:12 }}>{project.desc}</div>
          <div className="group-hover:opacity-100 group-hover:translate-y-0" style={{ display:'flex', alignItems:'center', gap:6, marginTop:10, fontSize:12, fontWeight:600, opacity:0, transform:'translateY(4px)', transition:'all 0.3s', color:project.color }}>
            View Live Site
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
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
    if (error) { alert('Error: ' + error.message) } else { setSubmitted(true); form.reset() }
  }

  const inputStyle = {
    width:'100%', padding:'12px 16px', borderRadius:12, outline:'none',
    background:'#0f172a', border:'1px solid rgba(255,255,255,0.1)',
    color:'#f8fafc', fontSize:15, display:'block',
  }

  return (
    <main style={{ fontFamily:"'Inter',sans-serif", background:'#0f172a', color:'#f8fafc', minHeight:'100vh', overflowX:'hidden' }}>

      {/* NAV */}
      <nav style={{ background:'rgba(15,23,42,0.92)', backdropFilter:'blur(20px)', borderBottom:'1px solid rgba(255,255,255,0.07)', position:'fixed', top:0, width:'100%', zIndex:50 }}>
        <div style={{ maxWidth:1152, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'16px 24px' }}>
          <a href="/"><img src="/images/logo.png" alt="GrowthGrid" style={{ height:32, width:'auto', objectFit:'contain', filter:'brightness(200%)' }} /></a>
          <div className="hidden md:flex" style={{ alignItems:'center', gap:4 }}>
            {['Services','Work','About'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ padding:'8px 16px', borderRadius:10, fontSize:14, color:'#94a3b8', textDecoration:'none', transition:'all 0.2s' }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.color='#fff';(e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.06)'}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.color='#94a3b8';(e.currentTarget as HTMLElement).style.background='transparent'}}>
                {item}
              </a>
            ))}
            <a href="#contact" style={{ marginLeft:12, padding:'8px 20px', borderRadius:12, fontSize:14, fontWeight:600, color:'#fff', textDecoration:'none', background:'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>
              Get in Touch
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" style={{ padding:8, borderRadius:8, background:'transparent', border:'none', cursor:'pointer', color:'#94a3b8' }}>
            {menuOpen
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            }
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            style={{ background:'rgba(15,23,42,0.98)', position:'fixed', inset:0, zIndex:40, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:32 }}>
            {['Services','Work','About','Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={()=>setMenuOpen(false)}
                style={{ fontSize:28, fontWeight:300, color:'#fff', textDecoration:'none' }}>{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section ref={heroRef} style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'0 24px', overflow:'hidden' }}>
        <motion.div style={{ y:heroY, backgroundImage:"url('/images/hero-bg.jpg')", backgroundSize:'cover', backgroundPosition:'center', position:'absolute', inset:0 }}
          className="grayscale" initial={{ scale:1.06, opacity:0 }} animate={{ scale:1, opacity:0.12 }} transition={{ duration:2 }} />
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.18) 0%, transparent 70%)' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(15,23,42,0.3), rgba(15,23,42,0.8))' }} />

        <motion.div style={{ opacity:heroOpacity, position:'relative', zIndex:10, paddingTop:96, maxWidth:896, width:'100%' }}>
          <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}
            style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'8px 16px', borderRadius:100, marginBottom:32, fontSize:12, fontWeight:500, background:'rgba(99,102,241,0.12)', border:'1px solid rgba(99,102,241,0.25)', color:'#a5b4fc' }}>
            <span style={{ width:8, height:8, borderRadius:'50%', background:'#4ade80', display:'inline-block', animation:'pulse 2s infinite' }} />
            Available for new projects
          </motion.div>

          <motion.h1 initial={{ y:40, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration:0.8, delay:0.3 }}
            style={{ fontWeight:900, lineHeight:1, letterSpacing:'-0.04em', marginBottom:24, color:'#fff', fontSize:'clamp(2.8rem,9vw,7rem)' }}>
            We Build Websites<br />
            <span style={{ background:'linear-gradient(135deg,#6366f1,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
              That Grow Business
            </span>
          </motion.h1>

          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.7 }}
            style={{ color:'#94a3b8', marginBottom:40, maxWidth:520, margin:'0 auto 40px', lineHeight:1.8, fontSize:'clamp(1rem,2vw,1.15rem)' }}>
            High-performance, custom-engineered websites for businesses that want to stand out and convert visitors into customers.
          </motion.p>

          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1 }} style={{ display:'flex', flexWrap:'wrap', gap:16, justifyContent:'center' }}>
            <a href="#work" style={{ padding:'16px 32px', borderRadius:12, fontWeight:600, color:'#fff', textDecoration:'none', background:'linear-gradient(135deg,#6366f1,#8b5cf6)', fontSize:15 }}>
              View Our Work
            </a>
            <a href="#contact" style={{ padding:'16px 32px', borderRadius:12, fontWeight:600, color:'#e2e8f0', textDecoration:'none', border:'1px solid rgba(255,255,255,0.15)', fontSize:15 }}>
              Start a Project →
            </a>
          </motion.div>

          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.2 }}
            style={{ display:'flex', justifyContent:'center', gap:48, marginTop:80, paddingTop:48, borderTop:'1px solid rgba(255,255,255,0.07)' }}>
            {[['3+','Live Projects'],['99','Speed Score'],['100%','Satisfaction']].map(([n,l]) => (
              <div key={l} style={{ textAlign:'center' }}>
                <div style={{ fontWeight:900, color:'#fff', fontSize:'clamp(1.5rem,3vw,2.2rem)' }}>{n}</div>
                <div style={{ fontSize:12, color:'#64748b', marginTop:4 }}>{l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ background:'#fff', color:'#0f172a', padding:'96px 24px' }}>
        <div style={{ maxWidth:1152, margin:'0 auto' }}>
          <motion.div whileInView={{ opacity:1, y:0 }} initial={{ opacity:0, y:20 }} style={{ textAlign:'center', marginBottom:64 }}>
            <span style={{ display:'inline-block', padding:'6px 16px', borderRadius:100, fontSize:12, fontWeight:600, background:'#ede9fe', color:'#7c3aed', marginBottom:20 }}>What We Do</span>
            <h2 style={{ fontWeight:900, letterSpacing:'-0.04em', marginBottom:16, color:'#0f172a', fontSize:'clamp(2rem,4vw,3rem)' }}>Services Built for Growth</h2>
            <p style={{ color:'#64748b', fontSize:16, maxWidth:480, margin:'0 auto' }}>Everything your business needs to thrive online — under one roof.</p>
          </motion.div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:20 }}>
            {services.map((s,i) => (
              <motion.div key={s.title} whileInView={{ opacity:1, y:0 }} initial={{ opacity:0, y:24 }} transition={{ delay:i*0.1 }}
                whileHover={{ y:-4, boxShadow:'0 12px 40px rgba(99,102,241,0.1)' }}
                style={{ padding:24, borderRadius:16, background:'#f8fafc', border:'1px solid #e2e8f0', transition:'all 0.3s' }}>
                <div style={{ fontSize:32, marginBottom:16 }}>{s.icon}</div>
                <h3 style={{ fontWeight:700, color:'#0f172a', fontSize:16, marginBottom:8 }}>{s.title}</h3>
                <p style={{ color:'#64748b', fontSize:14, lineHeight:1.7 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ background:'#0f172a', padding:'96px 24px' }}>
        <div style={{ maxWidth:960, margin:'0 auto' }}>
          <motion.div whileInView={{ opacity:1, y:0 }} initial={{ opacity:0, y:20 }} style={{ textAlign:'center', marginBottom:64 }}>
            <span style={{ display:'inline-block', padding:'6px 16px', borderRadius:100, fontSize:12, fontWeight:600, background:'rgba(99,102,241,0.15)', color:'#a5b4fc', border:'1px solid rgba(99,102,241,0.2)', marginBottom:20 }}>Our Work</span>
            <h2 style={{ fontWeight:900, letterSpacing:'-0.04em', marginBottom:16, color:'#fff', fontSize:'clamp(2rem,4vw,3rem)' }}>Projects We've Built</h2>
            <p style={{ color:'#64748b', fontSize:16 }}>Real businesses. Real results. Click any project to visit the live site.</p>
          </motion.div>
          <motion.div whileInView={{ opacity:1, y:0 }} initial={{ opacity:0, y:30 }} style={{ marginBottom:24 }}>
            <BrowserMockup project={projects[0]} large />
          </motion.div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:24 }}>
            {projects.slice(1).map((p,i) => (
              <motion.div key={p.id} whileInView={{ opacity:1, y:0 }} initial={{ opacity:0, y:30 }} transition={{ delay:i*0.1 }}>
                <BrowserMockup project={p} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <div id="expertise" style={{ background:'#f8fafc' }}><Niches /></div>

      {/* ABOUT */}
      <section id="about" style={{ background:'#fff', color:'#0f172a', padding:'96px 24px' }}>
        <div style={{ maxWidth:1152, margin:'0 auto', display:'flex', flexWrap:'wrap', gap:64, alignItems:'center' }}>
          <motion.div whileInView={{ opacity:1, x:0 }} initial={{ opacity:0, x:-30 }} style={{ flex:1, minWidth:280 }}>
            <span style={{ display:'inline-block', padding:'6px 16px', borderRadius:100, fontSize:12, fontWeight:600, background:'#ede9fe', color:'#7c3aed', marginBottom:24 }}>About Us</span>
            <h2 style={{ fontWeight:900, letterSpacing:'-0.04em', lineHeight:1.1, color:'#0f172a', fontSize:'clamp(2rem,4vw,3rem)', marginBottom:24 }}>
              Engineering Meets<br />
              <span style={{ background:'linear-gradient(135deg,#6366f1,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Creative Vision</span>
            </h2>
            <p style={{ color:'#64748b', fontSize:16, lineHeight:1.8, marginBottom:16 }}>Rooted in software engineering and inspired by modern aesthetics, GrowthGrid builds digital experiences that are fast, beautiful, and built to grow your business.</p>
            <p style={{ color:'#64748b', fontSize:16, lineHeight:1.8, marginBottom:32 }}>No templates. No shortcuts. Every project is custom-built from scratch.</p>
            <a href="#contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'12px 24px', borderRadius:12, fontWeight:600, color:'#fff', textDecoration:'none', background:'linear-gradient(135deg,#6366f1,#8b5cf6)', fontSize:15 }}>
              Work With Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </motion.div>
          <motion.div whileInView={{ opacity:1, x:0 }} initial={{ opacity:0, x:30 }}
            style={{ flex:1, minWidth:280, borderRadius:16, overflow:'hidden', border:'1px solid #e2e8f0', boxShadow:'0 20px 60px rgba(0,0,0,0.08)', aspectRatio:'16/10' }}>
            <img src="/images/about-visual.jpg" style={{ width:'100%', height:'100%', objectFit:'cover' }} alt="About GrowthGrid" />
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background:'#0f172a', padding:'96px 24px' }}>
        <div style={{ maxWidth:520, margin:'0 auto' }}>
          <motion.div whileInView={{ opacity:1, y:0 }} initial={{ opacity:0, y:20 }} style={{ textAlign:'center', marginBottom:48 }}>
            <span style={{ display:'inline-block', padding:'6px 16px', borderRadius:100, fontSize:12, fontWeight:600, background:'rgba(99,102,241,0.15)', color:'#a5b4fc', border:'1px solid rgba(99,102,241,0.2)', marginBottom:20 }}>Get in Touch</span>
            <h2 style={{ fontWeight:900, letterSpacing:'-0.04em', color:'#fff', marginBottom:12, fontSize:'clamp(2rem,4vw,3rem)' }}>Start Your Project</h2>
            <p style={{ color:'#64748b' }}>Tell us about your project and we'll get back to you within 24 hours.</p>
          </motion.div>
          <motion.div whileInView={{ opacity:1, y:0 }} initial={{ opacity:0, y:20 }}
            style={{ padding:32, borderRadius:16, background:'#1e293b', border:'1px solid rgba(255,255,255,0.07)' }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:16 }}>
                <input name="name" type="text" required placeholder="Your Full Name" style={inputStyle}
                  onFocus={e=>(e.target as HTMLInputElement).style.borderColor='rgba(99,102,241,0.6)'}
                  onBlur={e=>(e.target as HTMLInputElement).style.borderColor='rgba(255,255,255,0.1)'} />
                <input name="email" type="email" required placeholder="Email Address" style={inputStyle}
                  onFocus={e=>(e.target as HTMLInputElement).style.borderColor='rgba(99,102,241,0.6)'}
                  onBlur={e=>(e.target as HTMLInputElement).style.borderColor='rgba(255,255,255,0.1)'} />
                <textarea name="message" required rows={4} placeholder="Tell us about your project..."
                  style={{ ...inputStyle, resize:'none' }}
                  onFocus={e=>(e.target as HTMLTextAreaElement).style.borderColor='rgba(99,102,241,0.6)'}
                  onBlur={e=>(e.target as HTMLTextAreaElement).style.borderColor='rgba(255,255,255,0.1)'} />
                <button type="submit" disabled={loading}
                  style={{ width:'100%', padding:'16px', borderRadius:12, fontWeight:600, color:'#fff', border:'none', cursor:'pointer', background:'linear-gradient(135deg,#6366f1,#8b5cf6)', fontSize:15, opacity: loading ? 0.6 : 1 }}>
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            ) : (
              <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} style={{ padding:'64px 0', textAlign:'center' }}>
                <div style={{ fontSize:48, marginBottom:16 }}>✅</div>
                <div style={{ fontSize:20, fontWeight:700, color:'#fff', marginBottom:8 }}>Message Received!</div>
                <div style={{ color:'#64748b' }}>We'll get back to you within 24 hours.</div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:'#020617', borderTop:'1px solid rgba(255,255,255,0.06)', padding:'40px 24px' }}>
        <div style={{ maxWidth:1152, margin:'0 auto', display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', gap:24 }}>
          <img src="/images/logo.png" alt="GrowthGrid" style={{ height:28, width:'auto', filter:'brightness(200%)', objectFit:'contain' }} />
          <div style={{ display:'flex', gap:24 }}>
            {['Services','Work','About','Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize:14, color:'#475569', textDecoration:'none' }}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color='#94a3b8'}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color='#475569'}>
                {item}
              </a>
            ))}
          </div>
          <div style={{ fontSize:14, color:'#334155' }}>© 2026 GrowthGrid Agency</div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
        * { scroll-behavior: smooth; box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; }
        input::placeholder, textarea::placeholder { color: #475569; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
      `}</style>
    </main>
  )
}