/**
 * PhaseBadge
 * Small label for preparation phases or step numbers.
 */

interface PhaseBadgeProps {
  /** Badge text, e.g. "Étape 1" or "Phase 2" */
  label: string
  /** Color variant */
  variant?: 'teal' | 'orange' | 'muted'
  className?: string
}

const variantStyles: Record<NonNullable<PhaseBadgeProps['variant']>, string> = {
  teal:   'bg-(--color-teal)/15 text-(--color-teal)   border-(--color-teal)/30',
  orange: 'bg-(--color-orange)/15 text-(--color-orange) border-(--color-orange)/30',
  muted:  'bg-(--color-muted)/15  text-(--color-muted)  border-(--color-muted)/30',
}

export function PhaseBadge({
  label,
  variant = 'teal',
  className = '',
}: PhaseBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1
        rounded-full border font-semibold uppercase tracking-widest
        ${variantStyles[variant]}
        ${className}
      `}
      style={{ fontSize: 'var(--text-label)' }}
    >
      {label}
    </span>
  )
}