import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { GoldenPocketWatch } from '../components/GoldenPocketWatch'
import { AmbientBackground } from '../components/AmbientBackground'
import { Clock } from 'lucide-react'

interface SlideProps {
  language: 'fr' | 'ar'
}

export function Slide5Step2WorkloadNew({ language }: SlideProps) {
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'
  const containerRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)

  const title = 'Étape 2 — Attribuer un temps à chaque partie'
  const subtitle = isArabic
    ? 'برنامج أسبوعي مدروس ومتوازن للاستعداد الأمثل'
    : 'Programme hebdomadaire structuré et équilibré'

  const schedule = isArabic
    ? [
        {
          period: 'الاثنين - الجمعة',
          time: '18:00 - 20:00',
          hours: '10 ساعات',
          tags: ['الدرس', 'الملخص'],
          desc: 'ساعتان يومياً (الدرس + الملخص).',
          color: 'var(--color-teal)',
        },
        {
          period: 'السبت',
          time: '09:00 - 12:00',
          hours: '3 ساعات',
          tags: ['تمارين تطبيقية'],
          desc: 'تمارين تطبيقية.',
          color: 'var(--color-orange)',
        },
        {
          period: 'الأحد',
          time: '09:00 - 12:00',
          hours: '3 ساعات',
          tags: ['أسئلة', 'تصحيح', 'تحليل'],
          desc: 'تمارين إضافية، أسئلة الاختيار المتعدد، التصحيح وتحليل الأخطاء.',
          color: '#A78BFA',
        },
      ]
    : [
        {
          period: 'LUNDI - VENDREDI',
          time: '18 h - 20 h',
          hours: '10 h',
          tags: ['Cours du jour', 'Résumé'],
          desc: '2 heures par jour.',
          color: 'var(--color-teal)',
        },
        {
          period: 'SAMEDI',
          time: '09 h - 12 h',
          hours: '3 h',
          tags: ['Exercices'],
          desc: 'Exercices pratiques.',
          color: 'var(--color-orange)',
        },
        {
          period: 'DIMANCHE',
          time: '09 h - 12 h',
          hours: '3 h',
          tags: ['QCM', 'Correction', 'Analyse'],
          desc: 'QCM, correction, analyse des erreurs.',
          color: '#A78BFA',
        },
      ]

  const totalLabel = isArabic ? 'المجموع الأسبوعي' : 'Total hebdomadaire'
  const totalBreakdown = isArabic
    ? '16 ساعة أسبوعياً | 10س (الأسبوع) + 6س (عطلة نهاية الأسبوع)'
    : '16 h | 10h (semaine) + 6h (week-end)'

  const note = isArabic
    ? 'يخص هذا البرنامج الأسبوعي شهري أكتوبر ونوفمبر. أما ديسمبر فيتبع مرحلتين مخصصتين للمراجعة والتدريب.'
    : 'Cette routine hebdomadaire concerne octobre et novembre. Décembre suit deux phases spécifiques de révision.'

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Prevent FOUC — hide everything before animation starts
      gsap.set(
        ['.s5-badge', '.s5-heading', '.s5-card', '.s5-focal', '.s5-note'],
        { autoAlpha: 0, y: 18 }
      )
      gsap.set('.s5-focal', { y: 0, scale: 0.93 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl
        .to('.s5-badge',   { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.45 })
        .to('.s5-heading', { autoAlpha: 1, y: 0, duration: 0.6  }, '-=0.2')
        .to('.s5-card',    { autoAlpha: 1, y: 0, stagger: 0.1,  duration: 0.55 }, '-=0.35')
        .to('.s5-focal',   { autoAlpha: 1, scale: 1, duration: 0.75, ease: 'back.out(1.2)' }, '-=0.45')
        .to('.s5-note',    { autoAlpha: 1, y: 0, duration: 0.5  }, '-=0.3')

      // Animated counter 0 → 16
      const obj = { val: 0 }
      gsap.to(obj, {
        val: 16,
        duration: 1.4,
        ease: 'power2.out',
        delay: 0.5,
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.round(obj.val) + ' h'
          }
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef, dependencies: [language] })

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col justify-between h-full w-full ${isArabic ? 'font-arabic' : ''}`}
      lang={language}
      dir={dir}
    >
      <AmbientBackground variant="light" />

      {/* Header badges */}
      <div className="relative z-10 flex items-center justify-between s5-badge" style={{ visibility: 'hidden' }}>
        <PhaseBadge label={isArabic ? 'الخطوة 2 · الوقت المخصص' : 'Étape 2 · Volume horaire'} variant="teal" />
        <PhaseBadge label={isArabic ? '16 ساعة / أسبوع' : '16 h / semaine'} variant="orange" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center gap-6 my-auto py-2">

        {/* Heading */}
        <div className="s5-heading" style={{ visibility: 'hidden' }}>
          <PremiumHeading
            title={title}
            subtitle={subtitle}
            align={isArabic ? 'right' : 'left'}
            lang={language}
            onDark={false}
          />
        </div>

        {/* Two-column layout: cards left, watch hero right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

          {/* ── Left: 3 glassmorphism schedule cards ── */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {schedule.map((item, idx) => (
              <div
                key={idx}
                className="s5-card flex flex-col p-6 relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
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

                {/* Period + Time */}
                <div className="flex flex-col gap-1 mb-4">
                  <span className="font-bold text-[11px] uppercase tracking-wider" style={{ color: item.color }}>
                    {item.period}
                  </span>
                  <span className="font-mono font-extrabold text-2xl tracking-tight" style={{ color: 'var(--color-deep-navy)' }}>
                    {item.time}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(19,184,166,0.08)', color: 'var(--color-teal)' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hours + description */}
                <div className="mt-auto pt-4 border-t" style={{ borderColor: 'rgba(16,36,58,0.07)' }}>
                  <span className="font-bold text-lg block mb-1" style={{ color: 'var(--color-primary-navy)' }}>
                    {item.hours}
                  </span>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: '#475569' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Right: Watch hero + 16 h focal card ── */}
          <div
            className="lg:col-span-4 s5-focal flex flex-col items-center justify-center gap-3 p-6 relative overflow-hidden"
            style={{
              visibility: 'hidden',
              background: 'var(--color-primary-navy)',
              borderRadius: '16px',
              boxShadow: '0 20px 60px -12px rgba(7,24,39,0.35)',
            }}
          >
            {/* Ambient glows inside the card */}
            <div className="absolute rounded-full blur-[60px] pointer-events-none" style={{ width: 200, height: 200, bottom: -40, right: -40, background: 'var(--color-teal)', opacity: 0.14 }}/>
            <div className="absolute rounded-full blur-[50px] pointer-events-none" style={{ width: 160, height: 160, top: -30, left: -30, background: 'var(--color-orange)', opacity: 0.12 }}/>

            {/* ONE large golden pocket watch — hero of this slide */}
            <div className="relative z-10">
              <GoldenPocketWatch size={215} targetTime={18} watchPhase="idle" />
            </div>

            {/* 16 h animated counter */}
            <div className="relative z-10 flex flex-col items-center gap-0.5 text-center">
              <span className="font-bold uppercase tracking-widest text-[10px]" style={{ color: 'var(--color-teal)' }}>
                {totalLabel}
              </span>
              <div ref={counterRef} className="font-extrabold tracking-tight text-white" style={{ fontSize: '2.5rem' }}>
                0 h
              </div>
              <span className="text-xs font-medium" style={{ color: 'rgba(248,250,252,0.75)' }}>
                {totalBreakdown}
              </span>
            </div>
          </div>
        </div>

        <AccentLine progress={0.75} color="teal" />

        {/* Note banner */}
        <div className="s5-note flex items-center gap-4 p-4" style={{ visibility: 'hidden', background: 'rgba(255,255,255,0.60)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(203,213,225,0.7)', borderRadius: '10px' }}>
          <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full" style={{ background: 'rgba(245,158,66,0.15)' }}>
            <Clock size={17} style={{ color: 'var(--color-orange)' }} strokeWidth={2.2} />
          </div>
          <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--color-primary-navy)' }}>{note}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex justify-between items-center mt-auto text-xs s5-badge" style={{ color: 'var(--color-muted)', visibility: 'hidden' }}>
        <span>{isArabic ? 'تنظيم أوقات الاستعداد الأسبوعي' : 'Gestion rigoureuse du temps'}</span>
        <span className="uppercase tracking-widest font-semibold">{isArabic ? 'شريحة 5 من 14' : 'Slide 05'}</span>
      </div>
    </div>
  )
}
