import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { AmbientBackground } from '../components/AmbientBackground'
import { CheckCircle, Sparkles, RefreshCw, Trophy, Star } from 'lucide-react'

interface SlideProps {
  language: 'fr' | 'ar'
}

export function Slide14Conclusion({ language }: SlideProps) {
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'
  const containerRef = useRef<HTMLDivElement>(null)

  const title = isArabic
    ? 'مفاتيح النجاح في S1 اقتصاد'
    : 'Les Clés du Succès en S1 Économie'

  const subtitle = isArabic
    ? 'خلاصة المنهجية الخماسية والتجربة الأكاديمية'
    : 'Synthèse de la méthode en 5 étapes et de l\'expérience académique'

  // Summary of the 5-step method
  const stepsSummary = isArabic
    ? [
        { num: '01', title: 'تجزئة المهام', desc: 'تقسيم المقررات إلى وحدات صغيرة قابلة للإنجاز' },
        { num: '02', title: 'تخصيص الوقت', desc: '16 ساعة أسبوعية موزعة بانتظام' },
        { num: '03', title: 'هامش الأمان', desc: '+5% (+48 دقيقة) لامتصاص الطوارئ' },
        { num: '04', title: 'الإجدول الزمني', desc: '4 مراحل من أكتوبر إلى ديسمبر' },
        { num: '05', title: 'تنظيم الأجندة', desc: 'جدول يومي محدد يضمن الاستمرارية' },
      ]
    : [
        { num: '01', title: 'Diviser', desc: 'Découper le programme en unités maîtresses' },
        { num: '02', title: 'Attribuer', desc: '16h hebdomadaires réparties régulièrement' },
        { num: '03', title: 'Marge', desc: '+5% (+48 min) pour absorber les imprévus' },
        { num: '04', title: 'Échéancier', desc: '4 phases structurées d\'octobre à décembre' },
        { num: '05', title: 'Agenda', desc: 'Horaires quotidiens fixes pour la régularité' },
      ]

  const callToAction = isArabic
    ? 'النجاح ليس حظاً، بل نتيجة خطة منضبطة وتنفيذ يومي مستمر.'
    : 'Le succès n\'est pas un hasard, c\'est le résultat d\'un plan discipliné et d\'une exécution quotidienne.'

  const restartPresentation = () => {
    // Dispatch a custom event or keyboard event to navigate back to slide 1
    window.location.reload()
  }

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        ['.s14-badge', '.s14-heading', '.s14-gold-badge', '.s14-step-card', '.s14-cta', '.s14-actions', '.s14-note'],
        { autoAlpha: 0, y: 18 }
      )

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl
        .to('.s14-badge', { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.45 })
        .to('.s14-heading', { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.2')
        .to('.s14-gold-badge', {
          autoAlpha: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.2)',
        }, '-=0.3')
        .to('.s14-step-card', {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: 'back.out(1.1)',
        }, '-=0.3')
        .to('.s14-cta', { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.2')
        .to('.s14-actions', { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.2')
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
      <div className="relative z-10 flex items-center justify-between s14-badge" style={{ visibility: 'hidden' }}>
        <PhaseBadge label={isArabic ? 'الخلاصة · مفاتيح النجاح' : 'Conclusion · Clés du Succès'} variant="teal" />
        <PhaseBadge label={isArabic ? 'S1 اقتصاد 100%' : 'S1 Économie 100%'} variant="orange" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center gap-4 my-auto py-2">

        {/* Heading */}
        <div className="s14-heading" style={{ visibility: 'hidden' }}>
          <PremiumHeading
            title={title}
            subtitle={subtitle}
            align="center"
            lang={language}
            onDark={false}
          />
        </div>

        {/* Golden Balance Badge / Highlight */}
        <div className="s14-gold-badge relative flex flex-col items-center justify-center p-4 max-w-md mx-auto w-full" style={{ visibility: 'hidden' }}>
          <div
            className="relative flex items-center gap-3 px-6 py-3 rounded-2xl shadow-xl transition-transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, rgba(245,158,66,0.2), rgba(19,184,166,0.2))',
              border: '2px solid rgba(245,158,66,0.5)',
              boxShadow: '0 12px 36px -8px rgba(245,158,66,0.3)',
            }}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: 'linear-gradient(135deg, var(--color-orange), var(--color-teal))' }}>
              <Trophy size={20} className="text-white" strokeWidth={2.2} />
            </div>
            <div className="text-center">
              <div className="font-extrabold text-base uppercase tracking-wider" style={{ color: 'var(--color-primary-navy)' }}>
                {isArabic ? 'التوازن الذهبي' : 'Le Golden Balance'}
              </div>
              <div className="text-sm font-semibold" style={{ color: 'var(--color-orange)' }}>
                {isArabic ? '16 ساعة / أسبوع = تفوق أكاديمي' : '16h / semaine = Réussite académique'}
              </div>
            </div>
            <Sparkles size={18} style={{ color: 'var(--color-orange)' }} className="animate-pulse" />
          </div>
        </div>

        {/* 5-Step Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 w-full max-w-6xl mx-auto">
          {stepsSummary.map((step, idx) => (
            <div
              key={idx}
              className="s14-step-card relative flex flex-col p-4 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{
                visibility: 'hidden',
                transform: 'scale(0.95)',
                background: 'rgba(255,255,255,0.78)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(19,184,166,0.25)',
                boxShadow: '0 4px 20px -4px rgba(16,36,58,0.08)',
                borderRadius: '14px',
              }}
            >
              {/* Number Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono font-extrabold text-sm px-2 py-0.5 rounded" style={{ background: 'rgba(19,184,166,0.15)', color: 'var(--color-teal)' }}>
                  {step.num}
                </span>
                <CheckCircle size={14} style={{ color: 'var(--color-teal)' }} />
              </div>

              {/* Title */}
              <h4 className="font-bold text-sm uppercase tracking-wider mb-2" style={{ color: 'var(--color-primary-navy)' }}>
                {step.title}
              </h4>

              {/* Desc */}
              <p className="text-sm font-medium leading-relaxed" style={{ color: '#475569' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <AccentLine progress={1} color="teal" />

        {/* Call to Action Banner */}
        <div className="s14-cta relative flex flex-col items-center justify-center p-4 max-w-3xl mx-auto w-full text-center" style={{ visibility: 'hidden' }}>
          <div
            className="p-5 rounded-xl w-full"
            style={{
              background: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(19,184,166,0.3)',
              boxShadow: '0 8px 32px -8px rgba(16,36,58,0.1)',
            }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star size={16} style={{ color: 'var(--color-orange)' }} />
              <span className="font-extrabold text-base uppercase tracking-wider" style={{ color: 'var(--color-primary-navy)' }}>
                {isArabic ? 'رسالة للطلاب' : 'Message aux Étudiants'}
              </span>
              <Star size={16} style={{ color: 'var(--color-orange)' }} />
            </div>
            <p className="text-base font-semibold leading-relaxed" style={{ color: 'var(--color-primary-navy)' }}>
              "{callToAction}"
            </p>
          </div>
        </div>

        {/* Action Controls / Completion Highlight */}
        <div className="s14-actions relative flex items-center justify-center gap-4 mt-2" style={{ visibility: 'hidden' }}>
          <button
            onClick={restartPresentation}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-md cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, var(--color-teal), var(--color-deep-navy))',
              color: '#ffffff',
            }}
          >
            <RefreshCw size={14} />
            <span>{isArabic ? 'إعادة العرض' : 'Redémarrer la présentation'}</span>
          </button>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold" style={{ background: 'rgba(19,184,166,0.15)', color: 'var(--color-teal)', border: '1px solid rgba(19,184,166,0.3)' }}>
            <Sparkles size={14} />
            <span>{isArabic ? 'مكافأة 14/14 شريحة' : '14 / 14 Slides Complétées'}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex justify-between items-center mt-auto text-xs s14-badge" style={{ color: 'var(--color-muted)', visibility: 'hidden' }}>
        <span>{isArabic ? 'بالتوفيق في S1' : 'Bonne chance pour le S1'}</span>
        <span className="uppercase tracking-widest font-semibold">{isArabic ? 'شريحة 14 من 14' : 'Slide 14 / 14'}</span>
      </div>
    </div>
  )
}