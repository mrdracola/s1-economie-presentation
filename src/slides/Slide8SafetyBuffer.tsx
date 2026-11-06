import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { AmbientBackground } from '../components/AmbientBackground'
import { Shield, Clock, AlertCircle } from 'lucide-react'

interface SlideProps {
  language: 'fr' | 'ar'
}

export function Slide8SafetyBuffer({ language }: SlideProps) {
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'
  const containerRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  const bufferSegmentRef = useRef<HTMLDivElement>(null)

  const title = isArabic
    ? 'الخطوة 3 — هامش أمان بنسبة 5٪'
    : 'Étape 3 — Marge de sécurité de 5 %'
  const subtitle = isArabic
    ? 'احتياط مرن للإرهاق والدروس الصعبة والأحداث غير المتوقعة'
    : 'Réserve flexible pour fatigue, leçons difficiles, imprévus'

  const baseHours = 16
  const bufferPercent = 5
  const bufferMinutes = Math.round(baseHours * 60 * bufferPercent / 100) // 48 minutes
  const totalMinutes = baseHours * 60 + bufferMinutes // 1008 minutes
  const bufferWidthPercent = (bufferMinutes / totalMinutes) * 100 // ~4.76%

  const explanations = isArabic
    ? [
        { icon: AlertCircle, label: 'الإرهاق', desc: 'أيام تكون فيها الطاقة منخفضة', color: 'var(--color-orange)' },
        { icon: Shield, label: 'دروس صعبة', desc: 'مواد تحتاج وقت إضافي للفهم', color: 'var(--color-teal)' },
        { icon: Clock, label: 'غير متوقع', desc: 'طوارئ، مواعيد، مشاكل تقنية', color: '#A78BFA' },
      ]
    : [
        { icon: AlertCircle, label: 'Fatigue', desc: 'Jours où l\'énergie est basse', color: 'var(--color-orange)' },
        { icon: Shield, label: 'Leçons difficiles', desc: 'Matières nécessitant plus de temps', color: 'var(--color-teal)' },
        { icon: Clock, label: 'Imprévus', desc: 'Urgences, RDV, soucis techniques', color: '#A78BFA' },
      ]

  const note = isArabic
    ? 'هذه الـ 48 دقيقة ليست وقتاً إضافياً للدراسة، بل حزام أمان. إذا لم تستخدمها، ربحت راحة بال. إذا احتجتها، أنقذت أسبوعك.'
    : 'Ces 48 min ne sont pas du temps d\'étude en plus, mais une marge de manœuvre. Non utilisées = sérénité gagnée. Utilisées = semaine sauvée.'

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        ['.s8-badge', '.s8-heading', '.s8-main-visual', '.s8-explanation', '.s8-note'],
        { autoAlpha: 0, y: 18 }
      )
      gsap.set('.s8-base-segment', { scaleX: 0, transformOrigin: isArabic ? 'right' : 'left' })
      gsap.set('.s8-buffer-segment', { scaleX: 0, transformOrigin: isArabic ? 'right' : 'left' })
      gsap.set('.s8-total-label', { autoAlpha: 0, y: 10 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl
        .to('.s8-badge',    { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.45 })
        .to('.s8-heading',  { autoAlpha: 1, y: 0, duration: 0.6  }, '-=0.2')
        .to('.s8-main-visual', { autoAlpha: 1, y: 0, duration: 0.8, ease: 'back.out(1.1)' }, '-=0.3')

      // Animate base segment (16h)
      tl.to('.s8-base-segment', {
        scaleX: 1,
        duration: 1.2,
        ease: 'power2.out',
      }, '-=0.4')

      // Animate buffer segment (+48 min) with golden glow
      tl.to('.s8-buffer-segment', {
        scaleX: 1,
        duration: 1.0,
        ease: 'elastic.out(1, 0.5)',
      }, '-=0.3')

      // Animate total label
      tl.to('.s8-total-label', {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
      }, '-=0.2')

      // Animate counter 0 → 48
      const obj = { val: 0 }
      gsap.to(obj, {
        val: bufferMinutes,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.6,
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = '+' + Math.round(obj.val) + ' min'
          }
        },
      })

      tl
        .to('.s8-explanation', { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.5 }, '-=0.8')
        .to('.s8-note', { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.3')
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
      <div className="relative z-10 flex items-center justify-between s8-badge" style={{ visibility: 'hidden' }}>
        <PhaseBadge label={isArabic ? 'الخطوة 3 · هامش الأمان' : 'Étape 3 · Marge de sécurité'} variant="teal" />
        <PhaseBadge label={isArabic ? '5 ٪ = 48 دقيقة' : '5 % = 48 min'} variant="orange" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center gap-6 my-auto py-2">

        {/* Heading */}
        <div className="s8-heading" style={{ visibility: 'hidden' }}>
          <PremiumHeading
            title={title}
            subtitle={subtitle}
            align="center"
            lang={language}
            onDark={false}
          />
        </div>

        {/* Central visual: PREMIUM DUAL-BAR COMPARISON (Option A) */}
        <div className="s8-main-visual flex flex-col items-center justify-center gap-8 relative" style={{ visibility: 'hidden' }}>

          {/* Outer ambient glows */}
          <div className="absolute rounded-full blur-[80px] pointer-events-none" style={{ width: 400, height: 400, top: -100, left: -100, background: 'var(--color-gold)', opacity: 0.08 }}/>
          <div className="absolute rounded-full blur-[60px] pointer-events-none" style={{ width: 250, height: 250, bottom: -80, right: -80, background: 'var(--color-teal)', opacity: 0.06 }}/>

          {/* Main metric card */}
          <div className="relative z-10 w-full max-w-4xl px-4">

            {/* Big +48 min hero number */}
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl" style={{ background: 'rgba(255,215,0,0.15)', border: '2px solid rgba(255,215,0,0.3)' }}>
                <Shield size={28} strokeWidth={2.5} style={{ color: 'var(--color-gold)' }} />
              </div>
              <div ref={counterRef} className="font-extrabold tracking-tight" style={{ color: 'var(--color-deep-navy)', fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>
                +0 min
              </div>
              <span className="font-bold uppercase tracking-widest text-sm" style={{ color: 'var(--color-teal)' }}>
                {isArabic ? 'هامش الأمان 5 ٪' : 'Marge de sécurité 5 %'}
              </span>
            </div>

            {/* Dual-bar comparison visualization */}
            <div className="relative bg-white/50 backdrop-blur-xl rounded-2xl p-6 border" style={{
              borderColor: 'rgba(255,255,255,0.6)',
              boxShadow: '0 8px 32px -8px rgba(16,36,58,0.12), inset 0 1px 0 rgba(255,255,255,0.8)'
            }}>
              {/* Labels above bars */}
              <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2" style={{ color: 'var(--color-teal)' }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: 'var(--color-teal)' }} />
                  <span className="font-bold text-sm uppercase tracking-wider">{isArabic ? 'الأساس' : 'Base'}</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: 'var(--color-gold)' }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: 'linear-gradient(135deg, #FFD700, #F59E42)' }} />
                  <span className="font-bold text-sm uppercase tracking-wider">{isArabic ? 'الهامش' : 'Marge'}</span>
                </div>
              </div>

              {/* The bars container */}
              <div className="relative h-16 rounded-xl overflow-hidden" style={{
                background: 'rgba(16,36,58,0.06)',
                border: '1px solid rgba(16,36,58,0.08)'
              }}>
                {/* Base segment — 16h (95.24%) */}
                <div
                  className="s8-base-segment absolute top-0 bottom-0 flex items-center justify-end pr-4 z-10 transition-all"
                  style={{
                    width: `${100 - bufferWidthPercent}%`,
                    transformOrigin: isArabic ? 'right' : 'left',
                    background: 'linear-gradient(90deg, var(--color-teal), var(--color-teal))',
                    borderRadius: isArabic ? '0 12px 12px 0' : '12px 0 0 12px',
                  }}
                >
                  <span className="font-extrabold text-white text-sm drop-shadow-lg whitespace-nowrap">
                    {isArabic ? '16 ساعة' : '16 h'}
                  </span>
                </div>

                {/* Buffer segment — +48 min (4.76%) — GOLDEN GLOWING */}
                <div
                  ref={bufferSegmentRef}
                  className="s8-buffer-segment absolute top-0 bottom-0 flex items-center justify-center z-20 relative"
                  style={{
                    width: `${bufferWidthPercent}%`,
                    transformOrigin: isArabic ? 'right' : 'left',
                    background: 'linear-gradient(90deg, #FFD700, #F59E42, #FFD700)',
                    backgroundSize: '200% 100%',
                    boxShadow: '0 0 24px 4px rgba(255,215,0,0.5), inset 0 0 24px rgba(255,255,255,0.3)',
                    borderRadius: isArabic ? '12px 0 0 12px' : '0 12px 12px 0',
                    animation: 'goldShimmer 3s ease-in-out infinite',
                  }}
                >
                  <span className="font-extrabold text-[11px] text-[var(--color-deep-navy)] drop-shadow-[0_0_2px_rgba(255,255,255,0.8)] whitespace-nowrap">
                    {isArabic ? '+48 دق' : '+48 min'}
                  </span>
                </div>

                {/* Animation handled via GSAP instead of CSS */}
              </div>

              {/* Total label below the bar */}
              <div className="s8-total-label flex items-center justify-center gap-3 mt-4">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base" style={{ color: 'var(--color-muted)' }}>
                    {isArabic ? 'الإجمالي:' : 'Total:'}
                  </span>
                  <span className="font-extrabold text-lg" style={{ color: 'var(--color-deep-navy)' }}>
                    {isArabic ? '16 ساعة و 48 دقيقة' : '16 h 48 min'}
                  </span>
                </div>
                <div className="w-px h-6" style={{ background: 'rgba(16,36,58,0.1)' }} />
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base" style={{ color: 'var(--color-teal)' }}>
                    {isArabic ? 'أسبوعي' : 'hebdo'}
                  </span>
                </div>
              </div>
            </div>

            {/* Formula explanation — clean and visual */}
            <div className="relative z-10 flex items-center justify-center gap-3 lg:gap-6 mt-6 flex-wrap">
              <div className="flex flex-col items-center gap-1.5 text-center">
                <span className="font-extrabold" style={{ color: 'var(--color-teal)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>16 h</span>
                <span className="font-bold text-[10px] uppercase tracking-wider" style={{ color: 'var(--color-muted)' }}>
                  {isArabic ? 'الأساس' : 'Base'}
                </span>
              </div>
              <div className="flex items-center gap-1" style={{ color: 'rgba(255,215,0,0.8)' }}>
                <span style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>+</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <span className="font-extrabold" style={{ color: 'var(--color-gold)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>5 %</span>
                <span className="font-bold text-[10px] uppercase tracking-wider" style={{ color: 'var(--color-muted)' }}>
                  {isArabic ? 'الهامش' : 'Marge'}
                </span>
              </div>
              <div className="flex items-center gap-1" style={{ color: 'rgba(19,184,166,0.8)' }}>
                <span style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>=</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <span className="font-extrabold" style={{ color: 'var(--color-deep-navy)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
                  {isArabic ? '16س 48د' : '16h 48min'}
                </span>
                <span className="font-bold text-[10px] uppercase tracking-wider" style={{ color: 'var(--color-teal)' }}>
                  {isArabic ? 'الإجمالي' : 'Total'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Three explanation cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {explanations.map((item, idx) => (
            <div
              key={idx}
              className="s8-explanation flex flex-col items-center text-center p-5 relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
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

              <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-3" style={{ background: `${item.color}15` }}>
                <item.icon size={24} strokeWidth={2} style={{ color: item.color }} />
              </div>
              <h3 className="font-bold text-base mb-1" style={{ color: 'var(--color-primary-navy)' }}>
                {item.label}
              </h3>
              <p className="text-sm font-medium leading-relaxed" style={{ color: '#475569' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <AccentLine progress={0.9} color="teal" />

        {/* Note banner */}
        <div className="s8-note flex items-center gap-4 p-4" style={{ visibility: 'hidden', background: 'rgba(255,255,255,0.60)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(203,213,225,0.7)', borderRadius: '10px' }}>
          <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full" style={{ background: 'rgba(255,215,0,0.15)' }}>
            <Shield size={17} style={{ color: 'var(--color-gold)' }} strokeWidth={2.2} />
          </div>
          <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--color-primary-navy)' }}>{note}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex justify-between items-center mt-auto text-xs s8-badge" style={{ color: 'var(--color-muted)', visibility: 'hidden' }}>
        <span>{isArabic ? 'هامش الأمان = راحة البال' : 'Marge de sécurité = sérénité'}</span>
        <span className="uppercase tracking-widest font-semibold">{isArabic ? 'شريحة 8 من 10' : 'Slide 08'}</span>
      </div>
    </div>
  )
}