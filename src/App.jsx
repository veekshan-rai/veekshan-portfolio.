import Header from './components/Header';
import Footer from './components/Footer';
import FloatingNav from './components/FloatingNav';
import Hero from './sections/Hero';
import ExperienceSection from './sections/ExperienceSection';
import Projects from './sections/Projects';
import About from './sections/About';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0c0d0e] text-neutral-200 selection:bg-emerald-500 selection:text-black font-sans antialiased overflow-x-hidden pb-16">
      {/* Centered Content Wrapper */}
      <div className="relative w-full max-w-3xl mx-auto min-h-screen">
        
        {/* Left Dotted Vertical Line */}
        <div 
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-[1px] z-50 opacity-30" 
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '100% 4px' }} 
        />
        
        {/* Right Dotted Vertical Line */}
        <div 
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-[1px] z-50 opacity-30" 
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '100% 4px' }} 
        />

        {/* Background Glow Confined Inside Borders */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <div 
            className="absolute left-[-20%] top-0 w-[140%] h-[800px] opacity-40 blur-[120px]"
            style={{ background: 'radial-gradient(circle at 30% 20%, rgba(16, 185, 129, 0.10) 0%, transparent 60%)' }}
          />
          <div 
            className="absolute right-[-20%] top-[40%] w-[140%] h-[800px] opacity-30 blur-[140px]"
            style={{ background: 'radial-gradient(circle at 70% 50%, rgba(16, 185, 129, 0.07) 0%, transparent 60%)' }}
          />
        </div>

        {/* Header */}
        <div className="relative z-20">
          <Header />
        </div>

        {/* Main Single Continuous Container Content */}
        <main className="relative z-10 w-full px-4 sm:px-6 py-4 space-y-10 sm:space-y-12">
          {/* Profile Hero Header */}
          <Hero />

          {/* Thin Section Divider */}
          <div className="section-divider" />

          {/* Experience & Education Section */}
          <ExperienceSection />

          {/* Thin Section Divider */}
          <div className="section-divider" />

          {/* Multi-Column Projects Grid */}
          <Projects />

          {/* Thin Section Divider */}
          <div className="section-divider" />

          {/* Tech Stack & Tools */}
          <About />

          {/* Thin Section Divider */}
          <div className="section-divider" />

          {/* Certifications Section */}
          <Certificates />

          {/* Thin Section Divider */}
          <div className="section-divider" />

          {/* Contact Form Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Fixed Bottom Floating Navigation Bar */}
      <FloatingNav />
    </div>
  );
}
