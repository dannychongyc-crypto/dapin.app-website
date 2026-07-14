import Reveal from './Reveal.jsx'

export default function CTA() {
  return (
    <section id="cta" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-accent px-8 py-16 text-center text-white sm:px-16 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-2xl"
          />
          <div className="relative">
            <p className="eyebrow text-white/70">Get started</p>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Request a demo
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              Placeholder — a short nudge to book a walkthrough of Dap IN for
              hosts.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#top"
                className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-accent transition-all hover:-translate-y-0.5 hover:bg-cream"
              >
                Request Demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Explore features
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
