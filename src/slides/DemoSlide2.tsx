import React from 'react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { translations } from '../data/translations'

interface DemoSlideProps {
  language: 'fr' | 'ar'
}

export function DemoSlide2({ language }: DemoSlideProps) {
  const t = translations[language]
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'

  const title = t.slideTitles.demo2
  const subtitle = t.slideContents.demo2.subtitle

  const steps = isArabic
    ? [
        { label: 'تعلم', icon: '📚', color: 'var(--color-teal)' },
        { label: 'ترسيخ', icon: '🧠', color: 'var(--color-orange)' },
        { label: 'مراجعة', icon: '📝', color: 'var(--color-teal)' },
        { label: 'تدريب', icon: '🏋️', color: 'var(--color-orange)' },
      ]
    : [
        { label: 'Apprendre', icon: '📚', color: 'var(--color-teal)' },
        { label: 'Consolider', icon: '🧠', color: 'var(--color-orange)' },
        { label: 'Réviser', icon: '📝', color: 'var(--color-teal)' },
        { label: "S'entraîner", icon: '🏋️', color: 'var(--color-orange)' },
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
        <PhaseBadge label={isArabic ? 'المرحلة 2' : 'Étape 2'} variant="teal" />
        <PhaseBadge label={isArabic ? 'نوفمبر' : 'Novembre'} variant="orange" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center gap-10">
        <PremiumHeading
          title={title}
          subtitle={subtitle}
          align={isArabic ? 'right' : 'left'}
          lang={language}
          onDark={false}
        />

        {/* Process steps */}
        <div
          className="flex items-center justify-center gap-6"
          style={{ flexDirection: isArabic ? 'row-reverse' : 'row' }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.label}>
              <div className="flex flex-col items-center gap-3">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg"
                  style={{ background: step.color }}
                >
                  {step.icon}
                </div>
                <span
                  className={`font-semibold text-center ${isArabic ? 'font-arabic' : ''}`}
                  style={{ fontSize: 'var(--text-label)', color: 'var(--color-primary-navy)' }}
                >
                  {step.label}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div
                  className="relative shrink-0"
                  style={{ width: '48px', height: '2px', background: 'var(--color-muted)', opacity: 0.4 }}
                  aria-hidden="true"
                >
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                    style={{
                      background: 'var(--color-orange)',
                      right: isArabic ? 'auto' : 0,
                      left: isArabic ? 0 : 'auto',
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <AccentLine progress={0.66} />
      </div>

      {/* Footer */}
      <div className="flex justify-end items-center mt-auto">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: 'var(--color-teal)' }} />
            <span className="uppercase tracking-wide" style={{ fontSize: 'var(--text-label)', color: 'var(--color-muted)' }}>
              {isArabic ? 'مسار' : 'Processus'}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: 'var(--color-orange)' }} />
            <span className="uppercase tracking-wide" style={{ fontSize: 'var(--text-label)', color: 'var(--color-muted)' }}>
              {isArabic ? 'تكوين' : 'Formation'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
