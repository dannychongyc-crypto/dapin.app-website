import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Features from './components/Features.jsx'
import Stats from './components/Stats.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
