/**
 * PremiumHeading
 * Reusable display title + optional subtitle with strong typographic hierarchy.
 * Handles both French and Arabic typography with proper direction.
 */

interface PremiumHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  lang?: 'fr' | 'ar'
  onDark?: boolean
  className?: string
}

export function PremiumHeading({
  title,
  subtitle,
  align = 'left',
  lang = 'fr',
  onDark = true,
  className = '',
}: PremiumHeadingProps) {
  const isArabic = lang === 'ar'
  const fontClass = isArabic ? 'font-arabic' : ''
  const alignClass =
    align === 'center' ? 'text-center items-center' :
    align === 'right'  ? 'text-right items-end'     :
                         'text-left items-start'
  const dir = isArabic ? 'rtl' : 'ltr'
  const titleColor = onDark ? 'var(--color-white)' : 'var(--color-deep-navy)'

  return (
    <div
      className={`flex flex-col gap-3 ${alignClass} ${fontClass} ${className}`}
      lang={lang}
      dir={dir}
    >
      <h1
        className="font-bold leading-tight tracking-tight"
        style={{ fontSize: 'var(--text-display)', color: titleColor }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className="font-medium text-(--color-teal)"
          style={{ fontSize: 'var(--text-subhead)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
