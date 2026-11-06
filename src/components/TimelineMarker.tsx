/**
 * TimelineMarker
 * A reusable milestone indicator for the Oct–Dec academic calendar.
 */

interface TimelineMarkerProps {
  /** Short period label, e.g. "Octobre" */
  period: string
  /** Descriptor line, e.g. "Apprentissage et compréhension" */
  description: string
  /** Visual state */
  state?: 'past' | 'active' | 'future'
  className?: string
}

export function TimelineMarker({
  period,
  description,
  state = 'future',
  className = '',
}: TimelineMarkerProps) {
  const dotColor =
    state === 'active'
      ? 'bg-(--color-teal) shadow-(--shadow-glow)'
      : state === 'past'
        ? 'bg-(--color-muted)'
        : 'border-2 border-(--color-muted) bg-transparent'

  const textColor =
    state === 'active'
      ? 'text-(--color-teal)'
      : state === 'past'
        ? 'text-(--color-muted)'
        : 'text-(--color-off-white)'

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      {/* Dot */}
      <div
        className={`w-3 h-3 rounded-full flex-shrink-0 ${dotColor}`}
        aria-hidden="true"
      />
      {/* Labels */}
      <div className="flex flex-col items-center text-center gap-1">
        <span
          className={`font-semibold uppercase tracking-widest ${textColor}`}
          style={{ fontSize: 'var(--text-label)' }}
        >
          {period}
        </span>
        <span
          className="text-(--color-text-muted) leading-snug"
          style={{ fontSize: 'var(--text-label)' }}
        >
          {description}
        </span>
      </div>
    </div>
  )
}