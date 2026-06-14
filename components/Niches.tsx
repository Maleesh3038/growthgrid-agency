"use client"
import { motion } from 'framer-motion'

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

const WHATSAPP_NUMBER = "94763038555"
const WHATSAPP_MESSAGE = "Hi GrowthGrid! I'm interested in your web development services."

export default function Niches() {
  return (
    <>
      {/* INDUSTRY EXPERTISE SECTION */}
      <section id="expertise" style={{ background: '#f8fafc', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>

          {/* Header */}
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
            style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{
              display: 'inline-block', padding: '6px 16px', borderRadius: 100,
              fontSize: 12, fontWeight: 600, background: '#ede9fe', color: '#7c3aed', marginBottom: 20
            }}>
              Industry Expertise
            </span>
            <h2 style={{
              fontWeight: 900, letterSpacing: '-0.04em', color: '#0f172a',
              fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 16
            }}>
              Built for Every Industry
            </h2>
            <p style={{ color: '#64748b', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
              We craft tailored digital experiences across multiple industries — each one optimised for real results.
            </p>
          </motion.div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {niches.map((niche, i) => (
              <motion.div
                key={niche.id}
                whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 24 }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(99,102,241,0.12)' }}
                onClick={() => window.open(niche.link, '_blank')}
                style={{
                  background: '#fff', borderRadius: 16, overflow: 'hidden',
                  border: '1px solid #e2e8f0', cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)', transition: 'all 0.3s'
                }}
              >
                {/* Image */}
                <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                  <img src={niche.image} alt={niche.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                    onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.08)'}
                    onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '20px 24px 24px' }}>
                  <h3 style={{ fontWeight: 700, color: '#0f172a', fontSize: 16, marginBottom: 8 }}>
                    {niche.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                    {niche.description}
                  </p>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: 13, fontWeight: 600, color: '#6366f1',
                  }}>
                    View Live Demo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed', bottom: 28, right: 28, zIndex: 999,
          display: 'flex', alignItems: 'center', gap: 10,
          background: '#25d366', color: '#fff',
          padding: '12px 20px', borderRadius: 100,
          textDecoration: 'none', fontWeight: 600, fontSize: 14,
          boxShadow: '0 8px 32px rgba(37,211,102,0.4)',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* WhatsApp Icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Chat with us
      </motion.a>
    </>
  )
}