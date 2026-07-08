import Header from './components/Header';
import FloatingNav from './components/FloatingNav';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-black overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <FloatingNav />
    </div>
  );
}
