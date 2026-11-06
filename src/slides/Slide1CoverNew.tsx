import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { GoldenPocketWatch } from '../components/GoldenPocketWatch'
import { AmbientBackground } from '../components/AmbientBackground'

interface SlideProps {
  language: 'fr' | 'ar'
}

export function Slide1CoverNew({ language }: SlideProps) {
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'
  const containerRef = useRef<HTMLDivElement>(null)

  const title = isArabic
    ? 'تنظيم وتخطيط الاستعداد للامتحانات'
    : 'Organisation et planification de la préparation aux examens'

  const subtitle = isArabic
    ? 'الاقتصاد — الفصل الأول | منهجية منظمة من خمس خطوات'
    : 'S1 Économie — Une méthode structurée en 5 étapes'

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Set initial hidden state immediately — prevents any FOUC
      gsap.set(
        [
          '.s1-badge',
          '.s1-eyebrow',
          '.s1-heading',
          '.s1-accent',
          '.s1-footer',
          '.s1-watch-wrap',
          '.s1-particle',
        ],
        { autoAlpha: 0 }
      )
      gsap.set('.s1-eyebrow', { y: 16 })
      gsap.set('.s1-heading', { y: 24 })
      gsap.set('.s1-accent',  { y: 12 })
      gsap.set('.s1-watch-wrap', { scale: 0.88, y: 20 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl
        .to('.s1-badge',     { autoAlpha: 1, stagger: 0.1, duration: 0.45 })
        .to('.s1-eyebrow',   { autoAlpha: 1, y: 0, duration: 0.55 }, '-=0.2')
        .to('.s1-heading',   { autoAlpha: 1, y: 0, duration: 0.75 }, '-=0.35')
        .to('.s1-accent',    { autoAlpha: 1, y: 0, duration: 0.5  }, '-=0.45')
        .to('.s1-watch-wrap',{ autoAlpha: 1, scale: 1, y: 0, duration: 0.9, ease: 'back.out(1.15)' }, '-=0.7')
        .to('.s1-particle',  { autoAlpha: 1, stagger: 0.12, duration: 0.4 }, '-=0.5')
        .to('.s1-footer',    { autoAlpha: 1, duration: 0.5 }, '-=0.3')
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
      {/* Ambient glowing background — dark variant for navy slide */}
      <AmbientBackground variant="dark" />

      {/* Top badges */}
      <div className="relative z-10 flex items-center justify-between s1-badge" style={{ visibility: 'hidden' }}>
        <PhaseBadge label={isArabic ? 'الفصل الأول · اقتصاد' : 'S1 Économie'} variant="teal" />
        <PhaseBadge label={isArabic ? 'أكتوبر – ديسمبر' : 'Octobre – Décembre'} variant="orange" />
      </div>

      {/* ── Cinematic split layout ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto py-4">

        {/* Left — editorial typography */}
        <div className={`lg:col-span-7 flex flex-col gap-7 ${isArabic ? 'items-end text-right' : 'items-start text-left'}`}>
          {/* Eyebrow line */}
          <div className={`flex items-center gap-3 s1-eyebrow ${isArabic ? 'flex-row-reverse' : ''}`} style={{ visibility: 'hidden' }}>
            <span
              className="block h-px w-14"
              style={{ background: 'var(--color-teal)' }}
            />
            <span
              className="text-xs uppercase tracking-[0.22em] font-semibold"
              style={{ color: 'var(--color-teal)' }}
            >
              {isArabic ? 'منهجية أكاديمية متقدمة' : 'Méthode Universitaire'}
            </span>
          </div>

          {/* Main title */}
          <div className="s1-heading" style={{ visibility: 'hidden' }}>
            <PremiumHeading
              title={title}
              subtitle={subtitle}
              align={isArabic ? 'right' : 'left'}
              lang={language}
              onDark={true}
            />
          </div>

          {/* Accent line */}
          <div className="s1-accent" style={{ visibility: 'hidden' }}>
            <AccentLine progress={0.55} color="teal" className="max-w-xs" />
          </div>

          {/* Step pills row */}
          <div
            className={`s1-accent flex flex-wrap gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}
            style={{ visibility: 'hidden' }}
          >
            {(isArabic
              ? ['تقسيم', 'توزيع', 'التخطيط', 'إعداد', 'تنظيم']
              : ['Diviser', 'Attribuer', 'Prévoir', 'Établir', 'Organiser']
            ).map((step, i) => (
              <span
                key={step}
                className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                style={{
                  background: i === 0
                    ? 'rgba(19,184,166,0.18)'
                    : 'rgba(255,255,255,0.07)',
                  color: i === 0
                    ? 'var(--color-teal)'
                    : 'rgba(255,255,255,0.55)',
                  border: `1px solid ${i === 0 ? 'rgba(19,184,166,0.35)' : 'rgba(255,255,255,0.1)'}`,
                }}
              >
                {i + 1}. {step}
              </span>
            ))}
          </div>
        </div>

        {/* Right — golden pocket watch hero */}
        <div
          className="lg:col-span-5 relative flex items-center justify-center s1-watch-wrap"
          style={{ visibility: 'hidden' }}
        >
          {/* Multi-layer ambient glows around watch */}
          <div
            className="absolute rounded-full blur-[80px] pointer-events-none"
            style={{
              inset: '-10%',
              background: 'radial-gradient(ellipse, rgba(255,215,0,0.18) 0%, rgba(19,184,166,0.10) 55%, transparent 75%)',
            }}
          />
          <div
            className="absolute rounded-full blur-[50px] pointer-events-none"
            style={{
              inset: '5%',
              background: 'radial-gradient(ellipse, rgba(245,158,66,0.14) 0%, transparent 70%)',
            }}
          />

          {/* Floating dust particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { top: '4%',  left: '22%', size: 7,   color: 'var(--color-gold)',   delay: '0s'    },
              { top: '30%', right: '2%', size: 5,   color: 'var(--color-teal)',   delay: '0.9s'  },
              { top: '68%', left: '5%',  size: 9,   color: 'var(--color-gold)',   delay: '1.8s'  },
              { top: '50%', right:'28%', size: 4,   color: 'var(--color-teal)',   delay: '0.4s'  },
              { top: '82%', right:'20%', size: 6,   color: 'var(--color-gold)',   delay: '1.3s'  },
              { top: '15%', right:'15%', size: 3.5, color: 'rgba(255,255,255,0.4)', delay:'2.1s' },
              { top: '75%', left: '30%', size: 4.5, color: 'var(--color-orange)', delay: '0.7s' },
            ].map((p, i) => (
              <div
                key={i}
                className="s1-particle absolute rounded-full animate-pulse"
                style={{
                  width: p.size,
                  height: p.size,
                  top: p.top,
                  left: 'left' in p ? p.left : undefined,
                  right: 'right' in p ? (p as { right?: string }).right : undefined,
                  background: p.color,
                  opacity: 0.65,
                  animationDelay: p.delay,
                  animationDuration: `${2.5 + i * 0.4}s`,
                  visibility: 'hidden',
                  filter: 'blur(0.5px)',
                }}
              />
            ))}
          </div>

          {/* The watch */}
          <div className="relative z-10 flex items-center justify-center" style={{ width: 300, height: 300 }}>
            <GoldenPocketWatch
              size={295}
              targetTime={12}
              onSlideEnter={true}
              watchPhase="idle"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="relative z-10 flex justify-between items-center s1-footer"
        style={{ fontSize: 'var(--text-label)', color: 'var(--color-muted)', visibility: 'hidden' }}
      >
        <span>{isArabic ? 'طلبة السنة الأولى علوم اقتصادية' : 'Première année · Sciences Économiques'}</span>
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: 'var(--color-teal)' }}
          />
          <span>{isArabic ? 'التحضير للامتحانات' : 'Excellence académique'}</span>
        </div>
      </div>
    </div>
  )
}
