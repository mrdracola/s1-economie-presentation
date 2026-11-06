import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { BookOpen, FileText, Dumbbell, CheckCircle2, Award, ArrowRight, ArrowLeft } from 'lucide-react'

interface SlideProps {
  language: 'fr' | 'ar'
}

export function Slide4Step1Divide({ language }: SlideProps) {
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'
  const containerRef = useRef<HTMLDivElement>(null)

  const title = isArabic ? 'Étape 1 — Diviser la tâche' : 'Étape 1 — Diviser la tâche'
  const subtitle = isArabic ? 'خمس مهام أساسية لتنظيم أسبوعك الدراسي' : 'Cinq tâches fondamentales pour structurer votre semaine'

  const tasks = isArabic
    ? [
        { title: 'درس اليوم', desc: 'فهم الدروس الجديدة واستيعاب أساسياتها.', icon: BookOpen },
        { title: 'الملخص', desc: 'مراجعة الدرس واستخلاص أهم أفكاره.', icon: FileText },
        { title: 'التطبيق', desc: 'التدريب بتمارين حول دروس الأسبوع.', icon: Dumbbell },
        { title: 'التحقق', desc: 'إنجاز أسئلة الاختيار المتعدد وتصحيح الأخطاء.', icon: CheckCircle2 },
        { title: 'الاستعداد النهائي', desc: 'إجراء مراجعة عامة واختبارات تجريبية.', icon: Award },
      ]
    : [
        { title: 'Cours du jour', desc: 'Comprendre les nouvelles leçons en amphi.', icon: BookOpen },
        { title: 'Résumé', desc: 'Revoir le cours et en extraire l’essentiel.', icon: FileText },
        { title: 'Application', desc: 'Pratiquer avec des exercices ciblés.', icon: Dumbbell },
        { title: 'Validation', desc: 'Faire des QCM et analyser les erreurs.', icon: CheckCircle2 },
        { title: 'Finalisation', desc: 'Révision générale et examens blancs.', icon: Award },
      ]

  const quote = isArabic
    ? 'يساعد هذا التدرج على تجنب تراكم الدروس حتى اللحظة الأخيرة.'
    : 'Cette progression évite d’accumuler les cours à la dernière minute.'

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Prevent FOUC
      gsap.set(['.gsap-badge', '.gsap-heading', '.gsap-task-card', '.gsap-arrow', '.gsap-banner'], { autoAlpha: 0, y: 20 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.to('.gsap-badge', { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 })
        .to('.gsap-heading', { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.2')
        .to('.gsap-task-card', { autoAlpha: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.08 }, '-=0.3')
        .to('.gsap-arrow', { autoAlpha: 1, scale: 1, duration: 0.4, stagger: 0.08 }, '-=0.4')
        .to('.gsap-banner', { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.3')
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
        <PhaseBadge label={isArabic ? 'الخطوة 1 · تقسيم العمل' : 'Étape 1 · Diviser'} variant="teal" />
        <PhaseBadge label={isArabic ? 'مسار التعلم' : 'Parcours d’apprentissage'} variant="orange" />
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col justify-center gap-7 my-auto py-3">
        <div className="gsap-heading" style={{ visibility: 'hidden' }}>
          <PremiumHeading
            title={title}
            subtitle={subtitle}
            align={isArabic ? 'right' : 'left'}
            lang={language}
            onDark={false}
          />
        </div>

        {/* Learning Journey Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative items-center">
          {tasks.map(({ title: tt, desc, icon: Icon }, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group gsap-task-card"
              style={{ visibility: 'hidden' }}
            >
              <div
                className="w-full p-5 bg-white shadow-lg border flex flex-col gap-3.5 transition-all hover:shadow-xl hover:-translate-y-1"
                style={{ borderColor: '#E2E8F0', minHeight: '180px' }}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-(--color-teal)/10 text-(--color-teal) flex items-center justify-center shadow-sm">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <span className="font-mono text-xs font-extrabold text-(--color-muted)">
                    0{idx + 1}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-bold text-sm leading-tight tracking-tight" style={{ color: 'var(--color-deep-navy)' }}>
                    {tt}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                    {desc}
                  </p>
                </div>
              </div>

              {/* Connecting arrow between cards on desktop */}
              {idx < tasks.length - 1 && (
                <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-(--color-teal) text-white items-center justify-center shadow-md gsap-arrow" style={{ visibility: 'hidden' }}>
                  <ArrowIcon size={14} strokeWidth={3} />
                </div>
              )}
            </div>
          ))}
        </div>

        <AccentLine progress={0.66} color="teal" />

        {/* Concluding Message Banner */}
        <div
          className="p-4 border bg-white flex items-center justify-center text-center shadow-sm gsap-banner"
          style={{ borderColor: '#CBD5E1', visibility: 'hidden' }}
        >
          <p className="font-semibold text-sm" style={{ color: 'var(--color-primary-navy)' }}>
            "{quote}"
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-auto text-xs gsap-badge" style={{ color: 'var(--color-muted)', visibility: 'hidden' }}>
        <span>{isArabic ? 'المنهجية التدريجية للاستعداد' : 'Progression méthodique'}</span>
        <span className="uppercase tracking-widest font-semibold">{isArabic ? 'شريحة 4 من 14' : 'Slide 04'}</span>
      </div>
    </div>
  )
}
