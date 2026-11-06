import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { AmbientBackground } from '../components/AmbientBackground'
import { BookOpen, Dumbbell, Target, Award, Clock, CheckCircle } from 'lucide-react'

interface SlideProps {
  language: 'fr' | 'ar'
}

export function Slide11Timeline({ language }: SlideProps) {
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'
  const containerRef = useRef<HTMLDivElement>(null)

  const title = isArabic
    ? 'الجدول الزمني العام — من أكتوبر إلى ديسمبر'
    : 'Échéancier global — Octobre à Décembre'

  const subtitle = isArabic
    ? 'الخطوة 4: خطة زمنية منظمة من 4 مراحل'
    : 'Étape 4 : Échéancier structuré en 4 phases'

  const phases = isArabic
    ? [
        {
          number: '01',
          month: 'أكتوبر',
          title: 'التعلم والاكتشاف',
          subtitle: '16 ساعة/أسبوع',
          description: 'بناء الأساسيات، فهم المفاهيم الجديدة، بداية الملخصات الأسبوعية، تنظيم المواد',
          color: 'var(--color-teal)',
          bg: 'rgba(19,184,166,0.12)',
          border: 'rgba(19,184,166,0.3)',
          icon: BookOpen,
          weeklyHours: '16h/sem',
          focus: 'إتقان الدروس الجديدة أسبوعياً',
          tasks: ['محاضرات + قراءة', 'ملخصات أولية', 'فهم المفاهيم الأساسية', 'تنظيم المواد'],
        },
        {
          number: '02',
          month: 'نوفمبر',
          title: 'الترسيخ والممارسة',
          subtitle: '16 ساعة/أسبوع',
          description: 'تمارين مكثفة، QCM، تصحيح، مراجعات متقاطعة، تطبيق المعرفة',
          color: 'var(--color-orange)',
          bg: 'rgba(245,158,66,0.12)',
          border: 'rgba(245,158,66,0.3)',
          icon: Dumbbell,
          weeklyHours: '16h/sem',
          focus: 'تطبيق + تقييم + تصحيح',
          tasks: ['تمارين تطبيقية', 'QCM واختبارات', 'تصحيح الأخطاء', 'مراجعات متقاطعة'],
        },
        {
          number: '03',
          month: '1 – 15 ديسمبر',
          title: 'المراجعات العامة والتركيب',
          subtitle: 'أسبوعان',
          description: 'مراجعة شاملة لكل الوحدات، بطاقات المراجعة، خرائط ذهنية، تركيب المعرفة',
          color: '#A78BFA',
          bg: 'rgba(167,139,250,0.12)',
          border: 'rgba(167,139,250,0.3)',
          icon: Target,
          weeklyHours: 'كثيف',
          focus: 'تغطية 100% من البرنامج',
          tasks: ['مراجعة 7 وحدات', 'بطاقات مراجعة', 'خرائط ذهنية', 'تركيب المعرفة'],
        },
        {
          number: '04',
          month: '16 – 30 ديسمبر',
          title: 'محاكاة الامتحانات',
          subtitle: 'أسبوعان',
          description: 'امتحانات بيضاء، ظروف حقيقية، تحليل الأداء، تجهيز نفسي',
          color: '#F472B6',
          bg: 'rgba(244,114,182,0.12)',
          border: 'rgba(244,114,182,0.3)',
          icon: Award,
          weeklyHours: 'كثيف',
          focus: 'محاكاة + ثقة + جاهزية',
          tasks: ['امتحانات بيضاء', 'ظروف حقيقية', 'تحليل الأداء', 'إدارة التوتر'],
        },
      ]
    : [
        {
          number: '01',
          month: 'Octobre',
          title: 'Apprentissage & Découverte',
          subtitle: '16h/semaine',
          description: 'Poser les bases, comprendre les nouveaux concepts, premiers résumés hebdo, organiser les matières',
          color: 'var(--color-teal)',
          bg: 'rgba(19,184,166,0.12)',
          border: 'rgba(19,184,166,0.3)',
          icon: BookOpen,
          weeklyHours: '16h/sem',
          focus: 'Maîtriser les nouveaux cours chaque semaine',
          tasks: ['Cours + Lecture', 'Premiers résumés', 'Comprendre concepts', 'Organiser matières'],
        },
        {
          number: '02',
          month: 'Novembre',
          title: 'Consolidation & Pratique',
          subtitle: '16h/semaine',
          description: 'Exercices intensifs, QCM, correction, révisions croisées, application des connaissances',
          color: 'var(--color-orange)',
          bg: 'rgba(245,158,66,0.12)',
          border: 'rgba(245,158,66,0.3)',
          icon: Dumbbell,
          weeklyHours: '16h/sem',
          focus: 'Application + Évaluation + Correction',
          tasks: ['Exercices pratiques', 'QCM et tests', 'Corriger erreurs', 'Révisions croisées'],
        },
        {
          number: '03',
          month: '1 – 15 Décembre',
          title: 'Révisions globales & Synthèses',
          subtitle: '2 semaines',
          description: 'Revue complète de tous modules, fiches de révision, cartes mentales, synthèse des connaissances',
          color: '#A78BFA',
          bg: 'rgba(167,139,250,0.12)',
          border: 'rgba(167,139,250,0.3)',
          icon: Target,
          weeklyHours: 'Intensif',
          focus: 'Couvrir 100 % du programme',
          tasks: ['Revue 7 modules', 'Fiches révision', 'Cartes mentales', 'Synthèse connaissances'],
        },
        {
          number: '04',
          month: '16 – 30 Décembre',
          title: 'Simulations d\'examens & Épreuves blanches',
          subtitle: '2 semaines',
          description: 'Examens blancs, conditions réelles, analyse performance, préparation mentale',
          color: '#F472B6',
          bg: 'rgba(244,114,182,0.12)',
          border: 'rgba(244,114,182,0.3)',
          icon: Award,
          weeklyHours: 'Intensif',
          focus: 'Simulation + Confiance + Prêt',
          tasks: ['Examens blancs', 'Conditions réelles', 'Analyser performance', 'Gérer stress'],
        },
      ]

  const note = isArabic
    ? 'كل مرحلة أساس للتي تليها. أكتوبر يبني، نوفمبر يرسخ، ديسمبر يراجع ويحاكي. التسلسل هو القوة.'
    : 'Chaque phase fonde la suivante. Octobre construit, novembre consolide, décembre révise et simule. La séquence est la force.'

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        ['.s11-badge', '.s11-heading', '.s11-timeline-container', '.s11-phase-card', '.s11-beam', '.s11-note'],
        { autoAlpha: 0, y: 18 }
      )

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl
        .to('.s11-badge', { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.45 })
        .to('.s11-heading', { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.2')
        .to('.s11-timeline-container', { autoAlpha: 1, y: 0, duration: 0.7 }, '-=0.3')

      tl.to('.s11-phase-card', {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.1,
        ease: 'back.out(1.1)',
      }, '-=0.4')

      tl.to('.s11-beam', {
        autoAlpha: 1,
        duration: 0.3,
      }, '-=0.3')

      tl.to('.s11-note', { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.2')
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
      <div className="relative z-10 flex items-center justify-between s11-badge" style={{ visibility: 'hidden' }}>
        <PhaseBadge label={isArabic ? 'الخطوة 4 · الإchéancier المفصل' : 'Étape 4 · Échéancier détaillé'} variant="teal" />
        <PhaseBadge label={isArabic ? 'أكتوبر → ديسمبر' : 'Octobre → Décembre'} variant="orange" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center gap-4 my-auto py-2">

        {/* Heading */}
        <div className="s11-heading" style={{ visibility: 'hidden' }}>
          <PremiumHeading
            title={title}
            subtitle={subtitle}
            align="center"
            lang={language}
            onDark={false}
          />
        </div>

        {/* Master Timeline */}
        <div className="s11-timeline-container relative flex flex-col items-center gap-6 flex-1" style={{ visibility: 'hidden' }}>
          {/* Timeline track with animated beam */}
          <div className="relative w-full max-w-5xl mb-4">
            <div className="relative h-12">
              {/* Track background */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
              {/* Active track gradient */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-2 rounded-full s11-beam" style={{ visibility: 'hidden', background: 'linear-gradient(90deg, var(--color-teal), var(--color-orange), #A78BFA, #F472B6)' }}>
                <div className="absolute inset-0 h-full rounded-full" style={{ background: 'linear-gradient(90deg, var(--color-teal), var(--color-orange), #A78BFA, #F472B6)' }} />
              </div>

              {/* Phase markers on timeline */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2">
                {phases.map((phase, idx) => (
                  <div key={idx} className="relative flex flex-col items-center">
                    {/* Marker dot with ring */}
                    <div className="relative z-10 w-6 h-6 rounded-full border-4 flex items-center justify-center transition-all hover:scale-125 cursor-pointer" style={{ background: phase.bg, borderColor: phase.color, boxShadow: `0 0 0 4px ${phase.color}20` }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: phase.color }} />
                    </div>
                    {/* Month label */}
                    <span className="absolute top-[36px] font-bold text-[10px] uppercase tracking-wider whitespace-nowrap" style={{ color: 'var(--color-muted)' }}>
                      {phase.month}
                    </span>
                    {/* Phase number below */}
                    <span className="absolute bottom-[36px] font-mono font-extrabold text-[11px]" style={{ color: phase.color }}>
                      {phase.number}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phase detail cards below timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className="s11-phase-card relative flex flex-col p-5 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{
                  visibility: 'hidden',
                  transform: 'scale(0.95)',
                  background: 'rgba(255,255,255,0.78)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: `1px solid ${phase.border}`,
                  boxShadow: '0 4px 24px -4px rgba(16,36,58,0.09), 0 1px 4px rgba(16,36,58,0.04)',
                  borderRadius: '16px',
                }}
              >
                {/* Top color accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[4px]" style={{ background: phase.color }} />

                {/* Left color strip */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ background: phase.color }} />

                {/* Phase header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl" style={{ background: phase.bg }}>
                    <phase.icon size={20} strokeWidth={2} style={{ color: phase.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-bold text-[10px] uppercase tracking-wider block" style={{ color: phase.color }}>
                      {phase.title}
                    </span>
                    <span className="font-mono font-extrabold text-lg tracking-tight" style={{ color: 'var(--color-deep-navy)' }}>
                      {phase.month}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full shrink-0" style={{ background: phase.bg, color: phase.color, border: `1px solid ${phase.border}` }}>
                    {phase.weeklyHours}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm font-medium leading-relaxed mb-3" style={{ color: '#475569' }}>
                  {phase.description}
                </p>

                {/* Tasks list */}
                <ul className="space-y-1.5 mb-3" role="list">
                  {phase.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-2 text-xs font-medium" style={{ color: '#64748b' }}>
                      <CheckCircle size={12} style={{ color: phase.color, flexShrink: 0 }} />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                {/* Focus tag */}
                <div className="mt-auto pt-3 border-t flex items-center gap-2" style={{ borderColor: 'rgba(16,36,58,0.07)' }}>
                  <Clock size={13} style={{ color: phase.color }} />
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
        <div className="s11-note flex items-center gap-4 p-4" style={{ visibility: 'hidden', background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(203,213,225,0.7)', borderRadius: '10px' }}>
          <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full" style={{ background: 'rgba(167,139,250,0.15)' }}>
            <Award size={17} style={{ color: '#A78BFA' }} strokeWidth={2.2} />
          </div>
          <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--color-primary-navy)' }}>{note}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex justify-between items-center mt-auto text-xs s11-badge" style={{ color: 'var(--color-muted)', visibility: 'hidden' }}>
        <span>{isArabic ? 'التسلسل = القوة' : 'La séquence = la force'}</span>
        <span className="uppercase tracking-widest font-semibold">{isArabic ? 'شريحة 11 من 14' : 'Slide 11 / 14'}</span>
      </div>
    </div>
  )
}