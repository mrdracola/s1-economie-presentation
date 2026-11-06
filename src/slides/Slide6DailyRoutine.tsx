import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { GoldenPocketWatch } from '../components/GoldenPocketWatch'
import { AmbientBackground } from '../components/AmbientBackground'
import { Clock, BookOpen, FileText, ArrowRight, ArrowLeft } from 'lucide-react'

interface SlideProps {
  language: 'fr' | 'ar'
}

export function Slide6DailyRoutine({ language }: SlideProps) {
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'
  const containerRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)

  const title = isArabic
    ? 'الروتين اليومي — من الاثنين إلى الجمعة'
    : 'Routine quotidienne — Du lundi au vendredi'
  const subtitle = isArabic
    ? 'ساعتان يومياً: الدرس والمراجعة المنظمة'
    : 'Deux heures par jour : cours et révision structurée'

  const sessions = isArabic
    ? [
        {
          label: 'الدرس',
          time: '18:00 – 19:00',
          desc: 'حضور الدرس، تدوين الملاحظات، طرح الأسئلة.',
          icon: BookOpen,
          color: 'var(--color-teal)',
        },
        {
          label: 'الملخص',
          time: '19:00 – 20:00',
          desc: 'إعادة قراءة الدرس، استخلاص الأفكار الرئيسية، بطاقات المراجعة.',
          icon: FileText,
          color: 'var(--color-orange)',
        },
      ]
    : [
        {
          label: 'Cours du jour',
          time: '18 h – 19 h',
          desc: 'Assister au cours, prendre des notes, poser les questions.',
          icon: BookOpen,
          color: 'var(--color-teal)',
        },
        {
          label: 'Révision + Résumé',
          time: '19 h – 20 h',
          desc: 'Relire le cours, extraire l\'essentiel, fiches de révision.',
          icon: FileText,
          color: 'var(--color-orange)',
        },
      ]

  const weeklyTotal = isArabic ? '10 ساعات / أسبوع' : '10 h / semaine'
  const note = isArabic
    ? 'هذا الروتين الثابت يضمن الانتظام ويقلل من تراكم الدروس. الأرقام تتحدث: 10 ساعات أسبوعياً من التعلم النشط.'
    : 'Cette routine fixe assure la régularité et évite l\'accumulation. Les chiffres parlent : 10 h par semaine d\'apprentissage actif.'

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        ['.s6-badge', '.s6-heading', '.s6-session', '.s6-focal', '.s6-connector', '.s6-note'],
        { autoAlpha: 0, y: 18 }
      )
      gsap.set('.s6-focal', { y: 0, scale: 0.93 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl
        .to('.s6-badge',    { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.45 })
        .to('.s6-heading',  { autoAlpha: 1, y: 0, duration: 0.6  }, '-=0.2')
        .to('.s6-session',  { autoAlpha: 1, y: 0, stagger: 0.12, duration: 0.55 }, '-=0.35')
        .to('.s6-connector', { autoAlpha: 1, scale: 1, duration: 0.4, stagger: 0.08 }, '-=0.4')
        .to('.s6-focal',    { autoAlpha: 1, scale: 1, duration: 0.75, ease: 'back.out(1.2)' }, '-=0.5')
        .to('.s6-note',     { autoAlpha: 1, y: 0, duration: 0.5  }, '-=0.3')

      // Animated counter 0 → 10
      const obj = { val: 0 }
      gsap.to(obj, {
        val: 10,
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
      <div className="relative z-10 flex items-center justify-between s6-badge" style={{ visibility: 'hidden' }}>
        <PhaseBadge label={isArabic ? 'الخطوة 2 · الروتين اليومي' : 'Étape 2 · Routine quotidienne'} variant="teal" />
        <PhaseBadge label={isArabic ? '10 ساعة / أسبوع' : '10 h / semaine'} variant="orange" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center gap-6 my-auto py-2">

        {/* Heading */}
        <div className="s6-heading" style={{ visibility: 'hidden' }}>
          <PremiumHeading
            title={title}
            subtitle={subtitle}
            align={isArabic ? 'right' : 'left'}
            lang={language}
            onDark={false}
          />
        </div>

        {/* Two-column layout: sessions left, watch hero right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

          {/* ── Left: 2 session cards + connector ── */}
          <div className="lg:col-span-8 flex flex-col items-center gap-4">
            {sessions.map((item, idx) => (
              <div
                key={idx}
                className="s6-session w-full flex flex-col p-6 relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
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

                {/* Session header */}
                <div className="flex flex-col gap-1 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl" style={{ background: `${item.color}15` }}>
                      <item.icon size={20} strokeWidth={2} style={{ color: item.color }} />
                    </div>
                    <div>
                      <span className="font-bold text-[11px] uppercase tracking-wider" style={{ color: item.color }}>
                        {item.label}
                      </span>
                      <span className="font-mono font-extrabold text-2xl tracking-tight block" style={{ color: 'var(--color-deep-navy)' }}>
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm font-medium leading-relaxed" style={{ color: '#475569' }}>
                  {item.desc}
                </p>

                {/* Connector arrow between cards */}
                {idx < sessions.length - 1 && (
                  <div className="s6-connector absolute left-1/2 -translate-x-1/2 bottom-[-14px] w-10 h-10 flex items-center justify-center z-10" style={{ visibility: 'hidden' }}>
                    <div className="w-6 h-6 bg-(--color-teal)/10 rounded-full flex items-center justify-center shadow-sm">
                      <ArrowIcon size={16} strokeWidth={2.5} style={{ color: 'var(--color-teal)' }} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── Right: Watch hero + 10 h focal card ── */}
          <div
            className="lg:col-span-4 s6-focal flex flex-col items-center justify-center gap-3 p-6 relative overflow-hidden"
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
            <div className="absolute rounded-full blur-[50px] pointer-events-none" style={{ width: 140, height: 140, bottom: -30, left: -30, background: 'var(--color-teal)', opacity: 0.10 }}/>
            <div className="absolute rounded-full blur-[50px] pointer-events-none" style={{ width: 140, height: 140, top: -30, right: -30, background: 'var(--color-orange)', opacity: 0.10 }}/>
            <div className="absolute rounded-full blur-[40px] pointer-events-none" style={{ width: 100, height: 100, bottom: 32, left: 24, background: 'var(--color-gold)', opacity: 0.08 }}/>
            <div className="absolute rounded-full blur-[40px] pointer-events-none" style={{ width: 100, height: 100, top: 32, right: 24, background: 'var(--color-gold)', opacity: 0.08 }}/>

            {/* ONE large golden pocket watch — hero of this slide */}
            <div className="relative z-10">
              <GoldenPocketWatch size={215} targetTime={18.5} watchPhase="cours" />
            </div>

            {/* 10 h animated counter */}
            <div className="relative z-10 flex flex-col items-center gap-0.5 text-center">
              <span className="font-bold uppercase tracking-widest text-[10px]" style={{ color: 'var(--color-teal)' }}>
                {isArabic ? 'إجمالي أسبوعي' : 'Total hebdomadaire'}
              </span>
              <div ref={counterRef} className="font-extrabold tracking-tight text-white" style={{ fontSize: '2.5rem' }}>
                0 h
              </div>
              <span className="text-xs font-medium" style={{ color: 'rgba(248,250,252,0.75)' }}>
                {weeklyTotal}
              </span>
            </div>
          </div>
        </div>

        <AccentLine progress={0.85} color="teal" />

        {/* Note banner */}
        <div className="s6-note flex items-center gap-4 p-4" style={{ visibility: 'hidden', background: 'rgba(255,255,255,0.60)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(203,213,225,0.7)', borderRadius: '10px' }}>
          <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full" style={{ background: 'rgba(19,184,166,0.15)' }}>
            <Clock size={17} style={{ color: 'var(--color-teal)' }} strokeWidth={2.2} />
          </div>
          <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--color-primary-navy)' }}>{note}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex justify-between items-center mt-auto text-xs s6-badge" style={{ color: 'var(--color-muted)', visibility: 'hidden' }}>
        <span>{isArabic ? 'انتظام يومي = نجاح أكيد' : 'Régularité quotidienne = réussite assurée'}</span>
        <span className="uppercase tracking-widest font-semibold">{isArabic ? 'شريحة 6 من 10' : 'Slide 06'}</span>
      </div>
    </div>
  )
}