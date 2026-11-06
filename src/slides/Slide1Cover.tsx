import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { Clock, Calendar, BookOpen, Layers, CheckCircle } from 'lucide-react'

interface SlideProps {
  language: 'fr' | 'ar'
}

export function Slide1Cover({ language }: SlideProps) {
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
      // Prevent FOUC by setting initial hidden state immediately on mount
      gsap.set(['.gsap-badge', '.gsap-title-area > *', '.gsap-illustration', '.gsap-node'], { autoAlpha: 0, y: 20 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.to('.gsap-badge', { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 })
        .to('.gsap-title-area > *', { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12 }, '-=0.3')
        .to('.gsap-illustration', { autoAlpha: 1, scale: 1, y: 0, duration: 0.7 }, '-=0.5')
        .to('.gsap-node', { autoAlpha: 1, x: 0, duration: 0.5, stagger: 0.08 }, '-=0.4')

      gsap.to('.gsap-clock', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'linear',
      })
    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef, dependencies: [language] })

  return (
    <div
      ref={containerRef}
      className={`flex flex-col justify-between h-full w-full ${isArabic ? 'font-arabic' : ''}`}
      lang={language}
      dir={dir}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between gsap-badge" style={{ visibility: 'hidden' }}>
        <PhaseBadge label={isArabic ? 'الفصل الأول · اقتصاد' : 'S1 Économie'} variant="teal" />
        <PhaseBadge label={isArabic ? 'أكتوبر – ديسمبر' : 'Octobre – Décembre'} variant="orange" />
      </div>

      {/* Cinematic Split Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-4 gsap-title-area">
        {/* Left Side: Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-3" style={{ visibility: 'hidden' }}>
            <span className="h-0.5 w-12 bg-(--color-teal)" />
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--color-teal)' }}>
              {isArabic ? 'منهجية أكاديمية متقدمة' : 'Méthode Universitaire'}
            </span>
          </div>

          <div style={{ visibility: 'hidden' }}>
            <PremiumHeading
              title={title}
              subtitle={subtitle}
              align={isArabic ? 'right' : 'left'}
              lang={language}
              onDark={true}
            />
          </div>

          <div style={{ visibility: 'hidden' }}>
            <AccentLine progress={0.5} color="teal" className="max-w-xs" />
          </div>
        </div>

        {/* Right Side: Sophisticated Layered Card */}
        <div className="lg:col-span-5 relative flex items-center justify-center gsap-illustration" style={{ visibility: 'hidden' }}>
          <div className="absolute -inset-6 bg-gradient-to-tr from-(--color-teal)/15 via-(--color-primary-navy)/40 to-(--color-orange)/10 rounded-full blur-3xl pointer-events-none" />

          <div
            className="relative w-full p-7 border flex flex-col gap-6 shadow-2xl backdrop-blur-xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 36, 58, 0.85) 0%, rgba(7, 24, 39, 0.95) 100%)',
              borderColor: 'rgba(19, 184, 166, 0.2)'
            }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-(--color-teal)/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b pb-4 relative z-10" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-(--color-teal)/20 text-(--color-teal) flex items-center justify-center shadow-inner border border-(--color-teal)/30 gsap-clock">
                  <Clock size={22} strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {isArabic ? 'هندسة التحضير' : 'Architecture S1'}
                  </span>
                  <span className="text-[11px]" style={{ color: 'var(--color-muted)' }}>
                    {isArabic ? 'خطة متكاملة للاثني عشر أسبوعاً' : '12 semaines de maîtrise'}
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-(--color-orange)/20 text-(--color-orange) border border-(--color-orange)/30 shadow-sm">
                {isArabic ? 'إستراتيجية' : 'Masterclass'}
              </span>
            </div>

            <div className="flex flex-col gap-3.5 relative z-10">
              {[
                { label: isArabic ? '1. تقسيم المهام والوقت بدقة' : '1. Diviser & planifier', icon: BookOpen, active: true },
                { label: isArabic ? '2. حجم العمل الأسبوعي (16 س)' : '2. Volume (16 h/semaine)', icon: Calendar, active: true },
                { label: isArabic ? '3. هامش الأمان المرن (5 %)' : '3. Marge de sécurité (5 %)', icon: Layers, active: false },
              ].map((node, idx) => {
                const IconComponent = node.icon
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 border bg-white/5 backdrop-blur-sm gsap-node"
                    style={{ borderColor: node.active ? 'rgba(19, 184, 166, 0.3)' : 'rgba(255,255,255,0.06)', visibility: 'hidden' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 flex items-center justify-center ${node.active ? 'bg-(--color-teal)/20 text-(--color-teal)' : 'bg-white/10 text-white/70'}`}>
                        <IconComponent size={16} />
                      </div>
                      <span className="text-xs font-semibold text-(--color-off-white)">
                        {node.label}
                      </span>
                    </div>
                    <CheckCircle size={14} className={node.active ? 'text-(--color-teal)' : 'text-white/30'} />
                  </div>
                )
              })}
            </div>

            <div className="flex items-center justify-between pt-2 text-[11px] relative z-10" style={{ color: 'var(--color-muted)' }}>
              <span>{isArabic ? 'منهجية معتمدة' : 'Méthode validée'}</span>
              <span className="font-mono text-(--color-teal) font-bold">Octobre — Décembre</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer info */}
      <div className="flex justify-between items-center text-(--color-muted) gsap-badge" style={{ fontSize: 'var(--text-label)', visibility: 'hidden' }}>
        <span>{isArabic ? 'طلبة السنة الأولى علوم اقتصادية' : 'Première année · Sciences Économiques'}</span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-(--color-teal) animate-pulse" />
          <span>{isArabic ? 'التحضير للامتحانات' : 'Excellence académique'}</span>
        </div>
      </div>
    </div>
  )
}
