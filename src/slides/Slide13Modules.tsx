import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { PremiumHeading } from '../components/PremiumHeading'
import { PhaseBadge } from '../components/PhaseBadge'
import { AccentLine } from '../components/AccentLine'
import { AmbientBackground } from '../components/AmbientBackground'
import { Building2, Calculator, BookOpen, Scale, TrendingUp, GraduationCap, Award } from 'lucide-react'

interface SlideProps {
  language: 'fr' | 'ar'
}

export function Slide13Modules({ language }: SlideProps) {
  const isArabic = language === 'ar'
  const dir = isArabic ? 'rtl' : 'ltr'
  const containerRef = useRef<HTMLDivElement>(null)

  const title = isArabic
    ? 'الوحدات السبع للفصل الأول'
    : 'Les 7 Modules du Semestre 1'

  const subtitle = isArabic
    ? 'برنامج متكامل ومتوازن لتطوير الكفاءات الأساسية'
    : 'Programme complet et équilibré pour développer les compétences clés'

  // 7 S1 Economics modules with details
  const modules = isArabic
    ? [
        {
          id: 1,
          name: 'اقتصاد المؤسسة',
          code: 'ECO101',
          category: 'نظري',
          categoryType: 'theory',
          icon: Building2,
          color: '#13B8A6',
          bg: 'rgba(19,184,166,0.12)',
          border: 'rgba(19,184,166,0.3)',
          badge: 'أساسي',
          badgeColor: 'teal',
          desc: 'فهم هضم واستراتيجيات المؤسسة والبيئة الاقتصادية',
        },
        {
          id: 2,
          name: 'محاسبة عامة',
          code: 'CPT101',
          category: 'تطبيقي',
          categoryType: 'practice',
          icon: Calculator,
          color: '#F59E42',
          bg: 'rgba(245,158,66,0.12)',
          border: 'rgba(245,158,66,0.3)',
          badge: 'عملي',
          badgeColor: 'orange',
          desc: 'تقنيات التسجيل المحاسبي والعمليات المالية',
        },
        {
          id: 3,
          name: 'مقدمة في العلوم الاقتصادية',
          code: 'ECO102',
          category: 'تحليلي',
          categoryType: 'analysis',
          icon: BookOpen,
          color: '#13B8A6',
          bg: 'rgba(19,184,166,0.12)',
          border: 'rgba(19,184,166,0.3)',
          badge: 'نظري',
          badgeColor: 'teal',
          desc: 'النظريات الاقتصادية والآليات الأساسية',
        },
        {
          id: 4,
          name: 'مقدمة في دراسة القانون',
          code: 'DRT101',
          category: 'تحليلي',
          categoryType: 'analysis',
          icon: Scale,
          color: '#13B8A6',
          bg: 'rgba(19,184,166,0.12)',
          border: 'rgba(19,184,166,0.3)',
          badge: 'قانوني',
          badgeColor: 'teal',
          desc: 'القواعد القانونية الأساسية والنظام القانوني',
        },
        {
          id: 5,
          name: 'اقتصاد جزئي 1',
          code: 'MIC101',
          category: 'تحليلي',
          categoryType: 'analysis',
          icon: TrendingUp,
          color: '#A78BFA',
          bg: 'rgba(167,139,250,0.12)',
          border: 'rgba(167,139,250,0.3)',
          badge: 'مكثف',
          badgeColor: 'purple',
          desc: 'تحليل سلوك المستهلك والمنتج والأسواق',
        },
        {
          id: 6,
          name: 'رياضيات 1',
          code: 'MTH101',
          category: 'تطبيقي',
          categoryType: 'practice',
          icon: Calculator,
          color: '#F59E42',
          bg: 'rgba(245,158,66,0.12)',
          border: 'rgba(245,158,66,0.3)',
          badge: 'كمي',
          badgeColor: 'orange',
          desc: 'الدوال الرياضية والأدوات التحليلية للاقتصاد',
        },
        {
          id: 7,
          name: 'منهجية العمل الجامعي',
          code: 'MTU101',
          category: 'منهجي',
          categoryType: 'method',
          icon: GraduationCap,
          color: '#F472B6',
          bg: 'rgba(244,114,182,0.12)',
          border: 'rgba(244,114,182,0.3)',
          badge: 'منهجية',
          badgeColor: 'pink',
          desc: 'تقنيات البحث والتنظيم والتعبير الأكاديمي',
        },
      ]
    : [
        {
          id: 1,
          name: 'Économie d\'entreprise',
          code: 'ECO101',
          category: 'Théorique',
          categoryType: 'theory',
          icon: Building2,
          color: '#13B8A6',
          bg: 'rgba(19,184,166,0.12)',
          border: 'rgba(19,184,166,0.3)',
          badge: 'Fondamental',
          badgeColor: 'teal',
          desc: 'Compréhension des structures et stratégies d\'entreprise',
        },
        {
          id: 2,
          name: 'Comptabilité générale',
          code: 'CPT101',
          category: 'Pratique',
          categoryType: 'practice',
          icon: Calculator,
          color: '#F59E42',
          bg: 'rgba(245,158,66,0.12)',
          border: 'rgba(245,158,66,0.3)',
          badge: 'Pratique',
          badgeColor: 'orange',
          desc: 'Techniques d\'enregistrement comptable et opérations',
        },
        {
          id: 3,
          name: 'Introduction aux sciences économiques',
          code: 'ECO102',
          category: 'Analyse',
          categoryType: 'analysis',
          icon: BookOpen,
          color: '#13B8A6',
          bg: 'rgba(19,184,166,0.12)',
          border: 'rgba(19,184,166,0.3)',
          badge: 'Théorique',
          badgeColor: 'teal',
          desc: 'Théories économiques et mécanismes fondamentaux',
        },
        {
          id: 4,
          name: 'Introduction à l\'étude de droit',
          code: 'DRT101',
          category: 'Analyse',
          categoryType: 'analysis',
          icon: Scale,
          color: '#13B8A6',
          bg: 'rgba(19,184,166,0.12)',
          border: 'rgba(19,184,166,0.3)',
          badge: 'Juridique',
          badgeColor: 'teal',
          desc: 'Règles juridiques de base et système juridique',
        },
        {
          id: 5,
          name: 'Micro-économie 1',
          code: 'MIC101',
          category: 'Analyse',
          categoryType: 'analysis',
          icon: TrendingUp,
          color: '#A78BFA',
          bg: 'rgba(167,139,250,0.12)',
          border: 'rgba(167,139,250,0.3)',
          badge: 'Intensif',
          badgeColor: 'purple',
          desc: 'Analyse du comportement du consommateur et producteur',
        },
        {
          id: 6,
          name: 'Mathématiques 1',
          code: 'MTH101',
          category: 'Pratique',
          categoryType: 'practice',
          icon: Calculator,
          color: '#F59E42',
          bg: 'rgba(245,158,66,0.12)',
          border: 'rgba(245,158,66,0.3)',
          badge: 'Quantitatif',
          badgeColor: 'orange',
          desc: 'Fonctions mathématiques et outils d\'analyse économique',
        },
        {
          id: 7,
          name: 'Méthodologie de travail universitaire',
          code: 'MTU101',
          category: 'Méthode',
          categoryType: 'method',
          icon: GraduationCap,
          color: '#F472B6',
          bg: 'rgba(244,114,182,0.12)',
          border: 'rgba(244,114,182,0.3)',
          badge: 'Méthode',
          badgeColor: 'pink',
          desc: 'Techniques de recherche, organisation et expression',
        },
      ]

  // Categories overview
  const categories = isArabic
    ? [
        { label: 'تحليل', count: 3, color: '#13B8A6' },
        { label: 'ممارسة', count: 2, color: '#F59E42' },
        { label: 'منهجية', count: 1, color: '#F472B6' },
        { label: 'مكثف', count: 1, color: '#A78BFA' },
      ]
    : [
        { label: 'Analyse', count: 3, color: '#13B8A6' },
        { label: 'Pratique', count: 2, color: '#F59E42' },
        { label: 'Méthode', count: 1, color: '#F472B6' },
        { label: 'Intensif', count: 1, color: '#A78BFA' },
      ]

  const note = isArabic
    ? 'كل وحدة تتطلب نهجاً خاصاً: الممارسة للمواد الكمية، التحليل للمواد النظريات، والمنهجية للنجاح الدائم.'
    : 'Chaque module exige une approche spécifique : Pratique pour le quantitatif, Analyse pour le théorique, Méthode pour le succès durable.'

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        ['.s13-badge', '.s13-heading', '.s13-card', '.s13-categories', '.s13-note'],
        { autoAlpha: 0, y: 18 }
      )

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl
        .to('.s13-badge', { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.45 })
        .to('.s13-heading', { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.2')
        .to('.s13-card', {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'back.out(1.1)',
        }, '-=0.3')
        .to('.s13-categories', { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.3')
        .to('.s13-note', { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.2')
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
      <div className="relative z-10 flex items-center justify-between s13-badge" style={{ visibility: 'hidden' }}>
        <PhaseBadge label={isArabic ? 'برنامج S1 · 7 وحدات' : 'Programme S1 · 7 Modules'} variant="teal" />
        <PhaseBadge label={isArabic ? 'توازن المواد' : 'Équilibre des matières'} variant="orange" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center gap-4 my-auto py-2">

        {/* Heading */}
        <div className="s13-heading" style={{ visibility: 'hidden' }}>
          <PremiumHeading
            title={title}
            subtitle={subtitle}
            align="center"
            lang={language}
            onDark={false}
          />
        </div>

        {/* Modules Grid - Balanced 7 Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 w-full max-w-6xl mx-auto" role="list">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className={`s13-card relative flex flex-col p-4 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl ${
                mod.id === 7 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              style={{
                visibility: 'hidden',
                transform: 'scale(0.95)',
                background: 'rgba(255,255,255,0.78)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: `1px solid ${mod.border}`,
                boxShadow: '0 4px 24px -4px rgba(16,36,58,0.09), 0 1px 4px rgba(16,36,58,0.04)',
                borderRadius: '16px',
              }}
              role="listitem"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-[4px]" style={{ background: mod.color }} />

              {/* Header with Icon, Code, and Micro-badge */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 flex items-center justify-center rounded-xl shrink-0" style={{ background: mod.bg }}>
                    <mod.icon size={18} strokeWidth={2} style={{ color: mod.color }} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold block" style={{ color: 'var(--color-muted)' }}>
                      {mod.code}
                    </span>
                    <span className="font-mono text-xs font-extrabold" style={{ color: mod.color }}>
                      Module 0{mod.id}
                    </span>
                  </div>
                </div>

                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0 uppercase tracking-wider"
                  style={{ background: mod.bg, color: mod.color, border: `1px solid ${mod.border}` }}
                >
                  {mod.badge}
                </span>
              </div>

              {/* Module Title */}
              <h3 className="font-bold text-sm leading-snug mb-2" style={{ color: 'var(--color-primary-navy)' }}>
                {mod.name}
              </h3>

              {/* Description */}
              <p className="text-xs font-medium leading-relaxed mb-3 flex-1" style={{ color: '#64748b' }}>
                {mod.desc}
              </p>

              {/* Footer category badge */}
              <div className="mt-auto pt-2 border-t flex items-center justify-between text-[10px]" style={{ borderColor: 'rgba(16,36,58,0.06)' }}>
                <span className="font-semibold" style={{ color: 'var(--color-muted)' }}>
                  {isArabic ? 'الفئة:' : 'Catégorie :'}
                </span>
                <span className="font-bold px-2 py-0.5 rounded-md" style={{ background: mod.bg, color: mod.color }}>
                  {mod.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Bar */}
        <div className="s13-categories flex flex-wrap items-center justify-center gap-3 mt-1" style={{ visibility: 'hidden' }}>
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}40` }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
              <span style={{ color: cat.color }}>{cat.label}</span>
              <span className="font-mono font-bold text-[10px] opacity-75">({cat.count})</span>
            </div>
          ))}
        </div>

        <AccentLine progress={1} color="teal" />

        {/* Note banner */}
        <div className="s13-note flex items-center gap-4 p-3.5" style={{ visibility: 'hidden', background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(203,213,225,0.7)', borderRadius: '10px' }}>
          <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full" style={{ background: 'rgba(19,184,166,0.15)' }}>
            <Award size={16} style={{ color: 'var(--color-teal)' }} strokeWidth={2.2} />
          </div>
          <p className="text-xs font-medium leading-relaxed" style={{ color: 'var(--color-primary-navy)' }}>{note}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex justify-between items-center mt-auto text-xs s13-badge" style={{ color: 'var(--color-muted)', visibility: 'hidden' }}>
        <span>{isArabic ? '7 وحدات = رؤية شاملة' : '7 modules = vision globale'}</span>
        <span className="uppercase tracking-widest font-semibold">{isArabic ? 'شريحة 13 من 14' : 'Slide 13 / 14'}</span>
      </div>
    </div>
  )
}