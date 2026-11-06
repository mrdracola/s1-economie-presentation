import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { AmbientBackground } from '../components/AmbientBackground'
import { Dumbbell, CheckCircle2, RotateCcw, Target, ChevronRight } from 'lucide-react'

interface SlideProps {
  language: 'fr' | 'ar'
}

export function Slide7WeekendPractice({ language }: SlideProps) {
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'
  const containerRef = useRef<HTMLDivElement>(null)

  const title = isArabic
    ? 'عطلة نهاية الأسبوع — التطبيق والتقدم'
    : 'Le week-end — Pratiquer et progresser'
  const subtitle = isArabic
    ? 'دورة من 4 خطوات: تعلم → تدرب → قيّم → صحّح'
    : 'Cycle en 4 étapes : Apprendre → Pratiquer → Évaluer → Corriger'

  const weekendSessions = isArabic
    ? [
        {
          day: 'السبت',
          time: '09:00 – 12:00',
          hours: '3 ساعات',
          focus: 'تمارين تطبيقية',
          desc: 'تطبيق دروس الأسبوع بتمارين متنوعة.',
          color: 'var(--color-teal)',
        },
        {
          day: 'الأحد',
          time: '09:00 – 12:00',
          hours: '3 ساعات',
          focus: 'تمارين + QCM + تصحيح + تحليل',
          desc: 'تمارين إضافية، أسئلة MCQ، تصحيح وتحليل الأخطاء.',
          color: 'var(--color-orange)',
        },
      ]
    : [
        {
          day: 'SAMEDI',
          time: '09 h – 12 h',
          hours: '3 h',
          focus: 'Exercices pratiques',
          desc: 'Appliquer les cours de la semaine par exercices variés.',
          color: 'var(--color-teal)',
        },
        {
          day: 'DIMANCHE',
          time: '09 h – 12 h',
          hours: '3 h',
          focus: 'Exercices + QCM + Correction + Analyse',
          desc: 'Exercices supplémentaires, QCM, correction, analyse erreurs.',
          color: 'var(--color-orange)',
        },
      ]

  // 4-step learning cycle
  const cycleSteps = isArabic
    ? [
        { label: 'تعلم', desc: 'إعادة قراءة الملخصات الأسبوعية', icon: RotateCcw, color: 'var(--color-teal)', bg: 'rgba(19,184,166,0.1)', border: 'rgba(19,184,166,0.3)' },
        { label: 'تدرب', desc: 'حل التمارين التطبيقية', icon: Dumbbell, color: 'var(--color-orange)', bg: 'rgba(245,158,66,0.1)', border: 'rgba(245,158,66,0.3)' },
        { label: 'قيّم', desc: 'إنجاز أسئلة الاختيار المتعدد', icon: CheckCircle2, color: '#A78BFA', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.3)' },
        { label: 'صحّح', desc: 'تحليل الأخطاء وفهمها', icon: Target, color: '#F472B6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.3)' },
      ]
    : [
        { label: 'Apprendre', desc: 'Relire les résumés de la semaine', icon: RotateCcw, color: 'var(--color-teal)', bg: 'rgba(19,184,166,0.1)', border: 'rgba(19,184,166,0.3)' },
        { label: 'Pratiquer', desc: 'Résoudre les exercices pratiques', icon: Dumbbell, color: 'var(--color-orange)', bg: 'rgba(245,158,66,0.1)', border: 'rgba(245,158,66,0.3)' },
        { label: 'Évaluer', desc: 'Passer les QCM', icon: CheckCircle2, color: '#A78BFA', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.3)' },
        { label: 'Corriger', desc: 'Analyser et comprendre les erreurs', icon: Target, color: '#F472B6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.3)' },
      ]

  const note = isArabic
    ? 'دورة السبت والأحد تغلق حلقة التعلم: التطبيق، التقييم، التصحيح. هكذا يتحول الفهم إلى إتقان.'
    : 'Le cycle samedi-dimanche boucle l\'apprentissage : pratique, évaluation, correction. C\'est ainsi que la compréhension devient maîtrise.'

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        ['.s7-badge', '.s7-heading', '.s7-weekend-card', '.s7-cycle-step', '.s7-connector', '.s7-note'],
        { autoAlpha: 0, y: 18 }
      )
      gsap.set('.s7-cycle-step', { scale: 0.95 })
      gsap.set('.s7-connector', { scale: 0, transformOrigin: isArabic ? 'right' : 'left' })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl
        .to('.s7-badge',      { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.45 })
        .to('.s7-heading',    { autoAlpha: 1, y: 0, duration: 0.6  }, '-=0.2')
        .to('.s7-weekend-card', { autoAlpha: 1, y: 0, stagger: 0.12, duration: 0.55 }, '-=0.35')
        .to('.s7-cycle-step',   { autoAlpha: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.1)' }, '-=0.3')
        .to('.s7-connector',    { autoAlpha: 1, scale: 1, duration: 0.4, stagger: 0.1 }, '-=0.2')
        .to('.s7-note',         { autoAlpha: 1, y: 0, duration: 0.5  }, '-=0.2')
    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef, dependencies: [language] })

  // Chevron direction flips for RTL
  const ChevronIcon = ChevronRight

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col justify-between h-full w-full ${isArabic ? 'font-arabic' : ''}`}
      lang={language}
      dir={dir}
    >
      <AmbientBackground variant="light" />

      {/* Header badges */}
      <div className="relative z-10 flex items-center justify-between s7-badge" style={{ visibility: 'hidden' }}>
        <PhaseBadge label={isArabic ? 'الخطوة 2 · تمارين الأسبوع' : 'Étape 2 · Entraînement semaine'} variant="teal" />
        <PhaseBadge label={isArabic ? '6 ساعات / أسبوع' : '6 h / semaine'} variant="orange" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center gap-5 my-auto py-2 pb-6">

        {/* Heading */}
        <div className="s7-heading" style={{ visibility: 'hidden' }}>
          <PremiumHeading
            title={title}
            subtitle={subtitle}
            align={isArabic ? 'right' : 'left'}
            lang={language}
            onDark={false}
          />
        </div>

        {/* Two-row layout: weekend cards top, 4-step cycle bottom */}
        <div className="flex flex-col gap-5">

          {/* ── Row 1: Weekend session cards ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {weekendSessions.map((item, idx) => (
              <div
                key={idx}
                className="s7-weekend-card flex flex-col p-6 relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{
                  visibility: 'hidden',
                  background: 'rgba(255,255,255,0.72)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: `1px solid rgba(255,255,255,0.6)`,
                  boxShadow: '0 4px 24px -4px rgba(16,36,58,0.09), 0 1px 4px rgba(16,36,58,0.04)',
                  borderRadius: '16px',
                }}
              >
                {/* Top color accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[4px]"
                  style={{ background: item.color }}
                />

                {/* Day header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-[11px] uppercase tracking-wider" style={{ color: item.color }}>
                    {item.day}
                  </span>
                  <span className="font-mono font-extrabold text-2xl tracking-tight" style={{ color: 'var(--color-deep-navy)' }}>
                    {item.time}
                  </span>
                </div>

                {/* Focus */}
                <div className="mb-3">
                  <span className="font-bold text-lg block mb-1" style={{ color: 'var(--color-primary-navy)' }}>
                    {item.focus}
                  </span>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: '#475569' }}>
                    {item.desc}
                  </p>
                </div>

                {/* Hours */}
                <div className="mt-auto pt-4 border-t flex items-center justify-between" style={{ borderColor: 'rgba(16,36,58,0.07)' }}>
                  <span className="font-bold text-lg" style={{ color: 'var(--color-primary-navy)' }}>
                    {item.hours}
                  </span>
                  <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: `${item.color}15`, color: item.color }}>
                    {isArabic ? 'تركيز عالي' : 'Focus intense'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ── Row 2: 4-step learning cycle — CLEAN HORIZONTAL ROW ── */}
          <div className="relative w-full">
            <div
              className="flex items-start justify-center gap-2 lg:gap-4 xl:gap-6 flex-wrap"
              role="list"
              aria-label={isArabic ? 'دورة التعلم من 4 خطوات' : 'Cycle d\'apprentissage en 4 étapes'}
            >
              {cycleSteps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center s7-cycle-step flex-shrink-0" style={{ visibility: 'hidden' }} role="listitem">
                  {/* Step card — clean, self-contained */}
                  <div
                    className="w-28 h-28 flex flex-col items-center justify-center rounded-2xl relative z-10 transition-all hover:scale-[1.02] hover:shadow-xl"
                    style={{ background: step.bg, border: `2px solid ${step.border}` }}
                  >
                    <div className="w-14 h-14 flex items-center justify-center rounded-full mb-3 shadow-lg" style={{ background: step.color, boxShadow: `0 8px 24px -4px ${step.color}60` }}>
                      <step.icon size={26} strokeWidth={2.5} className="text-white" />
                    </div>
                    <span className="font-bold text-base uppercase tracking-wider leading-tight text-center max-w-[140px] px-2" style={{ color: step.color }}>
                      {step.label}
                    </span>
                  </div>

                  {/* Description below — spaced away from card */}
                  <p className="text-xs font-medium text-center mt-4 max-w-[160px] leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                    {step.desc}
                  </p>

                  {/* Chevron connector BETWEEN cards (not on last) */}
                  {idx < cycleSteps.length - 1 && (
                    <div
                      className="s7-connector flex items-center justify-center"
                      style={{
                        visibility: 'hidden',
                        width: '48px',
                        height: '48px',
                        marginTop: '-24px', // vertically center between icon and label
                      }}
                      aria-hidden="true"
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 border backdrop-blur-sm shadow-md" style={{
                        borderColor: `${step.color}40`,
                        boxShadow: `0 2px 8px -2px ${step.color}40`
                      }}>
                        <ChevronIcon size={16} strokeWidth={2.5} style={{ color: step.color }} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <AccentLine progress={0.85} color="teal" />

        {/* Note banner */}
        <div className="s7-note flex items-center gap-4 p-4" style={{ visibility: 'hidden', background: 'rgba(255,255,255,0.60)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(203,213,225,0.7)', borderRadius: '10px' }}>
          <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full" style={{ background: 'rgba(245,158,66,0.15)' }}>
            <Dumbbell size={17} style={{ color: 'var(--color-orange)' }} strokeWidth={2.2} />
          </div>
          <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--color-primary-navy)' }}>{note}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex justify-between items-center mt-auto text-xs s7-badge" style={{ color: 'var(--color-muted)', visibility: 'hidden' }}>
        <span>{isArabic ? 'التطبيق يغلق حلقة التعلم' : 'La pratique boucle l\'apprentissage'}</span>
        <span className="uppercase tracking-widest font-semibold">{isArabic ? 'شريحة 7 من 10' : 'Slide 07'}</span>
      </div>
    </div>
  )
}