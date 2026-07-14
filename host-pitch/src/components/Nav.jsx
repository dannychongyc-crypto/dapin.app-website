const LINKS = [
  { label: 'Problem', href: '#problem' },
  { label: 'Features', href: '#features' },
  { label: 'Proof', href: '#proof' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-xl font-extrabold tracking-tight text-ink">
            Dap&nbsp;IN
          </span>
          <span className="eyebrow hidden sm:inline">for hosts</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#cta"
          className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
        >
          Request Demo
        </a>
      </nav>
    </header>
  )
}
