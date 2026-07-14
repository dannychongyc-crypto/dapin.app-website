import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden scroll-mt-24 pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      {/* soft warm glow behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-accent-soft blur-3xl opacity-70"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal as="p" className="eyebrow mb-6">
            Dap IN for Hosts
          </Reveal>

          <Reveal
            as="h1"
            delay={60}
            className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Hero headline goes here
          </Reveal>

          <Reveal
            as="p"
            delay={140}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Subheadline placeholder — a warm, confident one-liner about giving
            community hosts everything they need to run sessions without the
            spreadsheet-and-group-chat chaos.
          </Reveal>

          <Reveal delay={220} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
            >
              Request Demo
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-full border border-ink/15 px-7 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-cream-deep"
            >
              See features
            </a>
          </Reveal>
        </div>

        <Reveal
          delay={160}
          className="placeholder-box flex aspect-[4/3] items-center justify-center lg:aspect-[3/4]"
        >
          <span className="eyebrow text-muted/60">Hero visual</span>
        </Reveal>
      </div>
    </section>
  )
}
