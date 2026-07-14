import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

const STATS = [
  { value: '00', label: 'Stat label' },
  { value: '00', label: 'Stat label' },
  { value: '00', label: 'Stat label' },
  { value: '00', label: 'Stat label' },
]

export default function Stats() {
  return (
    <Section id="proof" index={3} tag="Social proof" className="bg-ink text-cream">
      <div className="max-w-3xl">
        <Reveal
          as="h2"
          className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
        >
          Trusted by hosts building real communities
        </Reveal>
        <Reveal
          as="p"
          delay={100}
          className="mt-6 text-lg leading-relaxed text-cream/70"
        >
          Placeholder — a line of credibility, then the numbers.
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="font-mono text-4xl font-semibold tracking-tight sm:text-5xl">
              {s.value}
            </div>
            <div className="eyebrow mt-3 text-cream/50">{s.label}</div>
          </Reveal>
        ))}
      </div>

      <Reveal
        delay={120}
        className="mt-14 flex h-40 items-center justify-center rounded-2xl border border-dashed border-cream/20"
      >
        <span className="eyebrow text-cream/40">Testimonial placeholder</span>
      </Reveal>
    </Section>
  )
}
