import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* 1. Navbar: මෙතන තමයි Logo එකයි Menu එකයි තියෙන්නේ */}
      <Navbar /> 

      {/* 2. Hero Section: අර අපි හදපු ලොකු අකුරු සහිත කොටස */}
      <section id="home">
        <Hero />
      </section>
      
      {/* 3. Services Section: ඔයාගේ වැඩ ගැන විස්තර */}
      <section id="services" className="relative z-20">
        <Services />
      </section>

      {/* 4. About Section: ඔයාගේ Agency එක ගැන */}
      <section id="about" className="relative z-20">
        <About />
      </section>

      {/* 5. Contact Section: Contact Form එක තියෙන තැන */}
      <section id="contact" className="relative z-20">
        <Contact />
      </section>

      {/* 6. Footer: යටම තියෙන කොටස */}
      <Footer />
    </main>
  );
}