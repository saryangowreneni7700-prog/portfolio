import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Marquee from '../components/Marquee'
import Impact from '../components/Impact'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'hsl(228,18%,5%)', color: 'hsl(240,5%,96%)', overflowX: 'hidden', fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Impact />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}