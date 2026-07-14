import Section from './Section.jsx'
import Reveal from './Reveal.jsx'

export default function Problem() {
  return (
    <Section id="problem" index={1} tag="The problem" className="bg-cream-deep/60">
      <div className="max-w-3xl">
        <Reveal
          as="h2"
          className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
        >
          Running a community is harder than it should be
        </Reveal>
        <Reveal
          as="p"
          delay={100}
          className="mt-6 text-lg leading-relaxed text-muted"
        >
          Placeholder — describe the messy status quo: scattered group chats,
          manual payment chasing, no-shows, and the admin that quietly eats a
          host&rsquo;s time.
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {['Pain point', 'Pain point', 'Pain point'].map((label, i) => (
          <Reveal
            key={i}
            delay={i * 90}
            className="placeholder-box flex h-40 items-center justify-center"
          >
            <span className="eyebrow text-muted/60">{label}</span>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
