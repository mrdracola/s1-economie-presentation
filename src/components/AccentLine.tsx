/**
 * AccentLine
 * Subtle decorative horizontal line with an optional filled progress segment.
 * Used as a visual separator or a progress-inspired motif.
 */

interface AccentLineProps {
  /** 0–1 fraction of the line to fill with accent color. Default: 1 (full). */
  progress?: number
  /** Line color: 'teal' (default) | 'orange' | 'muted' */
  color?: 'teal' | 'orange' | 'muted'
  className?: string
}

const colorMap: Record<NonNullable<AccentLineProps['color']>, string> = {
  teal:   'bg-(--color-teal)',
  orange: 'bg-(--color-orange)',
  muted:  'bg-(--color-muted)',
}

export function AccentLine({
  progress = 1,
  color = 'teal',
  className = '',
}: AccentLineProps) {
  const pct = Math.min(1, Math.max(0, progress)) * 100

  return (
    <div
      className={`relative w-full h-px bg-(--color-primary-navy) overflow-hidden ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      <div
        className={`absolute inset-y-0 left-0 h-full transition-all ${colorMap[color]}`}
        style={{
          width: `${pct}%`,
          transitionDuration: 'var(--duration-slow)',
          transitionTimingFunction: 'var(--ease-out)',
        }}
      />
    </div>
  )
}