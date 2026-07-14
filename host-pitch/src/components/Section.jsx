import Reveal from './Reveal.jsx'

/** Standard section shell: consistent width, padding, and an optional
 *  mono eyebrow tag ("01 / HERO"). Content passed as children. */
export default function Section({ id, index, tag, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {tag && (
          <Reveal
            as="p"
            className="eyebrow mb-6 flex items-center gap-3"
          >
            {index != null && (
              <span className="text-muted/70">
                {String(index).padStart(2, '0')}
              </span>
            )}
            <span className="h-px w-8 bg-line" aria-hidden="true" />
            {tag}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
