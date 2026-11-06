import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { BookOpen, CheckCircle, ShieldCheck } from 'lucide-react'

interface SlideProps {
  language: 'fr' | 'ar'
}

export function Slide2Introduction({ language }: SlideProps) {
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'
  const containerRef = useRef<HTMLDivElement>(null)

  const arabicTitle = isArabic ? 'الاستعداد المنهجي للامتحانات' : 'Se préparer avec méthode'

  const paragraphs = isArabic
    ? [
        'مرحبًا بكم. سنعرض اليوم منهجية لتنظيم الاستعداد لامتحانات الفصل الأول في الاقتصاد، من أكتوبر إلى ديسمبر.',
        'هدفنا أن نعمل بانتظام، ونفهم الدروس تدريجيًا، ونستعد للامتحانات بثقة.',
        'يعتمد البرنامج على خمس خطوات، وتوزيع واقعي للوقت، وجدول زمني واضح.',
      ]
    : [
        'Bonjour à tous. Aujourd’hui, nous vous présentons une méthode d’organisation pour préparer les examens du S1 Économie, d’octobre à décembre.',
        'Notre objectif : travailler avec régularité, comprendre les cours progressivement et aborder les examens avec confiance.',
        'Le programme repose sur cinq étapes, une répartition réaliste du temps et un calendrier précis.',
      ]

  const principles = isArabic
    ? [
        { title: 'الانتظام', desc: 'العمل باستمرار ودون انقطاع', icon: BookOpen },
        { title: 'الفهم التدريجي', desc: 'استيعاب المفاهيم بعمق وتأني', icon: CheckCircle },
        { title: 'الثقة', desc: 'دخول الامتحان بكل اطمئنان وجاهزية', icon: ShieldCheck },
      ]
    : [
        { title: 'Régularité', desc: 'Travail soutenu et constant chaque semaine', icon: BookOpen },
        { title: 'Compréhension', desc: 'Assimilation progressive et approfondie', icon: CheckCircle },
        { title: 'Confiance', desc: 'Aborder les épreuves sereinement', icon: ShieldCheck },
      ]

  const timeline = isArabic
    ? [
        { period: 'أكتوبر', desc: 'الفهم والتعلم' },
        { period: 'نوفمبر', desc: 'الترسيخ والممارسة' },
        { period: 'ديسمبر', desc: 'المراجعة والتدريب' },
      ]
    : [
        { period: 'Octobre', desc: 'Apprentissage' },
        { period: 'Novembre', desc: 'Consolidation' },
        { period: 'Décembre', desc: 'Révision & Examens' },
      ]

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Prevent FOUC by setting initial hidden state
      gsap.set(['.gsap-badge', '.gsap-heading', '.gsap-paragraph', '.gsap-principle', '.gsap-timeline-item'], { autoAlpha: 0, y: 20 })
      gsap.set('.gsap-timeline-line', { scaleX: 0 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.to('.gsap-badge', { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 })
        .to('.gsap-heading', { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.2')
        .to('.gsap-paragraph', { autoAlpha: 1, x: 0, y: 0, duration: 0.6, stagger: 0.1 }, '-=0.3')
        .to('.gsap-principle', { autoAlpha: 1, x: 0, y: 0, duration: 0.6, stagger: 0.08 }, '-=0.4')
        .to('.gsap-timeline-line', { scaleX: 1, duration: 0.8, ease: 'power2.out' }, '-=0.3')
        .to('.gsap-timeline-item', { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1 }, '-=0.5')
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
        <PhaseBadge label={isArabic ? 'المقدمة والأهداف' : 'Introduction'} variant="teal" />
        <PhaseBadge label={isArabic ? 'رؤية شاملة' : 'S1 · Vue d’ensemble'} variant="orange" />
      </div>

      {/* Editorial Composition */}
      <div className="flex-1 flex flex-col justify-center gap-7 my-auto py-3">
        <div className="gsap-heading" style={{ visibility: 'hidden' }}>
          <PremiumHeading
            title={arabicTitle}
            align={isArabic ? 'right' : 'left'}
            lang={language}
            onDark={false}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left / Main Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="leading-relaxed font-normal gsap-paragraph"
                style={{ fontSize: 'var(--text-body)', color: 'var(--color-primary-navy)', opacity: 0.9, visibility: 'hidden' }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Right: Asymmetric Editorial Principles Stack */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {principles.map(({ title: pt, desc, icon: Icon }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-white shadow-md border-l-4 transition-all hover:translate-x-1 gsap-principle"
                style={{ borderColor: idx === 0 ? 'var(--color-teal)' : idx === 1 ? 'var(--color-orange)' : 'var(--color-primary-navy)', visibility: 'hidden' }}
              >
                <div className="w-10 h-10 bg-slate-100 text-(--color-primary-navy) flex items-center justify-center shrink-0">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm tracking-tight" style={{ color: 'var(--color-deep-navy)' }}>{pt}</span>
                  <span className="text-xs font-normal" style={{ color: 'var(--color-muted)' }}>{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gsap-timeline-line origin-left" style={{ visibility: 'hidden' }}>
          <AccentLine progress={1} color="teal" />
        </div>

        {/* Editorial Timeline Motif */}
        <div className="grid grid-cols-3 gap-5 pt-1">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="relative flex items-center gap-3.5 p-4 bg-white shadow-sm border gsap-timeline-item"
              style={{ borderColor: '#E2E8F0', visibility: 'hidden' }}
            >
              <div className="w-3.5 h-3.5 bg-(--color-teal) shrink-0 shadow-sm" />
              <div className="flex flex-col">
                <span className="font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--color-deep-navy)' }}>
                  {item.period}
                </span>
                <span className="text-[11px]" style={{ color: 'var(--color-muted)' }}>
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-auto text-xs gsap-badge" style={{ color: 'var(--color-muted)', visibility: 'hidden' }}>
        <span>{isArabic ? 'منهجية العمل الأسبوعي' : 'Méthode rigoureuse'}</span>
        <span className="uppercase tracking-widest font-semibold">{isArabic ? 'شريحة 2 من 14' : 'Slide 02'}</span>
      </div>
    </div>
  )
}
