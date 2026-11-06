import React from 'react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { translations } from '../data/translations'

interface DemoSlideProps {
  language: 'fr' | 'ar'
}

export function DemoSlide3({ language }: DemoSlideProps) {
  const t = translations[language]
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'

  const title = t.slideTitles.demo3
  const subtitle = t.slideContents.demo3.subtitle

  /* Timeline data */
  const timeline = isArabic
    ? [
        { period: 'أكتوبر', description: 'التعلم والفهم', state: 'active' as const },
        { period: 'نوفمبر', description: 'الترسيخ والممارسة', state: 'future' as const },
        { period: '1–15 ديس.', description: 'مراجعة عامة', state: 'future' as const },
        { period: '16–30 ديس.', description: 'امتحانات تجريبية', state: 'future' as const },
      ]
    : [
        { period: 'Octobre', description: 'Apprentissage et compréhension', state: 'active' as const },
        { period: 'Novembre', description: 'Consolidation et pratique', state: 'future' as const },
        { period: 'Déc. 1–15', description: 'Révision générale', state: 'future' as const },
        { period: 'Déc. 16–30', description: 'Simulations chronométrées', state: 'future' as const },
      ]

  return (
    <div
      className={`flex flex-col h-full w-full ${isArabic ? 'font-arabic' : ''}`}
      lang={language}
      dir={dir}
      style={{ background: 'var(--color-off-white)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <PhaseBadge label={isArabic ? 'المرحلة 3' : 'Étape 3'} variant="teal" />
        <PhaseBadge label={isArabic ? 'الربع 4' : 'Trimestre 4'} variant="orange" />
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col justify-center gap-8">
        <PremiumHeading
          title={title}
          subtitle={subtitle}
          align={isArabic ? 'right' : 'left'}
          lang={language}
          onDark={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div
            className={`rounded-xl p-6 ${isArabic ? 'text-right' : 'text-left'} border`}
            style={{ background: 'var(--color-white)', borderColor: '#E2E8F0' }}
          >
            <h3 className="font-bold mb-2" style={{ fontSize: 'var(--text-heading)', color: 'var(--color-deep-navy)' }}>
              {isArabic ? 'أكتوبر' : 'Octobre'}
            </h3>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-muted)' }}>
              {isArabic ? 'التركيز على فهم المواد الأساسية واكتساب المعارف الجديدة.' : 'Apprentissage et compréhension des concepts fondamentaux.'}
            </p>
          </div>

          <div
            className={`rounded-xl p-6 ${isArabic ? 'text-right' : 'text-left'} border`}
            style={{ background: 'var(--color-white)', borderColor: '#E2E8F0' }}
          >
            <h3 className="font-bold mb-2" style={{ fontSize: 'var(--text-heading)', color: 'var(--color-deep-navy)' }}>
              {isArabic ? 'نوفمبر' : 'Novembre'}
            </h3>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-muted)' }}>
              {isArabic ? 'ترسيخ المكتسبات عبر التمارين المكثفة والتطبيق العملي.' : 'Consolidation des acquis et entraînement régulier.'}
            </p>
          </div>
        </div>

        <AccentLine progress={0.66} className="my-2" />

        {/* Timeline — override text colors for light background */}
        <div className="w-full">
          <div className="flex items-start gap-0">
            {timeline.map((item, index) => (
              <React.Fragment key={item.period}>
                <div className="flex flex-col items-center gap-2 flex-1">
                  {/* Dot */}
                  <div
                    className={`w-3 h-3 rounded-full flex-shrink-0 ${
                      item.state === 'active'
                        ? 'bg-(--color-teal) shadow-(--shadow-glow)'
                        : 'border-2 border-(--color-muted) bg-transparent'
                    }`}
                    aria-hidden="true"
                  />
                  {/* Labels */}
                  <div className="flex flex-col items-center text-center gap-1">
                    <span
                      className="font-semibold uppercase tracking-widest"
                      style={{
                        fontSize: 'var(--text-label)',
                        color: item.state === 'active' ? 'var(--color-teal)' : 'var(--color-primary-navy)',
                      }}
                    >
                      {item.period}
                    </span>
                    <span
                      className="leading-snug"
                      style={{ fontSize: 'var(--text-label)', color: 'var(--color-muted)' }}
                    >
                      {item.description}
                    </span>
                  </div>
                </div>
                {index < timeline.length - 1 && (
                  <div className="flex-1 h-px mt-6" style={{ background: '#CBD5E1' }} aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Footer — decorative only, no in‑slide counter */}
      <div className="flex justify-end items-center mt-auto">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: 'var(--color-teal)' }} />
          <span className="uppercase tracking-wide" style={{ fontSize: 'var(--text-label)', color: 'var(--color-muted)' }}>
            {isArabic ? 'جدول زمني' : 'Calendrier'}
          </span>
        </div>
      </div>
    </div>
  )
}
