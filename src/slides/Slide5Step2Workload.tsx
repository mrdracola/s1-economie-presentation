import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { StudyClock } from '../components/StudyClock'
import { WorkloadRings } from '../components/WorkloadRings'
import { Clock } from 'lucide-react'

interface SlideProps {
  language: 'fr' | 'ar'
}

export function Slide5Step2Workload({ language }: SlideProps) {
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'
  const containerRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)

  const title = isArabic ? 'Étape 2 — Attribuer un temps à chaque partie' : 'Étape 2 — Attribuer un temps à chaque partie'
  const subtitle = isArabic ? 'برنامج أسبوعي مدروس ومتوازن للاستعداد الأمثل' : 'Programme hebdomadaire structuré et équilibré'

  const schedule = isArabic
    ? [
        { period: 'من الاثنين إلى الجمعة', time: '18:00 – 20:00', hours: '10 ساعات', desc: 'ساعتان يومياً (الدرس + مراجعة الملخصات).' },
        { period: 'السبت', time: '09:00 – 12:00', hours: '3 ساعات', desc: 'تمارين تطبيقية وورشات عملية.' },
        { period: 'الأحد', time: '09:00 – 12:00', hours: '3 ساعات', desc: 'تمارين إضافية، أسئلة متعددة الاختيارات، تصحيح وتحليل الأخطاء.' },
      ]
    : [
        { period: 'Lundi – Vendredi', time: '18 h – 20 h', hours: '10 h', desc: '2 heures par jour (Cours + Résumé).' },
        { period: 'Samedi', time: '09 h – 12 h', hours: '3 h', desc: 'Exercices pratiques.' },
        { period: 'Dimanche', time: '09 h – 12 h', hours: '3 h', desc: 'Exercices supplémentaires, QCM, correction, analyse des erreurs.' },
      ]

  const totalLabel = isArabic ? 'المجموع الأسبوعي' : 'Total hebdomadaire'
  const totalValue = isArabic ? '16 ساعة أسبوعياً' : '16 heures par semaine'

  const note = isArabic
    ? 'يخص هذا البرنامج الأسبوعي شهري أكتوبر ونوفمبر. أما ديسمبر فيتبع مرحلتين مخصصتين للمراجعة والتدريب.'
    : 'Cette routine hebdomadaire concerne octobre et novembre. Décembre suit deux phases spécifiques.'

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Prevent FOUC
      gsap.set(['.gsap-badge', '.gsap-heading', '.gsap-schedule-card', '.gsap-focal-card', '.gsap-note', '.gsap-clock-root', '.gsap-rings-root'], { autoAlpha: 0, y: 20 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.to('.gsap-badge', { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 })
        .to('.gsap-heading', { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.2')
        .to('.gsap-schedule-card', { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08 }, '-=0.3')
        .to('.gsap-focal-card', { autoAlpha: 1, scale: 1, duration: 0.7, ease: 'back.out(1.2)' }, '-=0.4')
        .to('.gsap-note', { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.3')
        .to(['.gsap-clock-root', '.gsap-rings-root'], { autoAlpha: 1, duration: 0.5 }, '-=0.5')

      // Animated counter from 0 to 16
      if (counterRef.current) {
        const obj = { val: 0 }
        gsap.to(obj, {
          val: 16,
          duration: 1.2,
          ease: 'power2.out',
          delay: 0.3,
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.textContent = Math.round(obj.val) + ' h'
            }
          }
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef, dependencies: [language] })

  return (
    <div
      ref={containerRef}
      className={`flex flex-col justify-between h-full w-full relative ${isArabic ? 'font-arabic' : ''}`}
      lang={language}
      dir={dir}
      style={{ background: 'var(--color-off-white)' }}
    >
      {/* Ambient background glow mesh shift */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-(--color-teal)/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between gsap-badge z-10" style={{ visibility: 'hidden' }}>
        <PhaseBadge label={isArabic ? 'الخطوة 2 · الوقت المخصص' : 'Étape 2 · Volume horaire'} variant="teal" />
        <PhaseBadge label={isArabic ? '16 ساعة / أسبوع' : '16 h / semaine'} variant="orange" />
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col justify-center gap-7 my-auto py-3 z-10">
        <div className="gsap-heading" style={{ visibility: 'hidden' }}>
          <PremiumHeading
            title={title}
            subtitle={subtitle}
            align={isArabic ? 'right' : 'left'}
            lang={language}
            onDark={false}
          />
        </div>

        {/* Schedule Grid + Prominent Focal Point Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* 3 Schedule Blocks */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {schedule.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-5 bg-white shadow-lg border transition-all hover:shadow-xl gsap-schedule-card relative overflow-hidden"
                style={{ borderColor: '#E2E8F0', visibility: 'hidden' }}
              >
                {/* Embedded Mini Study Clock for weekday vs weekend */}
                <div className="absolute top-3 right-3 opacity-20 pointer-events-none gsap-clock-root" style={{ visibility: 'hidden' }}>
                  <StudyClock mode={idx === 0 ? 'weekday' : 'weekend'} size={60} />
                </div>

                <div className="flex flex-col gap-1.5 mb-4 relative z-10">
                  <span className="font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--color-teal)' }}>
                    {item.period}
                  </span>
                  <span className="font-mono font-bold text-lg" style={{ color: 'var(--color-deep-navy)' }}>
                    {item.time}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 pt-3 border-t relative z-10" style={{ borderColor: '#F1F5F9' }}>
                  <span className="font-bold text-sm" style={{ color: 'var(--color-primary-navy)' }}>
                    {item.hours}
                  </span>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Prominent Visual Focal Point */}
          <div
            className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-(--color-primary-navy) text-(--color-off-white) shadow-2xl text-center relative overflow-hidden gsap-focal-card"
            style={{ visibility: 'hidden' }}
          >
            <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-(--color-teal)/20 rounded-full blur-2xl pointer-events-none" />

            {/* Apple-style Activity Rings Component */}
            <div className="gsap-rings-root" style={{ visibility: 'hidden' }}>
              <WorkloadRings size={130} className="mb-2" />
            </div>

            <span className="font-bold uppercase tracking-widest text-[11px] mb-1" style={{ color: 'var(--color-teal)' }}>
              {totalLabel}
            </span>
            <div
              ref={counterRef}
              className="font-extrabold tracking-tight text-3xl text-white"
            >
              0 h
            </div>
            <span className="text-xs font-medium text-(--color-off-white)/90">
              {totalValue}
            </span>
            <div className="mt-3 pt-2 border-t w-full text-[10px] text-(--color-muted)" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              10h (semaine) + 6h (week-end) + 5% Marge
            </div>
          </div>
        </div>

        <AccentLine progress={0.75} color="teal" />

        {/* Note Banner */}
        <div
          className="p-4 border bg-white flex items-center gap-3.5 shadow-sm gsap-note"
          style={{ borderColor: '#CBD5E1', visibility: 'hidden' }}
        >
          <div className="w-9 h-9 bg-(--color-orange)/15 text-(--color-orange) flex items-center justify-center shrink-0">
            <Clock size={18} strokeWidth={2} />
          </div>
          <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: 'var(--color-primary-navy)' }}>
            {note}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-auto text-xs gsap-badge z-10" style={{ color: 'var(--color-muted)', visibility: 'hidden' }}>
        <span>{isArabic ? 'تنظيم أوقات الاستعداد الأسبوعي' : 'Gestion rigoureuse du temps'}</span>
        <span className="uppercase tracking-widest font-semibold">{isArabic ? 'شريحة 5 من 14' : 'Slide 05'}</span>
      </div>
    </div>
  )
}
