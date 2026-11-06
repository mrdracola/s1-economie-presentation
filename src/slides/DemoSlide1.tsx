import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { translations } from '../data/translations'

interface DemoSlideProps {
  language: 'fr' | 'ar'
}

export function DemoSlide1({ language }: DemoSlideProps) {
  const t = translations[language]
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'

  const title = t.slideTitles.demo1
  const subtitle = t.slideContents.demo1.subtitle
  const description = t.slideContents.demo1.description

  return (
    <div
      className={`flex flex-col h-full w-full ${isArabic ? 'font-arabic' : ''}`}
      lang={language}
      dir={dir}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <PhaseBadge label={isArabic ? 'المرحلة 1' : 'Étape 1'} variant="teal" />
        <PhaseBadge label={isArabic ? 'أكتوبر' : 'Octobre'} variant="orange" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center gap-6">
        <PremiumHeading
          title={title}
          subtitle={subtitle}
          align={isArabic ? 'right' : 'left'}
          lang={language}
        />

        <p
          className={`max-w-3xl leading-relaxed ${isArabic ? 'text-right' : 'text-left'}`}
          style={{ fontSize: 'var(--text-body)', color: 'var(--color-off-white)', opacity: 0.8 }}
        >
          {description}
        </p>

        <AccentLine progress={0.33} className="mt-6" />
      </div>

      {/* Footer */}
      <div className="flex justify-end items-center mt-auto">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: 'var(--color-teal)' }} />
          <span className="uppercase tracking-wide" style={{ fontSize: 'var(--text-label)', color: 'var(--color-muted)' }}>
            {isArabic ? 'المرحلة 1' : 'Étape 1'}
          </span>
        </div>
      </div>
    </div>
  )
}
