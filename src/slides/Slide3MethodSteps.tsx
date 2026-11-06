import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { Scissors, Clock, Shield, Calendar, CheckSquare } from 'lucide-react'

interface SlideProps {
  language: 'fr' | 'ar'
}

export function Slide3MethodSteps({ language }: SlideProps) {
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'
  const containerRef = useRef<HTMLDivElement>(null)

  const title = isArabic ? 'Une méthode en cinq étapes' : 'Une méthode en cinq étapes'

  const steps = isArabic
    ? [
        { num: '01', title: 'تقسيم المهام', desc: 'تحويل الاستعداد إلى خطوات واضحة.', icon: Scissors },
        { num: '02', title: 'توزيع الوقت', desc: 'تنظيم العمل بطريقة واقعية.', icon: Clock },
        { num: '03', title: 'تخصيص هامش احتياطي', desc: 'إبقاء 5٪ من الوقت مرنًا.', icon: Shield },
        { num: '04', title: 'وضع جدول زمني', desc: 'التقدم من أكتوبر إلى ديسمبر عبر مراحل.', icon: Calendar },
        { num: '05', title: 'تنظيم الأجندة', desc: 'تحويل الخطة إلى مواعيد عملية.', icon: CheckSquare },
      ]
    : [
        { num: '01', title: 'Diviser la tâche', desc: 'Décomposer la préparation en actions claires.', icon: Scissors },
        { num: '02', title: 'Attribuer un temps', desc: 'Répartir le travail de façon réaliste.', icon: Clock },
        { num: '03', title: 'Prévoir une marge', desc: 'Garder 5 % de temps flexible.', icon: Shield },
        { num: '04', title: 'Établir un échéancier', desc: 'Avancer d’octobre à décembre par phases.', icon: Calendar },
        { num: '05', title: 'Organiser l’agenda', desc: 'Transformer le plan en rendez-vous concrets.', icon: CheckSquare },
      ]

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Prevent FOUC
      gsap.set(['.gsap-badge', '.gsap-heading', '.gsap-step-card'], { autoAlpha: 0, y: 25 })
      gsap.set('.gsap-accent-bar', { scaleX: 0 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.to('.gsap-badge', { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 })
        .to('.gsap-heading', { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.2')
        .to('.gsap-step-card', { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08 }, '-=0.3')
        .to('.gsap-accent-bar', { scaleX: 1, duration: 0.5, stagger: 0.06, ease: 'power2.out' }, '-=0.4')
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
      {/* Header */}
      <div className="flex items-center justify-between gsap-badge" style={{ visibility: 'hidden' }}>
        <PhaseBadge label={isArabic ? 'المراحل الخمس' : 'Méthode globale'} variant="teal" />
        <PhaseBadge label={isArabic ? 'مسار متصل' : 'Processus séquentiel'} variant="orange" />
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col justify-center gap-9 my-auto py-4">
        <div className="gsap-heading" style={{ visibility: 'hidden' }}>
          <PremiumHeading
            title={title}
            align={isArabic ? 'right' : 'left'}
            lang={language}
            onDark={false}
          />
        </div>

        {/* Cinematic Connected Progression Path */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-5 relative">
          {steps.map(({ num, title: st, desc, icon: Icon }, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between p-6 bg-white shadow-lg border transition-all hover:-translate-y-2 hover:shadow-xl group gsap-step-card"
              style={{ borderColor: '#E2E8F0', minHeight: '210px', visibility: 'hidden' }}
            >
              {/* Top Row: Icon + Step Number */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 bg-(--color-teal)/10 text-(--color-teal) flex items-center justify-center transition-all group-hover:bg-(--color-teal) group-hover:text-white shadow-sm">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <span className="font-mono text-base font-extrabold" style={{ color: 'var(--color-muted)', opacity: 0.6 }}>
                  {num}
                </span>
              </div>

              {/* Step Content */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-base leading-tight tracking-tight" style={{ color: 'var(--color-deep-navy)' }}>
                  {st}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {desc}
                </p>
              </div>

              {/* Bottom Glowing Accent Bar */}
              <div className="absolute bottom-0 left-6 right-6 h-1.5 bg-slate-100 group-hover:bg-(--color-teal) transition-colors shadow-xs gsap-accent-bar origin-left" />
            </div>
          ))}
        </div>

        <AccentLine progress={1} color="teal" />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-auto text-xs gsap-badge" style={{ color: 'var(--color-muted)', visibility: 'hidden' }}>
        <span>{isArabic ? 'الخطوات الخمس الأساسية للاستعداد' : 'Les 5 piliers de la réussite'}</span>
        <span className="uppercase tracking-widest font-semibold">{isArabic ? 'شريحة 3 من 14' : 'Slide 03'}</span>
      </div>
    </div>
  )
}
