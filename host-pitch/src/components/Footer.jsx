export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-14 sm:flex-row sm:items-center sm:px-8">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold tracking-tight text-ink">
              Dap&nbsp;IN
            </span>
            <span className="eyebrow">for hosts</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Footer placeholder — short tagline, links, and legal go here.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <a href="#problem" className="text-sm text-muted transition-colors hover:text-ink">
            Problem
          </a>
          <a href="#features" className="text-sm text-muted transition-colors hover:text-ink">
            Features
          </a>
          <a href="#proof" className="text-sm text-muted transition-colors hover:text-ink">
            Proof
          </a>
          <a
            href="#cta"
            className="text-sm font-bold text-accent transition-colors hover:text-accent-hover"
          >
            Request Demo
          </a>
        </div>
      </div>

      <div className="border-t border-line/70">
        <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
          <p className="eyebrow text-muted/60">
            © {new Date().getFullYear()} Dap IN
          </p>
        </div>
      </div>
    </footer>
  )
}
