import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { AmbientBackground } from '../components/AmbientBackground'
import { Building2, Calculator, BookOpen, Scale, TrendingUp, GraduationCap } from 'lucide-react'

interface SlideProps {
  language: 'fr' | 'ar'
}

export function Slide9S1Modules({ language }: SlideProps) {
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'
  const containerRef = useRef<HTMLDivElement>(null)

  const title = isArabic
    ? 'الوحدات الدراسية السبع للفصل الأول'
    : 'Les sept modules du S1 Économie'
  const subtitle = isArabic
    ? 'توزيع متوازن: كمي، نظري، ومنهجي'
    : 'Répartition équilibrée : Quantitatif, Théorique, Méthodologique'

  // Module data with category colors
  const modules = isArabic
    ? [
        { id: 1, name: 'اقتصاد المؤسسة', category: 'نظري', icon: Building2, color: '#13B8A6', bg: 'rgba(19,184,166,0.1)', border: 'rgba(19,184,166,0.3)' },
        { id: 2, name: 'محاسبة عامة', category: 'كمي', icon: Calculator, color: '#F59E42', bg: 'rgba(245,158,66,0.1)', border: 'rgba(245,158,66,0.3)' },
        { id: 3, name: 'مقدمة في العلوم الاقتصادية', category: 'نظري', icon: BookOpen, color: '#13B8A6', bg: 'rgba(19,184,166,0.1)', border: 'rgba(19,184,166,0.3)' },
        { id: 4, name: 'مقدمة في دراسة القانون', category: 'نظري', icon: Scale, color: '#13B8A6', bg: 'rgba(19,184,166,0.1)', border: 'rgba(19,184,166,0.3)' },
        { id: 5, name: 'اقتصاد جزئي 1', category: 'نظري/كمي', icon: TrendingUp, color: '#A78BFA', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.3)' },
        { id: 6, name: 'رياضيات 1', category: 'كمي', icon: Calculator, color: '#F59E42', bg: 'rgba(245,158,66,0.1)', border: 'rgba(245,158,66,0.3)' },
        { id: 7, name: 'منهجية العمل الجامعي', category: 'منهجي', icon: GraduationCap, color: '#F472B6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.3)' },
      ]
    : [
        { id: 1, name: 'Économie d\'entreprise', category: 'Théorique', icon: Building2, color: '#13B8A6', bg: 'rgba(19,184,166,0.1)', border: 'rgba(19,184,166,0.3)' },
        { id: 2, name: 'Comptabilité générale', category: 'Quantitatif', icon: Calculator, color: '#F59E42', bg: 'rgba(245,158,66,0.1)', border: 'rgba(245,158,66,0.3)' },
        { id: 3, name: 'Introduction aux sciences économiques', category: 'Théorique', icon: BookOpen, color: '#13B8A6', bg: 'rgba(19,184,166,0.1)', border: 'rgba(19,184,166,0.3)' },
        { id: 4, name: 'Introduction à l\'étude de droit', category: 'Théorique', icon: Scale, color: '#13B8A6', bg: 'rgba(19,184,166,0.1)', border: 'rgba(19,184,166,0.3)' },
        { id: 5, name: 'Micro-économie 1', category: 'Théorique/Quantitatif', icon: TrendingUp, color: '#A78BFA', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.3)' },
        { id: 6, name: 'Mathématiques 1', category: 'Quantitatif', icon: Calculator, color: '#F59E42', bg: 'rgba(245,158,66,0.1)', border: 'rgba(245,158,66,0.3)' },
        { id: 7, name: 'Méthodologie de travail universitaire', category: 'Méthodologique', icon: GraduationCap, color: '#F472B6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.3)' },
      ]

  // Category legend
  const categories = isArabic
    ? [
        { label: 'نظري', count: 4, color: '#13B8A6' },
        { label: 'كمي', count: 2, color: '#F59E42' },
        { label: 'كمي/نظري', count: 1, color: '#A78BFA' },
        { label: 'منهجي', count: 1, color: '#F472B6' },
      ]
    : [
        { label: 'Théorique', count: 4, color: '#13B8A6' },
        { label: 'Quantitatif', count: 2, color: '#F59E42' },
        { label: 'Théorique/Quantitatif', count: 1, color: '#A78BFA' },
        { label: 'Méthodologique', count: 1, color: '#F472B6' },
      ]

  const note = isArabic
    ? 'سبع وحدات، ثلاثة أصناف. التوازن هو المفتاح: لا تهمل الجانب الكمي، ولا تفرط في النظري، وكن méthodologique.'
    : 'Sept modules, trois familles. L\'équilibre est la clé : ne négligez pas le quantitatif, n\'abusez pas du théorique, soyez méthodologique.'

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        ['.s9-badge', '.s9-heading', '.s9-module-card', '.s9-legend', '.s9-note'],
        { autoAlpha: 0, y: 18 }
      )

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl
        .to('.s9-badge',   { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.45 })
        .to('.s9-heading', { autoAlpha: 1, y: 0, duration: 0.6  }, '-=0.2')
        .to('.s9-module-card', { autoAlpha: 1, scale: 1, y: 0, duration: 0.55, stagger: 0.06 }, '-=0.3')
        .to('.s9-legend',  { autoAlpha: 1, y: 0, duration: 0.5  }, '-=0.4')
        .to('.s9-note',    { autoAlpha: 1, y: 0, duration: 0.5  }, '-=0.2')
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
      <div className="relative z-10 flex items-center justify-between s9-badge" style={{ visibility: 'hidden' }}>
        <PhaseBadge label={isArabic ? 'الخطوة 4 · الوحدات السبع' : 'Étape 4 · Les 7 modules'} variant="teal" />
        <PhaseBadge label={isArabic ? 'S1 اقتصاد' : 'S1 Économie'} variant="orange" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center gap-5 my-auto py-2">

        {/* Heading */}
        <div className="s9-heading" style={{ visibility: 'hidden' }}>
          <PremiumHeading
            title={title}
            subtitle={subtitle}
            align="center"
            lang={language}
            onDark={false}
          />
        </div>

        {/* 7-module grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 s9-grid" role="list">
          {modules.map((module) => (
            <div
              key={module.id}
              className="s9-module-card relative flex flex-col p-5 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{
                visibility: 'hidden',
                background: 'rgba(255,255,255,0.72)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: `1px solid ${module.border}`,
                boxShadow: '0 4px 24px -4px rgba(16,36,58,0.09), 0 1px 4px rgba(16,36,58,0.04)',
                borderRadius: '16px',
              }}
              role="listitem"
            >
              {/* Top color accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[4px]"
                style={{ background: module.color }}
              />

              {/* Left color strip */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ background: module.color }} />

              {/* Module number badge */}
              <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full font-extrabold text-[11px]" style={{ background: module.bg, color: module.color, border: `1px solid ${module.border}` }}>
                0{module.id}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-3" style={{ background: module.bg }}>
                <module.icon size={24} strokeWidth={2} style={{ color: module.color }} />
              </div>

              {/* Module name */}
              <h3 className="font-bold text-base leading-tight mb-1" style={{ color: 'var(--color-primary-navy)' }}>
                {module.name}
              </h3>

              {/* Category tag */}
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full mt-auto" style={{ background: module.bg, color: module.color, border: `1px solid ${module.border}` }}>
                {module.category}
              </span>
            </div>
          ))}
        </div>

        {/* Category legend */}
        <div className="s9-legend flex flex-wrap items-center justify-center gap-3" style={{ visibility: 'hidden' }}>
          {categories.map((cat, idx) => (
            <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}40` }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: cat.color }} />
              <span className="font-bold text-xs" style={{ color: cat.color }}>
                {cat.label}
              </span>
              <span className="font-mono font-extrabold text-xs" style={{ color: 'var(--color-muted)' }}>
                {cat.count}
              </span>
            </div>
          ))}
        </div>

        <AccentLine progress={0.95} color="teal" />

        {/* Note banner */}
        <div className="s9-note flex items-center gap-4 p-4" style={{ visibility: 'hidden', background: 'rgba(255,255,255,0.60)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(203,213,225,0.7)', borderRadius: '10px' }}>
          <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full" style={{ background: 'rgba(167,139,250,0.15)' }}>
            <GraduationCap size={17} style={{ color: '#A78BFA' }} strokeWidth={2.2} />
          </div>
          <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--color-primary-navy)' }}>{note}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex justify-between items-center mt-auto text-xs s9-badge" style={{ color: 'var(--color-muted)', visibility: 'hidden' }}>
        <span>{isArabic ? 'التميز في كل وحدة' : 'L\'excellence dans chaque module'}</span>
        <span className="uppercase tracking-widest font-semibold">{isArabic ? 'شريحة 9 من 10' : 'Slide 09'}</span>
      </div>
    </div>
  )
}