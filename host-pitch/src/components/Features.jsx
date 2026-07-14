import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

// 6 feature groups (room for a 7th) — content to be filled in later.
const FEATURES = [
  'Feature group',
  'Feature group',
  'Feature group',
  'Feature group',
  'Feature group',
  'Feature group',
]

export default function Features() {
  return (
    <Section id="features" index={2} tag="Features">
      <div className="max-w-3xl">
        <Reveal
          as="h2"
          className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
        >
          Everything a host needs, in one place
        </Reveal>
        <Reveal
          as="p"
          delay={100}
          className="mt-6 text-lg leading-relaxed text-muted"
        >
          Placeholder intro for the feature groups below.
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((label, i) => (
          <Reveal
            key={i}
            delay={(i % 3) * 90}
            className="group rounded-2xl border border-line bg-cream p-7 transition-all hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft">
              <span className="eyebrow text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="text-lg font-bold text-ink">{label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Short placeholder description of what this feature group does for
              the host.
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
