import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { AmbientBackground } from '../components/AmbientBackground'
import { TimelineBeam } from '../components/TimelineBeam'
import { BookOpen, Dumbbell, Target, Award, Sparkles } from 'lucide-react'

interface SlideProps {
  language: 'fr' | 'ar'
}

export function Slide10MasterTimeline({ language }: SlideProps) {
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'
  const containerRef = useRef<HTMLDivElement>(null)

  const title = isArabic
    ? 'الخطوة 4 — وضع جدول زمني دقيق'
    : 'Étape 4 — Établir un échéancier précis'
  const subtitle = isArabic
    ? 'أكتوبر → نوفمبر → ديسمبر: مسار واضح نحو الامتحانات'
    : 'Octobre → Novembre → Décembre : trajectoire claire vers les examens'

  const phases = isArabic
    ? [
        {
          month: 'أكتوبر',
          label: 'التعلم',
          desc: 'بناء الأساسيات، فهم المفاهيم، بداية الملخصات',
          color: 'var(--color-teal)',
          bg: 'rgba(19,184,166,0.1)',
          border: 'rgba(19,184,166,0.3)',
          icon: BookOpen,
          weeks: '4 أسابيع',
          focus: 'إتقان الدروس الجديدة أسبوعياً',
        },
        {
          month: 'نوفمبر',
          label: 'الترسيخ',
          desc: 'تمارين مكثفة، QCM، تصحيح، مراجعات متقاطعة',
          color: 'var(--color-orange)',
          bg: 'rgba(245,158,66,0.1)',
          border: 'rgba(245,158,66,0.3)',
          icon: Dumbbell,
          weeks: '4 أسابيع',
          focus: 'تطبيق + تقييم + تصحيح',
        },
        {
          month: '1 – 15 ديسمبر',
          label: 'مراجعة عامة',
          desc: 'مراجعة شاملة لكل الوحدات، بطاقات، خرائط ذهنية',
          color: '#A78BFA',
          bg: 'rgba(167,139,250,0.1)',
          border: 'rgba(167,139,250,0.3)',
          icon: Target,
          weeks: 'أسبوعان',
          focus: 'تغطية 100% من البرنامج',
        },
        {
          month: '16 – 30 ديسمبر',
          label: 'تدريب الامتحانات',
          desc: 'امتحانات بيضاء، ظروف حقيقية، تحليل الأداء',
          color: '#F472B6',
          bg: 'rgba(244,114,182,0.1)',
          border: 'rgba(244,114,182,0.3)',
          icon: Award,
          weeks: 'أسبوعان',
          focus: 'محاكاة + ثقة + جاهزية',
        },
      ]
    : [
        {
          month: 'Octobre',
          label: 'Apprentissage',
          desc: 'Poser les bases, comprendre, premiers résumés',
          color: 'var(--color-teal)',
          bg: 'rgba(19,184,166,0.1)',
          border: 'rgba(19,184,166,0.3)',
          icon: BookOpen,
          weeks: '4 semaines',
          focus: 'Maîtriser les nouveaux cours chaque semaine',
        },
        {
          month: 'Novembre',
          label: 'Consolidation',
          desc: 'Exercices intensifs, QCM, correction, révisions croisées',
          color: 'var(--color-orange)',
          bg: 'rgba(245,158,66,0.1)',
          border: 'rgba(245,158,66,0.3)',
          icon: Dumbbell,
          weeks: '4 semaines',
          focus: 'Application + Évaluation + Correction',
        },
        {
          month: '1 – 15 Décembre',
          label: 'Révision générale',
          desc: 'Revue complète de tous modules, fiches, cartes mentales',
          color: '#A78BFA',
          bg: 'rgba(167,139,250,0.1)',
          border: 'rgba(167,139,250,0.3)',
          icon: Target,
          weeks: '2 semaines',
          focus: 'Couvrir 100 % du programme',
        },
        {
          month: '16 – 30 Décembre',
          label: 'Entraînement examens',
          desc: 'Examens blancs, conditions réelles, analyse performance',
          color: '#F472B6',
          bg: 'rgba(244,114,182,0.1)',
          border: 'rgba(244,114,182,0.3)',
          icon: Award,
          weeks: '2 semaines',
          focus: 'Simulation + Confiance + Prêt',
        },
      ]

  const note = isArabic
    ? 'هذا الإchéancier ليس قيداً، بل بوصلة. كل مرحلة تبني على سابقتها. من يكتوِّر أكتوبر، يلمع في ديسمبر.'
    : 'Cet échéancier n\'est pas une contrainte, c\'est une boussole. Chaque phase s\'appuie sur la précédente. Qui maîtrise octobre brille en décembre.'

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        ['.s10-badge', '.s10-heading', '.s10-timeline-container', '.s10-phase-card', '.s10-beam', '.s10-note'],
        { autoAlpha: 0, y: 18 }
      )

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl
        .to('.s10-badge',    { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.45 })
        .to('.s10-heading',  { autoAlpha: 1, y: 0, duration: 0.6  }, '-=0.2')
        .to('.s10-timeline-container', { autoAlpha: 1, y: 0, duration: 0.7 }, '-=0.3')

      // Animate phase cards with staggered entrance
      tl.to('.s10-phase-card', {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.1,
        ease: 'back.out(1.1)',
      }, '-=0.4')

      // Animate the beam after cards appear
      tl.to('.s10-beam', {
        autoAlpha: 1,
        duration: 0.3,
      }, '-=0.3')

      // Beam progress animation handled by TimelineBeam component
      tl.to('.s10-note', { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.2')
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
      <div className="relative z-10 flex items-center justify-between s10-badge" style={{ visibility: 'hidden' }}>
        <PhaseBadge label={isArabic ? 'الخطوة 4 · الإchéancier الرئيسي' : 'Étape 4 · Échéancier maître'} variant="teal" />
        <PhaseBadge label={isArabic ? 'أكتوبر → ديسمبر' : 'Octobre → Décembre'} variant="orange" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center gap-5 my-auto py-2">

        {/* Heading */}
        <div className="s10-heading" style={{ visibility: 'hidden' }}>
          <PremiumHeading
            title={title}
            subtitle={subtitle}
            align="center"
            lang={language}
            onDark={false}
          />
        </div>

        {/* Master Timeline */}
        <div className="s10-timeline-container relative flex flex-col items-center gap-6" style={{ visibility: 'hidden' }}>
          {/* Timeline track with animated beam */}
          <div className="relative w-full max-w-5xl">
            <div className="relative h-16">
              {/* Track background */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
              {/* Active track gradient */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-2 rounded-full s10-beam" style={{ visibility: 'hidden', background: 'linear-gradient(90deg, var(--color-teal), var(--color-orange), #A78BFA, #F472B6)' }}>
                {/* TimelineBeam component will animate the progress */}
                <TimelineBeam progress={1} className="absolute inset-0" />
              </div>

              {/* Phase markers on timeline */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2">
                {phases.map((phase, idx) => (
                  <div key={idx} className="relative flex flex-col items-center">
                    {/* Marker dot */}
                    <div className="relative z-10 w-5 h-5 rounded-full border-4 flex items-center justify-center transition-all hover:scale-125" style={{ background: phase.bg, borderColor: phase.color, boxShadow: `0 0 0 4px ${phase.color}20` }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: phase.color }} />
                    </div>
                    {/* Month label */}
                    <span className="absolute top-[40px] font-bold text-[10px] uppercase tracking-wider whitespace-nowrap" style={{ color: 'var(--color-muted)' }}>
                      {phase.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phase detail cards below timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full max-w-5xl">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className="s10-phase-card relative flex flex-col p-5 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{
                  visibility: 'hidden',
                  transform: 'scale(0.95)',
                  background: 'rgba(255,255,255,0.72)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: `1px solid ${phase.border}`,
                  boxShadow: '0 4px 24px -4px rgba(16,36,58,0.09), 0 1px 4px rgba(16,36,58,0.04)',
                  borderRadius: '16px',
                }}
              >
                {/* Top color accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[4px]"
                  style={{ background: phase.color }}
                />

                {/* Phase header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl" style={{ background: phase.bg }}>
                    <phase.icon size={20} strokeWidth={2} style={{ color: phase.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-bold text-[10px] uppercase tracking-wider block" style={{ color: phase.color }}>
                      {phase.label}
                    </span>
                    <span className="font-mono font-extrabold text-lg tracking-tight" style={{ color: 'var(--color-deep-navy)' }}>
                      {phase.month}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full" style={{ background: phase.bg, color: phase.color, border: `1px solid ${phase.border}` }}>
                    {phase.weeks}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm font-medium leading-relaxed mb-3" style={{ color: '#475569' }}>
                  {phase.desc}
                </p>

                {/* Focus tag */}
                <div className="mt-auto pt-3 border-t flex items-center gap-2" style={{ borderColor: 'rgba(16,36,58,0.07)' }}>
                  <Sparkles size={13} style={{ color: phase.color }} />
                  <span className="text-xs font-bold" style={{ color: phase.color }}>
                    {phase.focus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <AccentLine progress={1} color="teal" />

        {/* Note banner */}
        <div className="s10-note flex items-center gap-4 p-4" style={{ visibility: 'hidden', background: 'rgba(255,255,255,0.60)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(203,213,225,0.7)', borderRadius: '10px' }}>
          <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full" style={{ background: 'rgba(244,114,182,0.15)' }}>
            <Award size={17} style={{ color: '#F472B6' }} strokeWidth={2.2} />
          </div>
          <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--color-primary-navy)' }}>{note}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex justify-between items-center mt-auto text-xs s10-badge" style={{ color: 'var(--color-muted)', visibility: 'hidden' }}>
        <span>{isArabic ? 'الجدول الزمني = البوصلة' : 'L\'échéancier = la boussole'}</span>
        <span className="uppercase tracking-widest font-semibold">{isArabic ? 'شريحة 10 من 10' : 'Slide 10'}</span>
      </div>
    </div>
  )
}